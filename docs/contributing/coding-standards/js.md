# JavaScript style guide

## Files

JavaScript files have the same name as the component's folder name. Test files have a `.test` suffix placed before the file extension.

```console
component
├── component.mjs
└── component.test.js
```

## Skeleton

```mjs
/**
 * Component name
 */
export class Example {
  /**
   * @param {Element} $module - HTML element to use for component
   */
  constructor ($module) {
    if (!($module instanceof HTMLElement) || !document.body.classList.contains('govuk-frontend-supported')) {
      return this
    }

    this.$module = $module

    // Code goes here
  }

  /**
   * Initialise component
   */
  init () {
    // Check that required elements are present
    if (!this.$module) {
      return
    }

    // Code goes here
    this.$module.addEventListener('click', () => {
      // ...
    })
  }
}
```

## Use data attributes to initialise component JavaScript

Use `data-module` attributes in HTML to initialise a component in JavaScript. For example:

```html
data-module="govuk-accordion"
```

## Use classes to target DOM elements

After you initialise a component, use `govuk-js-*` classes to target DOM elements. For example:

```html
class="govuk-js-header-toggle"
```

## Comments

Use `/** ... */` for multi-line comments. Include a description, and specify types and values for all parameters and return values.

```mjs
/**
 * Get the first descendent (child) of an HTML element that matches a given tag name
 *
 * @param {Element} $element - HTML element
 * @param {string} tagName - Tag name (for example 'div')
 * @returns {Element} Ancestor element
 */
function exampleHelper ($element, tagName) {
  // Code goes here
  return $element.querySelector(tagName)
}
```

Use `//` for single-line comments. Place single-line comments on a new line above the subject of the comment.

Use `// FIXME:` to annotate problems.

Use `// TODO:` to annotate solutions to problems.

## Classes and methods

Use the class design pattern to structure your code.

Create a class and define the methods you need.

```mjs
class Example {
  // Code goes here
}
```

Add methods to the class.

```mjs
// Good
class Example {
  init () {
    // Code goes here
  }
}

// Bad
Example.prototype = {
  init: function () {
    // Code goes here
  }
}
```

When initialising a class, use the `new` keyword.

```mjs
// Bad
const myExample1 = Example()

// Good
const myExample2 = new Example()
```

## Modules

Use ECMAScript (ES) modules (`import`/`export`) over CommonJS and other formats. You can always transpile to your preferred module system.

```mjs
import { closestAttributeValue } from '../common/index.mjs'

// Code goes here
export function exampleHelper1 () {}
export function exampleHelper2 () {}
```

You must specify the file extension when using the import keyword.

Avoid using namespace imports (`import * as namespace`) in code bundled for CommonJS and other formats as this can prevent "tree shaking" optimisations.

Prefer named exports over default exports to avoid compatibility issues with transpiler "synthetic default" as discussed in: https://github.com/alphagov/govuk-frontend/issues/2829

## Polyfilling

If you need polyfills for features that are not yet included in this project, please see the following guide on [how to add polyfills](../polyfilling.md).

## Formatting and linting

GOV.UK Frontend uses [JavaScript Standard Style](https://standardjs.com), an opinionated JavaScript linter. All JavaScript files follow its conventions, and it runs on GitHub Actions to ensure that new pull requests are in line with them.

The standard docs have a [complete list of rules and some reasoning behind them](https://standardjs.com/rules.html).

Read more about [running standard manually, or in your editor, on the 'JavaScript coding style' page of the GDS Way](https://gds-way.cloudapps.digital/manuals/programming-languages/js.html#linting).

See also [testing and linting](/docs/releasing/testing-and-linting.md).
