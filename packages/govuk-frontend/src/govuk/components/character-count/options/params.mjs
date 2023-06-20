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
    name: 'maxlength',
    type: 'string',
    required: true,
    description:
      'If `maxwords` is set, this is not required. The maximum number of characters. If `maxwords` is provided, the `maxlength` option will be ignored.'
  },
  {
    name: 'maxwords',
    type: 'string',
    required: true,
    description:
      'If `maxlength` is set, this is not required. The maximum number of words. If `maxwords` is provided, the `maxlength` option will be ignored.'
  },
  {
    name: 'threshold',
    type: 'string',
    required: false,
    description:
      'The percentage value of the limit at which point the count message is displayed. If this attribute is set, the count message will be hidden by default.'
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
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the textarea.'
  },
  {
    name: 'spellcheck',
    type: 'boolean',
    required: false,
    description:
      'Optional field to enable or disable the `spellcheck` attribute on the character count.'
  },
  {
    name: 'countMessage',
    type: 'object',
    required: false,
    description: 'Options for the count message.',
    params: [
      {
        name: 'classes',
        type: 'string',
        required: false,
        description: 'Classes to add to the count message.'
      }
    ]
  },
  {
    name: 'textareaDescriptionText',
    type: 'string',
    required: false,
    description:
      'Message made available to assistive technologies to describe that the component accepts only a limited amount of content. It is visible on the page when JavaScript is unavailable. The component will replace the `%{count}` placeholder with the value of the `maxlength` or `maxwords` parameter.'
  },
  {
    name: 'charactersUnderLimitText',
    type: 'object',
    required: false,
    description:
      'Message displayed when the number of characters is under the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of remaining characters. This is a [pluralised list of messages](https://frontend.design-system.service.gov.uk/localise-govuk-frontend).'
  },
  {
    name: 'charactersAtLimitText',
    type: 'string',
    required: false,
    description:
      'Message displayed when the number of characters reaches the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies.'
  },
  {
    name: 'charactersOverLimitText',
    type: 'object',
    required: false,
    description:
      'Message displayed when the number of characters is over the configured maximum, `maxlength`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of characters above the maximum. This is a [pluralised list of messages](https://frontend.design-system.service.gov.uk/localise-govuk-frontend).'
  },
  {
    name: 'wordsUnderLimitText',
    type: 'object',
    required: false,
    description:
      'Message displayed when the number of words is under the configured maximum, `maxwords`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of remaining words. This is a [pluralised list of messages](https://frontend.design-system.service.gov.uk/localise-govuk-frontend).'
  },
  {
    name: 'wordsAtLimitText',
    type: 'string',
    required: false,
    description:
      'Message displayed when the number of words reaches the configured maximum, `maxwords`. This message is displayed visually and through assistive technologies.'
  },
  {
    name: 'wordsOverLimitText',
    type: 'object',
    required: false,
    description:
      'Message displayed when the number of words is over the configured maximum, `maxwords`. This message is displayed visually and through assistive technologies. The component will replace the `%{count}` placeholder with the number of characters above the maximum. This is a [pluralised list of messages](https://frontend.design-system.service.gov.uk/localise-govuk-frontend).'
  }
]
