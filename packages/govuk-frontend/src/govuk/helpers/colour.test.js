const { compileSassString } = require('govuk-frontend-helpers/tests')
const { outdent } = require('outdent')
const { sassNull } = require('sass-embedded')

// Create a mock warn function that we can use to override the native @warn
// function, that we can make assertions about post-render.
const mockWarnFunction = jest.fn()
  .mockReturnValue(sassNull)

const sassConfig = {
  logger: {
    warn: mockWarnFunction
  }
}

describe('@function govuk-colour', () => {
  let sassBootstrap = ''

  beforeEach(() => {
    sassBootstrap = `
      $govuk-colours: (
        "red": #ff0000,
        "green": #00ff00,
        "blue": #0000ff
      );

      @import "helpers/colour";
    `
  })

  it('returns a colour from the colour palette', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        color: govuk-colour('red');
      }
    `

    await expect(compileSassString(sass, sassConfig))
      .resolves
      .toMatchObject({
        css: outdent`
          .foo {
            color: #ff0000;
          }
        `
      })
  })

  it('works with unquoted strings', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        color: govuk-colour(red);
      }
    `

    await expect(compileSassString(sass, sassConfig))
      .resolves
      .toMatchObject({
        css: outdent`
          .foo {
            color: #ff0000;
          }
        `
      })
  })

  it('throws an error if a non-existent colour is requested', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        color: govuk-colour('hooloovoo');
      }
    `

    await expect(compileSassString(sass, sassConfig))
      .rejects
      .toThrow(
        'Unknown colour `hooloovoo`'
      )
  })

  it('throws a deprecation warning if the $legacy parameter is used', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        color: govuk-colour('red', $legacy: 'blue');
      }
    `

    await compileSassString(sass, sassConfig)

    // Expect our mocked @warn function to have been called once with a single
    // argument, which should be the deprecation notice
    expect(mockWarnFunction.mock.calls[0])
      .toEqual(expect.arrayContaining([
        'The `$legacy` parameter of `govuk-colour` is deprecated and is ' +
        'non-operational. It will be removed in the next major version. To ' +
        'silence this warning, update $govuk-suppressed-warnings with key: ' +
        '"legacy-colour-param"'
      ]))
  })
})

describe('@function govuk-organisation-colour', () => {
  const sassBootstrap = `
    $govuk-colours-organisations: (
      'floo-network-authority': (
        colour: #EC22FF,
        colour-websafe: #9A00A8
      ),
      'broom-regulatory-control': (
        colour: #A81223
      )
    );

    @import "helpers/colour";
  `

  it('returns the websafe colour for a given organisation by default', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        color: govuk-organisation-colour('floo-network-authority');
      }
    `

    await expect(compileSassString(sass, sassConfig))
      .resolves
      .toMatchObject({
        css: outdent`
          .foo {
            color: #9A00A8;
          }
        `
      })
  })

  it('falls back to the default colour if a websafe colour is not explicitly defined', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        color: govuk-organisation-colour('broom-regulatory-control');
      }
    `

    await expect(compileSassString(sass, sassConfig))
      .resolves
      .toMatchObject({
        css: outdent`
          .foo {
            color: #A81223;
          }
        `
      })
  })

  it('can be overridden to return the non-websafe colour', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        border-color: govuk-organisation-colour('floo-network-authority', $websafe: false);
      }
    `

    await expect(compileSassString(sass, sassConfig))
      .resolves
      .toMatchObject({
        css: outdent`
          .foo {
            border-color: #EC22FF;
          }
        `
      })
  })

  it('throws an error if a non-existent organisation is requested', async () => {
    const sass = `
      ${sassBootstrap}

      .foo {
        color: govuk-organisation-colour('muggle-born-registration-commission');
      }
    `

    await expect(compileSassString(sass, sassConfig))
      .rejects
      .toThrow(
        'Unknown organisation `muggle-born-registration-commission`'
      )
  })
})
