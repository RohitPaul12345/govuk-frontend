/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      rows: [
        [
          {
            text: 'January'
          },
          {
            text: '£85',
            format: 'numeric'
          },
          {
            text: '£95',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'February'
          },
          {
            text: '£75',
            format: 'numeric'
          },
          {
            text: '£55',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'March'
          },
          {
            text: '£165',
            format: 'numeric'
          },
          {
            text: '£125',
            format: 'numeric'
          }
        ]
      ]
    }
  },
  {
    name: 'table with head',
    data: {
      head: [
        {
          text: 'Month you apply'
        },
        {
          text: 'Rate for bicycles',
          format: 'numeric'
        },
        {
          text: 'Rate for vehicles',
          format: 'numeric'
        }
      ],
      rows: [
        [
          {
            text: 'January'
          },
          {
            text: '£85',
            format: 'numeric'
          },
          {
            text: '£95',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'February'
          },
          {
            text: '£75',
            format: 'numeric'
          },
          {
            text: '£55',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'March'
          },
          {
            text: '£165',
            format: 'numeric'
          },
          {
            text: '£125',
            format: 'numeric'
          }
        ]
      ]
    }
  },
  {
    name: 'table with head and caption',
    data: {
      caption: 'Caption 1: Months and rates',
      captionClasses: 'govuk-heading-m',
      firstCellIsHeader: true,
      head: [
        {
          text: 'Month you apply'
        },
        {
          text: 'Rate for bicycles',
          format: 'numeric'
        },
        {
          text: 'Rate for vehicles',
          format: 'numeric'
        }
      ],
      rows: [
        [
          {
            text: 'January'
          },
          {
            text: '£85',
            format: 'numeric'
          },
          {
            text: '£95',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'February'
          },
          {
            text: '£75',
            format: 'numeric'
          },
          {
            text: '£55',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'March'
          },
          {
            text: '£165',
            format: 'numeric'
          },
          {
            text: '£125',
            format: 'numeric'
          }
        ]
      ]
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      classes: 'custom-class-goes-here',
      rows: [
        [
          {
            text: 'Jan'
          },
          {
            text: 'Feb'
          }
        ]
      ]
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      attributes: {
        'data-foo': 'bar'
      },
      rows: [
        [
          {
            text: 'Jan'
          },
          {
            text: 'Feb'
          }
        ]
      ]
    }
  },
  {
    name: 'html as text',
    hidden: true,
    data: {
      head: [
        {
          text: 'Foo <script>hacking.do(1337)</script>'
        }
      ],
      rows: [
        [
          {
            text: 'Foo <script>hacking.do(1337)</script>'
          }
        ]
      ]
    }
  },
  {
    name: 'html',
    hidden: true,
    data: {
      head: [
        {
          html: 'Foo <span>bar</span>'
        }
      ],
      rows: [
        [
          {
            html: 'Foo <span>bar</span>'
          }
        ]
      ]
    }
  },
  {
    name: 'head with classes',
    hidden: true,
    data: {
      head: [
        {
          text: 'Foo',
          classes: 'my-custom-class'
        }
      ],
      rows: [
        [
          {
            text: 'Jan'
          },
          {
            text: 'Feb'
          }
        ]
      ]
    }
  },
  {
    name: 'head with rowspan and colspan',
    hidden: true,
    data: {
      head: [
        {
          text: 'Foo',
          rowspan: 2,
          colspan: 2
        }
      ],
      rows: [
        [
          {
            text: 'Jan'
          },
          {
            text: 'Feb'
          }
        ]
      ]
    }
  },
  {
    name: 'head with attributes',
    hidden: true,
    data: {
      head: [
        {
          text: 'Foo',
          attributes: {
            'data-fizz': 'buzz'
          }
        }
      ],
      rows: [
        [
          {
            text: 'Jan'
          },
          {
            text: 'Feb'
          }
        ]
      ]
    }
  },
  {
    name: 'with firstCellIsHeader true',
    hidden: true,
    data: {
      firstCellIsHeader: true,
      rows: [
        [
          {
            text: 'January'
          },
          {
            text: '£85',
            format: 'numeric'
          },
          {
            text: '£95',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'February'
          },
          {
            text: '£75',
            format: 'numeric'
          },
          {
            text: '£55',
            format: 'numeric'
          }
        ],
        [
          {
            text: 'March'
          },
          {
            text: '£165',
            format: 'numeric'
          },
          {
            text: '£125',
            format: 'numeric'
          }
        ]
      ]
    }
  },
  {
    name: 'firstCellIsHeader with classes',
    hidden: true,
    data: {
      firstCellIsHeader: true,
      rows: [
        [
          {
            text: 'Foo',
            classes: 'my-custom-class'
          }
        ]
      ]
    }
  },
  {
    name: 'firstCellIsHeader with html',
    hidden: true,
    data: {
      firstCellIsHeader: true,
      rows: [
        [
          {
            html: 'Foo <span>bar</span>'
          }
        ]
      ]
    }
  },
  {
    name: 'firstCellIsHeader with html as text',
    hidden: true,
    data: {
      firstCellIsHeader: true,
      rows: [
        [
          {
            text: 'Foo <script>hacking.do(1337)</script>'
          }
        ]
      ]
    }
  },
  {
    name: 'firstCellIsHeader with rowspan and colspan',
    hidden: true,
    data: {
      firstCellIsHeader: true,
      rows: [
        [
          {
            text: 'Foo',
            rowspan: 2,
            colspan: 2
          }
        ]
      ]
    }
  },
  {
    name: 'firstCellIsHeader with attributes',
    hidden: true,
    data: {
      firstCellIsHeader: true,
      rows: [
        [
          {
            text: 'Foo',
            attributes: {
              'data-fizz': 'buzz'
            }
          }
        ]
      ]
    }
  },
  {
    name: 'with falsey items',
    hidden: true,
    data: {
      rows: [
        [
          {
            text: 'A'
          },
          {
            text: 1
          }
        ],
        false,
        null,
        [
          {
            text: 'B'
          },
          {
            text: 2
          }
        ],
        [
          {
            text: 'C'
          },
          {
            text: 3
          }
        ]
      ]
    }
  },
  {
    name: 'rows with classes',
    hidden: true,
    data: {
      rows: [
        [
          {
            text: 'Foo',
            classes: 'my-custom-class'
          }
        ]
      ]
    }
  },
  {
    name: 'rows with rowspan and colspan',
    hidden: true,
    data: {
      rows: [
        [
          {
            text: 'Foo',
            rowspan: 2,
            colspan: 2
          }
        ]
      ]
    }
  },
  {
    name: 'rows with attributes',
    hidden: true,
    data: {
      rows: [
        [
          {
            text: 'Foo',
            attributes: {
              'data-fizz': 'buzz'
            }
          }
        ]
      ]
    }
  }
]
