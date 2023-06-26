const { resolve } = require('path')

module.exports = {
  settings: {
    node: {
      version: '^18.12.0'
    }
  },
  overrides: [
    {
      files: ['src/govuk/**/*.mjs'],
      excludedFiles: ['**/*.test.mjs'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        // Note: Allow ES2018 for async/await syntax
        ecmaVersion: '2018',
        project: [resolve(__dirname, 'tsconfig.json')]
      },
      plugins: [
        '@typescript-eslint',
        'es-x'
      ],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:es-x/restrict-to-es2018'
      ],
      env: {
        browser: true
      },
      rules: {
        // Check type support for template string implicit `.toString()`
        '@typescript-eslint/restrict-template-expressions': [
          'error',
          {
            allowBoolean: true,
            allowNumber: true
          }
        ],

        // Babel transpiles ES2020 class fields
        'es-x/no-class-fields': 'off',

        // JSDoc blocks are mandatory
        'jsdoc/require-jsdoc': [
          'error', {
            enableFixer: false,
            require: {
              ClassDeclaration: true,
              ClassExpression: true,
              FunctionExpression: true,
              MethodDefinition: true
            }
          }
        ]
      }
    },
    {
      // Matches 'JavaScript component tests' in jest.config.mjs
      // to ignore unknown Jest Puppeteer globals
      files: [
        '**/components/globals.test.js',
        '**/components/*/*.test.{js,mjs}'
      ],
      excludedFiles: [
        '**/(*.)?template.test.{js,mjs}',
        '**/*.unit.test.{js,mjs}'
      ],
      globals: {
        page: 'readonly',
        browser: 'readonly',
        jestPuppeteer: 'readonly'
      }
    }
  ]
}
