import{a as Ae,i as we,x as b}from"./iframe-BiclfI91.js";import{o as v}from"./if-defined-tWK9HKZq.js";import{S as Re}from"./form-control-trSpb7tG.js";import{r as y,e as Se,n as d,t as ze}from"./query-Bd2ew8Gc.js";import{o as N}from"./query-assigned-elements-DeyBePrH.js";import{n as Me}from"./when-BR7zwNJC.js";import"./preload-helper-Dp1pzeXC.js";function s(i,e,o,t){var r=arguments.length,a=r<3?e:t,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(i,e,o,t);else for(var p=i.length-1;p>=0;p--)(n=i[p])&&(a=(r<3?n(a):r>3?n(e,o,a):n(e,o))||a);return r>3&&a&&Object.defineProperty(e,o,a),a}function l(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)}function Ce(i){var e,o,t="";if(typeof i=="string"||typeof i=="number")t+=i;else if(typeof i=="object")if(Array.isArray(i)){var r=i.length;for(e=0;e<r;e++)i[e]&&(o=Ce(i[e]))&&(t&&(t+=" "),t+=o)}else for(o in i)i[o]&&(t&&(t+=" "),t+=o);return t}function Le(){for(var i,e,o=0,t="",r=arguments.length;o<r;o++)(i=arguments[o])&&(e=Ce(i))&&(t&&(t+=" "),t+=e);return t}const B=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:C}=window;let k,P="ltr",U="en";const Ee=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function Ie(){Ee&&(P=document.documentElement.dir||"ltr",U=document.documentElement.lang||navigator.language),[...B.keys()].forEach(i=>{const e=i;typeof e.requestUpdate=="function"&&e.requestUpdate()})}if(Ee){const i=new MutationObserver(Ie);P=document.documentElement.dir||"ltr",U=document.documentElement.lang||navigator.language,i.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ve(...i){i.forEach(e=>{const o=e.$code.toLowerCase();C.has(o)?C.set(o,{...C.get(o),...e}):C.set(o,e),k||(k=e)}),Ie()}window.registerTranslation=Ve;class Te{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){B.add(this.host)}hostDisconnected(){B.delete(this.host)}dir(){return`${this.host.dir||P}`.toLowerCase()}lang(){return`${this.host.lang||U}`.toLowerCase()}getTranslationData(e){var p;const o=new Intl.Locale(e.replace(/_/g,"-")),t=o==null?void 0:o.language.toLowerCase(),r=((p=o==null?void 0:o.region)==null?void 0:p.toLowerCase())??"",a=C.get(`${t}-${r}`),n=C.get(t);return{locale:o,language:t,region:r,primary:a,secondary:n}}exists(e,o){const{primary:t,secondary:r}=this.getTranslationData(o.lang??this.lang()),a={includeFallback:!1,...o};return!!(t&&t[e]||r&&r[e]||a.includeFallback&&k&&k[e])}term(e,...o){const{primary:t,secondary:r}=this.getTranslationData(this.lang());let a;if(t&&t[e])a=t[e];else if(r&&r[e])a=r[e];else if(k&&k[e])a=k[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof a=="function"?a(...o):a}date(e,o){const t=new Date(e);return new Intl.DateTimeFormat(this.lang(),o).format(t)}number(e,o){const t=Number(e);return Number.isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(e,o,t){return new Intl.RelativeTimeFormat(this.lang(),t).format(e,o)}}const qe=i=>class extends i{constructor(){super(...arguments),this.localize=new Te(this)}get $localize(){return this.localize}$t(e){return this.localize.term(e)}$d(e,o){return this.localize.date(e,o)}$n(e,o){return this.localize.number(e,o)}};class De{constructor(e){this.tag=e}format(e,o){return[`[${this.tag}] ${o}`]}warn(e){console.warn(...this.format("warn",e))}error(e){console.error(...this.format("error",e))}info(e){console.info(...this.format("info",e))}}class $e extends Ae{constructor(){super(),this.composeClass=Le,this.logger=new De(this.tagName.toLowerCase())}get _ariaAttributes(){const e={};for(const o of this.getAttributeNames())o==="it-role"?e.role=this.getAttribute(o):o.startsWith("it-aria-")&&(e[o.replace(/^it-/,"")]=this.getAttribute(o));return e}generateId(e){return`${e}-${Math.random().toString(36).slice(2)}`}addFocus(e){}getActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}get focusElement(){return this}get prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}connectedCallback(){var o;super.connectedCallback();const e=((o=this.id)==null?void 0:o.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(e)}}const je=qe($e),E=new WeakMap,I=new WeakMap,V=new WeakMap,F=new WeakSet,$=new WeakMap;class _e{constructor(e,o){this.handleFormData=t=>{const r=this.options.disabled(this.host),a=this.options.name(this.host),n=this.options.value(this.host),p=this.host.tagName.toLowerCase(),f=p==="it-button";if(this.host.isConnected&&!r&&!f&&typeof a=="string"&&a.length>0&&typeof n<"u")switch(p){case"it-radio":this.host.checked&&t.formData.append(a,n);break;case"it-checkbox":this.host.checked&&t.formData.getAll(a).indexOf(n)<0&&t.formData.append(a,n);break;default:Array.isArray(n)?n.forEach(H=>{t.formData.append(a,H.toString())}):t.formData.append(a,n.toString())}},this.handleFormSubmit=t=>{var n;const r=this.options.disabled(this.host),a=this.options.reportValidity;this.form&&!this.form.noValidate&&((n=E.get(this.form))==null||n.forEach(p=>{this.setUserInteracted(p,!0)})),this.form&&!this.form.noValidate&&!r&&!a(this.host)&&t.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),$.set(this.host,[])},this.handleInteraction=t=>{const r=$.get(this.host);r.includes(t.type)||r.push(t.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const r of t)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const r of t)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options={form:t=>{const r=t.form;if(r){const n=t.getRootNode().querySelector(`#${r}`);if(n)return n}return t.closest("form")},name:t=>t.name,value:t=>t.value,disabled:t=>t.disabled??!1,reportValidity:t=>typeof t.reportValidity=="function"?t.reportValidity():!0,checkValidity:t=>typeof t.checkValidity=="function"?t.checkValidity():!0,setValue:(t,r)=>{t.value=r},assumeInteractionOn:["it-input"],...o}}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),$.set(this.host,[]),this.options.assumeInteractionOn.forEach(o=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),$.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,E.has(this.form)?E.get(this.form).add(this.host):E.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),I.has(this.form)||(I.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),V.has(this.form)||(V.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=E.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),I.has(this.form)&&(this.form.reportValidity=I.get(this.form),I.delete(this.form)),V.has(this.form)&&(this.form.checkValidity=V.get(this.form),V.delete(this.form)),this.form=void 0))}setUserInteracted(e,o){o?F.add(e):F.delete(e),e.requestUpdate()}doAction(e,o){if(this.form){const t=document.createElement("button");t.type=e,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",o&&(t.name=o.name,t.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{o.hasAttribute(r)&&t.setAttribute(r,o.getAttribute(r))})),this.form.append(t),t.click(),t.remove()}}getForm(){return this.form??null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const o=this.host,t=!!F.has(o),r=!!o.required;o.toggleAttribute("data-required",r),o.toggleAttribute("data-optional",!r),o.toggleAttribute("data-invalid",!e),o.toggleAttribute("data-valid",e),o.toggleAttribute("data-user-invalid",!e&&t),o.toggleAttribute("data-user-valid",e&&t)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const o=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||o.preventDefault(),this.host.dispatchEvent(o)||e==null||e.preventDefault()}}const Oe={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};Ve(Oe);class u extends je{constructor(){super(...arguments),this.formControlController=new _e(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var e;return(e=this.inputElement)==null?void 0:e.validity}checkValidity(){var o;return((o=this.inputElement)==null?void 0:o.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.inputElement.checkValidity();return this.handleValidationMessages(),e}setCustomValidity(e){this.inputElement.setCustomValidity(e),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(e){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(e){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(e){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(e){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const e=this.inputElement.validity;e.valueMissing?this.setCustomValidity(this.$t("validityRequired")):e.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):e.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):e.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):e.typeMismatch||e.rangeUnderflow||e.rangeOverflow||e.stepMismatch||e.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}_handleChange(e){const o=e.target;let t;if(o instanceof HTMLInputElement)switch(o.type){case"checkbox":case"radio":t=o.checked;break;case"file":t=o.files;break;default:t=o.value}else o instanceof HTMLSelectElement&&o.multiple?t=Array.from(o.selectedOptions).map(r=>r.value):t=o.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:t,el:o},bubbles:!0,composed:!0}))}updated(e){var o;(o=super.updated)==null||o.call(this,e),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}s([y(),l("design:type",Object)],u.prototype,"_touched",void 0);s([Se(".it-form__control"),l("design:type",HTMLInputElement)],u.prototype,"inputElement",void 0);s([d({type:String,reflect:!0}),l("design:type",Object)],u.prototype,"name",void 0);s([d({reflect:!0}),l("design:type",Object)],u.prototype,"value",void 0);s([d({type:Boolean,reflect:!0}),l("design:type",Object)],u.prototype,"disabled",void 0);s([d({reflect:!0,type:String}),l("design:type",Object)],u.prototype,"form",void 0);s([d({type:Boolean,reflect:!0,attribute:"custom-validation"}),l("design:type",Object)],u.prototype,"customValidation",void 0);s([d({attribute:"validity-message",reflect:!0}),l("design:type",String)],u.prototype,"validationText",void 0);s([d(),l("design:type",String)],u.prototype,"pattern",void 0);s([d(),l("design:type",Object)],u.prototype,"min",void 0);s([d(),l("design:type",Object)],u.prototype,"max",void 0);s([d(),l("design:type",Object)],u.prototype,"step",void 0);s([d({type:Number}),l("design:type",Object)],u.prototype,"minlength",void 0);s([d({type:Number}),l("design:type",Object)],u.prototype,"maxlength",void 0);s([d({type:Boolean,reflect:!0}),l("design:type",Object)],u.prototype,"required",void 0);s([y(),l("design:type",Object)],u.prototype,"validationMessage",void 0);var Fe=we`@charset "UTF-8";
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** NEUTRAL 1 ****************************************/
/***************************** NEUTRAL 2 ****************************************/
/***************************** NEUTRAL 2 / 3 ****************************************/
.form-check [type=checkbox]:focus + label,
.form-check [type=radio]:focus + label {
  border-color: hsl(0, 0%, 0%) !important;
  box-shadow: 0 0 0 2px var(--bs-color-border-inverse), 0 0 0 5px var(--bs-color-outline-focus) !important;
  outline: 3px solid transparent !important;
  outline-offset: 3px !important;
}

.form-check [type=checkbox]:focus[data-focus-mouse=true] + label,
.form-check [type=radio]:focus[data-focus-mouse=true] + label {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
}

hr {
  margin: 1rem 0;
  color: inherit;
  border: 0;
  border-top: 1px solid;
  opacity: 0.25;
}

p {
  margin-top: 0;
  margin-bottom: var(--bs-paragraph-spacing);
}

abbr[title] {
  text-decoration: underline dotted;
  cursor: help;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: var(--bs-spacing-s);
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: var(--bs-spacing-l);
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: var(--bs-spacing-s);
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: var(--bs-font-weight-strong);
}

dd {
  margin-bottom: var(--bs-spacing-xxs);
  margin-left: 0;
}

blockquote {
  margin: 0 0 var(--bs-spacing-s);
}

sub,
sup {
  position: relative;
  font-size: var(--bs-font-size-1);
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: var(--bs-color-link);
  text-decoration: underline;
  text-decoration-skip-ink: auto;
  text-underline-offset: 2px;
}
a:hover {
  color: var(--bs-color-link-hover);
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-size: 1em;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: var(--bs-paragraph-spacing);
  overflow: auto;
}
pre code {
  word-break: normal;
}

a > code {
  color: inherit;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: hsl(210, 17%, 44%);
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
  display: none !important;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

:root {
  --bs-form-control-height: 2.5rem;
  --bs-form-control-spacing: var(--bs-spacing-xxs);
  --bs-form-control-background-color: var(--bs-color-background-inverse);
  --bs-form-control-border-color: var(--bs-color-border-secondary);
  --bs-form-control-border-radius: var(--bs-radius-smooth);
  --bs-form-control-placeholder-color: var(--bs-color-text-muted);
  --bs-form-control-label-color: var(--bs-color-text-base);
  --bs-form-control-text-color: var(--bs-color-text-secondary);
  --bs-form-control-font-size: var(--bs-body-font-size);
  --bs-form-group-spacing-y: var(--bs-spacing-m);
  --bs-form-checkbox-border-color: var(--bs-color-border-secondary);
  --bs-form-checkbox-border-radius: var(--bs-radius-smooth);
  --bs-form-checked-color: var(--bs-color-background-primary);
}

input[readonly],
textarea[readonly],
select[readonly] {
  --bs-form-control-border-color: var(--bs-color-border-subtle);
  --bs-form-control-background-color: var(--bs-color-background-muted);
  cursor: not-allowed;
}

input,
textarea,
select {
  display: block;
  width: 100%;
  padding: var(--bs-form-control-spacing);
  border: 1px solid var(--bs-form-control-border-color);
  border-radius: var(--bs-form-control-border-radius);
  background-color: var(--bs-form-control-background-color);
  color: var(--bs-form-control-text-color);
  font-size: var(--bs-form-control-font-size);
}
input.disabled, input:disabled,
textarea.disabled,
textarea:disabled,
select.disabled,
select:disabled {
  border-color: var(--bs-color-border-disabled);
  opacity: 1;
  background-color: var(--bs-color-background-disabled);
  color: var(--bs-color-text-disabled);
}

input:focus,
textarea:focus {
  outline: 3px solid transparent;
  outline-offset: 3px;
  box-shadow: 0 0 0 2px var(--bs-color-border-inverse), 0 0 0 5px var(--bs-color-outline-focus) !important;
}

input::file-selector-button {
  margin: -0.375rem -0.75rem;
  padding: 0.375rem 0.75rem;
  border-width: 0;
  border-style: solid;
  border-radius: 0;
  border-color: inherit;
  color: hsl(0, 0%, 10%);
  pointer-events: none;
  margin-inline-end: 0.75rem;
  border-inline-end-width: 0;
  background-color: hsl(0, 0%, 100%);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  input::file-selector-button {
    transition: none;
  }
}
input:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: rgb(242.25, 242.25, 242.25);
}
input[type=file] {
  overflow: hidden;
}
input[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
input::-webkit-date-and-time-value {
  height: 1.5em;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='hsl%280, 0%, 15%%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right var(--bs-form-control-spacing) center;
  background-size: 16px 12px;
  appearance: none;
}
select:focus {
  border-color: hsl(210, 17%, 44%);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(0, 102, 204, 0.25);
}
select[multiple], select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
select:disabled {
  background-color: hsl(0, 0%, 90%);
}
select:disabled:hover {
  cursor: not-allowed;
}
select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 hsl(0, 0%, 10%);
}
select option {
  font-weight: normal;
}
select:disabled {
  opacity: 1;
  background-color: hsl(210, 3%, 85%);
}

textarea {
  height: auto;
  font-size: var(--bs-body-font-size);
  line-height: 1.5;
}

label {
  display: inline-block;
  width: auto;
  max-width: 100%;
  margin-bottom: var(--bs-spacing-xxs);
  color: var(--bs-form-control-label-color);
  font-size: var(--bs-label-font-size-s);
  font-weight: var(--bs-font-weight-solid);
  line-height: var(--bs-label-line-height);
}

input,
textarea {
  outline: 0;
  box-shadow: none;
  transition: none;
  appearance: none;
}

input[type=date],
input[type=datetime-local],
input[type=time] {
  display: flex;
}

fieldset legend {
  margin-bottom: var(--bs-spacing-s);
  padding: 0 var(--bs-form-input-spacing-x);
  background-color: transparent;
  color: var(--bs-form-control-text-color);
  font-size: var(--bs-label-sm);
  font-weight: var(--bs-font-weight-solid);
}

::placeholder {
  color: var(--bs-form-control-placeholder-color);
}

input::-webkit-datetime-edit {
  background-color: var(--bs-color-background-primary-lighter);
  color: var(--bs-form-contro-text-color);
}

.form-group {
  position: relative;
  margin-bottom: var(--bs-form-group-spacing-y);
}
.form-group label.input-symbol-label:not(.active) {
  left: 2.25rem;
}
.form-group small.form-text {
  margin: 0;
  font-size: 0.875rem;
}
.form-group input[type=time] ~ label {
  font-size: 0.875rem;
}

.form-text {
  margin: var(--bs-spacing-xxs) 0;
  color: var(--bs-color-text-secondary);
}

.form-group.active .form-file-name {
  padding-bottom: 1.95rem;
}

.warning-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  color: var(--bs-color-text-warning);
  font-size: 0.75rem;
}

.valid-feedback,
.invalid-feedback,
.warning-feedback {
  margin-left: 0.5rem;
}

.input-group .input-group-text .btn {
  border-radius: var(--bs-form-control-border-radius) 0 0 var(--bs-form-control-border-radius);
}
.input-group .input-group-append {
  margin-left: 0;
}
.input-group .input-group-append .btn {
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom: 1px solid hsl(210, 17%, 44%);
  border-radius: 0 var(--bs-form-control-border-radius) var(--bs-form-control-border-radius) 0;
}

.form-check {
  position: relative;
  padding-left: 0;
  align-items: center;
}
.form-check + .form-check {
  margin-top: var(--bs-spacing-s);
}
.form-check [type=checkbox],
.form-check [type=radio] {
  position: absolute;
  height: 100%;
  margin-top: 0;
  margin-left: 0;
  opacity: 0;
}
.form-check [type=checkbox] + label,
.form-check [type=radio] + label {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 28px;
  font-size: var(--bs-label-font-size);
  font-weight: var(--bs-font-weight-solid);
  cursor: pointer;
  margin-bottom: 0;
  user-select: none;
}
@media (min-width: 576px) {
  .form-check [type=checkbox] + label,
  .form-check [type=radio] + label {
    font-size: var(--bs-label-font-size-m);
  }
}
.form-check input[type=checkbox] + label::after,
.form-check input[type=checkbox] + label::before {
  position: absolute;
  left: 0;
  z-index: 1;
  content: "";
  border-width: 2px;
  border-style: solid;
  transition: all var(--bs-transition-instant) ease-out;
}
.form-check input[type=checkbox] + label::after {
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: var(--bs-form-control-border-radius);
}
.form-check input[type=checkbox]:checked + label::before {
  top: 3px;
  left: 3px;
  width: 6px;
  height: 12px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent var(--bs-color-border-inverse) var(--bs-color-border-inverse) transparent;
  opacity: 1;
  transform: rotate(40deg);
  transform-origin: 100% 100%;
  backface-visibility: hidden;
}
.form-check input[type=checkbox]:checked + label::after {
  z-index: 0;
  border-color: var(--bs-form-checked-color);
  background-color: var(--bs-form-checked-color);
}
.form-check input[type=checkbox]:not(:checked) + label::after {
  z-index: 0;
  border-color: var(--bs-form-checkbox-border-color);
  background-color: transparent;
}
.form-check input[type=checkbox]:not(:checked) + label::before {
  top: 10px;
  left: 6px;
  width: 0;
  height: 0;
  border-color: transparent;
}
.form-check input[type=checkbox]:disabled + label {
  opacity: 1;
  cursor: not-allowed;
}
.form-check input[type=checkbox]:disabled:not(:checked) + label::after {
  border-color: var(--bs-color-border-disabled);
  background-color: transparent;
}
.form-check input[type=checkbox]:disabled:checked + label::after {
  border-color: var(--bs-color-border-disabled);
  background-color: var(--bs-color-border-disabled);
}
.form-check input[type=radio] + label::after, .form-check input[type=radio] + label::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  content: "";
  width: 20px;
  height: 20px;
  border-width: 2px;
  border-style: solid;
  border-radius: var(--bs-radius-rounded);
  transition: all var(--bs-transition-instant) ease-out;
}
.form-check input[type=radio]:not(:checked) + label::after, .form-check input[type=radio]:not(:checked) + label::before {
  border-color: var(--bs-form-checkbox-border-color);
}
.form-check input[type=radio]:not(:checked) + label:after {
  z-index: -1;
  transform: scale(0);
}
.form-check input[type=radio]:checked + label::after {
  z-index: 0;
  border-color: var(--bs-form-checked-color);
  background-color: var(--bs-form-checked-color);
  transform: scale(0.64);
}
.form-check input[type=radio]:checked + label::before {
  border-color: var(--bs-form-checked-color);
}
.form-check input[type=radio]:disabled + label {
  cursor: not-allowed;
}
.form-check input[type=radio]:disabled:not(:checked) + label::after, .form-check input[type=radio]:disabled:not(:checked) + label::before {
  border-color: var(--bs-color-border-disabled);
}
.form-check input[type=radio]:disabled:checked + label::after {
  border-color: var(--bs-color-border-disabled);
  background-color: var(--bs-color-border-disabled);
}
.form-check input[type=radio]:disabled:checked + label::before {
  border-color: var(--bs-color-border-disabled);
}
.form-check.form-check-group {
  margin-bottom: 1rem;
  padding: 0 0 1rem 0;
  box-shadow: inset 0 -1px 0 0 rgba(1, 1, 1, 0.1);
}
.form-check.form-check-group input[type=checkbox] + label,
.form-check.form-check-group input[type=radio] + label {
  padding-right: 3.25rem;
  padding-left: 0;
}
.form-check.form-check-group input[type=checkbox] + label::after, .form-check.form-check-group input[type=checkbox] + label::before,
.form-check.form-check-group input[type=radio] + label::after,
.form-check.form-check-group input[type=radio] + label::before {
  right: 0;
  left: auto;
}
.form-check.form-check-group input[type=checkbox]:checked + label::before {
  right: 11px;
}
.form-check.form-check-group input[type=radio]:checked + label::before {
  right: 0;
}
.form-check.form-check-group .form-text {
  display: block;
  margin-bottom: 0.5rem;
  padding-right: 3.25rem;
}
.form-check.form-check-group input.semi-checked:not(:checked) + label::before {
  right: 4px;
  left: auto;
}
.form-check input.semi-checked:not(:checked) + label::before {
  top: 9px;
  left: 4px;
  width: 12px;
  height: 2px;
  border-width: 0;
  border-style: none;
  border-color: transparent;
  opacity: 1;
  background: var(--bs-color-background-inverse);
  transform: none;
  backface-visibility: hidden;
}
.form-check input.semi-checked:not(:checked) + label::after {
  z-index: 0;
  border-color: var(--bs-form-checked-color);
  background-color: var(--bs-form-checked-color);
}

