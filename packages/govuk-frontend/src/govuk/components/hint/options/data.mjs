import { outdent } from 'outdent'

import { examples } from './examples.mjs'
import { params } from './params.mjs'

/**
 * Component data
 *
 * @type {import("govuk-frontend-lib/components").ComponentData}
 */
export default {
  params,
  examples,
  accessibilityCriteria: outdent`
    When used with a single input, the hint MUST:
    - be announced by screen readers when the input is focussed

    When used with a group of multiple inputs (such as within a fieldset), the
    hint MUST:
    - be announced by screen readers when focussing the first input within the
      group (first in this case refers to the focus order, not the DOM - if the
      user is traversing backwards through the page then this would be the last
      input within the group in the DOM)

    When used with a group of multiple inputs, the hint SHOULD NOT:
    - be announced every time for each individual input
  `
}
