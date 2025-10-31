import{i as Pt,E as c,x as o,a as Ft}from"./iframe-CXDqws0b.js";import{r as Lt,e as Ot,n as p,o as h,t as Ut}from"./query-Bgk1JvUp.js";import{e as y}from"./class-map-Bnyd-BIz.js";import"./it-icon-CLY6zOjc.js";import"./it-dropdown-item-BhJzuVog.js";import"./preload-helper-Dp1pzeXC.js";import"./directive-CvdRHFdJ.js";function l(r,t,e,a){var i=arguments.length,n=i<3?t:a,m;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,t,e,a);else for(var g=r.length-1;g>=0;g--)(m=r[g])&&(n=(i<3?m(n):i>3?m(t,e,n):m(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n}function d(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)}function jt(r){var t,e,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var i=r.length;for(t=0;t<i;t++)r[t]&&(e=jt(r[t]))&&(a&&(a+=" "),a+=e)}else for(e in r)r[e]&&(a&&(a+=" "),a+=e);return a}function Dt(){for(var r,t,e=0,a="",i=arguments.length;e<i;e++)(r=arguments[e])&&(t=jt(r))&&(a&&(a+=" "),a+=t);return a}const O=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:x}=window;let f,U="ltr",D="en";const Vt=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function _t(){Vt&&(U=document.documentElement.dir||"ltr",D=document.documentElement.lang||navigator.language),[...O.keys()].forEach(r=>{const t=r;typeof t.requestUpdate=="function"&&t.requestUpdate()})}if(Vt){const r=new MutationObserver(_t);U=document.documentElement.dir||"ltr",D=document.documentElement.lang||navigator.language,r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function P(...r){r.forEach(t=>{const e=t.$code.toLowerCase();x.has(e)?x.set(e,{...x.get(e),...t}):x.set(e,t),f||(f=t)}),_t()}window.registerTranslation=P;class Gt{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){O.add(this.host)}hostDisconnected(){O.delete(this.host)}dir(){return`${this.host.dir||U}`.toLowerCase()}lang(){return`${this.host.lang||D}`.toLowerCase()}getTranslationData(t){var g;const e=new Intl.Locale(t.replace(/_/g,"-")),a=e==null?void 0:e.language.toLowerCase(),i=((g=e==null?void 0:e.region)==null?void 0:g.toLowerCase())??"",n=x.get(`${a}-${i}`),m=x.get(a);return{locale:e,language:a,region:i,primary:n,secondary:m}}exists(t,e){const{primary:a,secondary:i}=this.getTranslationData(e.lang??this.lang()),n={includeFallback:!1,...e};return!!(a&&a[t]||i&&i[t]||n.includeFallback&&f&&f[t])}term(t,...e){const{primary:a,secondary:i}=this.getTranslationData(this.lang());let n;if(a&&a[t])n=a[t];else if(i&&i[t])n=i[t];else if(f&&f[t])n=f[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...e):n}date(t,e){const a=new Date(t);return new Intl.DateTimeFormat(this.lang(),e).format(a)}number(t,e){const a=Number(t);return Number.isNaN(a)?"":new Intl.NumberFormat(this.lang(),e).format(a)}relativeTime(t,e,a){return new Intl.RelativeTimeFormat(this.lang(),a).format(t,e)}}const Bt=r=>class extends r{constructor(){super(...arguments),this.localize=new Gt(this)}get $localize(){return this.localize}$t(t){return this.localize.term(t)}$d(t,e){return this.localize.date(t,e)}$n(t,e){return this.localize.number(t,e)}};class qt{constructor(t){this.tag=t}format(t,e){return[`[${this.tag}] ${e}`]}warn(t){console.warn(...this.format("warn",t))}error(t){console.error(...this.format("error",t))}info(t){console.info(...this.format("info",t))}}class Wt extends Ft{constructor(){super(),this.composeClass=Dt,this.logger=new qt(this.tagName.toLowerCase())}get _ariaAttributes(){const t={};for(const e of this.getAttributeNames())e==="it-role"?t.role=this.getAttribute(e):e.startsWith("it-aria-")&&(t[e.replace(/^it-/,"")]=this.getAttribute(e));return t}generateId(t){return`${t}-${Math.random().toString(36).slice(2)}`}addFocus(t){}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}get focusElement(){return this}get prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}connectedCallback(){var e;super.connectedCallback();const t=((e=this.id)==null?void 0:e.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(t)}}const G=Bt(Wt),b=new WeakMap,z=new WeakMap,w=new WeakMap,F=new WeakSet,$=new WeakMap;class Qt{constructor(t,e){this.handleFormData=a=>{const i=this.options.disabled(this.host),n=this.options.name(this.host),m=this.options.value(this.host),g=this.host.tagName.toLowerCase(),It=g==="it-button";if(this.host.isConnected&&!i&&!It&&typeof n=="string"&&n.length>0&&typeof m<"u")switch(g){case"it-radio":this.host.checked&&a.formData.append(n,m);break;default:Array.isArray(m)?m.forEach(Nt=>{a.formData.append(n,Nt.toString())}):a.formData.append(n,m.toString())}},this.handleFormSubmit=a=>{var m;const i=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((m=b.get(this.form))==null||m.forEach(g=>{this.setUserInteracted(g,!0)})),this.form&&!this.form.noValidate&&!i&&!n(this.host)&&a.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),$.set(this.host,[])},this.handleInteraction=a=>{const i=$.get(this.host);i.includes(a.type)||i.push(a.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const a=this.form.querySelectorAll("*");for(const i of a)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const a=this.form.querySelectorAll("*");for(const i of a)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:a=>{const i=a.form;if(i){const m=a.getRootNode().querySelector(`#${i}`);if(m)return m}return a.closest("form")},name:a=>a.name,value:a=>a.value,disabled:a=>a.disabled??!1,reportValidity:a=>typeof a.reportValidity=="function"?a.reportValidity():!0,checkValidity:a=>typeof a.checkValidity=="function"?a.checkValidity():!0,setValue:(a,i)=>{a.value=i},assumeInteractionOn:["it-input"],...e}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),$.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),$.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,b.has(this.form)?b.get(this.form).add(this.host):b.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),z.has(this.form)||(z.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),w.has(this.form)||(w.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=b.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),z.has(this.form)&&(this.form.reportValidity=z.get(this.form),z.delete(this.form)),w.has(this.form)&&(this.form.checkValidity=w.get(this.form),w.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?F.add(t):F.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const a=document.createElement("button");a.type=t,a.style.position="absolute",a.style.width="0",a.style.height="0",a.style.clipPath="inset(50%)",a.style.overflow="hidden",a.style.whiteSpace="nowrap",e&&(a.name=e.name,a.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&a.setAttribute(i,e.getAttribute(i))})),this.form.append(a),a.click(),a.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,a=!!F.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&a),e.toggleAttribute("data-user-valid",t&&a)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}}const Ht={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};P(Ht);class v extends G{constructor(){super(...arguments),this.formControlController=new Qt(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var t;return(t=this.inputElement)==null?void 0:t.validity}checkValidity(){var e;return((e=this.inputElement)==null?void 0:e.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.inputElement.checkValidity();return this.handleValidationMessages(),t}setCustomValidity(t){this.inputElement.setCustomValidity(t),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(t){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(t){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(t){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(t){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const t=this.inputElement.validity;t.valueMissing?this.setCustomValidity(this.$t("validityRequired")):t.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):t.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):t.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):t.typeMismatch||t.rangeUnderflow||t.rangeOverflow||t.stepMismatch||t.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}_handleChange(t){const e=t.target;let a;if(e instanceof HTMLInputElement)switch(e.type){case"checkbox":case"radio":a=e.checked;break;case"file":a=e.files;break;default:a=e.value}else e instanceof HTMLSelectElement&&e.multiple?a=Array.from(e.selectedOptions).map(i=>i.value):a=e.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:a,el:e},bubbles:!0,composed:!0}))}updated(t){var e;(e=super.updated)==null||e.call(this,t),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}l([Lt(),d("design:type",Object)],v.prototype,"_touched",void 0);l([Ot(".it-form__control"),d("design:type",HTMLInputElement)],v.prototype,"inputElement",void 0);l([p({type:String,reflect:!0}),d("design:type",Object)],v.prototype,"name",void 0);l([p({reflect:!0}),d("design:type",Object)],v.prototype,"value",void 0);l([p({type:Boolean,reflect:!0}),d("design:type",Object)],v.prototype,"disabled",void 0);l([p({reflect:!0,type:String}),d("design:type",Object)],v.prototype,"form",void 0);l([p({type:Boolean,reflect:!0,attribute:"custom-validation"}),d("design:type",Object)],v.prototype,"customValidation",void 0);l([p({attribute:"validity-message",reflect:!0}),d("design:type",String)],v.prototype,"validationText",void 0);l([p(),d("design:type",String)],v.prototype,"pattern",void 0);l([p(),d("design:type",Object)],v.prototype,"min",void 0);l([p(),d("design:type",Object)],v.prototype,"max",void 0);l([p(),d("design:type",Object)],v.prototype,"step",void 0);l([p({type:Number}),d("design:type",Object)],v.prototype,"minlength",void 0);l([p({type:Number}),d("design:type",Object)],v.prototype,"maxlength",void 0);l([p({type:Boolean,reflect:!0}),d("design:type",Object)],v.prototype,"required",void 0);l([Lt(),d("design:type",Object)],v.prototype,"validationMessage",void 0);var Jt=Pt`/***************************** 1 ****************************************/
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
.avatar-extra-text .extra-text, .avatar-extra-text slot[name=extra-text]::slotted(*) {
  margin-left: var(--bs-spacing-s);
}
.avatar-extra-text .extra-text h3, .avatar-extra-text slot[name=extra-text]::slotted(*) h3,
.avatar-extra-text .extra-text h4,
.avatar-extra-text slot[name=extra-text]::slotted(*) h4 {
  margin: 0;
  font-size: var(--bs-heading-6-font-size);
}
.avatar-extra-text .extra-text h3 a, .avatar-extra-text slot[name=extra-text]::slotted(*) h3 a,
.avatar-extra-text .extra-text h4 a,
.avatar-extra-text slot[name=extra-text]::slotted(*) h4 a {
  display: inline-block;
}
.avatar-extra-text .extra-text p, .avatar-extra-text slot[name=extra-text]::slotted(*) p,
.avatar-extra-text .extra-text time,
.avatar-extra-text slot[name=extra-text]::slotted(*) time {
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

:host {
  display: inline-flex;
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
}
:host a.avatar,
:host a .avatar {
  text-decoration: none;
}
:host a.avatar:hover,
:host a .avatar:hover {
  text-decoration: none;
}

it-icon::part(icon) {
  width: var(--bs-avatar-icon-size);
  height: var(--bs-avatar-icon-size);
}

it-icon {
  display: inline-flex;
}

it-icon.presence-icon::part(icon),
it-icon.status-icon::part(icon) {
  width: 12px;
  height: 12px;
  stroke: var(--bs-icon-inverse);
  stroke-width: 2px;
}

.extra-text, slot[name=extra-text]::slotted(*) {
  margin-left: var(--bs-spacing-s);
}
.extra-text h3, slot[name=extra-text]::slotted(*) h3,
.extra-text h4,
slot[name=extra-text]::slotted(*) h4 {
  margin: 0;
  font-size: var(--bs-heading-6-font-size) !important;
}
.extra-text h3 a, slot[name=extra-text]::slotted(*) h3 a,
.extra-text h4 a,
slot[name=extra-text]::slotted(*) h4 a {
  display: inline-block;
}
.extra-text p, slot[name=extra-text]::slotted(*) p,
.extra-text time,
slot[name=extra-text]::slotted(*) time {
  margin: 0;
  color: var(--bs-color-text-secondary);
  font-size: var(--bs-caption-font-size);
  text-transform: uppercase;
}

.avatar-wrapper {
  display: inline-flex;
}`;const Kt={$code:"it",$name:"Italiano",$dir:"ltr",avatar_presence_active:"attivo",avatar_presence_busy:"non disponibile",avatar_presence_hidden:"invisibile",avatar_presence_label:"Presenza",avatar_status_approved:"approvato",avatar_status_declined:"respinto",avatar_status_notify:"notifica",avatar_status_label:"Stato"},Yt={$code:"en",$name:"English",$dir:"ltr",avatar_presence_active:"active",avatar_presence_busy:"busy",avatar_presence_hidden:"hidden",avatar_presence_label:"Presence",avatar_status_approved:"approved",avatar_status_declined:"declined",avatar_status_notify:"notify",avatar_status_label:"Status"};P(Kt);P(Yt);let u=class extends G{constructor(){super(...arguments),this.size="md",this.variant="",this.presence="",this.status="",this.type="",this.src="",this.alt="",this.text="",this.icon="",this._imageLoadError=!1,this.href="",this.avatarTitle="",this._onImageError=()=>{this._imageLoadError=!0,this.requestUpdate()},this.onExtraTextSlotChange=()=>{var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector('slot[name="extra-text"]');(t==null?void 0:t.assignedElements().length)>0&&(t==null||t.assignedElements().forEach(a=>{a.classList.add("extra-text")}))}}get __hasExplicitSize(){return this.hasAttribute("size")}get focusElement(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("a.avatar");return t||null}getAutoType(){return this.type!==""?this.type:this.src?"image":this.icon?"icon":"text"}getInitials(){var t,e;if(this.text){const a=this.text.trim().split(/\s+/);return this.size==="xs"||this.size==="sm"?((e=(t=a[0])==null?void 0:t.charAt(0))==null?void 0:e.toUpperCase())||"":a.slice(0,2).map(i=>{var n;return(n=i.charAt(0))==null?void 0:n.toUpperCase()}).join("")||""}return""}getInitialsFromName(t){var a,i;const e=t.trim().split(/\s+/);return this.size==="xs"||this.size==="sm"?((i=(a=e[0])==null?void 0:a.charAt(0))==null?void 0:i.toUpperCase())||"":e.slice(0,2).map(n=>{var m;return(m=n.charAt(0))==null?void 0:m.toUpperCase()}).join("")||""}getAvatarWrapperClasses(){return y({avatar:!0,[`size-${this.size}`]:!!this.size,[`avatar-${this.variant}`]:!!this.variant,"avatar-extra-text":this.hasExtraTextContent,"avatar-dropdown":this.type==="dropdown"})}getAvatarClasses(){return y({avatar:!0,[`size-${this.size}`]:!!this.size,[`avatar-${this.variant}`]:!!this.variant,"avatar-dropdown":this.type==="dropdown"})}getPresenceClasses(){return y({"avatar-presence":!0,[this.presence]:!!this.presence})}getStatusClasses(){return y({"avatar-status":!0,[this.status]:!!this.status})}renderPresence(){if(!this.presence)return c;const t=this.$t(`avatar_presence_${this.presence}`),e=this.$t("avatar_presence_label");let a="";switch(this.presence){case"active":a="it-check";break;case"busy":a="it-minus";break;case"hidden":a="";break;default:a=""}return o`
      <div class="${this.getPresenceClasses()}">
        ${a?o`<it-icon name="${a}" size="xs" variant="white" class="presence-icon"></it-icon>`:c}
        <span class="visually-hidden">${e}: ${t}</span>
      </div>
    `}renderStatus(){if(!this.status)return c;const t=this.$t(`avatar_status_${this.status}`),e=this.$t("avatar_status_label");let a="";switch(this.status){case"approved":a="it-check";break;case"declined":a="it-close";break;case"notify":a="";break;default:a=""}return o`
      <div class="${this.getStatusClasses()}">
        ${a?o`<it-icon name="${a}" size="xs" variant="white" class="status-icon"></it-icon>`:c}
        <span class="visually-hidden">${e}: ${t}</span>
      </div>
    `}renderImage(){if(!this.src||this._imageLoadError){const t=this.alt||this.text||"";if(t){const e=this.getInitialsFromName(t);return o`
          <p aria-hidden="true">${e}</p>
          <span class="visually-hidden">${t}</span>
        `}return c}return o`
      <img
        src="${this.src}"
        alt="${this.alt||this.text||""}"
        @error="${this._onImageError}"
        ${this.text?'aria-hidden="true"':""}
      />
      ${this.text?o`<span class="visually-hidden">${this.text}</span>`:c}
    `}willUpdate(t){super.willUpdate(t),t.has("src")&&(this._imageLoadError=!1)}renderText(){const t=this.getInitials();return t?o`
      <p aria-hidden="true">${t}</p>
      ${this.text?o`<span class="visually-hidden">${this.text}</span>`:c}
    `:c}renderIcon(){if(!this.icon)return c;const t=this.avatarTitle||this.text||this.alt||"Icona";return o`
      <it-icon name="${this.icon}" aria-hidden="true"></it-icon>
      <span class="visually-hidden">${t}</span>
    `}renderAvatarContent(){const t=this.getAutoType();return o`
      ${t==="image"?this.renderImage():c} ${t==="text"?this.renderText():c}
      ${t==="icon"?this.renderIcon():c}
      ${t==="dropdown"?o`<slot name="avatar-dropdown-content"></slot>`:c}
    `}updated(){const t=this.getAutoType();t==="image"&&this.src&&!this.alt&&!this.text&&this.logger.warn(`Avatar: immagine fornita senza testo alternativo (alt) o contenuto testuale (text). Questo impatta negativamente l'accessibilità. Aggiungi alt="..." o text="..."`),t==="icon"&&this.icon&&!this.avatarTitle&&!this.text&&!this.alt&&this.logger.warn(`Avatar: icona fornita senza testo alternativo. Aggiungi avatar-title="..." o text="..." o alt="..." per l'accessibilità.`),t==="text"&&!this.text&&this.logger.warn('Avatar: tipo text rilevato ma nessun contenuto testuale fornito. Aggiungi text="..."'),this.href&&!this.avatarTitle&&!this.text&&this.logger.warn(`Avatar: link fornito senza titolo o contenuto testuale. Aggiungi avatar-title="..." o text="..." per l'accessibilità.`),this.src&&this.icon&&this.logger.warn('Avatar: sia src che icon sono specificati. Il tipo verrà determinato automaticamente come "image".')}get hasExtraTextContent(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector('slot[name="extra-text"]');return(t==null?void 0:t.assignedElements().length)>0||!1}getWrapperClasses(){return y({"avatar-wrapper":!0,"avatar-extra-text":this.hasExtraTextContent})}render(){const t=this.renderAvatarContent(),e=this.href&&this.type!=="dropdown"?o`
            <a
              href="${this.href}"
              class="${this.getAvatarWrapperClasses()}"
              title="${h(this.avatarTitle||this.text||void 0)}"
              part="avatar focusable"
            >
              ${t}
            </a>
          `:o`<div class="${this.getAvatarClasses()}" part="avatar">${t}</div>`;return o`
      <div class="${this.getWrapperClasses()}">
        ${e}
        <slot name="extra-text" @slotchange="${this.onExtraTextSlotChange}" part="extra-text"></slot>
        <slot name="avatar-dropdown-content" part="avatar-dropdown-content"></slot>
        <slot name="presence" part="presence">${this.renderPresence()}</slot>
        <slot name="status" part="status">${this.renderStatus()}</slot>
      </div>
    `}};u.styles=Jt;u.shadowRootOptions={...G.shadowRootOptions,delegatesFocus:!0};l([p({type:String,reflect:!0}),d("design:type",String)],u.prototype,"size",void 0);l([p({type:String,reflect:!0}),d("design:type",String)],u.prototype,"variant",void 0);l([p({type:String,reflect:!0}),d("design:type",String)],u.prototype,"presence",void 0);l([p({type:String,reflect:!0}),d("design:type",String)],u.prototype,"status",void 0);l([p({type:String,reflect:!0}),d("design:type",String)],u.prototype,"type",void 0);l([p({type:String,reflect:!0}),d("design:type",Object)],u.prototype,"src",void 0);l([p({type:String,reflect:!0}),d("design:type",Object)],u.prototype,"alt",void 0);l([p({type:String,reflect:!0}),d("design:type",Object)],u.prototype,"text",void 0);l([p({type:String,reflect:!0}),d("design:type",Object)],u.prototype,"icon",void 0);l([p({type:String,reflect:!0}),d("design:type",Object)],u.prototype,"href",void 0);l([p({type:String,reflect:!0,attribute:"avatar-title"}),d("design:type",Object)],u.prototype,"avatarTitle",void 0);u=l([Ut("it-avatar")],u);const Xt=["xs","sm","md","lg","xl","xxl"],Zt=["primary","secondary"],te=["image","text","icon"],ee=["active","busy","hidden"],ae=["approved","declined","notify"],s=r=>o`
  <it-avatar
    type="${h(r.type||c)}"
    size="${h(r.size||c)}"
    variant="${h(r.variant||c)}"
    presence="${h(r.presence||c)}"
    status="${h(r.status||c)}"
    src="${h(r.src||c)}"
    alt="${h(r.alt||c)}"
    text="${h(r.text||c)}"
    icon="${h(r.icon||c)}"
    href="${h(r.href||c)}"
    avatar-title="${h(r.avatarTitle||c)}"
    slot="${h(r.slot||c)}"
  ></it-avatar>
`,ie={title:"Componenti/Avatar",component:"it-avatar",tags:["autodocs","alpha","new"],args:{size:"md",src:"https://randomuser.me/api/portraits/men/43.jpg",alt:"Mario Rossi",text:"Mario Rossi",icon:"",href:"",avatarTitle:""},argTypes:{type:{control:"select",description:"Tipo di contenuto dell'avatar. Se vuoto, viene determinato automaticamente: src → image, icon → icon, altrimenti text.",options:te},size:{control:"select",description:"Dimensione dell'avatar.",options:Xt,table:{defaultValue:{summary:"md"}}},variant:{control:"select",description:"Colore di sfondo dell'avatar per avatar con testo.",options:Zt},presence:{control:"select",description:"Indicatore di presenza dell'utente.",options:ee},status:{control:"select",description:"Indicatore di stato dell'account utente.",options:ae},src:{control:"text",description:"URL dell'immagine per avatar di tipo immagine."},alt:{control:"text",description:"Testo alternativo per l'immagine dell'avatar."},text:{control:"text",description:"Testo per generare le iniziali dell'avatar."},icon:{control:"text",description:"Nome dell'icona per avatar di tipo icona."},href:{control:"text",description:"URL del link se l'avatar deve essere cliccabile."},avatarTitle:{control:"text",description:"Titolo per accessibilità e tooltip."}},parameters:{docs:{description:{component:"\n<Description>Rappresentazione grafica di un utente.</Description>\n\nL'elemento avatar è la rappresentazione grafica di un utente e può includere un'immagine, un testo, un'icona o essere utilizzato come link.\n\nSono disponibili sei dimensioni: `xs`, `sm`, `md` (default), `lg`, `xl`, `xxl`.\n\nPer ottenere un elemento grafico non interattivo, non utilizzare l'attributo `href`. Ogni avatar può essere associato ad un'azione, utilizzando per esso l'attributo `href`.\n\nPer indicazioni su \"Come e Quando usarlo\" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/avatar/).\n"}}}},C={...ie,name:"Esempio interattivo",args:{type:"image",src:"https://randomuser.me/api/portraits/men/43.jpg",alt:"Mario Rossi"},tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:r=>s(r)},A={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nPer la personalizzazione degli stili si può usare il selettore `::part` passando il valore `avatar`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).\n\nAltri valori disponibili per il selettore part per i vari slot esposti dal componente sono:\n- `presence`: target dello slot dell'indicatore di presenza.\n- `status`: target dello slot dell'indicatore di stato.\n- `extra-text`: target dello slot dell'testo aggiuntivo.\n\n"}}},render:()=>o`<div class="hide-preview"></div>`},S={name:"Avatar con immagine",args:{type:"image"},argTypes:{type:{table:{disable:!0}},text:{table:{disable:!0}},icon:{table:{disable:!0}},variant:{table:{disable:!0}}},parameters:{docs:{description:{story:`
Il componente avatar ridimensiona automaticamente l'immagine adattandola al formato circolare e centrandola. Si consiglia in ogni caso di utilizzare immagini delle dimensioni corrette.
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità delle immagini</span></div>
<p>Per ragioni di accessibilità è importante indicare all'interno dell'avatar il nome dell'utente associato allo stesso.<br>
Nel caso di avatar con immagine utilizzare l'attributo \`alt\` dell'immagine inserendo in esso il nome dell'utente.</p></div></div>

