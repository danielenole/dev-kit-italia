import{i as kt,E as j,x as d,a as Vt}from"./lit-element-DvQWNfDj.js";import{a as $t,r as bt,e as St,n as l,t as At,o as L}from"./query-Bx2OwlQ7.js";import"./it-icon-FbjACWbu.js";import"./it-button-BjN_fu7P.js";import{e as T}from"./class-map-4X9Nymdy.js";import"./iframe-Bt5dub1B.js";import"./directive-CvdRHFdJ.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function vt(s){return(t,e)=>{const{slot:i,selector:a}=s??{},r="slot"+(i?`[name=${i}]`:":not([name])");return $t(t,e,{get(){var u;const c=(u=this.renderRoot)==null?void 0:u.querySelector(r),h=(c==null?void 0:c.assignedElements(s))??[];return a===void 0?h:h.filter(z=>z.matches(a))}})}}const Dt=["primary","secondary","success","danger","warning",""],It=["sm","lg"];function o(s,t,e,i){var a=arguments.length,r=a<3?t:i,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var h=s.length-1;h>=0;h--)(c=s[h])&&(r=(a<3?c(r):a>3?c(t,e,r):c(t,e))||r);return a>3&&r&&Object.defineProperty(t,e,r),r}function n(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)}function ft(s){var t,e,i="";if(typeof s=="string"||typeof s=="number")i+=s;else if(typeof s=="object")if(Array.isArray(s)){var a=s.length;for(t=0;t<a;t++)s[t]&&(e=ft(s[t]))&&(i&&(i+=" "),i+=e)}else for(e in s)s[e]&&(i&&(i+=" "),i+=e);return i}function Lt(){for(var s,t,e=0,i="",a=arguments.length;e<a;e++)(s=arguments[e])&&(t=ft(s))&&(i&&(i+=" "),i+=t);return i}const F=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:v}=window;let b,R="ltr",O="en";const gt=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function yt(){gt&&(R=document.documentElement.dir||"ltr",O=document.documentElement.lang||navigator.language),[...F.keys()].forEach(s=>{const t=s;typeof t.requestUpdate=="function"&&t.requestUpdate()})}if(gt){const s=new MutationObserver(yt);R=document.documentElement.dir||"ltr",O=document.documentElement.lang||navigator.language,s.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function zt(...s){s.forEach(t=>{const e=t.$code.toLowerCase();v.has(e)?v.set(e,{...v.get(e),...t}):v.set(e,t),b||(b=t)}),yt()}window.registerTranslation=zt;class Mt{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){F.add(this.host)}hostDisconnected(){F.delete(this.host)}dir(){return`${this.host.dir||R}`.toLowerCase()}lang(){return`${this.host.lang||O}`.toLowerCase()}getTranslationData(t){var h;const e=new Intl.Locale(t.replace(/_/g,"-")),i=e==null?void 0:e.language.toLowerCase(),a=((h=e==null?void 0:e.region)==null?void 0:h.toLowerCase())??"",r=v.get(`${i}-${a}`),c=v.get(i);return{locale:e,language:i,region:a,primary:r,secondary:c}}exists(t,e){const{primary:i,secondary:a}=this.getTranslationData(e.lang??this.lang()),r={includeFallback:!1,...e};return!!(i&&i[t]||a&&a[t]||r.includeFallback&&b&&b[t])}term(t,...e){const{primary:i,secondary:a}=this.getTranslationData(this.lang());let r;if(i&&i[t])r=i[t];else if(a&&a[t])r=a[t];else if(b&&b[t])r=b[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...e):r}date(t,e){const i=new Date(t);return new Intl.DateTimeFormat(this.lang(),e).format(i)}number(t,e){const i=Number(t);return Number.isNaN(i)?"":new Intl.NumberFormat(this.lang(),e).format(i)}relativeTime(t,e,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,e)}}const jt=s=>class extends s{constructor(){super(...arguments),this.localize=new Mt(this)}get $localize(){return this.localize}$t(t){return this.localize.term(t)}$d(t,e){return this.localize.date(t,e)}$n(t,e){return this.localize.number(t,e)}};class Ft{constructor(t){this.tag=t}format(t,e){return[`[${this.tag}] ${e}`]}warn(t){console.warn(...this.format("warn",t))}error(t){console.error(...this.format("error",t))}info(t){console.info(...this.format("info",t))}}class xt extends Vt{constructor(){super(),this.composeClass=Lt,this.logger=new Ft(this.tagName.toLowerCase())}get _ariaAttributes(){const t={};for(const e of this.getAttributeNames())e==="it-role"?t.role=this.getAttribute(e):e.startsWith("it-aria-")&&(t[e.replace(/^it-/,"")]=this.getAttribute(e));return t}generateId(t){return`${t}-${Math.random().toString(36).slice(2)}`}addFocus(t){}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}connectedCallback(){var e;super.connectedCallback();const t=((e=this.id)==null?void 0:e.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(t)}}const Rt=jt(xt),f=new WeakMap,g=new WeakMap,y=new WeakMap,M=new WeakSet,x=new WeakMap;class Ot{constructor(t,e){this.handleFormData=i=>{const a=this.options.disabled(this.host),r=this.options.name(this.host),c=this.options.value(this.host),h=this.host.tagName.toLowerCase()==="it-button";this.host.isConnected&&!a&&!h&&typeof r=="string"&&r.length>0&&typeof c<"u"&&(Array.isArray(c)?c.forEach(u=>{i.formData.append(r,u.toString())}):i.formData.append(r,c.toString()))},this.handleFormSubmit=i=>{var c;const a=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((c=f.get(this.form))==null||c.forEach(h=>{this.setUserInteracted(h,!0)})),this.form&&!this.form.noValidate&&!a&&!r(this.host)&&i.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),x.set(this.host,[])},this.handleInteraction=i=>{const a=x.get(this.host);a.includes(i.type)||a.push(i.type),a.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const a of i)if(typeof a.checkValidity=="function"&&!a.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const a of i)if(typeof a.reportValidity=="function"&&!a.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:i=>{const a=i.form;if(a){const c=i.getRootNode().querySelector(`#${a}`);if(c)return c}return i.closest("form")},name:i=>i.name,value:i=>i.value,disabled:i=>i.disabled??!1,reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,a)=>{i.value=a},assumeInteractionOn:["it-input"],...e}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),x.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),x.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,f.has(this.form)?f.get(this.form).add(this.host):f.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),g.has(this.form)||(g.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),y.has(this.form)||(y.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=f.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),g.has(this.form)&&(this.form.reportValidity=g.get(this.form),g.delete(this.form)),y.has(this.form)&&(this.form.checkValidity=y.get(this.form),y.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?M.add(t):M.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",e&&(i.name=e.name,i.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(a=>{e.hasAttribute(a)&&i.setAttribute(a,e.getAttribute(a))})),this.form.append(i),i.click(),i.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,i=!!M.has(e),a=!!e.required;e.toggleAttribute("data-required",a),e.toggleAttribute("data-optional",!a),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&i),e.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}}const Tt={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};zt(Tt);class p extends Rt{constructor(){super(...arguments),this.formControlController=new Ot(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var t;return(t=this.inputElement)==null?void 0:t.validity}checkValidity(){var e;return((e=this.inputElement)==null?void 0:e.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.inputElement.checkValidity();return this.handleValidationMessages(),t}setCustomValidity(t){this.inputElement.setCustomValidity(t),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(t){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(t){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(t){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(t){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const t=this.inputElement.validity;t.valueMissing?this.setCustomValidity(this.$t("validityRequired")):t.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):t.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):t.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):t.typeMismatch||t.rangeUnderflow||t.rangeOverflow||t.stepMismatch||t.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}_handleChange(t){const e=t.target;let i;if(e instanceof HTMLInputElement)switch(e.type){case"checkbox":case"radio":i=e.checked;break;case"file":i=e.files;break;default:i=e.value}else e instanceof HTMLSelectElement&&e.multiple?i=Array.from(e.selectedOptions).map(a=>a.value):i=e.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:i,el:e},bubbles:!0,composed:!0}))}updated(t){var e;(e=super.updated)==null||e.call(this,t),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}o([bt(),n("design:type",Object)],p.prototype,"_touched",void 0);o([St(".it-form__control"),n("design:type",HTMLInputElement)],p.prototype,"inputElement",void 0);o([l({type:String,reflect:!0}),n("design:type",Object)],p.prototype,"name",void 0);o([l({reflect:!0}),n("design:type",Object)],p.prototype,"value",void 0);o([l({type:Boolean,reflect:!0}),n("design:type",Object)],p.prototype,"disabled",void 0);o([l({reflect:!0,type:String}),n("design:type",Object)],p.prototype,"form",void 0);o([l({type:Boolean,reflect:!0,attribute:"custom-validation"}),n("design:type",Object)],p.prototype,"customValidation",void 0);o([l({attribute:"validity-message",reflect:!0}),n("design:type",String)],p.prototype,"validationText",void 0);o([l(),n("design:type",String)],p.prototype,"pattern",void 0);o([l(),n("design:type",Object)],p.prototype,"min",void 0);o([l(),n("design:type",Object)],p.prototype,"max",void 0);o([l(),n("design:type",Object)],p.prototype,"step",void 0);o([l({type:Number}),n("design:type",Object)],p.prototype,"minlength",void 0);o([l({type:Number}),n("design:type",Object)],p.prototype,"maxlength",void 0);o([l({type:Boolean,reflect:!0}),n("design:type",Object)],p.prototype,"required",void 0);o([bt(),n("design:type",Object)],p.prototype,"validationMessage",void 0);var Pt=kt`/***************************** 1 ****************************************/
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

.avatar {
  --bs-avatar-background: var(--bs-color-background-secondary-lighter);
  --bs-avatar-text-color: var(--bs-color-text-secondary);
  --bs-avatar-font-size: var(--bs-font-size-3);
  --bs-avatar-font-weight: var(--bs-font-weight-solid);
  --bs-avatar-icon-size: var(--bs-icon-size-s);
  --bs-avatar-radius: var(--bs-radius-circle);
  --bs-avatar-size: 2.5rem;
  --bs-avatar-dot-size: 12px;
  --bs-avatar-dot-border-size: 2px;
  --bs-avatar-dot-border-color: var(--bs-color-border-inverse);
  --bs-avatar-dot-offset-right: 0;
  --bs-avatar-dot-offset-top: 4px;
  --bs-avatar-dot-offset-bottom: 0;
  --bs-avatar-overlay-background: var(--bs-color-background-emphasis);
}

.avatar {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--bs-avatar-size);
  height: var(--bs-avatar-size);
  border-radius: var(--bs-avatar-radius);
  background: var(--bs-avatar-background);
  color: var(--bs-avatar-text-color);
  transition: background-color var(--bs-transition-instant);
}
.avatar.avatar-primary {
  --bs-avatar-background: var(--bs-theme-primary);
  --bs-avatar-text-color: var(--bs-color-text-inverse);
}
.avatar.avatar-secondary {
  --bs-avatar-background: var(--bs-color-background-secondary);
  --bs-avatar-text-color: var(--bs-color-text-inverse);
}
.avatar.size-xs {
  --bs-avatar-dot-border-size: 1px;
  --bs-avatar-font-size: 0.625rem;
  --bs-avatar-size: 1rem;
  --bs-avatar-icon-size: 0.625rem;
}
.avatar.size-sm {
  --bs-avatar-dot-border-size: 1px;
  --bs-avatar-font-size: var(--bs-font-size-1);
  --bs-avatar-size: 1.5rem;
  --bs-avatar-icon-size: var(--bs-icon-size-xs);
}
.avatar.size-md {
  --bs-avatar-font-size: var(--bs-font-size-4);
  --bs-avatar-size: 2.5rem;
  --bs-avatar-icon-size: var(--bs-icon-size-s);
  --bs-avatar-dot-offset-right: -2px;
}
.avatar.size-lg {
  --bs-avatar-font-size: var(--bs-font-size-6);
  --bs-avatar-size: 3.5rem;
  --bs-avatar-icon-size: var(--bs-icon-size-m);
  --bs-avatar-dot-offset-right: -2px;
  --bs-avatar-dot-size: 14px;
}
.avatar.size-xl {
  --bs-avatar-font-size: var(--bs-font-size-9);
  --bs-avatar-size: 5rem;
  --bs-avatar-icon-size: var(--bs-icon-size-l);
  --bs-avatar-dot-size: 16px;
}
.avatar.size-xxl {
  --bs-avatar-font-size: var(--bs-font-size-11);
  --bs-avatar-size: 7rem;
  --bs-avatar-icon-size: var(--bs-icon-size-xl);
  --bs-avatar-dot-size: 20px;
  --bs-avatar-dot-offset-right: 4px;
}
.avatar-wrapper {
  position: relative;
  z-index: 1;
}
.avatar-presence, .avatar-status {
  position: absolute;
  right: var(--bs-avatar-dot-offset-right);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--bs-avatar-dot-size);
  height: var(--bs-avatar-dot-size);
  border: var(--bs-avatar-dot-border-size) solid var(--bs-avatar-dot-border-color);
  border-radius: var(--bs-avatar-radius);
  background: hsl(210, 3%, 85%);
  color: var(--bs-color-text-inverse);
}
.avatar-presence .icon, .avatar-status .icon {
  stroke-width: 2px;
  stroke: var(--bs-icon-inverse);
}
.avatar-presence.active, .avatar-status.approved {
  background: var(--bs-color-background-success);
}
.avatar-presence.busy, .avatar-status.declined {
  background: hsl(350, 60%, 50%);
}
.avatar-presence {
  bottom: 8px;
}
.avatar-presence.hidden:after {
  position: absolute;
  top: 50%;
  left: 50%;
  content: "";
  width: calc(100% - 4px);
  height: calc(100% - 4px);
  border-radius: 50%;
  background: var(--bs-color-background-inverse);
  transform: translateX(-50%) translateY(-50%);
}
.avatar-status {
  top: var(--bs-avatar-dot-offset-top);
}
.avatar-status.notify {
  background: var(--bs-theme-primary);
}
.avatar img {
  width: 100%;
  height: 100%;
  border-radius: var(--bs-avatar-radius);
  object-fit: cover;
  object-position: center;
}
.avatar p {
  margin: 0;
  color: var(--bs-avatar-text-color);
  font-size: var(--bs-avatar-font-size);
  font-weight: var(--bs-avatar-font-weight);
  line-height: 1;
}
.avatar .icon {
  width: var(--bs-avatar-icon-size);
  height: var(--bs-avatar-icon-size);
}
.avatar ~ span {
  margin-left: var(--bs-spacing-xxs);
}

a.avatar::after,
a .avatar::after {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  border-radius: var(--bs-avatar-radius);
  opacity: 0;
  background: var(--bs-color-background-emphasis);
  transition: opacity 0.2s;
}
a.avatar:hover::after,
a .avatar:hover::after {
  opacity: 0.25;
}

a.avatar,
a.avatar:hover,
a.avatar:hover p,
a .avatar:hover,
a .avatar:hover p {
  text-decoration: none;
}

.avatar-dropdown {
  position: relative;
  overflow: visible;
}
.avatar-dropdown .dropdown {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 0;
}
.avatar-dropdown .dropdown-menu {
  margin-left: -27px;
}
.avatar-dropdown .btn-dropdown {
  padding: 0;
  color: inherit;
  font-size: var(--bs-label-font-size-xs);
  line-height: 0;
}
.avatar-dropdown .btn-dropdown:focus {
  box-shadow: none;
}
.avatar-dropdown .list-item {
  display: flex;
  align-items: center;
}
.avatar-dropdown .link-list {
  white-space: nowrap;
}

.avatar-extra-text {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 16px;
}
.avatar-extra-text .avatar {
  flex-shrink: 0;
}
.avatar-extra-text .extra-text {
  margin-left: var(--bs-spacing-s);
}
.avatar-extra-text .extra-text h3,
.avatar-extra-text .extra-text h4 {
  margin: 0;
  font-size: var(--bs-heading-6-font-size);
}
.avatar-extra-text .extra-text h3 a,
.avatar-extra-text .extra-text h4 a {
  display: inline-block;
}
.avatar-extra-text .extra-text p,
.avatar-extra-text .extra-text time {
  margin: 0;
  color: var(--bs-color-text-secondary);
  font-size: var(--bs-caption-font-size);
  text-transform: uppercase;
}

.avatar-group > li {
  margin-bottom: var(--bs-spacing-s);
  line-height: auto;
}
.avatar-group > li:last-child {
  margin-bottom: 0;
}
.avatar-group > li .list-item {
  display: inline-flex;
  align-items: center;
  padding: 0;
}

.avatar-group-stacked {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
}
.avatar-group-stacked li {
  list-style-type: none;
  line-height: 0;
}
.avatar-group-stacked li > .avatar {
  margin-left: -6px;
  border: 2px solid var(--bs-color-border-inverse);
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

:host img {
  width: 100%;
  height: 100%;
  border-radius: var(--bs-avatar-radius);
  object-fit: cover;
  object-position: center;
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
}`;let m=class extends xt{constructor(){super(...arguments),this.dismissable=!1,this.size="sm",this.avatar="",this.avatarAlt="",this.label="",this.href="",this.a11yDescription="",this.variant="",this.isDisabled=!1}getAvatarClass(){return this.composeClass("avatar",this.size==="lg"?"size-sm":"size-xs")}updateIcon(){if(this.icon.length){const t=this.icon[0];this.size==="lg"?t.size="sm":t.size="xs",t.color=this.variant??""}}updated(){this.dismissable&&(this.closeButton.length?this.closeButton.forEach(t=>{var e,i;(t.tagName.toLowerCase()==="it-button"&&!t.hasAttribute("it-aria-label")&&((e=t.textContent)==null?void 0:e.trim().length)===0||t.tagName.toLowerCase()==="button"&&!t.hasAttribute("aria-label")&&((i=t.textContent)==null?void 0:i.trim().length)===0)&&this.logger.warn("Dismiss button lacks both a `label`, an `aria-label` and text content. Providing an accessible label or visually hidden text content is strongly recommended.")}):this.logger.warn('The `dismissable` property is enabled, but no <button slot="dismiss-button"> was found. This button is required to allow chip removal.')),this.avatar&&!this.avatarAlt&&this.logger.warn("Avatar image provided without an alternative text (`avatarAlt`). This negatively impacts accessibility compliance."),this.updateIcon()}render(){const t={chip:!0,[`chip-${this.size}`]:this.size,[`chip-${this.variant}`]:!!this.variant&&!this.isDisabled,"chip-disabled":this.isDisabled},e=d`
      ${this.a11yDescription?d`<span class="visually-hidden">${this.a11yDescription}</span>`:j}
      <slot name="icon"></slot>
      ${this.avatar?d`<div class="${this.getAvatarClass()}"><img src=${this.avatar} alt="${this.avatarAlt}" /></div>`:null}
      <span class="chip-label">${this.label}</span>
      <slot name="dismiss-button"></slot>
    `;return this.href?d`<a class="${T(t)}" part="chip focusable" href="${this.href}">${e}</a>`:d`<div class="${T(t)}" part="chip">${e}</div>`}};m.styles=Pt;o([l({type:Boolean,reflect:!0}),n("design:type",Object)],m.prototype,"dismissable",void 0);o([l({type:String,reflect:!0}),n("design:type",String)],m.prototype,"size",void 0);o([l({type:String,reflect:!0}),n("design:type",Object)],m.prototype,"avatar",void 0);o([l({type:String,reflect:!0,attribute:"avatar-alt"}),n("design:type",Object)],m.prototype,"avatarAlt",void 0);o([l({type:String,reflect:!0}),n("design:type",Object)],m.prototype,"label",void 0);o([l({type:String,reflect:!0}),n("design:type",Object)],m.prototype,"href",void 0);o([l({type:String,reflect:!0,attribute:"a11y-description"}),n("design:type",Object)],m.prototype,"a11yDescription",void 0);o([l({type:String,reflect:!0}),n("design:type",String)],m.prototype,"variant",void 0);o([l({type:Boolean,reflect:!0,attribute:"is-disabled"}),n("design:type",Object)],m.prototype,"isDisabled",void 0);o([vt({slot:"dismiss-button",flatten:!0}),n("design:type",Array)],m.prototype,"closeButton",void 0);o([vt({slot:"icon",flatten:!0}),n("design:type",Array)],m.prototype,"icon",void 0);m=o([At("it-chip")],m);const qt={title:"Componenti/Chip",component:"it-chip",tags:["autodocs"],args:{size:"sm",label:"Etichetta",href:void 0,variant:"primary",isDisabled:!1,avatar:"",avatarAlt:"Avatar",a11yDescription:"",dismissable:!1,withIcon:!1,withDismissButton:!1},argTypes:{size:{control:"select",description:"Dimensione del chip (`sm` o `lg`).",options:It,table:{defaultValue:{summary:"sm"}}},label:{control:"text",description:"Testo mostrato all'interno della chip."},href:{control:"text",description:"Se valorizzato, la chip sarà un link (elemento `<a>`)."},variant:{control:"select",description:"Colore della chip, secondo le varianti di Bootstrap Italia.",options:Dt},dismissable:{control:"boolean",description:"Indica che la chip può essere chiusa, ma non inserisce alcun pulsante automaticamente. Il pulsante deve essere inserito nello slot `dismiss-button` dall'utilizzatore, comprensivo di eventuale JavaScript per handling di eventi. Per un esempio completo con Javascript, vedi la story [Chip con chiusura](?path=/story/componenti-chip--chip-con-chiusura).",table:{defaultValue:{summary:"false"}}},isDisabled:{control:"boolean",description:"Disabilita la chip. Utile in contesti non interattivi o di sola lettura.",table:{defaultValue:{summary:"false"}}},avatar:{control:"text",description:"Percorso a un'immagine da mostrare come avatar, es. [randomuser.me](https://randomuser.me/api/portraits/men/46.jpg).",table:{defaultValue:{summary:"https://randomuser.me/api/portraits/men/46.jpg"}}},avatarAlt:{control:"text",description:"Testo alternativo per l'immagine dell'avatar, utile per l'accessibilità.",table:{defaultValue:{summary:"Alt avatar"}}},a11yDescription:{control:"text",description:`Testo descrittivo aggiuntivo per la chip, utile per l'accessibilità. Viene inserito come contenuto visivamente nascosto all'inizio della chip, ad esempio per specificare a che contenuto si fa riferimento, o assegnare una dicitur come "Argomento:".`,table:{defaultValue:{summary:""}}},withIcon:{control:"boolean",description:"Simula la presenza di un'icona nella chip. Non è una proprietà del componente, ma serve per mostrare composizioni nel playground interattivo."},withDismissButton:{control:"boolean",description:"Simula la presenza di un pulsante di rimozione nella chip. Non è una proprietà del componente, ma serve per mostrare composizioni nel playground interattivo."}},parameters:{docs:{description:{component:`
<Description>Elementi compatti che rappresentano un input, attributo o azione.</Description>
Il componente \`<it-chip>\` si compone principalmente di una label testuale e, opzionalmente, di:

- un avatar (immagine) a sinistra, tramite la proprietà \`avatar\`;
- un'icona inserita nello slot \`icon\`;
- un pulsante di chiusura nello slot \`dismiss-button\`, per le chip cancellabili/rimuovibili (la logica di rimozione è a carico dell'utilizzatore, vedi sezione dedicata).

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/chips/).
`}}}},Bt=(s="Elimina etichetta",t=!1,e="Aria description")=>d`
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
`,_t=(s,t)=>d`
  <it-icon slot="icon" name="it-github" size="${t==="lg"?"sm":"xs"}" color=${s}></it-icon>
`,Nt=s=>{const{avatar:t,avatarAlt:e,withIcon:i,label:a,size:r,variant:c,withDismissButton:h,dismissable:u,isDisabled:z,href:wt,id:Et,a11yDescription:Ct}=s;return d`
    <it-chip
      label="${a??""}"
      size="${r??"sm"}"
      variant="${c??""}"
      ?dismissable=${u}
      ?is-disabled=${z}
      href="${L(wt||void 0)}"
      avatar="${L(t||void 0)}"
      avatar-alt="${L(e||void 0)}"
      a11y-description="${Ct}"
      ?id="${Et}"
      >${i?_t(c,r):j}${u&&h?Bt("I am dismissable",z):j}</it-chip
    >
  `},w={...qt,name:"Esempio interattivo",args:{variant:"primary"},tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:s=>d`${Nt(s)}`},E={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nPer la personalizzazione degli stili si può usare il selettore `::part` passando il valore `chip`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).\n"}}},render:()=>d`<div class="hide-preview"></div>`},C={name:"Variante con link",args:{size:"sm",variant:"",href:"#"},render:()=>d` <it-chip label="Etichetta" size="sm" variant="" href="#"></it-chip> `},k={name:"Varianti di colore",args:{label:"Etichetta",size:"sm",dismissable:!1},parameters:{docs:{description:{story:`
Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:
`}}},render:()=>d`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning"></it-chip>
    </div>
  `},V={name:"Varianti di colore link",args:{label:"Etichetta",size:"sm",dismissable:!1},parameters:{docs:{description:{story:`

