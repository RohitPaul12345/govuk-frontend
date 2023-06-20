/**
 * Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentOption[]}
 */
export const params = [
  {
    name: 'text',
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the error message. If `html` is provided, the `text` option will be ignored.'
  },
  {
    name: 'html',
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the error message. If `html` is provided, the `text` option will be ignored.'
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'ID attribute to add to the error message span tag.'
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the error message span tag.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the error message span tag.'
  },
  {
    name: 'visuallyHiddenText',
    type: 'string',
    required: false,
    description:
      "A visually hidden prefix used before the error message. Defaults to 'Error'."
  }
]
