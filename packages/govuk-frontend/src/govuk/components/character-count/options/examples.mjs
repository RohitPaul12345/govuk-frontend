/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      name: 'more-detail',
      id: 'more-detail',
      maxlength: 10,
      label: {
        text: 'Can you provide more detail?'
      }
    }
  },
  {
    name: 'with custom textarea description',
    description: 'with textarea description translated into Welsh',
    data: {
      name: 'custom-textarea-description',
      id: 'custom-textarea-description',
      maxlength: 10,
      label: {
        text: 'Can you provide more detail?'
      },
      textareaDescriptionText: 'Gallwch ddefnyddio hyd at %{count} nod'
    }
  },
  {
    name: 'with hint',
    data: {
      name: 'with-hint',
      id: 'with-hint',
      maxlength: 10,
      label: {
        text: 'Can you provide more detail?'
      },
      hint: {
        text: "Don't include personal or financial information, eg your National Insurance number or credit card details."
      }
    }
  },
  {
    name: 'with default value',
    data: {
      id: 'with-default-value',
      name: 'default-value',
      maxlength: 100,
      label: {
        text: 'Full address'
      },
      value: '221B Baker Street\nLondon\nNW1 6XE\n'
    }
  },
  {
    name: 'with default value exceeding limit',
    data: {
      id: 'exceeding-characters',
      name: 'exceeding',
      maxlength: 10,
      value: '221B Baker Street\nLondon\nNW1 6XE\n',
      label: {
        text: 'Full address'
      },
      errorMessage: {
        text: 'Please do not exceed the maximum allowed limit'
      }
    }
  },
  {
    name: 'with custom rows',
    data: {
      id: 'custom-rows',
      name: 'custom',
      maxlength: 10,
      label: {
        text: 'Full address'
      },
      rows: 8
    }
  },
  {
    name: 'with label as page heading',
    data: {
      id: 'textarea-with-page-heading',
      name: 'address',
      maxlength: 10,
      label: {
        text: 'Full address',
        classes: 'govuk-label--l',
        isPageHeading: true
      }
    }
  },
  {
    name: 'with word count',
    data: {
      id: 'word-count',
      name: 'word-count',
      maxwords: 10,
      label: {
        text: 'Full address'
      }
    }
  },
  {
    name: 'with threshold',
    data: {
      id: 'with-threshold',
      name: 'with-threshold',
      maxlength: 10,
      threshold: 75,
      label: {
        text: 'Full address'
      }
    }
  },
  {
    name: 'with translations',
    data: {
      id: 'with-translations',
      name: 'with-translations',
      maxlength: 10,
      label: {
        text: 'Full address'
      },
      charactersUnderLimitText: {
        other: '%{count} characters to go',
        one: 'One character to go'
      },
      charactersAtLimitText: 'Zero characters left',
      charactersOverLimitText: {
        other: '%{count} characters too many',
        one: 'One character too many'
      },
      wordsUnderLimitText: {
        other: '%{count} words to go',
        one: 'One word to go'
      },
      wordsAtLimitText: 'Zero words left',
      wordsOverLimitText: {
        other: '%{count} words too many',
        one: 'One word too many'
      }
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      id: 'with-classes',
      name: 'with-classes',
      maxlength: 10,
      label: {
        text: 'With classes'
      },
      classes: 'app-character-count--custom-modifier'
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      id: 'with-attributes',
      name: 'with-attributes',
      maxlength: 10,
      label: {
        text: 'With attributes'
      },
      attributes: {
        'data-attribute': 'my data value'
      }
    }
  },
  {
    name: 'formGroup with classes',
    hidden: true,
    data: {
      id: 'with-formgroup',
      name: 'with-formgroup',
      maxlength: 10,
      label: {
        text: 'With formgroup'
      },
      formGroup: {
        classes: 'app-character-count--custom-modifier'
      }
    }
  },
  {
    name: 'custom classes on countMessage',
    hidden: true,
    data: {
      id: 'with-custom-countmessage-class',
      name: 'with-custom-countmessage-class',
      maxlength: 10,
      label: {
        text: 'With custom countMessage class'
      },
      countMessage: {
        classes: 'app-custom-count-message'
      }
    }
  },
  {
    name: 'spellcheck enabled',
    hidden: true,
    data: {
      id: 'with-spellcheck',
      name: 'with-spellcheck',
      maxlength: 10,
      label: {
        text: 'With spellcheck'
      },
      spellcheck: true
    }
  },
  {
    name: 'spellcheck disabled',
    hidden: true,
    data: {
      id: 'without-spellcheck',
      name: 'without-spellcheck',
      maxlength: 10,
      label: {
        text: 'Without spellcheck'
      },
      spellcheck: false
    }
  },
  {
    name: 'custom classes with error message',
    hidden: true,
    data: {
      id: 'with-custom-error-class',
      name: 'with-custom-error-class',
      maxlength: 10,
      label: {
        text: 'With custom error class'
      },
      classes: 'app-character-count--custom-modifier',
      errorMessage: {
        text: 'Error message'
      }
    }
  },
  {
    name: 'with id starting with number',
    hidden: true,
    data: {
      name: 'more-detail',
      id: '1_more-detail',
      maxlength: 10,
      label: {
        text: 'Can you provide more detail?'
      }
    }
  },
  {
    name: 'with id with special characters',
    hidden: true,
    data: {
      id: 'user1.profile[address]',
      name: 'address',
      maxlength: 10,
      label: {
        text: 'Full address'
      }
    }
  },
  {
    name: 'with textarea maxlength attribute',
    hidden: true,
    data: {
      id: 'maxlength-should-be-removed',
      name: 'address',
      maxlength: 10,
      attributes: {
        maxlength: 10
      },
      label: {
        text: 'Full address'
      }
    }
  },
  {
    name: 'to configure in JavaScript',
    hidden: true,
    data: {
      id: 'to-configure-in-javascript',
      name: 'address',
      label: {
        text: 'Full address'
      }
    }
  },
  {
    name: 'when neither maxlength nor maxwords are set',
    hidden: true,
    data: {
      id: 'no-maximum',
      name: 'no-maximum',
      label: {
        text: 'Full address'
      },
      textareaDescriptionText: 'No more than %{count} characters'
    }
  },
  {
    name: 'when neither maxlength/maxwords nor textarea description are set',
    hidden: true,
    data: {
      id: 'no-maximum',
      name: 'no-maximum',
      label: {
        text: 'Full address'
      }
    }
  }
]