`}}},render:()=>o`
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap gap-4">
      ${s({type:"image",src:"https://randomuser.me/api/portraits/women/44.jpg",alt:"Luisa Neri",size:"xs"})}
      ${s({type:"image",src:"https://randomuser.me/api/portraits/women/44.jpg",alt:"Luisa Neri",size:"sm"})}
      ${s({type:"image",src:"https://randomuser.me/api/portraits/men/43.jpg",alt:"Gioacchino Romani",size:"md"})}
      ${s({type:"image",src:"https://randomuser.me/api/portraits/women/41.jpg",alt:"Anna Barbieri",size:"lg"})}
      ${s({type:"image",src:"https://randomuser.me/api/portraits/men/33.jpg",alt:"Carlo Poli",size:"xl"})}
      ${s({type:"image",src:"https://randomuser.me/api/portraits/women/90.jpg",alt:"Giovanna Ferrero",size:"xxl"})}
    </div>
  `},E={name:"Avatar con testo",args:{type:"text"},argTypes:{type:{table:{disable:!0}},src:{table:{disable:!0}},alt:{table:{disable:!0}},icon:{table:{disable:!0}}},parameters:{docs:{description:{story:`
La versione con testo contiene le iniziali dell'utente (una sola nel caso delle dimensioni xs ed sm). Oltre ai colori di default è possibile utilizzare uno sfondo a scelta fra:

