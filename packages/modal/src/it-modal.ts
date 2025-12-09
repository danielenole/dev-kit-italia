/* eslint-disable lit-a11y/click-events-have-key-events */
import { type ItButton } from '@italia/button';
import { BaseComponent, FocusTrapController, WindowManager } from '@italia/globals';
import { html, PropertyValues } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { type ModalSize, type ModalPosition, type ModalVariant, type ModalEventDetail } from './types.js';
import styles from './modal.scss';

/**
 * Componente Modal per finestre di dialogo modali.
 *
 * @element it-modal
 *
 * @slot trigger - Elemento che apre la modale (es. it-button)
 * @slot content - Contenuto principale della modale (body)
 * @slot header - Header custom (sovrascrive modal-title)
 * @slot footer - Azioni del footer (pulsanti)
 *
 * @fires it-modal-open - Quando la modale si apre
 * @fires it-modal-close - Quando la modale si chiude
 */
@customElement('it-modal')
export class ItModal extends BaseComponent {
  static styles = styles;

  static override shadowRootOptions = {
    ...BaseComponent.shadowRootOptions,
    delegatesFocus: true,
  };

  @property({ type: Boolean, reflect: true }) open = false;

  @property({ type: String, attribute: 'modal-title' }) modalTitle = '';

  @property({ type: String, reflect: true }) size: ModalSize = '';

  @property({ type: String, reflect: true }) position?: ModalPosition | undefined;

  @property({ type: Boolean, reflect: true }) scrollable = false;

  @property({ type: Boolean, attribute: 'static-backdrop', reflect: true }) staticBackdrop = false;

  @property({ type: Boolean, attribute: 'close-button', reflect: true }) closeButton = true;

  @property({ type: String, reflect: true }) variant?: ModalVariant | undefined;

  @property({ type: Boolean, attribute: 'no-escape', reflect: true }) noEscape = false;

  @property({ type: String, attribute: 'close-label' }) closeLabel = 'Chiudi finestra modale';

  @property({ type: Boolean, reflect: true }) fade = true;

  @property({ type: Boolean, attribute: 'footer-shadow', reflect: true }) footerShadow = false;

  @query('[role="dialog"]') private _modalElement!: HTMLElement;

  @query('slot[name="trigger"]') private _triggerSlot!: HTMLSlotElement;

  @query('slot[name="header"]') private _headerSlot!: HTMLSlotElement;

  @query('.modal-backdrop') private _backdropElement!: HTMLElement;

  @query('.modal-dialog') private _dialogElement!: HTMLElement;

  private _titleId = '';

  private _triggerId = '';

  private _isAnimating = false;

  private _dialogAnimation?: Animation;

  private _backdropAnimation?: Animation;

  private readonly _dialogAnimationDuration = 300; // ms - matches Bootstrap Italia modal-transition

  private readonly _backdropAnimationDuration = 150; // ms - standard fade

  private _focusTrap = new FocusTrapController(this, {
    getContainer: () => this._modalElement,
    initialFocus: () => this._modalElement,
    getTrigger: () => this._triggerElement,
    onEscape: () => {
      if (!this.noEscape && !this.staticBackdrop) {
        this.hide();
      }
    },

    disableEscape: false,
  });

  get _triggerElement(): ItButton | HTMLButtonElement | null {
    if (!this._triggerSlot) {
      this.logger.error('No trigger provided');
      return null;
    }
    const elements = this._triggerSlot.assignedElements({ flatten: true });
    if (elements.length === 0) {
      return null;
    }
    return elements[0] as ItButton | HTMLButtonElement | null;
  }

  get _headerElement(): HTMLElement | null {
    if (!this._headerSlot) {
      return null;
    }
    const elements = this._headerSlot.assignedElements({ flatten: true });
    if (elements.length === 0) {
      return null;
    }
    return elements[0] as HTMLElement | null;
  }

  constructor() {
    super();
    this._triggerId = this.generateId('modal-trigger');
    this._titleId = this.generateId('modal-title');
  }

  connectedCallback(): void {
    super.connectedCallback?.();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback?.();
    this._removeTriggerListeners();
    this._cleanupAnimations();
    WindowManager.unlockBodyScroll();
  }

