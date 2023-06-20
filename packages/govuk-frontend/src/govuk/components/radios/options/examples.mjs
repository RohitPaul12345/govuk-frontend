/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      name: 'example-default',
      hint: {
        text: 'This includes changing your last name or spelling your name differently.'
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'inline',
    data: {
      idPrefix: 'example',
      classes: 'govuk-radios--inline',
      name: 'example',
      fieldset: {
        legend: {
          text: 'Have you changed your name?'
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently.'
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No',
          checked: true
        }
      ]
    }
  },
  {
    name: 'with disabled',
    data: {
      idPrefix: 'gov',
      name: 'gov',
      fieldset: {
        legend: {
          text: 'How do you want to sign in?',
          classes: 'govuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      items: [
        {
          value: 'gateway',
          text: 'Sign in with Government Gateway',
          id: 'gateway',
          hint: {
            text: 'You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.'
          }
        },
        {
          value: 'verify',
          text: 'Sign in with GOV.UK Verify',
          id: 'verify',
          hint: {
            text: 'You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.'
          },
          disabled: true
        }
      ]
    }
  },
  {
    name: 'with legend as page heading',
    data: {
      idPrefix: 'housing-act',
      name: 'housing-act',
      fieldset: {
        legend: {
          text: 'Which part of the Housing Act was your licence issued under?',
          classes: 'govuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      hint: {
        text: 'Select one of the options below.'
      },
      items: [
        {
          value: 'part-2',
          html: '<span class="govuk-heading-s govuk-!-margin-bottom-1">Part 2 of the Housing Act 2004</span> For properties that are 3 or more stories high and occupied by 5 or more people'
        },
        {
          value: 'part-3',
          html: '<span class="govuk-heading-s govuk-!-margin-bottom-1">Part 3 of the Housing Act 2004</span> For properties that are within a geographical area defined by a local council'
        }
      ]
    }
  },
  {
    name: 'with a medium legend',
    data: {
      idPrefix: 'housing-act',
      name: 'housing-act',
      fieldset: {
        legend: {
          text: 'Which part of the Housing Act was your licence issued under?',
          classes: 'govuk-fieldset__legend--m'
        }
      },
      hint: {
        text: 'Select one of the options below.'
      },
      items: [
        {
          value: 'part-2',
          html: '<span class="govuk-heading-s govuk-!-margin-bottom-1">Part 2 of the Housing Act 2004</span> For properties that are 3 or more stories high and occupied by 5 or more people'
        },
        {
          value: 'part-3',
          html: '<span class="govuk-heading-s govuk-!-margin-bottom-1">Part 3 of the Housing Act 2004</span> For properties that are within a geographical area defined by a local council'
        }
      ]
    }
  },
  {
    name: 'with a divider',
    data: {
      idPrefix: 'example-divider',
      name: 'example',
      fieldset: {
        legend: {
          text: 'How do you want to sign in?'
        }
      },
      items: [
        {
          value: 'governement-gateway',
          text: 'Use Government Gateway'
        },
        {
          value: 'govuk-verify',
          text: 'Use GOV.UK Verify'
        },
        {
          divider: 'or'
        },
        {
          value: 'create-account',
          text: 'Create an account'
        }
      ]
    }
  },
  {
    name: 'with hints on items',
    data: {
      idPrefix: 'gov',
      name: 'gov',
      fieldset: {
        legend: {
          text: 'How do you want to sign in?',
          classes: 'govuk-fieldset__legend--l',
          isPageHeading: true
        }
      },
      items: [
        {
          value: 'gateway',
          text: 'Sign in with Government Gateway',
          id: 'gateway',
          hint: {
            text: 'You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before.'
          }
        },
        {
          value: 'verify',
          text: 'Sign in with GOV.UK Verify',
          id: 'verify',
          hint: {
            text: 'You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity.'
          }
        }
      ]
    }
  },
  {
    name: 'without fieldset',
    data: {
      name: 'colours',
      items: [
        {
          value: 'red',
          text: 'Red'
        },
        {
          value: 'green',
          text: 'Green'
        },
        {
          value: 'blue',
          text: 'Blue'
        }
      ]
    }
  },
  {
    name: 'with fieldset and error message',
    data: {
      idPrefix: 'example',
      name: 'example',
      errorMessage: {
        text: 'Please select an option'
      },
      fieldset: {
        legend: {
          text: 'Have you changed your name?'
        }
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No',
          checked: true
        }
      ]
    }
  },
  {
    name: 'with very long option text',
    data: {
      name: 'waste',
      hint: {
        text: 'Nullam id dolor id nibh ultricies vehicula ut id elit.'
      },
      errorMessage: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      fieldset: {
        legend: {
          text: 'Maecenas faucibus mollis interdum?'
        }
      },
      items: [
        {
          value: 'nullam',
          text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.'
        },
        {
          value: 'aenean',
          text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.'
        },
        {
          value: 'fusce',
          text: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.'
        }
      ]
    }
  },
  {
    name: 'with conditional items',
    data: {
      idPrefix: 'how-contacted',
      name: 'how-contacted',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted?'
        }
      },
      items: [
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html:
              '<label class="govuk-label" for="context-email">Email address</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">\n'
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          conditional: {
            html:
              '<label class="govuk-label" for="contact-phone">Phone number</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">\n'
          }
        },
        {
          value: 'text',
          text: 'Text message',
          conditional: {
            html:
              '<label class="govuk-label" for="contact-text-message">Mobile phone number</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">\n'
          }
        }
      ]
    }
  },
  {
    name: 'with conditional items with special characters',
    data: {
      idPrefix: 'user.profile[contact-prefs]',
      name: 'contact-prefs',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted?'
        }
      },
      items: [
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html:
              '<label class="govuk-label" for="context-email">Email address</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">\n'
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          conditional: {
            html:
              '<label class="govuk-label" for="contact-phone">Phone number</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">\n'
          }
        },
        {
          value: 'text',
          text: 'Text message',
          conditional: {
            html:
              '<label class="govuk-label" for="contact-text-message">Mobile phone number</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">\n'
          }
        }
      ]
    }
  },
  {
    name: 'with conditional item checked',
    data: {
      idPrefix: 'how-contacted-checked',
      name: 'how-contacted-checked',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted?'
        }
      },
      items: [
        {
          value: 'email',
          text: 'Email',
          checked: true,
          conditional: {
            html:
              '<label class="govuk-label" for="context-email">Email</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">\n'
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          conditional: {
            html:
              '<label class="govuk-label" for="contact-phone">Phone number</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">\n'
          }
        },
        {
          value: 'text',
          text: 'Text message',
          conditional: {
            html:
              '<label class="govuk-label" for="contact-text-message">Mobile phone number</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">\n'
          }
        }
      ]
    }
  },
  {
    name: 'prechecked',
    data: {
      name: 'example-default',
      hint: {
        text: 'This includes changing your last name or spelling your name differently.'
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No',
          checked: true
        }
      ]
    }
  },
  {
    name: 'prechecked using value',
    data: {
      name: 'example-default',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ],
      value: 'no'
    }
  },
  {
    name: 'with conditional items and pre-checked value',
    data: {
      idPrefix: 'how-contacted-checked',
      name: 'how-contacted-checked',
      fieldset: {
        legend: {
          text: 'How do you want to be contacted?'
        }
      },
      items: [
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html:
              '<label class="govuk-label" for="context-email">Email</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">\n'
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          conditional: {
            html:
              '<label class="govuk-label" for="contact-phone">Phone number</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone">\n'
          }
        },
        {
          value: 'text',
          text: 'Text message',
          conditional: {
            html:
              '<label class="govuk-label" for="contact-text-message">Mobile phone number</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">\n'
          }
        }
      ],
      value: 'text'
    }
  },
  {
    name: 'with optional form-group classes showing group error',
    data: {
      idPrefix: 'how-contacted-2',
      name: 'how-contacted-2',
      formGroup: {
        classes: 'govuk-form-group--error'
      },
      fieldset: {
        legend: {
          text: 'How do you want to be contacted?'
        }
      },
      items: [
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html:
              '<label class="govuk-label" for="context-email">Email address</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">\n'
          }
        },
        {
          value: 'phone',
          text: 'Phone',
          checked: true,
          conditional: {
            html:
              '<label class="govuk-label" for="contact-phone">Phone number</label>\n' +
              '<span id="contact-phone-error" class="govuk-error-message">Problem with input</span>\n' +
              '<input class="govuk-input govuk-input--error govuk-!-width-one-third" name="contact-phone" type="text" id="contact-phone" aria-describedby="contact-phone-error">\n'
          }
        },
        {
          value: 'text',
          text: 'Text message',
          conditional: {
            html:
              '<label class="govuk-label" for="contact-text-message">Mobile phone number</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="contact-text-message" type="text" id="contact-text-message">\n'
          }
        }
      ]
    }
  },
  {
    name: 'small',
    data: {
      idPrefix: 'how-contacted-2',
      name: 'how-contacted-2',
      formGroup: {
        classes: 'govuk-radios--small'
      },
      fieldset: {
        legend: {
          text: 'How do you want to be contacted?'
        }
      },
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text',
          text: 'Text message'
        }
      ]
    }
  },
  {
    name: 'small with long text',
    data: {
      idPrefix: 'foo',
      name: 'foo',
      classes: 'govuk-radios--small',
      fieldset: {
        legend: {
          text: 'Venenatis Condimentum'
        }
      },
      items: [
        {
          value: 'nullam',
          text: 'Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus.'
        },
        {
          value: 'aenean',
          text: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras mattis consectetur purus sit amet fermentum.'
        },
        {
          value: 'fusce',
          text: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. Sed posuere consectetur est at lobortis.'
        }
      ]
    }
  },
  {
    name: 'small with error',
    data: {
      idPrefix: 'how-contacted-2',
      name: 'how-contacted-2',
      formGroup: {
        classes: 'govuk-radios--small'
      },
      fieldset: {
        legend: {
          text: 'How do you want to be contacted?'
        }
      },
      errorMessage: {
        text: 'Select a thing'
      },
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text',
          text: 'Text message'
        }
      ]
    }
  },
  {
    name: 'small with hint',
    data: {
      idPrefix: 'how-contacted-2',
      name: 'how-contacted-2',
      formGroup: {
        classes: 'govuk-radios--small'
      },
      fieldset: {
        legend: {
          text: 'How do you want to be contacted?'
        }
      },
      items: [
        {
          value: 'email',
          text: 'Email',
          hint: {
            text: 'Hint for email address'
          }
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text',
          text: 'Text message'
        }
      ]
    }
  },
  {
    name: 'small with disabled',
    data: {
      idPrefix: 'how-contacted-2',
      name: 'how-contacted-2',
      formGroup: {
        classes: 'govuk-radios--small'
      },
      fieldset: {
        legend: {
          text: 'How do you want to be contacted?'
        }
      },
      items: [
        {
          value: 'email',
          text: 'Email'
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text',
          text: 'Text message',
          disabled: true
        }
      ]
    }
  },
  {
    name: 'small with conditional reveal',
    data: {
      idPrefix: 'how-contacted-2',
      name: 'how-contacted-2',
      formGroup: {
        classes: 'govuk-radios--small'
      },
      fieldset: {
        legend: {
          text: 'How do you want to be contacted?'
        }
      },
      items: [
        {
          value: 'email',
          text: 'Email',
          conditional: {
            html:
              '<label class="govuk-label" for="context-email">Foo</label>\n' +
              '<input class="govuk-input govuk-!-width-one-third" name="context-email" type="text" id="context-email">\n'
          }
        },
        {
          value: 'phone',
          text: 'Phone'
        },
        {
          value: 'text',
          text: 'Text message'
        }
      ]
    }
  },
  {
    name: 'small inline',
    data: {
      idPrefix: 'sort',
      classes: 'govuk-radios--small govuk-radios--inline',
      name: 'example',
      fieldset: {
        legend: {
          text: 'Sort by'
        }
      },
      items: [
        {
          value: 'relevance',
          text: 'relevance'
        },
        {
          value: 'title',
          text: 'title'
        },
        {
          value: 'created',
          text: 'created'
        }
      ]
    }
  },
  {
    name: 'small inline extreme',
    data: {
      idPrefix: 'sort',
      classes: 'govuk-radios--small govuk-radios--inline',
      name: 'example',
      fieldset: {
        legend: {
          text: 'Sort by'
        }
      },
      items: [
        {
          value: 'relevance',
          text: 'relevance'
        },
        {
          value: 'title',
          text: 'title'
        },
        {
          value: 'created',
          text: 'created'
        },
        {
          value: 'modified',
          text: 'modified'
        },
        {
          value: 'category',
          text: 'category'
        },
        {
          value: 'votes',
          text: 'votes'
        },
        {
          value: 'flavour',
          text: 'flavour'
        },
        {
          value: 'hue',
          text: 'hue'
        },
        {
          value: 'happiness',
          text: 'happiness'
        },
        {
          value: 'funkiness',
          text: 'funkiness'
        }
      ]
    }
  },
  {
    name: 'small with a divider',
    data: {
      idPrefix: 'example-small-divider',
      name: 'example',
      fieldset: {
        legend: {
          text: 'How do you want to sign in?'
        }
      },
      classes: 'govuk-radios--small',
      items: [
        {
          value: 'governement-gateway',
          text: 'Use Government Gateway'
        },
        {
          value: 'govuk-verify',
          text: 'Use GOV.UK Verify'
        },
        {
          divider: 'or'
        },
        {
          value: 'create-account',
          text: 'Create an account'
        }
      ]
    }
  },
  {
    name: 'with idPrefix',
    data: {
      name: 'example-radio',
      idPrefix: 'example-id-prefix',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'minimal items and name',
    hidden: true,
    data: {
      name: 'example-name',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'with falsey items',
    hidden: true,
    data: {
      name: 'example-name',
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        null,
        false,
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'fieldset with describedBy',
    hidden: true,
    data: {
      name: 'example-name',
      fieldset: {
        describedBy: 'some-id',
        legend: {
          text: 'Which option?'
        }
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      name: 'example-name',
      attributes: {
        'data-attribute': 'value',
        'data-second-attribute': 'second-value'
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'items with attributes',
    hidden: true,
    data: {
      name: 'example-name',
      items: [
        {
          value: 'yes',
          text: 'Yes',
          attributes: {
            'data-attribute': 'ABC',
            'data-second-attribute': 'DEF'
          }
        },
        {
          value: 'no',
          text: 'No',
          attributes: {
            'data-attribute': 'GHI',
            'data-second-attribute': 'JKL'
          }
        }
      ]
    }
  },
  {
    name: 'with empty conditional',
    hidden: true,
    data: {
      name: 'example-conditional',
      items: [
        {
          value: 'yes',
          text: 'Yes',
          conditional: {
            html: false
          }
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'label with classes',
    hidden: true,
    data: {
      name: 'example-label-classes',
      items: [
        {
          value: 'yes',
          text: 'Yes',
          label: {
            classes: 'bold'
          }
        }
      ]
    }
  },
  {
    name: 'with hints on parent and items',
    hidden: true,
    data: {
      name: 'example-multiple-hints',
      fieldset: {
        legend: {
          text: 'Have you changed your name?'
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently.'
      },
      items: [
        {
          value: 'yes',
          text: 'Yes',
          hint: {
            text: 'Hint for yes option here'
          }
        },
        {
          value: 'no',
          text: 'No',
          hint: {
            text: 'Hint for no option here'
          }
        }
      ]
    }
  },
  {
    name: 'with describedBy and hint',
    hidden: true,
    data: {
      name: 'example-hint-describedby',
      fieldset: {
        describedBy: 'some-id',
        legend: {
          text: 'Have you changed your name?'
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently.'
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'with error message',
    hidden: true,
    data: {
      name: 'example-error-message',
      errorMessage: {
        text: 'Please select an option'
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'with error message and idPrefix',
    hidden: true,
    data: {
      name: 'example-error-message',
      idPrefix: 'id-prefix',
      errorMessage: {
        text: 'Please select an option'
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'with hint and error message',
    hidden: true,
    data: {
      name: 'example-error-message-hint',
      errorMessage: {
        text: 'Please select an option'
      },
      fieldset: {
        legend: {
          text: 'Have you changed your name?'
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently.'
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'with hint, error message and describedBy',
    hidden: true,
    data: {
      name: 'example-error-message-hint',
      errorMessage: {
        text: 'Please select an option'
      },
      fieldset: {
        describedBy: 'some-id',
        legend: {
          text: 'Have you changed your name?'
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently.'
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'label with attributes',
    hidden: true,
    data: {
      name: 'with-label-attributes',
      items: [
        {
          value: 'yes',
          text: 'Yes',
          label: {
            attributes: {
              'data-attribute': 'value',
              'data-second-attribute': 'second-value'
            }
          }
        }
      ]
    }
  },
  {
    name: 'fieldset params',
    hidden: true,
    data: {
      name: 'example-fieldset-params',
      fieldset: {
        classes: 'app-fieldset--custom-modifier',
        legend: {
          text: 'Have you changed your name?'
        },
        attributes: {
          'data-attribute': 'value',
          'data-second-attribute': 'second-value'
        }
      },
      hint: {
        text: 'This includes changing your last name or spelling your name differently.'
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'fieldset with html',
    hidden: true,
    data: {
      name: 'with-fieldset-html',
      fieldset: {
        legend: {
          html: 'Have <b>you</b> changed your name?'
        }
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  },
  {
    name: 'with fieldset, error message and describedBy',
    hidden: true,
    data: {
      idPrefix: 'example',
      name: 'example',
      errorMessage: {
        text: 'Please select an option'
      },
      fieldset: {
        describedBy: 'some-id',
        legend: {
          text: 'Have you changed your name?'
        }
      },
      items: [
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No',
          checked: true
        }
      ]
    }
  },
  {
    name: 'item checked overrides value',
    hidden: true,
    data: {
      name: 'colors',
      items: [
        {
          value: 'red',
          text: 'Red'
        },
        {
          value: 'green',
          text: 'Green',
          checked: false
        },
        {
          value: 'blue',
          text: 'Blue'
        }
      ],
      value: 'green'
    }
  }
]