.form-check-inline {
  display: inline-block;
}
.form-check-inline:not(:last-child) {
  margin-right: var(--bs-spacing-m);
}

@media (prefers-reduced-motion: reduce) {
  fieldset legend,
  .form-group label,
  textarea,
  .form-check [type=checkbox],
  .form-check [type=radio],
  .form-check [type=checkbox] + label::after,
  .form-check [type=checkbox] + label::before,
  .form-check [type=radio] + label::after,
  .form-check [type=radio] + label::before,
  .toggles label input[type=checkbox] + .lever::before,
  .toggles label input[type=checkbox] + .lever::after {
    transition: none !important;
  }
}
.form-check [type=checkbox]:focus + label,
.form-check [type=radio]:focus + label {
  border-color: hsl(0, 0%, 0%) !important;
  box-shadow: 0 0 0 2px var(--bs-color-border-inverse), 0 0 0 5px var(--bs-color-outline-focus) !important;
  outline: 3px solid transparent !important;
  outline-offset: 3px !important;
}

.form-check [type=checkbox]:focus[data-focus-mouse=true] + label,
.form-check [type=radio]:focus[data-focus-mouse=true] + label {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

.form-control-plaintext {
  border: 0;
  --bs-form-control-border-color: transparent;
  --bs-form-control-border-radius: 0;
  --bs-form-control-background-color: transparent;
  --bs-form-control-spacing: 0;
}
.form-control-plaintext:focus {
  outline: 0;
  box-shadow: none !important;
}
.form-control-plaintext + label {
  cursor: text;
}

.form-control {
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 45px 30%;
}
.form-control:disabled {
  cursor: not-allowed;
  background: var(--bs-color-background-disabled);
  border: 0;
  color: var(--bs-color-text-disabled);
}
.was-validated .form-control:valid, .form-control.is-valid {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23008055' viewBox='0 0 192 512'%3E%3Cpath d='M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z'/%3E%3C/svg%3E");
}
.was-validated .form-control:invalid, .form-control.is-invalid {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23cc334d' viewBox='0 0 384 512'%3E%3Cpath d='M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z'/%3E%3C/svg%3E");
  border-color: var(--bs-color-border-danger);
}
.form-control.warning {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2%2012C2%206.47715%206.47715%202%2012%202C14.6522%202%2017.1957%203.05357%2019.0711%204.92893C20.9464%206.8043%2022%209.34784%2022%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012ZM3%2012C3%2016.9706%207.02944%2021%2012%2021C16.9706%2021%2021%2016.9706%2021%2012C21%207.02944%2016.9706%203%2012%203C7.02944%203%203%207.02944%203%2012ZM11.5%2014.2V5.7H12.7V14.2H11.5ZM12.6%2018.3V16.5H11.4V18.3H12.6Z%22/%3E%0A%3C/svg%3E") no-repeat;
  border-color: var(--bs-color-border-warning);
}
.form-control.is-valid ~ .warning-feedback {
  display: block;
}

.form-control-sm {
  --bs-form-control-spacing: var(--bs-spacing-xxs) var(--bs-spacing-3xs);
  --bs-form-control-font-size: var(--bs-label-font-size);
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg {
  --bs-form-control-font-size: var(--bs-lead-font-size);
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: 2.5rem;
  border: 1px solid hsl(210, 17%, 44%);
}
textarea.form-control-sm {
  min-height: calc(1.5em + 0.5rem);
}
textarea.form-control-lg {
  min-height: calc(1.5em + 1rem);
}

.form-control-color {
  width: 3rem;
  height: 2.5rem;
  padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  border: 0 !important;
  border-radius: 0;
}
.form-control-color::-webkit-color-swatch {
  border-radius: 0;
}
.form-control-color.form-control-sm {
  height: calc(1.5em + 0.5rem);
}
.form-control-color.form-control-lg {
  height: calc(1.5em + 1rem);
}

.form-check-reverse {
  padding-right: 1.5em;
  padding-left: 0;
  text-align: right;
}
.form-check-reverse .form-check-input {
  float: right;
  margin-right: -1.5em;
  margin-left: 0;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: hsl(0, 0%, 100%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  appearance: none;
  print-color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: hsl(210, 17%, 44%);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(0, 102, 204, 0.25);
}
.form-check-input:checked {
  background-color: hsl(210, 100%, 40%);
  border-color: hsl(210, 100%, 40%);
}
.form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='hsl%280, 0%, 100%%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='hsl%280, 0%, 100%%29'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: hsl(210, 100%, 40%);
  border-color: hsl(210, 100%, 40%);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='hsl%280, 0%, 100%%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  cursor: default;
  opacity: 0.5;
}

.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  width: 2em;
  margin-left: -2.5em;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='hsl%28210, 17%, 44%%29'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='hsl%280, 0%, 100%%29'/%3e%3c/svg%3e");
}
.form-switch.form-check-reverse {
  padding-right: 2.5em;
  padding-left: 0;
}
.form-switch.form-check-reverse .form-check-input {
  margin-right: -2.5em;
  margin-left: 0;
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

.form-feedback {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.75rem;
}
.form-feedback.just-validate-error-label {
  color: var(--bs-color-text-danger);
}

.input-group-text:has(~ [data-focus-mouse=true]:not(.btn)),
[data-focus-mouse=true]:not(.btn) ~ .input-group-text,
button:has(~ [data-focus-mouse=true]:not(.btn)),
[data-focus-mouse=true]:not(.btn) + button {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

.input-group-text:has(~ .is-invalid),
.is-invalid ~ .input-group-text,
button:has(~ .is-invalid),
.is-invalid + button {
  border-color: var(--bs-color-border-danger) !important;
}

.sr-only-justvalidate-bi {
  display: none;
}

.just-validate-success-field {
  border-color: var(--bs-color-border-success) !important;
  padding-right: calc(1.5em + 0.75rem) !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23008055' viewBox='0 0 192 512'%3E%3Cpath d='M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z'/%3E%3C/svg%3E");
}

.input-group-text:has(~ .just-validate-success-field),
.just-validate-success-field ~ .input-group-text,
button:has(~ .just-validate-success-field),
.just-validate-success-field + button {
  border-color: var(--bs-color-border-success);
}

.just-validate-success-field + .input-group-text.align-buttons,
.is-invalid + .input-group-text.align-buttons {
  right: 30px;
}

.is-invalid + .input-group-text.align-buttons {
  bottom: 22px;
}

.autocomplete__wrapper .form-feedback.just-validate-error-label {
  position: absolute;
}

textarea.form-control {
  background-position: top 0.3em right 0.3em !important;
  background-size: 37px 30% !important;
}
textarea.is-invalid {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
textarea.just-validate-success-field {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

input[type=checkbox].is-invalid,
input[type=radio].is-invalid {
  --bs-form-checkbox-border-color: var(--bs-color-border-danger);
}

select.is-invalid {
  border: 1px solid var(--bs-color-border-danger);
}
select.just-validate-success-field {
  border: 1px solid var(--bs-color-border-success);
}

:host {
  display: block;
  margin-bottom: var(--bs-spacing-xs);
  box-shadow: none !important;
  -webkit-focus-ring-color: transparent; /* Chrome/Safari */
  outline: none !important;
}

/* Mostra il ring sul controllo interno in questi casi:
   - host stesso è :focus-visible (keyboard)
   - host contiene il focus (qualunque elemento figlio sia focalizzato)
   - fallback: anche quando host ha semplicemente :focus (utile per alcuni casi) */
:host(:focus-visible) .radio-control {
  box-shadow: 0 0 0 2px hsl(0, 0%, 100%), 0 0 0 5px hsl(0, 0%, 0%) !important;
  /* assicurati che il controllo non abbia outline propio che interferisca */
  outline: none;
}

.radio-control {
  display: flex;
  width: fit-content;
  align-items: center;
  padding: var(--bs-form-input-padding-y) var(--bs-form-input-padding-x);
  cursor: pointer;
}

.radio-control-label {
  display: block;
  width: 100%;
  color: var(--it-radio-label-color, var(--bs-form-control-label-color));
  font-size: var(--bs-label-sm);
  font-weight: var(--bs-font-weight-solid);
}
@media (min-width: 576px) {
  .radio-control-label {
    font-size: var(--bs-label-font-size-m);
  }
}

.radio-control-grouped {
  width: 100%;
  flex-direction: row-reverse;
}

:host([inline]) {
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 0;
}

:host(:not([group])).form-check label {
  margin-bottom: var(--bs-spacing-xxs);
}

#button {
  position: relative;
  display: inline-flex;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  border: none !important;
  margin-top: 0 !important;
  margin-right: 0.5rem;
}
#button::before {
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-width: 2px;
  border-style: solid;
  border-color: var(--bs-form-control-label-color);
  border-radius: var(--bs-radius-rounded);
  content: "";
  transition: all var(--bs-transition-instant) ease-out;
}
#button::after {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  border-width: 0;
  border-style: solid;
  border-color: transparent;
  border-radius: var(--bs-radius-rounded);
  background-color: transparent;
  content: "";
  transform: scale(0);
  transition: all var(--bs-transition-instant) ease-out;
}

:host(:not([aria-checked=true])) #button::before {
  border-color: var(--bs-form-checkbox-border-color);
}
:host(:not([aria-checked=true])) #button::after {
  z-index: -1;
  border-width: 0;
  border-color: transparent;
  background-color: transparent;
  transform: scale(0);
}

