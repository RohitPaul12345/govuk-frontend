import replace from '@rollup/plugin-replace'
import { pkg } from 'govuk-frontend-config'
import { defineConfig } from 'rollup'

/**
 * Rollup config for npm publish
 *
 * 1. CommonJS modules for Node.js `require()`
 *
 * 2. ECMAScript (ES) modules for browser <script type="module">
 *    or using `import` for modern browsers and Node.js scripts
 */
export default defineConfig(({ i: input }) => ({
  input,

  /**
   * Output options
   */
  output: [
    {
      entryFileNames: '[name].js',
      format: 'cjs',

      // Allow "synthetic default" alongside named exports
      // https://rollupjs.org/configuration-options/#output-esmodule
      esModule: true,
      exports: 'named',
      interop: 'esModule',

      // Separate modules, not bundled
      preserveModules: true
    },
    {
      entryFileNames: '[name].mjs',
      format: 'es',

      // Separate modules, not bundled
      preserveModules: true
    }
  ],

  /**
   * Input plugins
   */
  plugins: [
    replace({
      include: '**/common/govuk-frontend-version.mjs',
      preventAssignment: true,

      // Add GOV.UK Frontend release version
      development: pkg.version
    })
  ]
}))
