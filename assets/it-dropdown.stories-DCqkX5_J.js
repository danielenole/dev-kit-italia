import{a as ie,i as ne,x as z}from"./lit-element-DvQWNfDj.js";import{r as At,e as Et,n as u,t as re,o as V}from"./query-Bx2OwlQ7.js";import"./it-button-BjN_fu7P.js";import"./it-icon-FbjACWbu.js";import"./directive-CvdRHFdJ.js";import"./iframe-Bt5dub1B.js";function g(e,t,o,i){var n=arguments.length,r=n<3?t:i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r}function v(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function no(e){var t,o,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(o=no(e[t]))&&(i&&(i+=" "),i+=o)}else for(o in e)e[o]&&(i&&(i+=" "),i+=o);return i}function Eo(){for(var e,t,o=0,i="",n=arguments.length;o<n;o++)(e=arguments[o])&&(t=no(e))&&(i&&(i+=" "),i+=t);return i}const Jt=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:pt}=window;let st,se="ltr",ae="en";const ro=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function so(){ro&&(se=document.documentElement.dir||"ltr",ae=document.documentElement.lang||navigator.language),[...Jt.keys()].forEach(e=>{const t=e;typeof t.requestUpdate=="function"&&t.requestUpdate()})}if(ro){const e=new MutationObserver(so);se=document.documentElement.dir||"ltr",ae=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function ao(...e){e.forEach(t=>{const o=t.$code.toLowerCase();pt.has(o)?pt.set(o,{...pt.get(o),...t}):pt.set(o,t),st||(st=t)}),so()}window.registerTranslation=ao;let Co=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Jt.add(this.host)}hostDisconnected(){Jt.delete(this.host)}dir(){return`${this.host.dir||se}`.toLowerCase()}lang(){return`${this.host.lang||ae}`.toLowerCase()}getTranslationData(t){var a;const o=new Intl.Locale(t.replace(/_/g,"-")),i=o==null?void 0:o.language.toLowerCase(),n=((a=o==null?void 0:o.region)==null?void 0:a.toLowerCase())??"",r=pt.get(`${i}-${n}`),s=pt.get(i);return{locale:o,language:i,region:n,primary:r,secondary:s}}exists(t,o){const{primary:i,secondary:n}=this.getTranslationData(o.lang??this.lang()),r={includeFallback:!1,...o};return!!(i&&i[t]||n&&n[t]||r.includeFallback&&st&&st[t])}term(t,...o){const{primary:i,secondary:n}=this.getTranslationData(this.lang());let r;if(i&&i[t])r=i[t];else if(n&&n[t])r=n[t];else if(st&&st[t])r=st[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...o):r}date(t,o){const i=new Date(t);return new Intl.DateTimeFormat(this.lang(),o).format(i)}number(t,o){const i=Number(t);return Number.isNaN(i)?"":new Intl.NumberFormat(this.lang(),o).format(i)}relativeTime(t,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,o)}};const $o=e=>class extends e{constructor(){super(...arguments),this.localize=new Co(this)}get $localize(){return this.localize}$t(t){return this.localize.term(t)}$d(t,o){return this.localize.date(t,o)}$n(t,o){return this.localize.number(t,o)}};let Oo=class{constructor(t){this.tag=t}format(t,o){return[`[${this.tag}] ${o}`]}warn(t){console.warn(...this.format("warn",t))}error(t){console.error(...this.format("error",t))}info(t){console.info(...this.format("info",t))}},de=class extends ie{constructor(){super(),this.composeClass=Eo,this.logger=new Oo(this.tagName.toLowerCase())}get _ariaAttributes(){const t={};for(const o of this.getAttributeNames())o==="it-role"?t.role=this.getAttribute(o):o.startsWith("it-aria-")&&(t[o.replace(/^it-/,"")]=this.getAttribute(o));return t}generateId(t){return`${t}-${Math.random().toString(36).slice(2)}`}addFocus(t){}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}connectedCallback(){var o;super.connectedCallback();const t=((o=this.id)==null?void 0:o.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(t)}};const So=$o(de),wt=new WeakMap,bt=new WeakMap,vt=new WeakMap,Gt=new WeakSet,$t=new WeakMap;let _o=class{constructor(t,o){this.handleFormData=i=>{const n=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="it-button";this.host.isConnected&&!n&&!a&&typeof r=="string"&&r.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(d=>{i.formData.append(r,d.toString())}):i.formData.append(r,s.toString()))},this.handleFormSubmit=i=>{var s;const n=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=wt.get(this.form))==null||s.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!n&&!r(this.host)&&i.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),$t.set(this.host,[])},this.handleInteraction=i=>{const n=$t.get(this.host);n.includes(i.type)||n.push(i.type),n.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const n of i)if(typeof n.checkValidity=="function"&&!n.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const n of i)if(typeof n.reportValidity=="function"&&!n.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:i=>{const n=i.form;if(n){const s=i.getRootNode().querySelector(`#${n}`);if(s)return s}return i.closest("form")},name:i=>i.name,value:i=>i.value,disabled:i=>i.disabled??!1,reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,n)=>{i.value=n},assumeInteractionOn:["it-input"],...o}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),$t.set(this.host,[]),this.options.assumeInteractionOn.forEach(o=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),$t.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,wt.has(this.form)?wt.get(this.form).add(this.host):wt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),bt.has(this.form)||(bt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),vt.has(this.form)||(vt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=wt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),bt.has(this.form)&&(this.form.reportValidity=bt.get(this.form),bt.delete(this.form)),vt.has(this.form)&&(this.form.checkValidity=vt.get(this.form),vt.delete(this.form)),this.form=void 0))}setUserInteracted(t,o){o?Gt.add(t):Gt.delete(t),t.requestUpdate()}doAction(t,o){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",o&&(i.name=o.name,i.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(n=>{o.hasAttribute(n)&&i.setAttribute(n,o.getAttribute(n))})),this.form.append(i),i.click(),i.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const o=this.host,i=!!Gt.has(o),n=!!o.required;o.toggleAttribute("data-required",n),o.toggleAttribute("data-optional",!n),o.toggleAttribute("data-invalid",!t),o.toggleAttribute("data-valid",t),o.toggleAttribute("data-user-invalid",!t&&i),o.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const o=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||o.preventDefault(),this.host.dispatchEvent(o)||t==null||t.preventDefault()}};const Do={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};ao(Do);let S=class extends So{constructor(){super(...arguments),this.formControlController=new _o(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var t;return(t=this.inputElement)==null?void 0:t.validity}checkValidity(){var o;return((o=this.inputElement)==null?void 0:o.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.inputElement.checkValidity();return this.handleValidationMessages(),t}setCustomValidity(t){this.inputElement.setCustomValidity(t),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(t){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(t){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(t){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(t){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const t=this.inputElement.validity;t.valueMissing?this.setCustomValidity(this.$t("validityRequired")):t.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):t.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):t.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):t.typeMismatch||t.rangeUnderflow||t.rangeOverflow||t.stepMismatch||t.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}_handleChange(t){const o=t.target;let i;if(o instanceof HTMLInputElement)switch(o.type){case"checkbox":case"radio":i=o.checked;break;case"file":i=o.files;break;default:i=o.value}else o instanceof HTMLSelectElement&&o.multiple?i=Array.from(o.selectedOptions).map(n=>n.value):i=o.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:i,el:o},bubbles:!0,composed:!0}))}updated(t){var o;(o=super.updated)==null||o.call(this,t),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}};g([At(),v("design:type",Object)],S.prototype,"_touched",void 0);g([Et(".it-form__control"),v("design:type",HTMLInputElement)],S.prototype,"inputElement",void 0);g([u({type:String,reflect:!0}),v("design:type",Object)],S.prototype,"name",void 0);g([u({reflect:!0}),v("design:type",Object)],S.prototype,"value",void 0);g([u({type:Boolean,reflect:!0}),v("design:type",Object)],S.prototype,"disabled",void 0);g([u({reflect:!0,type:String}),v("design:type",Object)],S.prototype,"form",void 0);g([u({type:Boolean,reflect:!0,attribute:"custom-validation"}),v("design:type",Object)],S.prototype,"customValidation",void 0);g([u({attribute:"validity-message",reflect:!0}),v("design:type",String)],S.prototype,"validationText",void 0);g([u(),v("design:type",String)],S.prototype,"pattern",void 0);g([u(),v("design:type",Object)],S.prototype,"min",void 0);g([u(),v("design:type",Object)],S.prototype,"max",void 0);g([u(),v("design:type",Object)],S.prototype,"step",void 0);g([u({type:Number}),v("design:type",Object)],S.prototype,"minlength",void 0);g([u({type:Number}),v("design:type",Object)],S.prototype,"maxlength",void 0);g([u({type:Boolean,reflect:!0}),v("design:type",Object)],S.prototype,"required",void 0);g([At(),v("design:type",Object)],S.prototype,"validationMessage",void 0);class Vo{constructor(t){this.host=t,this.host.addController(this)}setConfig(t){this.config=t}hostDisconnected(){this.host.removeController(this)}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}handleKeyDown(t){if(!this.config)return;const o=this.config.getItems(),i=o.indexOf(this.getActiveElement());switch(t.key){case"ArrowDown":t.preventDefault(),o.length&&i<o.length-1&&this.config.setActive(i<0?0:i+1);break;case"ArrowUp":t.preventDefault(),o.length&&this.config.setActive(i<0?o.length-1:i-1);break;case"Home":t.preventDefault(),o.length&&this.config.setActive(0);break;case"End":t.preventDefault(),o.length&&this.config.setActive(o.length-1);break;case"Escape":t.preventDefault(),this.config.closeMenu();break}}}var Ro=ne`/***************************** 1 ****************************************/
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
  width: var(--bs--dropdown-notch-base-size);
  height: var(--bs--dropdown-notch-base-size);
  border-radius: var(--bs--dropdown-border-radius);
  background-color: var(--bs--dropdown-background);
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
  display: inline-block;
}