:host([aria-checked=true]) #button::before {
  border-color: var(--bs-form-checked-color);
}
:host([aria-checked=true]) #button::after {
  z-index: 0;
  border-width: 2px;
  border-color: var(--bs-form-checked-color);
  background-color: var(--bs-form-checked-color);
  transform: scale(0.64);
}

:host([aria-disabled=true]) .radio-control {
  cursor: not-allowed;
}
:host([aria-disabled=true]) #button::before,
:host([aria-disabled=true]) #button::after {
  border-color: var(--bs-color-border-disabled);
}

:host([aria-disabled=true][aria-checked=true]) #button::after {
  background-color: var(--bs-color-border-disabled);
}

:host([aria-invalid=true]) #button::before, :host([aria-invalid=true]) #button::after {
  border-color: var(--bs-color-feedback-error);
}
:host([aria-invalid=true]) #button[aria-checked=true]::after {
  background-color: var(--bs-color-feedback-error);
}

.form-text {
  display: block;
  margin-top: var(--bs-spacing-xxs);
  margin-bottom: 0;
}`;let h=class extends $e{constructor(){super(...arguments),this.value="",this.disabled=!1,this.checked=!1,this.supportText="",this._name="",this._grouped=!1,this._required=!1,this._inline=!1,this.handleKeyup=e=>{e.code==="Space"&&(e.preventDefault(),this.activate(e))},this.handleKeydown=e=>{var o,t;if(e.code==="Space"){e.preventDefault();return}if(e.key==="Tab"){(o=this.group)==null||o.handleRadioKeyDown(this,e);return}["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.key)&&e.preventDefault(),(t=this.group)==null||t.handleRadioKeyDown(this,e)},this.handleClick=e=>{this.activate(e)}}get label(){return this.labelElements.length>0?this.labelElements[0].innerText.trim():""}get group(){return this.closest("it-radio-group")}get name(){var e;return this._name||((e=this.group)==null?void 0:e.name)||""}get grouped(){return this._grouped}get required(){return this._required}get inline(){return this._inline}get invalid(){var o;return((o=this.group)!=null&&o.getAttribute?this.group.getAttribute("aria-invalid"):null)==="true"}syncFromGroup(e){e.name!==void 0&&(this._name=e.name),e.grouped!==void 0&&(this._grouped=e.grouped),e.required!==void 0&&(this._required=e.required),e.inline!==void 0&&(this._inline=e.inline)}activate(e){this.checked||this.disabled||(this.group?this.group.selectRadio(this,e):this.checked=!0)}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.setAttribute("role","radio"),this.hasAttribute("tabindex")||(this.tabIndex=0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeydown,{capture:!0}),this.addEventListener("keyup",this.handleKeyup,{capture:!0})}disconnectedCallback(){var e;(e=super.disconnectedCallback)==null||e.call(this),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeydown,{capture:!0}),this.removeEventListener("keyup",this.handleKeyup,{capture:!0})}updated(e){var o;(o=super.updated)==null||o.call(this,e),e.has("checked")&&this.setAttribute("aria-checked",this.checked?"true":"false"),e.has("disabled")&&(this.disabled?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")),e.has("_name")&&(this._name?this.setAttribute("name",this._name):this.removeAttribute("name")),e.has("_required")&&(this._required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")),this.label||this.logger.warn("Label is required to ensure accessibility. Please, define a label for <it-radio/> .")}_renderInput(){return b`
      <div id="input" part="input"></div>
      <span id="button" part="button" class="form-check-input"></span>
    `}render(){var p,f;const e=`${this._id}-support-text`,o=b` ${Me(this.supportText,()=>b`<slot name="helpText"><small class="form-text" id="${e}">${this.supportText}</small></slot>`)}`,t=this.composeClass("form-check",this.inline&&!this.grouped?"form-check-inline":"",this.grouped&&!this.inline?"form-check-group":""),r=this.composeClass(((p=this.supportText)==null?void 0:p.length)>0?e:"",((f=this._ariaAttributes["aria-describedby"])==null?void 0:f.length)>0?this._ariaAttributes["aria-describedby"]:""),a=this.composeClass("radio-control",this.grouped?"radio-control-grouped":""),n=this.composeClass("radio-control-label",this.disabled?"disabled":"");return b`
      <div class="${t}" part="input-wrapper" aria-describedby="${v(r||void 0)}">
        <div id="radio-control" part="radio-control" class="${a}">
          ${this._renderInput()}
          <span part="label" class="${n}"><slot name="label">${this.label}</slot></span>
        </div>
        ${o}
      </div>
    `}};h.styles=Fe;s([d({type:String,reflect:!0}),l("design:type",Object)],h.prototype,"value",void 0);s([d({type:Boolean,reflect:!0}),l("design:type",Object)],h.prototype,"disabled",void 0);s([d({type:Boolean,reflect:!0}),l("design:type",Object)],h.prototype,"checked",void 0);s([d({type:String,attribute:"support-text"}),l("design:type",Object)],h.prototype,"supportText",void 0);s([y(),l("design:type",Object)],h.prototype,"_name",void 0);s([y(),l("design:type",Object)],h.prototype,"_grouped",void 0);s([y(),l("design:type",Object)],h.prototype,"_required",void 0);s([y(),l("design:type",Object)],h.prototype,"_inline",void 0);s([N({slot:"label"}),l("design:type",Array)],h.prototype,"labelElements",void 0);h=s([ze("it-radio")],h);class Be{constructor(e,o){this.host=e,this.config={wrap:!0,direction:"both",selectOnFocus:!1,skipItem:t=>t.hasAttribute("disabled")||t.disabled===!0,...o},e.addController(this)}hostConnected(){}hostDisconnected(){}updateTabindices(e){const o=this.config.getItems();if(!o||o.length===0)return;let t=e??0;e===void 0&&(t=o.findIndex(r=>!this.config.skipItem(r)),t===-1&&(t=0)),o.forEach((r,a)=>{const n=r;this.config.skipItem(n)?n.tabIndex=-1:n.tabIndex=a===t?0:-1})}handleKeydown(e,o){const{direction:t}=this.config,{key:r}=o,a=r==="ArrowUp"||r==="ArrowDown",n=r==="ArrowLeft"||r==="ArrowRight",p=r==="Home",f=r==="End";if(!(p||f||t==="both"&&(a||n)||t==="vertical"&&a||t==="horizontal"&&n))return!1;o.preventDefault();const w=this.config.getItems(),z=w.indexOf(e);if(z===-1)return!1;let g=z;if(p?g=0:f?g=w.length-1:r==="ArrowDown"||r==="ArrowRight"?g=this.getNextIndex(w,z,1):(r==="ArrowUp"||r==="ArrowLeft")&&(g=this.getNextIndex(w,z,-1)),g=this.findNextValidIndex(w,g,g>z?1:-1),g!==-1&&g!==z){const O=w[g];return this.updateTabindices(g),O.focus(),this.config.selectOnFocus&&this.config.onSelect&&this.config.onSelect(O,o),!0}return!1}getNextIndex(e,o,t){const{wrap:r}=this.config;let a=o+t;return r?a<0?a=e.length-1:a>=e.length&&(a=0):a=Math.max(0,Math.min(e.length-1,a)),a}findNextValidIndex(e,o,t){const r=e.length;let a=0,n=o;for(;a<r;){if(!this.config.skipItem(e[n]))return n;n=this.getNextIndex(e,n,t),a+=1}return-1}focusItem(e){const t=this.config.getItems().indexOf(e);t!==-1&&(this.updateTabindices(t),e.focus())}focusFirst(){const e=this.config.getItems(),o=this.findNextValidIndex(e,0,1);o!==-1&&this.focusItem(e[o])}focusLast(){const e=this.config.getItems(),o=this.findNextValidIndex(e,e.length-1,-1);o!==-1&&this.focusItem(e[o])}}var Ne=we`/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** 1 ****************************************/
