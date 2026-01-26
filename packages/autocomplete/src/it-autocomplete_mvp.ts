// import { setAttributes, FormControl } from '@italia/globals';
// import { registerTranslation } from '@italia/i18n';
// import { html, nothing } from 'lit';
// import { customElement, property, state, query, queryAssignedElements } from 'lit/decorators.js';
// import { live } from 'lit/directives/live.js';
// import { classMap } from 'lit/directives/class-map.js';
// import { ifDefined } from 'lit/directives/if-defined.js';
// import type { AutocompleteSource } from './types.js';
// import it from './locales/it.js';
// import en from './locales/en.js';
// import styles from './autocomplete.scss';

// registerTranslation(it);
// registerTranslation(en);

// /**
//  * @summary Componente di autocompletamento conforme alle linee guida ARIA APG
//  */
// @customElement('it-autocomplete')
// export class ItAutocomplete extends FormControl {
//   static styles = styles;

//   @query('.autocomplete-listbox')
//   private listbox?: HTMLElement;

//   @queryAssignedElements({ slot: 'label' })
//   labelElements!: HTMLElement[];

//   @state() private _options: string[] = [];

//   @state() public _filteredOptions: string[] = [];

//   @state() public _isOpen = false;

//   @state() public _activeIndex = -1;

//   @state() private _inputValue = '';

//   @state() public _listboxHasVisualFocus = false;

//   @state() public _showAssistiveHint = true;

//   // Bump pattern
//   private _statusBump = false;

//   private _statusDebounceTimer?: ReturnType<typeof setTimeout>;

//   private _typingDebounceTimer?: ReturnType<typeof setTimeout>;

//   @state() private _currentStatusContent = '';

//   get label(): string {
//     return this.labelElements.length > 0 ? this.labelElements[0].innerText.trim() : '';
//   }

//   @property({ type: Object, reflect: true })
//   source: AutocompleteSource = [];

//   @property({ type: String, reflect: true })
//   placeholder = '';

//   @property({ type: String, attribute: 'support-text', reflect: true })
//   supportText = '';

//   @property({ type: Number, attribute: 'min-length', reflect: true })
//   minLength = 0;

//   @property({ type: String, attribute: 'default-value', reflect: true })
//   defaultValue = '';

//   @property({ type: Boolean, attribute: 'label-hidden', reflect: true })
//   labelHidden = false;

//   public get invalid(): boolean {
//     // Mostra lo stato invalido solo dopo una submit, come fanno gli altri form control
//     if (!this.formControlController.submittedOnce && !this.customValidation) {
//       return false;
//     }
//     return this.validationMessage?.length > 0 || (!this.customValidation && !this.checkValidity());
//   }

//   override checkValidity(): boolean {
//     if (!this.required) {
//       return true; // Non required: sempre valido
//     }

//     // Required: valido solo se value esiste ed è nelle opzioni
//     if (!this.value) return false;
//     return this._options.includes(this.value);
//   }

//   /**
//    * Override: Report validity for autocomplete
//    */
//   override reportValidity(): boolean {
//     // Imposta i messaggi personalizzati PRIMA di controllare la validità
//     // altrimenti il browser mostra il messaggio nativo per un attimo
//     const isValid = this.checkValidity();
//     this.handleValidationMessages();
//     return isValid;
//   }

//   /** Gets the validity state object */
//   override get validity(): ValidityState {
//     return { valid: this.checkValidity() } as ValidityState;
//   }

//   /**
//    * Handle validation messages based on validity state
//    */
//   protected override handleValidationMessages() {
//     if (!this.customValidation) {
//       if (this.required && !this.value) {
//         this.setCustomValidity(this.$t('validityRequired'));
//       }
//       // } else if (this.required && !this._options.includes(this.value)) {
//       //   this.setCustomValidity(this.$t('validityRequired'));
//       // }
//       else {
//         this.setCustomValidity('');
//       }
//     }
//   }

//   connectedCallback() {
//     super.connectedCallback?.();
//     this._handleReady();
//     if (this.defaultValue) {
//       this._inputValue = this.defaultValue;
//       // Imposta value solo se è nelle opzioni (sarà validato dopo in firstUpdated)
//       this.value = this.defaultValue;
//     }
//   }

