/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      titleHtml: 'Application complete',
      text: 'Your reference number: HDJ2123F'
    }
  },
  {
    name: 'custom heading level',
    data: {
      titleText: 'Application complete',
      headingLevel: 2,
      text: 'Your reference number: HDJ2123F'
    }
  },
  {
    name: 'title html as text',
    hidden: true,
    data: {
      titleText: 'Application <strong>not</strong> complete',
      text: 'Please complete form 1'
    }
  },
  {
    name: 'title html',
    hidden: true,
    data: {
      titleHtml: 'Application <strong>not</strong> complete',
      html: 'Please complete <strong>form 1</strong>'
    }
  },
  {
    name: 'body html as text',
    hidden: true,
    data: {
      titleText: 'Application complete',
      text: 'Your reference number<br><strong>HDJ2123F</strong>'
    }
  },
  {
    name: 'body html',
    hidden: true,
    data: {
      titleText: 'Application complete',
      html: 'Your reference number<br><strong>HDJ2123F</strong>'
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      titleText: 'Application complete',
      text: 'Your reference number is HDJ2123F',
      classes: 'extra-class one-more-class'
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      titleText: 'Application complete',
      text: 'Your reference number is HDJ2123F',
      attributes: {
        'first-attribute': 'foo',
        'second-attribute': 'bar'
      }
    }
  },
  {
    name: 'title with no body text',
    hidden: true,
    data: {
      titleText: 'Application complete'
    }
  }
]
