/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      legend: {
        text: 'What is your address?'
      }
    }
  },
  {
    name: 'styled as xl text',
    data: {
      legend: {
        text: 'What is your address?',
        classes: 'govuk-fieldset__legend--xl'
      }
    }
  },
  {
    name: 'styled as large text',
    data: {
      legend: {
        text: 'What is your address?',
        classes: 'govuk-fieldset__legend--l'
      }
    }
  },
  {
    name: 'styled as medium text',
    data: {
      legend: {
        text: 'What is your address?',
        classes: 'govuk-fieldset__legend--m'
      }
    }
  },
  {
    name: 'styled as small text',
    data: {
      legend: {
        text: 'What is your address?',
        classes: 'govuk-fieldset__legend--s'
      }
    }
  },
  {
    name: 'as page heading xl',
    data: {
      legend: {
        text: 'What is your address?',
        classes: 'govuk-fieldset__legend--xl',
        isPageHeading: true
      }
    }
  },
  {
    name: 'as page heading l',
    data: {
      legend: {
        text: 'What is your address?',
        classes: 'govuk-fieldset__legend--l',
        isPageHeading: true
      }
    }
  },
  {
    name: 'as page heading m',
    data: {
      legend: {
        text: 'What is your address?',
        classes: 'govuk-fieldset__legend--m',
        isPageHeading: true
      }
    }
  },
  {
    name: 'as page heading s',
    data: {
      legend: {
        text: 'What is your address?',
        classes: 'govuk-fieldset__legend--s',
        isPageHeading: true
      }
    }
  },
  {
    name: 'as page heading without class',
    data: {
      legend: {
        text: 'What is your address?',
        isPageHeading: true
      }
    }
  },
  {
    name: 'html fieldset content',
    hidden: true,
    data: {
      legend: {
        text: 'What is your address?'
      },
      html:
        '<div class="my-content">\n' +
        '  <p>This is some content to put inside the fieldset</p>\n' +
        '</div>\n'
    }
  },
  {
    name: 'with describedBy',
    hidden: true,
    data: {
      describedBy: 'some-id',
      legend: {
        text: 'Which option?'
      }
    }
  },
  {
    name: 'html as text',
    hidden: true,
    data: {
      legend: {
        text: 'What is <b>your</b> address?'
      }
    }
  },
  {
    name: 'html',
    hidden: true,
    data: {
      legend: {
        html: 'What is <b>your</b> address?'
      }
    }
  },
  {
    name: 'legend classes',
    hidden: true,
    data: {
      legend: {
        text: 'What is your address?',
        classes: 'my-custom-class'
      }
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      classes: 'app-fieldset--custom-modifier',
      legend: {
        text: 'Which option?'
      }
    }
  },
  {
    name: 'role',
    hidden: true,
    data: {
      role: 'group',
      legend: {
        text: 'Which option?'
      }
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      attributes: {
        'data-attribute': 'value'
      },
      legend: {
        text: 'Which option?'
      }
    }
  }
]