- **Primario**: aggiungendo l'attributo \`variant="primary"\`
- **Secondario**: aggiungendo l'attributo \`variant="secondary"\`

In questi casi il testo sarà di colore bianco.

Un avatar con testo conterrà uno \`<span>\` per soli screen reader con il nome dell'utente indicato per esteso: \`<span class="visually-hidden">Nome Utente</span>\`.
`}}},render:()=>o`
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-3 gap-4">
      ${s({type:"text",text:"Mario Rossi",size:"xs"})}
      ${s({type:"text",text:"Mario Rossi",size:"sm"})}
      ${s({type:"text",text:"Mario Rossi",size:"md"})}
      ${s({type:"text",text:"Mario Rossi",size:"lg"})}
      ${s({type:"text",text:"Mario Rossi",size:"xl"})}
      ${s({type:"text",text:"Mario Rossi",size:"xxl"})}
    </div>
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-3 gap-4">
      ${s({type:"text",text:"Mario Rossi",variant:"primary",size:"xs"})}
      ${s({type:"text",text:"Mario Rossi",variant:"primary",size:"sm"})}
      ${s({type:"text",text:"Mario Rossi",variant:"primary",size:"md"})}
      ${s({type:"text",text:"Mario Rossi",variant:"primary",size:"lg"})}
      ${s({type:"text",text:"Mario Rossi",variant:"primary",size:"xl"})}
      ${s({type:"text",text:"Mario Rossi",variant:"primary",size:"xxl"})}
    </div>
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap gap-4">
      ${s({type:"text",text:"Mario Rossi",variant:"secondary",size:"xs"})}
      ${s({type:"text",text:"Mario Rossi",variant:"secondary",size:"sm"})}
      ${s({type:"text",text:"Mario Rossi",variant:"secondary",size:"md"})}
      ${s({type:"text",text:"Mario Rossi",variant:"secondary",size:"lg"})}
      ${s({type:"text",text:"Mario Rossi",variant:"secondary",size:"xl"})}
      ${s({type:"text",text:"Mario Rossi",variant:"secondary",size:"xxl"})}
    </div>
  `},R={name:"Avatar con icona",args:{type:"icon"},argTypes:{type:{table:{disable:!0}},src:{table:{disable:!0}},alt:{table:{disable:!0}},text:{table:{disable:!0}},variant:{table:{disable:!0}}},parameters:{docs:{description:{story:`
Per utilizzare un'icona all'interno di un avatar è sufficiente includere il nome dell'icona prescelta dalla [libreria icone](https://designers.italia.it/design-system/fondamenti/iconografia/) e indicarne il colore con una delle classi disponibili.

Per gli avatar con icona inserire un testo alternativo: \`<span class="visually-hidden">Testo icona</span>\`
`}}},render:()=>o`
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap gap-4">
      ${s({type:"icon",icon:"it-user",avatarTitle:"Cerca",size:"xs"})}
      ${s({type:"icon",icon:"it-user",avatarTitle:"Cerca",size:"sm"})}
      ${s({type:"icon",icon:"it-user",avatarTitle:"Cerca",size:"md"})}
      ${s({type:"icon",icon:"it-user",avatarTitle:"Cerca",size:"lg"})}
      ${s({type:"icon",icon:"it-user",avatarTitle:"Cerca",size:"xl"})}
      ${s({type:"icon",icon:"it-user",avatarTitle:"Cerca",size:"xxl"})}
    </div>
  `},M={argTypes:{href:{table:{disable:!0}}},parameters:{docs:{description:{story:`
Per associare un avatar ad un'azione o un link, utilizzare l'attributo \`href\` con relativo link o chiamata JavaScript.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Tooltip non ancora implementato</span></div>
<p>La funzionalità tooltip per gli avatar con link è attualmente in fase di sviluppo. </p></div></div>

`}}},render:()=>o`
    <div>
      <div class="d-flex align-items-center gap-3 flex-wrap">
        ${s({type:"image",src:"https://randomuser.me/api/portraits/women/41.jpg",alt:"Anna Barbieri",href:"#",avatarTitle:"Anna Barbieri"})}
        ${s({type:"text",text:"Mario Rossi",href:"#",avatarTitle:"Mario Rossi"})}
        ${s({type:"text",text:"Mario Rossi",variant:"primary",href:"#",avatarTitle:"Mario Rossi"})}
        ${s({type:"icon",icon:"it-user",href:"#",avatarTitle:"Cerca"})}
      </div>
    </div>
  `},T={name:"Comportamento - Presenza utente",argTypes:{presence:{table:{disable:!0}}},parameters:{docs:{description:{story:`
L'avatar supporta indicatori di presenza dell'utente attraverso l'attributo \`presence\`:

- **Lo stato attivo** si ottiene aggiungendo l'attributo \`presence="active"\`
- **Lo stato non disponibile** si ottiene aggiungendo l'attributo \`presence="busy"\`
- **Lo stato invisibile** si ottiene aggiungendo l'attributo \`presence="hidden"\`

#### Personalizzazione con Slot
L'esempio "Presenza personalizzata con slot" mostra come lo stesso componente possa essere adattato a stili o contenuti differenti tramite gli slot, per illustrare la flessibilità dell'approccio.
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Ricordarsi sempre di includere testo per screen reader con \`<span class="visually-hidden">\` in caso di uso di personalizzazione.</p></div></div>

È possibile personalizzare completamente l'indicatore di presenza usando il **\`slot="presence"\`**:

\`\`\`html
<it-avatar text="Nome Utente" presence="active">
  <span slot="presence" class="custom-presence-indicator">
    <it-icon name="it-check"></it-icon>
    <span class="visually-hidden">Utente online</span>
  </span>
</it-avatar>
\`\`\`

\`\`\`css
.custom-presence-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  /* altri stili personalizzati */
}
\`\`\`

Le traduzioni dei nomi degli stati sono gestite automaticamente tramite il [sistema @italia/i18n](/docs/componenti-i18n--documentazione).
`}}},render:()=>o`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Esempi standard -->
      <div>
        <h4>Presenza standard</h4>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            ${s({type:"image",src:"https://randomuser.me/api/portraits/men/43.jpg",alt:"Mario Rossi",presence:"active",size:"lg"})}
            <div class="mt-2"><small>Attivo</small></div>
          </div>
          <div class="text-center">
            ${s({type:"image",src:"https://randomuser.me/api/portraits/women/41.jpg",alt:"Luisa Neri",presence:"busy",size:"lg"})}
            <div class="mt-2"><small>Non disponibile</small></div>
          </div>
          <div class="text-center">
            ${s({type:"image",src:"https://randomuser.me/api/portraits/men/33.jpg",alt:"Gioacchino Romani",presence:"hidden",size:"lg"})}
            <div class="mt-2"><small>Invisibile</small></div>
          </div>
        </div>
      </div>

      <!-- Esempi con slot personalizzati -->
      <div>
        <h4>Presenza personalizzata con slot</h4>
        <p>
          L'esempio "Presenza personalizzata con slot" mostra come lo stesso componente possa essere adattato a stili o
          contenuti differenti tramite gli slot, per illustrare la flessibilità dell'approccio.
        </p>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            <it-avatar type="text" text="Marco Bianchi" variant="primary" presence="active" size="lg">
              <span slot="presence" class="custom-presence custom-presence-success">
                <it-icon name="it-check" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Utente online e disponibile</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Con icona check</small></div>
          </div>

          <div class="text-center">
            <it-avatar type="text" text="Sara Verdi" variant="secondary" presence="busy" size="lg">
              <span slot="presence" class="custom-presence custom-presence-danger">
                !
                <span class="visually-hidden">Utente occupato, non disturbare</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Con testo custom</small></div>
          </div>
        </div>
      </div>
    </div>

    <style>
      /* Esempi di classi CSS per personalizzare gli slot presence */
      .custom-presence {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20px;
        height: 20px;
        border: 2px solid white;
        border-radius: 50%;
        z-index: 10;
      }

      .custom-presence-success {
        background: #28a745;
      }

      .custom-presence-danger {
        background: #dc3545;
        font-size: 10px;
        font-weight: bold;
        color: white;
      }
    </style>
  `},k={name:"Comportamento - Status utente",argTypes:{status:{table:{disable:!0}}},parameters:{docs:{description:{story:`
L'avatar supporta indicatori di stato dell'account attraverso l'attributo \`status\`:

- **Lo stato approvato** si ottiene aggiungendo l'attributo \`status="approved"\`
- **Lo stato respinto** si ottiene aggiungendo l'attributo \`status="declined"\`
- **Lo stato notifica** si ottiene aggiungendo l'attributo \`status="notify"\`

#### Personalizzazione con Slot
L'esempio "Status personalizzato con slot" mostra come lo stesso componente possa essere adattato a stili o contenuti differenti tramite gli slot, per illustrare la flessibilità dell'approccio.
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Ricordarsi sempre di includere testo per screen reader con \`<span class="visually-hidden">\` in caso di uso di personalizzazione.</p></div></div>


È possibile personalizzare completamente l'indicatore di stato usando il **\`slot="status"\`**:

\`\`\`html
<it-avatar text="Nome Utente" status="approved">
  <span slot="status" class="custom-status-indicator">
    <it-icon name="it-check-circle"></it-icon>
    <span class="visually-hidden">Account verificato</span>
  </span>
</it-avatar>
\`\`\`

\`\`\`css
.custom-status-indicator {
  position: absolute;
  top: -5px;
  right: -5px;
  /* altri stili personalizzati */
}
\`\`\`


Le traduzioni sono gestite automaticamente tramite il [sistema @italia/i18n](/docs/componenti-i18n--documentazione).
`}}},render:()=>o`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Esempi standard -->
      <div>
        <h4>Status standard</h4>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            ${s({type:"image",src:"https://randomuser.me/api/portraits/men/43.jpg",alt:"Mario Rossi",status:"approved",size:"lg"})}
            <div class="mt-2"><small>Approvato</small></div>
          </div>
          <div class="text-center">
            ${s({type:"image",src:"https://randomuser.me/api/portraits/women/41.jpg",alt:"Luisa Neri",status:"declined",size:"lg"})}
            <div class="mt-2"><small>Respinto</small></div>
          </div>
          <div class="text-center">
            ${s({type:"image",src:"https://randomuser.me/api/portraits/men/33.jpg",alt:"Gioacchino Romani",status:"notify",size:"lg"})}
            <div class="mt-2"><small>Notifica</small></div>
          </div>
        </div>
      </div>

      <!-- Esempi con slot personalizzati -->
      <div>
        <h4>Status personalizzato con slot</h4>
        <p>
          L'esempio "Status personalizzato con slot" mostra come lo stesso componente possa essere adattato a stili o
          contenuti differenti tramite gli slot, per illustrare la flessibilità dell'approccio.
        </p>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            <it-avatar type="text" text="Luigi Neri" variant="primary" status="approved" size="lg">
              <span slot="status" class="custom-status custom-status-success">
                <it-icon name="it-check-circle" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Account verificato e approvato</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Verificato</small></div>
          </div>

          <div class="text-center">
            <it-avatar type="text" text="Carla Blu" variant="secondary" status="declined" size="lg">
              <span slot="status" class="custom-status custom-status-danger">
                <it-icon name="it-close" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Account sospeso o respinto</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Sospeso</small></div>
          </div>
        </div>
      </div>
    </div>

    <style>
      /* Esempi di classi CSS per personalizzare gli slot status */
      .custom-status {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -5px;
        right: -5px;
        width: 24px;
        height: 24px;
        border: 2px solid white;
        border-radius: 50%;
        z-index: 10;
      }

      .custom-status-success {
        background: #28a745;
      }

      .custom-status-danger {
        background: #dc3545;
      }
    </style>
  `},L={name:"Gruppi di avatar - Liste verticali",parameters:{docs:{description:{story:"\nUtilizzando una lista di link con l’aggiunta della classe .avatar-group si ottiene una lista verticale con avatar affiancati da link e testi.\n\nÈ possibile utilizzare avatar di dimensione `sm` o `md` all'interno della lista.\n"}}},render:()=>o`
    <div style="display: flex; gap: 3rem; flex-wrap: wrap;">
      <div style="flex: 1; min-width: 300px;">
        <h4>Lista Verticale - Dimensione SM</h4>
        <div class="link-list-wrapper">
          <ul class="link-list avatar-group">
            <li>
              <a class="list-item" href="#">
                ${s({size:"sm",src:"https://randomuser.me/api/portraits/men/43.jpg"})}
                <span>Mario Rossi</span>
              </a>
            </li>
            <li>
              <a class="list-item" href="#">
                ${s({size:"sm",src:"https://randomuser.me/api/portraits/women/44.jpg"})}
                <span>Anna Verdi</span>
              </a>
            </li>
            <li>
              <div class="list-item">
                ${s({size:"sm",text:"Sara Ghione",variant:"primary"})}
                <span>Sara Ghione</span>
              </div>
            </li>
            <li>
              <div class="list-item">
                ${s({size:"sm",icon:"it-user",avatarTitle:"Utente generico"})}
                <span>Antonio Esposito</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div style="flex: 1; min-width: 300px;">
        <h4>Lista Verticale - Dimensione MD</h4>
        <div class="link-list-wrapper">
          <ul class="link-list avatar-group">
            <li>
              <a class="list-item" href="#">
                ${s({src:"https://randomuser.me/api/portraits/men/32.jpg"})}
                <span>Luca Bianchi</span>
              </a>
            </li>
            <li>
              <a class="list-item" href="#">
                ${s({src:"https://randomuser.me/api/portraits/women/28.jpg"})}
                <span>Elena Rossi</span>
              </a>
            </li>
            <li>
              <div class="list-item">
                ${s({text:"Marco Neri",variant:"secondary"})}
                <span>Marco Neri</span>
              </div>
            </li>
            <li>
              <div class="list-item">
                ${s({icon:"it-user",avatarTitle:"Cerca"})}
                <span>Cerca utenti</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `},j={name:"Gruppi di avatar - Avatar Sovrapposti",parameters:{docs:{description:{story:`

Racchiudendo una serie di avatar in una lista di tipo <ul> con classe .avatar-group-stacked questi verranno visualizzati come una lista orizzontale in cui i singoli elementi sono parzialmente sovrapposti. In questo tipo di gruppo è possibile inserire dei Dropdown per racchiudere ulteriori elementi avatar.

È possibile utilizzare avatar di dimensione \`sm\` o \`md\` all'interno della lista.


Per mostrare ulteriori avatar in un menu a discesa, utilizzare \`it-avatar\` con \`type="dropdown"\`.

L'avatar dropdown eredita automaticamente la dimensione dal gruppo e può contenere una lista di avatar con nomi nel menu.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità del dropdown</span></div>
<p>È fondamentale utilizzare l'attributo \`it-aria-label\` sul componente \`it-dropdown\` per fornire una descrizione significativa agli screen reader. Senza questo attributo, uno screen reader leggerebbe solo il testo del label (es. "+4") senza contesto, mentre con \`it-aria-label="Altri utenti"\` fornisce una descrizione chiara e comprensibile.</p></div></div>
`}}},render:()=>o`
    <div style="display: flex; flex-direction: column; gap: 3rem; height: 300px;">
      <div>
        <ul class="avatar-group-stacked">
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo" href="#"></it-avatar>
          </li>
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo" href="#"></it-avatar>
          </li>
          <li>
            ${s({type:"text",text:"Giulia Neri",variant:"primary",href:"#",avatarTitle:"Giulia Neri",slot:"trigger"})}
          </li>
          <li><it-avatar text="Sandro Penna" variant="secondary" href="#"></it-avatar></li>
          <li>
            <it-avatar type="dropdown">
              <it-dropdown label="4+" slot="avatar-dropdown-content" it-aria-label="Altri utenti" variant="secondary">
                <it-dropdown-item href="#">
                  <it-avatar src="https://randomuser.me/api/portraits/men/22.jpg" alt="Foto profilo"></it-avatar>
                  <span>Roberto Milano</span>
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-avatar text="Giuseppe Verde" variant="primary"></it-avatar>
                  <span>Giuseppe Verde</span>
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-avatar text="Laura Blu" variant="secondary"></it-avatar>
                  <span>Laura Blu</span>
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-avatar icon="it-user" avatar-title="Altri utenti"></it-avatar>
                  <span>Altri utenti...</span>
                </it-dropdown-item>
              </it-dropdown>
            </it-avatar>
          </li>
        </ul>
      </div>
      <p style="margin-top: 0.75rem; font-size: 16px; variant: #666;">
        Clicca su "+4" per visualizzare gli utenti rimanenti
      </p>
    </div>
  `},V={name:"Gruppi di avatar - Avatar Sovrapposti Piccoli",render:()=>o`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <ul class="avatar-group-stacked">
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo" size="sm"></it-avatar>
          </li>
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo" size="sm"></it-avatar>
          </li>
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/women/41.jpg" alt="Foto profilo" size="sm"></it-avatar>
          </li>
          <li><it-avatar text="Tommaso Sordi" variant="primary" size="sm"></it-avatar></li>
          <li><it-avatar text="Barbara Tosi" size="sm"></it-avatar></li>
          <li><it-avatar text="Barbara Tosi" variant="secondary" size="sm"></it-avatar></li>
        </ul>
      </div>
    </div>
  `},_={name:"Gruppi di avatar - Avatar Sovrapposti Medi",render:()=>o`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <div>
          <ul class="avatar-group-stacked">
            <li>
              <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo" href="#"></it-avatar>
            </li>
            <li>
              <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo" href="#"></it-avatar>
            </li>
            <li>
              ${s({type:"text",text:"Giulia Neri",variant:"primary",href:"#",avatarTitle:"Giulia Neri",slot:"trigger"})}
            </li>
            <li><it-avatar text="Sandro Penna" variant="secondary" href="#"></it-avatar></li>
            <li><it-avatar text="Sandro Penna" href="#"></it-avatar></li>
          </ul>
        </div>
      </div>
    </div>
  `},I={name:"Avatar con testo aggiuntivo",parameters:{docs:{description:{story:"\nPer ottenere una versione del componente con nome esteso ed eventuale testo accessorio, utilizza lo slot `extra-text`.\n\nPer il nome è possibile utilizzare i tag `<h3>` o `<h4>` tramite lo slot. Il testo esteso può essere contenuto in un `<p>` o in un tag `<time>` nel caso di date/orari.\n"}}},render:()=>o`
    <div class="d-flex gap-4">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/men/43.jpg" size="xl" text="Mario Rossi">
        <div slot="extra-text">
          <h4>Mario Rossi</h4>
          <time>15 SET 2025</time>
        </div>
      </it-avatar>

      <it-avatar type="image" src="https://randomuser.me/api/portraits/women/44.jpg" size="xl" text="Giulia Neri">
        <div slot="extra-text">
          <h4>Giulia Neri</h4>
          <p>LOREM IPSUM DOLOR</p>
        </div>
      </it-avatar>

      <it-avatar type="text" text="Michele Dotti" variant="primary" size="xl">
        <div slot="extra-text">
          <h4>Michele Dotti</h4>
          <time>12 MAG 2025</time>
        </div>
      </it-avatar>
    </div>
  `},N={name:"Gruppi di avatar - Liste verticali con testo aggiuntivo",parameters:{docs:{description:{story:`
È possibile combinare le liste verticali con avatar che includono testo aggiuntivo tramite lo slot \`extra-text\`.

Questo è particolarmente utile per creare liste di utenti con informazioni aggiuntive come ruoli, date o descrizioni.
`}}},render:()=>o`
    <div style="max-width: 400px;">
      <h4>Lista Team con Ruoli</h4>
      <div class="link-list-wrapper">
        <ul class="link-list avatar-group">
          <li>
            <div class="list-item">
              <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo">
                <div slot="extra-text">
                  <h4>Mario Rossi</h4>
                  <p>TEAM LEADER</p>
                </div>
              </it-avatar>
            </div>
          </li>
          <li>
            <div class="list-item">
              <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo">
                <div slot="extra-text">
                  <h4>Giulia Neri</h4>
                  <p>FRONTEND DEVELOPER</p>
                </div>
              </it-avatar>
            </div>
          </li>
          <li>
            <div class="list-item">
              <it-avatar text="Andrea Bianchi" variant="primary">
                <div slot="extra-text">
                  <h4>Andrea Bianchi</h4>
                  <p>BACKEND DEVELOPER</p>
                </div>
              </it-avatar>
            </div>
          </li>
          <li>
            <div class="list-item">
              <it-avatar text="Sara Verde" variant="secondary">
                <div slot="extra-text">
                  <h4>Sara Verde</h4>
                  <time>ULTIMO ACCESSO: 12 SET 2025</time>
                </div>
              </it-avatar>
            </div>
          </li>
        </ul>
      </div>
    </div>
  `};var B,q,W;C.parameters={...C.parameters,docs:{...(B=C.parameters)==null?void 0:B.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  args: {
    type: 'image',
    src: 'https://randomuser.me/api/portraits/men/43.jpg',
    alt: 'Mario Rossi'
  },
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => renderComponent(params)
}`,...(W=(q=C.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};var Q,H,J;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
Per la personalizzazione degli stili si può usare il selettore \\\`::part\\\` passando il valore \\\`avatar\\\`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).
\\nAltri valori disponibili per il selettore part per i vari slot esposti dal componente sono:
- \\\`presence\\\`: target dello slot dell'indicatore di presenza.
- \\\`status\\\`: target dello slot dell'indicatore di stato.
- \\\`extra-text\\\`: target dello slot dell'testo aggiuntivo.

\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...(J=(H=A.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Y,X;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Avatar con immagine',
  args: {
    type: 'image'
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    },
    text: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    },
    variant: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
Il componente avatar ridimensiona automaticamente l'immagine adattandola al formato circolare e centrandola. Si consiglia in ogni caso di utilizzare immagini delle dimensioni corrette.
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità delle immagini</span></div>
<p>Per ragioni di accessibilità è importante indicare all'interno dell'avatar il nome dell'utente associato allo stesso.<br>
Nel caso di avatar con immagine utilizzare l'attributo \\\`alt\\\` dell'immagine inserendo in esso il nome dell'utente.</p></div></div>

\`
      }
    }
  },
  render: () => html\`
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap gap-4">
      \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'Luisa Neri',
    size: 'xs'
  })}
      \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/women/44.jpg',
    alt: 'Luisa Neri',
    size: 'sm'
  })}
      \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/men/43.jpg',
    alt: 'Gioacchino Romani',
    size: 'md'
  })}
      \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/women/41.jpg',
    alt: 'Anna Barbieri',
    size: 'lg'
  })}
      \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/men/33.jpg',
    alt: 'Carlo Poli',
    size: 'xl'
  })}
      \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/women/90.jpg',
    alt: 'Giovanna Ferrero',
    size: 'xxl'
  })}
    </div>
  \`
}`,...(X=(Y=S.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var Z,tt,et;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Avatar con testo',
  args: {
    type: 'text'
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    },
    src: {
      table: {
        disable: true
      }
    },
    alt: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
La versione con testo contiene le iniziali dell'utente (una sola nel caso delle dimensioni xs ed sm). Oltre ai colori di default è possibile utilizzare uno sfondo a scelta fra:

- **Primario**: aggiungendo l'attributo \\\`variant="primary"\\\`
- **Secondario**: aggiungendo l'attributo \\\`variant="secondary"\\\`

In questi casi il testo sarà di colore bianco.

Un avatar con testo conterrà uno \\\`<span>\\\` per soli screen reader con il nome dell'utente indicato per esteso: \\\`<span class="visually-hidden">Nome Utente</span>\\\`.
\`
      }
    }
  },
  render: () => html\`
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-3 gap-4">
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    size: 'xs'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    size: 'sm'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    size: 'md'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    size: 'lg'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    size: 'xl'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    size: 'xxl'
  })}
    </div>
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap mb-3 gap-4">
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'primary',
    size: 'xs'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'primary',
    size: 'sm'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'primary',
    size: 'md'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'primary',
    size: 'lg'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'primary',
    size: 'xl'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'primary',
    size: 'xxl'
  })}
    </div>
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap gap-4">
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'secondary',
    size: 'xs'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'secondary',
    size: 'sm'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'secondary',
    size: 'md'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'secondary',
    size: 'lg'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'secondary',
    size: 'xl'
  })}
      \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'secondary',
    size: 'xxl'
  })}
    </div>
  \`
}`,...(et=(tt=E.parameters)==null?void 0:tt.docs)==null?void 0:et.source}}};var at,it,st;R.parameters={...R.parameters,docs:{...(at=R.parameters)==null?void 0:at.docs,source:{originalSource:`{
  name: 'Avatar con icona',
  args: {
    type: 'icon'
  },
  argTypes: {
    type: {
      table: {
        disable: true
      }
    },
    src: {
      table: {
        disable: true
      }
    },
    alt: {
      table: {
        disable: true
      }
    },
    text: {
      table: {
        disable: true
      }
    },
    variant: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
Per utilizzare un'icona all'interno di un avatar è sufficiente includere il nome dell'icona prescelta dalla [libreria icone](https://designers.italia.it/design-system/fondamenti/iconografia/) e indicarne il colore con una delle classi disponibili.

Per gli avatar con icona inserire un testo alternativo: \\\`<span class="visually-hidden">Testo icona</span>\\\`
\`
      }
    }
  },
  render: () => html\`
    <div class="d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap gap-4">
      \${renderComponent({
    type: 'icon',
    icon: 'it-user',
    avatarTitle: 'Cerca',
    size: 'xs'
  })}
      \${renderComponent({
    type: 'icon',
    icon: 'it-user',
    avatarTitle: 'Cerca',
    size: 'sm'
  })}
      \${renderComponent({
    type: 'icon',
    icon: 'it-user',
    avatarTitle: 'Cerca',
    size: 'md'
  })}
      \${renderComponent({
    type: 'icon',
    icon: 'it-user',
    avatarTitle: 'Cerca',
    size: 'lg'
  })}
      \${renderComponent({
    type: 'icon',
    icon: 'it-user',
    avatarTitle: 'Cerca',
    size: 'xl'
  })}
      \${renderComponent({
    type: 'icon',
    icon: 'it-user',
    avatarTitle: 'Cerca',
    size: 'xxl'
  })}
    </div>
  \`
}`,...(st=(it=R.parameters)==null?void 0:it.docs)==null?void 0:st.source}}};var rt,nt,ot;M.parameters={...M.parameters,docs:{...(rt=M.parameters)==null?void 0:rt.docs,source:{originalSource:`{
  argTypes: {
    href: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
Per associare un avatar ad un'azione o un link, utilizzare l'attributo \\\`href\\\` con relativo link o chiamata JavaScript.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Tooltip non ancora implementato</span></div>
<p>La funzionalità tooltip per gli avatar con link è attualmente in fase di sviluppo. </p></div></div>

\`
      }
    }
  },
  render: () => html\`
    <div>
      <div class="d-flex align-items-center gap-3 flex-wrap">
        \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/women/41.jpg',
    alt: 'Anna Barbieri',
    href: '#',
    avatarTitle: 'Anna Barbieri'
  })}
        \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    href: '#',
    avatarTitle: 'Mario Rossi'
  })}
        \${renderComponent({
    type: 'text',
    text: 'Mario Rossi',
    variant: 'primary',
    href: '#',
    avatarTitle: 'Mario Rossi'
  })}
        \${renderComponent({
    type: 'icon',
    icon: 'it-user',
    href: '#',
    avatarTitle: 'Cerca'
  })}
      </div>
    </div>
  \`
}`,...(ot=(nt=M.parameters)==null?void 0:nt.docs)==null?void 0:ot.source}}};var lt,dt,ct;T.parameters={...T.parameters,docs:{...(lt=T.parameters)==null?void 0:lt.docs,source:{originalSource:`{
  name: 'Comportamento - Presenza utente',
  argTypes: {
    presence: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
L'avatar supporta indicatori di presenza dell'utente attraverso l'attributo \\\`presence\\\`:

- **Lo stato attivo** si ottiene aggiungendo l'attributo \\\`presence="active"\\\`
- **Lo stato non disponibile** si ottiene aggiungendo l'attributo \\\`presence="busy"\\\`
- **Lo stato invisibile** si ottiene aggiungendo l'attributo \\\`presence="hidden"\\\`

#### Personalizzazione con Slot
L'esempio "Presenza personalizzata con slot" mostra come lo stesso componente possa essere adattato a stili o contenuti differenti tramite gli slot, per illustrare la flessibilità dell'approccio.
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Ricordarsi sempre di includere testo per screen reader con \\\`<span class="visually-hidden">\\\` in caso di uso di personalizzazione.</p></div></div>

È possibile personalizzare completamente l'indicatore di presenza usando il **\\\`slot="presence"\\\`**:

\\\`\\\`\\\`html
<it-avatar text="Nome Utente" presence="active">
  <span slot="presence" class="custom-presence-indicator">
    <it-icon name="it-check"></it-icon>
    <span class="visually-hidden">Utente online</span>
  </span>
</it-avatar>
\\\`\\\`\\\`

\\\`\\\`\\\`css
.custom-presence-indicator {
  position: absolute;
  bottom: 0;
  right: 0;
  /* altri stili personalizzati */
}
\\\`\\\`\\\`

Le traduzioni dei nomi degli stati sono gestite automaticamente tramite il [sistema @italia/i18n](/docs/componenti-i18n--documentazione).
\`
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Esempi standard -->
      <div>
        <h4>Presenza standard</h4>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/men/43.jpg',
    alt: 'Mario Rossi',
    presence: 'active',
    size: 'lg'
  })}
            <div class="mt-2"><small>Attivo</small></div>
          </div>
          <div class="text-center">
            \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/women/41.jpg',
    alt: 'Luisa Neri',
    presence: 'busy',
    size: 'lg'
  })}
            <div class="mt-2"><small>Non disponibile</small></div>
          </div>
          <div class="text-center">
            \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/men/33.jpg',
    alt: 'Gioacchino Romani',
    presence: 'hidden',
    size: 'lg'
  })}
            <div class="mt-2"><small>Invisibile</small></div>
          </div>
        </div>
      </div>

      <!-- Esempi con slot personalizzati -->
      <div>
        <h4>Presenza personalizzata con slot</h4>
        <p>
          L'esempio "Presenza personalizzata con slot" mostra come lo stesso componente possa essere adattato a stili o
          contenuti differenti tramite gli slot, per illustrare la flessibilità dell'approccio.
        </p>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            <it-avatar type="text" text="Marco Bianchi" variant="primary" presence="active" size="lg">
              <span slot="presence" class="custom-presence custom-presence-success">
                <it-icon name="it-check" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Utente online e disponibile</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Con icona check</small></div>
          </div>

          <div class="text-center">
            <it-avatar type="text" text="Sara Verdi" variant="secondary" presence="busy" size="lg">
              <span slot="presence" class="custom-presence custom-presence-danger">
                !
                <span class="visually-hidden">Utente occupato, non disturbare</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Con testo custom</small></div>
          </div>
        </div>
      </div>
    </div>

    <style>
      /* Esempi di classi CSS per personalizzare gli slot presence */
      .custom-presence {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 20px;
        height: 20px;
        border: 2px solid white;
        border-radius: 50%;
        z-index: 10;
      }

      .custom-presence-success {
        background: #28a745;
      }

      .custom-presence-danger {
        background: #dc3545;
        font-size: 10px;
        font-weight: bold;
        color: white;
      }
    </style>
  \`
}`,...(ct=(dt=T.parameters)==null?void 0:dt.docs)==null?void 0:ct.source}}};var pt,mt,vt;k.parameters={...k.parameters,docs:{...(pt=k.parameters)==null?void 0:pt.docs,source:{originalSource:`{
  name: 'Comportamento - Status utente',
  argTypes: {
    status: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
L'avatar supporta indicatori di stato dell'account attraverso l'attributo \\\`status\\\`:

- **Lo stato approvato** si ottiene aggiungendo l'attributo \\\`status="approved"\\\`
- **Lo stato respinto** si ottiene aggiungendo l'attributo \\\`status="declined"\\\`
- **Lo stato notifica** si ottiene aggiungendo l'attributo \\\`status="notify"\\\`

#### Personalizzazione con Slot
L'esempio "Status personalizzato con slot" mostra come lo stesso componente possa essere adattato a stili o contenuti differenti tramite gli slot, per illustrare la flessibilità dell'approccio.
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Ricordarsi sempre di includere testo per screen reader con \\\`<span class="visually-hidden">\\\` in caso di uso di personalizzazione.</p></div></div>


È possibile personalizzare completamente l'indicatore di stato usando il **\\\`slot="status"\\\`**:

\\\`\\\`\\\`html
<it-avatar text="Nome Utente" status="approved">
  <span slot="status" class="custom-status-indicator">
    <it-icon name="it-check-circle"></it-icon>
    <span class="visually-hidden">Account verificato</span>
  </span>
</it-avatar>
\\\`\\\`\\\`

\\\`\\\`\\\`css
.custom-status-indicator {
  position: absolute;
  top: -5px;
  right: -5px;
  /* altri stili personalizzati */
}
\\\`\\\`\\\`


Le traduzioni sono gestite automaticamente tramite il [sistema @italia/i18n](/docs/componenti-i18n--documentazione).
\`
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 2rem;">
      <!-- Esempi standard -->
      <div>
        <h4>Status standard</h4>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/men/43.jpg',
    alt: 'Mario Rossi',
    status: 'approved',
    size: 'lg'
  })}
            <div class="mt-2"><small>Approvato</small></div>
          </div>
          <div class="text-center">
            \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/women/41.jpg',
    alt: 'Luisa Neri',
    status: 'declined',
    size: 'lg'
  })}
            <div class="mt-2"><small>Respinto</small></div>
          </div>
          <div class="text-center">
            \${renderComponent({
    type: 'image',
    src: 'https://randomuser.me/api/portraits/men/33.jpg',
    alt: 'Gioacchino Romani',
    status: 'notify',
    size: 'lg'
  })}
            <div class="mt-2"><small>Notifica</small></div>
          </div>
        </div>
      </div>

      <!-- Esempi con slot personalizzati -->
      <div>
        <h4>Status personalizzato con slot</h4>
        <p>
          L'esempio "Status personalizzato con slot" mostra come lo stesso componente possa essere adattato a stili o
          contenuti differenti tramite gli slot, per illustrare la flessibilità dell'approccio.
        </p>
        <div class="d-flex align-items-center gap-4 flex-wrap">
          <div class="text-center">
            <it-avatar type="text" text="Luigi Neri" variant="primary" status="approved" size="lg">
              <span slot="status" class="custom-status custom-status-success">
                <it-icon name="it-check-circle" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Account verificato e approvato</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Verificato</small></div>
          </div>

          <div class="text-center">
            <it-avatar type="text" text="Carla Blu" variant="secondary" status="declined" size="lg">
              <span slot="status" class="custom-status custom-status-danger">
                <it-icon name="it-close" size="xs" color="white"></it-icon>
                <span class="visually-hidden">Account sospeso o respinto</span>
              </span>
            </it-avatar>
            <div class="mt-2"><small>Sospeso</small></div>
          </div>
        </div>
      </div>
    </div>

    <style>
      /* Esempi di classi CSS per personalizzare gli slot status */
      .custom-status {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: -5px;
        right: -5px;
        width: 24px;
        height: 24px;
        border: 2px solid white;
        border-radius: 50%;
        z-index: 10;
      }

      .custom-status-success {
        background: #28a745;
      }

      .custom-status-danger {
        background: #dc3545;
      }
    </style>
  \`
}`,...(vt=(mt=k.parameters)==null?void 0:mt.docs)==null?void 0:vt.source}}};var ut,ht,gt;L.parameters={...L.parameters,docs:{...(ut=L.parameters)==null?void 0:ut.docs,source:{originalSource:`{
  name: 'Gruppi di avatar - Liste verticali',
  parameters: {
    docs: {
      description: {
        story: \`
Utilizzando una lista di link con l’aggiunta della classe .avatar-group si ottiene una lista verticale con avatar affiancati da link e testi.

È possibile utilizzare avatar di dimensione \\\`sm\\\` o \\\`md\\\` all'interno della lista.
\`
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: 3rem; flex-wrap: wrap;">
      <div style="flex: 1; min-width: 300px;">
        <h4>Lista Verticale - Dimensione SM</h4>
        <div class="link-list-wrapper">
          <ul class="link-list avatar-group">
            <li>
              <a class="list-item" href="#">
                \${renderComponent({
    size: 'sm',
    src: 'https://randomuser.me/api/portraits/men/43.jpg'
  })}
                <span>Mario Rossi</span>
              </a>
            </li>
            <li>
              <a class="list-item" href="#">
                \${renderComponent({
    size: 'sm',
    src: 'https://randomuser.me/api/portraits/women/44.jpg'
  })}
                <span>Anna Verdi</span>
              </a>
            </li>
            <li>
              <div class="list-item">
                \${renderComponent({
    size: 'sm',
    text: 'Sara Ghione',
    variant: 'primary'
  })}
                <span>Sara Ghione</span>
              </div>
            </li>
            <li>
              <div class="list-item">
                \${renderComponent({
    size: 'sm',
    icon: 'it-user',
    avatarTitle: 'Utente generico'
  })}
                <span>Antonio Esposito</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div style="flex: 1; min-width: 300px;">
        <h4>Lista Verticale - Dimensione MD</h4>
        <div class="link-list-wrapper">
          <ul class="link-list avatar-group">
            <li>
              <a class="list-item" href="#">
                \${renderComponent({
    src: 'https://randomuser.me/api/portraits/men/32.jpg'
  })}
                <span>Luca Bianchi</span>
              </a>
            </li>
            <li>
              <a class="list-item" href="#">
                \${renderComponent({
    src: 'https://randomuser.me/api/portraits/women/28.jpg'
  })}
                <span>Elena Rossi</span>
              </a>
            </li>
            <li>
              <div class="list-item">
                \${renderComponent({
    text: 'Marco Neri',
    variant: 'secondary'
  })}
                <span>Marco Neri</span>
              </div>
            </li>
            <li>
              <div class="list-item">
                \${renderComponent({
    icon: 'it-user',
    avatarTitle: 'Cerca'
  })}
                <span>Cerca utenti</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  \`
}`,...(gt=(ht=L.parameters)==null?void 0:ht.docs)==null?void 0:gt.source}}};var ft,xt,yt;j.parameters={...j.parameters,docs:{...(ft=j.parameters)==null?void 0:ft.docs,source:{originalSource:`{
  name: 'Gruppi di avatar - Avatar Sovrapposti',
  parameters: {
    docs: {
      description: {
        story: \`

Racchiudendo una serie di avatar in una lista di tipo <ul> con classe .avatar-group-stacked questi verranno visualizzati come una lista orizzontale in cui i singoli elementi sono parzialmente sovrapposti. In questo tipo di gruppo è possibile inserire dei Dropdown per racchiudere ulteriori elementi avatar.

È possibile utilizzare avatar di dimensione \\\`sm\\\` o \\\`md\\\` all'interno della lista.


Per mostrare ulteriori avatar in un menu a discesa, utilizzare \\\`it-avatar\\\` con \\\`type="dropdown"\\\`.

L'avatar dropdown eredita automaticamente la dimensione dal gruppo e può contenere una lista di avatar con nomi nel menu.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità del dropdown</span></div>
<p>È fondamentale utilizzare l'attributo \\\`it-aria-label\\\` sul componente \\\`it-dropdown\\\` per fornire una descrizione significativa agli screen reader. Senza questo attributo, uno screen reader leggerebbe solo il testo del label (es. "+4") senza contesto, mentre con \\\`it-aria-label="Altri utenti"\\\` fornisce una descrizione chiara e comprensibile.</p></div></div>
\`
      }
    }
  },
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 3rem; height: 300px;">
      <div>
        <ul class="avatar-group-stacked">
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo" href="#"></it-avatar>
          </li>
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo" href="#"></it-avatar>
          </li>
          <li>
            \${renderComponent({
    type: 'text',
    text: 'Giulia Neri',
    variant: 'primary',
    href: '#',
    avatarTitle: 'Giulia Neri',
    slot: 'trigger'
  })}
          </li>
          <li><it-avatar text="Sandro Penna" variant="secondary" href="#"></it-avatar></li>
          <li>
            <it-avatar type="dropdown">
              <it-dropdown label="4+" slot="avatar-dropdown-content" it-aria-label="Altri utenti" variant="secondary">
                <it-dropdown-item href="#">
                  <it-avatar src="https://randomuser.me/api/portraits/men/22.jpg" alt="Foto profilo"></it-avatar>
                  <span>Roberto Milano</span>
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-avatar text="Giuseppe Verde" variant="primary"></it-avatar>
                  <span>Giuseppe Verde</span>
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-avatar text="Laura Blu" variant="secondary"></it-avatar>
                  <span>Laura Blu</span>
                </it-dropdown-item>
                <it-dropdown-item href="#">
                  <it-avatar icon="it-user" avatar-title="Altri utenti"></it-avatar>
                  <span>Altri utenti...</span>
                </it-dropdown-item>
              </it-dropdown>
            </it-avatar>
          </li>
        </ul>
      </div>
      <p style="margin-top: 0.75rem; font-size: 16px; variant: #666;">
        Clicca su "+4" per visualizzare gli utenti rimanenti
      </p>
    </div>
  \`
}`,...(yt=(xt=j.parameters)==null?void 0:xt.docs)==null?void 0:yt.source}}};var bt,zt,wt;V.parameters={...V.parameters,docs:{...(bt=V.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  name: 'Gruppi di avatar - Avatar Sovrapposti Piccoli',
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <ul class="avatar-group-stacked">
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo" size="sm"></it-avatar>
          </li>
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo" size="sm"></it-avatar>
          </li>
          <li>
            <it-avatar src="https://randomuser.me/api/portraits/women/41.jpg" alt="Foto profilo" size="sm"></it-avatar>
          </li>
          <li><it-avatar text="Tommaso Sordi" variant="primary" size="sm"></it-avatar></li>
          <li><it-avatar text="Barbara Tosi" size="sm"></it-avatar></li>
          <li><it-avatar text="Barbara Tosi" variant="secondary" size="sm"></it-avatar></li>
        </ul>
      </div>
    </div>
  \`
}`,...(wt=(zt=V.parameters)==null?void 0:zt.docs)==null?void 0:wt.source}}};var $t,Ct,At;_.parameters={..._.parameters,docs:{...($t=_.parameters)==null?void 0:$t.docs,source:{originalSource:`{
  name: 'Gruppi di avatar - Avatar Sovrapposti Medi',
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 3rem;">
      <div>
        <div>
          <ul class="avatar-group-stacked">
            <li>
              <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo" href="#"></it-avatar>
            </li>
            <li>
              <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo" href="#"></it-avatar>
            </li>
            <li>
              \${renderComponent({
    type: 'text',
    text: 'Giulia Neri',
    variant: 'primary',
    href: '#',
    avatarTitle: 'Giulia Neri',
    slot: 'trigger'
  })}
            </li>
            <li><it-avatar text="Sandro Penna" variant="secondary" href="#"></it-avatar></li>
            <li><it-avatar text="Sandro Penna" href="#"></it-avatar></li>
          </ul>
        </div>
      </div>
    </div>
  \`
}`,...(At=(Ct=_.parameters)==null?void 0:Ct.docs)==null?void 0:At.source}}};var St,Et,Rt;I.parameters={...I.parameters,docs:{...(St=I.parameters)==null?void 0:St.docs,source:{originalSource:`{
  name: 'Avatar con testo aggiuntivo',
  parameters: {
    docs: {
      description: {
        story: \`
Per ottenere una versione del componente con nome esteso ed eventuale testo accessorio, utilizza lo slot \\\`extra-text\\\`.

Per il nome è possibile utilizzare i tag \\\`<h3>\\\` o \\\`<h4>\\\` tramite lo slot. Il testo esteso può essere contenuto in un \\\`<p>\\\` o in un tag \\\`<time>\\\` nel caso di date/orari.
\`
      }
    }
  },
  render: () => html\`
    <div class="d-flex gap-4">
      <it-avatar type="image" src="https://randomuser.me/api/portraits/men/43.jpg" size="xl" text="Mario Rossi">
        <div slot="extra-text">
          <h4>Mario Rossi</h4>
          <time>15 SET 2025</time>
        </div>
      </it-avatar>

      <it-avatar type="image" src="https://randomuser.me/api/portraits/women/44.jpg" size="xl" text="Giulia Neri">
        <div slot="extra-text">
          <h4>Giulia Neri</h4>
          <p>LOREM IPSUM DOLOR</p>
        </div>
      </it-avatar>

      <it-avatar type="text" text="Michele Dotti" variant="primary" size="xl">
        <div slot="extra-text">
          <h4>Michele Dotti</h4>
          <time>12 MAG 2025</time>
        </div>
      </it-avatar>
    </div>
  \`
}`,...(Rt=(Et=I.parameters)==null?void 0:Et.docs)==null?void 0:Rt.source}}};var Mt,Tt,kt;N.parameters={...N.parameters,docs:{...(Mt=N.parameters)==null?void 0:Mt.docs,source:{originalSource:`{
  name: 'Gruppi di avatar - Liste verticali con testo aggiuntivo',
  parameters: {
    docs: {
      description: {
        story: \`
È possibile combinare le liste verticali con avatar che includono testo aggiuntivo tramite lo slot \\\`extra-text\\\`.

Questo è particolarmente utile per creare liste di utenti con informazioni aggiuntive come ruoli, date o descrizioni.
\`
      }
    }
  },
  render: () => html\`
    <div style="max-width: 400px;">
      <h4>Lista Team con Ruoli</h4>
      <div class="link-list-wrapper">
        <ul class="link-list avatar-group">
          <li>
            <div class="list-item">
              <it-avatar src="https://randomuser.me/api/portraits/men/43.jpg" alt="Foto profilo">
                <div slot="extra-text">
                  <h4>Mario Rossi</h4>
                  <p>TEAM LEADER</p>
                </div>
              </it-avatar>
            </div>
          </li>
          <li>
            <div class="list-item">
              <it-avatar src="https://randomuser.me/api/portraits/women/44.jpg" alt="Foto profilo">
                <div slot="extra-text">
                  <h4>Giulia Neri</h4>
                  <p>FRONTEND DEVELOPER</p>
                </div>
              </it-avatar>
            </div>
          </li>
          <li>
            <div class="list-item">
              <it-avatar text="Andrea Bianchi" variant="primary">
                <div slot="extra-text">
                  <h4>Andrea Bianchi</h4>
                  <p>BACKEND DEVELOPER</p>
                </div>
              </it-avatar>
            </div>
          </li>
          <li>
            <div class="list-item">
              <it-avatar text="Sara Verde" variant="secondary">
                <div slot="extra-text">
                  <h4>Sara Verde</h4>
                  <time>ULTIMO ACCESSO: 12 SET 2025</time>
                </div>
              </it-avatar>
            </div>
          </li>
        </ul>
      </div>
    </div>
  \`
}`,...(kt=(Tt=N.parameters)==null?void 0:Tt.docs)==null?void 0:kt.source}}};const me=["EsempioInterattivo","PersonalizzazioneDegliStili","AvatarConImmagine","AvatarConTesto","AvatarConIcona","AvatarLink","ComportamentoPresenzaUtente","ComportamentoStatusUtente","GruppiAvatarListe","AvatarSovrapposti","AvatarSovrappostiSM","AvatarSovrappostiMD","AvatarConTestoAggiuntivo","GruppiAvatarConTesto"];export{R as AvatarConIcona,S as AvatarConImmagine,E as AvatarConTesto,I as AvatarConTestoAggiuntivo,M as AvatarLink,j as AvatarSovrapposti,_ as AvatarSovrappostiMD,V as AvatarSovrappostiSM,T as ComportamentoPresenzaUtente,k as ComportamentoStatusUtente,C as EsempioInterattivo,N as GruppiAvatarConTesto,L as GruppiAvatarListe,A as PersonalizzazioneDegliStili,me as __namedExportsOrder,ie as default};
