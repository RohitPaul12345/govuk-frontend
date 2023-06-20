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
      'If `html` is set, this is not required. Text to use within the phase banner. If `html` is provided, the `text` option will be ignored.'
  },
  {
    name: 'html',
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the phase banner. If `html` is provided, the `text` option will be ignored.'
  },
  {
    name: 'tag',
    type: 'object',
    required: true,
    description: 'Options for the tag component.',
    isComponent: true
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the phase banner container.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the phase banner container.'
  }
]
