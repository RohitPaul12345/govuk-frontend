import { join } from 'path'

import express from 'express'
import { paths } from 'govuk-frontend-config'
import { packageTypeToPath } from 'govuk-frontend-lib/names'

const router = express.Router()

/**
 * Add middleware to serve static assets
 */

router.use('/assets', express.static(packageTypeToPath('govuk-frontend', { modulePath: 'assets', moduleRoot: paths.app })))
router.use('/javascripts', express.static(packageTypeToPath('govuk-frontend', { modulePath: '/', moduleRoot: paths.app })))
router.use('/stylesheets', express.static(join(paths.app, 'dist/stylesheets')))

export default router
