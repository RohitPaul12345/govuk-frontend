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
      'One or more element IDs to add to the `aria-describedby` attribute, used to provide additional descriptive information for screenreader users.'
  },
  {
    name: 'legend',
    type: 'object',
    required: false,
    description: 'Options for the legend',
    params: [
      {
        name: 'text',
        type: 'string',
        required: true,
        description:
          'If `html` is set, this is not required. Text to use within the legend. If `html` is provided, the `text` option will be ignored.'
      },
      {
        name: 'html',
        type: 'string',
        required: true,
        description:
          'If `text` is set, this is not required. HTML to use within the legend. If `html` is provided, the `text` option will be ignored.'
      },
      {
        name: 'classes',
        type: 'string',
        required: false,
        description: 'Classes to add to the legend.'
      },
      {
        name: 'isPageHeading',
        type: 'boolean',
        required: false,
        description: 'Whether the legend also acts as the heading for the page.'
      }
    ]
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the fieldset container.'
  },
  {
    name: 'role',
    type: 'string',
    required: false,
    description: 'Optional ARIA role attribute.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the fieldset container.'
  },
  {
    name: 'html',
    type: 'string',
    required: false,
    description: 'HTML to use/render within the fieldset element.'
  },
  {
    name: 'caller',
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire fieldset component in a `call` block.'
  }
]