  protected updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('open')) {
      this._setTriggerA11y();
      if (this.open) {
        this._showModal();
      } else {
        this._hideModal();
      }
    }
  }

  private _onTriggerSlotChange = (): void => {
    this._setupTriggerListeners();
    this._setTriggerA11y();
  };

  private _handleHeaderSlotChange = (): void => {
    // Se l'header custom ha un id, usa quello per l'aria-labelledby
    // altrimenti assegna l'id generato
    const header = this._headerElement;
    if (!header) return;
    if (!header.id) {
      header.id = this._titleId;
    } else {
      this._titleId = header.id;
    }
    header.classList.add('modal-title');
  };

  private _setupTriggerListeners(): void {
    const trigger = this._triggerElement;
    if (!trigger) return;

    trigger.setAttribute('id', this._triggerId);
    // Rimuovi eventuali listener precedenti
    trigger.removeEventListener('click', this._onTriggerClick);
    trigger.removeEventListener('keydown', this._onTriggerKeydown);

    // Aggiungi nuovi listener
    trigger.addEventListener('click', this._onTriggerClick);
    trigger.addEventListener('keydown', this._onTriggerKeydown);
  }

  private _removeTriggerListeners(): void {
    const trigger = this._triggerElement;
    if (!trigger) return;

    trigger.removeEventListener('click', this._onTriggerClick);
    trigger.removeEventListener('keydown', this._onTriggerKeydown);
  }

  private _onTriggerClick = (event: Event): void => {
    event.stopPropagation();
    this.show();
  };

  private _onTriggerKeydown = (event: Event): void => {
    if ((event as KeyboardEvent).key === 'Enter' || (event as KeyboardEvent).key === ' ') {
      event.preventDefault();
      this.show();
    }
  };

  // Is this even needed? APG Pattern doesn't specify anything special for modals
  // eslint-disable-next-line class-methods-use-this
  private _setTriggerA11y(): void {
    // const trigger = this._triggerElement;
    // if (!trigger) return;
    // trigger.setAttribute('it-aria-haspopup', 'dialog');
    // (trigger as ItButton).expanded = this.open;
  }

  public show(): void {
    if (this.open) return;
    this.open = true;
  }

  public hide(): void {
    if (!this.open) return;
    // Don't set open=false immediately - let animation complete first
    // open will be set to false in _hideModal after animation finishes
    this._hideModal();
  }

  public toggle(): void {
    this.open = !this.open;
  }

  private _showModal(): void {
    if (this._isAnimating) return;
    WindowManager.lockBodyScroll();

    this._isAnimating = true;

    requestAnimationFrame(() => {
      // Determine transform based on position
      let dialogStartTransform = 'translate(0, 0)'; // default: no transform
      if (this.position === 'center') {
        dialogStartTransform = 'translate(0, -5%)';
      } else if (this.position === 'left') {
        dialogStartTransform = 'translateX(-100%)';
      } else if (this.position === 'right') {
        dialogStartTransform = 'translateX(100%)';
      }

      const dialogDuration = this.fade && !this.prefersReducedMotion ? this._dialogAnimationDuration : 0;
      const backdropDuration = this.fade && !this.prefersReducedMotion ? this._backdropAnimationDuration : 0;

      // Animate backdrop fade in
      if (this._backdropElement) {
        this._backdropAnimation = this._backdropElement.animate([{ opacity: '0' }, { opacity: '0.8' }], {
          duration: backdropDuration,
          easing: 'linear',
          fill: 'forwards',
        });
      }

      // Animate dialog transform (slide/drop in)
      if (this._dialogElement && dialogDuration > 0) {
        this._dialogAnimation = this._dialogElement.animate(
          [{ transform: dialogStartTransform }, { transform: 'translate(0, 0)' }],
          {
            duration: dialogDuration,
            easing: 'ease-in-out',
            fill: 'forwards',
          },
        );

        this._dialogAnimation.finished
          .then(() => {
            this._isAnimating = false;
            // Activate focus trap after animation completes
            // requestAnimationFrame(() => {
            this._focusTrap.activate();
            // });
          })
          .catch(() => {
            // Animation cancelled
            this._isAnimating = false;
          });
      } else {
        // No dialog element or no animation, just finish
        this._isAnimating = false;
        // requestAnimationFrame(() => {
        this._focusTrap.activate();
        // });
      }
    });

    this.dispatchEvent(
      new CustomEvent<ModalEventDetail>('it-modal-open', {
        detail: { modal: this },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _hideModal(): void {
    if (this._isAnimating) return;

    this._isAnimating = true;

    // Determine end transform based on position
    let dialogEndTransform = 'translate(0, 0)'; // default: no transform
    if (this.position === 'center') {
      dialogEndTransform = 'translate(0, -5%)';
    } else if (this.position === 'left') {
      dialogEndTransform = 'translateX(-100%)';
    } else if (this.position === 'right') {
      dialogEndTransform = 'translateX(100%)';
    }

    const dialogDuration = this.fade && !this.prefersReducedMotion ? this._dialogAnimationDuration / 1.33 : 0;
    const backdropDuration = this.fade && !this.prefersReducedMotion ? this._backdropAnimationDuration / 1.33 : 0;

    const finishHide = () => {
      this._cleanupAnimations();
      WindowManager.unlockBodyScroll();
      // Deactivate focus trap AFTER animation completes to avoid screen readers announcing wrong state
      this._focusTrap.deactivate();
      // Set open=false AFTER animation to trigger :host(:not([open])) display:none
      this.open = false;
    };

    // Animate dialog transform out first (slide/drop out)
    if (this._dialogElement && dialogDuration > 0) {
      this._dialogAnimation = this._dialogElement.animate(
        [{ transform: 'translate(0, 0)' }, { transform: dialogEndTransform }],
        {
          duration: dialogDuration,
          easing: 'ease-in-out',
          fill: 'forwards',
        },
      );

      // After dialog animation finishes, fade out backdrop
      this._dialogAnimation.finished
        .then(() => {
          if (this._backdropElement && backdropDuration > 0) {
            this._backdropAnimation = this._backdropElement.animate([{ opacity: '0.8' }, { opacity: '0' }], {
              duration: backdropDuration,
              easing: 'linear',
              fill: 'forwards',
            });
            return this._backdropAnimation.finished;
          }
          return undefined;
        })
        .then(() => finishHide())
        .catch(() => finishHide());
    } else {
      // No animation, finish immediately
      finishHide();
    }

    this.dispatchEvent(
      new CustomEvent<ModalEventDetail>('it-modal-close', {
        detail: { modal: this },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private _cleanupAnimations(): void {
    if (this._dialogAnimation) {
      try {
        this._dialogAnimation.cancel();
      } catch {
        /* ignore */
      }
      this._dialogAnimation = undefined;
    }
    if (this._backdropAnimation) {
      try {
        this._backdropAnimation.cancel();
      } catch {
        /* ignore */
      }
      this._backdropAnimation = undefined;
    }
    this._isAnimating = false;
  }

  private _handleCloseClick = (): void => {
    this.hide();
  };

  private _handleBackdropClick = (): void => {
    if (!this.staticBackdrop) {
      this.hide();
    }
  };

  // eslint-disable-next-line class-methods-use-this
  private _handleDialogClick = (event: Event): void => {
    // Previeni propagazione al backdrop
    event.stopPropagation();
  };

  private get _modalClasses() {
    return {
      modal: true,
      fade: this.fade,
      show: this.open && !this.fade,
      'alert-modal': this.variant === 'alert',
      'popconfirm-modal': this.variant === 'popconfirm',
      'it-dialog-link-list': this.variant === 'link-list',
      'it-dialog-scrollable': this.scrollable || this.position === 'left' || this.position === 'right',
    };
  }

  private get _modalBodyClasses() {
    return {
      'modal-dialog': true,
      'modal-dialog-centered': this.position === 'center',
      'modal-dialog-left': this.position === 'left',
      'modal-dialog-right': this.position === 'right',
      'modal-dialog-scrollable': this.scrollable,
      'modal-sm': this.size === 'sm',
      'modal-lg': this.size === 'lg',
      'modal-xl': this.size === 'xl',
    };
  }

  render() {
    const ariaLabelledBy = this.modalTitle && this._headerElement ? this._titleId : undefined;
    const ariaLabel = this.modalTitle && !this._headerElement ? this.modalTitle : undefined;
    const headerClass = this._headerElement ? 'modal-header' : '';
    return html`
      <slot name="trigger" @slotchange=${this._onTriggerSlotChange}></slot>

      <div
        class="${classMap(this._modalClasses)}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="${ifDefined(ariaLabelledBy)}"
        aria-label="${ifDefined(ariaLabel)}"
        aria-hidden="${!this.open}"
        tabindex="-1"
        @click="${this._handleBackdropClick}"
      >
        <div class="${classMap(this._modalBodyClasses)}" role="document" @click="${this._handleDialogClick}">
          <div class="modal-content">
            <div class="${headerClass}">
              <slot name="header-icon"></slot>
              <slot name="header" @slotchange="${this._handleHeaderSlotChange}"></slot>
              ${this.closeButton
                ? html`<it-button
                    class="btn-close"
                    variant="link"
                    icon
                    size="lg"
                    exportparts="focusable, button"
                    @click="${this._handleCloseClick}"
                  >
                    <it-icon name="it-close" size="lg"></it-icon>
                    <span class="visually-hidden">${this.closeLabel}</span>
                  </it-button>`
                : ''}
            </div>
            <div class="modal-body">
              <slot name="content"></slot>
            </div>
            <div class="modal-footer ${this.footerShadow ? 'modal-footer-shadow' : ''}">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal-backdrop ${this.fade ? 'fade' : ''} ${this.open ? 'show' : ''}"
        aria-hidden="true"
        @click="${this._handleBackdropClick}"
      ></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-modal': ItModal;
  }
}