//   firstUpdated() {
//     if (Array.isArray(this.source)) {
//       this._options = this.source;
//       // Se defaultValue non è nelle opzioni, resetta value
//       if (this.defaultValue && !this._options.includes(this.defaultValue)) {
//         this.value = '';
//       }
//     }
//   }

//   updated(changedProps: Map<PropertyKey, unknown>) {
//     // Aggiorna le opzioni quando source cambia
//     if (changedProps.has('source')) {
//       if (Array.isArray(this.source)) {
//         this._options = this.source;
//       }
//     }

//     // Aggiorna validazione quando value cambia (come FormControl base)
//     if (changedProps.has('value')) {
//       //   this._handleValidationMessages();
//       //   // Aggiorna la validità nel controller se il form è stato sottomesso almeno una volta
//       if (!this.customValidation && this.formControlController.submittedOnce) {
//         this.handleValidationMessages();
//         // this._updateInvalidState();
//       }
//     }

//     if (changedProps.has('_filteredOptions') || changedProps.has('_isOpen')) {
//       if (!this._isOpen) return;

//       const count = this._filteredOptions.length;
//       let content = '';

//       if (count === 0) {
//         content = this._inputValue.length >= this.minLength ? this.$t('autocomplete_statusNoResults') : '';
//       } else if (count === 1) {
//         content = this.$t('autocomplete_statusOneResult');
//       } else if (count > 1) {
//         content = this.$t('autocomplete_statusManyResults').replace('{count}', count.toString());
//       }

//       if (content) {
//         // bump pattern: metti in una region vuota e svuota l’altra
//         this._statusBump = !this._statusBump;
//         this._currentStatusContent = content;
//         // this.requestUpdate();
//       }
//     }
//   }

//   protected _handleInput(e: Event) {
//     const input = e.target as HTMLInputElement;
//     this._inputValue = input.value;
//     // NON settiamo this.value qui - value è solo per selezioni valide dalla lista
//     // Se l'utente digita qualcosa che non è un'opzione, value rimane vuoto/precedente
//     this._showAssistiveHint = false;
//     this._listboxHasVisualFocus = false;

//     this.dispatchEvent(
//       new CustomEvent('it-autocomplete-search', { bubbles: true, composed: true, detail: { value: input.value } }),
//     );
//     if (this._inputValue.length === 0) {
//       this.value = '';
//     }
//     if (this._inputValue.length < this.minLength) {
//       this._isOpen = false;
//       this._filteredOptions = [];
//       this._announceStatus();
//       return;
//     }

//     if (Array.isArray(this.source)) {
//       this._filterOptions(this._inputValue);
//     } else if (typeof this.source === 'function') {
//       this.source(this._inputValue, (results: string[]) => {
//         this._filteredOptions = results;
//         this._isOpen = results.length > 0;
//         this._activeIndex = -1;
//       });
//     }

//     // Debounce annunci mentre digita
//     if (this._typingDebounceTimer) clearTimeout(this._typingDebounceTimer);
//     this._typingDebounceTimer = setTimeout(() => this._announceStatus(), 400);
//   }

//   private _filterOptions(_query: string) {
//     const lower = _query.toLowerCase();
//     this._filteredOptions = this._options.filter((o) => o.toLowerCase().includes(lower));
//     this._isOpen = this._filteredOptions.length > 0;
//     this._activeIndex = -1;
//   }

//   private _handleKeyDown(e: KeyboardEvent) {
//     if (!this._isOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
//       if (this._inputValue.length >= this.minLength) {
//         const inputEvent = new Event('input', { bubbles: true, composed: true });
//         Object.defineProperty(inputEvent, 'target', { value: this.inputElement, enumerable: true });
//         this._handleInput(inputEvent);

//         this._listboxHasVisualFocus = true;
//         if (this._isOpen) this._activeIndex = e.key === 'ArrowDown' ? 0 : this._filteredOptions.length - 1;
//         this._scrollToOption(this._activeIndex);
//       }
//       e.preventDefault();
//       return;
//     }

//     if (!this._isOpen) return;