/***************************** 2 ****************************************/
/***************************** 3 ****************************************/
/***************************** NEUTRAL 1 ****************************************/
/***************************** NEUTRAL 2 ****************************************/
/***************************** NEUTRAL 2 / 3 ****************************************/
.form-check [type=checkbox]:focus + label,
.form-check [type=radio]:focus + label {
  border-color: hsl(0, 0%, 0%) !important;
  box-shadow: 0 0 0 2px var(--bs-color-border-inverse), 0 0 0 5px var(--bs-color-outline-focus) !important;
  outline: 3px solid transparent !important;
  outline-offset: 3px !important;
}

.form-check [type=checkbox]:focus[data-focus-mouse=true] + label,
.form-check [type=radio]:focus[data-focus-mouse=true] + label {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

@media (prefers-reduced-motion: no-preference) {
  :root {
    scroll-behavior: smooth;
  }
}

body {
  margin: 0;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: hsla(0, 0%, 0%, 0);
}

hr {
  margin: 1rem 0;
  color: inherit;
  border: 0;
  border-top: 1px solid;
  opacity: 0.25;
}

p {
  margin-top: 0;
  margin-bottom: var(--bs-paragraph-spacing);
}

abbr[title] {
  text-decoration: underline dotted;
  cursor: help;
  text-decoration-skip-ink: none;
}

address {
  margin-bottom: var(--bs-spacing-s);
  font-style: normal;
  line-height: inherit;
}

ol,
ul {
  padding-left: var(--bs-spacing-l);
}

ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: var(--bs-spacing-s);
}

ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}

dt {
  font-weight: var(--bs-font-weight-strong);
}

dd {
  margin-bottom: var(--bs-spacing-xxs);
  margin-left: 0;
}

blockquote {
  margin: 0 0 var(--bs-spacing-s);
}

sub,
sup {
  position: relative;
  font-size: var(--bs-font-size-1);
  line-height: 0;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

a {
  color: var(--bs-color-link);
  text-decoration: underline;
  text-decoration-skip-ink: auto;
  text-underline-offset: 2px;
}
a:hover {
  color: var(--bs-color-link-hover);
}

a:not([href]):not([class]), a:not([href]):not([class]):hover {
  color: inherit;
  text-decoration: none;
}

pre,
code,
kbd,
samp {
  font-size: 1em;
}

pre {
  display: block;
  margin-top: 0;
  margin-bottom: var(--bs-paragraph-spacing);
  overflow: auto;
}
pre code {
  word-break: normal;
}

a > code {
  color: inherit;
}

figure {
  margin: 0 0 1rem;
}

img,
svg {
  vertical-align: middle;
}

table {
  caption-side: bottom;
  border-collapse: collapse;
}

caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: hsl(210, 17%, 44%);
  text-align: left;
}

th {
  text-align: inherit;
  text-align: -webkit-match-parent;
}

thead,
tbody,
tfoot,
tr,
td,
th {
  border-color: inherit;
  border-style: solid;
  border-width: 0;
}

label {
  display: inline-block;
}

button {
  border-radius: 0;
}

button:focus:not(:focus-visible) {
  outline: 0;
}

input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}

button,
select {
  text-transform: none;
}

[role=button] {
  cursor: pointer;
}

select {
  word-wrap: normal;
}
select:disabled {
  opacity: 1;
}

[list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator {
  display: none !important;
}

button,
[type=button],
[type=reset],
[type=submit] {
  -webkit-appearance: button;
}
button:not(:disabled),
[type=button]:not(:disabled),
[type=reset]:not(:disabled),
[type=submit]:not(:disabled) {
  cursor: pointer;
}

::-moz-focus-inner {
  padding: 0;
  border-style: none;
}

textarea {
  resize: vertical;
}

fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

::-webkit-datetime-edit-fields-wrapper,
::-webkit-datetime-edit-text,
::-webkit-datetime-edit-minute,
::-webkit-datetime-edit-hour-field,
::-webkit-datetime-edit-day-field,
::-webkit-datetime-edit-month-field,
::-webkit-datetime-edit-year-field {
  padding: 0;
}

::-webkit-inner-spin-button {
  height: auto;
}

[type=search] {
  outline-offset: -2px;
  -webkit-appearance: textfield;
}

/* rtl:raw:
[type="tel"],
[type="url"],
[type="email"],
[type="number"] {
  direction: ltr;
}
*/
::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-color-swatch-wrapper {
  padding: 0;
}

::file-selector-button {
  font: inherit;
  -webkit-appearance: button;
}

output {
  display: inline-block;
}

iframe {
  border: 0;
}

summary {
  display: list-item;
  cursor: pointer;
}

progress {
  vertical-align: baseline;
}

[hidden] {
  display: none !important;
}

.visually-hidden,
.visually-hidden-focusable:not(:focus):not(:focus-within) {
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  padding: 0 !important;
  margin: -1px !important;
  overflow: hidden !important;
  clip: rect(0, 0, 0, 0) !important;
  white-space: nowrap !important;
  border: 0 !important;
}

:root {
  --bs-form-control-height: 2.5rem;
  --bs-form-control-spacing: var(--bs-spacing-xxs);
  --bs-form-control-background-color: var(--bs-color-background-inverse);
  --bs-form-control-border-color: var(--bs-color-border-secondary);
  --bs-form-control-border-radius: var(--bs-radius-smooth);
  --bs-form-control-placeholder-color: var(--bs-color-text-muted);
  --bs-form-control-label-color: var(--bs-color-text-base);
  --bs-form-control-text-color: var(--bs-color-text-secondary);
  --bs-form-control-font-size: var(--bs-body-font-size);
  --bs-form-group-spacing-y: var(--bs-spacing-m);
  --bs-form-checkbox-border-color: var(--bs-color-border-secondary);
  --bs-form-checkbox-border-radius: var(--bs-radius-smooth);
  --bs-form-checked-color: var(--bs-color-background-primary);
}

input[readonly],
textarea[readonly],
select[readonly] {
  --bs-form-control-border-color: var(--bs-color-border-subtle);
  --bs-form-control-background-color: var(--bs-color-background-muted);
  cursor: not-allowed;
}

input,
textarea,
select {
  display: block;
  width: 100%;
  padding: var(--bs-form-control-spacing);
  border: 1px solid var(--bs-form-control-border-color);
  border-radius: var(--bs-form-control-border-radius);
  background-color: var(--bs-form-control-background-color);
  color: var(--bs-form-control-text-color);
  font-size: var(--bs-form-control-font-size);
}
input.disabled, input:disabled,
textarea.disabled,
textarea:disabled,
select.disabled,
select:disabled {
  border-color: var(--bs-color-border-disabled);
  opacity: 1;
  background-color: var(--bs-color-background-disabled);
  color: var(--bs-color-text-disabled);
}

input:focus,
textarea:focus {
  outline: 3px solid transparent;
  outline-offset: 3px;
  box-shadow: 0 0 0 2px var(--bs-color-border-inverse), 0 0 0 5px var(--bs-color-outline-focus) !important;
}

input::file-selector-button {
  margin: -0.375rem -0.75rem;
  padding: 0.375rem 0.75rem;
  border-width: 0;
  border-style: solid;
  border-radius: 0;
  border-color: inherit;
  color: hsl(0, 0%, 10%);
  pointer-events: none;
  margin-inline-end: 0.75rem;
  border-inline-end-width: 0;
  background-color: hsl(0, 0%, 100%);
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  input::file-selector-button {
    transition: none;
  }
}
input:hover:not(:disabled):not([readonly])::file-selector-button {
  background-color: rgb(242.25, 242.25, 242.25);
}
input[type=file] {
  overflow: hidden;
}
input[type=file]:not(:disabled):not([readonly]) {
  cursor: pointer;
}
input::-webkit-date-and-time-value {
  height: 1.5em;
}

select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='hsl%280, 0%, 15%%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right var(--bs-form-control-spacing) center;
  background-size: 16px 12px;
  appearance: none;
}
select:focus {
  border-color: hsl(210, 17%, 44%);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(0, 102, 204, 0.25);
}
select[multiple], select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
select:disabled {
  background-color: hsl(0, 0%, 90%);
}
select:disabled:hover {
  cursor: not-allowed;
}
select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 hsl(0, 0%, 10%);
}
select option {
  font-weight: normal;
}
select:disabled {
  opacity: 1;
  background-color: hsl(210, 3%, 85%);
}

textarea {
  height: auto;
  font-size: var(--bs-body-font-size);
  line-height: 1.5;
}

label {
  display: inline-block;
  width: auto;
  max-width: 100%;
  margin-bottom: var(--bs-spacing-xxs);
  color: var(--bs-form-control-label-color);
  font-size: var(--bs-label-font-size-s);
  font-weight: var(--bs-font-weight-solid);
  line-height: var(--bs-label-line-height);
}

input,
textarea {
  outline: 0;
  box-shadow: none;
  transition: none;
  appearance: none;
}

input[type=date],
input[type=datetime-local],
input[type=time] {
  display: flex;
}

fieldset legend {
  margin-bottom: var(--bs-spacing-s);
  padding: 0 var(--bs-form-input-spacing-x);
  background-color: transparent;
  color: var(--bs-form-control-text-color);
  font-size: var(--bs-label-sm);
  font-weight: var(--bs-font-weight-solid);
}

::placeholder {
  color: var(--bs-form-control-placeholder-color);
}

input::-webkit-datetime-edit {
  background-color: var(--bs-color-background-primary-lighter);
  color: var(--bs-form-contro-text-color);
}

.form-group {
  position: relative;
  margin-bottom: var(--bs-form-group-spacing-y);
}
.form-group label.input-symbol-label:not(.active) {
  left: 2.25rem;
}
.form-group small.form-text {
  margin: 0;
  font-size: 0.875rem;
}
.form-group input[type=time] ~ label {
  font-size: 0.875rem;
}

.form-text {
  margin: var(--bs-spacing-xxs) 0;
  color: var(--bs-color-text-secondary);
}

.form-group.active .form-file-name {
  padding-bottom: 1.95rem;
}

.warning-feedback {
  display: none;
  width: 100%;
  margin-top: 0.25rem;
  color: var(--bs-color-text-warning);
  font-size: 0.75rem;
}

