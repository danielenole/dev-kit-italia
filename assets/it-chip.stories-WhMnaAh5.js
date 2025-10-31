import{i as Vt,E as F,x as d,a as kt}from"./iframe-Bva7CR0T.js";import{r as bt,e as St,n as c,t as $t,o as L}from"./query-CblQfenQ.js";import"./it-icon-D64LtsYF.js";import"./it-button-C63sGHtk.js";import{o as vt}from"./query-assigned-elements-B4zEjXUi.js";import{e as P}from"./class-map-Ba3uYgi0.js";import"./preload-helper-Dp1pzeXC.js";import"./directive-CvdRHFdJ.js";const At=["primary","secondary","success","danger","warning",""],Dt=["sm","lg"];function r(s,t,e,i){var a=arguments.length,o=a<3?t:i,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(s,t,e,i);else for(var m=s.length-1;m>=0;m--)(l=s[m])&&(o=(a<3?l(o):a>3?l(t,e,o):l(t,e))||o);return a>3&&o&&Object.defineProperty(t,e,o),o}function n(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)}function gt(s){var t,e,i="";if(typeof s=="string"||typeof s=="number")i+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(t=0;t<a;t++)s[t]&&(e=gt(s[t]))&&(i&&(i+=" "),i+=e)}else for(e in s)s[e]&&(i&&(i+=" "),i+=e);return i}function It(){for(var s,t,e=0,i="",a=arguments.length;e<a;e++)(s=arguments[e])&&(t=gt(s))&&(i&&(i+=" "),i+=t);return i}const R=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:b}=window;let u,O="ltr",T="en";const ft=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function yt(){ft&&(O=document.documentElement.dir||"ltr",T=document.documentElement.lang||navigator.language),[...R.keys()].forEach(s=>{const t=s;typeof t.requestUpdate=="function"&&t.requestUpdate()})}if(ft){const s=new MutationObserver(yt);O=document.documentElement.dir||"ltr",T=document.documentElement.lang||navigator.language,s.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function zt(...s){s.forEach(t=>{const e=t.$code.toLowerCase();b.has(e)?b.set(e,{...b.get(e),...t}):b.set(e,t),u||(u=t)}),yt()}window.registerTranslation=zt;class Lt{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){R.add(this.host)}hostDisconnected(){R.delete(this.host)}dir(){return`${this.host.dir||O}`.toLowerCase()}lang(){return`${this.host.lang||T}`.toLowerCase()}getTranslationData(t){var m;const e=new Intl.Locale(t.replace(/_/g,"-")),i=e==null?void 0:e.language.toLowerCase(),a=((m=e==null?void 0:e.region)==null?void 0:m.toLowerCase())??"",o=b.get(`${i}-${a}`),l=b.get(i);return{locale:e,language:i,region:a,primary:o,secondary:l}}exists(t,e){const{primary:i,secondary:a}=this.getTranslationData(e.lang??this.lang()),o={includeFallback:!1,...e};return!!(i&&i[t]||a&&a[t]||o.includeFallback&&u&&u[t])}term(t,...e){const{primary:i,secondary:a}=this.getTranslationData(this.lang());let o;if(i&&i[t])o=i[t];else if(a&&a[t])o=a[t];else if(u&&u[t])o=u[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof o=="function"?o(...e):o}date(t,e){const i=new Date(t);return new Intl.DateTimeFormat(this.lang(),e).format(i)}number(t,e){const i=Number(t);return Number.isNaN(i)?"":new Intl.NumberFormat(this.lang(),e).format(i)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}}const Mt=s=>class extends s{constructor(){super(...arguments),this.localize=new Lt(this)}get $localize(){return this.localize}$t(t){return this.localize.term(t)}$d(t,e){return this.localize.date(t,e)}$n(t,e){return this.localize.number(t,e)}};class Ft{constructor(t){this.tag=t}format(t,e){return[`[${this.tag}] ${e}`]}warn(t){console.warn(...this.format("warn",t))}error(t){console.error(...this.format("error",t))}info(t){console.info(...this.format("info",t))}}class wt extends kt{constructor(){super(),this.composeClass=It,this.logger=new Ft(this.tagName.toLowerCase())}get _ariaAttributes(){const t={};for(const e of this.getAttributeNames())e==="it-role"?t.role=this.getAttribute(e):e.startsWith("it-aria-")&&(t[e.replace(/^it-/,"")]=this.getAttribute(e));return t}generateId(t){return`${t}-${Math.random().toString(36).slice(2)}`}addFocus(t){}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}get focusElement(){return this}get prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}connectedCallback(){var e;super.connectedCallback();const t=((e=this.id)==null?void 0:e.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(t)}}const Rt=Mt(wt),v=new WeakMap,g=new WeakMap,f=new WeakMap,M=new WeakSet,w=new WeakMap;class Ot{constructor(t,e){this.handleFormData=i=>{const a=this.options.disabled(this.host),o=this.options.name(this.host),l=this.options.value(this.host),m=this.host.tagName.toLowerCase(),y=m==="it-button";if(this.host.isConnected&&!a&&!y&&typeof o=="string"&&o.length>0&&typeof l<"u")switch(m){case"it-radio":this.host.checked&&i.formData.append(o,l);break;default:Array.isArray(l)?l.forEach(z=>{i.formData.append(o,z.toString())}):i.formData.append(o,l.toString())}},this.handleFormSubmit=i=>{var l;const a=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((l=v.get(this.form))==null||l.forEach(m=>{this.setUserInteracted(m,!0)})),this.form&&!this.form.noValidate&&!a&&!o(this.host)&&i.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),w.set(this.host,[])},this.handleInteraction=i=>{const a=w.get(this.host);a.includes(i.type)||a.push(i.type),a.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const a of i)if(typeof a.checkValidity=="function"&&!a.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const a of i)if(typeof a.reportValidity=="function"&&!a.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:i=>{const a=i.form;if(a){const l=i.getRootNode().querySelector(`#${a}`);if(l)return l}return i.closest("form")},name:i=>i.name,value:i=>i.value,disabled:i=>i.disabled??!1,reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,a)=>{i.value=a},assumeInteractionOn:["it-input"],...e}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),w.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),w.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,v.has(this.form)?v.get(this.form).add(this.host):v.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),g.has(this.form)||(g.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),f.has(this.form)||(f.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=v.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),g.has(this.form)&&(this.form.reportValidity=g.get(this.form),g.delete(this.form)),f.has(this.form)&&(this.form.checkValidity=f.get(this.form),f.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?M.add(t):M.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(a=>{e.hasAttribute(a)&&i.setAttribute(a,e.getAttribute(a))})),this.form.append(i),i.click(),i.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!M.has(e),a=!!e.required;e.toggleAttribute("data-required",a),e.toggleAttribute("data-optional",!a),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}}const Tt={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};zt(Tt);class p extends Rt{constructor(){super(...arguments),this.formControlController=new Ot(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var t;return(t=this.inputElement)==null?void 0:t.validity}checkValidity(){var e;return((e=this.inputElement)==null?void 0:e.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.inputElement.checkValidity();return this.handleValidationMessages(),t}setCustomValidity(t){this.inputElement.setCustomValidity(t),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(t){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(t){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(t){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(t){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const t=this.inputElement.validity;t.valueMissing?this.setCustomValidity(this.$t("validityRequired")):t.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):t.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):t.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):t.typeMismatch||t.rangeUnderflow||t.rangeOverflow||t.stepMismatch||t.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}_handleChange(t){const e=t.target;let i;if(e instanceof HTMLInputElement)switch(e.type){case"checkbox":case"radio":i=e.checked;break;case"file":i=e.files;break;default:i=e.value}else e instanceof HTMLSelectElement&&e.multiple?i=Array.from(e.selectedOptions).map(a=>a.value):i=e.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:i,el:e},bubbles:!0,composed:!0}))}updated(t){var e;(e=super.updated)==null||e.call(this,t),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}r([bt(),n("design:type",Object)],p.prototype,"_touched",void 0);r([St(".it-form__control"),n("design:type",HTMLInputElement)],p.prototype,"inputElement",void 0);r([c({type:String,reflect:!0}),n("design:type",Object)],p.prototype,"name",void 0);r([c({reflect:!0}),n("design:type",Object)],p.prototype,"value",void 0);r([c({type:Boolean,reflect:!0}),n("design:type",Object)],p.prototype,"disabled",void 0);r([c({reflect:!0,type:String}),n("design:type",Object)],p.prototype,"form",void 0);r([c({type:Boolean,reflect:!0,attribute:"custom-validation"}),n("design:type",Object)],p.prototype,"customValidation",void 0);r([c({attribute:"validity-message",reflect:!0}),n("design:type",String)],p.prototype,"validationText",void 0);r([c(),n("design:type",String)],p.prototype,"pattern",void 0);r([c(),n("design:type",Object)],p.prototype,"min",void 0);r([c(),n("design:type",Object)],p.prototype,"max",void 0);r([c(),n("design:type",Object)],p.prototype,"step",void 0);r([c({type:Number}),n("design:type",Object)],p.prototype,"minlength",void 0);r([c({type:Number}),n("design:type",Object)],p.prototype,"maxlength",void 0);r([c({type:Boolean,reflect:!0}),n("design:type",Object)],p.prototype,"required",void 0);r([bt(),n("design:type",Object)],p.prototype,"validationMessage",void 0);var Pt=Vt`/***************************** 1 ****************************************/
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

.chip {
  --bs-chip-background-color: var(--bs-color-background-muted);
  --bs-chip-border-width: 1px;
  --bs-chip-border-radius: var(--bs-radius-rounded);
  --bs-chip-border-color: var(--bs-color-border-subtle);
  --bs-chip-icon-color: var(--bs-icon-secondary);
  --bs-chip-padding-x: var(--bs-spacing-xs);
  --bs-chip-padding-y: var(--bs-spacing-3xs);
  --bs-chip-text-color: var(--bs-color-text-secondary);
  --bs-chip-text-line-height: var(--bs-label-line-height);
  --bs-chip-text-size: var(--bs-label-font-size);
  --bs-chip-text-weight: var(--bs-font-weight-solid);
  --bs-chip-link-hover: var(--bs-color-text-inverse);
}

.chip {
  display: inline-flex;
  align-items: center;
  justify-content: space-evenly;
  padding: var(--bs-chip-padding-y) var(--bs-chip-padding-x);
  border: var(--bs-chip-border-width) solid var(--bs-chip-border-color);
  border-radius: var(--bs-chip-border-radius);
  background-color: var(--bs-chip-background-color);
  color: var(--bs-chip-text-color);
  gap: var(--bs-spacing-xxs);
}
.chip + .chip {
  margin-left: var(--bs-spacing-s);
}
.chip:hover {
  cursor: text;
  color: var(--bs-chip-text-color);
}
.chip .chip-label {
  margin-bottom: 0;
  font-size: var(--bs-chip-text-size);
  font-weight: var(--bs-chip-text-weight);
  line-height: var(--bs-chip-text-line-height);
  text-decoration: none;
}
.chip button {
  padding: 0;
  border: none;
  background: transparent;
  line-height: 1;
}
.chip button:hover:not([disabled]) {
  cursor: pointer;
}
.chip button:hover[disabled] {
  cursor: not-allowed;
}
.chip button .icon {
  fill: var(--bs-chip-icon-color);
}
.chip button .icon:hover {
  fill: var(--bs-icon-primary);
}
.chip > .icon {
  fill: var(--bs-chip-icon-color);
}
.chip .avatar ~ span {
  margin-left: 0;
}
.chip-lg {
  --bs-chip-padding-x: var(--bs-spacing-s);
  --bs-chip-text-size: var(--bs-label-font-size-m);
}
.chip-primary, .chip-secondary, .chip-success, .chip-danger, .chip-warning {
  --bs-chip-background-color: transparent;
}
.chip.chip-primary {
  --bs-chip-text-color: var(--bs-color-text-primary);
  --bs-chip-border-color: var(--bs-color-border-primary);
}
.chip.chip-secondary {
  --bs-chip-text-color: var(--bs-color-text-secondary);
  --bs-chip-border-color: var(--bs-color-border-secondary);
}
.chip.chip-success {
  --bs-chip-text-color: var(--bs-color-text-success);
  --bs-chip-border-color: var(--bs-color-border-success);
}
.chip.chip-danger {
  --bs-chip-text-color: var(--bs-color-text-danger);
  --bs-chip-border-color: var(--bs-color-border-danger);
}
.chip.chip-warning {
  --bs-chip-text-color: var(--bs-color-text-warning);
  --bs-chip-border-color: var(--bs-color-border-warning);
}
.chip.chip-disabled {
  --bs-chip-background-color: var(--bs-color-background-disabled);
  --bs-chip-text-color: var(--bs-color-text-disabled);
}
.chip.chip-disabled:hover {
  cursor: not-allowed;
}
.chip.chip-disabled button {
  cursor: not-allowed;
}
.chip.chip-disabled button .icon {
  fill: var(--bs-icon-disabled);
}
.chip.chip-disabled > .icon {
  fill: var(--bs-icon-disabled);
}
.chip.chip-disabled .avatar img {
  filter: grayscale(100%);
}

a.chip:not(.chip-disabled) {
  text-decoration: underline;
}

a.chip:hover:not(.chip-disabled) {
  --bs-chip-background-color: var(--bs-color-background-secondary-hover);
  --bs-chip-border-color: var(--bs-color-background-secondary-hover);
  --bs-chip-text-color: var(--bs-chip-link-hover);
  transition: all var(--bs-transition-instant) ease-in-out;
  cursor: pointer;
}
a.chip:hover:not(.chip-disabled) button .icon, a.chip:hover:not(.chip-disabled) > .icon {
  fill: var(--bs-icon-inverse);
}
a.chip:hover:not(.chip-disabled).chip-primary > .chip-label, a.chip:hover:not(.chip-disabled).chip-secondary > .chip-label, a.chip:hover:not(.chip-disabled).chip-success > .chip-label, a.chip:hover:not(.chip-disabled).chip-danger > .chip-label, a.chip:hover:not(.chip-disabled).chip-warning > .chip-label {
  color: var(--bs-color-text-inverse);
}
a.chip:hover:not(.chip-disabled).chip-primary {
  --bs-chip-background-color: var(--bs-color-background-primary-hover);
  --bs-chip-border-color: var(--bs-color-border-primary-hover);
}
a.chip:hover:not(.chip-disabled).chip-secondary {
  --bs-chip-background-color: var(--bs-color-background-secondary-hover);
  --bs-chip-border-color: var(--bs-color-border-secondary-hover);
}
a.chip:hover:not(.chip-disabled).chip-success {
  --bs-chip-background-color: var(--bs-color-background-success-hover);
  --bs-chip-border-color: var(--bs-color-border-success-hover);
}
a.chip:hover:not(.chip-disabled).chip-danger {
  --bs-chip-background-color: var(--bs-color-background-danger-hover);
  --bs-chip-border-color: var(--bs-color-border-danger-hover);
}
a.chip:hover:not(.chip-disabled).chip-warning {
  --bs-chip-background-color: var(--bs-color-background-warning-hover);
  --bs-chip-border-color: var(--bs-color-border-warning-hover);
}

::slotted(it-icon) {
  display: inline-flex;
}

:host([is-disabled]) ::slotted(it-icon) {
  --bs-icon-primary: var(--bs-icon-disabled);
  --bs-icon-secondary: var(--bs-icon-disabled);
  --bs-icon-success: var(--bs-icon-disabled);
  --bs-icon-danger: var(--bs-icon-disabled);
  --bs-icon-warning: var(--bs-icon-disabled);
  --bs-icon-default: var(--bs-icon-disabled);
}

:host ::slotted(it-icon) {
  --bs-icon-default: var(--bs-chip-icon-color);
}

:host([is-disabled]) ::slotted(it-button) {
  cursor: not-allowed !important;
}

/* Hover on the chip */
:host a:hover ::slotted(it-icon) {
  --bs-icon-primary: var(--bs-chip-text-color);
  --bs-icon-secondary: var(--bs-chip-text-color);
  --bs-icon-success: var(--bs-chip-text-color);
  --bs-icon-danger: var(--bs-chip-text-color);
  --bs-icon-warning: var(--bs-chip-text-color);
  --bs-icon-default: var(--bs-chip-text-color);
  --bs-chip-icon-color: var(--bs-chip-text-color);
}`;let h=class extends wt{constructor(){super(...arguments),this.dismissable=!1,this.size="sm",this.avatar="",this.avatarAlt="",this.label="",this.href="",this.a11yDescription="",this.variant="",this.isDisabled=!1}getAvatarSize(){return this.size==="lg"?"sm":"xs"}updateIcon(){if(this.icon.length){const t=this.icon[0];this.size==="lg"?t.size="sm":t.size="xs",t.color=this.variant??""}}updated(){this.dismissable&&(this.closeButton.length?this.closeButton.forEach(t=>{var e,i;(t.tagName.toLowerCase()==="it-button"&&!t.hasAttribute("it-aria-label")&&((e=t.textContent)==null?void 0:e.trim().length)===0||t.tagName.toLowerCase()==="button"&&!t.hasAttribute("aria-label")&&((i=t.textContent)==null?void 0:i.trim().length)===0)&&this.logger.warn("Dismiss button lacks both a `label`, an `aria-label` and text content. Providing an accessible label or visually hidden text content is strongly recommended.")}):this.logger.warn('The `dismissable` property is enabled, but no <button slot="dismiss-button"> was found. This button is required to allow chip removal.')),this.avatar&&!this.avatarAlt&&this.logger.warn("Avatar image provided without an alternative text (`avatarAlt`). This negatively impacts accessibility compliance."),this.updateIcon()}render(){const t=this.getAvatarSize(),i={xs:"1rem",sm:"1.5rem",md:"2.5rem",lg:"3.5rem",xl:"5rem",xxl:"7rem"}[t],a={chip:!0,[`chip-${this.size}`]:this.size,[`chip-${this.variant}`]:!!this.variant&&!this.isDisabled,"chip-disabled":this.isDisabled},o=d`
      ${this.a11yDescription?d`<span class="visually-hidden">${this.a11yDescription}</span>`:F}
      <slot name="icon"></slot>
      ${this.avatar?d`
            <it-avatar
              size="${t}"
              src="${this.avatar}"
              alt="${this.avatarAlt}"
              style="height: ${i}"
            ></it-avatar>
          `:null}
      <span class="chip-label">${this.label}</span>
      <slot name="dismiss-button"></slot>
    `;return this.href?d`<a class="${P(a)}" part="chip focusable" href="${this.href}">${o}</a>`:d`<div class="${P(a)}" part="chip">${o}</div>`}};h.styles=Pt;r([c({type:Boolean,reflect:!0}),n("design:type",Object)],h.prototype,"dismissable",void 0);r([c({type:String,reflect:!0}),n("design:type",String)],h.prototype,"size",void 0);r([c({type:String,reflect:!0}),n("design:type",Object)],h.prototype,"avatar",void 0);r([c({type:String,reflect:!0,attribute:"avatar-alt"}),n("design:type",Object)],h.prototype,"avatarAlt",void 0);r([c({type:String,reflect:!0}),n("design:type",Object)],h.prototype,"label",void 0);r([c({type:String,reflect:!0}),n("design:type",Object)],h.prototype,"href",void 0);r([c({type:String,reflect:!0,attribute:"a11y-description"}),n("design:type",Object)],h.prototype,"a11yDescription",void 0);r([c({type:String,reflect:!0}),n("design:type",String)],h.prototype,"variant",void 0);r([c({type:Boolean,reflect:!0,attribute:"is-disabled"}),n("design:type",Object)],h.prototype,"isDisabled",void 0);r([vt({slot:"dismiss-button",flatten:!0}),n("design:type",Array)],h.prototype,"closeButton",void 0);r([vt({slot:"icon",flatten:!0}),n("design:type",Array)],h.prototype,"icon",void 0);h=r([$t("it-chip")],h);const jt={title:"Componenti/Chip",component:"it-chip",tags:["autodocs"],args:{size:"sm",label:"Etichetta",href:void 0,variant:"primary",isDisabled:!1,avatar:"",avatarAlt:"Avatar",a11yDescription:"",dismissable:!1,withIcon:!1,withDismissButton:!1},argTypes:{size:{control:"select",description:"Dimensione del chip (`sm` o `lg`).",options:Dt,table:{defaultValue:{summary:"sm"}}},label:{control:"text",description:"Testo mostrato all'interno della chip."},href:{control:"text",description:"Se valorizzato, la chip sarà un link (elemento `<a>`)."},variant:{control:"select",description:"Colore della chip, secondo le varianti di Bootstrap Italia.",options:At},dismissable:{control:"boolean",description:"Indica che la chip può essere chiusa, ma non inserisce alcun pulsante automaticamente. Il pulsante deve essere inserito nello slot `dismiss-button` dall'utilizzatore, comprensivo di eventuale JavaScript per handling di eventi. Per un esempio completo con Javascript, vedi la story [Chip con chiusura](?path=/story/componenti-chip--chip-con-chiusura).",table:{defaultValue:{summary:"false"}}},isDisabled:{control:"boolean",description:"Disabilita la chip. Utile in contesti non interattivi o di sola lettura.",table:{defaultValue:{summary:"false"}}},avatar:{control:"text",description:"Percorso a un'immagine da mostrare come avatar, es. [randomuser.me](https://randomuser.me/api/portraits/men/46.jpg).",table:{defaultValue:{summary:"https://randomuser.me/api/portraits/men/46.jpg"}}},avatarAlt:{control:"text",description:"Testo alternativo per l'immagine dell'avatar, utile per l'accessibilità.",table:{defaultValue:{summary:"Alt avatar"}}},a11yDescription:{control:"text",description:`Testo descrittivo aggiuntivo per la chip, utile per l'accessibilità. Viene inserito come contenuto visivamente nascosto all'inizio della chip, ad esempio per specificare a che contenuto si fa riferimento, o assegnare una dicitur come "Argomento:".`,table:{defaultValue:{summary:""}}},withIcon:{control:"boolean",description:"Simula la presenza di un'icona nella chip. Non è una proprietà del componente, ma serve per mostrare composizioni nel playground interattivo."},withDismissButton:{control:"boolean",description:"Simula la presenza di un pulsante di rimozione nella chip. Non è una proprietà del componente, ma serve per mostrare composizioni nel playground interattivo."}},parameters:{docs:{description:{component:`
<Description>Elementi compatti che rappresentano un input, attributo o azione.</Description>
Il componente \`<it-chip>\` si compone principalmente di una label testuale e, opzionalmente, di:

- un avatar (immagine) a sinistra, tramite la proprietà \`avatar\`;
- un'icona inserita nello slot \`icon\`;
- un pulsante di chiusura nello slot \`dismiss-button\`, per le chip cancellabili/rimuovibili (la logica di rimozione è a carico dell'utilizzatore, vedi sezione dedicata).

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/chips/).
`}}}},qt=(s="Elimina etichetta",t=!1,e="Aria description")=>d`
  <it-button
    slot="dismiss-button"
    it-aria-label="${s}"
    it-aria-disabled="${t}"
    it-aria-description="${e}"
    ?icon=${!0}
    @click=${i=>{if(t){i.preventDefault(),i.stopPropagation();return}const a=i.currentTarget.closest("it-chip");a&&a.remove()}}
    @keydown=${i=>{if(t){i.preventDefault(),i.stopPropagation();return}if(i.key==="Enter"||i.key===" "){const a=i.currentTarget.closest("it-chip");a&&a.remove()}}}
  >
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
`,Bt=(s,t)=>d`
  <it-icon slot="icon" name="it-github" size="${t==="lg"?"sm":"xs"}" color=${s}></it-icon>
`,_t=s=>{const{avatar:t,avatarAlt:e,withIcon:i,label:a,size:o,variant:l,withDismissButton:m,dismissable:y,isDisabled:z,href:Et,id:xt,a11yDescription:Ct}=s;return d`
    <it-chip
      label="${a??""}"
      size="${o??"sm"}"
      variant="${l??""}"
      ?dismissable=${y}
      ?is-disabled=${z}
      href="${L(Et||void 0)}"
      avatar="${L(t||void 0)}"
      avatar-alt="${L(e||void 0)}"
      a11y-description="${Ct}"
      ?id="${xt}"
      >${i?Bt(l,o):F}${y&&m?qt("I am dismissable",z):F}</it-chip
    >
  `},E={...jt,name:"Esempio interattivo",args:{variant:"primary"},tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:s=>d`${_t(s)}`},x={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nPer la personalizzazione degli stili si può usare il selettore `::part` passando il valore `chip`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).\n"}}},render:()=>d`<div class="hide-preview"></div>`},C={name:"Variante con link",args:{size:"sm",variant:"",href:"#"},render:()=>d` <it-chip label="Etichetta" size="sm" variant="" href="#"></it-chip> `},V={name:"Varianti di colore",args:{label:"Etichetta",size:"sm",dismissable:!1},parameters:{docs:{description:{story:`
Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:
`}}},render:()=>d`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning"></it-chip>
    </div>
  `},k={name:"Varianti di colore link",args:{label:"Etichetta",size:"sm",dismissable:!1},parameters:{docs:{description:{story:`

