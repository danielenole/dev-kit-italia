import{i as de,x as u,a as pe}from"./iframe-BiclfI91.js";import{o as h}from"./if-defined-tWK9HKZq.js";import{S as me}from"./form-control-trSpb7tG.js";import{e as ue,i as he}from"./directive-CvdRHFdJ.js";import{r as re,e as be,n as c,t as fe}from"./query-Bd2ew8Gc.js";import{o as ge}from"./query-assigned-elements-DeyBePrH.js";import{n as ve}from"./when-BR7zwNJC.js";import{l as I}from"./live-DG_rsUJd.js";import"./preload-helper-Dp1pzeXC.js";function s(r,e,o,t){var i=arguments.length,n=i<3?e:t,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,e,o,t);else for(var p=r.length-1;p>=0;p--)(a=r[p])&&(n=(i<3?a(n):i>3?a(e,o,n):a(e,o))||n);return i>3&&n&&Object.defineProperty(e,o,n),n}function l(r,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,e)}class ke extends he{update(e,[o]){const t=e.element;for(const[i,n]of Object.entries(o))n!=null?t.setAttribute(i,n):t.removeAttribute(i);return null}render(e){return null}}const xe=ue(ke);function ie(r){var e,o,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var i=r.length;for(e=0;e<i;e++)r[e]&&(o=ie(r[e]))&&(t&&(t+=" "),t+=o)}else for(o in r)r[o]&&(t&&(t+=" "),t+=o);return t}function ye(){for(var r,e,o=0,t="",i=arguments.length;o<i;o++)(r=arguments[o])&&(e=ie(r))&&(t&&(t+=" "),t+=e);return t}const S=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:k}=window;let g,A="ltr",D="en";const ne=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function ae(){ne&&(A=document.documentElement.dir||"ltr",D=document.documentElement.lang||navigator.language),[...S.keys()].forEach(r=>{const e=r;typeof e.requestUpdate=="function"&&e.requestUpdate()})}if(ne){const r=new MutationObserver(ae);A=document.documentElement.dir||"ltr",D=document.documentElement.lang||navigator.language,r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function se(...r){r.forEach(e=>{const o=e.$code.toLowerCase();k.has(o)?k.set(o,{...k.get(o),...e}):k.set(o,e),g||(g=e)}),ae()}window.registerTranslation=se;class we{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){S.add(this.host)}hostDisconnected(){S.delete(this.host)}dir(){return`${this.host.dir||A}`.toLowerCase()}lang(){return`${this.host.lang||D}`.toLowerCase()}getTranslationData(e){var p;const o=new Intl.Locale(e.replace(/_/g,"-")),t=o==null?void 0:o.language.toLowerCase(),i=((p=o==null?void 0:o.region)==null?void 0:p.toLowerCase())??"",n=k.get(`${t}-${i}`),a=k.get(t);return{locale:o,language:t,region:i,primary:n,secondary:a}}exists(e,o){const{primary:t,secondary:i}=this.getTranslationData(o.lang??this.lang()),n={includeFallback:!1,...o};return!!(t&&t[e]||i&&i[e]||n.includeFallback&&g&&g[e])}term(e,...o){const{primary:t,secondary:i}=this.getTranslationData(this.lang());let n;if(t&&t[e])n=t[e];else if(i&&i[e])n=i[e];else if(g&&g[e])n=g[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof n=="function"?n(...o):n}date(e,o){const t=new Date(e);return new Intl.DateTimeFormat(this.lang(),o).format(t)}number(e,o){const t=Number(e);return Number.isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(e,o,t){return new Intl.RelativeTimeFormat(this.lang(),t).format(e,o)}}const Ce=r=>class extends r{constructor(){super(...arguments),this.localize=new we(this)}get $localize(){return this.localize}$t(e){return this.localize.term(e)}$d(e,o){return this.localize.date(e,o)}$n(e,o){return this.localize.number(e,o)}};class ze{constructor(e){this.tag=e}format(e,o){return[`[${this.tag}] ${o}`]}warn(e){console.warn(...this.format("warn",e))}error(e){console.error(...this.format("error",e))}info(e){console.info(...this.format("info",e))}}class $e extends pe{constructor(){super(),this.composeClass=ye,this.logger=new ze(this.tagName.toLowerCase())}get _ariaAttributes(){const e={};for(const o of this.getAttributeNames())o==="it-role"?e.role=this.getAttribute(o):o.startsWith("it-aria-")&&(e[o.replace(/^it-/,"")]=this.getAttribute(o));return e}generateId(e){return`${e}-${Math.random().toString(36).slice(2)}`}addFocus(e){}getActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}get focusElement(){return this}get prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}connectedCallback(){var o;super.connectedCallback();const e=((o=this.id)==null?void 0:o.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(e)}}const Ee=Ce($e),x=new WeakMap,y=new WeakMap,w=new WeakMap,M=new WeakSet,C=new WeakMap;class le{constructor(e,o){this.handleFormData=t=>{const i=this.options.disabled(this.host),n=this.options.name(this.host),a=this.options.value(this.host),p=this.host.tagName.toLowerCase(),f=p==="it-button";if(this.host.isConnected&&!i&&!f&&typeof n=="string"&&n.length>0&&typeof a<"u")switch(p){case"it-radio":this.host.checked&&t.formData.append(n,a);break;case"it-checkbox":this.host.checked&&t.formData.getAll(n).indexOf(a)<0&&t.formData.append(n,a);break;default:Array.isArray(a)?a.forEach(ce=>{t.formData.append(n,ce.toString())}):t.formData.append(n,a.toString())}},this.handleFormSubmit=t=>{var a;const i=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((a=x.get(this.form))==null||a.forEach(p=>{this.setUserInteracted(p,!0)})),this.form&&!this.form.noValidate&&!i&&!n(this.host)&&t.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),C.set(this.host,[])},this.handleInteraction=t=>{const i=C.get(this.host);i.includes(t.type)||i.push(t.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const i of t)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const i of t)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options={form:t=>{const i=t.form;if(i){const a=t.getRootNode().querySelector(`#${i}`);if(a)return a}return t.closest("form")},name:t=>t.name,value:t=>t.value,disabled:t=>t.disabled??!1,reportValidity:t=>typeof t.reportValidity=="function"?t.reportValidity():!0,checkValidity:t=>typeof t.checkValidity=="function"?t.checkValidity():!0,setValue:(t,i)=>{t.value=i},assumeInteractionOn:["it-input"],...o}}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),C.set(this.host,[]),this.options.assumeInteractionOn.forEach(o=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),C.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,x.has(this.form)?x.get(this.form).add(this.host):x.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),y.has(this.form)||(y.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),w.has(this.form)||(w.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=x.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),y.has(this.form)&&(this.form.reportValidity=y.get(this.form),y.delete(this.form)),w.has(this.form)&&(this.form.checkValidity=w.get(this.form),w.delete(this.form)),this.form=void 0))}setUserInteracted(e,o){o?M.add(e):M.delete(e),e.requestUpdate()}doAction(e,o){if(this.form){const t=document.createElement("button");t.type=e,t.style.position="absolute",t.style.width="0",t.style.height="0",t.style.clipPath="inset(50%)",t.style.overflow="hidden",t.style.whiteSpace="nowrap",o&&(t.name=o.name,t.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{o.hasAttribute(i)&&t.setAttribute(i,o.getAttribute(i))})),this.form.append(t),t.click(),t.remove()}}getForm(){return this.form??null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const o=this.host,t=!!M.has(o),i=!!o.required;o.toggleAttribute("data-required",i),o.toggleAttribute("data-optional",!i),o.toggleAttribute("data-invalid",!e),o.toggleAttribute("data-valid",e),o.toggleAttribute("data-user-invalid",!e&&t),o.toggleAttribute("data-user-valid",e&&t)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const o=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||o.preventDefault(),this.host.dispatchEvent(o)||e==null||e.preventDefault()}}const Ve={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};se(Ve);class d extends Ee{constructor(){super(...arguments),this.formControlController=new le(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var e;return(e=this.inputElement)==null?void 0:e.validity}checkValidity(){var o;return((o=this.inputElement)==null?void 0:o.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.inputElement.checkValidity();return this.handleValidationMessages(),e}setCustomValidity(e){this.inputElement.setCustomValidity(e),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(e){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(e){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(e){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(e){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const e=this.inputElement.validity;e.valueMissing?this.setCustomValidity(this.$t("validityRequired")):e.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):e.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):e.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):e.typeMismatch||e.rangeUnderflow||e.rangeOverflow||e.stepMismatch||e.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}_handleChange(e){const o=e.target;let t;if(o instanceof HTMLInputElement)switch(o.type){case"checkbox":case"radio":t=o.checked;break;case"file":t=o.files;break;default:t=o.value}else o instanceof HTMLSelectElement&&o.multiple?t=Array.from(o.selectedOptions).map(i=>i.value):t=o.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:t,el:o},bubbles:!0,composed:!0}))}updated(e){var o;(o=super.updated)==null||o.call(this,e),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}s([re(),l("design:type",Object)],d.prototype,"_touched",void 0);s([be(".it-form__control"),l("design:type",HTMLInputElement)],d.prototype,"inputElement",void 0);s([c({type:String,reflect:!0}),l("design:type",Object)],d.prototype,"name",void 0);s([c({reflect:!0}),l("design:type",Object)],d.prototype,"value",void 0);s([c({type:Boolean,reflect:!0}),l("design:type",Object)],d.prototype,"disabled",void 0);s([c({reflect:!0,type:String}),l("design:type",Object)],d.prototype,"form",void 0);s([c({type:Boolean,reflect:!0,attribute:"custom-validation"}),l("design:type",Object)],d.prototype,"customValidation",void 0);s([c({attribute:"validity-message",reflect:!0}),l("design:type",String)],d.prototype,"validationText",void 0);s([c(),l("design:type",String)],d.prototype,"pattern",void 0);s([c(),l("design:type",Object)],d.prototype,"min",void 0);s([c(),l("design:type",Object)],d.prototype,"max",void 0);s([c(),l("design:type",Object)],d.prototype,"step",void 0);s([c({type:Number}),l("design:type",Object)],d.prototype,"minlength",void 0);s([c({type:Number}),l("design:type",Object)],d.prototype,"maxlength",void 0);s([c({type:Boolean,reflect:!0}),l("design:type",Object)],d.prototype,"required",void 0);s([re(),l("design:type",Object)],d.prototype,"validationMessage",void 0);var Te=de`/***************************** 1 ****************************************/
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
}`;let b=class extends d{constructor(){super(...arguments),this.formControlController=new le(this,{value:e=>e.checked?e.value||"true":void 0,setValue:(e,o)=>{const t=e;t.checked=!!o}}),this.type="checkbox",this.checked=!1,this.inline=!1,this.group=!1,this.indeterminate=!1,this.supportText=""}get label(){return this.labelElements.length>0?this.labelElements[0].innerText.trim():""}click(){this.inputElement.click()}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this._handleReady()}updated(e){var o,t;(o=super.updated)==null||o.call(this,e),(!this.label||((t=this.label)==null?void 0:t.length)===0)&&this.logger.warn(`Label is required to ensure accessibility. Please, define a label for <it-checkbox name="${this.name}" ... /> .`)}_handleClick(e){this.checked=!this.checked,this.indeterminate=!1,super._handleClick(e),this._handleChange(e),this.dispatchEvent(new Event("change",{bubbles:!0}))}_renderInput(e,o,t){var p,f;const i=this.composeClass(((p=this.supportText)==null?void 0:p.length)>0?e:"",((f=this._ariaAttributes["aria-describedby"])==null?void 0:f.length)>0?this._ariaAttributes["aria-describedby"]:"",(t==null?void 0:t.length)>0?`invalid-feedback-${this._id}`:""),n=this.composeClass("it-form__control",o?"is-invalid":"",!o&&this._touched?"just-validate-success-field":"",this.indeterminate?"semi-checked":"");return u`
      <input
        part="checkbox focusable"
        ${xe(this._ariaAttributes)}
        aria-describedby=${h(i||void 0)}
        ?aria-invalid=${o}
        @input="${this._handleInput}"
        @blur=${this._handleBlur}
        @focus=${this._handleFocus}
        @click=${this._handleClick}
        @invalid=${this._handleInvalid}
        type="${this.type}"
        id="${this._id}"
        name="${this.name}"
        .checked=${I(this.checked)}
        .indeterminate=${I(this.indeterminate)}
        .disabled=${this.disabled}
        .required=${this.required}
        ?formNoValidate=${this.customValidation}
        .value="${I(this.value)}"
        class="${n}"
      />
    `}render(){var f;const e=`${this._id}-support-text`,o=u` ${ve(this.supportText,()=>u` <small class="form-text" id="${e}">${this.supportText}</small> `)}`,t=this.validationMessage??""??"",i=(t==null?void 0:t.length)>0||!this.customValidation&&((f=this.inputElement)==null?void 0:f.checkValidity())===!1,n=u`<div
      role="alert"
      id="invalid-feedback-${this._id}"
      class="invalid-feedback form-feedback form-text form-feedback just-validate-error-label"
      ?hidden=${!((t==null?void 0:t.length)>0)}
    >
      <span class="visually-hidden"><slot name="label"></slot>: </span>${t}
    </div>`,a=this.composeClass("form-check",this.inline?"form-check-inline":"",this.group?"form-check-group":""),p=this.composeClass(this.disabled?"disabled":"");return u`
      <div class="${a}" part="input-wrapper">
        ${this._renderInput(e,i,t)}
        <label for="${h(this._id||void 0)}" part="label" class="${p}"
          ><slot name="label"></slot
        ></label>
        ${n} ${o}
      </div>
    `}};b.styles=Te;s([c({type:Boolean,reflect:!0}),l("design:type",Object)],b.prototype,"checked",void 0);s([c({type:Boolean,reflect:!0}),l("design:type",Object)],b.prototype,"inline",void 0);s([c({type:Boolean,reflect:!0}),l("design:type",Object)],b.prototype,"group",void 0);s([c({type:Boolean,reflect:!0}),l("design:type",Object)],b.prototype,"indeterminate",void 0);s([ge({slot:"label"}),l("design:type",Array)],b.prototype,"labelElements",void 0);s([c({type:String,attribute:"support-text"}),l("design:type",Object)],b.prototype,"supportText",void 0);b=s([fe("it-checkbox")],b);const m=r=>{var e,o;return u`<it-checkbox
    id="${h(r.id||void 0)}"
    name="${h(r.name||void 0)}"
    value="${h(((e=r.value)==null?void 0:e.length)>0?r.value:void 0)}"
    ?checked="${r.checked}"
    ?indeterminate="${r.indeterminate}"
    ?disabled="${r.disabled}"
    ?inline="${r.inline}"
    form="${h(((o=r.form)==null?void 0:o.length)>0?r.form:void 0)}"
    ?custom-validation="${r.customValidation}"
    validity-message="${h(r.validityMessage||void 0)}"
    ?required="${r.required}"
    support-text="${h(r.supportText||void 0)}"
    ?group="${r.group}"
    class="${h(r.className||void 0)}"
    ><span slot="label">${r.label}</span>${h(r.children||void 0)}</it-checkbox
  >`},v={title:"Componenti/Form/Checkbox",tags:["autodocs"],component:"it-checkbox",args:{id:"",label:"Checkbox di esempio",name:"esempio",value:void 0,checked:!1,indeterminate:!1,disabled:!1,form:void 0,customValidation:!1,validityMessage:"",required:!1,inline:!1,group:!1,supportText:""},argTypes:{id:{control:"text",description:"ID del campo"},label:{control:"text",description:"Etichetta del campo"},name:{control:"text"},value:{control:"text",description:"Valore del campo"},checked:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},indeterminate:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},form:{control:"text",description:"ID html del form a cui è associato il campo, se il campo non si trova all'interno di una form "},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},inline:{control:"boolean",type:"boolean",description:"Se si vogliono mostrare più checkbox affiancate orizzontalmente",table:{defaultValue:{summary:"false"}}},group:{control:"boolean",type:"boolean",description:"Se si vogliono mostrare più checkbox raggruppate visivamente",table:{defaultValue:{summary:"false"}}},supportText:{name:"support-text",control:"text",description:"Testo di supporto"}},parameters:{docs:{description:{component:`
<Description>Casella di controllo accessibile e responsiva, che consente all'utente di attivare o disattivare un'opzione.</Description>


<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Tutti gli attributi \`it-aria-*\` passati a \`<it-checkbox>\` vengono applicati all'input generato.
</p></div></div>
`}}}},z={...v,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:r=>u`${m({...r})} `},$={...v,args:{disabled:!0},parameters:{docs:{description:{story:"\nPer disabilitare i checkbox, aggiungi l'attributo `disabled` al componente `<it-checkbox>`.\n"}}},render:r=>u`
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      ${m({...r,label:"Checkbox non selezionato",className:"mb-2"})}
      ${m({...r,label:"Checkbox selezionato",checked:!0})}
    </fieldset>
  `},E={...v,name:"Indeterminato (mixed)",args:{indeterminate:!0},parameters:{docs:{description:{story:"\nPer ottenere lo stato indeterminato di una checkbox, aggiungi l'attributo `indeterminate` al componente `<it-checkbox>`.\n"}}},render:r=>u`
    ${m({...r,label:"Checkbox indeterminato"})}
  `},V={...v,args:{inline:!0},argTypes:{...Object.fromEntries(Object.entries(v.argTypes).map(([r,e])=>r!=="inline"?[r,{...e,table:{...e.table,disable:!0}}]:[r,{...e}]))},parameters:{docs:{description:{story:"\nPer allineare orizzontalmente le checkbox, aggiungi l'attributo `inline` a `<it-checkbox>`.\n"}}},render:r=>u`
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      ${m({...r,label:"Checkbox non selezionato"})}
      ${m({...r,label:"Checkbox selezionato",checked:!0})}
    </fieldset>
  `},T={...v,name:"Gruppo di checkbox",args:{group:!0},parameters:{docs:{description:{story:"\nPer creare un gruppo di checkbox allineati in colonna, occorre aggiungere l'attributo `group` al componente `<it-checkbox>`. L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale.\n\nIn questi casi, se tutti gli elementi `<it-checkbox>` hanno lo stesso attributo `name`, al submit della form via js, il modo corretto per estrarre il valore è:\n\n```js\n  const formData = new FormData(document.getElementById('form'));\nformData.getAll(field_name) // dove `field_name` è il valore dell'attributo `[name]`\n```\n"}}},render:r=>u`
    <div class="row">
      <fieldset class="col-12 col-md-6">
        <legend>Gruppo di checkbox</legend>
        ${m({...r,label:"Checkbox selezionato",checked:!0})}
        ${m({...r,label:"Checkbox non selezionato"})}
        ${m({...r,disabled:!0,label:"Checkbox disabilitato non selezionato"})}
      </fieldset>

      <fieldset class="col-12 col-md-6">
        <legend>Gruppo di checkbox</legend>
        ${m({...r,label:"Checkbox selezionato",checked:!0,supportText:"Testo descrittivo di supporto per l'opzione selezionabile"})}
        ${m({...r,label:"Checkbox non selezionato",supportText:"Testo descrittivo di supporto per l'opzione selezionabile"})}
        ${m({...r,disabled:!0,label:"Checkbox disabilitato non selezionato",supportText:"Testo descrittivo di supporto per l'opzione selezionabile"})}
      </fieldset>
    </div>
  `},_={...v,name:"Testo di supporto",args:{supportText:"Testo descrittivo di supporto per l'opzione selezionabile"},parameters:{docs:{description:{story:'\nPer mostrare un testo di supporto alla checkbox, aggiungi l\'attributo `supportText="Testo di supporto"` a `<it-checkbox>`.\n'}}},render:r=>u`
    ${m({...r,label:"Checkbox con testo di supporto selezionato"})}
  `},j={...me({componentName:"it-checkbox",otherMethods:"|`click()`| Triggera l'evento di click sull'input reale | - |"}),tags:["!dev"]};var F,O,L;z.parameters={...z.parameters,docs:{...(F=z.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
  render: params => html\`\${renderComponent({
    ...params
  })} \`
}`,...(L=(O=z.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var B,q,R;$.parameters={...$.parameters,docs:{...(B=$.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...meta,
  // name: 'Disabilitato',
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Per disabilitare i checkbox, aggiungi l'attributo \\\`disabled\\\` al componente \\\`<it-checkbox>\\\`.
\`
      }
    }
  },
  render: params => html\`
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      \${renderComponent({
    ...params,
    label: 'Checkbox non selezionato',
    className: 'mb-2'
  })}
      \${renderComponent({
    ...params,
    label: 'Checkbox selezionato',
    checked: true
  })}
    </fieldset>
  \`
}`,...(R=(q=$.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var N,P,U;E.parameters={...E.parameters,docs:{...(N=E.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...meta,
  name: 'Indeterminato (mixed)',
  args: {
    indeterminate: true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Per ottenere lo stato indeterminato di una checkbox, aggiungi l'attributo \\\`indeterminate\\\` al componente \\\`<it-checkbox>\\\`.
\`
      }
    }
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Checkbox indeterminato'
  })}
  \`
}`,...(U=(P=E.parameters)==null?void 0:P.docs)==null?void 0:U.source}}};var G,H,W;V.parameters={...V.parameters,docs:{...(G=V.parameters)==null?void 0:G.docs,source:{originalSource:`{
  ...meta,
  // name: 'Inline',
  args: {
    inline: true
  },
  argTypes: {
    ...Object.fromEntries(Object.entries(meta.argTypes).map(([key, value]) => key !== 'inline' ? [key, {
      ...value,
      table: {
        ...value.table,
        disable: true
      }
    }] : [key, {
      ...value
    }]))
  },
  parameters: {
    docs: {
      description: {
        story: \`
Per allineare orizzontalmente le checkbox, aggiungi l'attributo \\\`inline\\\` a \\\`<it-checkbox>\\\`.
\`
      }
    }
  },
  render: params => html\`
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      \${renderComponent({
    ...params,
    label: 'Checkbox non selezionato'
  })}
      \${renderComponent({
    ...params,
    label: 'Checkbox selezionato',
    checked: true
  })}
    </fieldset>
  \`
}`,...(W=(H=V.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var Z,Q,J;T.parameters={...T.parameters,docs:{...(Z=T.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...meta,
  name: 'Gruppo di checkbox',
  args: {
    group: true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Per creare un gruppo di checkbox allineati in colonna, occorre aggiungere l'attributo \\\`group\\\` al componente \\\`<it-checkbox>\\\`. L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale.

In questi casi, se tutti gli elementi \\\`<it-checkbox>\\\` hanno lo stesso attributo \\\`name\\\`, al submit della form via js, il modo corretto per estrarre il valore è:

\\\`\\\`\\\`js
  const formData = new FormData(document.getElementById('form'));
formData.getAll(field_name) // dove \\\`field_name\\\` è il valore dell'attributo \\\`[name]\\\`
\\\`\\\`\\\`
\`
      }
    }
  },
  render: params => html\`
    <div class="row">
      <fieldset class="col-12 col-md-6">
        <legend>Gruppo di checkbox</legend>
        \${renderComponent({
    ...params,
    label: 'Checkbox selezionato',
    checked: true
  })}
        \${renderComponent({
    ...params,
    label: 'Checkbox non selezionato'
  })}
        \${renderComponent({
    ...params,
    disabled: true,
    label: 'Checkbox disabilitato non selezionato'
  })}
      </fieldset>

      <fieldset class="col-12 col-md-6">
        <legend>Gruppo di checkbox</legend>
        \${renderComponent({
    ...params,
    label: 'Checkbox selezionato',
    checked: true,
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  })}
        \${renderComponent({
    ...params,
    label: 'Checkbox non selezionato',
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  })}
        \${renderComponent({
    ...params,
    disabled: true,
    label: 'Checkbox disabilitato non selezionato',
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  })}
      </fieldset>
    </div>
  \`
}`,...(J=(Q=T.parameters)==null?void 0:Q.docs)==null?void 0:J.source}}};var K,X,Y;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...meta,
  name: 'Testo di supporto',
  args: {
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  },
  parameters: {
    docs: {
      description: {
        story: \`
Per mostrare un testo di supporto alla checkbox, aggiungi l'attributo \\\`supportText="Testo di supporto"\\\` a \\\`<it-checkbox>\\\`.
\`
      }
    }
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Checkbox con testo di supporto selezionato'
  })}
  \`
}`,...(Y=(X=_.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,te,oe;j.parameters={...j.parameters,docs:{...(ee=j.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...StoryFormControlMethodAndProps({
    componentName: 'it-checkbox',
    otherMethods: \`|\\\`click()\\\`| Triggera l'evento di click sull'input reale | - |\`
  }),
  tags: ['!dev']
}`,...(oe=(te=j.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};const Be=["EsempioInterattivo","Disabilitato","Indeterminate","Inline","Group","SupportText","MetodiEPropPubblici"];export{$ as Disabilitato,z as EsempioInterattivo,T as Group,E as Indeterminate,V as Inline,j as MetodiEPropPubblici,_ as SupportText,Be as __namedExportsOrder,v as default};
