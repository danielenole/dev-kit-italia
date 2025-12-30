import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent, setAttributes } from '@italia/globals';
import { type Position, type LinePosition, type DarkMode } from './types.js';

import styles from './navscroll.scss';

@customElement('it-navscroll')
export class ItNavscroll extends BaseComponent {
  static styles = styles;

  /** Where is navscroll placed on mobile when it is closed*/
  @property({ type: String, attribute: 'position' })
  position: Position = 'bottom';

  /** Where you want to display separation line on desktop */
  @property({ type: String, attribute: 'line-position' })
  linePosition: LinePosition = 'right';

  /** If you want to display progress bar */
  @property({ type: Boolean })
  progress: false;

  /** If you want dark mode only on mobile */
  @property({ type: String, attribute: 'dark-mode' })
  darkMode: DarkMode = null;

  // protected links = [];

  // private _onSlotChange(e: any) {
  //   const slot = e.target;
  //   const assigned = slot?.assignedElements({ flatten: true });

  //   this.links = assigned
  //     .filter((el: HTMLElement) => el.tagName === 'A')
  //     .map((a: HTMLElement) => ({
  //       href: a.getAttribute('href'),
  //       text: a.textContent?.trim(),
  //     }));

  //   this.requestUpdate(); // aggiorna la UI
  // }

  render() {
    let darkClass = '';
    switch (this.darkMode) {
      case 'mobile':
        darkClass = 'theme-dark-mobile';
        break;
      case 'desktop':
        darkClass = 'theme-dark-desktop';
        break;
      case 'always':
        darkClass = 'theme-dark-mobile theme-dark-desktop';
        break;
      default:
        darkClass = '';
    }

    return html`
      <nav
        class="${this.composeClass(
          'navbar',
          'it-navscroll-wrapper',
          'navbar-expand-lg',
          this.position === 'bottom' ? 'it-bottom-navscroll' : 'it-top-navscroll',
          this.linePosition === 'left' ? 'it-left-side' : 'it-right-side',
          darkClass,
        )}"
      ></nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-navscroll': ItNavscroll;
  }
}
