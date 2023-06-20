/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    description: 'The standard header as used on information pages on GOV.UK',
    data: {}
  },
  {
    name: 'with service name',
    description:
      'If your service is more than a few pages long, you can help users understand where they are by adding the service name.',
    data: {
      serviceName: 'Service Name',
      serviceUrl: '/components/header'
    }
  },
  {
    name: 'with service name but no service url',
    data: {
      serviceName: 'Service Name'
    }
  },
  {
    name: 'with navigation',
    data: {
      navigation: [
        {
          href: '#1',
          text: 'Navigation item 1',
          active: true
        },
        {
          href: '#2',
          text: 'Navigation item 2'
        },
        {
          href: '#3',
          text: 'Navigation item 3'
        },
        {
          href: '#4',
          text: 'Navigation item 4'
        }
      ]
    }
  },
  {
    name: 'with custom navigation label',
    data: {
      navigationLabel: 'Custom navigation label',
      navigation: [
        {
          href: '#1',
          text: 'Navigation item 1',
          active: true
        },
        {
          href: '#2',
          text: 'Navigation item 2'
        },
        {
          href: '#3',
          text: 'Navigation item 3'
        },
        {
          href: '#4',
          text: 'Navigation item 4'
        }
      ]
    }
  },
  {
    name: 'with custom menu button text',
    description: 'Button translated into Welsh',
    data: {
      menuButtonText: 'Dewislen',
      navigation: [
        {
          href: '#1',
          text: 'Eitem llywio 1',
          active: true
        },
        {
          href: '#2',
          text: 'Eitem llywio 2'
        },
        {
          href: '#3',
          text: 'Eitem llywio 3'
        },
        {
          href: '#4',
          text: 'Eitem llywio 4'
        }
      ]
    }
  },
  {
    name: 'with custom menu button label',
    data: {
      menuButtonLabel: 'Custom button label',
      navigation: [
        {
          href: '#1',
          text: 'Navigation item 1',
          active: true
        },
        {
          href: '#2',
          text: 'Navigation item 2'
        },
        {
          href: '#3',
          text: 'Navigation item 3'
        },
        {
          href: '#4',
          text: 'Navigation item 4'
        }
      ]
    }
  },
  {
    name: 'with service name and navigation',
    description:
      'If you need to include basic navigation, contact or account management links.',
    data: {
      serviceName: 'Service Name',
      serviceUrl: '/components/header',
      navigation: [
        {
          href: '#1',
          text: 'Navigation item 1',
          active: true
        },
        {
          href: '#2',
          text: 'Navigation item 2'
        },
        {
          href: '#3',
          text: 'Navigation item 3'
        },
        {
          href: '#4',
          text: 'Navigation item 4'
        }
      ]
    }
  },
  {
    name: 'with large navigation',
    description:
      'An edge case example with a large number of navitation items with long names used to test wrapping',
    data: {
      navigation: [
        {
          href: '/browse/benefits',
          text: 'Benefits'
        },
        {
          href: '/browse/births-deaths-marriages',
          text: 'Births, deaths, marriages and care'
        },
        {
          href: '/browse/business',
          text: 'Business and self-employed'
        },
        {
          href: '/browse/childcare-parenting',
          text: 'Childcare and parenting'
        },
        {
          href: '/browse/citizenship',
          text: 'Citizenship and living in the UK'
        },
        {
          href: '/browse/justice',
          text: 'Crime, justice and the law'
        },
        {
          href: '/browse/disabilities',
          text: 'Disabled people'
        },
        {
          href: '/browse/driving',
          text: 'Driving and transport'
        },
        {
          href: '/browse/education',
          text: 'Education and learning'
        },
        {
          href: '/browse/employing-people',
          text: 'Employing people'
        },
        {
          href: '/browse/environment-countryside',
          text: 'Environment and countryside'
        },
        {
          href: '/browse/housing-local-services',
          text: 'Housing and local services'
        },
        {
          href: '/browse/tax',
          text: 'Money and tax'
        },
        {
          href: '/browse/abroad',
          text: 'Passports, travel and living abroad'
        },
        {
          href: '/browse/visas-immigration',
          text: 'Visas and immigration'
        },
        {
          href: '/browse/working',
          text: 'Working, jobs and pensions'
        }
      ]
    }
  },
  {
    name: 'with product name',
    data: {
      navigationClasses: 'govuk-header__navigation--end',
      productName: 'Product Name'
    }
  },
  {
    name: 'full width',
    data: {
      containerClasses: 'govuk-header__container--full-width',
      navigationClasses: 'govuk-header__navigation--end',
      productName: 'Product Name'
    }
  },
  {
    name: 'full width with navigation',
    data: {
      containerClasses: 'govuk-header__container--full-width',
      navigationClasses: 'govuk-header__navigation--end',
      productName: 'Product Name',
      navigation: [
        {
          href: '#1',
          text: 'Navigation item 1',
          active: true
        },
        {
          href: '#2',
          text: 'Navigation item 2'
        },
        {
          href: '#3',
          text: 'Navigation item 3'
        }
      ]
    }
  },
  {
    name: 'navigation item with html',
    data: {
      serviceName: 'Service Name',
      serviceUrl: '/components/header',
      navigation: [
        {
          href: '#1',
          html: '<em>Navigation item 1</em>',
          active: true
        },
        {
          href: '#2',
          html: '<em>Navigation item 2</em>'
        },
        {
          href: '#3',
          html: '<em>Navigation item 3</em>'
        }
      ]
    }
  },
  {
    name: 'navigation item with text without link',
    data: {
      serviceName: 'Service Name',
      serviceUrl: '/components/header',
      navigation: [
        {
          text: 'Navigation item 1'
        },
        {
          text: 'Navigation item 2'
        },
        {
          text: 'Navigation item 3'
        }
      ]
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      attributes: {
        'data-test-attribute': 'value',
        'data-test-attribute-2': 'value-2'
      }
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      classes: 'app-header--custom-modifier'
    }
  },
  {
    name: 'custom homepage url',
    hidden: true,
    data: {
      homepageUrl: '/'
    }
  },
  {
    name: 'navigation item with attributes',
    hidden: true,
    data: {
      navigation: [
        {
          href: '/link',
          text: 'Item',
          attributes: {
            'data-attribute': 'my-attribute',
            'data-attribute-2': 'my-attribute-2'
          }
        }
      ]
    }
  },
  {
    name: 'navigation item with html as text',
    hidden: true,
    data: {
      serviceName: 'Service Name',
      serviceUrl: '/components/header',
      navigation: [
        {
          href: '#1',
          text: '<em>Navigation item 1</em>',
          active: true
        },
        {
          href: '#2',
          text: '<em>Navigation item 2</em>'
        },
        {
          href: '#3',
          text: '<em>Navigation item 3</em>'
        }
      ]
    }
  },
  {
    name: 'navigation item with html without link',
    hidden: true,
    data: {
      serviceName: 'Service Name',
      serviceUrl: '/components/header',
      navigation: [
        {
          html: '<em>Navigation item 1</em>',
          active: true
        },
        {
          html: '<em>Navigation item 2</em>'
        },
        {
          html: '<em>Navigation item 3</em>'
        }
      ]
    }
  },
  {
    name: 'with custom navigation label and custom menu button text',
    hidden: true,
    data: {
      menuButtonText: 'Custom menu button text',
      navigationLabel: 'Custom navigation label',
      navigation: [
        {
          href: '#1',
          text: 'Navigation item 1',
          active: true
        },
        {
          href: '#2',
          text: 'Navigation item 2'
        },
        {
          href: '#3',
          text: 'Navigation item 3'
        },
        {
          href: '#4',
          text: 'Navigation item 4'
        }
      ]
    }
  }
]
