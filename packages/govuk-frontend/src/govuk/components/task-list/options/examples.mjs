/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      idPrefix: 'task-list-example',
      items: [
        {
          title: {
            text: 'Company Directors'
          },
          href: '#',
          status: {
            text: 'Completed',
            classes: 'govuk-tag--black'
          }
        },
        {
          title: {
            text: 'Registered company details'
          },
          href: '#',
          status: {
            tag: {
              text: 'Incomplete',
              classes: 'govuk-tag--blue'
            }
          }
        },
        {
          title: {
            text: 'Business plan'
          },
          href: '#',
          status: {
            tag: {
              text: 'Incomplete',
              classes: 'govuk-tag--blue'
            }
          }
        }
      ]
    }
  },
  {
    name: 'example with 3 states',
    data: {
      idPrefix: 'task-list-example',
      items: [
        {
          title: {
            text: 'Company Directors'
          },
          href: '#',
          status: {
            text: 'Completed'
          }
        },
        {
          title: {
            text: 'Registered company details'
          },
          href: '#',
          status: {
            tag: {
              text: 'Not started',
              classes: 'govuk-tag--light-blue'
            }
          }
        },
        {
          title: {
            text: 'Business plan'
          },
          href: '#',
          status: {
            tag: {
              text: 'In progress',
              classes: 'govuk-tag--blue'
            }
          }
        },
        {
          title: {
            text: 'Documentation'
          },
          href: '#',
          status: {
            tag: {
              text: 'Not started',
              classes: 'govuk-tag--light-blue'
            }
          }
        }
      ]
    }
  },
  {
    name: 'example with hint text and additional states',
    data: {
      idPrefix: 'task-list-example',
      items: [
        {
          title: {
            text: 'Company Directors'
          },
          href: '#',
          status: {
            text: 'Completed'
          }
        },
        {
          title: {
            text: 'Registered company details'
          },
          href: '#',
          status: {
            tag: {
              text: 'Not started',
              classes: 'govuk-tag--light-blue'
            }
          }
        },
        {
          title: {
            text: 'Business plan'
          },
          href: '#',
          hint: {
            text: 'Ensure the plan covers objectives, strategies, sales, marketing and financial forecasts.'
          },
          status: {
            tag: {
              text: 'Review',
              classes: 'govuk-tag--pink'
            }
          }
        },
        {
          title: {
            text: 'Documentation'
          },
          href: '#',
          status: {
            tag: {
              text: 'In progress',
              classes: 'govuk-tag--blue'
            }
          }
        },
        {
          title: {
            text: 'Charitable status'
          },
          href: '#',
          status: {
            tag: {
              text: 'Error',
              classes: 'govuk-tag--red'
            }
          }
        },
        {
          classes: 'app-task-list__item--no-link',
          title: {
            text: 'Payment'
          },
          hint: {
            text: 'It will cost between £15 and £75'
          },
          status: {
            text: 'Cannot start yet',
            classes: 'govuk-task-list__status--cannot-start-yet'
          }
        }
      ]
    }
  },
  {
    name: 'example with all possible colours',
    data: {
      idPrefix: 'task-list-example',
      items: [
        {
          title: {
            text: 'Task A'
          },
          href: '#',
          status: {
            text: 'Text colour'
          }
        },
        {
          title: {
            text: 'Task B'
          },
          href: '#',
          status: {
            text: 'Secondary text colour',
            classes: 'govuk-task-list__status--cannot-start-yet'
          }
        },
        {
          title: {
            text: 'Task C'
          },
          href: '#',
          status: {
            tag: {
              text: 'Grey',
              classes: 'govuk-tag--grey'
            }
          }
        },
        {
          title: {
            text: 'Task D'
          },
          href: '#',
          status: {
            tag: {
              text: 'Blue',
              classes: 'govuk-tag--blue'
            }
          }
        },
        {
          title: {
            text: 'Task E'
          },
          href: '#',
          status: {
            tag: {
              text: 'Light blue',
              classes: 'govuk-tag--light-blue'
            }
          }
        },
        {
          title: {
            text: 'Task F'
          },
          href: '#',
          status: {
            tag: {
              text: 'Turquoise',
              classes: 'govuk-tag--turquoise'
            }
          }
        },
        {
          title: {
            text: 'Task G'
          },
          href: '#',
          status: {
            tag: {
              text: 'Green',
              classes: 'govuk-tag--green'
            }
          }
        },
        {
          title: {
            text: 'Task H'
          },
          href: '#',
          status: {
            tag: {
              text: 'Purple',
              classes: 'govuk-tag--purple'
            }
          }
        },
        {
          title: {
            text: 'Task I'
          },
          href: '#',
          status: {
            tag: {
              text: 'Pink',
              classes: 'govuk-tag--pink'
            }
          }
        },
        {
          title: {
            text: 'Task J'
          },
          href: '#',
          status: {
            tag: {
              text: 'Red',
              classes: 'govuk-tag--red'
            }
          }
        },
        {
          title: {
            text: 'Task K'
          },
          href: '#',
          status: {
            tag: {
              text: 'Orange',
              classes: 'govuk-tag--orange'
            }
          }
        },
        {
          title: {
            text: 'Task L'
          },
          href: '#',
          status: {
            tag: {
              text: 'Yellow',
              classes: 'govuk-tag--yellow'
            }
          }
        }
      ]
    }
  }
]
