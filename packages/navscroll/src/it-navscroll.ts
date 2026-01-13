import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { BaseComponent } from '@italia/globals';
import { type Position, type DarkMode /*, type LinePosition , */ } from './types.js';

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
  backLabel = 'Torna indietro';

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
  @property({ type: Boolean, attribute: 'sticky' })
  sticky: boolean = false;

  // /** Where you want to display separation line on desktop */
  // @property({ type: String, attribute: 'line-position' })
  // linePosition: LinePosition = 'right';

  /** If you want to display progress bar */
  @property({ type: Boolean })
  progress: boolean = false;

  /** If you want dark mode only on mobile or desktop, or both */
  @property({ type: String, attribute: 'dark-mode' })
  darkMode: DarkMode = null;

  private mql!: MediaQueryList;

  private navEl!: HTMLElement;

  private modalEl?: HTMLElement;

  private mode: 'inline' | 'modal' = 'inline'; // Modalità di visualizzazione corrente, a seconda che siamo su desktop o mobile

  private observer!: IntersectionObserver;

  private progressEl!: HTMLElement; // div della barra

  private scrollContainer!: HTMLElement; // contenitore scrollabile

  private targetContainer!: HTMLElement;

  private wrapper!: HTMLElement;

  private menuWrapper!: HTMLElement;

  private _activeTarget: string | null = null;

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
      this.logger.error('<it-navscroll> requires a <nav> items as direct children.');
      return;
    }

    // media query per modalità modal / inline
    this.mql = window.matchMedia(this.mediaQuery);
    this.mql.addEventListener('change', this.onMediaChange);
    // this.updateMode(this.mql.matches);
  }

  protected firstUpdated() {
    // ora il DOM del render esiste
    this.wrapper = this.querySelector('.it-navscroll-wrapper') as HTMLElement;
    this.menuWrapper = this.querySelector('.menu-wrapper') as HTMLElement;

    if (!this.wrapper || !this.menuWrapper) {
      this.logger.error('Wrapper not found');
      return;
    }

    // prendi tutti i figli e spostali nel wrapper
    const children = Array.from(this.childNodes).filter((node) => node !== this.wrapper);
    children.forEach((child) => this.menuWrapper.appendChild(child));
    this.wrapper.appendChild(this.menuWrapper);

    // inizializzazioni che dipendono dal DOM
    this.initProgressBar();
    this.initScrollSpy();
    this.attachLinkListeners();

    // inizializza il mode corretto
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
    if (this.sticky) {
      if (nextMode === 'inline' && !this.wrapper.classList.contains('affix-top')) {
        this.wrapper.classList.add('affix-top');
      }
      if (nextMode === 'modal' && this.wrapper.classList.contains('affix-top')) {
        this.wrapper.classList.remove('affix-top');
      }
    }

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

    if (!this.modalEl.contains(this.menuWrapper)) {
      this.menuWrapper.setAttribute('slot', 'content');
      this.modalEl.appendChild(this.menuWrapper);
    }

    if (!this.wrapper.contains(this.modalEl)) {
      this.wrapper.appendChild(this.modalEl);
    }
    // if (!this.shadowRoot?.contains(this.modalEl)) {
    //   this.shadowRoot?.appendChild(this.modalEl);
    // }
    this.updateTriggerText();
  }

  private exitModal() {
    if (this.modalEl?.contains(this.menuWrapper)) {
      this.wrapper.appendChild(this.menuWrapper);
      // this.shadowRoot?.appendChild(this.navEl);
    }

    this.modalEl?.remove();
    this.modalEl = undefined;
    this.menuWrapper.removeAttribute('slot');
  }

  private createModal(): HTMLElement {
    const modal = document.createElement('it-modal');

    modal.setAttribute('position', 'left');
    modal.setAttribute('scrollable', 'true');
    modal.setAttribute('hide-close-button', 'true');

    // trigger modale
    const trigger = document.createElement('it-button');
    trigger.setAttribute('class', 'custom-navbar-toggler');
    trigger.setAttribute('aria-label', this.openAriaLabel);
    trigger.setAttribute('variant', 'link');
    trigger.setAttribute('slot', 'trigger');
    trigger.innerHTML = `<span>${this.openLabel}</span>`;

    // pulsante di back
    const backButton = document.createElement('it-button');
    backButton.setAttribute('slot', 'header');
    backButton.setAttribute('variant', 'link');
    backButton.setAttribute('icon', 'it');
    backButton.innerHTML = `<it-icon name="it-arrow-left"></it-icon> <span>${this.backLabel}</span>`;
    backButton.addEventListener('click', () => {
      (modal as any).hide?.();
    });

    modal.appendChild(trigger);
    modal.appendChild(backButton);

    modal.addEventListener('it-modal-open', () => {
      document.body.classList.add('navbar-open');
    });
    modal.addEventListener('it-modal-close', () => {
      document.body.classList.remove('navbar-open');
    });

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

        this._activeTarget = `#${(visible.target as HTMLElement).id}`;
        this.setCurrent(this._activeTarget);
      },
      {
        root: null, // viewport
        rootMargin: '-30% 0px -30% 0px',
        threshold: [0.1, 0.5, 1],
      },
    );

    sections.forEach((section: any) => this.observer.observe(section));
  }

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

        // chiude il modal se siamo in modal mode
        if (this.mode === 'modal' && this.modalEl) {
          (this.modalEl as any).hide?.();
        }

        // sposta il focus al target

        targetEl.setAttribute('tabindex', '-1'); // temporaneo se non focusabile
        // targetEl.focus({ preventScroll: true }); // preveniamo scroll automatico per evitare jump
        targetEl.focus();

        // aggiorna URL senza ricaricare pagina
        window.history.replaceState(null, '', `#${targetId}`);
      });
    });
  }

  /*
   * Gestione della progress bar
   */
  private initProgressBar() {
    // Cerco il main referenziato
    this.targetContainer = this.for ? document.querySelector(this.for)! : (document.scrollingElement as HTMLElement);

    // Determino il container corretto
    const style = this.targetContainer ? getComputedStyle(this.targetContainer) : null;
    const overflowY = style?.overflowY;
    const isScrollableContainer = overflowY !== 'visible' && overflowY !== 'hidden';

    if (isScrollableContainer && this.targetContainer instanceof HTMLElement) {
      // container interno scrollabile
      this.scrollContainer = this.targetContainer;
      this.scrollContainer.addEventListener('scroll', () => this.updateProgress());
    } else {
      // scroll della pagina → ascolto window
      this.scrollContainer = document.documentElement; // placeholder
      window.addEventListener('scroll', () => this.updateProgress());
    }

    this.progressEl = this.querySelector('[role="progressbar"]')!;
    if (!this.progressEl) return;

    // init a 0%
    this.updateProgress();
  }

  private updateProgress() {
    if (!this.progressEl || !this.scrollContainer) return;

    const isDocumentScroll = this.scrollContainer === document.documentElement;
    const offset =
      this.targetContainer !== document.documentElement
        ? this.targetContainer.getBoundingClientRect().top + window.pageYOffset
        : 0;
    const scrollTop = isDocumentScroll ? window.scrollY : this.scrollContainer.scrollTop;
    const clientHeight = isDocumentScroll ? window.innerHeight : this.scrollContainer.clientHeight;
    const scrollHeight = isDocumentScroll ? document.documentElement.scrollHeight : this.scrollContainer.scrollHeight;

    const maxScrollable = Math.max(scrollHeight - clientHeight, 1);

    let percent = 0;

    if (this._activeTarget) {
      const section = document.querySelector<HTMLElement>(this._activeTarget);
      if (section) {
        // ✅ calcolo corretto sectionTop relativo allo scrollContainer
        const sectionTop = isDocumentScroll
          ? section.offsetTop - offset
          : section.offsetTop - (this.scrollContainer as HTMLElement).offsetTop;

        const sectionHeight = section.offsetHeight || 1;

        const sectionStartPercent = (sectionTop / maxScrollable) * 100;
        const sectionEndPercent = ((sectionTop + sectionHeight) / maxScrollable) * 100;

        const sectionProgress = Math.min(1, Math.max(0, (scrollTop - sectionTop) / sectionHeight));

        percent = sectionStartPercent + sectionProgress * (sectionEndPercent - sectionStartPercent);
      }
    } else {
      percent = (scrollTop / maxScrollable) * 100;
    }

    percent = Math.min(100, Math.max(0, percent));

    this.progressEl.setAttribute('aria-valuenow', percent.toFixed(0));
    this.progressEl.style.width = `${percent.toFixed(0)}%`;
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

  render() {
    // nessun template: gestione DOM manuale
    // return html``;
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

    const wrapperClasses = ['it-navscroll-wrapper', 'navbar', positionClass, themeClass].join(' ');

    return html`
      <div class="${wrapperClasses}">
        <div class="menu-wrapper" tabindex="-1">
          <!-- Barra di progresso -->
          ${this.progress
            ? html` <div class="progress">
              <div
                class="progress-bar it-navscroll-progressbar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-label="Progress bar"
              ></div>
            </div></div>`
            : html``}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-navscroll': ItNavscroll;
  }
}
