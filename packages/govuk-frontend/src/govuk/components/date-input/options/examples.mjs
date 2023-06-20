/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      id: 'dob'
    }
  },
  {
    name: 'complete question',
    data: {
      id: 'dob',
      namePrefix: 'dob',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      items: [
        {
          name: 'day',
          classes: 'govuk-input--width-2'
        },
        {
          name: 'month',
          classes: 'govuk-input--width-2'
        },
        {
          name: 'year',
          classes: 'govuk-input--width-4'
        }
      ]
    }
  },
  {
    name: 'with errors only',
    data: {
      id: 'dob-errors',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      errorMessage: {
        text: 'Error message goes here'
      },
      items: [
        {
          name: 'day',
          classes: 'govuk-input--width-2 govuk-input--error'
        },
        {
          name: 'month',
          classes: 'govuk-input--width-2 govuk-input--error'
        },
        {
          name: 'year',
          classes: 'govuk-input--width-4 govuk-input--error'
        }
      ]
    }
  },
  {
    name: 'with errors and hint',
    data: {
      id: 'dob-errors',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Error message goes here'
      },
      items: [
        {
          name: 'day',
          classes: 'govuk-input--width-2 govuk-input--error'
        },
        {
          name: 'month',
          classes: 'govuk-input--width-2 govuk-input--error'
        },
        {
          name: 'year',
          classes: 'govuk-input--width-4 govuk-input--error'
        }
      ]
    }
  },
  {
    name: 'with error on day input',
    data: {
      id: 'dob-day-error',
      namePrefix: 'dob-day-error',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Error message goes here'
      },
      items: [
        {
          name: 'day',
          classes: 'govuk-input--width-2 govuk-input--error'
        },
        {
          name: 'month',
          classes: 'govuk-input--width-2'
        },
        {
          name: 'year',
          classes: 'govuk-input--width-4'
        }
      ]
    }
  },
  {
    name: 'with error on month input',
    data: {
      id: 'dob-month-error',
      namePrefix: 'dob-month-error',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Error message goes here'
      },
      items: [
        {
          name: 'day',
          classes: 'govuk-input--width-2'
        },
        {
          name: 'month',
          classes: 'govuk-input--width-2 govuk-input--error'
        },
        {
          name: 'year',
          classes: 'govuk-input--width-4'
        }
      ]
    }
  },
  {
    name: 'with error on year input',
    data: {
      id: 'dob-year-error',
      namePrefix: 'dob-year-error',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      errorMessage: {
        text: 'Error message goes here'
      },
      items: [
        {
          name: 'day',
          classes: 'govuk-input--width-2'
        },
        {
          name: 'month',
          classes: 'govuk-input--width-2'
        },
        {
          name: 'year',
          classes: 'govuk-input--width-4 govuk-input--error'
        }
      ]
    }
  },
  {
    name: 'with default items',
    data: {
      id: 'dob',
      namePrefix: 'dob',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      }
    }
  },
  {
    name: 'with optional form-group classes',
    data: {
      id: 'dob',
      namePrefix: 'dob',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      formGroup: {
        classes: 'extra-class'
      }
    }
  },
  {
    name: 'with autocomplete values',
    data: {
      id: 'dob-with-autocomplete-attribute',
      namePrefix: 'dob-with-autocomplete',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      items: [
        {
          name: 'day',
          classes: 'govuk-input--width-2',
          autocomplete: 'bday-day'
        },
        {
          name: 'month',
          classes: 'govuk-input--width-2',
          autocomplete: 'bday-month'
        },
        {
          name: 'year',
          classes: 'govuk-input--width-4',
          autocomplete: 'bday-year'
        }
      ]
    }
  },
  {
    name: 'with input attributes',
    data: {
      id: 'dob-with-input-attributes',
      namePrefix: 'dob-with-input-attributes',
      fieldset: {
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      },
      items: [
        {
          name: 'day',
          classes: 'govuk-input--width-2',
          attributes: {
            'data-example-day': 'day'
          }
        },
        {
          name: 'month',
          classes: 'govuk-input--width-2',
          attributes: {
            'data-example-month': 'month'
          }
        },
        {
          name: 'year',
          classes: 'govuk-input--width-4',
          attributes: {
            'data-example-year': 'year'
          }
        }
      ]
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      id: 'with-classes',
      classes: 'app-date-input--custom-modifier'
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      id: 'with-attributes',
      attributes: {
        'data-attribute': 'my data value'
      }
    }
  },
  {
    name: 'with empty items',
    hidden: true,
    data: {
      id: 'with-empty-items',
      items: []
    }
  },
  {
    name: 'custom pattern',
    hidden: true,
    data: {
      id: 'with-custom-pattern',
      items: [
        {
          name: 'day',
          pattern: '[0-8]*'
        }
      ]
    }
  },
  {
    name: 'custom inputmode',
    hidden: true,
    data: {
      id: 'with-custom-inputmode',
      items: [
        {
          name: 'day',
          pattern: '[0-9X]*',
          inputmode: 'text'
        }
      ]
    }
  },
  {
    name: 'with nested name',
    hidden: true,
    data: {
      id: 'with-nested-name',
      items: [
        {
          name: 'day[dd]'
        },
        {
          name: 'month[mm]'
        },
        {
          name: 'year[yyyy]'
        }
      ]
    }
  },
  {
    name: 'with id on items',
    hidden: true,
    data: {
      id: 'with-item-id',
      items: [
        {
          id: 'day',
          name: 'day'
        },
        {
          id: 'month',
          name: 'month'
        },
        {
          id: 'year',
          name: 'year'
        }
      ]
    }
  },
  {
    name: 'suffixed id',
    hidden: true,
    data: {
      id: 'my-date-input',
      items: [
        {
          name: 'day'
        },
        {
          name: 'month'
        },
        {
          name: 'year'
        }
      ]
    }
  },
  {
    name: 'with values',
    hidden: true,
    data: {
      id: 'with-values',
      items: [
        {
          id: 'day',
          name: 'day'
        },
        {
          id: 'month',
          name: 'month'
        },
        {
          id: 'year',
          name: 'year',
          value: 2018
        }
      ]
    }
  },
  {
    name: 'with hint and describedBy',
    hidden: true,
    data: {
      id: 'dob-errors',
      fieldset: {
        describedBy: 'some-id',
        legend: {
          text: 'What is your date of birth?'
        }
      },
      hint: {
        text: 'For example, 31 3 1980'
      }
    }
  },
  {
    name: 'with error and describedBy',
    hidden: true,
    data: {
      id: 'dob-errors',
      fieldset: {
        describedBy: 'some-id',
        legend: {
          text: 'What is your date of birth?'
        }
      },
      errorMessage: {
        text: 'Error message goes here'
      }
    }
  },
  {
    name: 'fieldset html',
    hidden: true,
    data: {
      id: 'with-fieldset-html',
      fieldset: {
        legend: {
          html: 'What is your <b>date of birth</b>?'
        }
      }
    }
  },
  {
    name: 'items with classes',
    hidden: true,
    data: {
      id: 'with-item-classes',
      items: [
        {
          name: 'day',
          classes: 'app-date-input__day'
        },
        {
          name: 'month',
          classes: 'app-date-input__month'
        },
        {
          name: 'year',
          classes: 'app-date-input__year'
        }
      ]
    }
  },
  {
    name: 'items without classes',
    hidden: true,
    data: {
      id: 'without-item-classes',
      items: [
        {
          name: 'day'
        },
        {
          name: 'month'
        },
        {
          name: 'year'
        }
      ]
    }
  }
]
