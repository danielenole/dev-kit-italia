// import { setAttributes, FormControl } from '@italia/globals';
// import { registerTranslation } from '@italia/i18n';
// import { html, nothing } from 'lit';
// import { customElement, property, state, query, queryAssignedElements } from 'lit/decorators.js';
// import { live } from 'lit/directives/live.js';
// import { classMap } from 'lit/directives/class-map.js';
// import type { AutocompleteSource } from './types.js';
// import it from './locales/it.js';
// import en from './locales/en.js';
// import styles from './autocomplete.scss';

// registerTranslation(it);
// registerTranslation(en);

// /**
//  * @summary Componente di autocompletamento conforme alle linee guida ARIA APG
//  * @documentation https://italia.github.io/dev-kit-italia/
//  *
//  * @slot label - Etichetta del campo
//  * @slot support-text - Testo di supporto
//  * @slot - Contenuto opzionale
//  *
//  * @event it-autocomplete-select - Emesso quando viene selezionata un'opzione
//  * @event it-autocomplete-change - Emesso quando cambia il valore
//  *
//  * @cssproperty --autocomplete-min-width - Larghezza minima del menu dropdown
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

//   /**
//    * Etichetta del campo
//    */
//   get label(): string {
//     return this.labelElements.length > 0 ? this.labelElements[0].innerText.trim() : '';
//   }

//   /**
//    * Sorgente di dati per l'autocomplete.
//    */
//   @property({ type: Object, reflect: true })
//   source: AutocompleteSource = [];

//   /**
//    * Placeholder del campo di input
//    */
//   @property({ type: String, reflect: true })
//   placeholder = '';

//   /**
//    * Testo di supporto mostrato sotto il campo
//    */
//   @property({ type: String, attribute: 'support-text', reflect: true })
//   supportText = '';

//   /**
//    * Numero minimo di caratteri prima di mostrare i suggerimenti
//    */
//   @property({ type: Number, attribute: 'min-length', reflect: true })
//   minLength = 0;

//   /**
//    * Valore di default
//    */
//   @property({ type: String, attribute: 'default-value', reflect: true })
//   defaultValue = '';

//   /**
//    * Se il campo deve nascondere l'etichetta visivamente
//    */
//   @property({ type: Boolean, attribute: 'label-hidden', reflect: true })
//   labelHidden = false;

//   /** Gets whether the control is invalid */
//   public get invalid(): boolean {
//     return (
//       this.validationMessage?.length > 0 || (!this.customValidation && this.inputElement?.checkValidity() === false)
//     );
//   }

//   /** Gets the validity state object */
//   public get validity(): ValidityState {
//     if (!this.inputElement) {
//       return {
//         badInput: false,
//         customError: false,
//         patternMismatch: false,
//         rangeOverflow: false,
//         rangeUnderflow: false,
//         stepMismatch: false,
//         tooLong: false,
//         tooShort: false,
//         typeMismatch: false,
//         valid: true,
//         valueMissing: false,
//       } as ValidityState;
//     }
//     return this.inputElement.validity;
//   }

//   connectedCallback() {
//     super.connectedCallback?.();
//     if (this.defaultValue) {
//       this._inputValue = this.defaultValue;
//       this.value = this.defaultValue;
//     }
//   }

//   firstUpdated() {
//     if (Array.isArray(this.source)) this._options = this.source;
//   }

//   protected _handleInput(e: Event) {
//     const input = e.target as HTMLInputElement;
//     this._inputValue = input.value;
//     this.value = input.value;
//     this._showAssistiveHint = false;
//     this._listboxHasVisualFocus = false;

//     this.dispatchEvent(
//       new CustomEvent('it-autocomplete-change', {
//         bubbles: true,
//         composed: true,
//         detail: { value: input.value },
//       }),
//     );

//     if (this._inputValue.length < this.minLength) {
//       this._isOpen = false;
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
//   }

//   private _filterOptions(query: string) {
//     const lower = query.toLowerCase();
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
//         } else {
//           this._activeIndex = (this._activeIndex + 1) % this._filteredOptions.length;
//         }
//         this._scrollToOption(this._activeIndex);
//         break;

//       case 'ArrowUp':
//         e.preventDefault();
//         if (!this._listboxHasVisualFocus) {
//           this._listboxHasVisualFocus = true;
//           this._activeIndex = this._filteredOptions.length - 1;
//         } else {
//           this._activeIndex = this._activeIndex === 0 ? this._filteredOptions.length - 1 : this._activeIndex - 1;
//         }
//         this._scrollToOption(this._activeIndex);
//         break;

