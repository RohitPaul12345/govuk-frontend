/**
 * Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentOption[]}
 */
export const params = [
  {
    name: 'describedBy',
    type: 'string',
    required: false,
    description:
      'One or more element IDs to add to the input `aria-describedby` attribute without a fieldset, used to provide additional descriptive information for screenreader users.'
  },
  {
    name: 'fieldset',
    type: 'object',
    required: false,
    description: 'Options for the fieldset component (for example legend).',
    isComponent: true
  },
  {
    name: 'hint',
    type: 'object',
    required: false,
    description: 'Options for the hint component (for example text).',
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
    name: 'idPrefix',
    type: 'string',
    required: false,
    description:
      'String to prefix id for each checkbox item if no id is specified on each item. If not passed, fall back to using the name option instead.'
  },
  {
    name: 'name',
    type: 'string',
    required: true,
    description: 'Name attribute for all checkbox items.'
  },
  {
    name: 'items',
    type: 'array',
    required: true,
    description: 'Array of checkbox items objects.',
    params: [
      {
        name: 'text',
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within each checkbox item label. If `html` is provided, the `text` option will be ignored.'
      },
      {
        name: 'html',
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within each checkbox item label. If `html` is provided, the `text` option will be ignored.'
      },
      {
        name: 'id',
        type: 'string',
        required: false,
        description:
          'Specific ID attribute for the checkbox item. If omitted, then component global `idPrefix` option will be applied.'
      },
      {
        name: 'name',
        type: 'string',
        required: false,
        description:
          'Specific name for the checkbox item. If omitted, then component global `name` string will be applied.'
      },
      {
        name: 'value',
        type: 'string',
        required: true,
        description: 'Value for the checkbox input.'
      },
      {
        name: 'label',
        type: 'object',
        required: false,
        description:
          'Provide attributes and classes to each checkbox item label.',
        isComponent: true
      },
      {
        name: 'hint',
        type: 'object',
        required: false,
        description: 'Provide hint to each checkbox item.',
        isComponent: true
      },
      {
        name: 'divider',
        type: 'string',
        required: false,
        description:
          "Divider text to separate checkbox items, for example the text 'or'."
      },
      {
        name: 'checked',
        type: 'boolean',
        required: false,
        description:
          'Whether the checkbox should be checked when the page loads. Takes precedence over the top-level `values` option.'
      },
      {
        name: 'conditional',
        type: 'object',
        required: false,
        description:
          'Provide additional content to reveal when the checkbox is checked.',
        params: [
          {
            name: 'html',
            type: 'string',
            description: 'The HTML to reveal when the checkbox is checked'
          }
        ]
      },
      {
        name: 'behaviour',
        type: 'string',
        required: false,
        description:
          "If set to `exclusive`, implements a 'None of these' type behaviour via JavaScript when checkboxes are clicked."
      },
      {
        name: 'disabled',
        type: 'boolean',
        required: false,
        description: 'If `true`, checkbox will be disabled.'
      },
      {
        name: 'attributes',
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the checkbox input tag.'
      }
    ]
  },
  {
    name: 'values',
    type: 'array',
    required: false,
    description:
      'Array of values for checkboxes which should be checked when the page loads. Use this as an alternative to setting the `checked` option on each individual item.'
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the checkboxes container.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the anchor tag.'
  }
]
