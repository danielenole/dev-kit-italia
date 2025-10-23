import{e as _,i as z}from"./directive-CvdRHFdJ.js";import{i as j,x as I,a as D}from"./iframe-BNEzD0SD.js";import{r as V,e as C,n as l,o as f,t as B}from"./query-Q8FTXoGA.js";function s(n,t,e,o){var r=arguments.length,i=r<3?t:o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(n,t,e,o);else for(var h=n.length-1;h>=0;h--)(c=n[h])&&(i=(r<3?c(i):r>3?c(t,e,i):c(t,e))||i);return r>3&&i&&Object.defineProperty(t,e,i),i}function a(n,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,t)}class R extends z{update(t,[e]){const o=t.element;for(const[r,i]of Object.entries(e))i!=null?o.setAttribute(r,i):o.removeAttribute(r);return null}render(t){return null}}const N=_(R);function $(n){var t,e,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var r=n.length;for(t=0;t<r;t++)n[t]&&(e=$(n[t]))&&(o&&(o+=" "),o+=e)}else for(e in n)n[e]&&(o&&(o+=" "),o+=e);return o}function T(){for(var n,t,e=0,o="",r=arguments.length;e<r;e++)(n=arguments[e])&&(t=$(n))&&(o&&(o+=" "),o+=t);return o}const x=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:p}=window;let u,w="ltr",E="en";const S=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function A(){S&&(w=document.documentElement.dir||"ltr",E=document.documentElement.lang||navigator.language),[...x.keys()].forEach(n=>{const t=n;typeof t.requestUpdate=="function"&&t.requestUpdate()})}if(S){const n=new MutationObserver(A);w=document.documentElement.dir||"ltr",E=document.documentElement.lang||navigator.language,n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function F(...n){n.forEach(t=>{const e=t.$code.toLowerCase();p.has(e)?p.set(e,{...p.get(e),...t}):p.set(e,t),u||(u=t)}),A()}window.registerTranslation=F;class q{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){x.add(this.host)}hostDisconnected(){x.delete(this.host)}dir(){return`${this.host.dir||w}`.toLowerCase()}lang(){return`${this.host.lang||E}`.toLowerCase()}getTranslationData(t){var h;const e=new Intl.Locale(t.replace(/_/g,"-")),o=e==null?void 0:e.language.toLowerCase(),r=((h=e==null?void 0:e.region)==null?void 0:h.toLowerCase())??"",i=p.get(`${o}-${r}`),c=p.get(o);return{locale:e,language:o,region:r,primary:i,secondary:c}}exists(t,e){const{primary:o,secondary:r}=this.getTranslationData(e.lang??this.lang()),i={includeFallback:!1,...e};return!!(o&&o[t]||r&&r[t]||i.includeFallback&&u&&u[t])}term(t,...e){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let i;if(o&&o[t])i=o[t];else if(r&&r[t])i=r[t];else if(u&&u[t])i=u[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...e):i}date(t,e){const o=new Date(t);return new Intl.DateTimeFormat(this.lang(),e).format(o)}number(t,e){const o=Number(t);return Number.isNaN(o)?"":new Intl.NumberFormat(this.lang(),e).format(o)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}const U=n=>class extends n{constructor(){super(...arguments),this.localize=new q(this)}get $localize(){return this.localize}$t(t){return this.localize.term(t)}$d(t,e){return this.localize.date(t,e)}$n(t,e){return this.localize.number(t,e)}};class W{constructor(t){this.tag=t}format(t,e){return[`[${this.tag}] ${e}`]}warn(t){console.warn(...this.format("warn",t))}error(t){console.error(...this.format("error",t))}info(t){console.info(...this.format("info",t))}}class L extends D{constructor(){super(),this.composeClass=T,this.logger=new W(this.tagName.toLowerCase())}get _ariaAttributes(){const t={};for(const e of this.getAttributeNames())e==="it-role"?t.role=this.getAttribute(e):e.startsWith("it-aria-")&&(t[e.replace(/^it-/,"")]=this.getAttribute(e));return t}generateId(t){return`${t}-${Math.random().toString(36).slice(2)}`}addFocus(t){}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}get prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}connectedCallback(){var e;super.connectedCallback();const t=((e=this.id)==null?void 0:e.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(t)}}const P=U(L),v=new WeakMap,m=new WeakMap,g=new WeakMap,k=new WeakSet,y=new WeakMap;class H{constructor(t,e){this.handleFormData=o=>{const r=this.options.disabled(this.host),i=this.options.name(this.host),c=this.options.value(this.host),h=this.host.tagName.toLowerCase(),M=h==="it-button";if(this.host.isConnected&&!r&&!M&&typeof i=="string"&&i.length>0&&typeof c<"u")switch(h){case"it-radio":this.host.checked&&o.formData.append(i,c);break;default:Array.isArray(c)?c.forEach(O=>{o.formData.append(i,O.toString())}):o.formData.append(i,c.toString())}},this.handleFormSubmit=o=>{var c;const r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((c=v.get(this.form))==null||c.forEach(h=>{this.setUserInteracted(h,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&o.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),y.set(this.host,[])},this.handleInteraction=o=>{const r=y.get(this.host);r.includes(o.type)||r.push(o.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:o=>{const r=o.form;if(r){const c=o.getRootNode().querySelector(`#${r}`);if(c)return c}return o.closest("form")},name:o=>o.name,value:o=>o.value,disabled:o=>o.disabled??!1,reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,r)=>{o.value=r},assumeInteractionOn:["it-input"],...e}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),y.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),y.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,v.has(this.form)?v.get(this.form).add(this.host):v.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),m.has(this.form)||(m.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),g.has(this.form)||(g.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=v.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),m.has(this.form)&&(this.form.reportValidity=m.get(this.form),m.delete(this.form)),g.has(this.form)&&(this.form.checkValidity=g.get(this.form),g.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?k.add(t):k.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{e.hasAttribute(r)&&o.setAttribute(r,e.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!k.has(e),r=!!e.required;e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}}const K={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};F(K);class b extends P{constructor(){super(...arguments),this.formControlController=new H(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var t;return(t=this.inputElement)==null?void 0:t.validity}checkValidity(){var e;return((e=this.inputElement)==null?void 0:e.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.inputElement.checkValidity();return this.handleValidationMessages(),t}setCustomValidity(t){this.inputElement.setCustomValidity(t),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(t){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(t){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(t){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(t){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const t=this.inputElement.validity;t.valueMissing?this.setCustomValidity(this.$t("validityRequired")):t.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):t.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):t.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):t.typeMismatch||t.rangeUnderflow||t.rangeOverflow||t.stepMismatch||t.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}_handleChange(t){const e=t.target;let o;if(e instanceof HTMLInputElement)switch(e.type){case"checkbox":case"radio":o=e.checked;break;case"file":o=e.files;break;default:o=e.value}else e instanceof HTMLSelectElement&&e.multiple?o=Array.from(e.selectedOptions).map(r=>r.value):o=e.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:o,el:e},bubbles:!0,composed:!0}))}updated(t){var e;(e=super.updated)==null||e.call(this,t),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}s([V(),a("design:type",Object)],b.prototype,"_touched",void 0);s([C(".it-form__control"),a("design:type",HTMLInputElement)],b.prototype,"inputElement",void 0);s([l({type:String,reflect:!0}),a("design:type",Object)],b.prototype,"name",void 0);s([l({reflect:!0}),a("design:type",Object)],b.prototype,"value",void 0);s([l({type:Boolean,reflect:!0}),a("design:type",Object)],b.prototype,"disabled",void 0);s([l({reflect:!0,type:String}),a("design:type",Object)],b.prototype,"form",void 0);s([l({type:Boolean,reflect:!0,attribute:"custom-validation"}),a("design:type",Object)],b.prototype,"customValidation",void 0);s([l({attribute:"validity-message",reflect:!0}),a("design:type",String)],b.prototype,"validationText",void 0);s([l(),a("design:type",String)],b.prototype,"pattern",void 0);s([l(),a("design:type",Object)],b.prototype,"min",void 0);s([l(),a("design:type",Object)],b.prototype,"max",void 0);s([l(),a("design:type",Object)],b.prototype,"step",void 0);s([l({type:Number}),a("design:type",Object)],b.prototype,"minlength",void 0);s([l({type:Number}),a("design:type",Object)],b.prototype,"maxlength",void 0);s([l({type:Boolean,reflect:!0}),a("design:type",Object)],b.prototype,"required",void 0);s([V(),a("design:type",Object)],b.prototype,"validationMessage",void 0);var Q=j`/***************************** 1 ****************************************/
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

.d-block {
  display: block !important;
}

.w-100 {
  width: 100% !important;
}

@media (min-width: 576px) {
  .d-sm-block {
    display: block !important;
  }
}
@media (min-width: 768px) {
  .d-md-block {
    display: block !important;
  }
}
@media (min-width: 992px) {
  .d-lg-block {
    display: block !important;
  }
}
@media (min-width: 1200px) {
  .d-xl-block {
    display: block !important;
  }
}
@media (min-width: 1400px) {
  .d-xxl-block {
    display: block !important;
  }
}
@media print {
  .d-print-block {
    display: block !important;
  }
}
.btn {
  --bs-btn-padding-x: var(--bs-spacing-s);
  --bs-btn-padding-y: var(--bs-spacing-xs);
  --bs-btn-font-family: var(--bs-font-sans);
  --bs-btn-font-weight: var(--bs-font-weight-solid);
  --bs-btn-font-size: var(--bs-label-font-size);
  --bs-btn-line-height: var(--bs-font-line-height-3);
  --bs-btn-text-color: var(--bs-color-text-primary);
  --bs-btn-background: transparent;
  --bs-btn-border-size: 0;
  --bs-btn-border-color: transparent;
  --bs-btn-border-radius: var(--bs-radius-smooth);
  --bs-btn-outline-border-size: 2px;
  --bs-btn-outline-border-color: transparent;
  --bs-btn-disabled-opacity: 0.5;
}

.btn {
  display: inline-block;
  padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
  border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
  border-radius: var(--bs-btn-border-radius);
  background: var(--bs-btn-background);
  box-shadow: var(--bs-btn-box-shadow, none);
  color: var(--bs-btn-text-color);
  font-family: var(--bs-btn-font-family);
  font-size: var(--bs-btn-font-size);
  font-weight: var(--bs-btn-font-weight);
  line-height: var(--bs-btn-line-height);
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  white-space: initial;
  width: auto;
  transition: all var(--bs-transition-instant) ease-in-out;
  user-select: none;
}
.btn:disabled, .btn.disabled {
  opacity: var(--bs-btn-disabled-opacity);
  cursor: not-allowed;
  pointer-events: none;
}
.btn:focus-visible {
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
}
.btn-check:focus-visible + .btn {
  border-color: var(--bs-btn-hover-border-color);
  outline: 0;
}

.btn-link {
  --bs-btn-background: transparent;
  --bs-btn-border-color: transparent;
  text-decoration: underline;
}
.btn-link:hover {
  color: var(--bs-color-link-hover);
}

.btn-xs {
  --bs-btn-padding-x: var(--bs-spacing-xs);
  --bs-btn-padding-y: var(--bs-spacing-xs);
  --bs-btn-font-size: var(--bs-label-font-size-s);
  --bs-btn-line-height: var(--bs-font-line-height-1);
  --bs-rounded-icon-size: 20px;
}

.btn-lg {
  --bs-btn-padding-x: var(--bs-spacing-m);
  --bs-btn-padding-y: var(--bs-spacing-s);
  --bs-btn-font-size: var(--bs-label-font-size-m);
  --bs-btn-line-height: var(--bs-font-line-height-5);
}

.btn-progress {
  position: relative;
}

.btn-icon {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: var(--bs-icon-spacing);
}

.btn-full {
  align-self: stretch;
  width: inherit;
  border: none;
  box-shadow: none;
}
@media (min-width: 992px) {
  .btn-full {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
}

.btn:disabled:hover,
.btn.disabled:hover {
  cursor: not-allowed;
}

.btn-primary,
a.btn-primary {
  --bs-btn-text-color: var(--bs-color-text-inverse);
  --bs-btn-background: var(--bs-color-background-primary);
}
.btn-primary:hover,
a.btn-primary:hover {
  --bs-btn-background: var(--bs-color-background-primary-hover);
}
.btn-primary:active,
a.btn-primary:active {
  --bs-btn-background: var(--bs-color-background-primary-active);
}
.btn-primary.btn-progress,
a.btn-primary.btn-progress {
  border-color: hsl(210, 76%, 67%);
  opacity: 1;
  background-color: hsl(210, 76%, 67%);
}

.btn-secondary,
a.btn-secondary {
  --bs-btn-text-color: var(--bs-color-text-inverse);
  --bs-btn-background: var(--bs-color-background-secondary);
}
.btn-secondary:hover,
a.btn-secondary:hover {
  --bs-btn-background: var(--bs-color-background-secondary-hover);
}
.btn-secondary:active,
a.btn-secondary:active {
  --bs-btn-background: var(--bs-color-background-secondary-active);
}
.btn-secondary:disabled.btn-progress, .btn-secondary.disabled.btn-progress,
a.btn-secondary:disabled.btn-progress,
a.btn-secondary.disabled.btn-progress {
  border-color: hsl(210, 12%, 52%);
  opacity: 1;
  background-color: hsl(210, 12%, 52%);
}

.btn-success,
a.btn-success {
  --bs-btn-text-color: var(--bs-color-text-inverse);
  --bs-btn-background: var(--bs-color-background-success);
}
.btn-success:hover,
a.btn-success:hover {
  --bs-btn-background: var(--bs-color-background-success-hover);
}
.btn-success:active,
a.btn-success:active {
  --bs-btn-background: var(--bs-color-background-success-active);
}

.btn-warning,
a.btn-warning {
  --bs-btn-text-color: var(--bs-color-text-inverse);
  --bs-btn-background: var(--bs-color-background-warning);
}
.btn-warning:hover,
a.btn-warning:hover {
  --bs-btn-background: var(--bs-color-background-warning-hover);
}
.btn-warning:active,
a.btn-warning:active {
  --bs-btn-background: var(--bs-color-background-warning-active);
}

.btn-danger,
a.btn-danger {
  --bs-btn-text-color: var(--bs-color-text-inverse);
  --bs-btn-background: var(--bs-color-background-danger);
}
.btn-danger:hover,
a.btn-danger:hover {
  --bs-btn-background: var(--bs-color-background-danger-hover);
}
.btn-danger:active,
a.btn-danger:active {
  --bs-btn-background: var(--bs-color-background-danger-active);
}

.btn[class*=btn-outline-] {
  --bs-btn-box-shadow: inset 0 0 0 var(--bs-btn-outline-border-size) var(--bs-btn-outline-border-color);
}

.btn-outline-primary,
a.btn-outline-primary {
  --bs-btn-outline-border-color: var(--bs-color-border-primary);
  --bs-btn-text-color: var(--bs-color-text-primary);
}
.btn-outline-primary:hover,
a.btn-outline-primary:hover {
  --bs-btn-outline-border-color: var(--bs-color-border-primary-hover);
  --bs-btn-text-color: var(--bs-color-link-hover);
}
.btn-outline-primary:active,
a.btn-outline-primary:active {
  --bs-btn-outline-border-color: var(--bs-color-border-primary-active);
  --bs-btn-text-color: var(--bs-color-link-active);
}
.btn-outline-secondary,
a.btn-outline-secondary {
  --bs-btn-outline-border-color: var(--bs-color-border-secondary);
  --bs-btn-text-color: var(--bs-color-text-secondary);
}
.btn-outline-secondary:hover,
a.btn-outline-secondary:hover {
  --bs-btn-outline-border-color: var(--bs-color-border-secondary-hover);
  --bs-btn-text-color: var(--bs-color-text-secondary-hover);
}
.btn-outline-secondary:active,
a.btn-outline-secondary:active {
  --bs-btn-outline-border-color: var(--bs-color-border-secondary-active);
  --bs-btn-text-color: var(--bs-color-text-secondary-active);
}
.btn-outline-success,
a.btn-outline-success {
  --bs-btn-outline-border-color: var(--bs-color-border-success);
  --bs-btn-text-color: var(--bs-color-text-success);
}
.btn-outline-success:hover,
a.btn-outline-success:hover {
  --bs-btn-outline-border-color: var(--bs-color-border-success-hover);
  --bs-btn-text-color: var(--bs-color-text-success-hover);
}
.btn-outline-success:active,
a.btn-outline-success:active {
  --bs-btn-outline-border-color: var(--bs-color-border-success-active);
  --bs-btn-text-color: var(--bs-color-text-success-active);
}
.btn-outline-warning,
a.btn-outline-warning {
  --bs-btn-outline-border-color: var(--bs-color-border-warning);
  --bs-btn-text-color: var(--bs-color-text-warning);
}
.btn-outline-warning:hover,
a.btn-outline-warning:hover {
  --bs-btn-outline-border-color: var(--bs-color-border-warning-hover);
  --bs-btn-text-color: var(--bs-color-text-warning-hover);
}
.btn-outline-warning:active,
a.btn-outline-warning:active {
  --bs-btn-outline-border-color: var(--bs-color-border-warning-active);
  --bs-btn-text-color: var(--bs-color-text-warning-active);
}
.btn-outline-danger,
a.btn-outline-danger {
  --bs-btn-outline-border-color: var(--bs-color-border-danger);
  --bs-btn-text-color: var(--bs-color-text-danger);
}
.btn-outline-danger:hover,
a.btn-outline-danger:hover {
  --bs-btn-outline-border-color: var(--bs-color-border-danger-hover);
  --bs-btn-text-color: var(--bs-color-text-danger-hover);
}
.btn-outline-danger:active,
a.btn-outline-danger:active {
  --bs-btn-outline-border-color: var(--bs-color-border-danger-active);
  --bs-btn-text-color: var(--bs-color-text-danger-active);
}

.bg-dark .btn-link {
  --bs-btn-text-color: var(--bs-color-text-inverse);
}
.bg-dark a.btn-primary,
.bg-dark .btn-primary {
  --bs-btn-text-color: var(--bs-color-text-primary);
  --bs-btn-background: var(--bs-color-background-inverse);
}
.bg-dark a.btn-primary:hover,
.bg-dark .btn-primary:hover {
  --bs-btn-background: color-mix(in srgb, var(--bs-color-background-inverse) 85%, black);
}
.bg-dark a.btn-primary:active,
.bg-dark .btn-primary:active {
  --bs-btn-background: color-mix(in srgb, var(--bs-color-background-inverse) 80%, black);
}
.bg-dark a.btn-secondary,
.bg-dark .btn-secondary {
  --bs-btn-text-color: var(--bs-color-text-inverse);
  --bs-btn-background: var(--bs-color-background-secondary);
}
.bg-dark a.btn-secondary:hover, .bg-dark a.btn-secondary:active,
.bg-dark .btn-secondary:hover,
.bg-dark .btn-secondary:active {
  --bs-btn-background: color-mix(in srgb, var(--bs-color-background-secondary) 85%, black);
}
.bg-dark .btn-outline-primary,
.bg-dark a.btn-outline-primary {
  --bs-btn-outline-border-color: var(--bs-color-border-inverse);
  --bs-btn-text-color: var(--bs-color-text-inverse);
}
.bg-dark .btn-outline-primary:hover,
.bg-dark a.btn-outline-primary:hover {
  --bs-btn-boxshadow-color-darken: color-mix(in srgb, var(--bs-color-border-inverse) 80%, black);
  --bs-btn-boxshadow-color-desaturated: color-mix(in srgb, var(--bs-btn-boxshadow-color-darken) 80%, gray);
  --bs-btn-outline-border-color: var(--bs-btn-boxshadow-color-desaturated);
}
.bg-dark .btn-outline-secondary,
.bg-dark a.btn-outline-secondary {
  --bs-btn-text-color: var(--bs-color-text-inverse);
}
.bg-dark .btn-outline-secondary:hover, .bg-dark .btn-outline-secondary:active,
.bg-dark a.btn-outline-secondary:hover,
.bg-dark a.btn-outline-secondary:active {
  --bs-btn-boxshadow-color-darken: color-mix(in srgb, var(--bs-color-background-secondary) 80%, black);
  --bs-btn-boxshadow-color-desaturated: color-mix(in srgb, var(--bs-btn-boxshadow-color-darken) 80%, gray);
  --bs-btn-outline-border-color: var(--bs-btn-boxshadow-color-desaturated);
}

.btn-close {
  position: relative;
  box-sizing: content-box;
  width: 2.5rem;
  height: 2.5rem;
  padding: 0;
  border: 0;
  opacity: 0.5;
  background-color: transparent;
  color: var(--bs-color-text-base);
}
.btn-close .icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btn-close:hover {
  opacity: 1;
  text-decoration: none;
}
.btn-close:focus {
  opacity: 1;
}
.btn-close:disabled, .btn-close.disabled {
  opacity: var(--bs-btn-disabled-opacity);
  pointer-events: none;
  user-select: none;
}

.btn-close-white {
  filter: invert(1) grayscale(100%) brightness(200%);
}`;let d=class extends L{constructor(){super(...arguments),this.type="button",this.variant="",this.size="",this.outline=!1,this.block=!1,this.icon=!1,this.value="",this.internals=this.attachInternals(),this._onKeyDown=t=>{var e;(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),(e=this._nativeButton)==null||e.click())}}static get formAssociated(){return!0}surfaceSubmitEvent(t){if(this.form&&!this.disabled){t.preventDefault(),t.stopPropagation();let e=!1;Array.from(this.form.querySelectorAll("*")).filter(r=>r.tagName.toLowerCase().startsWith("it-")).forEach(r=>{r.checkValidity&&r.checkValidity(),(r!=null&&r.isValid?r.isValid():!0)||(e=!0,console.error(`Invalid field: [name]=${r.name}, [id]=${r.id}`))}),e||this.form.requestSubmit()}this.disabled&&(t.preventDefault(),t.stopPropagation())}get form(){return this.internals?this.internals.form:null}focus(){var t;(t=this._nativeButton)==null||t.focus()}connectedCallback(){var t;(t=super.connectedCallback)==null||t.call(this),this.block&&this.classList.add("d-block","w-100"),this.addEventListener("keydown",this._onKeyDown)}disconnectedCallback(){var t;this.removeEventListener("keydown",this._onKeyDown),(t=super.disconnectedCallback)==null||t.call(this)}render(){var o;const t=this.composeClass("btn",this.className,{[`btn-${this.variant}`]:!!this.variant&&!this.outline,[`btn-outline-${this.variant}`]:!!this.variant&&this.outline,[`btn-${this.size}`]:!!this.size,disabled:this.disabled,"btn-icon":this.icon,"d-block w-100":this.block}),e=this.composeClass("button","focusable",{[this.variant]:((o=this.variant)==null?void 0:o.length)>0,outline:this.outline});return I`
      <button
        id=${f(this.id||void 0)}
        part="${e}"
        type="${this.type}"
        class="${t}"
        @click="${this.type==="submit"?this.surfaceSubmitEvent:void 0}"
        .value="${f(this.value?this.value:void 0)}"
        ${N(this._ariaAttributes)}
        aria-expanded="${f(this.expanded!==void 0?this.expanded:void 0)}"
        aria-disabled="${f(this.disabled?this.disabled:void 0)}"
      >
        <slot></slot>
      </button>
    `}};d.styles=Q;s([C("button"),a("design:type",HTMLButtonElement)],d.prototype,"_nativeButton",void 0);s([l({type:String,reflect:!0}),a("design:type",Object)],d.prototype,"type",void 0);s([l({type:String,reflect:!0}),a("design:type",String)],d.prototype,"variant",void 0);s([l({type:String,reflect:!0}),a("design:type",String)],d.prototype,"size",void 0);s([l({type:Boolean,reflect:!0}),a("design:type",Object)],d.prototype,"outline",void 0);s([l({type:Boolean,reflect:!0}),a("design:type",Object)],d.prototype,"block",void 0);s([l({type:Boolean,reflect:!0}),a("design:type",Object)],d.prototype,"icon",void 0);s([l({type:String}),a("design:type",Object)],d.prototype,"value",void 0);s([l(),a("design:type",Object)],d.prototype,"internals",void 0);s([l({type:Boolean,reflect:!0,attribute:"it-aria-disabled"}),a("design:type",Boolean)],d.prototype,"disabled",void 0);s([l({type:Boolean,reflect:!0,attribute:"it-aria-expanded"}),a("design:type",Boolean)],d.prototype,"expanded",void 0);d=s([B("it-button")],d);
