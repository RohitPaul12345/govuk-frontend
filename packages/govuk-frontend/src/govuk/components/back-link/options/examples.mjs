/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      href: '#'
    }
  },
  {
    name: 'with custom text',
    data: {
      href: '#',
      text: 'Back to home'
    }
  },
  {
    name: 'with inverted colours',
    previewLayoutModifiers: ['inverse'],
    data: {
      classes: 'govuk-back-link--inverse',
      href: '#'
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      classes: 'app-back-link--custom-class',
      href: '#'
    }
  },
  {
    name: 'html as text',
    hidden: true,
    data: {
      text: '<b>Home</b>',
      href: '#'
    }
  },
  {
    name: 'html',
    hidden: true,
    data: {
      html: '<b>Back</b>',
      href: '#'
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      href: '#',
      html: '<b>Back to home</b>',
      attributes: {
        'data-test': 'attribute',
        'aria-label': 'Back to home'
      }
    }
  }
]