.valid-feedback,
.invalid-feedback,
.warning-feedback {
  margin-left: 0.5rem;
}

.input-group .input-group-text .btn {
  border-radius: var(--bs-form-control-border-radius) 0 0 var(--bs-form-control-border-radius);
}
.input-group .input-group-append {
  margin-left: 0;
}
.input-group .input-group-append .btn {
  height: 100%;
  padding-top: 0;
  padding-bottom: 0;
  border-bottom: 1px solid hsl(210, 17%, 44%);
  border-radius: 0 var(--bs-form-control-border-radius) var(--bs-form-control-border-radius) 0;
}

.form-check {
  position: relative;
  padding-left: 0;
  align-items: center;
}
.form-check + .form-check {
  margin-top: var(--bs-spacing-s);
}
.form-check [type=checkbox],
.form-check [type=radio] {
  position: absolute;
  height: 100%;
  margin-top: 0;
  margin-left: 0;
  opacity: 0;
}
.form-check [type=checkbox] + label,
.form-check [type=radio] + label {
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 28px;
  font-size: var(--bs-label-font-size);
  font-weight: var(--bs-font-weight-solid);
  cursor: pointer;
  margin-bottom: 0;
  user-select: none;
}
@media (min-width: 576px) {
  .form-check [type=checkbox] + label,
  .form-check [type=radio] + label {
    font-size: var(--bs-label-font-size-m);
  }
}
.form-check input[type=checkbox] + label::after,
.form-check input[type=checkbox] + label::before {
  position: absolute;
  left: 0;
  z-index: 1;
  content: "";
  border-width: 2px;
  border-style: solid;
  transition: all var(--bs-transition-instant) ease-out;
}
.form-check input[type=checkbox] + label::after {
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: var(--bs-form-control-border-radius);
}
.form-check input[type=checkbox]:checked + label::before {
  top: 3px;
  left: 3px;
  width: 6px;
  height: 12px;
  border-width: 2px;
  border-style: solid;
  border-color: transparent var(--bs-color-border-inverse) var(--bs-color-border-inverse) transparent;
  opacity: 1;
  transform: rotate(40deg);
  transform-origin: 100% 100%;
  backface-visibility: hidden;
}
.form-check input[type=checkbox]:checked + label::after {
  z-index: 0;
  border-color: var(--bs-form-checked-color);
  background-color: var(--bs-form-checked-color);
}
.form-check input[type=checkbox]:not(:checked) + label::after {
  z-index: 0;
  border-color: var(--bs-form-checkbox-border-color);
  background-color: transparent;
}
.form-check input[type=checkbox]:not(:checked) + label::before {
  top: 10px;
  left: 6px;
  width: 0;
  height: 0;
  border-color: transparent;
}
.form-check input[type=checkbox]:disabled + label {
  opacity: 1;
  cursor: not-allowed;
}
.form-check input[type=checkbox]:disabled:not(:checked) + label::after {
  border-color: var(--bs-color-border-disabled);
  background-color: transparent;
}
.form-check input[type=checkbox]:disabled:checked + label::after {
  border-color: var(--bs-color-border-disabled);
  background-color: var(--bs-color-border-disabled);
}
.form-check input[type=radio] + label::after, .form-check input[type=radio] + label::before {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  content: "";
  width: 20px;
  height: 20px;
  border-width: 2px;
  border-style: solid;
  border-radius: var(--bs-radius-rounded);
  transition: all var(--bs-transition-instant) ease-out;
}
.form-check input[type=radio]:not(:checked) + label::after, .form-check input[type=radio]:not(:checked) + label::before {
  border-color: var(--bs-form-checkbox-border-color);
}
.form-check input[type=radio]:not(:checked) + label:after {
  z-index: -1;
  transform: scale(0);
}
.form-check input[type=radio]:checked + label::after {
  z-index: 0;
  border-color: var(--bs-form-checked-color);
  background-color: var(--bs-form-checked-color);
  transform: scale(0.64);
}
.form-check input[type=radio]:checked + label::before {
  border-color: var(--bs-form-checked-color);
}
.form-check input[type=radio]:disabled + label {
  cursor: not-allowed;
}
.form-check input[type=radio]:disabled:not(:checked) + label::after, .form-check input[type=radio]:disabled:not(:checked) + label::before {
  border-color: var(--bs-color-border-disabled);
}
.form-check input[type=radio]:disabled:checked + label::after {
  border-color: var(--bs-color-border-disabled);
  background-color: var(--bs-color-border-disabled);
}
.form-check input[type=radio]:disabled:checked + label::before {
  border-color: var(--bs-color-border-disabled);
}
.form-check.form-check-group {
  margin-bottom: 1rem;
  padding: 0 0 1rem 0;
  box-shadow: inset 0 -1px 0 0 rgba(1, 1, 1, 0.1);
}
.form-check.form-check-group input[type=checkbox] + label,
.form-check.form-check-group input[type=radio] + label {
  padding-right: 3.25rem;
  padding-left: 0;
}
.form-check.form-check-group input[type=checkbox] + label::after, .form-check.form-check-group input[type=checkbox] + label::before,
.form-check.form-check-group input[type=radio] + label::after,
.form-check.form-check-group input[type=radio] + label::before {
  right: 0;
  left: auto;
}
.form-check.form-check-group input[type=checkbox]:checked + label::before {
  right: 11px;
}
.form-check.form-check-group input[type=radio]:checked + label::before {
  right: 0;
}
.form-check.form-check-group .form-text {
  display: block;
  margin-bottom: 0.5rem;
  padding-right: 3.25rem;
}
.form-check.form-check-group input.semi-checked:not(:checked) + label::before {
  right: 4px;
  left: auto;
}
.form-check input.semi-checked:not(:checked) + label::before {
  top: 9px;
  left: 4px;
  width: 12px;
  height: 2px;
  border-width: 0;
  border-style: none;
  border-color: transparent;
  opacity: 1;
  background: var(--bs-color-background-inverse);
  transform: none;
  backface-visibility: hidden;
}
.form-check input.semi-checked:not(:checked) + label::after {
  z-index: 0;
  border-color: var(--bs-form-checked-color);
  background-color: var(--bs-form-checked-color);
}

.form-check-inline {
  display: inline-block;
}
.form-check-inline:not(:last-child) {
  margin-right: var(--bs-spacing-m);
}

@media (prefers-reduced-motion: reduce) {
  fieldset legend,
  .form-group label,
  textarea,
  .form-check [type=checkbox],
  .form-check [type=radio],
  .form-check [type=checkbox] + label::after,
  .form-check [type=checkbox] + label::before,
  .form-check [type=radio] + label::after,
  .form-check [type=radio] + label::before,
  .toggles label input[type=checkbox] + .lever::before,
  .toggles label input[type=checkbox] + .lever::after {
    transition: none !important;
  }
}
.form-check [type=checkbox]:focus + label,
.form-check [type=radio]:focus + label {
  border-color: hsl(0, 0%, 0%) !important;
  box-shadow: 0 0 0 2px var(--bs-color-border-inverse), 0 0 0 5px var(--bs-color-outline-focus) !important;
  outline: 3px solid transparent !important;
  outline-offset: 3px !important;
}

.form-check [type=checkbox]:focus[data-focus-mouse=true] + label,
.form-check [type=radio]:focus[data-focus-mouse=true] + label {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

.form-control-plaintext {
  border: 0;
  --bs-form-control-border-color: transparent;
  --bs-form-control-border-radius: 0;
  --bs-form-control-background-color: transparent;
  --bs-form-control-spacing: 0;
}
.form-control-plaintext:focus {
  outline: 0;
  box-shadow: none !important;
}
.form-control-plaintext + label {
  cursor: text;
}

.form-control {
  background-repeat: no-repeat;
  background-position: center right;
  background-size: 45px 30%;
}
.form-control:disabled {
  cursor: not-allowed;
  background: var(--bs-color-background-disabled);
  border: 0;
  color: var(--bs-color-text-disabled);
}
.was-validated .form-control:valid, .form-control.is-valid {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23008055' viewBox='0 0 192 512'%3E%3Cpath d='M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z'/%3E%3C/svg%3E");
}
.was-validated .form-control:invalid, .form-control.is-invalid {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23cc334d' viewBox='0 0 384 512'%3E%3Cpath d='M231.6 256l130.1-130.1c4.7-4.7 4.7-12.3 0-17l-22.6-22.6c-4.7-4.7-12.3-4.7-17 0L192 216.4 61.9 86.3c-4.7-4.7-12.3-4.7-17 0l-22.6 22.6c-4.7 4.7-4.7 12.3 0 17L152.4 256 22.3 386.1c-4.7 4.7-4.7 12.3 0 17l22.6 22.6c4.7 4.7 12.3 4.7 17 0L192 295.6l130.1 130.1c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17L231.6 256z'/%3E%3C/svg%3E");
  border-color: var(--bs-color-border-danger);
}
.form-control.warning {
  background-image: url("data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%0A%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2%2012C2%206.47715%206.47715%202%2012%202C14.6522%202%2017.1957%203.05357%2019.0711%204.92893C20.9464%206.8043%2022%209.34784%2022%2012C22%2017.5228%2017.5228%2022%2012%2022C6.47715%2022%202%2017.5228%202%2012ZM3%2012C3%2016.9706%207.02944%2021%2012%2021C16.9706%2021%2021%2016.9706%2021%2012C21%207.02944%2016.9706%203%2012%203C7.02944%203%203%207.02944%203%2012ZM11.5%2014.2V5.7H12.7V14.2H11.5ZM12.6%2018.3V16.5H11.4V18.3H12.6Z%22/%3E%0A%3C/svg%3E") no-repeat;
  border-color: var(--bs-color-border-warning);
}
.form-control.is-valid ~ .warning-feedback {
  display: block;
}

.form-control-sm {
  --bs-form-control-spacing: var(--bs-spacing-xxs) var(--bs-spacing-3xs);
  --bs-form-control-font-size: var(--bs-label-font-size);
}
.form-control-sm::file-selector-button {
  padding: 0.25rem 0.5rem;
  margin: -0.25rem -0.5rem;
  margin-inline-end: 0.5rem;
}

.form-control-lg {
  --bs-form-control-font-size: var(--bs-lead-font-size);
}
.form-control-lg::file-selector-button {
  padding: 0.5rem 1rem;
  margin: -0.5rem -1rem;
  margin-inline-end: 1rem;
}

textarea.form-control {
  min-height: 2.5rem;
  border: 1px solid hsl(210, 17%, 44%);
}
textarea.form-control-sm {
  min-height: calc(1.5em + 0.5rem);
}
textarea.form-control-lg {
  min-height: calc(1.5em + 1rem);
}

.form-control-color {
  width: 3rem;
  height: 2.5rem;
  padding: 0.375rem;
}
.form-control-color:not(:disabled):not([readonly]) {
  cursor: pointer;
}
.form-control-color::-moz-color-swatch {
  border: 0 !important;
  border-radius: 0;
}
.form-control-color::-webkit-color-swatch {
  border-radius: 0;
}
.form-control-color.form-control-sm {
  height: calc(1.5em + 0.5rem);
}
.form-control-color.form-control-lg {
  height: calc(1.5em + 1rem);
}

.form-check-reverse {
  padding-right: 1.5em;
  padding-left: 0;
  text-align: right;
}
.form-check-reverse .form-check-input {
  float: right;
  margin-right: -1.5em;
  margin-left: 0;
}

.form-check-input {
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: hsl(0, 0%, 100%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.25);
  appearance: none;
  print-color-adjust: exact;
}
.form-check-input[type=checkbox] {
  border-radius: 0.25em;
}
.form-check-input[type=radio] {
  border-radius: 50%;
}
.form-check-input:active {
  filter: brightness(90%);
}
.form-check-input:focus {
  border-color: hsl(210, 17%, 44%);
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(0, 102, 204, 0.25);
}
.form-check-input:checked {
  background-color: hsl(210, 100%, 40%);
  border-color: hsl(210, 100%, 40%);
}
.form-check-input:checked[type=checkbox] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='hsl%280, 0%, 100%%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
}
.form-check-input:checked[type=radio] {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='hsl%280, 0%, 100%%29'/%3e%3c/svg%3e");
}
.form-check-input[type=checkbox]:indeterminate {
  background-color: hsl(210, 100%, 40%);
  border-color: hsl(210, 100%, 40%);
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='hsl%280, 0%, 100%%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
}
.form-check-input:disabled {
  pointer-events: none;
  filter: none;
  opacity: 0.5;
}
.form-check-input[disabled] ~ .form-check-label, .form-check-input:disabled ~ .form-check-label {
  cursor: default;
  opacity: 0.5;
}

