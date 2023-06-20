/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      label: {
        text: 'National Insurance number'
      },
      id: 'input-example',
      name: 'test-name'
    }
  },
  {
    name: 'with hint text',
    data: {
      label: {
        text: 'National insurance number'
      },
      hint: {
        text: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.'
      },
      id: 'input-with-hint-text',
      name: 'test-name-2'
    }
  },
  {
    name: 'with error message',
    data: {
      label: {
        text: 'National Insurance number'
      },
      hint: {
        text: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.'
      },
      id: 'input-with-error-message',
      name: 'test-name-3',
      errorMessage: {
        text: 'Error message goes here'
      }
    }
  },
  {
    name: 'with width-2 class',
    data: {
      label: {
        text: 'National insurance number'
      },
      hint: {
        text: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.'
      },
      id: 'input-width-2',
      name: 'test-width-2',
      classes: 'govuk-input--width-2'
    }
  },
  {
    name: 'with width-3 class',
    data: {
      label: {
        text: 'National insurance number'
      },
      hint: {
        text: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.'
      },
      id: 'input-width-3',
      name: 'test-width-3',
      classes: 'govuk-input--width-3'
    }
  },
  {
    name: 'with width-4 class',
    data: {
      label: {
        text: 'National insurance number'
      },
      hint: {
        text: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.'
      },
      id: 'input-width-4',
      name: 'test-width-4',
      classes: 'govuk-input--width-4'
    }
  },
  {
    name: 'with width-5 class',
    data: {
      label: {
        text: 'National insurance number'
      },
      hint: {
        text: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.'
      },
      id: 'input-width-5',
      name: 'test-width-5',
      classes: 'govuk-input--width-5'
    }
  },
  {
    name: 'with width-10 class',
    data: {
      label: {
        text: 'National insurance number'
      },
      hint: {
        text: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.'
      },
      id: 'input-width-10',
      name: 'test-width-10',
      classes: 'govuk-input--width-10'
    }
  },
  {
    name: 'with width-20 class',
    data: {
      label: {
        text: 'National insurance number'
      },
      hint: {
        text: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.'
      },
      id: 'input-width-20',
      name: 'test-width-20',
      classes: 'govuk-input--width-20'
    }
  },
  {
    name: 'with width-30 class',
    data: {
      label: {
        text: 'National insurance number'
      },
      hint: {
        text: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.'
      },
      id: 'input-width-30',
      name: 'test-width-30',
      classes: 'govuk-input--width-30'
    }
  },
  {
    name: 'with label as page heading',
    data: {
      label: {
        text: 'National Insurance number',
        classes: 'govuk-label--l',
        isPageHeading: true
      },
      id: 'input-with-page-heading',
      name: 'test-name'
    }
  },
  {
    name: 'with optional form-group classes',
    data: {
      label: {
        text: 'National Insurance number'
      },
      id: 'input-example',
      name: 'test-name',
      formGroup: {
        classes: 'extra-class'
      }
    }
  },
  {
    name: 'with autocomplete attribute',
    data: {
      label: {
        text: 'Postcode'
      },
      id: 'input-with-autocomplete-attribute',
      name: 'postcode',
      autocomplete: 'postal-code'
    }
  },
  {
    name: 'with pattern attribute',
    data: {
      label: {
        text: 'Numbers only'
      },
      id: 'input-with-pattern-attribute',
      name: 'numbers-only',
      type: 'number',
      pattern: '[0-9]*'
    }
  },
  {
    name: 'with spellcheck enabled',
    data: {
      label: {
        text: 'Spellcheck is enabled'
      },
      id: 'input-with-spellcheck-enabled',
      name: 'spellcheck',
      type: 'text',
      spellcheck: true
    }
  },
  {
    name: 'with spellcheck disabled',
    data: {
      label: {
        text: 'Spellcheck is disabled'
      },
      id: 'input-with-spellcheck-disabled',
      name: 'spellcheck',
      type: 'text',
      spellcheck: false
    }
  },
  {
    name: 'with prefix',
    data: {
      label: {
        text: 'Amount, in pounds'
      },
      id: 'input-with-prefix',
      name: 'amount',
      prefix: {
        text: '£'
      }
    }
  },
  {
    name: 'with suffix',
    data: {
      label: {
        text: 'Weight, in kilograms'
      },
      id: 'input-with-suffix',
      name: 'weight',
      suffix: {
        text: 'kg'
      }
    }
  },
  {
    name: 'with prefix and suffix',
    data: {
      label: {
        text: 'Cost per item, in pounds'
      },
      id: 'input-with-prefix-suffix',
      name: 'cost',
      prefix: {
        text: '£'
      },
      suffix: {
        text: 'per item'
      }
    }
  },
  {
    name: 'with prefix and long suffix',
    data: {
      label: {
        text: 'Cost per item, in pounds, per household member'
      },
      id: 'input-with-prefix-suffix',
      name: 'cost',
      prefix: {
        text: '£'
      },
      suffix: {
        text: 'per household member'
      }
    }
  },
  {
    name: 'with prefix and suffix and error',
    data: {
      label: {
        text: 'Cost per item, in pounds'
      },
      id: 'input-with-prefix-suffix',
      name: 'cost',
      prefix: {
        text: '£'
      },
      suffix: {
        text: 'per item'
      },
      errorMessage: {
        text: 'Error message goes here'
      }
    }
  },
  {
    name: 'with prefix and suffix and width modifier',
    data: {
      label: {
        text: 'Cost per item, in pounds'
      },
      id: 'input-with-prefix-suffix',
      name: 'cost',
      classes: 'govuk-input--width-5',
      prefix: {
        text: '£'
      },
      suffix: {
        text: 'per item'
      }
    }
  },
  {
    name: 'with extra letter spacing',
    data: {
      id: 'input-with-extra-letter-spacing',
      label: {
        text: 'National insurance number'
      },
      classes: 'govuk-input--width-30 govuk-input--extra-letter-spacing',
      value: 'QQ 12 34 56 C'
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      id: 'with-classes',
      name: 'with-classes',
      label: {
        text: 'With classes'
      },
      classes: 'app-input--custom-modifier'
    }
  },
  {
    name: 'custom type',
    hidden: true,
    data: {
      id: 'with-custom-type',
      name: 'with-custom-type',
      label: {
        text: 'With custom type'
      },
      type: 'number'
    }
  },
  {
    name: 'value',
    hidden: true,
    data: {
      id: 'with-value',
      name: 'with-value',
      label: {
        text: 'With value'
      },
      value: 'QQ 12 34 56 C'
    }
  },
  {
    name: 'with describedBy',
    hidden: true,
    data: {
      id: 'with-describedby',
      name: 'with-describedby',
      label: {
        text: 'With describedBy'
      },
      describedBy: 'some-id'
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      id: 'with-attributes',
      name: 'with-attributes',
      label: {
        text: 'With attributes'
      },
      attributes: {
        'data-attribute': 'my data value'
      }
    }
  },
  {
    name: 'hint with describedBy',
    hidden: true,
    data: {
      id: 'with-hint-describedby',
      name: 'with-hint-describedby',
      label: {
        text: 'With hint describedBy'
      },
      describedBy: 'some-id',
      hint: {
        text: 'It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.'
      }
    }
  },
  {
    name: 'error with describedBy',
    hidden: true,
    data: {
      id: 'with-error-describedby',
      name: 'with-error-describedby',
      label: {
        text: 'With error describedBy'
      },
      describedBy: 'some-id',
      errorMessage: {
        text: 'Error message'
      }
    }
  },
  {
    name: 'with error and hint',
    hidden: true,
    data: {
      id: 'with-error-hint',
      name: 'with-error-hint',
      label: {
        text: 'With error and hint'
      },
      errorMessage: {
        text: 'Error message'
      },
      hint: {
        text: 'Hint'
      }
    }
  },
  {
    name: 'with error, hint and describedBy',
    hidden: true,
    data: {
      id: 'with-error-hint-describedby',
      name: 'with-error-hint-describedby',
      label: {
        text: 'With error, hint and describedBy'
      },
      errorMessage: {
        text: 'Error message'
      },
      hint: {
        text: 'Hint'
      },
      describedBy: 'some-id'
    }
  },
  {
    name: 'inputmode',
    hidden: true,
    data: {
      id: 'with-inputmode',
      name: 'with-inputmode',
      label: {
        text: 'With inputmode'
      },
      inputmode: 'decimal'
    }
  },
  {
    name: 'with prefix with html as text',
    hidden: true,
    data: {
      label: {
        text: 'Amount, in pounds'
      },
      id: 'input-with-prefix',
      name: 'amount',
      prefix: {
        text: '<span>£</span>'
      }
    }
  },
  {
    name: 'with prefix with html',
    hidden: true,
    data: {
      label: {
        html: 'Amount, in pounds'
      },
      id: 'input-with-prefix',
      name: 'amount',
      prefix: {
        html: '<span>£</span>'
      }
    }
  },
  {
    name: 'with prefix with classes',
    hidden: true,
    data: {
      label: {
        text: 'Amount, in pounds'
      },
      id: 'input-with-prefix-element',
      name: 'amount',
      prefix: {
        text: '£',
        classes: 'app-input__prefix--custom-modifier'
      }
    }
  },
  {
    name: 'with prefix with attributes',
    hidden: true,
    data: {
      label: {
        text: 'Amount, in pounds'
      },
      id: 'input-with-prefix-element',
      name: 'amount',
      prefix: {
        text: '£',
        attributes: {
          'data-attribute': 'value'
        }
      }
    }
  },
  {
    name: 'with suffix with html as text',
    hidden: true,
    data: {
      label: {
        text: 'Weight, in kilograms'
      },
      id: 'input-with-suffix',
      name: 'weight',
      suffix: {
        text: '<span>kg</span>'
      }
    }
  },
  {
    name: 'with suffix with html',
    hidden: true,
    data: {
      label: {
        text: 'Weight, in kilograms'
      },
      id: 'input-with-suffix',
      name: 'weight',
      suffix: {
        html: '<span>kg</span>'
      }
    }
  },
  {
    name: 'with suffix with classes',
    hidden: true,
    data: {
      label: {
        text: 'Weight, in kilograms'
      },
      id: 'input-with-suffix',
      name: 'weight',
      suffix: {
        html: '<span>kg</span>',
        classes: 'app-input__suffix--custom-modifier'
      }
    }
  },
  {
    name: 'with suffix with attributes',
    hidden: true,
    data: {
      label: {
        text: 'Weight, in kilograms'
      },
      id: 'input-with-suffix',
      name: 'weight',
      suffix: {
        html: '<span>kg</span>',
        attributes: {
          'data-attribute': 'value'
        }
      }
    }
  }
]
