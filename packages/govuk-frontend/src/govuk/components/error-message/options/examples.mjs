/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      text: 'Error message about full name goes here'
    }
  },
  {
    name: 'translated',
    data: {
      visuallyHiddenText: '',
      html: '<span class="govuk-visually-hidden">Gwall:</span> Neges gwall am yr enw llawn yn mynd yma'
    }
  },
  {
    name: 'id',
    hidden: true,
    data: {
      id: 'my-error-message-id',
      text: 'This is an error message'
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      classes: 'custom-class',
      text: 'This is an error message'
    }
  },
  {
    name: 'html as text',
    hidden: true,
    data: {
      text: 'Unexpected > in body'
    }
  },
  {
    name: 'html',
    hidden: true,
    data: {
      html: 'Unexpected <b>bold text</b> in body copy'
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      text: 'This is an error message',
      attributes: {
        'data-test': 'attribute',
        id: 'my-error-message'
      }
    }
  },
  {
    name: 'with visually hidden text',
    hidden: true,
    data: {
      text: 'Rhowch eich enw llawn',
      visuallyHiddenText: 'Gwall'
    }
  },
  {
    name: 'visually hidden text removed',
    hidden: true,
    data: {
      text: 'There is an error on line 42',
      visuallyHiddenText: ''
    }
  }
]
