/**
 * Returns the value of the given attribute closest to the given element (including itself)
 *
 * @private
 * @param {Element} $element - The element to start walking the DOM tree up
 * @param {string} attributeName - The name of the attribute
 * @returns {string | null} Attribute value
 */
export function closestAttributeValue ($element, attributeName) {
  const $closestElementWithAttribute = $element.closest(`[${attributeName}]`)
  return $closestElementWithAttribute
    ? $closestElementWithAttribute.getAttribute(attributeName)
    : null
}