.form-switch {
  padding-left: 2.5em;
}
.form-switch .form-check-input {
  width: 2em;
  margin-left: -2.5em;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
  background-position: left center;
  border-radius: 2em;
  transition: background-position 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-switch .form-check-input {
    transition: none;
  }
}
.form-switch .form-check-input:focus {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='hsl%28210, 17%, 44%%29'/%3e%3c/svg%3e");
}
.form-switch .form-check-input:checked {
  background-position: right center;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='hsl%280, 0%, 100%%29'/%3e%3c/svg%3e");
}
.form-switch.form-check-reverse {
  padding-right: 2.5em;
  padding-left: 0;
}
.form-switch.form-check-reverse .form-check-input {
  margin-right: -2.5em;
  margin-left: 0;
}

.form-check-inline {
  display: inline-block;
  margin-right: 1rem;
}

.btn-check {
  position: absolute;
  clip: rect(0, 0, 0, 0);
  pointer-events: none;
}
.btn-check[disabled] + .btn, .btn-check:disabled + .btn {
  pointer-events: none;
  filter: none;
  opacity: 0.65;
}

.form-feedback {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.75rem;
}
.form-feedback.just-validate-error-label {
  color: var(--bs-color-text-danger);
}

.input-group-text:has(~ [data-focus-mouse=true]:not(.btn)),
[data-focus-mouse=true]:not(.btn) ~ .input-group-text,
button:has(~ [data-focus-mouse=true]:not(.btn)),
[data-focus-mouse=true]:not(.btn) + button {
  border-color: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}

.input-group-text:has(~ .is-invalid),
.is-invalid ~ .input-group-text,
button:has(~ .is-invalid),
.is-invalid + button {
  border-color: var(--bs-color-border-danger) !important;
}

.sr-only-justvalidate-bi {
  display: none;
}

.just-validate-success-field {
  border-color: var(--bs-color-border-success) !important;
  padding-right: calc(1.5em + 0.75rem) !important;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23008055' viewBox='0 0 192 512'%3E%3Cpath d='M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z'/%3E%3C/svg%3E");
}

.input-group-text:has(~ .just-validate-success-field),
.just-validate-success-field ~ .input-group-text,
button:has(~ .just-validate-success-field),
.just-validate-success-field + button {
  border-color: var(--bs-color-border-success);
}

.just-validate-success-field + .input-group-text.align-buttons,
.is-invalid + .input-group-text.align-buttons {
  right: 30px;
}

.is-invalid + .input-group-text.align-buttons {
  bottom: 22px;
}

.autocomplete__wrapper .form-feedback.just-validate-error-label {
  position: absolute;
}

