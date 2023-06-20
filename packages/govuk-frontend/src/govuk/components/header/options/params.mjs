/**
 * Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentOption[]}
 */
export const params = [
  {
    name: 'homepageUrl',
    type: 'string',
    required: false,
    description: 'The URL of the homepage. Defaults to `/`'
  },
  {
    name: 'assetsPath',
    type: 'string',
    required: false,
    description:
      'The public path for the assets folder. If not provided it defaults to /assets/images'
  },
  {
    name: 'productName',
    type: 'string',
    required: false,
    description:
      'Product name, used when the product name follows on directly from ‘GOV.UK’. For example, GOV.UK Pay or GOV.UK Design System. In most circumstances, you should use `serviceName`.'
  },
  {
    name: 'serviceName',
    type: 'string',
    required: false,
    description: 'The name of your service, included in the header.'
  },
  {
    name: 'serviceUrl',
    type: 'string',
    required: false,
    description: 'URL for the service name anchor.'
  },
  {
    name: 'navigation',
    type: 'array',
    required: false,
    description: 'An array of navigation item objects.',
    params: [
      {
        name: 'text',
        type: 'string',
        required: true,
        description:
          'Text for the navigation item. If `html` is provided, the `text` option will be ignored.'
      },
      {
        name: 'html',
        type: 'string',
        required: true,
        description:
          'HTML for the navigation item. If `html` is provided, the `text` option will be ignored.'
      },
      {
        name: 'href',
        type: 'string',
        required: false,
        description: 'URL of the navigation item anchor.'
      },
      {
        name: 'active',
        type: 'boolean',
        required: false,
        description: 'Flag to mark the navigation item as active or not.'
      },
      {
        name: 'attributes',
        type: 'object',
        required: false,
        description:
          'HTML attributes (for example data attributes) to add to the navigation item anchor.'
      }
    ]
  },
  {
    name: 'navigationClasses',
    type: 'string',
    required: false,
    description: 'Classes for the navigation section of the header.'
  },
  {
    name: 'navigationLabel',
    type: 'string',
    required: false,
    description:
      'Text for the `aria-label` attribute of the navigation. Defaults to the same value as `menuButtonText`.'
  },
  {
    name: 'menuButtonLabel',
    type: 'string',
    required: false,
    description:
      'Text for the `aria-label` attribute of the button that opens the mobile navigation, if there is a mobile navigation menu.'
  },
  {
    name: 'menuButtonText',
    type: 'string',
    required: false,
    description:
      "Text of the button that opens the mobile navigation menu, if there is a mobile navigation menu. There is no enforced character limit, but there is a limited display space so keep text as short as possible. By default, this is set to 'Menu'."
  },
  {
    name: 'containerClasses',
    type: 'string',
    required: false,
    description:
      'Classes for the container, useful if you want to make the header fixed width.'
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the header container.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the header container.'
  }
]
