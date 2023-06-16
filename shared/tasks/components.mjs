import { join } from 'path'

import { paths } from 'govuk-frontend-config'
import { getComponentData, getComponentFiles, getComponentNames } from 'govuk-frontend-lib/components'
import { filterPath } from 'govuk-frontend-lib/files'
import nunjucks from 'nunjucks'

import { files } from './index.mjs'

/**
 * Generate fixtures.json from component data
 *
 * @param {Pick<AssetEntry[1], "destPath">} options - Asset options
 */
export async function generateFixtures ({ destPath }) {
  const componentNames = await getComponentNames()

  // Loop component names
  const fixtures = componentNames.map(async (componentName) => {
    const fixture = await generateFixture(componentName)

    // Write fixtures.json to destination
    await files.write(join(componentName, 'fixtures.json'), {
      destPath,

      // Add fixtures as JSON (formatted)
      async fileContents () {
        return JSON.stringify(fixture, undefined, 2)
      }
    })
  })

  await Promise.all(fixtures)
}

/**
 * Generate macro-options.json from component data
 *
 * @param {Pick<AssetEntry[1], "destPath">} options - Asset options
 */
export async function generateMacroOptions ({ destPath }) {
  const componentNames = await getComponentNames()

  // Loop component names
  const macroOptions = componentNames.map(async (componentName) => {
    const { params } = await getComponentData(componentName)

    // Write macro-options.json to destination
    await files.write(join(componentName, 'macro-options.json'), {
      destPath,

      // Add macro options as JSON (formatted)
      async fileContents () {
        return JSON.stringify(params, undefined, 2)
      }
    })
  })

  await Promise.all(macroOptions)
}

/**
 * Component fixtures to JSON
 *
 * @param {string} componentName - Component name
 * @returns {Promise<{ component: string; fixtures: { [key: string]: unknown }[] }>} Component fixtures object
 */
async function generateFixture (componentName) {
  const [componentFiles, componentData] = await Promise.all([
    getComponentFiles(componentName),
    getComponentData(componentName)
  ])

  // Nunjucks template
  const [templatePath] = componentFiles
    .filter(filterPath(['**/template.njk']))

  // Loop examples
  const examples = componentData.examples.map(async (example) => {
    const context = { params: example.data }

    return {
      name: example.name,
      options: example.data,
      hidden: Boolean(example.hidden),

      // Wait for render to complete
      /** @type {string} */
      html: await new Promise((resolve, reject) => {
        return nunjucks.render(join(paths.root, templatePath), context, (error, result) => {
          return error ? reject(error) : resolve(result?.trim() ?? '')
        })
      })
    }
  })

  return {
    component: componentName,
    fixtures: await Promise.all(examples)
  }
}

/**
 * @typedef {import('./assets.mjs').AssetEntry} AssetEntry
 * @typedef {import('govuk-frontend-lib/components').ComponentData} ComponentData
 * @typedef {import('govuk-frontend-lib/components').ComponentOption} ComponentOption
 */