textarea.form-control {
  background-position: top 0.3em right 0.3em !important;
  background-size: 37px 30% !important;
}
textarea.is-invalid {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
textarea.just-validate-success-field {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

input[type=checkbox].is-invalid,
input[type=radio].is-invalid {
  --bs-form-checkbox-border-color: var(--bs-color-border-danger);
}

select.is-invalid {
  border: 1px solid var(--bs-color-border-danger);
}
select.just-validate-success-field {
  border: 1px solid var(--bs-color-border-success);
}

::slotted([slot=label]) {
  display: block;
  padding: 0 var(--bs-form-input-spacing-x);
  margin-bottom: var(--bs-spacing-s);
  background-color: rgba(0, 0, 0, 0);
  color: var(--bs-form-control-text-color);
  font-size: var(--bs-label-sm);
  font-weight: var(--bs-font-weight-solid);
}

.it-radio-group {
  margin-bottom: var(--bs-spacing-xs);
}

.it-radio-group-inline {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--bs-spacing-s);
}

.just-validate-success-field ::slotted(it-radio) {
  --it-radio-label-color: var(--bs-color-text-success);
}

.just-validate-success-field {
  padding: 0 !important;
  border: none !important;
  background-image: none !important;
}`;let m=class extends u{constructor(){super(...arguments),this.name="",this.value="",this.disabled=!1,this.required=!1,this.grouped=!1,this.inline=!1,this._validationTriggered=!1,this.rovingTabindex=new Be(this,{getItems:()=>this._radios,onSelect:(e,o)=>this.selectRadio(e,o),direction:"both",selectOnFocus:!0}),this._formController=new _e(this,{value:()=>this.value,setValue:(e,o)=>{const t=e;t.value=o}}),this._handleSlotChange=()=>{this._syncValueFromRadios(),this._updateRadiosState(),this._syncGroupStateToRadios()},this._handleLabelSlotChange=()=>{var o;const e=this.generateId("it-radio-group-label");(o=this._label[0])==null||o.setAttribute("id",e),this.setAttribute("aria-labelledby",e)}}get validity(){return{valid:!this.required||!!this.value,valueMissing:this.required&&!this.value,typeMismatch:!1,patternMismatch:!1,tooLong:!1,tooShort:!1,rangeUnderflow:!1,rangeOverflow:!1,stepMismatch:!1,badInput:!1,customError:!1}}checkValidity(){return!(this.required&&!this.value)}reportValidity(){this._validationTriggered=!0;const e=this.checkValidity();return this.handleValidationMessages(),this._updateInvalidState(),e}setCustomValidity(e){e&&e.length>0&&(this._validationTriggered=!0),this.validationMessage=e,this.formControlController.updateValidity(),this._updateInvalidState()}handleValidationMessages(){const e=this.validity;this.customValidation||(e.valueMissing?this.setCustomValidity(this.$t("validityRequired")):this.setCustomValidity(""))}_updateInvalidState(){var o;if(!this._validationTriggered)return;const e=this.checkValidity()===!1||!!this.validationMessage;e?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid"),(o=this._radios)==null||o.forEach(t=>{e?t.setAttribute("aria-invalid","true"):t.removeAttribute("aria-invalid")}),this._updateValidationMessage()}_updateValidationMessage(){var r,a;const e=this.validationMessage,o=`invalid-feedback-${this._id}`;let t=this.querySelector('[slot="validation-message"]');if(e&&e.length>0){t||(t=document.createElement("div"),t.setAttribute("slot","validation-message"),this.appendChild(t)),t.id=o,t.className="invalid-feedback form-feedback form-text form-feedback just-validate-error-label",t.setAttribute("role","alert"),t.removeAttribute("hidden");const n=((a=(r=this._label)==null?void 0:r[0])==null?void 0:a.textContent)||"";t.innerHTML=`<span class="visually-hidden">${n}: </span>${e}`;const p=this._ariaAttributes["aria-describedby"]||"",f=p?`${p} ${o}`:o;this.setAttribute("aria-describedby",f)}else{t&&t.remove();const n=this._ariaAttributes["aria-describedby"]||"";n?this.setAttribute("aria-describedby",n):this.removeAttribute("aria-describedby")}}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this._handleReady(),this.setAttribute("role","radiogroup")}firstUpdated(){const e=this.querySelector("it-radio[checked]");e&&(this.value=e.value),this.updateRadios()}async updateRadios(){this.hasUpdated||await this.updateComplete,this.querySelectorAll("it-radio").forEach(o=>{o.checked=o.value===this.value})}disconnectedCallback(){var e;(e=super.disconnectedCallback)==null||e.call(this)}_syncValueFromRadios(){if(!this._radios)return;const e=this._radios.find(o=>o.checked);e&&(this.value=e.value)}selectRadio(e,o){e.disabled||this.disabled||(this.value=e.value,this._radios.forEach(t=>{t!==e?t.checked=!1:t.checked=!0}),this._validationTriggered&&(this.customValidation?this._updateInvalidState():(this.handleValidationMessages(),this._updateInvalidState())),o.type==="click"||o.type==="pointerdown"?this._handleClick(o):this._handleChange(o))}handleRadioKeyDown(e,o){this.rovingTabindex.handleKeydown(e,o)?this._handleFocus(o):this._handleBlur(o)}_updateRadiosState(){if(!this._radios||this._radios.length===0)return;this._radios.forEach(t=>{t.checked=t.value===this.value,this.disabled&&(t.disabled=!0)});let e=0;const o=this._radios.findIndex(t=>t.checked&&!t.disabled);if(o>=0)e=o;else{const t=this._radios.findIndex(r=>!r.disabled);t>=0&&(e=t)}this.rovingTabindex.updateTabindices(e)}_syncGroupStateToRadios(){if(!this._radios||this._radios.length===0)return;const e={name:this.name,grouped:this.grouped,inline:this.inline,required:this.required};this._radios.forEach(o=>{o.syncFromGroup(e)})}updated(e){var r;super.updated(e),e.has("value")&&(this._updateRadiosState(),this.dispatchEvent(new Event("change",{bubbles:!0})),!this.customValidation&&this._validationTriggered&&(this.handleValidationMessages(),this._updateInvalidState())),e.has("validationMessage")&&this._updateInvalidState();const o=["grouped","inline","name","required","disabled"];Array.from(e.keys()).some(a=>o.includes(String(a)))&&((r=this._radios)!=null&&r.length)&&this._syncGroupStateToRadios()}render(){const e=this.validationMessage,o=(e==null?void 0:e.length)>0||!this.customValidation&&(this==null?void 0:this.checkValidity())===!1,t=this.composeClass("it-radio-group","it-form__control",this.inline&&!this.grouped?"it-radio-group-inline":"",this.grouped&&!this.inline?"it-radio-group-stacked":"",o?"is-invalid":"",!o&&this._touched?"just-validate-success-field":"");return b`<slot name="label" @slotchange=${this._handleLabelSlotChange}></slot>
      <div class=${t}>
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
      <slot name="validation-message"></slot>`}};m.styles=Ne;m.formAssociated=!0;s([d({type:String}),l("design:type",Object)],m.prototype,"name",void 0);s([d({type:String,reflect:!0}),l("design:type",Object)],m.prototype,"value",void 0);s([d({type:Boolean,reflect:!0}),l("design:type",Object)],m.prototype,"disabled",void 0);s([d({type:Boolean,reflect:!0}),l("design:type",Object)],m.prototype,"required",void 0);s([d({type:Boolean,reflect:!0}),l("design:type",Object)],m.prototype,"grouped",void 0);s([d({type:Boolean,reflect:!0}),l("design:type",Object)],m.prototype,"inline",void 0);s([N(),l("design:type",Array)],m.prototype,"_radios",void 0);s([N({slot:"label"}),l("design:type",Array)],m.prototype,"_label",void 0);s([y(),l("design:type",Object)],m.prototype,"_validationTriggered",void 0);m=s([ze("it-radio-group")],m);const c=i=>b`<it-radio
    id="${v(i.id||void 0)}"
    value="${v(i.value||void 0)}"
    ?checked="${i.checked}"
    ?disabled="${i.disabled}"
    support-text="${v(i.supportText||void 0)}"
    form="${v(i.form||void 0)}"
    ?custom-validation="${i.customValidation}"
    validity-message="${v(i.validityMessage||void 0)}"
  >
    <span slot="label">${i.label||""}</span>
  </it-radio>`,x={title:"Componenti/Form/Radio",tags:["autodocs"],component:"it-radio-group",args:{id:"",name:"gruppo1",disabled:!1,supportText:"",grouped:!1,inline:!1,form:"",customValidation:!1,validityMessage:"",required:!1},argTypes:{id:{control:"text",description:"ID del campo"},name:{control:"text",description:"Nome del campo. I radio dello stesso gruppo devono avere lo stesso name."},grouped:{control:"boolean",type:"boolean",description:"Se il radio-group deve avere i suoi elementi raggruppati visivamente",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",type:"boolean",description:"Se il gruppo di radio è disabilitato. Per l'omonimo attributo del componente it-radio, vedi la sezione dedicata",table:{defaultValue:{summary:"false"}}},inline:{control:"boolean",type:"boolean",description:"Se il radio-group deve avere i suoi elementi visualizzati in linea",table:{defaultValue:{summary:"false"}}},supportText:{name:"support-text",control:"text",description:"Testo di supporto per un singolo componente it-radio"},form:{control:"text",description:"ID html del form a cui è associato il componente it-radio-group, se non si trova all'interno di una form "},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del radio group è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",description:"Messaggio da mostrare quando il radio group è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},required:{control:"boolean",type:"boolean",description:"Se il radio group è obbligatorio",table:{defaultValue:{summary:"false"}}}},parameters:{docs:{description:{component:'\n<Description>Radio button accessibili e personalizzabili.</Description>\n\nIl componente `<it-radio-group>` permette di raggruppare una serie di `<it-radio>`, gestendo la selezione di un solo elemento alla volta.\n\nOgni `<it-radio>` all\'interno del gruppo deve avere un valore unico nell\'attributo `value`.\n\n<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>\n<p>\nIl componente implementa completamente le specifiche ARIA per i gruppi di radio button: `<it-radio-group>` gestisce automaticamente gli attributi `role="radiogroup"` e `aria-labelledby`, mentre ogni `<it-radio>` riceve gli attributi `role="radio"`, `aria-checked` e `aria-disabled` in base al proprio stato.</p>\n<p>\nA causa delle limitazioni architetturali dei Web Components e del Shadow DOM, non è possibile utilizzare il meccanismo nativo HTML basato su `<fieldset>` e `<legend>`. Questo approccio, pur essendo standard, presenta notevoli problematiche di compatibilità cross-browser con gli screen reader: test approfonditi hanno dimostrato comportamenti inconsistenti tra diverse combinazioni di browser, sistemi operativi e tecnologie assistive. In alcuni casi la `<legend>` non viene annunciata, in altri il gruppo non viene riconosciuto come tale, mentre in altri ancora mancano informazioni sulla posizione delle opzioni all\'interno del gruppo. Per superare queste limitazioni e garantire un\'esperienza uniforme e accessibile su tutte le piattaforme, il componente richiede che la label del gruppo venga fornita tramite lo slot `label`, assicurando così la corretta associazione semantica anche all\'interno dello Shadow DOM.</p>\n<p>L\'implementazione si conforma al pattern "Radio Group" definito nelle [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio/), adottando la gestione della tastiera e degli stati prevista dalle linee guida di accessibilità. Questo approccio garantisce che le tecnologie assistive, in particolare gli screen reader, comunichino correttamente la posizione di ogni opzione nel gruppo (es. "1 di 3", "2 di 3", "3 di 3"), migliorando significativamente l\'esperienza utente per le persone con disabilità.\n</p></div></div>\n'}}}},_={...x,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},decorators:[i=>b` <div style="min-width:450px">${i()}</div>`],render:i=>b`

      <it-radio-group
        name="${i.name}"
        ?inline="${i.inline}"
        ?grouped="${i.grouped}"
        .form="${i.form}"
        ?required="${i.required}"
        ?custom-validation="${i.customValidation}"
        validity-message="${v(i.validityMessage||void 0)}"
      >
        <span slot="label">Esempio interattivo</span>
        ${c({...i,id:"radio1",label:"Radio di esempio 1",value:"opzione1"})}
        ${c({...i,id:"radio2",label:"Radio di esempio 2",value:"opzione2"})}
        ${c({...i,id:"radio3",label:"Radio di esempio 3",value:"opzione3"})}
      </it-radio-group>
    </div>
  `},A={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:`
Per la personalizzazione degli stili del componente \`<it-radio>\` si può usare il selettore \`::part\` con i seguenti valori:

| Part | Descrizione |
|------|-------------|
| \`input\` | Il contenitore dell'input nascosto |
| \`button\` | Il cerchio del radio button visibile |
| \`input-wrapper\` | Il wrapper principale che contiene il radio control e il testo di supporto |
| \`radio-control\` | Il contenitore che racchiude il button e la label |
| \`label\` | La label del radio button |

[Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).

Esempio di personalizzazione:

\`\`\`css
it-radio::part(button) {
  border-color: #0066cc;
}

it-radio::part(label) {
  font-weight: bold;
  color: #333;
}
\`\`\`
`}}},render:()=>b`<div class="hide-preview"></div>`},R={...x,name:"Utilizzo",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nIl componente `<it-radio>` deve essere sempre utilizzato all'interno di un `<it-radio-group>` e richiede obbligatoriamente:\n\n- Un **attributo `value`** univoco per identificare l'opzione\n- Una **label definita tramite slot** `<span slot=\"label\">Testo della label</span>`\n\n#### Proprietà principali\n\n| Proprietà | Tipo | Descrizione |\n|-----------|------|-------------|\n| `value` | `string` | Valore univoco del radio button (obbligatorio) |\n| `disabled` | `boolean` | Se `true`, disabilita il singolo radio button |\n| `support-text` | `string` | Testo di supporto visualizzato sotto la label (obbligatorio) |\n"}}},render:()=>b`<div class="hide-preview"></div>`},S={...x,name:"Definizione della Label",parameters:{docs:{description:{story:"\n\nSia `<it-radio-group>` che `<it-radio>` espongono uno slot `label` per definire le rispettive etichette.\n\nLa label del gruppo `<it-radio-group>` viene definita tramite lo slot `label` dell'elemento `<it-radio-group>` e identifica l'intero gruppo di radio button. È possibile utilizzare HTML all'interno dello slot per creare label formattate.\n\nOgni `<it-radio>` richiede obbligatoriamente una label definita tramite il proprio slot `label`. La label identifica la singola opzione all'interno del gruppo. È possibile utilizzare anche HTML all'interno dello slot per creare label più complesse con formattazione o altri elementi.\n"}}},render:i=>b`
    <it-radio-group name="gruppo-label">
      <span slot="label">Gruppo con label formattate</span>
      ${c({...i,id:"radio-label1",label:"Label semplice",value:"opzione1"})}
      <it-radio id="radio-label2" value="opzione2">
        <span slot="label"><strong>Label</strong> con <em>formattazione</em></span>
      </it-radio>
      <it-radio id="radio-label3" value="opzione3">
        <span slot="label">Label semplice</span>
      </it-radio>
    </it-radio-group>
  `},M={...x,name:"Testo di supporto",parameters:{docs:{description:{story:"In caso di necessità, è possibile utilizzare un contenuto testuale sotto il radio button tramite l'attributo `support-text` del componente `<it-radio>`."}}},render:i=>b`
    <it-radio-group name="gruppo-support">
      <span slot="label">Esempio con testo di supporto</span>
      ${c({...i,id:"radio-support1",label:"Radio con testo di supporto",value:"opzione1",supportText:"Questo è un testo di supporto per il radio button"})}
      ${c({...i,id:"radio-support2",label:"Altro radio",value:"opzione2"})}
    </it-radio-group>
  `},L={...x,parameters:{docs:{description:{story:"Per allineare orizzontalmente i radio button basterà aggiungere l'attributo `inline` a `<it-radio-group>`."}}},render:i=>b`
    <it-radio-group name="gruppo-inline" inline>
      <span slot="label">Esempio inline</span>
      ${c({...i,id:"radio-inline1",label:"Radio inline 1",value:"opzione1",checked:!0})}
      ${c({...i,id:"radio-inline2",label:"Radio inline 2",value:"opzione2"})}
      ${c({...i,id:"radio-inline3",label:"Radio inline 3",value:"opzione3"})}
    </it-radio-group>
  `},T={...x,name:"Radio disabilitati",parameters:{docs:{description:{story:`

#### Radio singolo disabilitato

Aggiungi l'attributo \`disabled\` ad un singolo \`<it-radio>\` per disabilitare quell'opzione.

#### Gruppo intero disabilitato

Se invece intendi disabilitare l'intero gruppo, aggiungi l'attributo \`disabled\` a \`<it-radio-group>\`. In questo modo tutti i radio al suo interno risulteranno disabilitati automaticamente.
`}}},render:i=>b`
    <div class="row">
      <div class="col-12 col-md-6">
        <it-radio-group name="gruppo-alcuni-disabled" value="opzione1">
          <span slot="label">Esempio con alcuni disabilitati</span>
          ${c({...i,id:"radio-disabled1",label:"Radio selezionato e disabilitato",value:"opzione1",disabled:!0})}
          ${c({...i,id:"radio-disabled2",label:"Radio disabilitato",value:"opzione2",disabled:!0})}
          ${c({...i,id:"radio-disabled3",label:"Radio abilitato",value:"opzione3"})}
        </it-radio-group>
        </div>
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-tutti-disabled" value="opzione2" disabled>
            <span slot="label">Esempio con tutti disabilitati</span>
            ${c({...i,id:"radio-disabled4",label:"Radio selezionato e disabilitato",value:"opzione1"})}
            ${c({...i,id:"radio-disabled5",label:"Radio disabilitato",value:"opzione2"})}
            ${c({...i,id:"radio-disabled6",label:"Radio abilitato",value:"opzione3"})}
          </it-radio-group>
        </div>
      </div>
    </div>
  `},q={...x,name:"Raggruppati visivamente",parameters:{docs:{description:{story:"Per raggruppare visivamente i radio button occorrerà aggiungere l'attributo `group` a `<it-radio-group>`. L'elemento grafico di selezione verrà allineato alla destra del contenuto testuale."}}},render:i=>b`
    <div>
      <div class="row">
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-visual" grouped>
            <span slot="label">Esempio grouped senza testo di supporto</span>
            ${c({...i,id:"radio-group1",label:"Opzione 1",value:"opzione1",checked:!0})}
            ${c({...i,id:"radio-group2",label:"Opzione 2",value:"opzione2"})}
            ${c({...i,id:"radio-group3",label:"Opzione 3",value:"opzione3"})}
          </it-radio-group>
        </div>
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-visual2" grouped>
            <span slot="label">Esempio grouped con testo di supporto</span>
            ${c({...i,id:"radio-group4",label:"Opzione 1",supportText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero",value:"opzione1",checked:!0})}
            ${c({...i,id:"radio-group5",label:"Opzione 2",supportText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero",value:"opzione2"})}
            ${c({...i,id:"radio-group6",label:"Opzione 3",supportText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero",value:"opzione3"})}
          </it-radio-group>
        </div>
      </div>
    </div>
  `},D={name:"Validazione e gestione degli errori",parameters:{docs:{description:{story:`
Se non è stata impostata la validazione custom tramite l'attributo \`custom-validation\`, e sono stati impostati attributi come \`required\`, viene effettuata una validazione interna utilizzando la validazione nativa del browser.
Verranno mostrati i messaggi di errore nativi, e i componenti \`<it-radio-group>\` e \`<it-radio>\` riceveranno l'attributo \`aria-invalid="true"\` quando non validi.

\`\`\`html
<form>
  <it-radio-group name="scelta" required>
    <span slot="label">Seleziona un'opzione (obbligatorio)</span>
    <it-radio value="si">
      <span slot="label">Sì, accetto</span>
    </it-radio>
    <it-radio value="no">
      <span slot="label">No, non accetto</span>
    </it-radio>
  </it-radio-group>
  <button type="submit">Invia</button>
</form>
\`\`\`

<br/>
### Personalizzazione dei messaggi di errore

E' possibile personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione):
<ul>
  <li>\`validityRequired\`: messaggio che viene mostrato quando il radio group è obbligatorio e nessuna opzione è stata selezionata</li>
</ul>

Non esistono altre possibili validazioni native per questo tipo di input. Per validazioni custom dovrai fornire i tuoi messaggi di errore.


`}}},render:()=>b`
    <form id="demo-form">
      <it-radio-group name="scelta" required>
        <span slot="label">Esempio con validazione</span>
        <it-radio value="si">
          <span slot="label">Sì, accetto</span>
        </it-radio>
        <it-radio value="no">
          <span slot="label">No, non accetto</span>
        </it-radio>
        <it-radio value="forse">
          <span slot="label">Forse</span>
        </it-radio>
      </it-radio-group>
      <button type="submit" class="btn btn-primary mt-3">Invia</button>
      <p class="form-text mt-2">Prova a inviare il form senza selezionare nulla per vedere la validazione.</p>
    </form>
  `},j={...Re(""),tags:["!dev"]};var G,K,W;_.parameters={..._.parameters,docs:{...(G=_.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  decorators: [Story => html\` <div style="min-width:450px">\${Story()}</div>\`],
  render: params => html\`

      <it-radio-group
        name="\${params.name}"
        ?inline="\${params.inline}"
        ?grouped="\${params.grouped}"
        .form="\${params.form}"
        ?required="\${params.required}"
        ?custom-validation="\${params.customValidation}"
        validity-message="\${ifDefined(params.validityMessage || undefined)}"
      >
        <span slot="label">Esempio interattivo</span>
        \${renderComponent({
    ...params,
    id: 'radio1',
    label: 'Radio di esempio 1',
    value: 'opzione1'
  })}
        \${renderComponent({
    ...params,
    id: 'radio2',
    label: 'Radio di esempio 2',
    value: 'opzione2'
  })}
        \${renderComponent({
    ...params,
    id: 'radio3',
    label: 'Radio di esempio 3',
    value: 'opzione3'
  })}
      </it-radio-group>
    </div>
  \`
}`,...(W=(K=_.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var Z,Q,J;A.parameters={...A.parameters,docs:{...(Z=A.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: {
        hidden: true,
        sourceState: 'none'
      },
      description: {
        story: \`
Per la personalizzazione degli stili del componente \\\`<it-radio>\\\` si può usare il selettore \\\`::part\\\` con i seguenti valori:

| Part | Descrizione |
|------|-------------|
| \\\`input\\\` | Il contenitore dell'input nascosto |
| \\\`button\\\` | Il cerchio del radio button visibile |
| \\\`input-wrapper\\\` | Il wrapper principale che contiene il radio control e il testo di supporto |
| \\\`radio-control\\\` | Il contenitore che racchiude il button e la label |
| \\\`label\\\` | La label del radio button |

[Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).

Esempio di personalizzazione:

\\\`\\\`\\\`css
it-radio::part(button) {
  border-color: #0066cc;
}

it-radio::part(label) {
  font-weight: bold;
  color: #333;
}
\\\`\\\`\\\`
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...(J=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var X,Y,ee;R.parameters={...R.parameters,docs:{...(X=R.parameters)==null?void 0:X.docs,source:{originalSource:`{
  ...meta,
  name: 'Utilizzo',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: {
        hidden: true,
        sourceState: 'none'
      },
      description: {
        story: \`
Il componente \\\`<it-radio>\\\` deve essere sempre utilizzato all'interno di un \\\`<it-radio-group>\\\` e richiede obbligatoriamente:

- Un **attributo \\\`value\\\`** univoco per identificare l'opzione
- Una **label definita tramite slot** \\\`<span slot="label">Testo della label</span>\\\`

#### Proprietà principali

| Proprietà | Tipo | Descrizione |
|-----------|------|-------------|
| \\\`value\\\` | \\\`string\\\` | Valore univoco del radio button (obbligatorio) |
| \\\`disabled\\\` | \\\`boolean\\\` | Se \\\`true\\\`, disabilita il singolo radio button |
| \\\`support-text\\\` | \\\`string\\\` | Testo di supporto visualizzato sotto la label (obbligatorio) |
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...(ee=(Y=R.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var oe,te,ie;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  ...meta,
  name: 'Definizione della Label',
  parameters: {
    docs: {
      description: {
        story: \`

Sia \\\`<it-radio-group>\\\` che \\\`<it-radio>\\\` espongono uno slot \\\`label\\\` per definire le rispettive etichette.

La label del gruppo \\\`<it-radio-group>\\\` viene definita tramite lo slot \\\`label\\\` dell'elemento \\\`<it-radio-group>\\\` e identifica l'intero gruppo di radio button. È possibile utilizzare HTML all'interno dello slot per creare label formattate.

Ogni \\\`<it-radio>\\\` richiede obbligatoriamente una label definita tramite il proprio slot \\\`label\\\`. La label identifica la singola opzione all'interno del gruppo. È possibile utilizzare anche HTML all'interno dello slot per creare label più complesse con formattazione o altri elementi.
\`
      }
    }
  },
  render: params => html\`
    <it-radio-group name="gruppo-label">
      <span slot="label">Gruppo con label formattate</span>
      \${renderComponent({
    ...params,
    id: 'radio-label1',
    label: 'Label semplice',
    value: 'opzione1'
  })}
      <it-radio id="radio-label2" value="opzione2">
        <span slot="label"><strong>Label</strong> con <em>formattazione</em></span>
      </it-radio>
      <it-radio id="radio-label3" value="opzione3">
        <span slot="label">Label semplice</span>
      </it-radio>
    </it-radio-group>
  \`
}`,...(ie=(te=S.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var re,ae,ne;M.parameters={...M.parameters,docs:{...(re=M.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...meta,
  name: 'Testo di supporto',
  parameters: {
    docs: {
      description: {
        story: \`In caso di necessità, è possibile utilizzare un contenuto testuale sotto il radio button tramite l'attributo \\\`support-text\\\` del componente \\\`<it-radio>\\\`.\`
      }
    }
  },
  render: params => html\`
    <it-radio-group name="gruppo-support">
      <span slot="label">Esempio con testo di supporto</span>
      \${renderComponent({
    ...params,
    id: 'radio-support1',
    label: 'Radio con testo di supporto',
    value: 'opzione1',
    supportText: 'Questo è un testo di supporto per il radio button'
  })}
      \${renderComponent({
    ...params,
    id: 'radio-support2',
    label: 'Altro radio',
    value: 'opzione2'
  })}
    </it-radio-group>
  \`
}`,...(ne=(ae=M.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,le,de;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`Per allineare orizzontalmente i radio button basterà aggiungere l'attributo \\\`inline\\\` a \\\`<it-radio-group>\\\`.\`
      }
    }
  },
  render: params => html\`
    <it-radio-group name="gruppo-inline" inline>
      <span slot="label">Esempio inline</span>
      \${renderComponent({
    ...params,
    id: 'radio-inline1',
    label: 'Radio inline 1',
    name: 'gruppo-inline',
    value: 'opzione1',
    checked: true
  })}
      \${renderComponent({
    ...params,
    id: 'radio-inline2',
    label: 'Radio inline 2',
    name: 'gruppo-inline',
    value: 'opzione2'
  })}
      \${renderComponent({
    ...params,
    id: 'radio-inline3',
    label: 'Radio inline 3',
    name: 'gruppo-inline',
    value: 'opzione3'
  })}
    </it-radio-group>
  \`
}`,...(de=(le=L.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ce,pe,ue;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...meta,
  name: 'Radio disabilitati',
  parameters: {
    docs: {
      description: {
        story: \`

#### Radio singolo disabilitato

Aggiungi l'attributo \\\`disabled\\\` ad un singolo \\\`<it-radio>\\\` per disabilitare quell'opzione.

#### Gruppo intero disabilitato

Se invece intendi disabilitare l'intero gruppo, aggiungi l'attributo \\\`disabled\\\` a \\\`<it-radio-group>\\\`. In questo modo tutti i radio al suo interno risulteranno disabilitati automaticamente.
\`
      }
    }
  },
  render: params => html\`
    <div class="row">
      <div class="col-12 col-md-6">
        <it-radio-group name="gruppo-alcuni-disabled" value="opzione1">
          <span slot="label">Esempio con alcuni disabilitati</span>
          \${renderComponent({
    ...params,
    id: 'radio-disabled1',
    label: 'Radio selezionato e disabilitato',
    value: 'opzione1',
    disabled: true
  })}
          \${renderComponent({
    ...params,
    id: 'radio-disabled2',
    label: 'Radio disabilitato',
    name: 'gruppo-disabled',
    value: 'opzione2',
    disabled: true
  })}
          \${renderComponent({
    ...params,
    id: 'radio-disabled3',
    label: 'Radio abilitato',
    name: 'gruppo-disabled',
    value: 'opzione3'
  })}
        </it-radio-group>
        </div>
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-tutti-disabled" value="opzione2" disabled>
            <span slot="label">Esempio con tutti disabilitati</span>
            \${renderComponent({
    ...params,
    id: 'radio-disabled4',
    label: 'Radio selezionato e disabilitato',
    value: 'opzione1'
  })}
            \${renderComponent({
    ...params,
    id: 'radio-disabled5',
    label: 'Radio disabilitato',
    value: 'opzione2'
  })}
            \${renderComponent({
    ...params,
    id: 'radio-disabled6',
    label: 'Radio abilitato',
    value: 'opzione3'
  })}
          </it-radio-group>
        </div>
      </div>
    </div>
  \`
}`,...(ue=(pe=T.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var be,me,he;q.parameters={...q.parameters,docs:{...(be=q.parameters)==null?void 0:be.docs,source:{originalSource:`{
  ...meta,
  name: 'Raggruppati visivamente',
  parameters: {
    docs: {
      description: {
        story: \`Per raggruppare visivamente i radio button occorrerà aggiungere l'attributo \\\`group\\\` a \\\`<it-radio-group>\\\`. L'elemento grafico di selezione verrà allineato alla destra del contenuto testuale.\`
      }
    }
  },
  render: params => html\`
    <div>
      <div class="row">
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-visual" grouped>
            <span slot="label">Esempio grouped senza testo di supporto</span>
            \${renderComponent({
    ...params,
    id: 'radio-group1',
    label: 'Opzione 1',
    name: 'gruppo-visual',
    value: 'opzione1',
    checked: true
  })}
            \${renderComponent({
    ...params,
    id: 'radio-group2',
    label: 'Opzione 2',
    name: 'gruppo-visual',
    value: 'opzione2'
  })}
            \${renderComponent({
    ...params,
    id: 'radio-group3',
    label: 'Opzione 3',
    name: 'gruppo-visual',
    value: 'opzione3'
  })}
          </it-radio-group>
        </div>
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-visual2" grouped>
            <span slot="label">Esempio grouped con testo di supporto</span>
            \${renderComponent({
    ...params,
    id: 'radio-group4',
    label: 'Opzione 1',
    supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
    name: 'gruppo-visual2',
    value: 'opzione1',
    checked: true
  })}
            \${renderComponent({
    ...params,
    id: 'radio-group5',
    label: 'Opzione 2',
    supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
    name: 'gruppo-visual2',
    value: 'opzione2'
  })}
            \${renderComponent({
    ...params,
    id: 'radio-group6',
    label: 'Opzione 3',
    supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
    name: 'gruppo-visual2',
    value: 'opzione3'
  })}
          </it-radio-group>
        </div>
      </div>
    </div>
  \`
}`,...(he=(me=q.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,fe,ve;D.parameters={...D.parameters,docs:{...(ge=D.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  name: 'Validazione e gestione degli errori',
  parameters: {
    docs: {
      description: {
        story: \`
Se non è stata impostata la validazione custom tramite l'attributo \\\`custom-validation\\\`, e sono stati impostati attributi come \\\`required\\\`, viene effettuata una validazione interna utilizzando la validazione nativa del browser.
Verranno mostrati i messaggi di errore nativi, e i componenti \\\`<it-radio-group>\\\` e \\\`<it-radio>\\\` riceveranno l'attributo \\\`aria-invalid="true"\\\` quando non validi.

\\\`\\\`\\\`html
<form>
  <it-radio-group name="scelta" required>
    <span slot="label">Seleziona un'opzione (obbligatorio)</span>
    <it-radio value="si">
      <span slot="label">Sì, accetto</span>
    </it-radio>
    <it-radio value="no">
      <span slot="label">No, non accetto</span>
    </it-radio>
  </it-radio-group>
  <button type="submit">Invia</button>
</form>
\\\`\\\`\\\`

<br/>
### Personalizzazione dei messaggi di errore

E' possibile personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione):
<ul>
  <li>\\\`validityRequired\\\`: messaggio che viene mostrato quando il radio group è obbligatorio e nessuna opzione è stata selezionata</li>
</ul>

Non esistono altre possibili validazioni native per questo tipo di input. Per validazioni custom dovrai fornire i tuoi messaggi di errore.


\`
      }
    }
  },
  render: () => html\`
    <form id="demo-form">
      <it-radio-group name="scelta" required>
        <span slot="label">Esempio con validazione</span>
        <it-radio value="si">
          <span slot="label">Sì, accetto</span>
        </it-radio>
        <it-radio value="no">
          <span slot="label">No, non accetto</span>
        </it-radio>
        <it-radio value="forse">
          <span slot="label">Forse</span>
        </it-radio>
      </it-radio-group>
      <button type="submit" class="btn btn-primary mt-3">Invia</button>
      <p class="form-text mt-2">Prova a inviare il form senza selezionare nulla per vedere la validazione.</p>
    </form>
  \`
}`,...(ve=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var ke,ye,xe;j.parameters={...j.parameters,docs:{...(ke=j.parameters)==null?void 0:ke.docs,source:{originalSource:"{\n  ...StoryFormControlMethodAndProps('', `|\\`click()\\`| Triggera l'evento di click sull'input reale | - |`),\n  tags: ['!dev']\n}",...(xe=(ye=j.parameters)==null?void 0:ye.docs)==null?void 0:xe.source}}};const Ye=["EsempioInterattivo","PersonalizzazioneDegliStili","ComeUsareItRadio","DefinizioneDellaLabel","TestoDiSupporto","Inline","Disabilitato","RaggruppatiVisivamente","RadioGroupRequired","MetodiEPropPubblici"];export{R as ComeUsareItRadio,S as DefinizioneDellaLabel,T as Disabilitato,_ as EsempioInterattivo,L as Inline,j as MetodiEPropPubblici,A as PersonalizzazioneDegliStili,D as RadioGroupRequired,q as RaggruppatiVisivamente,M as TestoDiSupporto,Ye as __namedExportsOrder,x as default};
