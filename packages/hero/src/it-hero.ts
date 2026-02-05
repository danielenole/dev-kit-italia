/* eslint-disable lit-a11y/list */
import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './hero.scss';

/**
 * Simple breadcrumbs component following repository conventions.
 * - Renders a list of slotted anchors or items
 * - Dark mode variant
 */
@customElement('it-hero')
export class ItHero extends BaseComponent {
  static styles = styles;

  @property({ type: String, reflect: true, attribute: 'it-aria-label' }) itAriaLabel = 'Breadcrumbs';

  @property({ type: String, reflect: true }) separator = '/';

  @property({ type: Boolean, reflect: true }) dark = false;

  private _setChildrenProperties() {
    const slot = this.shadowRoot?.querySelector('slot');
    const assignedElements = slot?.assignedElements({ flatten: true }) || [];
    assignedElements.forEach((el, index) => {});
  }

  override render() {
    const olClasses = this.dark ? 'breadcrumb dark' : 'breadcrumb';
    return html`
      <nav aria-label="${this.itAriaLabel}" part="breadcrumbs-container" class="breadcrumb-container">
        <ol class="${olClasses}" part="breadcrumbs">
          <slot @slotchange=${this._setChildrenProperties}></slot>
        </ol>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-hero': ItHero;
  }
}
