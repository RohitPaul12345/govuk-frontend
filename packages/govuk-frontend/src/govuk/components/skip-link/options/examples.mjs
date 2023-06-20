/**
 * Examples of Nunjucks macro options (or params)
 *
 * @type {import("govuk-frontend-lib/components").ComponentExample[]}
 */
export const examples = [
  {
    name: 'default',
    data: {
      text: 'Skip to main content',
      href: '#content'
    }
  },
  {
    name: 'with focus',
    description:
      'Simulate triggering the :focus CSS pseudo-class, not available in the production build.',
    data: {
      classes: ':focus',
      text: 'Skip to main content',
      href: '#content'
    }
  },
  {
    name: 'no href',
    hidden: true,
    data: {
      text: 'Skip to main content'
    }
  },
  {
    name: 'custom href',
    hidden: true,
    data: {
      text: 'Skip to custom content',
      href: '#custom'
    }
  },
  {
    name: 'custom text',
    hidden: true,
    data: {
      text: 'skip'
    }
  },
  {
    name: 'html as text',
    hidden: true,
    data: {
      text: '<p>skip</p>'
    }
  },
  {
    name: 'html',
    hidden: true,
    data: {
      html: '<p>skip</p>'
    }
  },
  {
    name: 'classes',
    hidden: true,
    data: {
      text: 'Skip link',
      classes: 'app-skip-link--custom-class'
    }
  },
  {
    name: 'attributes',
    hidden: true,
    data: {
      text: 'Skip link',
      attributes: {
        'data-test': 'attribute',
        'aria-label': 'Skip to content'
      }
    }
  }
]