//     switch (e.key) {
//       case 'ArrowDown':
//         e.preventDefault();
//         if (!this._listboxHasVisualFocus) {
//           this._listboxHasVisualFocus = true;
//           this._activeIndex = 0;
//         } else this._activeIndex = (this._activeIndex + 1) % this._filteredOptions.length;
//         this._scrollToOption(this._activeIndex);
//         break;
//       case 'ArrowUp':
//         e.preventDefault();
//         if (!this._listboxHasVisualFocus) {
//           this._listboxHasVisualFocus = true;
//           this._activeIndex = this._filteredOptions.length - 1;
//         } else this._activeIndex = this._activeIndex === 0 ? this._filteredOptions.length - 1 : this._activeIndex - 1;
//         this._scrollToOption(this._activeIndex);
//         break;
//       case 'Enter':
//         e.preventDefault();
//         if (this._listboxHasVisualFocus && this._activeIndex >= 0)
//           this._selectOption(this._filteredOptions[this._activeIndex]);
//         break;
//       case 'Escape':
//       case 'Tab':
//         this._isOpen = false;
//         this._activeIndex = -1;
//         this._listboxHasVisualFocus = false;
//         break;
//       default:
//         break;
//     }
//   }

//   private _scrollToOption(index: number) {
//     if (!this.listbox) return;
//     const option = this.listbox.children[index] as HTMLElement;
//     option?.scrollIntoView({ block: 'nearest' });
//   }

//   private _selectOption(option: string) {
//     this._inputValue = option;
//     this.value = option;
//     this._isOpen = false;
//     this._activeIndex = -1;
//     this._listboxHasVisualFocus = false;
//     this.inputElement.focus();

//     // Emetti eventi nativi sull'input per compatibilità form
//     // this.inputElement.dispatchEvent(new Event('change', { bubbles: true, composed: true, detail: { value: option } }));

//     this.dispatchEvent(new CustomEvent('it-change', { bubbles: true, composed: true, detail: { value: option } }));

//     // Aggiorna status solo per cambio finale
//     this._announceStatus(true);
//   }

//   private _handleOptionClick(option: string) {
//     this._selectOption(option);
//   }

//   private _handleOptionHover(index: number) {
//     this._activeIndex = index;
//   }

//   private _handleOptionKeyDown(e: KeyboardEvent, option: string) {
//     if (e.key === 'Enter') {
//       e.preventDefault();
//       this._selectOption(option);
//     }
//   }

//   protected override _handleReady() {
//     requestAnimationFrame(() => {
//       this.dispatchEvent(new CustomEvent('it-autocomplete-ready', { bubbles: true, detail: { el: this } }));
//     });
//   }

//   protected _handleBlur(e: Event) {
//     // Chiama il blur del parent per gestire _touched e validazione
//     super._handleBlur(e);

//     // Usa setTimeout per permettere al click sull'opzione di essere processato
//     // prima di chiudere il menu
//     setTimeout(() => {
//       this._isOpen = false;
//       this._activeIndex = -1;
//     }, 150);
//   }

//   private _announceStatus(force = false) {
//     if (!this._isOpen && !force) return; // solo se aperto o forzato
//     const count = this._filteredOptions.length;
//     const queryLength = this._inputValue.length;

//     let content = '';

//     if (queryLength > 0 && queryLength < this.minLength) {
//       content = this.$t('autocomplete_statusQueryTooShort').replace('{minLength}', this.minLength.toString());
//     } else if (count === 0 && queryLength >= this.minLength) {
//       content = this.$t('autocomplete_statusNoResults');
//     } else if (count > 0) {
//       content =
//         count === 1
//           ? this.$t('autocomplete_statusOneResult')
//           : this.$t('autocomplete_statusManyResults').replace('{count}', count.toString());
//     }

//     // annuncia solo se cambia contenuto
//     if (content !== this._currentStatusContent) {
//       if (this._statusDebounceTimer) clearTimeout(this._statusDebounceTimer);
//       this._statusDebounceTimer = setTimeout(() => {
//         this._currentStatusContent = content;
//         this._statusBump = !this._statusBump;
//       }, 800); // 800ms debounce: abbastanza per screen reader, non troppo lungo
//     }
//   }

//   private _getStatusAnnouncement(): { a: string; b: string } {
//     return this._statusBump ? { a: this._currentStatusContent, b: '' } : { a: '', b: this._currentStatusContent };
//   }

