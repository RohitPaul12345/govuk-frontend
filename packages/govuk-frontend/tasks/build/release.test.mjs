import { readFile } from 'fs/promises'
import { join } from 'path'

import { paths, pkg } from 'govuk-frontend-config'
import { getListing } from 'govuk-frontend-lib/files'

describe('dist/', () => {
  let listingSourceAssets
  let listingDistAssets

  beforeAll(async () => {
    listingSourceAssets = await getListing('**/*', {
      cwd: join(paths.package, 'src/govuk/assets')
    })

    listingDistAssets = await getListing('**/*', {
      cwd: join(paths.root, 'dist/assets')
    })
  })

  describe('assets/', () => {
    it('should include the same files as in src/assets', () => {
      expect(listingDistAssets).toEqual(listingSourceAssets)
    })
  })

  describe.each([
    `govuk-frontend-${pkg.version}.min.css`
  ])('%s', (filename) => {
    let stylesheet

    beforeAll(async () => {
      stylesheet = await readFile(join(paths.root, `dist/${filename}`), 'utf8')
    })

    it('should not contain current media query displayed on body element', () => {
      expect(stylesheet).not.toMatch(/body:before{content:/)
    })

    it('should contain the copyright notice', () => {
      expect(stylesheet).toContain('/*! Copyright (c) 2011 by Margaret Calvert & Henrik Kubel. All rights reserved. The font has been customised for exclusive use on gov.uk. This cut is not commercially available. */')
    })

    it('should contain source mapping URL', () => {
      expect(stylesheet).toMatch(new RegExp(`/\\*# sourceMappingURL=${filename}.map \\*/\n$`))
    })

    it('should contain version number custom property', () => {
      expect(stylesheet).toContain(`--govuk-frontend-version:"${pkg.version}"`)
    })
  })

  describe.each([
    `govuk-frontend-${pkg.version}.min.css.map`
  ])('%s', (filename) => {
    let sourcemap

    beforeAll(async () => {
      filename = `govuk-frontend-${pkg.version}.min.css.map`
      sourcemap = JSON.parse(await readFile(join(paths.root, `dist/${filename}`), 'utf8'))
    })

    it('should contain relative paths to sources', () => {
      expect(sourcemap.sources).toContain('../packages/govuk-frontend/src/govuk/all.scss')
      expect(sourcemap.sources).toContain('../packages/govuk-frontend/src/govuk/core/_govuk-frontend-version.scss')
    })
  })

  describe.each([
    `govuk-frontend-${pkg.version}.min.js`,
    `govuk-frontend-${pkg.version}.min.mjs`
  ])('%s', (filename) => {
    let javascript

    beforeAll(async () => {
      javascript = await readFile(join(paths.root, `dist/${filename}`), 'utf8')
    })

    it('should have the correct version name', () => {
      expect(javascript).toBeTruthy()
    })

    it('should contain correct version number', () => {
      expect(javascript).toContain(`version="${pkg.version}"`)
    })

    it('should contain source mapping URL', () => {
      expect(javascript).toMatch(new RegExp(`//# sourceMappingURL=${filename}.map\n$`))
    })
  })

  describe.each([
    `govuk-frontend-${pkg.version}.min.js.map`,
    `govuk-frontend-${pkg.version}.min.mjs.map`
  ])('%s', (filename) => {
    let sourcemap

    beforeAll(async () => {
      sourcemap = JSON.parse(await readFile(join(paths.root, `dist/${filename}`), 'utf8'))
    })

    it('should contain relative paths to sources', () => {
      expect(sourcemap.sources).toContain('../packages/govuk-frontend/src/govuk/all.mjs')
      expect(sourcemap.sources).toContain('../packages/govuk-frontend/src/govuk/common/govuk-frontend-version.mjs')
    })
  })

  describe('VERSION.txt', () => {
    let filename
    let version

    beforeAll(async () => {
      filename = 'VERSION.txt'
      version = await readFile(join(paths.root, `dist/${filename}`), 'utf8')
    })

    it('should contain the correct version', () => {
      expect(version).toEqual(`${pkg.version}\n`)
    })
  })
})
