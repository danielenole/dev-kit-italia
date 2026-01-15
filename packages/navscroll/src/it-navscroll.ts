/* eslint-disable default-param-last */
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';
import { type Position, type DarkMode, type LinePosition } from './types.js';

import styles from './navscroll.scss';

@customElement('it-navscroll')
export class ItNavscroll extends BaseComponent {
  static styles = styles;

  /**
   * Breakpoint di usabilità (zoom-safe)
   */
  @property({ type: Number })
  breakpoint = 991;

  /**
   * Label del trigger modale
   */
  @property({ type: String, attribute: 'open-label' })
  openLabel = 'Indice di navigazione';

  /**
   * Aria-Label del trigger modale
   */
  @property({ type: String, attribute: 'open-aria-label' })
  openAriaLabel = 'Apri/Chiudi indice di navigazione';

  /**
   * Label per il pulsante di 'Torna indietro' nella modale
   */
  @property({ type: String, attribute: 'back-label' })
  backLabel = 'Indietro';

  /**
   * ID del contenitore scrollabile da monitorare per la progress bar
   */
  @property({ type: String })
  for: string | null = null;

  /**
   * Where is navscroll placed on mobile when it is closed
   * */
  @property({ type: String, attribute: 'position' })
  position: Position = 'bottom';

  /**
   * If on desktop you want navscroll to be sticky on top
   * */
  @property({ type: Boolean })
  sticky: boolean = false;

  /** Where you want to display separation line on desktop */
  @property({ type: String, attribute: 'line-position' })
  linePosition: LinePosition = null;

  /** If you want dark mode only on mobile or desktop, or both */
  @property({ type: String, attribute: 'dark-mode' })
  darkMode: DarkMode = null;

  private mql!: MediaQueryList;

  private navEl!: HTMLElement; // nav

  private modalEl?: HTMLElement | null;

  @state()
  private mode: 'inline' | 'modal' = 'inline'; // Modalità di visualizzazione corrente, a seconda che siamo su desktop o mobile

  private progressEl!: HTMLElement; // div della progressbar

  private scrollContainer!: HTMLElement; // contenitore scrollabile

  private targetContainer!: HTMLElement; // container indicato dall'attributo 'for'

  private activeTarget: string | null = null; // voce di menu attiva in questo momento

  connectedCallback() {
    super.connectedCallback?.();

    // nav deve esistere
    this.navEl = this.querySelector('nav') as HTMLElement;
    if (!this.navEl) {
      // eslint-disable-next-line no-console
      this.logger.error('<it-navscroll> requires a <nav> item as children.');
      return;
    }

    this.progressEl = this.querySelector('[slot="progressbar"]') as HTMLElement; // ora punta al div corretto

    // media query per modalità modal / inline
    this.mql = window.matchMedia(this.mediaQuery);
    this.mql.addEventListener('change', this.onMediaChange);
  }

  protected firstUpdated() {
    // ora il DOM del render esiste

    // inizializzazioni che dipendono dal DOM
    this.initContainers();
    this.attachLinkListeners();

    // inizializza il mode corretto
    this.updateMode(this.mql.matches);
  }