//   render() {
//     const showValidation = this.formControlController.submittedOnce || this.customValidation;
//     const inputId = this.id || this.generateId('it-autocomplete');
//     const labelId = `${inputId}-label`;
//     const listboxId = `${inputId}-listbox`;
//     const assistiveHintId = `${inputId}-assistiveHint`;
//     const statusIdA = `${inputId}-status-a`;
//     const statusIdB = `${inputId}-status-b`;
//     const status = this._getStatusAnnouncement();

//     return html`
//       <div class="form-group autocomplete-wrapper">
//         <label id="${labelId}" for="${inputId}" class="${this.composeClass({ 'visually-hidden': this.labelHidden })}">
//           <slot name="label"></slot>
//           ${this.required ? html`<span class="required" aria-hidden="true">*</span>` : nothing}
//         </label>

//         <div class="autocomplete-input-wrapper">
//           <input
//             id="${inputId}"
//             part="autocomplete-input"
//             type="text"
//             class="${this.composeClass('form-control it-form__control', {
//               'is-invalid': showValidation && this.invalid,
//               'just-validate-success-field': showValidation && !this.invalid,
//             })}"
//             .value="${live(this._inputValue)}"
//             placeholder="${this.placeholder}"
//             ?disabled="${this.disabled}"
//             ?formNoValidate="${true}"
//             aria-invalid=${ifDefined(this.invalid ? 'true' : undefined)}
//             role="combobox"
//             aria-autocomplete="list"
//             aria-expanded="${this._isOpen ? 'true' : 'false'}"
//             aria-controls="${this._isOpen ? listboxId : nothing}"
//             aria-haspopup="listbox"
//             aria-labelledby="${labelId}"
//             aria-describedby="${[
//               this.supportText ? `${inputId}-support` : '',
//               this._showAssistiveHint ? assistiveHintId : '',
//             ]
//               .filter(Boolean)
//               .join(' ') || nothing}"
//             aria-activedescendant=${ifDefined(
//               this._activeIndex >= 0 ? `${inputId}-option-${this._activeIndex}` : undefined,
//             )}
//             @input="${this._handleInput}"
//             @keydown="${this._handleKeyDown}"
//             @blur="${this._handleBlur}"
//           />

//           ${this._isOpen && this._filteredOptions.length > 0
//             ? html`<ul
//                 id="${listboxId}"
//                 class="autocomplete-listbox"
//                 part="autocomplete-list"
//                 role="listbox"
//                 aria-label="${this.$t('autocomplete_listboxLabel')}"
//               >
//                 ${this._filteredOptions.map(
//                   (option, index) =>
//                     html` <li
//                       id="${inputId}-option-${index}"
//                       role="option"
//                       part="autocomplete-option"
//                       aria-selected="${index === this._activeIndex ? 'true' : 'false'}"
//                       aria-posinset="${index + 1}"
//                       aria-setsize="${this._filteredOptions.length}"
//                       class="autocomplete-option ${classMap({ active: index === this._activeIndex })}"
//                       @click="${() => this._handleOptionClick(option)}"
//                       @keydown="${(e: KeyboardEvent) => this._handleOptionKeyDown(e, option)}"
//                       @mouseenter="${() => this._handleOptionHover(index)}"
//                     >
//                       ${option}
//                     </li>`,
//                 )}
//               </ul>`
//             : nothing}
//         </div>

//         ${this._showAssistiveHint
//           ? html`<div id="${assistiveHintId}" class="visually-hidden">${this.$t('autocomplete_assistiveHint')}</div>`
//           : nothing}

//         <div id="${statusIdA}" role="status" aria-live="polite" aria-atomic="true" class="visually-hidden">
//           ${status.a}
//         </div>
//         <div id="${statusIdB}" role="status" aria-live="polite" aria-atomic="true" class="visually-hidden">
//           ${status.b}
//         </div>

//         ${this.supportText
//           ? html`<small id="${inputId}-support" class="form-text text-muted"
//               ><slot name="support-text">${this.supportText}</slot></small
//             >`
//           : nothing}
//         ${this.invalid && this.validationMessage
//           ? html`<div class="invalid-feedback" role="alert">${this.validationMessage}</div>`
//           : nothing}
//       </div>
//     `;
//   }
// }

// declare global {
//   interface HTMLElementTagNameMap {
//     'it-autocomplete': ItAutocomplete;
//   }
// }
