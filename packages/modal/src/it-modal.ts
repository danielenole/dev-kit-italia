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

  @property({ type: String, reflect: true }) position: ModalPosition = 'center';

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

  private _titleId = '';

  private _triggerId = '';

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
    return this._triggerSlot.assignedElements({ flatten: true })?.[0] as ItButton | HTMLButtonElement | null;
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

  private _setTriggerA11y(): void {
    const trigger = this._triggerElement;
    if (!trigger) return;

    trigger.setAttribute('it-aria-haspopup', 'dialog');
    (trigger as ItButton).expanded = this.open;
  }

  public show(): void {
    if (this.open) return;
    this.open = true;
  }

  public hide(): void {
    if (!this.open) return;
    this.open = false;
  }

  public toggle(): void {
    this.open = !this.open;
  }

  private _showModal(): void {
    WindowManager.lockBodyScroll();

    requestAnimationFrame(() => {
      this._modalElement?.classList.add('show');

      // // Dopo che la modale è visibile, attiva la focus trap
      requestAnimationFrame(() => {
        this._focusTrap.activate();
      });
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
    this._modalElement?.classList.remove('show');
    WindowManager.unlockBodyScroll();
    this._focusTrap.deactivate();

    this.dispatchEvent(
      new CustomEvent<ModalEventDetail>('it-modal-close', {
        detail: { modal: this },
        bubbles: true,
        composed: true,
      }),
    );
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
    const ariaLabelledBy = this.modalTitle ? this._titleId : undefined;
    console.log('render modal', ariaLabelledBy, this.modalTitle, this._titleId);
    return html`
      <slot name="trigger" @slotchange=${this._onTriggerSlotChange}></slot>

      <div
        class="${classMap(this._modalClasses)}"
        role="dialog"
        aria-modal="true"
        aria-labelledby="${ifDefined(ariaLabelledBy)}"
        aria-hidden="${!this.open}"
        tabindex="-1"
        @click="${this._handleBackdropClick}"
      >
        <div class="${classMap(this._modalBodyClasses)}" role="document" @click="${this._handleDialogClick}">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header-icon"></slot>
              <slot name="header">
                ${this.modalTitle ? html`<h2 class="modal-title" id="${this._titleId}">${this.modalTitle}</h2>` : ''}
              </slot>
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
