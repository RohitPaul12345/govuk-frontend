/**
 * Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentOption[]}
 */
export const params = [
  {
    name: 'items',
    type: 'array',
    required: true,
    description: 'Array of breadcrumbs item objects.',
    params: [
      {
        name: 'text',
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within the breadcrumbs item. If `html` is provided, the `text` option will be ignored.'
      },
      {
        name: 'html',
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within the breadcrumbs item. If `html` is provided, the `text` option will be ignored.'
      },
      {
        name: 'href',
        type: 'string',
        required: false,
        description:
          'Link for the breadcrumbs item. If not specified, breadcrumbs item is a normal list item.'
      },
      {
        name: 'attributes',
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the individual crumb.'
      }
    ]
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the breadcrumbs container.'
  },
  {
    name: 'collapseOnMobile',
    type: 'boolean',
    required: false,
    description:
      'When true, the breadcrumbs will collapse to the first and last item only on tablet breakpoint and below.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the breadcrumbs container.'
  }
]
