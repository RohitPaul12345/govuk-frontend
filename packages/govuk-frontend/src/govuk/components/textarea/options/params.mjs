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
    description: 'The ID of the textarea.'
  },
  {
    name: 'name',
    type: 'string',
    required: true,
    description:
      'The name of the textarea, which is submitted with the form data.'
  },
  {
    name: 'spellcheck',
    type: 'boolean',
    required: false,
    description:
      'Optional field to enable or disable the `spellcheck` attribute on the textarea.'
  },
  {
    name: 'rows',
    type: 'string',
    required: false,
    description: 'Optional number of textarea rows (default is 5 rows).'
  },
  {
    name: 'value',
    type: 'string',
    required: false,
    description: 'Optional initial value of the textarea.'
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    description: 'If `true`, textarea will be disabled.'
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
    required: true,
    description: 'Options for the label component.',
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
    description: 'Classes to add to the textarea.'
  },
  {
    name: 'autocomplete',
    type: 'string',
    required: false,
    description:
      'Attribute to [identify input purpose](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose.html), for example `street-address`. See [autofill](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill) for full list of attributes that can be used.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the textarea.'
  }
]
