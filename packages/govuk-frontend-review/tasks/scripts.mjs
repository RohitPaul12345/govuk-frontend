import { join } from 'path'

import { npm, scripts, task } from 'govuk-frontend-tasks'
import gulp from 'gulp'

/**
 * JavaScripts task (for watch)
 * Compilation, documentation
 *
 * @type {import('govuk-frontend-tasks').TaskFunction}
 */
export const compile = (options) => gulp.series(
  task.name("compile:js 'iife'", () =>
    scripts.compile('all.mjs', {
      ...options,

      srcPath: join(options.srcPath, 'javascripts'),
      destPath: join(options.destPath, 'javascripts'),
      configPath: join(options.basePath, 'rollup.config.mjs')
    })
  ),

  // Build JSDoc for /docs/javascript
  npm.script('build:jsdoc', [], options)
)
