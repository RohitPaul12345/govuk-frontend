/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      text: 'National Insurance number'
    }
  },
  {
    name: 'with bold text',
    data: {
      classes: 'govuk-label--s',
      text: 'National Insurance number'
    }
  },
  {
    name: 'styled as xl text',
    data: {
      text: 'National Insurance number',
      classes: 'govuk-label--xl'
    }
  },
  {
    name: 'styled as large text',
    data: {
      text: 'National Insurance number',
      classes: 'govuk-label--l'
    }
  },
  {
    name: 'styled as medium text',
    data: {
      text: 'National Insurance number',
      classes: 'govuk-label--m'
    }
  },
  {
    name: 'styled as small text',
    data: {
      text: 'National Insurance number',
      classes: 'govuk-label--s'
    }
  },
  {
    name: 'as page heading xl',
    data: {
      text: 'National Insurance number',
      classes: 'govuk-label--xl',
      isPageHeading: true
    }
  },
  {
    name: 'as page heading l',
    data: {
      text: 'National Insurance number',
      classes: 'govuk-label--l',
      isPageHeading: true
    }
  },
  {
    name: 'as page heading m',
    data: {
      text: 'National Insurance number',
      classes: 'govuk-label--m',
      isPageHeading: true
    }
  },
  {
    name: 'as page heading s',
    data: {
      text: 'National Insurance number',
      classes: 'govuk-label--s',
      isPageHeading: true
    }
  },
  {
    name: 'as page heading without class',
    data: {
      text: 'National Insurance number',
      isPageHeading: true
    }
  },
  {
    name: 'empty',
    hidden: true,
    data: {}
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      text: 'National Insurance number',
      classes: 'extra-class one-more-class'
    }
  },
  {
    name: 'html as text',
    hidden: true,
    data: {
      text: 'National Insurance number, <em>NINO</em>'
    }
  },
  {
    name: 'html',
    hidden: true,
    data: {
      html: 'National Insurance number <em>NINO</em>'
    }
  },
  {
    name: 'for',
    hidden: true,
    data: {
      for: '#dummy-input',
      text: 'National Insurance number'
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      text: 'National Insurance number',
      attributes: {
        'first-attribute': 'foo',
        'second-attribute': 'bar'
      }
    }
  }
]
