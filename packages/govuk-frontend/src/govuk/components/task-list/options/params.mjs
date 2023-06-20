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
    description: 'Array of tasks within the task list.',
    params: [
      {
        name: 'title',
        type: 'object',
        required: true,
        description: 'Object containing the main title for the task.',
        params: [
          {
            name: 'text',
            type: 'string',
            required: true,
            description:
              'Text to use within the title. If `html` is provided, the `text` argument will be ignored.'
          },
          {
            name: 'html',
            type: 'string',
            required: true,
            description:
              'HTML to use within the title. If `html` is provided, the `text` argument will be ignored.'
          },
          {
            name: 'classes',
            type: 'string',
            required: false,
            description: 'Classes to add to the title wrapper.'
          }
        ]
      },
      {
        name: 'hint',
        type: 'object',
        required: false,
        description: 'Object containing a hint for the task.',
        params: [
          {
            name: 'text',
            type: 'string',
            required: true,
            description:
              'Text to use within the hint. If `html` is provided, the `text` argument will be ignored.'
          },
          {
            name: 'html',
            type: 'string',
            required: true,
            description:
              'HTML to use within the hint. If `html` is provided, the `text` argument will be ignored.'
          }
        ]
      },
      {
        name: 'status',
        type: 'object',
        required: true,
        description: 'Object containing the status of the task.',
        params: [
          {
            name: 'tag',
            type: 'object',
            required: false,
            description:
              'Object containing the options for a tag that acts as the status for the task.',
            params: [
              {
                name: 'text',
                type: 'string',
                required: true,
                description:
                  'Text to use within the tag. If `html` is provided, the `text` argument will be ignored.'
              },
              {
                name: 'html',
                type: 'string',
                required: true,
                description:
                  'HTML to use within the tag. If `html` is provided, the `text` argument will be ignored.'
              },
              {
                name: 'classes',
                type: 'string',
                required: false,
                description: 'Classes to add to the tag.'
              }
            ]
          },
          {
            name: 'text',
            required: false,
            type: 'string',
            description:
              'Text to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored.'
          },
          {
            name: 'html',
            required: false,
            type: 'string',
            description:
              'HTML to use for the status, as an alternative to using a tag. If `html` or `tag` is provided, the `text` argument will be ignored.'
          },
          {
            name: 'classes',
            type: 'string',
            required: false,
            description: 'Classes to add to the status container.'
          }
        ]
      },
      {
        name: 'href',
        type: 'string',
        required: false,
        description:
          'The value of the link’s `href` attribute for the task list item.'
      },
      {
        name: 'classes',
        type: 'string',
        required: false,
        description: 'Classes to add to the item `div`.'
      }
    ]
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the `ul` container for the task list.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the `ul` container for the task list.'
  },
  {
    name: 'idPrefix',
    type: 'string',
    required: false,
    description:
      'String to prefix ID for the tag and hint for each task list item. If `idPrefix` is not passed, fallback to using the `task-list` string instead.'
  }
]