.dropdown-toggle-icon.top {
  transform: scaleY(-1);
}
.dropdown-toggle-icon.left {
  transform: rotate(90deg);
}
.dropdown-toggle-icon.right {
  transform: rotate(-90deg);
}`;let R=class extends de{constructor(){super(...arguments),this.disabled=!1,this.variant="primary",this.alignment="bottom-start",this.dark=!1,this.fullWidth=!1,this.itRole="menu",this._popoverOpen=!1,this._buttonId=this.generateId("it-dropdown"),this._menuId=this.generateId("it-dropdown-menu"),this._ariaNav=new Vo(this),this._onTriggerClick=()=>{this.disabled||(this._popoverOpen=!this._popoverOpen)},this._onPopoverOpen=()=>{this._popoverOpen=!0},this._onPopoverClose=()=>{this._popoverOpen=!1},this._onKeyDown=t=>{const o=this._menuItems.map(s=>s.getFocusableElement()).filter(s=>!!s),i=this.getActiveElement();if(!i)return;const n=o.indexOf(i);t.key==="Tab"&&(t.shiftKey&&n===-1&&(this._popoverOpen=!1),!t.shiftKey&&n===o.length-1&&(this._popoverOpen=!1),i.ariaDisabled&&(t.shiftKey?this._ariaNav.handleKeyDown(new KeyboardEvent("keydown",{...t,key:"ArrowUp"})):this._ariaNav.handleKeyDown(new KeyboardEvent("keydown",{...t,key:"ArrowDown"}))));const r=()=>{this._ariaNav.setConfig({getItems:()=>o,setActive:s=>{var a;return(a=o[s])==null?void 0:a.focus()},closeMenu:()=>{this.addEventListener("it-popover-close",()=>{var s;(s=this._triggerEl)==null||s.focus()},{once:!0,capture:!0}),this._popoverOpen=!1},trigger:this._triggerEl}),this._ariaNav.handleKeyDown(t)};if(["ArrowDown","ArrowUp"].includes(t.key)&&!this._popoverOpen&&n===-1){this.addEventListener("it-popover-open",r,{once:!0}),this._popoverOpen=!0;return}r()}}get _triggerEl(){var t;return((t=this.shadowRoot)==null?void 0:t.getElementById(this._buttonId))??null}get _menuItems(){return this._slotEl?this._slotEl.assignedElements({flatten:!0}).filter(t=>t.tagName==="IT-DROPDOWN-ITEM"):[]}_setChildrenProperties(){for(const t of this._menuItems)t.dark=this.dark,t.fullWidth=this.fullWidth,this.itRole==="menu"?t.itRole="menuitem":this.itRole==="listbox"?t.itRole="option":this.itRole==="tree"?t.itRole="treeitem":t.itRole=void 0}updated(){this._setChildrenProperties()}render(){return z`
      <it-popover
        placement=${this.alignment}
        @it-popover-open=${this._onPopoverOpen}
        @it-popover-close=${this._onPopoverClose}
        ?open=${this._popoverOpen}
      >
        <it-button
          id=${this._buttonId}
          slot="trigger"
          ?it-aria-disabled="${this.disabled}"
          type="button"
          variant=${V(this.variant)}
          size=${V(this.size)}
          @click=${this._onTriggerClick}
          @keydown=${{handleEvent:this._onKeyDown,capture:!0}}
          class="dropdown-toggle"
          exportparts="focusable"
          it-aria-haspopup="${this.itRole==="list"?"true":this.itRole}"
          it-aria-controls=${this._menuId}
        >
          ${this.alignment.startsWith("left")?z`<it-icon
                name=${this._popoverOpen?"it-collapse":"it-expand"}
                class="dropdown-toggle-icon left"
                size="sm"
              ></it-icon>`:""}
          ${this.label}
          ${this.alignment.startsWith("left")?"":z`<it-icon
                name=${this._popoverOpen?"it-collapse":"it-expand"}
                class=${this.composeClass("dropdown-toggle-icon",{right:this.alignment.startsWith("right"),top:this.alignment.startsWith("top")})}
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
              role=${V(this.itRole!=="list"?this.itRole:void 0)}
              @keydown=${{handleEvent:this._onKeyDown,capture:!0}}
              aria-orientation=${V(this.fullWidth?"horizontal":void 0)}
            >
              <slot @slotchange=${this._setChildrenProperties}></slot>
            </ul>
          </div>
        </div>
      </it-popover>
    `}};R.styles=Ro;R.shadowRootOptions={...ie.shadowRootOptions,delegatesFocus:!0};g([u({type:String}),v("design:type",String)],R.prototype,"label",void 0);g([u({type:Boolean,reflect:!0}),v("design:type",Object)],R.prototype,"disabled",void 0);g([u({type:String}),v("design:type",String)],R.prototype,"size",void 0);g([u({type:String}),v("design:type",String)],R.prototype,"variant",void 0);g([u({type:String}),v("design:type",String)],R.prototype,"alignment",void 0);g([u({type:Boolean}),v("design:type",Object)],R.prototype,"dark",void 0);g([u({type:Boolean,attribute:"full-width",reflect:!0}),v("design:type",Object)],R.prototype,"fullWidth",void 0);g([u({type:String,attribute:"it-role"}),v("design:type",String)],R.prototype,"itRole",void 0);g([At(),v("design:type",Object)],R.prototype,"_popoverOpen",void 0);g([Et("slot:not([name])"),v("design:type",HTMLSlotElement)],R.prototype,"_slotEl",void 0);R=g([re("it-dropdown")],R);var Mo=ne`/***************************** 1 ****************************************/
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
}`;let I=class extends de{constructor(){super(...arguments),this.label="",this.value="",this.active=!1,this.large=!1,this.separator=!1,this.dark=!1,this.fullWidth=!1}getFocusableElement(){var t;return((t=this.shadowRoot)==null?void 0:t.querySelector("a, button"))??null}handlePress(t){this.disabled&&t.preventDefault()}render(){if(this.separator)return z`<li><span class="divider" role="separator"></span></li>`;const t=this.composeClass({dark:this.dark,fw:this.fullWidth}),o=this.composeClass("list-item","dropdown-item",{disabled:this.disabled,active:this.active,large:this.large}),i=z`
      <slot name="prefix"></slot>
      <slot>${this.label}${this.active?z`<span class="visually-hidden"> attivo</span>`:null}</slot>
      <slot name="suffix"></slot>
    `;return z`
      <li
        role="${V(this.itRole==="menuitem"||this.itRole==="option"||this.itRole==="treeitem"?"none":void 0)}"
        class=${V(t||void 0)}
      >
        ${this.href?z`<a
              class=${o}
              part="focusable"
              href=${this.href}
              role=${V(this.itRole)}
              aria-disabled=${V(this.disabled||void 0)}
              @keydown=${this.handlePress}
              @click=${this.handlePress}
              ><span>${i}</span></a
            >`:z`<span class="dropdown-item-text">${i}</span>`}
      </li>
    `}};I.styles=Mo;g([u({type:String}),v("design:type",Object)],I.prototype,"label",void 0);g([u({type:String}),v("design:type",Object)],I.prototype,"value",void 0);g([u({type:String}),v("design:type",String)],I.prototype,"href",void 0);g([u({type:Boolean,reflect:!0}),v("design:type",Object)],I.prototype,"active",void 0);g([u({type:Boolean,reflect:!0}),v("design:type",Object)],I.prototype,"large",void 0);g([u({type:Boolean,reflect:!0}),v("design:type",Object)],I.prototype,"separator",void 0);g([u({type:Boolean,reflect:!0}),v("design:type",Object)],I.prototype,"dark",void 0);g([u({type:Boolean,attribute:"full-width",reflect:!0}),v("design:type",Object)],I.prototype,"fullWidth",void 0);g([u({type:String,attribute:"it-role"}),v("design:type",String)],I.prototype,"itRole",void 0);g([u({type:Boolean,reflect:!0}),v("design:type",Boolean)],I.prototype,"disabled",void 0);I=g([re("it-dropdown-item")],I);function E(e,t,o,i){var n=arguments.length,r=n<3?t:i,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(r=(n<3?s(r):n>3?s(t,o,r):s(t,o))||r);return n>3&&r&&Object.defineProperty(t,o,r),r}function C(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function lo(e){var t,o,i="";if(typeof e=="string"||typeof e=="number")i+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(o=lo(e[t]))&&(i&&(i+=" "),i+=o)}else for(o in e)e[o]&&(i&&(i+=" "),i+=o);return i}function To(){for(var e,t,o=0,i="",n=arguments.length;o<n;o++)(e=arguments[o])&&(t=lo(e))&&(i&&(i+=" "),i+=t);return i}const Zt=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:ct}=window;let at,le="ltr",pe="en";const po=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function co(){po&&(le=document.documentElement.dir||"ltr",pe=document.documentElement.lang||navigator.language),[...Zt.keys()].forEach(e=>{const t=e;typeof t.requestUpdate=="function"&&t.requestUpdate()})}if(po){const e=new MutationObserver(co);le=document.documentElement.dir||"ltr",pe=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function mo(...e){e.forEach(t=>{const o=t.$code.toLowerCase();ct.has(o)?ct.set(o,{...ct.get(o),...t}):ct.set(o,t),at||(at=t)}),co()}window.registerTranslation=mo;class Io{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Zt.add(this.host)}hostDisconnected(){Zt.delete(this.host)}dir(){return`${this.host.dir||le}`.toLowerCase()}lang(){return`${this.host.lang||pe}`.toLowerCase()}getTranslationData(t){var a;const o=new Intl.Locale(t.replace(/_/g,"-")),i=o==null?void 0:o.language.toLowerCase(),n=((a=o==null?void 0:o.region)==null?void 0:a.toLowerCase())??"",r=ct.get(`${i}-${n}`),s=ct.get(i);return{locale:o,language:i,region:n,primary:r,secondary:s}}exists(t,o){const{primary:i,secondary:n}=this.getTranslationData(o.lang??this.lang()),r={includeFallback:!1,...o};return!!(i&&i[t]||n&&n[t]||r.includeFallback&&at&&at[t])}term(t,...o){const{primary:i,secondary:n}=this.getTranslationData(this.lang());let r;if(i&&i[t])r=i[t];else if(n&&n[t])r=n[t];else if(at&&at[t])r=at[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...o):r}date(t,o){const i=new Date(t);return new Intl.DateTimeFormat(this.lang(),o).format(i)}number(t,o){const i=Number(t);return Number.isNaN(i)?"":new Intl.NumberFormat(this.lang(),o).format(i)}relativeTime(t,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(t,o)}}const Lo=e=>class extends e{constructor(){super(...arguments),this.localize=new Io(this)}get $localize(){return this.localize}$t(t){return this.localize.term(t)}$d(t,o){return this.localize.date(t,o)}$n(t,o){return this.localize.number(t,o)}};class Fo{constructor(t){this.tag=t}format(t,o){return[`[${this.tag}] ${o}`]}warn(t){console.warn(...this.format("warn",t))}error(t){console.error(...this.format("error",t))}info(t){console.info(...this.format("info",t))}}class uo extends ie{constructor(){super(),this.composeClass=To,this.logger=new Fo(this.tagName.toLowerCase())}get _ariaAttributes(){const t={};for(const o of this.getAttributeNames())o==="it-role"?t.role=this.getAttribute(o):o.startsWith("it-aria-")&&(t[o.replace(/^it-/,"")]=this.getAttribute(o));return t}generateId(t){return`${t}-${Math.random().toString(36).slice(2)}`}addFocus(t){}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}connectedCallback(){var o;super.connectedCallback();const t=((o=this.id)==null?void 0:o.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(t)}}const Po=Lo(uo),yt=new WeakMap,xt=new WeakMap,kt=new WeakMap,Qt=new WeakSet,Ot=new WeakMap;class No{constructor(t,o){this.handleFormData=i=>{const n=this.options.disabled(this.host),r=this.options.name(this.host),s=this.options.value(this.host),a=this.host.tagName.toLowerCase()==="it-button";this.host.isConnected&&!n&&!a&&typeof r=="string"&&r.length>0&&typeof s<"u"&&(Array.isArray(s)?s.forEach(d=>{i.formData.append(r,d.toString())}):i.formData.append(r,s.toString()))},this.handleFormSubmit=i=>{var s;const n=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=yt.get(this.form))==null||s.forEach(a=>{this.setUserInteracted(a,!0)})),this.form&&!this.form.noValidate&&!n&&!r(this.host)&&i.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),Ot.set(this.host,[])},this.handleInteraction=i=>{const n=Ot.get(this.host);n.includes(i.type)||n.push(i.type),n.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const n of i)if(typeof n.checkValidity=="function"&&!n.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const n of i)if(typeof n.reportValidity=="function"&&!n.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:i=>{const n=i.form;if(n){const s=i.getRootNode().querySelector(`#${n}`);if(s)return s}return i.closest("form")},name:i=>i.name,value:i=>i.value,disabled:i=>i.disabled??!1,reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,n)=>{i.value=n},assumeInteractionOn:["it-input"],...o}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),Ot.set(this.host,[]),this.options.assumeInteractionOn.forEach(o=>{this.host.addEventListener(o,this.handleInteraction)})}hostDisconnected(){this.detachForm(),Ot.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,yt.has(this.form)?yt.get(this.form).add(this.host):yt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),xt.has(this.form)||(xt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),kt.has(this.form)||(kt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=yt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),xt.has(this.form)&&(this.form.reportValidity=xt.get(this.form),xt.delete(this.form)),kt.has(this.form)&&(this.form.checkValidity=kt.get(this.form),kt.delete(this.form)),this.form=void 0))}setUserInteracted(t,o){o?Qt.add(t):Qt.delete(t),t.requestUpdate()}doAction(t,o){if(this.form){const i=document.createElement("button");i.type=t,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",o&&(i.name=o.name,i.value=o.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(n=>{o.hasAttribute(n)&&i.setAttribute(n,o.getAttribute(n))})),this.form.append(i),i.click(),i.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const o=this.host,i=!!Qt.has(o),n=!!o.required;o.toggleAttribute("data-required",n),o.toggleAttribute("data-optional",!n),o.toggleAttribute("data-invalid",!t),o.toggleAttribute("data-valid",t),o.toggleAttribute("data-user-invalid",!t&&i),o.toggleAttribute("data-user-valid",t&&i)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const o=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||o.preventDefault(),this.host.dispatchEvent(o)||t==null||t.preventDefault()}}const jo={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};mo(jo);class _ extends Po{constructor(){super(...arguments),this.formControlController=new No(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var t;return(t=this.inputElement)==null?void 0:t.validity}checkValidity(){var o;return((o=this.inputElement)==null?void 0:o.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.inputElement.checkValidity();return this.handleValidationMessages(),t}setCustomValidity(t){this.inputElement.setCustomValidity(t),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(t){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(t){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(t){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(t){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const t=this.inputElement.validity;t.valueMissing?this.setCustomValidity(this.$t("validityRequired")):t.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):t.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):t.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):t.typeMismatch||t.rangeUnderflow||t.rangeOverflow||t.stepMismatch||t.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}_handleChange(t){const o=t.target;let i;if(o instanceof HTMLInputElement)switch(o.type){case"checkbox":case"radio":i=o.checked;break;case"file":i=o.files;break;default:i=o.value}else o instanceof HTMLSelectElement&&o.multiple?i=Array.from(o.selectedOptions).map(n=>n.value):i=o.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:i,el:o},bubbles:!0,composed:!0}))}updated(t){var o;(o=super.updated)==null||o.call(this,t),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}E([At(),C("design:type",Object)],_.prototype,"_touched",void 0);E([Et(".it-form__control"),C("design:type",HTMLInputElement)],_.prototype,"inputElement",void 0);E([u({type:String,reflect:!0}),C("design:type",Object)],_.prototype,"name",void 0);E([u({reflect:!0}),C("design:type",Object)],_.prototype,"value",void 0);E([u({type:Boolean,reflect:!0}),C("design:type",Object)],_.prototype,"disabled",void 0);E([u({reflect:!0,type:String}),C("design:type",Object)],_.prototype,"form",void 0);E([u({type:Boolean,reflect:!0,attribute:"custom-validation"}),C("design:type",Object)],_.prototype,"customValidation",void 0);E([u({attribute:"validity-message",reflect:!0}),C("design:type",String)],_.prototype,"validationText",void 0);E([u(),C("design:type",String)],_.prototype,"pattern",void 0);E([u(),C("design:type",Object)],_.prototype,"min",void 0);E([u(),C("design:type",Object)],_.prototype,"max",void 0);E([u(),C("design:type",Object)],_.prototype,"step",void 0);E([u({type:Number}),C("design:type",Object)],_.prototype,"minlength",void 0);E([u({type:Number}),C("design:type",Object)],_.prototype,"maxlength",void 0);E([u({type:Boolean,reflect:!0}),C("design:type",Object)],_.prototype,"required",void 0);E([At(),C("design:type",Object)],_.prototype,"validationMessage",void 0);const ot=Math.min,M=Math.max,Bt=Math.round,St=Math.floor,H=e=>({x:e,y:e}),Bo={left:"right",right:"left",bottom:"top",top:"bottom"},Wo={start:"end",end:"start"};function te(e,t,o){return M(e,ot(t,o))}function ht(e,t){return typeof e=="function"?e(t):e}function it(e){return e.split("-")[0]}function ft(e){return e.split("-")[1]}function ho(e){return e==="x"?"y":"x"}function ce(e){return e==="y"?"height":"width"}function J(e){return["top","bottom"].includes(it(e))?"y":"x"}function me(e){return ho(J(e))}function qo(e,t,o){o===void 0&&(o=!1);const i=ft(e),n=me(e),r=ce(n);let s=n==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(s=Wt(s)),[s,Wt(s)]}function Uo(e){const t=Wt(e);return[ee(e),t,ee(t)]}function ee(e){return e.replace(/start|end/g,t=>Wo[t])}function Ho(e,t,o){const i=["left","right"],n=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return o?t?n:i:t?i:n;case"left":case"right":return t?r:s;default:return[]}}function Yo(e,t,o,i){const n=ft(e);let r=Ho(it(e),o==="start",i);return n&&(r=r.map(s=>s+"-"+n),t&&(r=r.concat(r.map(ee)))),r}function Wt(e){return e.replace(/left|right|bottom|top/g,t=>Bo[t])}function Ko(e){return{top:0,right:0,bottom:0,left:0,...e}}function fo(e){return typeof e!="number"?Ko(e):{top:e,right:e,bottom:e,left:e}}function qt(e){const{x:t,y:o,width:i,height:n}=e;return{width:i,height:n,top:o,left:t,right:t+i,bottom:o+n,x:t,y:o}}function be(e,t,o){let{reference:i,floating:n}=e;const r=J(t),s=me(t),a=ce(s),d=it(t),l=r==="y",c=i.x+i.width/2-n.width/2,m=i.y+i.height/2-n.height/2,f=i[a]/2-n[a]/2;let p;switch(d){case"top":p={x:c,y:i.y-n.height};break;case"bottom":p={x:c,y:i.y+i.height};break;case"right":p={x:i.x+i.width,y:m};break;case"left":p={x:i.x-n.width,y:m};break;default:p={x:i.x,y:i.y}}switch(ft(t)){case"start":p[s]-=f*(o&&l?-1:1);break;case"end":p[s]+=f*(o&&l?-1:1);break}return p}const Go=async(e,t,o)=>{const{placement:i="bottom",strategy:n="absolute",middleware:r=[],platform:s}=o,a=r.filter(Boolean),d=await(s.isRTL==null?void 0:s.isRTL(t));let l=await s.getElementRects({reference:e,floating:t,strategy:n}),{x:c,y:m}=be(l,i,d),f=i,p={},h=0;for(let w=0;w<a.length;w++){const{name:y,fn:b}=a[w],{x,y:k,data:$,reset:A}=await b({x:c,y:m,initialPlacement:i,placement:f,strategy:n,middlewareData:p,rects:l,platform:s,elements:{reference:e,floating:t}});c=x??c,m=k??m,p={...p,[y]:{...p[y],...$}},A&&h<=50&&(h++,typeof A=="object"&&(A.placement&&(f=A.placement),A.rects&&(l=A.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:n}):A.rects),{x:c,y:m}=be(l,f,d)),w=-1)}return{x:c,y:m,placement:f,strategy:n,middlewareData:p}};async function ue(e,t){var o;t===void 0&&(t={});const{x:i,y:n,platform:r,rects:s,elements:a,strategy:d}=e,{boundary:l="clippingAncestors",rootBoundary:c="viewport",elementContext:m="floating",altBoundary:f=!1,padding:p=0}=ht(t,e),h=fo(p),y=a[f?m==="floating"?"reference":"floating":m],b=qt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(y)))==null||o?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:l,rootBoundary:c,strategy:d})),x=m==="floating"?{x:i,y:n,width:s.floating.width,height:s.floating.height}:s.reference,k=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),$=await(r.isElement==null?void 0:r.isElement(k))?await(r.getScale==null?void 0:r.getScale(k))||{x:1,y:1}:{x:1,y:1},A=qt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:x,offsetParent:k,strategy:d}):x);return{top:(b.top-A.top+h.top)/$.y,bottom:(A.bottom-b.bottom+h.bottom)/$.y,left:(b.left-A.left+h.left)/$.x,right:(A.right-b.right+h.right)/$.x}}const Qo=e=>({name:"arrow",options:e,async fn(t){const{x:o,y:i,placement:n,rects:r,platform:s,elements:a,middlewareData:d}=t,{element:l,padding:c=0}=ht(e,t)||{};if(l==null)return{};const m=fo(c),f={x:o,y:i},p=me(n),h=ce(p),w=await s.getDimensions(l),y=p==="y",b=y?"top":"left",x=y?"bottom":"right",k=y?"clientHeight":"clientWidth",$=r.reference[h]+r.reference[p]-f[p]-r.floating[h],A=f[p]-r.reference[p],P=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let O=P?P[k]:0;(!O||!await(s.isElement==null?void 0:s.isElement(P)))&&(O=a.floating[k]||r.floating[h]);const Q=$/2-A/2,q=O/2-w[h]/2-1,F=ot(m[b],q),Z=ot(m[x],q),U=F,tt=O-w[h]-Z,D=O/2-w[h]/2+Q,rt=te(U,D,tt),X=!d.arrow&&ft(n)!=null&&D!==rt&&r.reference[h]/2-(D<U?F:Z)-w[h]/2<0,N=X?D<U?D-U:D-tt:0;return{[p]:f[p]+N,data:{[p]:rt,centerOffset:D-rt-N,...X&&{alignmentOffset:N}},reset:X}}}),Xo=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var o,i;const{placement:n,middlewareData:r,rects:s,initialPlacement:a,platform:d,elements:l}=t,{mainAxis:c=!0,crossAxis:m=!0,fallbackPlacements:f,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:w=!0,...y}=ht(e,t);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const b=it(n),x=J(a),k=it(a)===a,$=await(d.isRTL==null?void 0:d.isRTL(l.floating)),A=f||(k||!w?[Wt(a)]:Uo(a)),P=h!=="none";!f&&P&&A.push(...Yo(a,w,h,$));const O=[a,...A],Q=await ue(t,y),q=[];let F=((i=r.flip)==null?void 0:i.overflows)||[];if(c&&q.push(Q[b]),m){const D=qo(n,s,$);q.push(Q[D[0]],Q[D[1]])}if(F=[...F,{placement:n,overflows:q}],!q.every(D=>D<=0)){var Z,U;const D=(((Z=r.flip)==null?void 0:Z.index)||0)+1,rt=O[D];if(rt&&(!(m==="alignment"?x!==J(rt):!1)||F.every(j=>j.overflows[0]>0&&J(j.placement)===x)))return{data:{index:D,overflows:F},reset:{placement:rt}};let X=(U=F.filter(N=>N.overflows[0]<=0).sort((N,j)=>N.overflows[1]-j.overflows[1])[0])==null?void 0:U.placement;if(!X)switch(p){case"bestFit":{var tt;const N=(tt=F.filter(j=>{if(P){const et=J(j.placement);return et===x||et==="y"}return!0}).map(j=>[j.placement,j.overflows.filter(et=>et>0).reduce((et,Ao)=>et+Ao,0)]).sort((j,et)=>j[1]-et[1])[0])==null?void 0:tt[0];N&&(X=N);break}case"initialPlacement":X=a;break}if(n!==X)return{reset:{placement:X}}}return{}}}};async function Jo(e,t){const{placement:o,platform:i,elements:n}=e,r=await(i.isRTL==null?void 0:i.isRTL(n.floating)),s=it(o),a=ft(o),d=J(o)==="y",l=["left","top"].includes(s)?-1:1,c=r&&d?-1:1,m=ht(t,e);let{mainAxis:f,crossAxis:p,alignmentAxis:h}=typeof m=="number"?{mainAxis:m,crossAxis:0,alignmentAxis:null}:{mainAxis:m.mainAxis||0,crossAxis:m.crossAxis||0,alignmentAxis:m.alignmentAxis};return a&&typeof h=="number"&&(p=a==="end"?h*-1:h),d?{x:p*c,y:f*l}:{x:f*l,y:p*c}}const Zo=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var o,i;const{x:n,y:r,placement:s,middlewareData:a}=t,d=await Jo(t,e);return s===((o=a.offset)==null?void 0:o.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:n+d.x,y:r+d.y,data:{...d,placement:s}}}}},ti=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:o,y:i,placement:n}=t,{mainAxis:r=!0,crossAxis:s=!1,limiter:a={fn:y=>{let{x:b,y:x}=y;return{x:b,y:x}}},...d}=ht(e,t),l={x:o,y:i},c=await ue(t,d),m=J(it(n)),f=ho(m);let p=l[f],h=l[m];if(r){const y=f==="y"?"top":"left",b=f==="y"?"bottom":"right",x=p+c[y],k=p-c[b];p=te(x,p,k)}if(s){const y=m==="y"?"top":"left",b=m==="y"?"bottom":"right",x=h+c[y],k=h-c[b];h=te(x,h,k)}const w=a.fn({...t,[f]:p,[m]:h});return{...w,data:{x:w.x-o,y:w.y-i,enabled:{[f]:r,[m]:s}}}}}},ei=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var o,i;const{placement:n,rects:r,platform:s,elements:a}=t,{apply:d=()=>{},...l}=ht(e,t),c=await ue(t,l),m=it(n),f=ft(n),p=J(n)==="y",{width:h,height:w}=r.floating;let y,b;m==="top"||m==="bottom"?(y=m,b=f===(await(s.isRTL==null?void 0:s.isRTL(a.floating))?"start":"end")?"left":"right"):(b=m,y=f==="end"?"top":"bottom");const x=w-c.top-c.bottom,k=h-c.left-c.right,$=ot(w-c[y],x),A=ot(h-c[b],k),P=!t.middlewareData.shift;let O=$,Q=A;if((o=t.middlewareData.shift)!=null&&o.enabled.x&&(Q=k),(i=t.middlewareData.shift)!=null&&i.enabled.y&&(O=x),P&&!f){const F=M(c.left,0),Z=M(c.right,0),U=M(c.top,0),tt=M(c.bottom,0);p?Q=h-2*(F!==0||Z!==0?F+Z:M(c.left,c.right)):O=w-2*(U!==0||tt!==0?U+tt:M(c.top,c.bottom))}await d({...t,availableWidth:Q,availableHeight:O});const q=await s.getDimensions(a.floating);return h!==q.width||w!==q.height?{reset:{rects:!0}}:{}}}};function Ut(){return typeof window<"u"}function gt(e){return go(e)?(e.nodeName||"").toLowerCase():"#document"}function T(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function K(e){var t;return(t=(go(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function go(e){return Ut()?e instanceof Node||e instanceof T(e).Node:!1}function B(e){return Ut()?e instanceof Element||e instanceof T(e).Element:!1}function Y(e){return Ut()?e instanceof HTMLElement||e instanceof T(e).HTMLElement:!1}function ve(e){return!Ut()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof T(e).ShadowRoot}function Ct(e){const{overflow:t,overflowX:o,overflowY:i,display:n}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+i+o)&&!["inline","contents"].includes(n)}function oi(e){return["table","td","th"].includes(gt(e))}function Ht(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function he(e){const t=fe(),o=B(e)?W(e):e;return["transform","translate","scale","rotate","perspective"].some(i=>o[i]?o[i]!=="none":!1)||(o.containerType?o.containerType!=="normal":!1)||!t&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!t&&(o.filter?o.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function ii(e){let t=nt(e);for(;Y(t)&&!ut(t);){if(he(t))return t;if(Ht(t))return null;t=nt(t)}return null}function fe(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ut(e){return["html","body","#document"].includes(gt(e))}function W(e){return T(e).getComputedStyle(e)}function Yt(e){return B(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function nt(e){if(gt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ve(e)&&e.host||K(e);return ve(t)?t.host:t}function wo(e){const t=nt(e);return ut(t)?e.ownerDocument?e.ownerDocument.body:e.body:Y(t)&&Ct(t)?t:wo(t)}function zt(e,t,o){var i;t===void 0&&(t=[]),o===void 0&&(o=!0);const n=wo(e),r=n===((i=e.ownerDocument)==null?void 0:i.body),s=T(n);if(r){const a=oe(s);return t.concat(s,s.visualViewport||[],Ct(n)?n:[],a&&o?zt(a):[])}return t.concat(n,zt(n,[],o))}function oe(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function bo(e){const t=W(e);let o=parseFloat(t.width)||0,i=parseFloat(t.height)||0;const n=Y(e),r=n?e.offsetWidth:o,s=n?e.offsetHeight:i,a=Bt(o)!==r||Bt(i)!==s;return a&&(o=r,i=s),{width:o,height:i,$:a}}function ge(e){return B(e)?e:e.contextElement}function mt(e){const t=ge(e);if(!Y(t))return H(1);const o=t.getBoundingClientRect(),{width:i,height:n,$:r}=bo(t);let s=(r?Bt(o.width):o.width)/i,a=(r?Bt(o.height):o.height)/n;return(!s||!Number.isFinite(s))&&(s=1),(!a||!Number.isFinite(a))&&(a=1),{x:s,y:a}}const ni=H(0);function vo(e){const t=T(e);return!fe()||!t.visualViewport?ni:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ri(e,t,o){return t===void 0&&(t=!1),!o||t&&o!==T(e)?!1:t}function dt(e,t,o,i){t===void 0&&(t=!1),o===void 0&&(o=!1);const n=e.getBoundingClientRect(),r=ge(e);let s=H(1);t&&(i?B(i)&&(s=mt(i)):s=mt(e));const a=ri(r,o,i)?vo(r):H(0);let d=(n.left+a.x)/s.x,l=(n.top+a.y)/s.y,c=n.width/s.x,m=n.height/s.y;if(r){const f=T(r),p=i&&B(i)?T(i):i;let h=f,w=oe(h);for(;w&&i&&p!==h;){const y=mt(w),b=w.getBoundingClientRect(),x=W(w),k=b.left+(w.clientLeft+parseFloat(x.paddingLeft))*y.x,$=b.top+(w.clientTop+parseFloat(x.paddingTop))*y.y;d*=y.x,l*=y.y,c*=y.x,m*=y.y,d+=k,l+=$,h=T(w),w=oe(h)}}return qt({width:c,height:m,x:d,y:l})}function we(e,t){const o=Yt(e).scrollLeft;return t?t.left+o:dt(K(e)).left+o}function yo(e,t,o){o===void 0&&(o=!1);const i=e.getBoundingClientRect(),n=i.left+t.scrollLeft-(o?0:we(e,i)),r=i.top+t.scrollTop;return{x:n,y:r}}function si(e){let{elements:t,rect:o,offsetParent:i,strategy:n}=e;const r=n==="fixed",s=K(i),a=t?Ht(t.floating):!1;if(i===s||a&&r)return o;let d={scrollLeft:0,scrollTop:0},l=H(1);const c=H(0),m=Y(i);if((m||!m&&!r)&&((gt(i)!=="body"||Ct(s))&&(d=Yt(i)),Y(i))){const p=dt(i);l=mt(i),c.x=p.x+i.clientLeft,c.y=p.y+i.clientTop}const f=s&&!m&&!r?yo(s,d,!0):H(0);return{width:o.width*l.x,height:o.height*l.y,x:o.x*l.x-d.scrollLeft*l.x+c.x+f.x,y:o.y*l.y-d.scrollTop*l.y+c.y+f.y}}function ai(e){return Array.from(e.getClientRects())}function di(e){const t=K(e),o=Yt(e),i=e.ownerDocument.body,n=M(t.scrollWidth,t.clientWidth,i.scrollWidth,i.clientWidth),r=M(t.scrollHeight,t.clientHeight,i.scrollHeight,i.clientHeight);let s=-o.scrollLeft+we(e);const a=-o.scrollTop;return W(i).direction==="rtl"&&(s+=M(t.clientWidth,i.clientWidth)-n),{width:n,height:r,x:s,y:a}}function li(e,t){const o=T(e),i=K(e),n=o.visualViewport;let r=i.clientWidth,s=i.clientHeight,a=0,d=0;if(n){r=n.width,s=n.height;const l=fe();(!l||l&&t==="fixed")&&(a=n.offsetLeft,d=n.offsetTop)}return{width:r,height:s,x:a,y:d}}function pi(e,t){const o=dt(e,!0,t==="fixed"),i=o.top+e.clientTop,n=o.left+e.clientLeft,r=Y(e)?mt(e):H(1),s=e.clientWidth*r.x,a=e.clientHeight*r.y,d=n*r.x,l=i*r.y;return{width:s,height:a,x:d,y:l}}function ye(e,t,o){let i;if(t==="viewport")i=li(e,o);else if(t==="document")i=di(K(e));else if(B(t))i=pi(t,o);else{const n=vo(e);i={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return qt(i)}function xo(e,t){const o=nt(e);return o===t||!B(o)||ut(o)?!1:W(o).position==="fixed"||xo(o,t)}function ci(e,t){const o=t.get(e);if(o)return o;let i=zt(e,[],!1).filter(a=>B(a)&&gt(a)!=="body"),n=null;const r=W(e).position==="fixed";let s=r?nt(e):e;for(;B(s)&&!ut(s);){const a=W(s),d=he(s);!d&&a.position==="fixed"&&(n=null),(r?!d&&!n:!d&&a.position==="static"&&!!n&&["absolute","fixed"].includes(n.position)||Ct(s)&&!d&&xo(e,s))?i=i.filter(c=>c!==s):n=a,s=nt(s)}return t.set(e,i),i}function mi(e){let{element:t,boundary:o,rootBoundary:i,strategy:n}=e;const s=[...o==="clippingAncestors"?Ht(t)?[]:ci(t,this._c):[].concat(o),i],a=s[0],d=s.reduce((l,c)=>{const m=ye(t,c,n);return l.top=M(m.top,l.top),l.right=ot(m.right,l.right),l.bottom=ot(m.bottom,l.bottom),l.left=M(m.left,l.left),l},ye(t,a,n));return{width:d.right-d.left,height:d.bottom-d.top,x:d.left,y:d.top}}function ui(e){const{width:t,height:o}=bo(e);return{width:t,height:o}}function hi(e,t,o){const i=Y(t),n=K(t),r=o==="fixed",s=dt(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const d=H(0);function l(){d.x=we(n)}if(i||!i&&!r)if((gt(t)!=="body"||Ct(n))&&(a=Yt(t)),i){const p=dt(t,!0,r,t);d.x=p.x+t.clientLeft,d.y=p.y+t.clientTop}else n&&l();r&&!i&&n&&l();const c=n&&!i&&!r?yo(n,a):H(0),m=s.left+a.scrollLeft-d.x-c.x,f=s.top+a.scrollTop-d.y-c.y;return{x:m,y:f,width:s.width,height:s.height}}function Xt(e){return W(e).position==="static"}function xe(e,t){if(!Y(e)||W(e).position==="fixed")return null;if(t)return t(e);let o=e.offsetParent;return K(e)===o&&(o=o.ownerDocument.body),o}function ko(e,t){const o=T(e);if(Ht(e))return o;if(!Y(e)){let n=nt(e);for(;n&&!ut(n);){if(B(n)&&!Xt(n))return n;n=nt(n)}return o}let i=xe(e,t);for(;i&&oi(i)&&Xt(i);)i=xe(i,t);return i&&ut(i)&&Xt(i)&&!he(i)?o:i||ii(e)||o}const fi=async function(e){const t=this.getOffsetParent||ko,o=this.getDimensions,i=await o(e.floating);return{reference:hi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:i.width,height:i.height}}};function gi(e){return W(e).direction==="rtl"}const wi={convertOffsetParentRelativeRectToViewportRelativeRect:si,getDocumentElement:K,getClippingRect:mi,getOffsetParent:ko,getElementRects:fi,getClientRects:ai,getDimensions:ui,getScale:mt,isElement:B,isRTL:gi};function zo(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function bi(e,t){let o=null,i;const n=K(e);function r(){var a;clearTimeout(i),(a=o)==null||a.disconnect(),o=null}function s(a,d){a===void 0&&(a=!1),d===void 0&&(d=1),r();const l=e.getBoundingClientRect(),{left:c,top:m,width:f,height:p}=l;if(a||t(),!f||!p)return;const h=St(m),w=St(n.clientWidth-(c+f)),y=St(n.clientHeight-(m+p)),b=St(c),k={rootMargin:-h+"px "+-w+"px "+-y+"px "+-b+"px",threshold:M(0,ot(1,d))||1};let $=!0;function A(P){const O=P[0].intersectionRatio;if(O!==d){if(!$)return s();O?s(!1,O):i=setTimeout(()=>{s(!1,1e-7)},1e3)}O===1&&!zo(l,e.getBoundingClientRect())&&s(),$=!1}try{o=new IntersectionObserver(A,{...k,root:n.ownerDocument})}catch{o=new IntersectionObserver(A,k)}o.observe(e)}return s(!0),r}function vi(e,t,o,i){i===void 0&&(i={});const{ancestorScroll:n=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:d=!1}=i,l=ge(e),c=n||r?[...l?zt(l):[],...zt(t)]:[];c.forEach(b=>{n&&b.addEventListener("scroll",o,{passive:!0}),r&&b.addEventListener("resize",o)});const m=l&&a?bi(l,o):null;let f=-1,p=null;s&&(p=new ResizeObserver(b=>{let[x]=b;x&&x.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var k;(k=p)==null||k.observe(t)})),o()}),l&&!d&&p.observe(l),p.observe(t));let h,w=d?dt(e):null;d&&y();function y(){const b=dt(e);w&&!zo(w,b)&&o(),w=b,h=requestAnimationFrame(y)}return o(),()=>{var b;c.forEach(x=>{n&&x.removeEventListener("scroll",o),r&&x.removeEventListener("resize",o)}),m==null||m(),(b=p)==null||b.disconnect(),p=null,d&&cancelAnimationFrame(h)}}const yi=Zo,xi=ti,ki=Xo,zi=ei,Ai=Qo,Ei=(e,t,o)=>{const i=new Map,n={platform:wi,...o},r={...n.platform,_c:i};return Go(e,t,{...n,platform:r})};var Ci=ne`/***************************** 1 ****************************************/
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
:host {
  --bs-dropdown-background: var(--bs-color-background-inverse);
}`;let lt=class extends uo{constructor(){super(...arguments),this.open=!1,this.placement="bottom-start",this._onDocumentClick=t=>{if(!this.open)return;const o=t.composedPath();!o.includes(this)&&!o.includes(this._contentElement)&&!o.includes(this._triggerElement)&&(this.open=!1)}}get _triggerElement(){var t;return(t=this._triggerSlot)==null?void 0:t.assignedElements({flatten:!0})[0]}get _contentElement(){var t;return(t=this._contentSlot)==null?void 0:t.assignedElements({flatten:!0})[0]}_setChildrenProperties(){var t,o,i,n;this._triggerElement&&this._triggerElement.tagName==="IT-BUTTON"?(this._triggerElement.hasAttribute("it-aria-haspopup")||(t=this._triggerElement)==null||t.setAttribute("it-aria-haspopup","true"),this._triggerElement.expanded=this.open):((o=this._triggerElement)!=null&&o.hasAttribute("aria-haspopup")||(i=this._triggerElement)==null||i.setAttribute("aria-haspopup","true"),(n=this._triggerElement)==null||n.setAttribute("aria-expanded",String(this.open)))}connectedCallback(){var t;(t=super.connectedCallback)==null||t.call(this),document.addEventListener("click",this._onDocumentClick)}disconnectedCallback(){var t,o;(t=super.disconnectedCallback)==null||t.call(this),document.removeEventListener("click",this._onDocumentClick),(o=this._cleanup)==null||o.call(this)}updated(t){this._setChildrenProperties(),t.has("open")&&(this.open?(this._show(),this.dispatchEvent(new CustomEvent("it-popover-open",{bubbles:!0,composed:!0}))):(this._hide(),this.dispatchEvent(new CustomEvent("it-popover-close",{bubbles:!0,composed:!0}))))}_createArrow(){this._contentElement&&(this._arrowElement||(this._arrowElement=document.createElement("div"),this._arrowElement.className="arrow",this._contentElement.prepend(this._arrowElement)))}_show(){!this._triggerElement||!this._contentElement||(this._contentElement.style.position="absolute",this._contentElement.style.visibility="visible",this._createArrow(),this._cleanup=vi(this._triggerElement,this._contentElement,()=>{Ei(this._triggerElement,this._contentElement,{placement:this.placement,middleware:[yi(12),ki(),xi({padding:8}),zi({apply({rects:t,elements:o}){Object.assign(o.floating.style,{minWidth:`${t.reference.width}px`})}}),Ai({element:this._arrowElement})]}).then(({x:t,y:o,placement:i,middlewareData:n})=>{if(Object.assign(this._contentElement.style,{left:`${t}px`,top:`${o}px`}),n.arrow){const{x:r,y:s}=n.arrow,a={top:"bottom",right:"left",bottom:"top",left:"right"}[i.split("-")[0]];Object.assign(this._arrowElement.style,{left:r!=null?"20px":"",top:s!=null?`${s}px`:"",right:"",bottom:"",[a]:"-8px",position:"absolute",transform:"rotate(45deg)"})}})}),this._focusContent())}_hide(){var t;(t=this._cleanup)==null||t.call(this),this._contentElement.style.visibility="hidden"}_focusContent(){var t,o;(o=(t=this._contentElement)==null?void 0:t.focus)==null||o.call(t)}toggle(){this.open=!this.open}openPopover(){this.open=!0}closePopover(){this.open=!1}render(){return z`
      <slot name="trigger" part="trigger" @slotchange=${this._setChildrenProperties}></slot>
      <slot name="content"></slot>
    `}};lt.styles=Ci;E([u({type:Boolean,reflect:!0}),C("design:type",Object)],lt.prototype,"open",void 0);E([u({type:String}),C("design:type",String)],lt.prototype,"placement",void 0);E([Et('slot[name="trigger"]'),C("design:type",HTMLSlotElement)],lt.prototype,"_triggerSlot",void 0);E([Et('slot[name="content"]'),C("design:type",HTMLSlotElement)],lt.prototype,"_contentSlot",void 0);lt=E([re("it-popover")],lt);const Kt="height:200px;display:flex;align-items:flex-start;",L={title:"Componenti/Dropdown",component:"it-dropdown",tags:["autodocs"],args:{label:"Apri dropdown",disabled:!1,alignment:void 0,variant:"primary",size:void 0,"it-role":void 0,dark:!1,"full-width":!1},argTypes:{label:{control:"text"},disabled:{control:"boolean"},alignment:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"]},variant:{control:"select",options:["primary","secondary","success","danger","warning","light","link"]},size:{control:"select",options:["sm","lg"]},"it-role":{control:"select",options:["menu","list"]},dark:{control:"boolean"},"full-width":{control:"boolean"}},decorators:[e=>z`<div style=${Kt}>${e()}</div>`],parameters:{docs:{description:{component:'\n<Description>Attiva o disattiva overlay contestuali per visualizzare liste di link ed altro ancora con questi menu a tendina.</Description>\n\nPer la creazione di un dropdown è necessario utilizzare il componente `<it-dropdown>` che può contenere al suo interno uno o più `<it-dropdown-item>`.\nÈ necessario specificare l\'etichetta del menu tramite l\'attributo `label`.\nÈ possibile specificare una variante tramite l\'attributo `variant`, questa verrà applicata al pulsante di attivazione del menu.\n\n<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>\n<p>Lo standard <a href="https://www.w3.org/TR/wai-aria/">WAI ARIA</a> definisce un widget con proprietà <a href="https://www.w3.org/TR/wai-aria/#menu">`role="menu"`</a>, specifica per i menu applicativi con link o azioni.\nQuesti menu possono contenere solo voci di menu, voci di menu di caselle di controllo, voci di menu dei pulsanti di opzione, gruppi di pulsanti di opzione e sottomenu.</p>\n<p>I dropdown di **Dev Kit Italia** sono progettati per essere invece generici e applicabili a una varietà di situazioni. Per questo motivo, il componente `it-dropdown` ha come ruolo predefinito il ruolo `menu` e gestisce automaticamente il ruolo degli elementi interni, ma gli autori potranno modificare il ruolo del Dropdown generato da questo componente ad una semplice lista impostando l\'attributo `it-role="list"`.</p>\n<p>Questo componente comprende di base il supporto per la maggior parte delle interazioni standard del menu della tastiera, come la possibilità di spostarsi tra i singoli elementi `it-dropdown-item` usando i tasti freccia, e chiude il menu con il tasto ESC.</p>\n</div></div>\n'}}}};function G(e){return Object.keys(L.argTypes).reduce((t,o)=>(e!=null&&e.includes(o)||(t[o]={table:{disable:!0}}),t),{})}const _t={render:e=>z`
    <it-dropdown
      label=${e.label}
      ?disabled=${e.disabled}
      alignment=${V(e.alignment)}
      size=${V(e.size)}
      variant=${e.variant}
      it-role=${V(e["it-role"])}
      ?dark=${e.dark}
      ?full-width=${e["full-width"]}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,parameters:{...L.parameters,docs:{source:{excludeDecorators:!0},canvas:{sourceState:"shown"}}},tags:["!autodocs","!dev"]},Dt={name:"Dropdown button varianti",render:()=>z`
    <it-dropdown label="Primario" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Secondario" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Success" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Danger" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[e=>z`<div style="${Kt}gap:0.5rem;flex-wrap:wrap;display:flex">${e()}</div>`],argTypes:{...G()},parameters:{...L.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Ovviamente sono disponibili tutte le varianti già disponibili per i pulsanti. Di seguito, un esempio di utilizzo con le varianti `primary`, `secondary`, `success` e `danger`."}}}},Vt={render:()=>z`
    <it-dropdown label="Giù" alignment="bottom-start">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Su" alignment="top-start">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Sinistra" alignment="left">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Destra" alignment="right">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[e=>z`<div
        style="${Kt}gap:2rem;flex-wrap:wrap;align-items:space-between;justify-content:center;flex-direction:column;"
      >
        ${e()}
      </div>`],argTypes:{...G()},parameters:{...L.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Per aprire le voci di menu in direzioni diverse,\nè possibile utilizzare l'attributo `alignment` con i valori `top`, `right`,\n`bottom`, `left`, `top-start`, `top-end`, `right-start`, `right-end`,\n`bottom-start`, `bottom-end`, `left-start` e `left-end`.\n\nI valori `top`, `right`, `bottom` e `left` aprono il menu in direzioni standard,\ncentrate rispetto al trigger,\nmentre i valori `top-start`, `top-end`, `right-start`, `right-end`,\n`bottom-start`, `bottom-end`, `left-start` e `left-end` permettono di specificare\nla posizione esatta del menu rispetto al trigger.\n"}}}},Rt={name:"Menu con voci attive",render:e=>z`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...G(["label","variant"])},parameters:{...L.parameters,docs:{source:{excludeDecorators:!0},description:{story:`Aggiungere l'attributo active agli elementi del dropdown che si vogliono mostrare come attivi.
Per questioni di accessibilità il componente aggiungerà automaticamente <span class="visually-hidden"> attivo</span> in coda al testo degli elementi attivi.`}}}},Mt={name:"Menu disabilitato",args:{disabled:!0},render:e=>z`
    <it-dropdown label=${e.label} ?disabled=${e.disabled} variant=${e.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...G(["label","variant"])},parameters:{...L.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Aggiungere l'attributo `disabled` al dropdown per **disabilitarlo** completamente."}}}},Tt={name:"Menu con voci disabilitate",render:e=>z`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...G(["label","variant"])},parameters:{...L.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Aggiungere l'attributo `disabled` agli elementi del dropdown che si vogliono mostrare come **disabilitati**."}}}},It={name:"Menu con intestazioni e separatori",render:e=>z`
    <it-dropdown label="Item con separatore e header" variant=${e.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Prima voce</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Dopo separatore</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...G(["variant"])},parameters:{...L.parameters,docs:{source:{excludeDecorators:!0},description:{story:"All'interno del menu dropdown possono essere inseriti header e separatori."}}}},Lt={name:"Menu con voci grandi",render:e=>z`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Grande</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...G(["label","variant"])},parameters:{...L.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Per aumentare la dimensione degli elementi contenuti nel dropdown\nè sufficiente aggiungere agli stessi l'attributo `large`."}}}},Ft={name:"Menu a tutta larghezza",args:{"full-width":!0},render:e=>z`
    <it-dropdown
      label=${e.label}
      ?disabled=${e.disabled}
      alignment=${V(e.alignment)}
      size=${V(e.size)}
      variant=${V(e.variant)}
      it-role=${V(e["it-role"])}
      ?dark=${e.dark}
      ?full-width=${e["full-width"]}
      style="width: 100%;"
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[e=>z`<div style="${Kt}min-width:300px">${e()}</div>`],parameters:{...L.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Per ottenere un dropdown menu largo quanto l’elemento che contiene il dropdown button\nè sufficiente aggiungere l'attributo `full-width`.\nI link e testi contenuti al suo interno saranno disposti in orizzontale."}}}},Pt={name:"Menu con icona a destra",render:e=>z`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#">
        Azione 1
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 2
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 3
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...G(["label","variant"])},parameters:{...L.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa\nallineata a destra utilizzando lo slot `suffix`"}}}},Nt={name:"Menu con icona a sinistra",render:e=>z`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 1
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 2
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 3
      </it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...G(["label","variant"])},parameters:{...L.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa\nallineata a sinistra utilizzando lo slot `prefix`"}}}},jt={name:"Menu scuro",args:{dark:!0},render:e=>z`
    <it-dropdown label=${e.label} variant=${e.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...G(["label","variant"])},parameters:{...L.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Aggiungendo l'attributo `dark` al dropdown si ottiene una versione con un colore primario scuro.\nLink ed elementi interni vengono declinati di conseguenza."}}}};var ke,ze,Ae;_t.parameters={..._t.parameters,docs:{...(ke=_t.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown
      label=\${args.label}
      ?disabled=\${args.disabled}
      alignment=\${ifDefined(args.alignment)}
      size=\${ifDefined(args.size)}
      variant=\${args.variant}
      it-role=\${ifDefined(args['it-role'])}
      ?dark=\${args.dark}
      ?full-width=\${args['full-width']}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  tags: ['!autodocs', '!dev']
}`,...(Ae=(ze=_t.parameters)==null?void 0:ze.docs)==null?void 0:Ae.source}}};var Ee,Ce,$e;Dt.parameters={...Dt.parameters,docs:{...(Ee=Dt.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  name: 'Dropdown button varianti',
  render: () => html\`
    <it-dropdown label="Primario" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Secondario" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Success" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Danger" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="\${containerStyle}gap:0.5rem;flex-wrap:wrap;display:flex">\${Story()}</div>\`],
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: 'Ovviamente sono disponibili tutte le varianti già disponibili per i pulsanti. Di seguito, un esempio di utilizzo con le varianti \`primary\`, \`secondary\`, \`success\` e \`danger\`.'
      }
    }
  }
}`,...($e=(Ce=Dt.parameters)==null?void 0:Ce.docs)==null?void 0:$e.source}}};var Oe,Se,_e;Vt.parameters={...Vt.parameters,docs:{...(Oe=Vt.parameters)==null?void 0:Oe.docs,source:{originalSource:'{\n  render: () => html`\n    <it-dropdown label="Giù" alignment="bottom-start">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n\n    <it-dropdown label="Su" alignment="top-start">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n\n    <it-dropdown label="Sinistra" alignment="left">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n\n    <it-dropdown label="Destra" alignment="right">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n  `,\n  decorators: [Story => html`<div\n        style="${containerStyle}gap:2rem;flex-wrap:wrap;align-items:space-between;justify-content:center;flex-direction:column;"\n      >\n        ${Story()}\n      </div>`],\n  argTypes: {\n    ...disabledControls()\n  },\n  parameters: {\n    ...meta.parameters,\n    docs: {\n      source: {\n        excludeDecorators: true\n      },\n      description: {\n        story: `Per aprire le voci di menu in direzioni diverse,\nè possibile utilizzare l\'attributo \\`alignment\\` con i valori \\`top\\`, \\`right\\`,\n\\`bottom\\`, \\`left\\`, \\`top-start\\`, \\`top-end\\`, \\`right-start\\`, \\`right-end\\`,\n\\`bottom-start\\`, \\`bottom-end\\`, \\`left-start\\` e \\`left-end\\`.\n\nI valori \\`top\\`, \\`right\\`, \\`bottom\\` e \\`left\\` aprono il menu in direzioni standard,\ncentrate rispetto al trigger,\nmentre i valori \\`top-start\\`, \\`top-end\\`, \\`right-start\\`, \\`right-end\\`,\n\\`bottom-start\\`, \\`bottom-end\\`, \\`left-start\\` e \\`left-end\\` permettono di specificare\nla posizione esatta del menu rispetto al trigger.\n`\n      }\n    }\n  }\n}',...(_e=(Se=Vt.parameters)==null?void 0:Se.docs)==null?void 0:_e.source}}};var De,Ve,Re;Rt.parameters={...Rt.parameters,docs:{...(De=Rt.parameters)==null?void 0:De.docs,source:{originalSource:`{
  name: 'Menu con voci attive',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungere l'attributo active agli elementi del dropdown che si vogliono mostrare come attivi.
Per questioni di accessibilità il componente aggiungerà automaticamente <span class="visually-hidden"> attivo</span> in coda al testo degli elementi attivi.\`
      }
    }
  }
}`,...(Re=(Ve=Rt.parameters)==null?void 0:Ve.docs)==null?void 0:Re.source}}};var Me,Te,Ie;Mt.parameters={...Mt.parameters,docs:{...(Me=Mt.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  name: 'Menu disabilitato',
  args: {
    disabled: true
  },
  render: args => html\`
    <it-dropdown label=\${args.label} ?disabled=\${args.disabled} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungere l'attributo \\\`disabled\\\` al dropdown per **disabilitarlo** completamente.\`
      }
    }
  }
}`,...(Ie=(Te=Mt.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var Le,Fe,Pe;Tt.parameters={...Tt.parameters,docs:{...(Le=Tt.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  name: 'Menu con voci disabilitate',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungere l'attributo \\\`disabled\\\` agli elementi del dropdown che si vogliono mostrare come **disabilitati**.\`
      }
    }
  }
}`,...(Pe=(Fe=Tt.parameters)==null?void 0:Fe.docs)==null?void 0:Pe.source}}};var Ne,je,Be;It.parameters={...It.parameters,docs:{...(Ne=It.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  name: 'Menu con intestazioni e separatori',
  render: args => html\`
    <it-dropdown label="Item con separatore e header" variant=\${args.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Prima voce</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Dopo separatore</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`All'interno del menu dropdown possono essere inseriti header e separatori.\`
      }
    }
  }
}`,...(Be=(je=It.parameters)==null?void 0:je.docs)==null?void 0:Be.source}}};var We,qe,Ue;Lt.parameters={...Lt.parameters,docs:{...(We=Lt.parameters)==null?void 0:We.docs,source:{originalSource:`{
  name: 'Menu con voci grandi',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Grande</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Per aumentare la dimensione degli elementi contenuti nel dropdown
è sufficiente aggiungere agli stessi l'attributo \\\`large\\\`.\`
      }
    }
  }
}`,...(Ue=(qe=Lt.parameters)==null?void 0:qe.docs)==null?void 0:Ue.source}}};var He,Ye,Ke;Ft.parameters={...Ft.parameters,docs:{...(He=Ft.parameters)==null?void 0:He.docs,source:{originalSource:`{
  name: 'Menu a tutta larghezza',
  args: {
    'full-width': true
  },
  render: args => html\`
    <it-dropdown
      label=\${args.label}
      ?disabled=\${args.disabled}
      alignment=\${ifDefined(args.alignment)}
      size=\${ifDefined(args.size)}
      variant=\${ifDefined(args.variant)}
      it-role=\${ifDefined(args['it-role'])}
      ?dark=\${args.dark}
      ?full-width=\${args['full-width']}
      style="width: 100%;"
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="\${containerStyle}min-width:300px">\${Story()}</div>\`],
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Per ottenere un dropdown menu largo quanto l’elemento che contiene il dropdown button
è sufficiente aggiungere l'attributo \\\`full-width\\\`.
I link e testi contenuti al suo interno saranno disposti in orizzontale.\`
      }
    }
  }
}`,...(Ke=(Ye=Ft.parameters)==null?void 0:Ye.docs)==null?void 0:Ke.source}}};var Ge,Qe,Xe;Pt.parameters={...Pt.parameters,docs:{...(Ge=Pt.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  name: 'Menu con icona a destra',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">
        Azione 1
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 2
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 3
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa
allineata a destra utilizzando lo slot \\\`suffix\\\`\`
      }
    }
  }
}`,...(Xe=(Qe=Pt.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.source}}};var Je,Ze,to;Nt.parameters={...Nt.parameters,docs:{...(Je=Nt.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  name: 'Menu con icona a sinistra',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 1
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 2
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 3
      </it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa
allineata a sinistra utilizzando lo slot \\\`prefix\\\`\`
      }
    }
  }
}`,...(to=(Ze=Nt.parameters)==null?void 0:Ze.docs)==null?void 0:to.source}}};var eo,oo,io;jt.parameters={...jt.parameters,docs:{...(eo=jt.parameters)==null?void 0:eo.docs,source:{originalSource:`{
  name: 'Menu scuro',
  args: {
    dark: true
  },
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungendo l'attributo \\\`dark\\\` al dropdown si ottiene una versione con un colore primario scuro.
Link ed elementi interni vengono declinati di conseguenza.\`
      }
    }
  }
}`,...(io=(oo=jt.parameters)==null?void 0:oo.docs)==null?void 0:io.source}}};const ji=["Base","Varianti","Direzioni","MenuVociAttive","MenuDisabilitato","MenuVociDisabilitate","MenuIntestazioniSeparatori","MenuVociGrandi","MenuATuttaLarghezza","MenuIconaDestra","MenuIconaSinistra","MenuScuro"];export{_t as Base,Vt as Direzioni,Ft as MenuATuttaLarghezza,Mt as MenuDisabilitato,Pt as MenuIconaDestra,Nt as MenuIconaSinistra,It as MenuIntestazioniSeparatori,jt as MenuScuro,Rt as MenuVociAttive,Tt as MenuVociDisabilitate,Lt as MenuVociGrandi,Dt as Varianti,ji as __namedExportsOrder,L as default};