`}}},render:()=>d`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning" href="#"></it-chip>
    </div>
  `},$={name:"Varianti di dimensione",args:{size:"sm",variant:"",dismissable:!0},render:()=>d`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="" dismissable></it-chip>
      <it-chip label="Etichetta" size="lg" variant="" dismissable></it-chip>
    </div>
  `},S={name:"Chip con chiusura",render:()=>d`
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
    <div class="d-flex gap-2 flex-wrap">
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
    <div class="d-flex gap-2 flex-wrap">
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
  `};var P,q,B;w.parameters={...w.parameters,docs:{...(P=w.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(B=(q=w.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var _,N,U;E.parameters={...E.parameters,docs:{...(_=E.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(U=(N=E.parameters)==null?void 0:N.docs)==null?void 0:U.source}}};var H,Q,W;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Variante con link',
  args: {
    size: 'sm',
    variant: '',
    href: '#'
  },
  render: () => html\` <it-chip label="Etichetta" size="sm" variant="" href="#"></it-chip> \`
}`,...(W=(Q=C.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var J,G,K;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
}`,...(K=(G=k.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var X,Y,Z;V.parameters={...V.parameters,docs:{...(X=V.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(Z=(Y=V.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,et,it;$.parameters={...$.parameters,docs:{...(tt=$.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  name: 'Varianti di dimensione',
  args: {
    size: 'sm',
    variant: '',
    dismissable: true
  },
  render: () => html\`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="" dismissable></it-chip>
      <it-chip label="Etichetta" size="lg" variant="" dismissable></it-chip>
    </div>
  \`
}`,...(it=(et=$.parameters)==null?void 0:et.docs)==null?void 0:it.source}}};var at,st,rt;S.parameters={...S.parameters,docs:{...(at=S.parameters)==null?void 0:at.docs,source:{originalSource:`{
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
}`,...(rt=(st=S.parameters)==null?void 0:st.docs)==null?void 0:rt.source}}};var ot,nt,ct;A.parameters={...A.parameters,docs:{...(ot=A.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
    <div class="d-flex gap-2 flex-wrap">
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
    <div class="d-flex gap-2 flex-wrap">
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
}`,...(ut=(mt=I.parameters)==null?void 0:mt.docs)==null?void 0:ut.source}}};const Yt=["EsempioInterattivo","PersonalizzazioneDegliStili","VarianteConLink","VariantiColore","VariantiColoreLink","VariantiDimensione","ChipConChiusura","ChipDisabilitata","ChipConAvatar","ChipConIcona"];export{D as ChipConAvatar,S as ChipConChiusura,I as ChipConIcona,A as ChipDisabilitata,w as EsempioInterattivo,E as PersonalizzazioneDegliStili,C as VarianteConLink,k as VariantiColore,V as VariantiColoreLink,$ as VariantiDimensione,Yt as __namedExportsOrder,qt as default};