//       case 'Enter':
//         e.preventDefault();
//         if (this._listboxHasVisualFocus && this._activeIndex >= 0) {
//           this._selectOption(this._filteredOptions[this._activeIndex]);
//         }
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

//     this.dispatchEvent(
//       new CustomEvent('it-autocomplete-select', {
//         bubbles: true,
//         composed: true,
//         detail: { value: option },
//       }),
//     );
//     this.dispatchEvent(
//       new CustomEvent('it-autocomplete-change', {
//         bubbles: true,
//         composed: true,
//         detail: { value: option },
//       }),
//     );
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

//   protected _handleBlur() {
//     setTimeout(() => {
//       this._isOpen = false;
//       this._activeIndex = -1;
//     }, 200);
//   }

//   // Nessun annuncio dei risultati, rimosso bump pattern e debounce
//   updated(_changedProperties: Map<PropertyKey, unknown>) {
//     // Qui non facciamo nulla
//   }

//   render() {
//     const hasLabel = this.labelElements.length > 0;
//     const inputId = this.id || `autocomplete-${Math.random().toString(36).substr(2, 9)}`;
//     const labelId = `${inputId}-label`;
//     const listboxId = `${inputId}-listbox`;
//     const assistiveHintId = `${inputId}-assistiveHint`;

//     return html`
//       <div class="form-group ${classMap({ 'autocomplete-wrapper': true })}">
//         <label id="${labelId}" for="${inputId}" class="${classMap({ 'visually-hidden': this.labelHidden })}">
//           <slot name="label"></slot>
//           ${this.required ? html`<span class="required" aria-hidden="true">*</span>` : nothing}
//         </label>

//         <div class="autocomplete-input-wrapper">
//           <input
//             id="${inputId}"
//             type="text"
//             class="form-control it-form__control ${classMap({ 'is-invalid': this.invalid })}"
//             .value="${live(this._inputValue)}"
//             placeholder="${this.placeholder}"
//             ?required="${this.required}"
//             ?disabled="${this.disabled}"
//             role="combobox"
//             aria-autocomplete="list"
//             aria-expanded="${this._isOpen}"
//             aria-controls="${this._isOpen ? listboxId : nothing}"
//             aria-owns="${this._isOpen ? listboxId : nothing}"
//             aria-haspopup="listbox"
//             aria-labelledby="${hasLabel ? labelId : inputId}"
//             aria-describedby="${[
//               this.supportText ? `${inputId}-support` : '',
//               this._showAssistiveHint ? assistiveHintId : '',
//             ]
//               .filter(Boolean)
//               .join(' ') || nothing}"
//             aria-activedescendant="${this._activeIndex >= 0 ? `${inputId}-option-${this._activeIndex}` : ''}"
//             aria-invalid="${this.invalid ? 'true' : 'false'}"
//             @input="${this._handleInput}"
//             @keydown="${this._handleKeyDown}"
//             @blur="${this._handleBlur}"
//           />

//           ${this._isOpen && this._filteredOptions.length > 0
//             ? html`
//                 <ul
//                   id="${listboxId}"
//                   class="autocomplete-listbox"
//                   role="listbox"
//                   aria-label="${this.$t('autocomplete_listboxLabel')}"
//                 >
//                   ${this._filteredOptions.map(
//                     (option, index) => html`
//                       <li
//                         id="${inputId}-option-${index}"
//                         role="option"
//                         aria-selected="${index === this._activeIndex ? 'true' : 'false'}"
//                         aria-posinset="${index + 1}"
//                         aria-setsize="${this._filteredOptions.length}"
//                         class="autocomplete-option ${classMap({ active: index === this._activeIndex })}"
//                         @click="${() => this._handleOptionClick(option)}"
//                         @keydown="${(e: KeyboardEvent) => this._handleOptionKeyDown(e, option)}"
//                       >
//                         ${option}
//                       </li>
//                     `,
//                   )}
//                 </ul>
//               `
//             : nothing}
//         </div>

//         <!-- Assistive hint (visually hidden) -->
//         ${this._showAssistiveHint
//           ? html`<div id="${assistiveHintId}" class="visually-hidden">${this.$t('autocomplete_assistiveHint')}</div>`
//           : nothing}
//         ${this.supportText
//           ? html`<small id="${inputId}-support" class="form-text text-muted">
//               <slot name="support-text">${this.supportText}</slot>
//             </small>`
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
