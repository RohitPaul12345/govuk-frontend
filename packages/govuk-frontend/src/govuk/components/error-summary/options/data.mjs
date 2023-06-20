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
    - Must be focused when the page loads
  `
}
