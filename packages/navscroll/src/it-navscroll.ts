import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';
// import { type Position, type LinePosition, type DarkMode } from './types.js';

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
   * Titolo accessibile della modale
   */
  // @property({ type: String, attribute: 'modal-title' })
  // modalTitle = '';

  /**
   * Label del trigger modale
   */
  @property({ type: String, attribute: 'open-label' })
  openLabel = 'Apri navigazione';

  /**
   * Aria-Label del trigger modale
   */
  @property({ type: String, attribute: 'open-aria-label' })
  openAriaLabel = 'Apri/Chiudi indice di navigazione';

  /**
   * Label per il pulsante di 'Torna indietro' nella modale
   */
  @property({ type: String, attribute: 'back-label' })
  backLabel = 'Torna indietro';

  /**
   * ID del contenitore scrollabile da monitorare per la progress bar
   */
  @property({ type: String })
  for: string | null = null;

  // /** Where is navscroll placed on mobile when it is closed*/
  // @property({ type: String, attribute: 'position' })
  // position: Position = 'bottom';

  // /** Where you want to display separation line on desktop */
  // @property({ type: String, attribute: 'line-position' })
  // linePosition: LinePosition = 'right';

  // /** If you want to display progress bar */
  // @property({ type: Boolean })
  // progress: false;

  // /** If you want dark mode only on mobile */
  // @property({ type: String, attribute: 'dark-mode' })
  // darkMode: DarkMode = null;

  private mql!: MediaQueryList;

  private navEl!: HTMLElement;

  private modalEl?: HTMLElement;

  private mode: 'inline' | 'modal' = 'inline'; // Modalità di visualizzazione corrente, a seconda che siamo su desktop o mobile

  private observer!: IntersectionObserver;

  private progressEl!: HTMLElement; // div della barra

  private scrollContainer!: HTMLElement; // main scorrevole

  createRenderRoot() {
    // nav deve restare nel light DOM
    return this;
  }

  connectedCallback() {
    super.connectedCallback?.();

    // nav deve esistere
    this.navEl = this.querySelector('nav') as HTMLElement;

    if (!this.navEl) {
      // eslint-disable-next-line no-console
      console.warn('<it-navscroll> richiede un <nav> come figlio diretto');
      return;
    }

    // inizializza progress bar
    this.initProgressBar();

    // scrollspy
    this.initScrollSpy();

    // smooth scroll sui link e aria-current
    this.attachLinkListeners();

    // media query per modalità modal / inline
    this.mql = window.matchMedia(this.mediaQuery);
    this.mql.addEventListener('change', this.onMediaChange);
    this.updateMode(this.mql.matches);
  }

  disconnectedCallback() {
    super.disconnectedCallback?.();

    this.mql.removeEventListener('change', this.onMediaChange);
    this.observer?.disconnect();
  }

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
    } else {
      this.exitModal();
    }
  }

  private enterModal() {
    if (!this.modalEl) {
      this.modalEl = this.createModal();
    }

    if (!this.modalEl.contains(this.navEl)) {
      this.modalEl.appendChild(this.navEl);
    }

    if (!this.contains(this.modalEl)) {
      this.appendChild(this.modalEl);
    }
  }

  private exitModal() {
    if (this.modalEl?.contains(this.navEl)) {
      this.appendChild(this.navEl);
    }

    this.modalEl?.remove();
  }

  private createModal(): HTMLElement {
    const modal = document.createElement('it-modal');

    modal.setAttribute('position', 'left');
    modal.setAttribute('scrollable', 'true');
    modal.setAttribute('hide-close-button', 'true');
    modal.setAttribute('close-label', 'Chiudi navigazione');

    const trigger = document.createElement('button');
    trigger.setAttribute('class', 'custom-navbar-toggler');
    trigger.setAttribute('aria-label', this.openAriaLabel);
    trigger.slot = 'trigger';
    trigger.type = 'button';
    trigger.textContent = this.openLabel;

    const backButton = document.createElement('it-button');
    backButton.setAttribute('slot', 'header');
    backButton.setAttribute('variant', 'link');
    backButton.setAttribute('icon', 'it');
    backButton.innerHTML = `<it-icon name="it-arrow-left"></it-icon> <span>${this.backLabel}</span>`;
    backButton.addEventListener('click', () => {
      (modal as any).close?.();
    });

    modal.appendChild(backButton);

    modal.appendChild(trigger);

    return modal;
  }

  /*
   * Gestione dell'elemento attivo in base allo scroll
   */
  private initScrollSpy() {
    const links = this.navEl.querySelectorAll('a[href^="#"]');

    const sections = Array.from(links)
      .map((link) => document.querySelector(link.getAttribute('href')!))
      .filter(Boolean);

    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) return;

        this.setCurrent(`#${visible.target.id}`);
      },
      {
        root: null, // viewport
        rootMargin: '-30% 0px -30% 0px', // '${this.offset} 0px -30% 0px'
        threshold: [0.1, 0.5, 1],
      },
    );

    sections.forEach((section: any) => this.observer.observe(section));
  }

  private setCurrent(hash: string) {
    const links = this.navEl.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      const isCurrent = link.getAttribute('href') === hash;

      link.toggleAttribute('aria-current', isCurrent);
      link.classList.toggle('active', isCurrent);

      if (isCurrent) {
        link.setAttribute('aria-current', 'location');
      }
    });
  }

  /*
   * Gestione dello scroll alle sezioni
   */
  private attachLinkListeners() {
    const links = this.navEl.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        const hash = link.getAttribute('href')!;
        const targetId = hash?.slice(1);
        if (!targetId) return;

        const targetEl = document.getElementById(targetId);
        if (!targetEl) return;

        event.preventDefault();

        // scroll smooth
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // aggiorna aria-current
        this.setCurrent(`#${targetId}`);

        // chiude il modal se siamo in modal mode
        if (this.mode === 'modal' && this.modalEl) {
          (this.modalEl as any).close?.(); // assume it-modal espone close()
        }

        // sposta il focus al target

        targetEl.setAttribute('tabindex', '-1'); // temporaneo se non focusabile
        // targetEl.focus({ preventScroll: true }); // preveniamo scroll automatico per evitare jump
        targetEl.focus();

        // opzionale: rimuovi tabindex dopo focus
        // const removeTabindex = () => {
        //   targetEl.removeAttribute('tabindex');
        //   targetEl.removeEventListener('blur', removeTabindex);
        // };
        // targetEl.addEventListener('blur', removeTabindex);

        // aggiorna URL senza ricaricare pagina
        window.history.replaceState(null, '', `#${targetId}`);
      });
    });
  }

  /*
   * Gestione della progress bar
   */
  private initProgressBar() {
    // cerca il main referenziato

    this.scrollContainer = this.for ? document.getElementById(this.for)! : (document.scrollingElement as HTMLElement);

    if (!this.scrollContainer) return;

    this.progressEl = this.querySelector('[role="progressbar"]')!;
    if (!this.progressEl) return;

    this.scrollContainer.addEventListener('scroll', () => {
      this.updateProgress();
    });

    // init a 0%
    this.updateProgress();
  }

  private updateProgress() {
    const scrollTop = this.scrollContainer?.scrollTop;
    const scrollHeight = this.scrollContainer?.scrollHeight;
    const clientHeight = this.scrollContainer?.clientHeight;

    const percent = Math.min(100, Math.max(0, (scrollTop / (scrollHeight - clientHeight)) * 100));

    // aggiorna visivamente
    this.progressEl.setAttribute('aria-valuenow', percent.toFixed(0));
  }

  render() {
    // nessun template: gestione DOM manuale
    return html``;
  }

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

  // render() {
  //   let darkClass = '';
  //   switch (this.darkMode) {
  //     case 'mobile':
  //       darkClass = 'theme-dark-mobile';
  //       break;
  //     case 'desktop':
  //       darkClass = 'theme-dark-desktop';
  //       break;
  //     case 'always':
  //       darkClass = 'theme-dark-mobile theme-dark-desktop';
  //       break;
  //     default:
  //       darkClass = '';
  //   }

  //   return html`
  //     <nav
  //       class="${this.composeClass(
  //         'navbar',
  //         'it-navscroll-wrapper',
  //         'navbar-expand-lg',
  //         this.position === 'bottom' ? 'it-bottom-navscroll' : 'it-top-navscroll',
  //         this.linePosition === 'left' ? 'it-left-side' : 'it-right-side',
  //         darkClass,
  //       )}"
  //     ></nav>
  //   `;
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-navscroll': ItNavscroll;
  }
}
