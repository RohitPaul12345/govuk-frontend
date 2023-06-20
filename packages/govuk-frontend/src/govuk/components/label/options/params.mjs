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
      'If `html` is set, this is not required. Text to use within the label. If `html` is provided, the `text` option will be ignored.'
  },
  {
    name: 'html',
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the label. If `html` is provided, the `text` option will be ignored.'
  },
  {
    name: 'for',
    type: 'string',
    required: false,
    description:
      'The value of the `for` attribute, the ID of the input the label is associated with.'
  },
  {
    name: 'isPageHeading',
    type: 'boolean',
    required: false,
    description: 'Whether the label also acts as the heading for the page.'
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the label tag.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the label tag.'
  }
]