`}}},render:()=>d`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning" href="#"></it-chip>
    </div>
  `},S={name:"Varianti di dimensione",args:{size:"sm",variant:"",dismissable:!0},render:()=>d`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <it-chip label="Etichetta" size="sm" variant="" dismissable></it-chip>
      <it-chip label="Etichetta" size="lg" variant="" dismissable></it-chip>
    </div>
  `},$={name:"Chip con chiusura",render:()=>d`
    <it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        it-aria-description="Puoi premere per eliminare la chip."
        @click=${s=>{const t=s.currentTarget.closest("it-chip");t&&t.remove()}}
        @keydown=${s=>{if(s.key==="Enter"||s.key===" "){s.preventDefault();const t=s.currentTarget.closest("it-chip");t&&t.remove()}}}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  `,parameters:{docs:{canvas:{sourceState:"shown"},description:{story:"\nQuesta composizione mostra una chip con funzionalità di chiusura.\n\nLa proprietà `dismissable` **non aggiunge automaticamente il pulsante**: è responsabilità dell'utilizzatore fornire un `<it-button>` con `slot=\"dismiss-button\"` e logica di rimozione/logiche di esecuzione.\nL'icona di chiusura deve avere dimensione `sm` per rispettare il design.\nIl codice JS dell'esempio gestisce la rimozione della chip sia via click che via tastiera (`Enter` o `Spazio`).\n\n"},source:{code:`<it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
  <it-button
    slot="dismiss-button"
    icon
    it-aria-label="Elimina etichetta"
    it-aria-description="Puoi premere per eliminare la chip."
  >
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
</it-chip>

<script type="module">
  const dismissButtons = document.querySelectorAll('it-chip#chip-dismissable [slot="dismiss-button"]');

  dismissButtons.forEach((btn) => {
    const removeChip = (e) => {
      const chip = btn.closest('it-chip');
      if (chip) chip.remove();
    };

    btn.addEventListener('click', removeChip);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        removeChip(e);
      }
    });
  });
<\/script>

`,language:"html"}}}},A={name:"Chip disabilitata",args:{isDisabled:!0},parameters:{docs:{description:{story:"\nAggiungendo l'attributo `is-disabled` si ottiene una chip disabilitata.\n"}}},render:s=>d`
    <it-chip label="Etichetta" size="sm" variant="${s.variant}" dismissable is-disabled>
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        it-aria-disabled="true"
        it-aria-description="Questa chip è disabilitata e non può essere rimossa."
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  `},D={name:"Chip con avatar",parameters:{docs:{description:{story:"\nLe chip possono includere un avatar utilizzando gli attributi `avatar` e `avatar-alt`.\n"}}},render:()=>d`
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <it-chip
        label="Mario Rossi"
        size="sm"
        variant="primary"
        avatar="https://randomuser.me/api/portraits/men/46.jpg"
        avatar-alt="Mario Rossi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi Mario Rossi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip
        label="Anna Verdi"
        size="lg"
        variant="secondary"
        avatar="https://randomuser.me/api/portraits/women/32.jpg"
        avatar-alt="Anna Verdi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi Anna Verdi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
    </div>
  `},I={name:"Chip con icona",parameters:{docs:{description:{story:"\nLe chip possono includere un'icona utilizzando lo slot `icon` con il componente it-icon.\n"}}},render:()=>d`
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <it-chip label="Download" size="sm" variant="primary" dismissable>
        <it-icon slot="icon" name="it-download"></it-icon>
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi download"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip label="Carica file" size="lg" variant="success" dismissable>
        <it-icon slot="icon" name="it-upload"></it-icon>
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi carica file"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip href="#" label="Preferiti" size="sm" variant="warning">
        <it-icon slot="icon" name="it-star-full"></it-icon>
      </it-chip>
    </div>
  `};var j,q,B;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  args: {
    variant: 'primary'
  },
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\`\${renderComponent(params)}\`
}`,...(B=(q=E.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var _,N,U;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    // assicura che si apra la tab Docs anziché Canvas
    docs: {
      canvas: {
        hidden: true,
        sourceState: 'none'
      },
      // nasconde solo il canvas nella docs page
      description: {
        story: \`
Per la personalizzazione degli stili si può usare il selettore \\\`::part\\\` passando il valore \\\`chip\\\`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...(U=(N=x.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var H,Q,W;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Variante con link',
  args: {
    size: 'sm',
    variant: '',
    href: '#'
  },
  render: () => html\` <it-chip label="Etichetta" size="sm" variant="" href="#"></it-chip> \`
}`,...(W=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var J,G,K;V.parameters={...V.parameters,docs:{...(J=V.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Varianti di colore',
  args: {
    label: 'Etichetta',
    size: 'sm',
    dismissable: false
  },
  parameters: {
    docs: {
      description: {
        story: \`
Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:
\`
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning"></it-chip>
    </div>
  \`
}`,...(K=(G=V.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Z,X,Y;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Varianti di colore link',
  args: {
    label: 'Etichetta',
    size: 'sm',
    dismissable: false
  },
  parameters: {
    docs: {
      description: {
        story: \`

\`
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning" href="#"></it-chip>
    </div>
  \`
}`,...(Y=(X=k.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var tt,it,et;S.parameters={...S.parameters,docs:{...(tt=S.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  name: 'Varianti di dimensione',
  args: {
    size: 'sm',
    variant: '',
    dismissable: true
  },
  render: () => html\`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <it-chip label="Etichetta" size="sm" variant="" dismissable></it-chip>
      <it-chip label="Etichetta" size="lg" variant="" dismissable></it-chip>
    </div>
  \`
}`,...(et=(it=S.parameters)==null?void 0:it.docs)==null?void 0:et.source}}};var at,st,ot;$.parameters={...$.parameters,docs:{...(at=$.parameters)==null?void 0:at.docs,source:{originalSource:`{
  name: 'Chip con chiusura',
  render: () => html\`
    <it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        it-aria-description="Puoi premere per eliminare la chip."
        @click=\${(e: Event) => {
    const chip = (e.currentTarget as HTMLElement).closest('it-chip');
    if (chip) chip.remove();
  }}
        @keydown=\${(e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const chip = (e.currentTarget as HTMLElement).closest('it-chip');
      if (chip) chip.remove();
    }
  }}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  \`,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: \`
Questa composizione mostra una chip con funzionalità di chiusura.

La proprietà \\\`dismissable\\\` **non aggiunge automaticamente il pulsante**: è responsabilità dell'utilizzatore fornire un \\\`<it-button>\\\` con \\\`slot="dismiss-button"\\\` e logica di rimozione/logiche di esecuzione.
L'icona di chiusura deve avere dimensione \\\`sm\\\` per rispettare il design.
Il codice JS dell'esempio gestisce la rimozione della chip sia via click che via tastiera (\\\`Enter\\\` o \\\`Spazio\\\`).

\`
      },
      source: {
        code: \`<it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
  <it-button
    slot="dismiss-button"
    icon
    it-aria-label="Elimina etichetta"
    it-aria-description="Puoi premere per eliminare la chip."
  >
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
</it-chip>

<script type="module">
  const dismissButtons = document.querySelectorAll('it-chip#chip-dismissable [slot="dismiss-button"]');

  dismissButtons.forEach((btn) => {
    const removeChip = (e) => {
      const chip = btn.closest('it-chip');
      if (chip) chip.remove();
    };

    btn.addEventListener('click', removeChip);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        removeChip(e);
      }
    });
  });
<\/script>

\`,
        language: 'html'
      }
    }
  }
}`,...(ot=(st=$.parameters)==null?void 0:st.docs)==null?void 0:ot.source}}};var rt,nt,ct;A.parameters={...A.parameters,docs:{...(rt=A.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  name: 'Chip disabilitata',
  args: {
    isDisabled: true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Aggiungendo l'attributo \\\`is-disabled\\\` si ottiene una chip disabilitata.
\`
      }
    }
  },
  render: args => html\`
    <it-chip label="Etichetta" size="sm" variant="\${args.variant}" dismissable is-disabled>
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        it-aria-disabled="true"
        it-aria-description="Questa chip è disabilitata e non può essere rimossa."
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  \`
}`,...(ct=(nt=A.parameters)==null?void 0:nt.docs)==null?void 0:ct.source}}};var lt,dt,pt;D.parameters={...D.parameters,docs:{...(lt=D.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  name: 'Chip con avatar',
  parameters: {
    docs: {
      description: {
        story: \`
Le chip possono includere un avatar utilizzando gli attributi \\\`avatar\\\` e \\\`avatar-alt\\\`.
\`
      }
    }
  },
  render: () => html\`
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <it-chip
        label="Mario Rossi"
        size="sm"
        variant="primary"
        avatar="https://randomuser.me/api/portraits/men/46.jpg"
        avatar-alt="Mario Rossi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi Mario Rossi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip
        label="Anna Verdi"
        size="lg"
        variant="secondary"
        avatar="https://randomuser.me/api/portraits/women/32.jpg"
        avatar-alt="Anna Verdi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi Anna Verdi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
    </div>
  \`
}`,...(pt=(dt=D.parameters)==null?void 0:dt.docs)==null?void 0:pt.source}}};var ht,mt,ut;I.parameters={...I.parameters,docs:{...(ht=I.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  name: 'Chip con icona',
  parameters: {
    docs: {
      description: {
        story: \`
Le chip possono includere un'icona utilizzando lo slot \\\`icon\\\` con il componente it-icon.
\`
      }
    }
  },
  render: () => html\`
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <it-chip label="Download" size="sm" variant="primary" dismissable>
        <it-icon slot="icon" name="it-download"></it-icon>
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi download"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip label="Carica file" size="lg" variant="success" dismissable>
        <it-icon slot="icon" name="it-upload"></it-icon>
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi carica file"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip href="#" label="Preferiti" size="sm" variant="warning">
        <it-icon slot="icon" name="it-star-full"></it-icon>
      </it-chip>
    </div>
  \`
}`,...(ut=(mt=I.parameters)==null?void 0:mt.docs)==null?void 0:ut.source}}};const Xt=["EsempioInterattivo","PersonalizzazioneDegliStili","VarianteConLink","VariantiColore","VariantiColoreLink","VariantiDimensione","ChipConChiusura","ChipDisabilitata","ChipConAvatar","ChipConIcona"];export{D as ChipConAvatar,$ as ChipConChiusura,I as ChipConIcona,A as ChipDisabilitata,E as EsempioInterattivo,x as PersonalizzazioneDegliStili,C as VarianteConLink,V as VariantiColore,k as VariantiColoreLink,S as VariantiDimensione,Xt as __namedExportsOrder,jt as default};
