/**
 * Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentOption[]}
 */
export const params = [
  {
    name: 'summaryText',
    type: 'string',
    required: true,
    description:
      'If `summmaryHtml` is set, this is not required. Text to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored.'
  },
  {
    name: 'summaryHtml',
    type: 'string',
    required: true,
    description:
      'If `summmaryText` is set, this is not required. HTML to use within the summary element (the visible part of the details element). If `summaryHtml` is provided, the `summaryText` option will be ignored.'
  },
  {
    name: 'text',
    type: 'string',
    required: true,
    description:
      'If `html` is set, this is not required. Text to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored.'
  },
  {
    name: 'html',
    type: 'string',
    required: true,
    description:
      'If `text` is set, this is not required. HTML to use within the disclosed part of the details element. If `html` is provided, the `text` option will be ignored.'
  },
  {
    name: 'caller',
    type: 'nunjucks-block',
    required: false,
    description:
      'Not strictly a parameter but [Nunjucks code convention](https://mozilla.github.io/nunjucks/templating.html#call). Using a `call` block enables you to call a macro with all the text inside the tag. This is helpful if you want to pass a lot of content into a macro. To use it, you will need to wrap the entire details component in a `call` block.'
  },
  {
    name: 'id',
    type: 'string',
    required: false,
    description: 'ID to add to the details element.'
  },
  {
    name: 'open',
    type: 'boolean',
    required: false,
    description: 'If `true`, details element will be expanded.'
  },
  {
    name: 'classes',
    type: 'string',
    required: false,
    description: 'Classes to add to the `<details>` element.'
  },
  {
    name: 'attributes',
    type: 'object',
    required: false,
    description:
      'HTML attributes (for example data attributes) to add to the `<details>` element.'
  }
]
