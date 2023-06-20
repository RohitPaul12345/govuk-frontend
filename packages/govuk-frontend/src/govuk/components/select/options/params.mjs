/**
 * Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentOption[]}
 */
export const params = [
  {
    name: 'id',
    type: 'string',
    required: true,
    description: 'ID for each select box.'
  },
  {
    name: 'name',
    type: 'string',
    required: true,
    description: 'Name property for the select.'
  },
  {
    name: 'items',
    type: 'array',
    required: true,
    description: 'Array of option items for the select.',
    params: [
      {
        name: 'value',
        type: 'string',
        required: false,
        description:
          'Value for the option. If this is omitted, the value is taken from the text content of the option element.'
      },
      {
        name: 'text',
        type: 'string',
        required: true,
        description: 'Text for the option item.'
      },
      {
        name: 'selected',
        type: 'boolean',
        required: false,
        description:
          'Whether the option should be selected when the page loads. Takes precedence over the top-level `value` option.'
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'Sets the option item as disabled.'
      },
      {
        name: 'attributes',
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the option.'
      }
    ]
  },
  {
    name: 'value',
    type: 'string',
    required: false,
    description:
      'Value for the option which should be selected. Use this as an alternative to setting the `selected` option on each individual item.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description:
      'If `true`, select box will be disabled. Use the `disabled` option on each individual item to only disable certain options.'
  },
  {
    name: 'describedBy',
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.'
  },
  {
    name: 'label',
    type: 'object',
    required: false,
    description:
      'Label text or HTML by specifying value for either text or html keys.',
    isComponent: true
  },
  {
    name: 'hint',
    type: 'object',
    required: false,
    description: 'Options for the hint component.',
    isComponent: true
  },
  {
    name: 'errorMessage',
    type: 'object',
    required: false,
    description:
      'Options for the error message component. The error message component will not display if you use a falsy value for `errorMessage`, for example `false` or `null`.',
    isComponent: true
  },
  {
    name: 'formGroup',
    type: 'object',
    required: false,
    description: 'Options for the form-group wrapper.',
    params: [
      {
        name: 'classes',
        type: 'string',
        required: false,
        description:
          'Classes to add to the form group (for example to show error state for the whole group).'
      }
    ]
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the select.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the select.'
  }
]
