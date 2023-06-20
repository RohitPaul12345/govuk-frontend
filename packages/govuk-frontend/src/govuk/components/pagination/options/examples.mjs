/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      previous: {
        href: '/previous'
      },
      next: {
        href: '/next'
      },
      items: [
        {
          number: 1,
          href: '/page/1'
        },
        {
          number: 2,
          href: '/page/2',
          current: true
        },
        {
          number: 3,
          href: '/page/3'
        }
      ]
    }
  },
  {
    name: 'with custom navigation landmark',
    data: {
      previous: {
        href: '/previous'
      },
      next: {
        href: '/next'
      },
      landmarkLabel: 'search',
      items: [
        {
          number: 1,
          href: '/page/1'
        },
        {
          number: 2,
          href: '/page/2',
          current: true
        },
        {
          number: 3,
          href: '/page/3'
        }
      ]
    }
  },
  {
    name: 'with custom link and item text',
    data: {
      previous: {
        href: '/previous',
        text: 'Previous page'
      },
      next: {
        href: '/next',
        text: 'Next page'
      },
      items: [
        {
          number: 'one',
          href: '/page/1'
        },
        {
          number: 'two',
          href: '/page/2',
          current: true
        },
        {
          number: 'three',
          href: '/page/3'
        }
      ]
    }
  },
  {
    name: 'with custom accessible labels on item links',
    data: {
      previous: {
        href: '/previous'
      },
      next: {
        href: '/next'
      },
      items: [
        {
          number: 1,
          href: '/page/1',
          visuallyHiddenText: '1st page'
        },
        {
          number: 2,
          href: '/page/2',
          current: true,
          visuallyHiddenText: '2nd page (you are currently on this page)'
        },
        {
          number: 3,
          href: '/page/3',
          visuallyHiddenText: '3rd page'
        }
      ]
    }
  },
  {
    name: 'with many pages',
    data: {
      previous: {
        href: '/previous'
      },
      next: {
        href: '/next'
      },
      items: [
        {
          number: 1,
          href: '/page/1'
        },
        {
          ellipsis: true
        },
        {
          number: 8,
          href: '/page/8'
        },
        {
          number: 9,
          href: '/page/9'
        },
        {
          number: 10,
          href: '/page/10',
          current: true
        },
        {
          number: 11,
          href: '/page/11'
        },
        {
          number: 12,
          href: '/page/12'
        },
        {
          ellipsis: true
        },
        {
          number: 40,
          href: '/page/40'
        }
      ]
    }
  },
  {
    name: 'first page',
    data: {
      next: {
        href: '/next'
      },
      items: [
        {
          number: 1,
          href: '/page/1',
          current: true
        },
        {
          number: 2,
          href: '/page/2'
        },
        {
          number: 3,
          href: '/page/3'
        }
      ]
    }
  },
  {
    name: 'last page',
    data: {
      previous: {
        href: '/previous'
      },
      items: [
        {
          number: 1,
          href: '/page/1'
        },
        {
          number: 2,
          href: '/page/2'
        },
        {
          number: 3,
          href: '/page/3',
          current: true
        }
      ]
    }
  },
  {
    name: 'with prev and next only',
    data: {
      previous: {
        href: '/previous'
      },
      next: {
        href: '/next'
      }
    }
  },
  {
    name: 'with prev and next only and labels',
    data: {
      previous: {
        text: 'Previous page',
        labelText: '1 of 3',
        href: '/previous'
      },
      next: {
        text: 'Next page',
        labelText: '3 of 3',
        href: '/next'
      }
    }
  },
  {
    name: 'with prev and next only and very long labels',
    data: {
      previous: {
        text: 'Previous page',
        labelText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        href: '/previous'
      },
      next: {
        text: 'Next page',
        labelText:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        href: '/next'
      }
    }
  },
  {
    name: 'with prev and next only in a different language',
    data: {
      previous: {
        text: 'précédente',
        href: '/previous'
      },
      next: {
        text: 'suivante',
        href: '/next'
      }
    }
  },
  {
    name: 'with previous only',
    data: {
      previous: {
        href: '/previous'
      }
    }
  },
  {
    name: 'with next only',
    data: {
      next: {
        href: '/next'
      }
    }
  },
  {
    name: 'with custom classes',
    hidden: true,
    data: {
      classes: 'my-custom-class',
      previous: {
        href: '/previous'
      },
      next: {
        href: '/next'
      },
      items: [
        {
          number: 1,
          href: '/page/1'
        },
        {
          number: 2,
          href: '/page/2',
          current: true
        },
        {
          number: 3,
          href: '/page/3'
        }
      ]
    }
  },
  {
    name: 'with custom attributes',
    hidden: true,
    data: {
      attributes: {
        'data-attribute-1': 'value-1',
        'data-attribute-2': 'value-2'
      },
      previous: {
        href: '/previous'
      },
      next: {
        href: '/next'
      },
      items: [
        {
          number: 1,
          href: '/page/1'
        },
        {
          number: 2,
          href: '/page/2',
          current: true
        },
        {
          number: 3,
          href: '/page/3'
        }
      ]
    }
  }
]
