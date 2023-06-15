/**
 * Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentOption[]}
 */
export const params = [
  {
    name: 'rows',
    type: 'array',
    required: true,
    description: 'Array of row item objects.',
    params: [
      {
        name: 'classes',
        type: 'string',
        required: false,
        description: 'Classes to add to the row `div`.'
      },
      {
        name: 'key.text',
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within the each key. If `html` is provided, the `text` option will be ignored.'
      },
      {
        name: 'key.html',
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within the each key. If `html` is provided, the `text` option will be ignored.'
      },
      {
        name: 'key.classes',
        type: 'string',
        required: false,
        description: 'Classes to add to the key wrapper.'
      },
      {
        name: 'value.text',
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within the each value. If `html` is provided, the `text` option will be ignored.'
      },
      {
        name: 'value.html',
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within the each value. If `html` is provided, the `text` option will be ignored.'
      },
      {
        name: 'value.classes',
        type: 'string',
        required: false,
        description: 'Classes to add to the value wrapper.'
      },
      {
        name: 'actions.classes',
        type: 'string',
        required: false,
        description: 'Classes to add to the actions wrapper.'
      },
      {
        name: 'actions.items',
        type: 'array',
        required: false,
        description: 'Array of action item objects.',
        params: [
          {
            name: 'href',
            type: 'string',
            required: true,
            description:
              "The value of the link's `href` attribute for an action item."
          },
          {
            name: 'text',
            type: 'string',
            required: true,
            description:
              'If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored.'
          },
          {
            name: 'html',
            type: 'string',
            required: true,
            description:
              'If `text` is set, this is not required. HTML to use within the each action item. If `html` is provided, the `text` option will be ignored.'
          },
          {
            name: 'visuallyHiddenText',
            type: 'string',
            required: false,
            description:
              'Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios.'
          },
          {
            name: 'classes',
            type: 'string',
            required: false,
            description: 'Classes to add to the action item.'
          },
          {
            name: 'attributes',
            type: 'object',
            required: false,
            description:
              'HTML attributes (for example data attributes) to add to the action item.'
          }
        ]
      }
    ]
  },
  {
    name: 'card',
    type: 'object',
    required: false,
    description:
      'Options for the summary card. If any of these options are present, a summary card will wrap around the summary list.',
    params: [
      {
        name: 'title',
        type: 'object',
        required: false,
        description: 'Data for the summary card header.',
        params: [
          {
            name: 'text',
            type: 'string',
            required: false,
            description:
              'Text to use within the each title. If `html` is provided, the `text` option will be ignored.'
          },
          {
            name: 'html',
            type: 'string',
            required: false,
            description:
              'Text to use within the each title. If `html` is provided, the `text` option will be ignored.'
          },
          {
            name: 'headingLevel',
            type: 'integer',
            required: false,
            description: 'Heading level, from `1` to `6`. Default is `2`.'
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
        name: 'actions',
        type: 'object',
        required: false,
        description: 'Data for the summary card actions',
        params: [
          {
            name: 'items',
            type: 'array',
            required: false,
            description: 'Array of action item objects.',
            params: [
              {
                name: 'href',
                type: 'string',
                required: true,
                description:
                  "The value of the link's `href` attribute for an action item."
              },
              {
                name: 'text',
                type: 'string',
                required: true,
                description:
                  'If `html` is set, this is not required. Text to use within each action item. If `html` is provided, the `text` option will be ignored.'
              },
              {
                name: 'html',
                type: 'string',
                required: true,
                description:
                  'If `text` is set, this is not required. HTML to use within the each action item. If `html` is provided, the `text` option will be ignored.'
              },
              {
                name: 'visuallyHiddenText',
                type: 'string',
                required: false,
                description:
                  'Actions rely on context from the surrounding content so may require additional accessible text. Text supplied to this option is appended to the end. Use `html` for more complicated scenarios.'
              },
              {
                name: 'classes',
                type: 'string',
                required: false,
                description: 'Classes to add to the action item.'
              },
              {
                name: 'attributes',
                type: 'object',
                required: false,
                description:
                  'HTML attributes (for example data attributes) to add to the action item.'
              }
            ]
          },
          {
            name: 'classes',
            type: 'string',
            required: false,
            description: 'Classes to add to the actions wrapper.'
          }
        ]
      },
      {
        name: 'classes',
        type: 'string',
        required: false,
        description: 'Classes to add to the container.'
      },
      {
        name: 'attributes',
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the container.'
      }
    ]
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the container.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the container.'
  }
]
