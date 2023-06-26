import { mergeConfigs } from '../../common/index.mjs'
import { normaliseDataset } from '../../common/normalise-dataset.mjs'

/**
 * Notification Banner component
 */
export class NotificationBanner {
  /**
   * @param {Element} $module - HTML element to use for notification banner
   * @param {NotificationBannerConfig} [config] - Notification banner config
   */
  constructor ($module, config) {
    if (!($module instanceof HTMLElement) || !document.body.classList.contains('govuk-frontend-supported')) {
      return this
    }

    /** @private */
    this.$module = $module

    /**
     * @private
     * @type {NotificationBannerConfig}
     */
    this.config = mergeConfigs(
      NotificationBanner.defaults,
      config || {},
      normaliseDataset($module.dataset)
    )
  }

  /**
   * Initialise component
   */
  init () {
    // Check that required elements are present
    if (!this.$module) {
      return
    }

    this.setFocus()
  }

  /**
   * Focus the element
   *
   * If `role="alert"` is set, focus the element to help some assistive technologies
   * prioritise announcing it.
   *
   * You can turn off the auto-focus functionality by setting `data-disable-auto-focus="true"` in the
   * component HTML. You might wish to do this based on user research findings, or to avoid a clash
   * with another element which should be focused when the page loads.
   *
   * @private
   */
  setFocus () {
    if (this.config.disableAutoFocus) {
      return
    }

    if (this.$module.getAttribute('role') !== 'alert') {
      return
    }

    // Set tabindex to -1 to make the element focusable with JavaScript.
    // Remove the tabindex on blur as the component doesn't need to be focusable after the page has
    // loaded.
    if (!this.$module.getAttribute('tabindex')) {
      this.$module.setAttribute('tabindex', '-1')

      this.$module.addEventListener('blur', () => {
        this.$module.removeAttribute('tabindex')
      })
    }

    this.$module.focus()
  }

  /**
   * Notification banner default config
   *
   * @see {@link NotificationBannerConfig}
   * @constant
   * @default
   * @type {NotificationBannerConfig}
   */
  static defaults = Object.freeze({
    disableAutoFocus: false
  })
}

/**
 * Notification banner config
 *
 * @typedef {object} NotificationBannerConfig
 * @property {boolean} [disableAutoFocus=false] - If set to `true` the
 *   notification banner will not be focussed when the page loads. This only
 *   applies if the component has a `role` of `alert` – in other cases the
 *   component will not be focused on page load, regardless of this option.
 */
