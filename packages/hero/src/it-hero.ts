/* eslint-disable lit-a11y/list */
import { BaseComponent, setAttributes } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, queryAssignedElements, state } from 'lit/decorators.js';

import styles from './hero.scss';

@customElement('it-hero')
export class ItHero extends BaseComponent {
  static styles = styles;

  @state() private _hasBackground = false;

  @state() private _hasContent = false;

  @property({ type: String, reflect: true, attribute: 'it-aria-label' }) itAriaLabel = 'In evidenza';

  @queryAssignedElements({ slot: 'background', flatten: true }) private _backgroundItems!: Array<HTMLElement>;

  @queryAssignedElements({ slot: 'content', flatten: true }) private _contentItems!: Array<HTMLElement>;

  private _handleSlotBackgroundChange() {
    // Verifichiamo se l'array degli elementi assegnati è popolato
    this._hasBackground = this._backgroundItems.length > 0;
  }

  private _handleSlotContentChange() {
    // Verifichiamo se l'array degli elementi assegnati è popolato
    this._hasContent = this._contentItems.length > 0;
  }

  override render() {
    return html`
      <section class="it-hero-wrapper" ${setAttributes(this._ariaAttributes)}>
        ${this._hasBackground
          ? html`
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper">
                    <slot name="background" @slotchange=${this._handleSlotBackgroundChange}></slot>
                  </div>
                </div>
              </div>
            `
          : html` <slot name="background" @slotchange=${this._handleSlotBackgroundChange}></slot> `}
        ${this._hasContent
          ? html`
              <div class="container">
                <div class="it-hero-text-wrapper bg-dark">
                    <slot  name="content" @slotchange=${this._handleSlotContentChange}></slot>
                  </div>
                </div>
              </div>
            `
          : html` <slot name="content" @slotchange=${this._handleSlotContentChange}></slot> `}
      </section>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-hero': ItHero;
  }
}
