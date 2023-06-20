/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      messages: [
        {
          headingText: 'Cookies on this government service',
          text: 'We use analytics cookies to help understand how users use our service.',
          actions: [
            {
              text: 'Accept analytics cookies',
              type: 'submit',
              name: 'cookies',
              value: 'accept'
            },
            {
              text: 'Reject analytics cookies',
              type: 'submit',
              name: 'cookies',
              value: 'reject'
            },
            {
              text: 'View cookie preferences',
              href: '/cookie-preferences'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'accepted confirmation banner',
    data: {
      messages: [
        {
          text: 'Your cookie preferences have been saved. You have accepted cookies.',
          role: 'alert',
          actions: [
            {
              text: 'Hide cookie message',
              type: 'button'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'rejected confirmation banner',
    data: {
      messages: [
        {
          text: 'Your cookie preferences have been saved. You have rejected cookies.',
          role: 'alert',
          actions: [
            {
              text: 'Hide cookie message',
              type: 'button'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'client-side implementation',
    data: {
      messages: [
        {
          headingText: 'Cookies on this service',
          text: 'We use cookies to help understand how users use our service.',
          actions: [
            {
              text: 'Accept analytics cookies',
              type: 'submit',
              name: 'cookies',
              value: 'accept'
            },
            {
              text: 'Reject analytics cookies',
              type: 'submit',
              name: 'cookies',
              value: 'reject'
            },
            {
              text: 'View cookie preferences',
              href: '/cookie-preferences'
            }
          ]
        },
        {
          text: 'Your cookie preferences have been saved. You have accepted cookies.',
          role: 'alert',
          hidden: true,
          actions: [
            {
              text: 'Hide cookie message',
              type: 'button'
            }
          ]
        },
        {
          text: 'Your cookie preferences have been saved. You have rejected cookies.',
          role: 'alert',
          hidden: true,
          actions: [
            {
              text: 'Hide cookie message',
              type: 'button'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'with html',
    data: {
      messages: [
        {
          headingHtml: 'Cookies on <span>my service</span>',
          html: '<p class="govuk-body">We use cookies in <span>our service</span>.</p><p class="govuk-body">We’d like to use analytics cookies so we can understand how you use the Design System and make improvements.</p>',
          actions: [
            {
              text: 'Accept analytics cookies',
              type: 'submit',
              name: 'cookies',
              value: 'accept'
            },
            {
              text: 'Reject analytics cookies',
              type: 'submit',
              name: 'cookies',
              value: 'reject'
            },
            {
              text: 'View cookie preferences',
              href: '/cookie-preferences'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'heading html',
    hidden: true,
    data: {
      messages: [
        {
          headingHtml: 'Cookies on <span>my service</span>'
        }
      ]
    }
  },
  {
    name: 'heading html as text',
    hidden: true,
    data: {
      messages: [
        {
          headingText: 'Cookies on <span>my service</span>'
        }
      ]
    }
  },
  {
    name: 'html',
    hidden: true,
    data: {
      messages: [
        {
          html: '<p class="govuk-body">We use cookies in <span>our service</span>.</p>'
        }
      ]
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      messages: [
        {
          classes: 'app-my-class'
        }
      ]
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      messages: [
        {
          attributes: {
            'data-attribute': 'my-value'
          }
        }
      ]
    }
  },
  {
    name: 'custom aria label',
    hidden: true,
    data: {
      ariaLabel: 'Cookies on GOV.UK',
      messages: [
        {
          text: 'We use cookies on GOV.UK'
        }
      ]
    }
  },
  {
    name: 'hidden',
    hidden: true,
    data: {
      messages: [
        {
          hidden: true
        }
      ]
    }
  },
  {
    name: 'hidden false',
    hidden: true,
    data: {
      messages: [
        {
          hidden: false
        }
      ]
    }
  },
  {
    name: 'default action',
    hidden: true,
    data: {
      messages: [
        {
          actions: [
            {
              text: 'This is a button'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'link',
    hidden: true,
    data: {
      messages: [
        {
          actions: [
            {
              text: 'This is a link',
              href: '/link'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'link with false button options',
    hidden: true,
    data: {
      messages: [
        {
          actions: [
            {
              text: 'This is a link',
              href: '/link',
              value: 'cookies',
              name: 'link'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'link as a button',
    hidden: true,
    data: {
      messages: [
        {
          actions: [
            {
              text: 'This is a link',
              href: '/link',
              type: 'button'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'type',
    hidden: true,
    data: {
      messages: [
        {
          actions: [
            {
              text: 'Button',
              type: 'button'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'button classes',
    hidden: true,
    data: {
      messages: [
        {
          actions: [
            {
              text: 'Button with custom classes',
              classes: 'my-button-class app-button-class'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'button attributes',
    hidden: true,
    data: {
      messages: [
        {
          actions: [
            {
              text: 'Button with attributes',
              attributes: {
                'data-button-attribute': 'my-value'
              }
            }
          ]
        }
      ]
    }
  },
  {
    name: 'link classes',
    hidden: true,
    data: {
      messages: [
        {
          actions: [
            {
              text: 'Link with custom classes',
              href: '/my-link',
              classes: 'my-link-class app-link-class'
            }
          ]
        }
      ]
    }
  },
  {
    name: 'link attributes',
    hidden: true,
    data: {
      messages: [
        {
          actions: [
            {
              text: 'Link with attributes',
              href: '/link',
              attributes: {
                'data-link-attribute': 'my-value'
              }
            }
          ]
        }
      ]
    }
  },
  {
    name: 'full banner hidden',
    hidden: true,
    data: {
      hidden: true,
      classes: 'hide-cookie-banner',
      attributes: {
        'data-hide-cookie-banner': 'true'
      },
      messages: [
        {
          headingText: 'Cookies on this service',
          text: 'We use cookies to help understand how users use our service.',
          actions: [
            {
              text: 'Accept analytics cookies',
              type: 'submit',
              name: 'cookies',
              value: 'accept'
            },
            {
              text: 'Reject analytics cookies',
              type: 'submit',
              name: 'cookies',
              value: 'reject'
            },
            {
              text: 'View cookie preferences',
              href: '/cookie-preferences'
            }
          ]
        },
        {
          text: 'Your cookie preferences have been saved. You have accepted cookies.',
          role: 'alert',
          actions: [
            {
              text: 'Hide cookie message',
              type: 'button'
            }
          ]
        },
        {
          text: 'Your cookie preferences have been saved. You have rejected cookies.',
          role: 'alert',
          actions: [
            {
              text: 'Hide cookie message',
              type: 'button'
            }
          ]
        }
      ]
    }
  }
]
