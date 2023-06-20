/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      text: 'Save and continue'
    }
  },
  {
    name: 'disabled',
    data: {
      text: 'Disabled button',
      disabled: true
    }
  },
  {
    name: 'link',
    data: {
      text: 'Link button',
      href: '/'
    }
  },
  {
    name: 'start',
    data: {
      text: 'Start now button',
      isStartButton: true
    }
  },
  {
    name: 'start link',
    data: {
      text: 'Start now link button',
      href: '/',
      isStartButton: true
    }
  },
  {
    name: 'input',
    data: {
      element: 'input',
      name: 'start-now',
      text: 'Start now'
    }
  },
  {
    name: 'input disabled',
    data: {
      element: 'input',
      text: 'Explicit input button disabled',
      disabled: true
    }
  },
  {
    name: 'prevent double click',
    data: {
      text: 'Submit',
      preventDoubleClick: true
    }
  },
  {
    name: 'with active state',
    description:
      'Simulate triggering the :active CSS pseudo-class, not available in the production build.',
    data: {
      name: 'active',
      text: 'Active',
      classes: ':active'
    }
  },
  {
    name: 'with hover state',
    description:
      'Simulate triggering the :hover CSS pseudo-class, not available in the production build.',
    data: {
      name: 'hover',
      text: 'Hovered',
      classes: ':hover'
    }
  },
  {
    name: 'with focus state',
    description:
      'Simulate triggering the :focus CSS pseudo-class, not available in the production build.',
    data: {
      name: 'focus',
      text: 'Focussed',
      classes: ':focus'
    }
  },
  {
    name: 'Secondary',
    description: 'A button for secondary actions',
    data: {
      name: 'secondary',
      text: 'Secondary button',
      classes: 'govuk-button--secondary'
    }
  },
  {
    name: 'Secondary disabled',
    data: {
      name: 'secondary',
      text: 'Secondary button disabled',
      classes: 'govuk-button--secondary',
      disabled: true
    }
  },
  {
    name: 'Secondary link',
    description: 'A link button for secondary actions',
    data: {
      name: 'secondary',
      text: 'Secondary button',
      href: '/',
      classes: 'govuk-button--secondary'
    }
  },
  {
    name: 'Warning',
    description: 'A button for actions that need a warning',
    data: {
      name: 'Warning',
      text: 'Warning button',
      classes: 'govuk-button--warning'
    }
  },
  {
    name: 'Warning disabled',
    data: {
      name: 'warning',
      text: 'Warning button disabled',
      classes: 'govuk-button--warning',
      disabled: true
    }
  },
  {
    name: 'Warning link',
    description: 'A link button for actions that need a warning',
    data: {
      name: 'Warning',
      text: 'Warning button',
      href: '/',
      classes: 'govuk-button--warning'
    }
  },
  {
    name: 'Inverse',
    description: 'A button that appears on dark backgrounds',
    previewLayoutModifiers: ['inverse'],
    data: {
      name: 'Inverse',
      text: 'Inverse button',
      classes: 'govuk-button--inverse'
    }
  },
  {
    name: 'Inverse disabled',
    previewLayoutModifiers: ['inverse'],
    data: {
      name: 'Inverse',
      text: 'Inverse button disabled',
      classes: 'govuk-button--inverse',
      disabled: true
    }
  },
  {
    name: 'Inverse link',
    description: 'A link button for actions that appear on dark backgrounds',
    previewLayoutModifiers: ['inverse'],
    data: {
      name: 'Inverse',
      text: 'Inverse button',
      href: '/',
      classes: 'govuk-button--inverse'
    }
  },
  {
    name: 'Inverse start button',
    description: 'A start button that appears on dark backgrounds',
    previewLayoutModifiers: ['inverse'],
    data: {
      name: 'Inverse',
      text: 'Inverse start button',
      href: '/',
      classes: 'govuk-button--inverse',
      isStartButton: true
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      element: 'button',
      text: 'Submit',
      attributes: {
        'aria-controls': 'example-id',
        'data-tracking-dimension': 123
      }
    }
  },
  {
    name: 'link attributes',
    hidden: true,
    data: {
      element: 'a',
      text: 'Submit',
      attributes: {
        'aria-controls': 'example-id',
        'data-tracking-dimension': 123
      }
    }
  },
  {
    name: 'input attributes',
    hidden: true,
    data: {
      element: 'input',
      text: 'Submit',
      attributes: {
        'aria-controls': 'example-id',
        'data-tracking-dimension': 123
      }
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      text: 'Submit',
      element: 'button',
      classes: 'app-button--custom-modifier'
    }
  },
  {
    name: 'link classes',
    hidden: true,
    data: {
      text: 'Submit',
      element: 'a',
      classes: 'app-button--custom-modifier'
    }
  },
  {
    name: 'input classes',
    hidden: true,
    data: {
      text: 'Submit',
      element: 'input',
      classes: 'app-button--custom-modifier'
    }
  },
  {
    name: 'name',
    hidden: true,
    data: {
      text: 'Submit',
      element: 'button',
      name: 'start-now'
    }
  },
  {
    name: 'type',
    hidden: true,
    data: {
      text: 'Submit',
      element: 'button',
      type: 'button'
    }
  },
  {
    name: 'input type',
    hidden: true,
    data: {
      text: 'Submit',
      element: 'input',
      type: 'button'
    }
  },
  {
    name: 'explicit link',
    hidden: true,
    data: {
      element: 'a',
      href: '/',
      text: 'Continue'
    }
  },
  {
    name: 'no href',
    hidden: true,
    data: {
      text: 'Submit',
      element: 'a'
    }
  },
  {
    name: 'value',
    hidden: true,
    data: {
      text: 'Submit',
      element: 'button',
      value: 'start'
    }
  },
  {
    name: 'html',
    hidden: true,
    data: {
      text: 'Submit',
      element: 'button',
      html: 'Start <em>now</em>'
    }
  },
  {
    name: 'no type',
    hidden: true,
    data: {
      text: 'Button!'
    }
  },
  {
    name: 'no data-prevent-double-click',
    hidden: true,
    data: {
      text: 'Submit'
    }
  },
  {
    name: "don't prevent double click",
    hidden: true,
    data: {
      text: 'Submit',
      preventDoubleClick: false
    }
  },
  {
    name: 'id',
    hidden: true,
    data: {
      text: 'Submit',
      element: 'input',
      id: 'submit'
    }
  }
]
