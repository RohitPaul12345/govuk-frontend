/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      text: 'Alpha'
    }
  },
  {
    name: 'grey',
    data: {
      text: 'Grey',
      classes: 'govuk-tag--grey'
    }
  },
  {
    name: 'blue',
    data: {
      text: 'Blue',
      classes: 'govuk-tag--blue'
    }
  },
  {
    name: 'light blue',
    data: {
      text: 'Light blue',
      classes: 'govuk-tag--light-blue'
    }
  },
  {
    name: 'turquoise',
    data: {
      text: 'Turquoise',
      classes: 'govuk-tag--turquoise'
    }
  },
  {
    name: 'green',
    data: {
      text: 'Green',
      classes: 'govuk-tag--green'
    }
  },
  {
    name: 'purple',
    data: {
      text: 'Purple',
      classes: 'govuk-tag--purple'
    }
  },
  {
    name: 'pink',
    data: {
      text: 'Pink',
      classes: 'govuk-tag--pink'
    }
  },
  {
    name: 'red',
    data: {
      text: 'Red',
      classes: 'govuk-tag--red'
    }
  },
  {
    name: 'orange',
    data: {
      text: 'Orange',
      classes: 'govuk-tag--orange'
    }
  },
  {
    name: 'yellow',
    data: {
      text: 'Yellow',
      classes: 'govuk-tag--yellow'
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      text: 'Tag with attributes',
      attributes: {
        'data-test': 'attribute',
        id: 'my-tag'
      }
    }
  },
  {
    name: 'html as text',
    hidden: true,
    data: {
      text: '<span>Alpha</span>'
    }
  },
  {
    name: 'html',
    hidden: true,
    data: {
      html: '<span>Alpha</span>'
    }
  }
]