  protected updated(changedProperties: Map<string, any>) {
    super.updated?.(changedProperties);

    if (changedProperties.has('mode') && this.mode === 'modal') {
      this.enterModal();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback?.();

    this.mql.removeEventListener('change', this.onMediaChange);
    try {
      this.scrollContainer.removeEventListener('scroll', this.onScroll);
      window.removeEventListener('scroll', this.onScroll);
    } catch (e) {
      // do nothing. One of this.scrollContainer or window will not have this.onScroll on event scroll.
    }
  }

  /*
   * Gestione dimensione schermo
   */
  private get mediaQuery() {
    return `(max-width: ${this.breakpoint}px)`;
  }

  private onMediaChange = (e: MediaQueryListEvent) => {
    this.updateMode(e.matches);
  };

  /*
   * Gestione della modale
   */
  private updateMode(isConstrained: boolean) {
    const nextMode = isConstrained ? 'modal' : 'inline';
    if (this.mode === nextMode) return;

    this.mode = nextMode;

    if (this.mode === 'modal') {
      this.enterModal();
    }
  }

  private async enterModal() {
    if (!this.modalEl) {
      this.modalEl = this.shadowRoot?.querySelector('it-modal') as HTMLElement | null;

      if (!this.modalEl) {
        return;
      }
      this.modalEl.addEventListener('it-modal-open', () => {
        document.body.classList.add('navbar-open');
      });
      this.modalEl.addEventListener('it-modal-close', () => {
        document.body.classList.remove('navbar-open');
      });

      const backButton = this.shadowRoot?.querySelector("it-modal it-button[slot='header']");
      backButton?.addEventListener('click', () => {
        (this.modalEl as any).hide?.();
      });
    }

    this.updateTriggerText();
  }

  /*
   * Gestione dei container
   */
  private get scrollContainerTop() {
    return this.scrollContainer === document.documentElement ? window.scrollY : this.scrollContainer.scrollTop;
  }

  private initContainers() {
    // Cerco il main referenziato
    this.targetContainer = this.for ? document.querySelector(this.for)! : (document.scrollingElement as HTMLElement);

    // Determino il container corretto
    const style = this.targetContainer ? getComputedStyle(this.targetContainer) : null;
    const overflowY = style?.overflowY;
    const isScrollableContainer = overflowY !== 'visible' && overflowY !== 'hidden';

    if (isScrollableContainer && this.targetContainer instanceof HTMLElement) {
      // container interno scrollabile
      this.scrollContainer = this.targetContainer;
      this.scrollContainer.addEventListener('scroll', () => this.onScroll());
    } else {
      // scroll della pagina → ascolto window
      this.scrollContainer = document.documentElement; // placeholder
      window.addEventListener('scroll', () => this.onScroll());
    }

    if (!this.progressEl) return;

    // init a 0%
    this.updateProgress();
  }

  /*
   * Gestione della voce attiva
   */
  private setCurrent(hash: string) {
    const links = this.navEl.querySelectorAll('a[href^="#"]');

    // 1️⃣ reset: rimuovo active da tutti
    links.forEach((link) => {
      link.classList.remove('active');
      link.removeAttribute('aria-current');
    });

    // 2️⃣ applico active solo al link corrente e ai suoi parent
    const currentLink = this.navEl.querySelector(`a[href="${hash}"]`);
    if (currentLink) {
      currentLink.classList.add('active');
      currentLink.setAttribute('aria-current', 'location');

      let parentLi = currentLink.parentElement?.parentElement?.closest('li');
      while (parentLi) {
        parentLi.querySelector('a[href^="#"]')?.classList.add('active');
        parentLi = parentLi.parentElement?.parentElement?.closest('li');
      }
    }

    // Aggiorna trigger testo
    if (this.mode === 'modal') {
      this.updateTriggerText();
    }
  }

  // aggiorna il testo del trigger della modale in base al link attivo
  private updateTriggerText() {
    if (!this.modalEl) return;

    const trigger = this.modalEl.querySelector('[slot="trigger"]') as HTMLButtonElement;
    if (!trigger) return;

    const activeLink = this.navEl.querySelector('a[aria-current="location"]') as HTMLAnchorElement;

    if (activeLink) {
      trigger.textContent = activeLink.textContent;
    } else {
      // fallback
      trigger.textContent = this.openLabel;
    }
  }

  /*
   * Gestione dello scroll e della progressbar
   */
  private onScroll() {
    this.updateProgress();
    this.scrollHandler();
  }

  private scrollHandler() {
    const links = Array.from(this.navEl.querySelectorAll('a[href^="#"]'));
    const sections = links
      .map((link) => document.getElementById(link.getAttribute('href')!.slice(1)))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const scrollTop = this.scrollContainerTop;
    const viewportHeight = window.innerHeight;

    // calcola quale sezione è "active"
    let currentSection: HTMLElement | null = null;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + scrollTop;

      // se la sezione è visibile (top entro il 25% dell'alto viewport)
      if (scrollTop + viewportHeight * 0.25 >= sectionTop) {
        currentSection = section;
      } else {
        break;
      }
    }

    if (currentSection) {
      const id = currentSection?.id;

      this.activeTarget = `#${id}`;
      this.setCurrent(this.activeTarget);
    }
  }

