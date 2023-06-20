/**
 * Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentOption[]}
 */
export const params = [
  {
    name: 'items',
    type: 'array',
    required: false,
    description: 'The array of link objects.',
    params: [
      {
        name: 'number',
        type: 'string',
        required: false,
        description: 'The pagination item text - usually a page number.'
      },
      {
        name: 'visuallyHiddenText',
        type: 'string',
        required: false,
        description:
          'The visually hidden label (for the pagination item) which will be applied to an `aria-label` and announced by screen readers on the pagination item link. Should include page number.'
      },
      {
        name: 'href',
        type: 'string',
        required: true,
        description: "The link's URL."
      },
      {
        name: 'current',
        type: 'boolean',
        required: false,
        description:
          'Set to `true` to indicate the current page the user is on.'
      },
      {
        name: 'ellipsis',
        type: 'boolean',
        required: false,
        description:
          'Use this option if you want to specify an ellipsis at a given point between numbers. If you set this option as `true`, any other options for the item are ignored.'
      },
      {
        name: 'attributes',
        type: 'object',
        required: false,
        description:
          'The HTML attributes (for example, data attributes) you want to add to the anchor.'
      }
    ]
  },
  {
    name: 'previous',
    type: 'object',
    required: false,
    description: 'A link to the previous page, if there is a previous page.',
    params: [
      {
        name: 'text',
        type: 'string',
        required: false,
        description:
          "The link text to the previous page. Defaults to 'Previous'."
      },
      {
        name: 'labelText',
        type: 'string',
        required: false,
        description:
          'The optional label that goes underneath the link to the previous page, providing further context for the user about where the link goes.'
      },
      {
        name: 'href',
        type: 'string',
        required: true,
        description: "The previous page's URL."
      },
      {
        name: 'attributes',
        type: 'object',
        required: false,
        description:
          'The HTML attributes (for example, data attributes) you want to add to the anchor.'
      }
    ]
  },
  {
    name: 'next',
    type: 'object',
    required: false,
    description: 'A link to the next page, if there is a next page.',
    params: [
      {
        name: 'text',
        type: 'string',
        required: false,
        description: "The link text to the next page. Defaults to 'Next'."
      },
      {
        name: 'labelText',
        type: 'string',
        required: false,
        description:
          'The optional label that goes underneath the link to the next page, providing further context for the user about where the link goes.'
      },
      {
        name: 'href',
        type: 'string',
        required: true,
        description: "The next page's URL."
      },
      {
        name: 'attributes',
        type: 'object',
        required: false,
        description:
          'The HTML attributes (for example, data attributes) you want to add to the anchor.'
      }
    ]
  },
  {
    name: 'landmarkLabel',
    type: 'string',
    required: false,
    description:
      "The label for the navigation landmark that wraps the pagination. Defaults to 'results'."
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'The classes you want to add to the pagination `nav` parent.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'The HTML attributes (for example, data attributes) you want to add to the pagination `nav` parent.'
  }
]
