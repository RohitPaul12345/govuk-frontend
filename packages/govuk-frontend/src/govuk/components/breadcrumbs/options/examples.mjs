/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      items: [
        {
          text: 'Section',
          href: '/section'
        },
        {
          text: 'Sub-section',
          href: '/section/sub-section'
        }
      ]
    }
  },
  {
    name: 'with one level',
    data: {
      items: [
        {
          text: 'Section',
          href: '/section'
        }
      ]
    }
  },
  {
    name: 'with multiple levels',
    data: {
      items: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Section',
          href: '/section'
        },
        {
          text: 'Sub-section',
          href: '/section/sub-section'
        },
        {
          text: 'Sub Sub-section',
          href: '/section/sub-section/sub-sub-section'
        }
      ]
    }
  },
  {
    name: 'without the home section',
    data: {
      items: [
        {
          text: 'Service Manual',
          href: '/service-manual'
        },
        {
          text: 'Agile Delivery',
          href: '/service-manual/agile-delivery'
        }
      ]
    }
  },
  {
    name: 'with last breadcrumb as current page',
    data: {
      items: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Passports, travel and living abroad',
          href: '/browse/abroad'
        },
        {
          text: 'Travel abroad'
        }
      ]
    }
  },
  {
    name: 'with collapse on mobile',
    data: {
      collapseOnMobile: true,
      items: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Education, training and skills',
          href: '/education'
        },
        {
          text: 'Special educational needs and disability (SEND) and high needs',
          href: '/education/special-educational-needs-and-disability-send-and-high-needs'
        }
      ]
    }
  },
  {
    name: 'with inverted colours',
    description: 'Breadcrumbs that appear on dark backgrounds',
    previewLayoutModifiers: ['inverse'],
    data: {
      classes: 'govuk-breadcrumbs--inverse',
      items: [
        {
          text: 'Home',
          href: '/'
        },
        {
          text: 'Passports, travel and living abroad',
          href: '/browse/abroad'
        },
        {
          text: 'Travel abroad'
        }
      ]
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      classes: 'app-breadcrumbs--custom-modifier',
      items: [
        {
          text: 'Home'
        }
      ]
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      attributes: {
        id: 'my-navigation',
        role: 'navigation'
      },
      items: [
        {
          text: 'Home'
        }
      ]
    }
  },
  {
    name: 'item attributes',
    hidden: true,
    data: {
      items: [
        {
          text: 'Section 1',
          href: '/section',
          attributes: {
            'data-attribute': 'my-attribute',
            'data-attribute-2': 'my-attribute-2'
          }
        }
      ]
    }
  },
  {
    name: 'html as text',
    hidden: true,
    data: {
      items: [
        {
          text: '<span>Section 1</span>'
        }
      ]
    }
  },
  {
    name: 'html',
    hidden: true,
    data: {
      items: [
        {
          html: '<em>Section 1</em>'
        },
        {
          html: '<em>Section 2</em>',
          href: '/section-2'
        }
      ]
    }
  }
]