  private updateProgress() {
    if (!this.progressEl || !this.scrollContainer) return;

    const isDocumentScroll = this.scrollContainer === document.documentElement;
    const scrollTop = this.scrollContainerTop;
    const clientHeight = isDocumentScroll ? window.innerHeight : this.scrollContainer.clientHeight;
    const scrollHeight = isDocumentScroll ? document.documentElement.scrollHeight : this.scrollContainer.scrollHeight;

    const maxScrollable = Math.max(scrollHeight - clientHeight, 1);

    let percent = (scrollTop / maxScrollable) * 100;
    percent = Math.min(100, Math.max(0, percent));

    // TODO: change when it-progress is implemented
    this.progressEl.setAttribute('aria-valuenow', percent.toFixed(0));
    this.progressEl.style.width = `${percent.toFixed(0)}%`;
  }

  /*
   * Gestione dello scroll alle sezioni
   */
  private attachLinkListeners() {
    const links = this.navEl.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        const hash = link.getAttribute('href')!;
        const targetId = hash.slice(1);
        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        this.activeTarget = `#${targetId}`;
        this.setCurrent(this.activeTarget);

        // scroll animato
        this.scrollToElement(targetEl, 700, 0, () => {
          // focus senza scroll jump
          targetEl.setAttribute('tabindex', '-1');
          targetEl.focus({ preventScroll: true });
          setTimeout(() => {
            targetEl.removeAttribute('tabindex');
          }, 500);

          // aggiorna URL
          window.history.replaceState(null, '', `#${targetId}`);
        });

        // chiude il modal se siamo in modal mode
        if (this.mode === 'modal' && this.modalEl) {
          (this.modalEl as any).hide?.();
        }
      });
    });
  }

  // eslint-disable-next-line class-methods-use-this
  private scrollToElement(targetEl: HTMLElement, duration = 700, offset = 0, callback?: () => void) {
    const startY = window.scrollY;
    const targetY = targetEl.getBoundingClientRect().top + startY - offset;
    const distance = targetY - startY;
    const startTime = performance.now();

    const easeInOutSine = (t: number) => -(Math.cos(Math.PI * t) - 1) / 2;

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeInOutSine(progress));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else if (callback) {
        callback();
      }
    };

    requestAnimationFrame(step);
  }

  render() {
    const positionClass = this.position === 'bottom' ? 'it-bottom-navscroll' : 'it-top-navscroll';
    let themeClass = '';
    switch (this.darkMode) {
      case 'mobile':
        themeClass = 'theme-dark-mobile';
        break;
      case 'desktop':
        themeClass = 'theme-dark-desktop';
        break;
      case 'always':
        themeClass = 'theme-dark-mobile theme-dark-desktop';
        break;
      default:
        themeClass = '';
    }
    let lineClass = '';
    switch (this.linePosition) {
      case 'left':
        lineClass = 'it-left-side';
        break;
      case 'right':
        lineClass = 'it-right-side';
        break;
      default:
        lineClass = '';
    }
    const stickyClass = this.sticky && this.mode === 'inline' ? 'affix-top' : '';

    const navscrollWrapper = ['it-navscroll-wrapper', 'navbar', positionClass, stickyClass, themeClass, lineClass].join(
      ' ',
    );

    return html`
      <div class="${navscrollWrapper}">
        ${this.mode === 'modal'
          ? html`<it-modal position="left" scollable="true" hide-close-button="true">
              <it-button slot="trigger" class="custom-navar-toggler" aria-label="${this.openAriaLabel}" variant="link">
                <span>${this.openLabel}</span>
              </it-button>
              <it-button slot="header" variant="link" icon="" block="">
                <it-icon name="it-chevron-left" size="sm" color="primary"></it-icon> <span>${this.backLabel}</span>
              </it-button>
              <div slot="content" class="menu-wrapper" tabindex="-1">
                <slot></slot>
              </div>
            </it-modal>`
          : html` <div class="menu-wrapper" tabindex="-1"><slot></slot></div>`}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-navscroll': ItNavscroll;
  }
}
