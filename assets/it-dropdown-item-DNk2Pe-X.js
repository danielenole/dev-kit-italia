import{a as $,i as O,E as j,x as b}from"./iframe-Bva7CR0T.js";import{r as z,e as V,n as a,t as F,o as g}from"./query-CblQfenQ.js";function i(d,t,e,o){var r=arguments.length,s=r<3?t:o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(d,t,e,o);else for(var m=d.length-1;m>=0;m--)(l=d[m])&&(s=(r<3?l(s):r>3?l(t,e,s):l(t,e))||s);return r>3&&s&&Object.defineProperty(t,e,s),s}function n(d,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(d,t)}function A(d){var t,e,o="";if(typeof d=="string"||typeof d=="number")o+=d;else if(typeof d=="object")if(Array.isArray(d)){var r=d.length;for(t=0;t<r;t++)d[t]&&(e=A(d[t]))&&(o&&(o+=" "),o+=e)}else for(e in d)d[e]&&(o&&(o+=" "),o+=e);return o}function T(){for(var d,t,e=0,o="",r=arguments.length;e<r;e++)(d=arguments[e])&&(t=A(d))&&(o&&(o+=" "),o+=t);return o}const E=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:w}=window;let u,C="ltr",_="en";const R=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function S(){R&&(C=document.documentElement.dir||"ltr",_=document.documentElement.lang||navigator.language),[...E.keys()].forEach(d=>{const t=d;typeof t.requestUpdate=="function"&&t.requestUpdate()})}if(R){const d=new MutationObserver(S);C=document.documentElement.dir||"ltr",_=document.documentElement.lang||navigator.language,d.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function D(...d){d.forEach(t=>{const e=t.$code.toLowerCase();w.has(e)?w.set(e,{...w.get(e),...t}):w.set(e,t),u||(u=t)}),S()}window.registerTranslation=D;class N{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){E.add(this.host)}hostDisconnected(){E.delete(this.host)}dir(){return`${this.host.dir||C}`.toLowerCase()}lang(){return`${this.host.lang||_}`.toLowerCase()}getTranslationData(t){var m;const e=new Intl.Locale(t.replace(/_/g,"-")),o=e==null?void 0:e.language.toLowerCase(),r=((m=e==null?void 0:e.region)==null?void 0:m.toLowerCase())??"",s=w.get(`${o}-${r}`),l=w.get(o);return{locale:e,language:o,region:r,primary:s,secondary:l}}exists(t,e){const{primary:o,secondary:r}=this.getTranslationData(e.lang??this.lang()),s={includeFallback:!1,...e};return!!(o&&o[t]||r&&r[t]||s.includeFallback&&u&&u[t])}term(t,...e){const{primary:o,secondary:r}=this.getTranslationData(this.lang());let s;if(o&&o[t])s=o[t];else if(r&&r[t])s=r[t];else if(u&&u[t])s=u[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof s=="function"?s(...e):s}date(t,e){const o=new Date(t);return new Intl.DateTimeFormat(this.lang(),e).format(o)}number(t,e){const o=Number(t);return Number.isNaN(o)?"":new Intl.NumberFormat(this.lang(),e).format(o)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}const B=d=>class extends d{constructor(){super(...arguments),this.localize=new N(this)}get $localize(){return this.localize}$t(t){return this.localize.term(t)}$d(t,e){return this.localize.date(t,e)}$n(t,e){return this.localize.number(t,e)}};class W{constructor(t){this.tag=t}format(t,e){return[`[${this.tag}] ${e}`]}warn(t){console.warn(...this.format("warn",t))}error(t){console.error(...this.format("error",t))}info(t){console.info(...this.format("info",t))}}class I extends ${constructor(){super(),this.composeClass=T,this.logger=new W(this.tagName.toLowerCase())}get _ariaAttributes(){const t={};for(const e of this.getAttributeNames())e==="it-role"?t.role=this.getAttribute(e):e.startsWith("it-aria-")&&(t[e.replace(/^it-/,"")]=this.getAttribute(e));return t}generateId(t){return`${t}-${Math.random().toString(36).slice(2)}`}addFocus(t){}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}get focusElement(){return this}get prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}connectedCallback(){var e;super.connectedCallback();const t=((e=this.id)==null?void 0:e.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(t)}}const U=B(I),f=new WeakMap,v=new WeakMap,y=new WeakMap,k=new WeakSet,x=new WeakMap;class q{constructor(t,e){this.handleFormData=o=>{const r=this.options.disabled(this.host),s=this.options.name(this.host),l=this.options.value(this.host),m=this.host.tagName.toLowerCase(),L=m==="it-button";if(this.host.isConnected&&!r&&!L&&typeof s=="string"&&s.length>0&&typeof l<"u")switch(m){case"it-radio":this.host.checked&&o.formData.append(s,l);break;default:Array.isArray(l)?l.forEach(M=>{o.formData.append(s,M.toString())}):o.formData.append(s,l.toString())}},this.handleFormSubmit=o=>{var l;const r=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((l=f.get(this.form))==null||l.forEach(m=>{this.setUserInteracted(m,!0)})),this.form&&!this.form.noValidate&&!r&&!s(this.host)&&o.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),x.set(this.host,[])},this.handleInteraction=o=>{const r=x.get(this.host);r.includes(o.type)||r.push(o.type),r.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.checkValidity=="function"&&!r.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const r of o)if(typeof r.reportValidity=="function"&&!r.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:o=>{const r=o.form;if(r){const l=o.getRootNode().querySelector(`#${r}`);if(l)return l}return o.closest("form")},name:o=>o.name,value:o=>o.value,disabled:o=>o.disabled??!1,reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,r)=>{o.value=r},assumeInteractionOn:["it-input"],...e}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),x.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),x.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,f.has(this.form)?f.get(this.form).add(this.host):f.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),v.has(this.form)||(v.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),y.has(this.form)||(y.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=f.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),v.has(this.form)&&(this.form.reportValidity=v.get(this.form),v.delete(this.form)),y.has(this.form)&&(this.form.checkValidity=y.get(this.form),y.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?k.add(t):k.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(r=>{e.hasAttribute(r)&&o.setAttribute(r,e.getAttribute(r))})),this.form.append(o),o.click(),o.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!k.has(e),r=!!e.required;e.toggleAttribute("data-required",r),e.toggleAttribute("data-optional",!r),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}}const P={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};D(P);class p extends U{constructor(){super(...arguments),this.formControlController=new q(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var t;return(t=this.inputElement)==null?void 0:t.validity}checkValidity(){var e;return((e=this.inputElement)==null?void 0:e.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.inputElement.checkValidity();return this.handleValidationMessages(),t}setCustomValidity(t){this.inputElement.setCustomValidity(t),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(t){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(t){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(t){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(t){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const t=this.inputElement.validity;t.valueMissing?this.setCustomValidity(this.$t("validityRequired")):t.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):t.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):t.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):t.typeMismatch||t.rangeUnderflow||t.rangeOverflow||t.stepMismatch||t.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}_handleChange(t){const e=t.target;let o;if(e instanceof HTMLInputElement)switch(e.type){case"checkbox":case"radio":o=e.checked;break;case"file":o=e.files;break;default:o=e.value}else e instanceof HTMLSelectElement&&e.multiple?o=Array.from(e.selectedOptions).map(r=>r.value):o=e.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:o,el:e},bubbles:!0,composed:!0}))}updated(t){var e;(e=super.updated)==null||e.call(this,t),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}i([z(),n("design:type",Object)],p.prototype,"_touched",void 0);i([V(".it-form__control"),n("design:type",HTMLInputElement)],p.prototype,"inputElement",void 0);i([a({type:String,reflect:!0}),n("design:type",Object)],p.prototype,"name",void 0);i([a({reflect:!0}),n("design:type",Object)],p.prototype,"value",void 0);i([a({type:Boolean,reflect:!0}),n("design:type",Object)],p.prototype,"disabled",void 0);i([a({reflect:!0,type:String}),n("design:type",Object)],p.prototype,"form",void 0);i([a({type:Boolean,reflect:!0,attribute:"custom-validation"}),n("design:type",Object)],p.prototype,"customValidation",void 0);i([a({attribute:"validity-message",reflect:!0}),n("design:type",String)],p.prototype,"validationText",void 0);i([a(),n("design:type",String)],p.prototype,"pattern",void 0);i([a(),n("design:type",Object)],p.prototype,"min",void 0);i([a(),n("design:type",Object)],p.prototype,"max",void 0);i([a(),n("design:type",Object)],p.prototype,"step",void 0);i([a({type:Number}),n("design:type",Object)],p.prototype,"minlength",void 0);i([a({type:Number}),n("design:type",Object)],p.prototype,"maxlength",void 0);i([a({type:Boolean,reflect:!0}),n("design:type",Object)],p.prototype,"required",void 0);i([z(),n("design:type",Object)],p.prototype,"validationMessage",void 0);class K{constructor(t){this.host=t,this.host.addController(this)}setConfig(t){this.config=t}hostDisconnected(){this.host.removeController(this)}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}handleKeyDown(t){if(!this.config)return;const e=this.config.getItems(),o=e.indexOf(this.getActiveElement());switch(t.key){case"ArrowDown":t.preventDefault(),e.length&&o<e.length-1&&this.config.setActive(o<0?0:o+1);break;case"ArrowUp":t.preventDefault(),e.length&&this.config.setActive(o<0?e.length-1:o-1);break;case"Home":t.preventDefault(),e.length&&this.config.setActive(0);break;case"End":t.preventDefault(),e.length&&this.config.setActive(e.length-1);break;case"Escape":t.preventDefault(),this.config.closeMenu();break}}}var Y=O`/***************************** 1 ****************************************/
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
.dropdown-menu {
  --bs-dropdown-zindex: 8;
  --bs-dropdown-min-width: 10rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: var(--bs-spacing-xxs);
  --bs-dropdown-spacer: 0.125rem;
  --bs-dropdown-font-size: var(--bs-label-font-size);
  --bs-dropdown-color: var(--bs-color-text-base);
  --bs-dropdown-background: var(--bs-color-background-inverse);
  --bs-dropdown-border-color: transparent;
  --bs-dropdown-border-radius: var(--bs-radius-smooth);
  --bs-dropdown-border-width: 0;
  --bs-dropdown-inner-border-radius: var(--bs-radius-smooth);
  --bs-dropdown-divider-bg: var(--bs-color-border-subtle);
  --bs-dropdown-divider-margin-y: var(--bs-spacing-xxs);
  --bs-dropdown-box-shadow: var(--bs-elevation-medium);
  --bs-dropdown-link-color: var(--bs-color-text-primary);
  --bs-dropdown-link-hover-color: var(--bs-color-text-primary-hover);
  --bs-dropdown-link-active-color: var(--bs-color-text-primary-active);
  --bs-dropdown-item-padding-x: var(--bs-spacing-s);
  --bs-dropdown-item-padding-y: var(--bs-spacing-xs);
  --bs-dropdown-header-color: var(--bs-color-text-secondary);
  --bs-dropdown-header-font-size: var(--bs-label-font-size);
  --bs-dropdown-header-padding-x: var(--bs-spacing-s);
  --bs-dropdown-header-padding-y: var(--bs-spacing-xxs);
  --bs-dropdown-notch-base-size: 1.125rem;
  --bs-dropdown-notch-position-x: 20px;
  --bs-dropdown-notch-position-y: -8px;
  --bs-dropdown-animation-speed: var(--bs-transition-instant);
  --bs-dropdown-vertical-shift: 10px;
}

.dropup,
.dropend,
.dropdown,
.dropstart,
.dropup-center,
.dropdown-center {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  z-index: var(--bs-dropdown-zindex);
  display: none;
  min-width: var(--bs-dropdown-min-width);
  margin: 0;
  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
  border-radius: 0 0 var(--bs-dropdown-border-radius) var(--bs-dropdown-border-radius);
  background-color: var(--bs-dropdown-background);
  color: var(--bs-dropdown-color);
  list-style: none;
  text-align: left;
  background-clip: padding-box;
  font-size: var(--bs-dropdown-font-size);
  box-shadow: var(--bs-dropdown-box-shadow);
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: var(--bs-dropdown-spacer);
}
.dropdown-menu.full-width {
  width: 100%;
}
.dropdown-menu.full-width .link-list li {
  display: inline-block;
  width: auto;
}
.dropdown-menu.full-width .link-list li:hover, .dropdown-menu.full-width .link-list li:focus {
  background: none;
  text-decoration: underline;
}
.dropdown-menu .link-list {
  margin-bottom: 0;
}
.dropdown-menu:before {
  position: absolute;
  top: var(--bs-dropdown-notch-position-y);
  left: var(--bs-dropdown-notch-position-x);
  content: "";
  width: var(--bs-dropdown-notch-base-size);
  height: var(--bs-dropdown-notch-base-size);
  border-radius: var(--bs-dropdown-border-radius);
  background-color: var(--bs-dropdown-background);
  transform: rotate(45deg);
}
.dropdown-menu[data-popper-placement=top-start] {
  border-radius: var(--bs-dropdown-border-radius) var(--bs-dropdown-border-radius) 0 0;
}
.dropdown-menu[data-popper-placement=top-start]:before {
  top: auto;
  bottom: var(--bs-dropdown-notch-position-y);
}
.dropdown-menu[data-popper-placement=bottom-end]:before {
  right: calc(var(--bs-dropdown-notch-position-x) / 2);
  left: auto;
}
.dropdown-menu.dark {
  --bs-dropdown-text-color: hsl(0, 0%, 83%);
  --bs-dropdown-background: var(--bs-color-background-primary-muted);
  --bs-dropdown-link-color: hsl(0, 0%, 83%);
  --bs-dropdown-divider-bg: transparent;
  --bs-dropdown-link-active-color: var(--bs-color-text-inverses);
  --bs-dropdown-header-color: hsl(0, 0%, 45%);
}
.dropdown-menu.dark:before {
  background-color: var(--bs-dropdown-background);
}
.dropdown-menu.dark .link-list-heading {
  color: var(--bs-color-text-inverse);
}
.dropdown-menu.dark .link-list span.divider {
  background: #2e465e;
}
.dropdown-menu.dark .link-list a span,
.dropdown-menu.dark .link-list a:hover span {
  color: var(--bs-color-text-inverse);
}
.dropdown-menu.dark .link-list a.active span {
  text-decoration: underline;
}
.dropdown-menu.show {
  display: block;
}
.dropdown-menu.show[data-popper-placement=bottom-start] {
  animation: dropdownFadeIn forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=top-start] {
  animation: dropdownFadeInTop forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=left-start] {
  animation: dropdownFadeInTop forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=left-start]:before {
  top: 20px;
  right: -6px;
  left: auto;
}
.dropdown-menu.show[data-popper-placement=right-start] {
  animation: dropdownFadeInTop forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=right-start]:before {
  top: 20px;
  left: -6px;
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: var(--bs-dropdown-spacer);
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: var(--bs-dropdown-spacer);
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: var(--bs-dropdown-spacer);
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: var(--bs-dropdown-divider-margin-y) 0;
  overflow: hidden;
  border-top: 1px solid var(--bs-dropdown-divider-bg);
  opacity: 1;
}

.dropdown-item.list-item {
  width: auto;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  border: 0;
  background-color: transparent;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
}
.dropdown-item.list-item:hover, .dropdown-item.list-item:focus {
  text-decoration: none;
}

.dropdown-header {
  display: block;
  margin-bottom: 0;
  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
  color: var(--bs-dropdown-header-color);
  font-size: var(--bs-dropdown-header-font-size);
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  color: var(--bs-dropdown-link-color);
}

@keyframes dropdownFadeIn {
  0% {
    margin-top: 0;
    opacity: 0;
  }
  100% {
    margin-top: var(--bs-dropdown-vertical-shift);
    opacity: 1;
  }
}
@keyframes dropdownFadeInTop {
  0% {
    margin-top: 0;
    opacity: 0;
  }
  100% {
    margin-top: -var(--bs-dropdown-vertical-shift);
    opacity: 1;
  }
}
.dropdown.dropup .dropdown-toggle:after,
.btn-group.dropup .dropdown-toggle:after {
  display: none;
}
.dropdown.dropup .dropdown-toggle[aria-expanded=true] .icon-expand,
.btn-group.dropup .dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: scaleY(1);
}
.dropdown.dropup .dropdown-toggle .icon-expand,
.btn-group.dropup .dropdown-toggle .icon-expand {
  transform: scaleY(-1);
}
.dropdown.dropend .dropdown-toggle:after,
.btn-group.dropend .dropdown-toggle:after {
  display: none;
}
.dropdown.dropend .dropdown-toggle[aria-expanded=true] .icon-expand,
.btn-group.dropend .dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: rotate(90deg);
}
.dropdown.dropend .dropdown-toggle .icon-expand,
.btn-group.dropend .dropdown-toggle .icon-expand {
  transform: rotate(-90deg);
}
.dropdown.dropstart .dropdown-toggle:before,
.btn-group.dropstart .dropdown-toggle:before {
  display: none;
}
.dropdown.dropstart .dropdown-toggle[aria-expanded=true] .icon-expand,
.btn-group.dropstart .dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: rotate(-90deg);
}
.dropdown.dropstart .dropdown-toggle .icon-expand,
.btn-group.dropstart .dropdown-toggle .icon-expand {
  transform: rotate(90deg);
}

.btn-dropdown {
  --bs-dropdown-button-color: var(--bs-color-text-primary);
  --bs-dropdown-button-padding: 10px;
  --bs-dropdown-button-background: #fff;
  border-radius: 0;
  box-shadow: none;
  color: var(--bs-dropdown-button-color);
}
@media (min-width: 992px) {
  .btn-dropdown {
    font-size: var(--bs-label-font-size-m);
  }
}
.btn-dropdown:hover {
  --bs-dropdown-button-color: var(--bs-color-text-primary-hover);
  text-decoration: underline;
}
.btn-dropdown:not(:disabled):active {
  box-shadow: none;
}

.btn-dropdown:after,
.dropdown-toggle:after {
  content: "";
  display: inline;
  width: auto;
  height: auto;
  margin: 0;
  border: none;
  vertical-align: bottom;
}
.btn-dropdown .icon-expand,
.dropdown-toggle .icon-expand {
  transition: transform var(--bs-dropdown-animation-speed);
}
.btn-dropdown .icon.icon-xs,
.dropdown-toggle .icon.icon-xs {
  transform: translateY(-1px);
  transition: transform var(--bs-dropdown-animation-speed);
}
.btn-dropdown[aria-expanded=true] .icon-expand,
.dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: scaleY(-1);
}

.link-list-wrapper {
  --bs-linklist-divider-size: 1px;
  --bs-linklist-heading-font-size: var(--bs-heading-6-font-size);
  --bs-linklist-heading-color: var(--bs-color-text-secondary);
  --bs-linklist-item-font-size: var(--bs-label-font-size);
  --bs-linklist-item-line-height: var(--bs-label-line-height);
  --bs-linklist-item-spacing: var(--bs-spacing-xxs);
  --bs-linklist-nested-spacing: var(--bs-spacing-s);
}

.link-list-wrapper .link-list-heading,
.link-list-wrapper h3 {
  margin-bottom: var(--bs-spacing-xxs);
  color: var(--bs-linklist-heading-color);
  font-size: var(--bs-linklist-heading-font-size);
  font-weight: var(--bs-heading-font-weight-weak);
  line-height: var(--bs-heading-line-height);
}
.link-list-wrapper h3 {
  padding: 0 var(--bs-spacing-m);
}
.link-list-wrapper ul {
  padding: 0;
  list-style-type: none;
}
.link-list-wrapper ul.link-sublist {
  padding-left: var(--bs-linklist-nested-spacing);
}
.link-list-wrapper li span,
.link-list-wrapper .list-item {
  font-size: var(--bs-linklist-item-font-size);
  line-height: var(--bs-linklist-item-line-height);
}
.link-list-wrapper .list-item {
  position: relative;
  display: inline-block;
  padding-top: var(--bs-linklist-item-spacing);
  padding-bottom: var(--bs-linklist-item-spacing);
  text-decoration: none;
}
.link-list-wrapper .list-item.active span, .link-list-wrapper .list-item:hover:not(.disable) span {
  text-decoration: underline;
}
.link-list-wrapper .list-item.active span {
  color: var(--bs-color-text-primary-active);
}
.link-list-wrapper .list-item.active .icon {
  color: var(--bs-color-icon-primary-active);
}
.link-list-wrapper .list-item:hover:not(.disabled) span {
  color: var(--bs-color-link-hover);
}
.link-list-wrapper .list-item:hover:not(.disabled) p {
  color: var(--bs-color-text-secondary);
}
.link-list-wrapper .list-item:hover:not(.disabled) .icon {
  fill: var(--bs-icon-primary-hover);
}
.link-list-wrapper .list-item:hover:not(.disabled) .icon.icon-inverse {
  fill: var(--bs-icon-inverse);
}
.link-list-wrapper .list-item.disabled {
  cursor: not-allowed;
}
.link-list-wrapper .list-item.disabled:hover span {
  text-decoration: none;
}
.link-list-wrapper .list-item.disabled span {
  color: var(--bs-color-text-disabled);
}
.link-list-wrapper .list-item.disabled svg {
  fill: var(--bs-icon-disabled);
}
.link-list-wrapper .list-item.disabled svg.secondary {
  fill: var(--bs-icon-disabled);
}
.link-list-wrapper .list-item.medium,
.link-list-wrapper .list-item .list-item-title {
  font-weight: var(--bs-font-weight-solid);
}
.link-list-wrapper .list-item.large {
  --bs-linklist-item-font-size: var(--bs-label-font-size-m);
}
.link-list-wrapper .list-item.avatar {
  display: flex;
  margin-bottom: var(--bs-spacing-xxs);
}
.link-list-wrapper .list-item.avatar .avatar {
  display: block;
  margin-right: var(--bs-spacing-s);
}
.link-list-wrapper .list-item.icon-right, .link-list-wrapper .list-item.icon-left {
  padding-right: 0;
  padding-left: 0;
}
.link-list-wrapper .list-item.icon-left .icon {
  left: 0;
  flex-shrink: 0;
  margin-right: var(--bs-spacing-xxs);
}
.link-list-wrapper .list-item.icon-left p {
  width: 100%;
}
.link-list-wrapper .list-item.icon-right {
  width: 100%;
}
.link-list-wrapper .list-item.icon-right .list-item-title-icon-wrapper {
  justify-content: space-between;
}
.link-list-wrapper .list-item.right-icon .list-item-title-icon-wrapper {
  justify-content: space-between;
}
.link-list-wrapper .list-item.right-icon .icon {
  transition: transform 0.3s;
}
.link-list-wrapper .list-item.right-icon .icon.secondary {
  color: var(--bs-icon-secondary);
}
.link-list-wrapper .list-item[data-bs-toggle] .icon {
  transition: transform 0.3s;
}
.link-list-wrapper .list-item[aria-expanded=true] .icon {
  transform: rotate(180deg);
}
.link-list-wrapper .list-item .icon {
  display: inline-block;
  flex-shrink: 0;
}
.link-list-wrapper .list-item .list-item-title-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.link-list-wrapper .list-item .list-item-title-icon-wrapper .list-item-title {
  margin-right: var(--bs-spacing-xxs);
}
.link-list-wrapper .list-item > p {
  color: var(--bs-color-text-secondary);
  font-size: var(--bs-caption-font-size);
  line-height: var(--bs-caption-line-height);
}
.link-list-wrapper .list-item > span {
  display: inline-block;
  color: var(--bs-color-link);
}
.link-list-wrapper .divider {
  display: block;
  height: var(--bs-linklist-divider-size);
  margin: var(--bs-spacing-xxs) 0;
  background: var(--bs-color-border-subtle);
}
.link-list-wrapper .form-check {
  padding: 0 var(--bs-spacing-m);
}

.multiline .list-item-title-icon-wrapper {
  margin-bottom: var(--bs-spacing-3xs);
}
.multiline .list-item.icon-right .list-item-title-icon-wrapper {
  margin-right: 0;
}
.multiline .list-item-title {
  font-size: var(--bs-label-font-size);
}
@media (min-width: 992px) {
  .multiline .list-item-title {
    font-size: var(--bs-label-font-size-m);
  }
}
.multiline .list-item {
  width: 100%;
}
.multiline p {
  margin-bottom: 0;
}

@media (min-width: 768px) {
  .link-list-wrapper ul li a.large.icon-left,
  .link-list-wrapper ul li a.large.icon-right {
    --bs-linklist-item-spacing: var(--bs-spacing-s);
  }
}
.dark,
.theme-dark {
  --bs-linklist-heading-color: var(--bs-color-text-inverse);
}
.dark .link-list-wrapper .list-item:not(.disabled) span,
.dark .link-list-wrapper .list-item:hover span,
.theme-dark .link-list-wrapper .list-item:not(.disabled) span,
.theme-dark .link-list-wrapper .list-item:hover span {
  color: var(--bs-color-text-inverse);
}
.dark .link-list-wrapper .list-item.disabled,
.dark .link-list-wrapper .list-item.disabled span,
.theme-dark .link-list-wrapper .list-item.disabled,
.theme-dark .link-list-wrapper .list-item.disabled span {
  color: hsla(0, 0%, 100%, 0.35);
}

.dropdown-menu::before {
  content: none;
}
.dropdown-menu.dark {
  --bs-dropdown-header-color: var(--bs-color-text-inverse);
  --bs-color-border-subtle: #2e465e;
}
.dropdown-menu .arrow {
  z-index: -1;
  width: var(--bs-dropdown-notch-base-size);
  height: var(--bs-dropdown-notch-base-size);
  border-radius: var(--bs-dropdown-border-radius);
  background-color: var(--bs-dropdown-background);
}

.link-list {
  margin-top: 0;
}

:host {
  position: relative;
  display: inline-block;
  --bs-icon-default: currentColor;
}

it-button,
it-popover {
  display: inline-flex;
}

.dropdown-toggle-icon.top {
  transform: scaleY(-1);
}
.dropdown-toggle-icon.left {
  transform: rotate(90deg);
}
.dropdown-toggle-icon.right {
  transform: rotate(-90deg);
}`;let c=class extends I{constructor(){super(...arguments),this.disabled=!1,this.variant="primary",this.alignment="bottom-start",this.dark=!1,this.fullWidth=!1,this.itRole="menu",this.itAriaLabel="",this._popoverOpen=!1,this._buttonId=this.generateId("it-dropdown"),this._menuId=this.generateId("it-dropdown-menu"),this._ariaNav=new K(this),this._onTriggerClick=()=>{this.disabled||(this._popoverOpen=!this._popoverOpen)},this._onPopoverOpen=()=>{this._popoverOpen=!0},this._onPopoverClose=()=>{this._popoverOpen=!1},this._onKeyDown=t=>{const e=this._menuItems.map(l=>l.getFocusableElement()).filter(l=>!!l),o=this.getActiveElement();if(!o)return;const r=e.indexOf(o);t.key==="Tab"&&(t.shiftKey&&r===-1&&(this._popoverOpen=!1),!t.shiftKey&&r===e.length-1&&(this._popoverOpen=!1),o.ariaDisabled&&(t.shiftKey?this._ariaNav.handleKeyDown(new KeyboardEvent("keydown",{...t,key:"ArrowUp"})):this._ariaNav.handleKeyDown(new KeyboardEvent("keydown",{...t,key:"ArrowDown"}))));const s=()=>{this._ariaNav.setConfig({getItems:()=>e,setActive:l=>{var m;return(m=e[l])==null?void 0:m.focus()},closeMenu:()=>{this.addEventListener("it-popover-close",()=>{var l;(l=this._triggerEl)==null||l.focus()},{once:!0,capture:!0}),this._popoverOpen=!1},trigger:this._triggerEl}),this._ariaNav.handleKeyDown(t)};if(["ArrowDown","ArrowUp"].includes(t.key)&&!this._popoverOpen&&r===-1){this.addEventListener("it-popover-open",s,{once:!0}),this._popoverOpen=!0;return}s()}}get _triggerEl(){var t;return((t=this.shadowRoot)==null?void 0:t.getElementById(this._buttonId))??null}get _menuItems(){return this._slotEl?this._slotEl.assignedElements({flatten:!0}).filter(t=>t.tagName==="IT-DROPDOWN-ITEM"):[]}_setChildrenProperties(){for(const t of this._menuItems)t.dark=this.dark,t.fullWidth=this.fullWidth,this.itRole==="menu"?t.itRole="menuitem":this.itRole==="listbox"?t.itRole="option":this.itRole==="tree"?t.itRole="treeitem":t.itRole=void 0}updated(){this._setChildrenProperties()}render(){return b`
      <it-popover
        placement=${this.alignment}
        @it-popover-open=${this._onPopoverOpen}
        @it-popover-close=${this._onPopoverClose}
        exportparts="focusable, icon, button"
        ?open=${this._popoverOpen}
      >
        <it-button
          id=${this._buttonId}
          slot="trigger"
          ?it-aria-disabled="${this.disabled}"
          type="button"
          variant=${g(this.variant)}
          size=${g(this.size)}
          @click=${this._onTriggerClick}
          @keydown=${{handleEvent:this._onKeyDown,capture:!0}}
          class="dropdown-toggle"
          it-aria-label=${g(this.itAriaLabel?this.itAriaLabel:void 0)}
          exportparts="focusable, button"
          it-aria-haspopup="${this.itRole==="list"?"true":this.itRole}"
          it-aria-controls=${this._popoverOpen?this._menuId:j}
        >
          ${this.alignment.startsWith("left")?b`<it-icon
                name=${this._popoverOpen?"it-collapse":"it-expand"}
                class="dropdown-toggle-icon left"
                size="sm"
                exportparts="icon"
              ></it-icon>`:""}
          ${this.label}
          ${this.alignment.startsWith("left")?"":b`<it-icon
                name=${this._popoverOpen?"it-collapse":"it-expand"}
                class=${this.composeClass("dropdown-toggle-icon",{right:this.alignment.startsWith("right"),top:this.alignment.startsWith("top")})}
                exportparts="icon"
                size="sm"
              ></it-icon>`}
        </it-button>
        <div
          slot="content"
          class="${this.composeClass("dropdown-menu",{show:this._popoverOpen,dark:this.dark,"full-width":this.fullWidth})}"
          aria-labelledby=${this._buttonId}
        >
          <div class="link-list-wrapper">
            <slot name="header"></slot>
            <ul
              id=${this._menuId}
              class="link-list"
              role=${g(this.itRole!=="list"?this.itRole:void 0)}
              @keydown=${{handleEvent:this._onKeyDown,capture:!0}}
              aria-orientation=${g(this.fullWidth?"horizontal":void 0)}
            >
              <slot @slotchange=${this._setChildrenProperties}></slot>
            </ul>
          </div>
        </div>
      </it-popover>
    `}};c.styles=Y;c.shadowRootOptions={...$.shadowRootOptions,delegatesFocus:!0};i([a({type:String}),n("design:type",String)],c.prototype,"label",void 0);i([a({type:Boolean,reflect:!0}),n("design:type",Object)],c.prototype,"disabled",void 0);i([a({type:String}),n("design:type",String)],c.prototype,"size",void 0);i([a({type:String}),n("design:type",String)],c.prototype,"variant",void 0);i([a({type:String}),n("design:type",String)],c.prototype,"alignment",void 0);i([a({type:Boolean}),n("design:type",Object)],c.prototype,"dark",void 0);i([a({type:Boolean,attribute:"full-width",reflect:!0}),n("design:type",Object)],c.prototype,"fullWidth",void 0);i([a({type:String,attribute:"it-role"}),n("design:type",String)],c.prototype,"itRole",void 0);i([a({type:String,attribute:"it-aria-label"}),n("design:type",String)],c.prototype,"itAriaLabel",void 0);i([z(),n("design:type",Object)],c.prototype,"_popoverOpen",void 0);i([V("slot:not([name])"),n("design:type",HTMLSlotElement)],c.prototype,"_slotEl",void 0);c=i([F("it-dropdown")],c);var H=O`/***************************** 1 ****************************************/
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
.dropdown-menu {
  --bs-dropdown-zindex: 8;
  --bs-dropdown-min-width: 10rem;
  --bs-dropdown-padding-x: 0;
  --bs-dropdown-padding-y: var(--bs-spacing-xxs);
  --bs-dropdown-spacer: 0.125rem;
  --bs-dropdown-font-size: var(--bs-label-font-size);
  --bs-dropdown-color: var(--bs-color-text-base);
  --bs-dropdown-background: var(--bs-color-background-inverse);
  --bs-dropdown-border-color: transparent;
  --bs-dropdown-border-radius: var(--bs-radius-smooth);
  --bs-dropdown-border-width: 0;
  --bs-dropdown-inner-border-radius: var(--bs-radius-smooth);
  --bs-dropdown-divider-bg: var(--bs-color-border-subtle);
  --bs-dropdown-divider-margin-y: var(--bs-spacing-xxs);
  --bs-dropdown-box-shadow: var(--bs-elevation-medium);
  --bs-dropdown-link-color: var(--bs-color-text-primary);
  --bs-dropdown-link-hover-color: var(--bs-color-text-primary-hover);
  --bs-dropdown-link-active-color: var(--bs-color-text-primary-active);
  --bs-dropdown-item-padding-x: var(--bs-spacing-s);
  --bs-dropdown-item-padding-y: var(--bs-spacing-xs);
  --bs-dropdown-header-color: var(--bs-color-text-secondary);
  --bs-dropdown-header-font-size: var(--bs-label-font-size);
  --bs-dropdown-header-padding-x: var(--bs-spacing-s);
  --bs-dropdown-header-padding-y: var(--bs-spacing-xxs);
  --bs-dropdown-notch-base-size: 1.125rem;
  --bs-dropdown-notch-position-x: 20px;
  --bs-dropdown-notch-position-y: -8px;
  --bs-dropdown-animation-speed: var(--bs-transition-instant);
  --bs-dropdown-vertical-shift: 10px;
}

.dropup,
.dropend,
.dropdown,
.dropstart,
.dropup-center,
.dropdown-center {
  position: relative;
}

.dropdown-toggle {
  white-space: nowrap;
}
.dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.3em solid transparent;
  border-bottom: 0;
  border-left: 0.3em solid transparent;
}
.dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropdown-menu {
  position: absolute;
  z-index: var(--bs-dropdown-zindex);
  display: none;
  min-width: var(--bs-dropdown-min-width);
  margin: 0;
  padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x);
  border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color);
  border-radius: 0 0 var(--bs-dropdown-border-radius) var(--bs-dropdown-border-radius);
  background-color: var(--bs-dropdown-background);
  color: var(--bs-dropdown-color);
  list-style: none;
  text-align: left;
  background-clip: padding-box;
  font-size: var(--bs-dropdown-font-size);
  box-shadow: var(--bs-dropdown-box-shadow);
}
.dropdown-menu[data-bs-popper] {
  top: 100%;
  left: 0;
  margin-top: var(--bs-dropdown-spacer);
}
.dropdown-menu.full-width {
  width: 100%;
}
.dropdown-menu.full-width .link-list li {
  display: inline-block;
  width: auto;
}
.dropdown-menu.full-width .link-list li:hover, .dropdown-menu.full-width .link-list li:focus {
  background: none;
  text-decoration: underline;
}
.dropdown-menu .link-list {
  margin-bottom: 0;
}
.dropdown-menu:before {
  position: absolute;
  top: var(--bs-dropdown-notch-position-y);
  left: var(--bs-dropdown-notch-position-x);
  content: "";
  width: var(--bs-dropdown-notch-base-size);
  height: var(--bs-dropdown-notch-base-size);
  border-radius: var(--bs-dropdown-border-radius);
  background-color: var(--bs-dropdown-background);
  transform: rotate(45deg);
}
.dropdown-menu[data-popper-placement=top-start] {
  border-radius: var(--bs-dropdown-border-radius) var(--bs-dropdown-border-radius) 0 0;
}
.dropdown-menu[data-popper-placement=top-start]:before {
  top: auto;
  bottom: var(--bs-dropdown-notch-position-y);
}
.dropdown-menu[data-popper-placement=bottom-end]:before {
  right: calc(var(--bs-dropdown-notch-position-x) / 2);
  left: auto;
}
.dropdown-menu.dark {
  --bs-dropdown-text-color: hsl(0, 0%, 83%);
  --bs-dropdown-background: var(--bs-color-background-primary-muted);
  --bs-dropdown-link-color: hsl(0, 0%, 83%);
  --bs-dropdown-divider-bg: transparent;
  --bs-dropdown-link-active-color: var(--bs-color-text-inverses);
  --bs-dropdown-header-color: hsl(0, 0%, 45%);
}
.dropdown-menu.dark:before {
  background-color: var(--bs-dropdown-background);
}
.dropdown-menu.dark .link-list-heading {
  color: var(--bs-color-text-inverse);
}
.dropdown-menu.dark .link-list span.divider {
  background: #2e465e;
}
.dropdown-menu.dark .link-list a span,
.dropdown-menu.dark .link-list a:hover span {
  color: var(--bs-color-text-inverse);
}
.dropdown-menu.dark .link-list a.active span {
  text-decoration: underline;
}
.dropdown-menu.show {
  display: block;
}
.dropdown-menu.show[data-popper-placement=bottom-start] {
  animation: dropdownFadeIn forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=top-start] {
  animation: dropdownFadeInTop forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=left-start] {
  animation: dropdownFadeInTop forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=left-start]:before {
  top: 20px;
  right: -6px;
  left: auto;
}
.dropdown-menu.show[data-popper-placement=right-start] {
  animation: dropdownFadeInTop forwards var(--bs-dropdown-animation-speed);
}
.dropdown-menu.show[data-popper-placement=right-start]:before {
  top: 20px;
  left: -6px;
}

.dropdown-menu-start {
  --bs-position: start;
}
.dropdown-menu-start[data-bs-popper] {
  right: auto;
  left: 0;
}

.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-menu-end[data-bs-popper] {
  right: 0;
  left: auto;
}

@media (min-width: 576px) {
  .dropdown-menu-sm-start {
    --bs-position: start;
  }
  .dropdown-menu-sm-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-sm-end {
    --bs-position: end;
  }
  .dropdown-menu-sm-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 768px) {
  .dropdown-menu-md-start {
    --bs-position: start;
  }
  .dropdown-menu-md-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-md-end {
    --bs-position: end;
  }
  .dropdown-menu-md-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 992px) {
  .dropdown-menu-lg-start {
    --bs-position: start;
  }
  .dropdown-menu-lg-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-lg-end {
    --bs-position: end;
  }
  .dropdown-menu-lg-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1200px) {
  .dropdown-menu-xl-start {
    --bs-position: start;
  }
  .dropdown-menu-xl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xl-end {
    --bs-position: end;
  }
  .dropdown-menu-xl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
@media (min-width: 1400px) {
  .dropdown-menu-xxl-start {
    --bs-position: start;
  }
  .dropdown-menu-xxl-start[data-bs-popper] {
    right: auto;
    left: 0;
  }
  .dropdown-menu-xxl-end {
    --bs-position: end;
  }
  .dropdown-menu-xxl-end[data-bs-popper] {
    right: 0;
    left: auto;
  }
}
.dropup .dropdown-menu[data-bs-popper] {
  top: auto;
  bottom: 100%;
  margin-top: 0;
  margin-bottom: var(--bs-dropdown-spacer);
}
.dropup .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0;
  border-right: 0.3em solid transparent;
  border-bottom: 0.3em solid;
  border-left: 0.3em solid transparent;
}
.dropup .dropdown-toggle:empty::after {
  margin-left: 0;
}

.dropend .dropdown-menu[data-bs-popper] {
  top: 0;
  right: auto;
  left: 100%;
  margin-top: 0;
  margin-left: var(--bs-dropdown-spacer);
}
.dropend .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0;
  border-bottom: 0.3em solid transparent;
  border-left: 0.3em solid;
}
.dropend .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropend .dropdown-toggle::after {
  vertical-align: 0;
}

.dropstart .dropdown-menu[data-bs-popper] {
  top: 0;
  right: 100%;
  left: auto;
  margin-top: 0;
  margin-right: var(--bs-dropdown-spacer);
}
.dropstart .dropdown-toggle::after {
  display: inline-block;
  margin-left: 0.255em;
  vertical-align: 0.255em;
  content: "";
}
.dropstart .dropdown-toggle::after {
  display: none;
}
.dropstart .dropdown-toggle::before {
  display: inline-block;
  margin-right: 0.255em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid transparent;
  border-right: 0.3em solid;
  border-bottom: 0.3em solid transparent;
}
.dropstart .dropdown-toggle:empty::after {
  margin-left: 0;
}
.dropstart .dropdown-toggle::before {
  vertical-align: 0;
}

.dropdown-divider {
  height: 0;
  margin: var(--bs-dropdown-divider-margin-y) 0;
  overflow: hidden;
  border-top: 1px solid var(--bs-dropdown-divider-bg);
  opacity: 1;
}

.dropdown-item.list-item {
  width: auto;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  border: 0;
  background-color: transparent;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
}
.dropdown-item.list-item:hover, .dropdown-item.list-item:focus {
  text-decoration: none;
}

.dropdown-header {
  display: block;
  margin-bottom: 0;
  padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x);
  color: var(--bs-dropdown-header-color);
  font-size: var(--bs-dropdown-header-font-size);
  white-space: nowrap;
}

.dropdown-item-text {
  display: block;
  padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x);
  color: var(--bs-dropdown-link-color);
}

@keyframes dropdownFadeIn {
  0% {
    margin-top: 0;
    opacity: 0;
  }
  100% {
    margin-top: var(--bs-dropdown-vertical-shift);
    opacity: 1;
  }
}
@keyframes dropdownFadeInTop {
  0% {
    margin-top: 0;
    opacity: 0;
  }
  100% {
    margin-top: -var(--bs-dropdown-vertical-shift);
    opacity: 1;
  }
}
.dropdown.dropup .dropdown-toggle:after,
.btn-group.dropup .dropdown-toggle:after {
  display: none;
}
.dropdown.dropup .dropdown-toggle[aria-expanded=true] .icon-expand,
.btn-group.dropup .dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: scaleY(1);
}
.dropdown.dropup .dropdown-toggle .icon-expand,
.btn-group.dropup .dropdown-toggle .icon-expand {
  transform: scaleY(-1);
}
.dropdown.dropend .dropdown-toggle:after,
.btn-group.dropend .dropdown-toggle:after {
  display: none;
}
.dropdown.dropend .dropdown-toggle[aria-expanded=true] .icon-expand,
.btn-group.dropend .dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: rotate(90deg);
}
.dropdown.dropend .dropdown-toggle .icon-expand,
.btn-group.dropend .dropdown-toggle .icon-expand {
  transform: rotate(-90deg);
}
.dropdown.dropstart .dropdown-toggle:before,
.btn-group.dropstart .dropdown-toggle:before {
  display: none;
}
.dropdown.dropstart .dropdown-toggle[aria-expanded=true] .icon-expand,
.btn-group.dropstart .dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: rotate(-90deg);
}
.dropdown.dropstart .dropdown-toggle .icon-expand,
.btn-group.dropstart .dropdown-toggle .icon-expand {
  transform: rotate(90deg);
}

.btn-dropdown {
  --bs-dropdown-button-color: var(--bs-color-text-primary);
  --bs-dropdown-button-padding: 10px;
  --bs-dropdown-button-background: #fff;
  border-radius: 0;
  box-shadow: none;
  color: var(--bs-dropdown-button-color);
}
@media (min-width: 992px) {
  .btn-dropdown {
    font-size: var(--bs-label-font-size-m);
  }
}
.btn-dropdown:hover {
  --bs-dropdown-button-color: var(--bs-color-text-primary-hover);
  text-decoration: underline;
}
.btn-dropdown:not(:disabled):active {
  box-shadow: none;
}

.btn-dropdown:after,
.dropdown-toggle:after {
  content: "";
  display: inline;
  width: auto;
  height: auto;
  margin: 0;
  border: none;
  vertical-align: bottom;
}
.btn-dropdown .icon-expand,
.dropdown-toggle .icon-expand {
  transition: transform var(--bs-dropdown-animation-speed);
}
.btn-dropdown .icon.icon-xs,
.dropdown-toggle .icon.icon-xs {
  transform: translateY(-1px);
  transition: transform var(--bs-dropdown-animation-speed);
}
.btn-dropdown[aria-expanded=true] .icon-expand,
.dropdown-toggle[aria-expanded=true] .icon-expand {
  transform: scaleY(-1);
}

:host {
  display: block;
}

:host li:focus-visible,
:host li a:focus-visible {
  outline: none;
}

a {
  color: var(--bs-color-link);
  text-decoration: underline;
  text-decoration-skip-ink: auto;
  text-underline-offset: 2px;
}
a:hover {
  color: var(--bs-color-link-hover);
  text-decoration: underline;
}

li span,
.list-item {
  font-size: var(--bs-linklist-item-font-size);
  line-height: var(--bs-linklist-item-line-height);
}

.list-item {
  position: relative;
  display: inline-block;
  padding-top: var(--bs-linklist-item-spacing);
  padding-bottom: var(--bs-linklist-item-spacing);
  text-decoration: none;
}
.list-item.active span, .list-item:hover:not(.disable) span {
  text-decoration: underline;
}
.list-item.active span {
  color: var(--bs-color-text-primary-active);
}
.list-item.active .icon {
  color: var(--bs-color-icon-primary-active);
}
.list-item:hover:not(.disabled) span {
  color: var(--bs-color-link-hover);
}
.list-item:hover:not(.disabled) p {
  color: var(--bs-color-text-secondary);
}
.list-item:hover:not(.disabled) .icon {
  fill: var(--bs-icon-primary-hover);
}
.list-item:hover:not(.disabled) .icon.icon-inverse {
  fill: var(--bs-icon-inverse);
}
.list-item.disabled {
  cursor: not-allowed;
}
.list-item.disabled:hover span {
  text-decoration: none;
}
.list-item.disabled span {
  color: var(--bs-color-text-disabled);
}
.list-item.disabled svg {
  fill: var(--bs-icon-disabled);
}
.list-item.disabled svg.secondary {
  fill: var(--bs-icon-disabled);
}
.list-item.medium,
.list-item .list-item-title {
  font-weight: var(--bs-font-weight-solid);
}
.list-item.large {
  --bs-linklist-item-font-size: var(--bs-label-font-size-m);
}
.list-item.avatar {
  display: flex;
  margin-bottom: var(--bs-spacing-xxs);
}
.list-item.avatar .avatar {
  display: block;
  margin-right: var(--bs-spacing-s);
}
.list-item.icon-right, .list-item.icon-left {
  padding-right: 0;
  padding-left: 0;
}
.list-item.icon-left .icon {
  left: 0;
  flex-shrink: 0;
  margin-right: var(--bs-spacing-xxs);
}
.list-item.icon-left p {
  width: 100%;
}
.list-item.icon-right {
  width: 100%;
}
.list-item.icon-right .list-item-title-icon-wrapper {
  justify-content: space-between;
}
.list-item.right-icon .list-item-title-icon-wrapper {
  justify-content: space-between;
}
.list-item.right-icon .icon {
  transition: transform 0.3s;
}
.list-item.right-icon .icon.secondary {
  color: var(--bs-icon-secondary);
}
.list-item[aria-expanded=true] .icon {
  transform: scale(-1);
}
.list-item .icon {
  display: inline-block;
  flex-shrink: 0;
}
.list-item .list-item-title-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list-item .list-item-title-icon-wrapper .list-item-title {
  margin-right: var(--bs-spacing-xxs);
}
.list-item > p {
  color: var(--bs-color-text-secondary);
  font-size: var(--bs-caption-font-size);
  line-height: var(--bs-caption-line-height);
}
.list-item > span {
  display: inline-block;
  color: var(--bs-color-link);
}

.divider {
  display: block;
  height: var(--bs-linklist-divider-size);
  margin: var(--bs-spacing-xxs) 0;
  background: var(--bs-color-border-subtle);
}

.dark a span,
.dark a:hover span {
  --bs-color-link: var(--bs-color-text-inverse);
  --bs-color-link-hover: var(--bs-color-text-inverse);
}
.dark a.active span {
  text-decoration: underline;
}
.dark li a.disabled,
.dark li a.disabled span {
  color: hsla(0, 0%, 100%, 0.35);
}

.fw {
  display: inline-block;
  width: auto;
}
.fw:hover, .fw:focus {
  background: none;
  text-decoration: underline;
}`;let h=class extends I{constructor(){super(...arguments),this.label="",this.value="",this.active=!1,this.large=!1,this.separator=!1,this.dark=!1,this.fullWidth=!1}getFocusableElement(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector("a, button"))??null}handlePress(t){this.disabled&&t.preventDefault()}render(){if(this.separator)return b`<li><span class="divider" role="separator"></span></li>`;const t=this.composeClass({dark:this.dark,fw:this.fullWidth}),e=this.composeClass("list-item","dropdown-item",{disabled:this.disabled,active:this.active,large:this.large}),o=b`
      <slot name="prefix"></slot>
      <slot>${this.label}${this.active?b`<span class="visually-hidden"> attivo</span>`:null}</slot>
      <slot name="suffix"></slot>
    `;return b`
      <li
        role="${g(this.itRole==="menuitem"||this.itRole==="option"||this.itRole==="treeitem"?"none":void 0)}"
        class=${g(t||void 0)}
      >
        ${this.href?b`<a
              class=${e}
              part="focusable"
              href=${this.href}
              role=${g(this.itRole)}
              aria-disabled=${g(this.disabled||void 0)}
              @keydown=${this.handlePress}
              @click=${this.handlePress}
              ><span>${o}</span></a
            >`:b`<span class="dropdown-item-text">${o}</span>`}
      </li>
    `}};h.styles=H;i([a({type:String}),n("design:type",Object)],h.prototype,"label",void 0);i([a({type:String}),n("design:type",Object)],h.prototype,"value",void 0);i([a({type:String}),n("design:type",String)],h.prototype,"href",void 0);i([a({type:Boolean,reflect:!0}),n("design:type",Object)],h.prototype,"active",void 0);i([a({type:Boolean,reflect:!0}),n("design:type",Object)],h.prototype,"large",void 0);i([a({type:Boolean,reflect:!0}),n("design:type",Object)],h.prototype,"separator",void 0);i([a({type:Boolean,reflect:!0}),n("design:type",Object)],h.prototype,"dark",void 0);i([a({type:Boolean,attribute:"full-width",reflect:!0}),n("design:type",Object)],h.prototype,"fullWidth",void 0);i([a({type:String,attribute:"it-role"}),n("design:type",String)],h.prototype,"itRole",void 0);i([a({type:Boolean,reflect:!0}),n("design:type",Boolean)],h.prototype,"disabled",void 0);h=i([F("it-dropdown-item")],h);
