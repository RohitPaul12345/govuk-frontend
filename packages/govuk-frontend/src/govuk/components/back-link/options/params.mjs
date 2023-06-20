/**
 * Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentOption[]}
 */
export const params = [
  {
    name: 'text',
    type: 'string',
    required: false,
    description:
      "Text to use within the back link component. If `html` is provided, the `text` option will be ignored. Defaults to 'Back'."
  },
  {
    name: 'html',
    type: 'string',
    required: false,
    description:
      "HTML to use within the back link component. If `html` is provided, the `text` option will be ignored. Defaults to 'Back'."
  },
  {
    name: 'href',
    type: 'string',
    required: true,
    description: "The value of the link's `href` attribute."
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the anchor tag.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the anchor tag.'
  }
]
