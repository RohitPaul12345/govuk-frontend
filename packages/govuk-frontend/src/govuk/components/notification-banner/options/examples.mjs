/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      text: 'This publication was withdrawn on 7 March 2014.'
    }
  },
  {
    name: 'paragraph as html heading',
    data: {
      html: '<p class="govuk-notification-banner__heading">You have 9 days to send a response.</p>'
    }
  },
  {
    name: 'with text as html',
    data: {
      html: '<h3 class="govuk-notification-banner__heading">This publication was withdrawn on 7 March 2014</h3><p class="govuk-body">Archived and replaced by the <a href="#" class="govuk-notification-banner__link">new planning guidance</a> launched 6 March 2014 on an external website</p>\n'
    }
  },
  {
    name: 'with type as success',
    data: {
      type: 'success',
      text: 'Email sent to example@email.com'
    }
  },
  {
    name: 'success with custom html',
    data: {
      type: 'success',
      html: '<h3 class="govuk-notification-banner__heading">4 files uploaded</h3><ul class="govuk-!-margin-0 govuk-list"><li><a href="link-1" class="govuk-notification-banner__link">government-strategy.pdf</a></li><li><a href="link-2" class="govuk-notification-banner__link">government-strategy-v1.pdf</a></li></ul>\n'
    }
  },
  {
    name: 'with a list',
    data: {
      html:
        '<h3 class="govuk-notification-banner__heading">4 files uploaded</h3>\n' +
        '<ul class="govuk-list govuk-list--bullet govuk-!-margin-bottom-0">\n' +
        '    <li><a href="#" class="govuk-notification-banner__link">government-strategy.pdf</a></li>\n' +
        '    <li><a href="#" class="govuk-notification-banner__link">government-strategy-v2.pdf</a></li>\n' +
        '    <li><a href="#" class="govuk-notification-banner__link">government-strategy-v3-FINAL.pdf</a></li>\n' +
        '    <li><a href="#" class="govuk-notification-banner__link">government-strategy-v4-FINAL-v2.pdf</a></li>\n' +
        '</ul>\n'
    }
  },
  {
    name: 'with long heading',
    data: {
      text: 'This publication was withdrawn on 7 March 2014, before being sent in, sent back, queried, lost, found, subjected to public inquiry, lost again, and finally buried in soft peat for three months and recycled as firelighters.'
    }
  },
  {
    name: 'with lots of content',
    data: {
      html:
        '<h3 class="govuk-notification-banner__heading">\n' +
        '  Check if you need to apply the reverse charge to this application\n' +
        '</h3> <p class="govuk-body">You will have to apply the <a href="#" class="govuk-notification-banner__link">reverse charge</a> if the applicant supplies any of these services:</p> <ul class="govuk-list govuk-list--bullet govuk-list--spaced">\n' +
        '  <li>\n' +
        '    constructing, altering, repairing, extending, demolishing or dismantling buildings or structures (whether permanent or not), including offshore installation services\n' +
        '  </li>\n' +
        '  <li>\n' +
        '    constructing, altering, repairing, extending, demolishing of any works forming, or planned to form, part of the land, including (in particular) walls, roadworks, power lines, electronic communications equipment, aircraft runways, railways, inland waterways, docks and harbours\n' +
        '  </li>\n' +
        '</ul>\n'
    }
  },
  {
    name: 'auto-focus disabled, with type as success',
    data: {
      type: 'success',
      disableAutoFocus: true,
      text: 'Email sent to example@email.com'
    }
  },
  {
    name: 'auto-focus explicitly enabled, with type as success',
    data: {
      type: 'success',
      disableAutoFocus: false,
      text: 'Email sent to example@email.com'
    }
  },
  {
    name: 'role=alert overridden to role=region, with type as success',
    data: {
      type: 'success',
      role: 'region',
      text: 'Email sent to example@email.com'
    }
  },
  {
    name: 'custom tabindex',
    data: {
      type: 'success',
      text: 'Email sent to example@email.com',
      attributes: {
        tabindex: 2
      }
    }
  },
  {
    name: 'custom title',
    hidden: true,
    data: {
      titleText: 'Important information',
      text: 'This publication was withdrawn on 7 March 2014.'
    }
  },
  {
    name: 'title as html',
    hidden: true,
    data: {
      titleHtml: '<span>Important information</span>',
      text: 'This publication was withdrawn on 7 March 2014.'
    }
  },
  {
    name: 'title html as text',
    hidden: true,
    data: {
      titleText: '<span>Important information</span>',
      text: 'This publication was withdrawn on 7 March 2014.'
    }
  },
  {
    name: 'custom title heading level',
    hidden: true,
    data: {
      titleHeadingLevel: 3,
      text: 'This publication was withdrawn on 7 March 2014.'
    }
  },
  {
    name: 'custom title id',
    hidden: true,
    data: {
      titleId: 'my-id',
      text: 'This publication was withdrawn on 7 March 2014.'
    }
  },
  {
    name: 'custom title id with type as success',
    hidden: true,
    data: {
      type: 'success',
      titleId: 'my-id',
      text: 'Email sent to example@email.com'
    }
  },
  {
    name: 'custom text',
    hidden: true,
    data: {
      text: 'This publication was withdrawn on 7 March 2014.'
    }
  },
  {
    name: 'html as text',
    hidden: true,
    data: {
      text: '<span>This publication was withdrawn on 7 March 2014.</span>'
    }
  },
  {
    name: 'custom role',
    hidden: true,
    data: {
      role: 'banner',
      text: 'This publication was withdrawn on 7 March 2014.'
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      text: 'This publication was withdrawn on 7 March 2014.',
      classes: 'app-my-class'
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      text: 'This publication was withdrawn on 7 March 2014.',
      attributes: {
        'my-attribute': 'value'
      }
    }
  },
  {
    name: 'with invalid type',
    hidden: true,
    data: {
      type: 'some-type',
      text: 'This publication was withdrawn on 7 March 2014.'
    }
  }
]
