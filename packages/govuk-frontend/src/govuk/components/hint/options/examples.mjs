/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      text:
        "It's on your National Insurance card, benefit letter, payslip or P60.\n" +
        "For example, 'QQ 12 34 56 C'.\n"
    }
  },
  {
    name: 'with html',
    data: {
      html:
        'It\'s on your National Insurance card, benefit letter, payslip or <a class="govuk-link" href="#">P60</a>.\n' +
        "For example, 'QQ 12 34 56 C'.\n"
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      id: 'example-hint',
      classes: 'app-hint--custom-modifier',
      text: "It's on your National Insurance card, benefit letter, payslip or P60."
    }
  },
  {
    name: 'id',
    hidden: true,
    data: {
      id: 'my-hint',
      text: "It's on your National Insurance card, benefit letter, payslip or P60."
    }
  },
  {
    name: 'html as text',
    hidden: true,
    data: {
      text: 'Unexpected <strong>bold text</strong> in body'
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      text: "It's on your National Insurance card, benefit letter, payslip or P60.",
      attributes: {
        'data-attribute': 'my data value'
      }
    }
  }
]
