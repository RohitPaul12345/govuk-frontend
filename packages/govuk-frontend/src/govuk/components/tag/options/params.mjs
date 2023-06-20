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
      'If `html` is set, this is not required. Text to use within the tag component. If `html` is provided, the `text` option will be ignored.'
  },
  {
    name: 'html',
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the tag component. If `html` is provided, the `text` option will be ignored.'
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the tag.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the tag.'
  }
]
