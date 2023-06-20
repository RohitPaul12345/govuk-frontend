/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      text: 'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.'
    }
  },
  {
    name: 'with html',
    data: {
      html:
        '<p class="govuk-body">It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.</p>\n' +
        '<div class="govuk-warning-text">\n' +
        '  <span class="govuk-warning-text__icon" aria-hidden="true">!</span>\n' +
        '  <strong class="govuk-warning-text__text">\n' +
        '    <span class="govuk-warning-text__assistive">Warning</span>\n' +
        '    You can be fined up to £5,000 if you don’t register.\n' +
        '  </strong>\n' +
        '</div>\n' +
        '<p class="govuk-body">It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.</p>\n'
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      classes: 'app-inset-text--custom-modifier',
      text: 'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.'
    }
  },
  {
    name: 'id',
    hidden: true,
    data: {
      id: 'my-inset-text',
      text: 'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.'
    }
  },
  {
    name: 'html as text',
    hidden: true,
    data: {
      text: 'It can take <b>up to 8 weeks</b> to register a lasting power of attorney if there are no mistakes in the application.'
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      text: 'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.',
      attributes: {
        'data-attribute': 'my data value'
      }
    }
  }
]
