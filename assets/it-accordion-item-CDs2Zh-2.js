import{a as K,i as M,x as f,E as L}from"./iframe-BiclfI91.js";import{r as T,e as D,n as d,t as q}from"./query-Bd2ew8Gc.js";import{o as F}from"./query-assigned-elements-DeyBePrH.js";import{n as W}from"./when-BR7zwNJC.js";function a(r,t,e,o){var i=arguments.length,n=i<3?t:o,c;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(r,t,e,o);else for(var h=r.length-1;h>=0;h--)(c=r[h])&&(n=(i<3?c(n):i>3?c(t,e,n):c(t,e))||n);return i>3&&n&&Object.defineProperty(t,e,n),n}function s(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)}function R(r){var t,e,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r)){var i=r.length;for(t=0;t<i;t++)r[t]&&(e=R(r[t]))&&(o&&(o+=" "),o+=e)}else for(e in r)r[e]&&(o&&(o+=" "),o+=e);return o}function P(){for(var r,t,e=0,o="",i=arguments.length;e<i;e++)(r=arguments[e])&&(t=R(r))&&(o&&(o+=" "),o+=t);return o}const I=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:v}=window;let p,z="ltr",V="en";const B=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function j(){B&&(z=document.documentElement.dir||"ltr",V=document.documentElement.lang||navigator.language),[...I.keys()].forEach(r=>{const t=r;typeof t.requestUpdate=="function"&&t.requestUpdate()})}if(B){const r=new MutationObserver(j);z=document.documentElement.dir||"ltr",V=document.documentElement.lang||navigator.language,r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function N(...r){r.forEach(t=>{const e=t.$code.toLowerCase();v.has(e)?v.set(e,{...v.get(e),...t}):v.set(e,t),p||(p=t)}),j()}window.registerTranslation=N;class Y{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){I.add(this.host)}hostDisconnected(){I.delete(this.host)}dir(){return`${this.host.dir||z}`.toLowerCase()}lang(){return`${this.host.lang||V}`.toLowerCase()}getTranslationData(t){var h;const e=new Intl.Locale(t.replace(/_/g,"-")),o=e==null?void 0:e.language.toLowerCase(),i=((h=e==null?void 0:e.region)==null?void 0:h.toLowerCase())??"",n=v.get(`${o}-${i}`),c=v.get(o);return{locale:e,language:o,region:i,primary:n,secondary:c}}exists(t,e){const{primary:o,secondary:i}=this.getTranslationData(e.lang??this.lang()),n={includeFallback:!1,...e};return!!(o&&o[t]||i&&i[t]||n.includeFallback&&p&&p[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let n;if(o&&o[t])n=o[t];else if(i&&i[t])n=i[t];else if(p&&p[t])n=p[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof n=="function"?n(...e):n}date(t,e){const o=new Date(t);return new Intl.DateTimeFormat(this.lang(),e).format(o)}number(t,e){const o=Number(t);return Number.isNaN(o)?"":new Intl.NumberFormat(this.lang(),e).format(o)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}const Q=r=>class extends r{constructor(){super(...arguments),this.localize=new Y(this)}get $localize(){return this.localize}$t(t){return this.localize.term(t)}$d(t,e){return this.localize.date(t,e)}$n(t,e){return this.localize.number(t,e)}};class G{constructor(t){this.tag=t}format(t,e){return[`[${this.tag}] ${e}`]}warn(t){console.warn(...this.format("warn",t))}error(t){console.error(...this.format("error",t))}info(t){console.info(...this.format("info",t))}}class C extends K{constructor(){super(),this.composeClass=P,this.logger=new G(this.tagName.toLowerCase())}get _ariaAttributes(){const t={};for(const e of this.getAttributeNames())e==="it-role"?t.role=this.getAttribute(e):e.startsWith("it-aria-")&&(t[e.replace(/^it-/,"")]=this.getAttribute(e));return t}generateId(t){return`${t}-${Math.random().toString(36).slice(2)}`}addFocus(t){}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}get focusElement(){return this}get prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}connectedCallback(){var e;super.connectedCallback();const t=((e=this.id)==null?void 0:e.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(t)}}const J=Q(C),k=new WeakMap,x=new WeakMap,w=new WeakMap,A=new WeakSet,E=new WeakMap;class X{constructor(t,e){this.handleFormData=o=>{const i=this.options.disabled(this.host),n=this.options.name(this.host),c=this.options.value(this.host),h=this.host.tagName.toLowerCase(),y=h==="it-button";if(this.host.isConnected&&!i&&!y&&typeof n=="string"&&n.length>0&&typeof c<"u")switch(h){case"it-radio":this.host.checked&&o.formData.append(n,c);break;case"it-checkbox":this.host.checked&&o.formData.getAll(n).indexOf(c)<0&&o.formData.append(n,c);break;default:Array.isArray(c)?c.forEach(b=>{o.formData.append(n,b.toString())}):o.formData.append(n,c.toString())}},this.handleFormSubmit=o=>{var c;const i=this.options.disabled(this.host),n=this.options.reportValidity;this.form&&!this.form.noValidate&&((c=k.get(this.form))==null||c.forEach(h=>{this.setUserInteracted(h,!0)})),this.form&&!this.form.noValidate&&!i&&!n(this.host)&&o.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),E.set(this.host,[])},this.handleInteraction=o=>{const i=E.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:o=>{const i=o.form;if(i){const c=o.getRootNode().querySelector(`#${i}`);if(c)return c}return o.closest("form")},name:o=>o.name,value:o=>o.value,disabled:o=>o.disabled??!1,reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>{o.value=i},assumeInteractionOn:["it-input"],...e}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),E.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),E.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,k.has(this.form)?k.get(this.form).add(this.host):k.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),x.has(this.form)||(x.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),w.has(this.form)||(w.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=k.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),x.has(this.form)&&(this.form.reportValidity=x.get(this.form),x.delete(this.form)),w.has(this.form)&&(this.form.checkValidity=w.get(this.form),w.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?A.add(t):A.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!A.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}}const Z={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};N(Z);class l extends J{constructor(){super(...arguments),this.formControlController=new X(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var t;return(t=this.inputElement)==null?void 0:t.validity}checkValidity(){var e;return((e=this.inputElement)==null?void 0:e.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.inputElement.checkValidity();return this.handleValidationMessages(),t}setCustomValidity(t){this.inputElement.setCustomValidity(t),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(t){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(t){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(t){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(t){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const t=this.inputElement.validity;t.valueMissing?this.setCustomValidity(this.$t("validityRequired")):t.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):t.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):t.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):t.typeMismatch||t.rangeUnderflow||t.rangeOverflow||t.stepMismatch||t.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}_handleChange(t){const e=t.target;let o;if(e instanceof HTMLInputElement)switch(e.type){case"checkbox":case"radio":o=e.checked;break;case"file":o=e.files;break;default:o=e.value}else e instanceof HTMLSelectElement&&e.multiple?o=Array.from(e.selectedOptions).map(i=>i.value):o=e.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:o,el:e},bubbles:!0,composed:!0}))}updated(t){var e;(e=super.updated)==null||e.call(this,t),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}a([T(),s("design:type",Object)],l.prototype,"_touched",void 0);a([D(".it-form__control"),s("design:type",HTMLInputElement)],l.prototype,"inputElement",void 0);a([d({type:String,reflect:!0}),s("design:type",Object)],l.prototype,"name",void 0);a([d({reflect:!0}),s("design:type",Object)],l.prototype,"value",void 0);a([d({type:Boolean,reflect:!0}),s("design:type",Object)],l.prototype,"disabled",void 0);a([d({reflect:!0,type:String}),s("design:type",Object)],l.prototype,"form",void 0);a([d({type:Boolean,reflect:!0,attribute:"custom-validation"}),s("design:type",Object)],l.prototype,"customValidation",void 0);a([d({attribute:"validity-message",reflect:!0}),s("design:type",String)],l.prototype,"validationText",void 0);a([d(),s("design:type",String)],l.prototype,"pattern",void 0);a([d(),s("design:type",Object)],l.prototype,"min",void 0);a([d(),s("design:type",Object)],l.prototype,"max",void 0);a([d(),s("design:type",Object)],l.prototype,"step",void 0);a([d({type:Number}),s("design:type",Object)],l.prototype,"minlength",void 0);a([d({type:Number}),s("design:type",Object)],l.prototype,"maxlength",void 0);a([d({type:Boolean,reflect:!0}),s("design:type",Object)],l.prototype,"required",void 0);a([T(),s("design:type",Object)],l.prototype,"validationMessage",void 0);var H=M`@charset "UTF-8";
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
.accordion {
  --bs-accordion-color: var(--bs-color-text-base);
  --bs-accordion-background: var(--bs-page-background);
  --bs-accordion-transition: var(--bs-transition-instant);
  --bs-accordion-border-color: var(--bs-color-border-subtle);
  --bs-accordion-border-width: 0;
  --bs-accordion-item-border-width: 1px;
  --bs-accordion-border-radius: var(--bs-radius-smooth);
  --bs-accordion-inner-border-radius: var(--bs-radius-smooth);
  --bs-accordion-btn-padding-x: var(--bs-spacing-m);
  --bs-accordion-btn-padding-y: var(--bs-spacing-s);
  --bs-accordion-btn-color: var(--bs-color-text-primary);
  --bs-accordion-btn-line-height: var(--bs-font-line-height-1);
  --bs-accordion-btn-bg: var(--bs-accordion-background);
  --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='hsl%280, 0%, 10%%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  --bs-accordion-btn-icon-width: 1.25rem;
  --bs-accordion-btn-icon-transform: rotate(-180deg);
  --bs-accordion-btn-icon-transition: transform 0.2s ease-in-out;
  --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='rgb%280, 91.8, 183.6%29'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  --bs-accordion-btn-focus-border-color: hsl(210, 17%, 44%);
  --bs-accordion-btn-focus-box-shadow: 0 0 0 0.25rem rgba(0, 102, 204, 0.25);
  --bs-accordion-body-padding-x: var(--bs-spacing-m);
  --bs-accordion-body-padding-y: var(--bs-spacing-s);
  --bs-accordion-active-color: var(--bs-color-text-primary-active);
  --bs-accordion-active-bg: var(--bs-color-background-primary);
}

.accordion-button {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: var(--bs-accordion-btn-padding-y) var(--bs-accordion-btn-padding-x);
  border: 0;
  line-height: var(--bs-accordion-btn-line-height);
  background-color: var(--bs-accordion-btn-bg);
  color: var(--bs-accordion-btn-color);
  text-align: left;
  overflow-anchor: none;
  border-radius: 0;
  transition: var(--bs-accordion-transition);
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button {
    transition: none;
  }
}
.accordion-button:not(.collapsed) {
  background-color: var(--bs-accordion-active-bg);
  color: var(--bs-accordion-active-color);
}
.accordion-button:not(.collapsed)::after {
  background-image: var(--bs-accordion-btn-active-icon);
  transform: var(--bs-accordion-btn-icon-transform);
}
.accordion-button::after {
  content: "";
  flex-shrink: 0;
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
  margin-left: auto;
  background-image: var(--bs-accordion-btn-icon);
  background-repeat: no-repeat;
  background-size: var(--bs-accordion-btn-icon-width);
  transition: var(--bs-accordion-btn-icon-transition);
}
@media (prefers-reduced-motion: reduce) {
  .accordion-button::after {
    transition: none;
  }
}
.accordion-button:hover {
  z-index: 2;
}
.accordion-button:focus {
  z-index: 3;
  border-color: var(--bs-accordion-btn-focus-border-color);
  outline: 0;
  box-shadow: var(--bs-accordion-btn-focus-box-shadow);
}

.accordion-flush .accordion-collapse {
  border-width: 0;
}
.accordion-flush .accordion-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.accordion-flush .accordion-item:first-child {
  border-top: 0;
}
.accordion-flush .accordion-item:last-child {
  border-bottom: 0;
}
.accordion-flush .accordion-item .accordion-button, .accordion-flush .accordion-item .accordion-button.collapsed {
  border-radius: 0;
}

.accordion {
  border-left-width: var(--bs-accordion-border-width);
  border-right-width: var(--bs-accordion-border-width);
  border-top-width: var(--bs-accordion-border-width);
  border-bottom: 0;
  border-color: var(--bs-accordion-border-color);
  border-style: solid;
}
.accordion .accordion {
  border-left: 1px solid var(--bs-accordion-border-color);
  border-right: 1px solid var(--bs-accordion-border-color);
}
.accordion.accordion-background-active .accordion-header .accordion-button[aria-expanded=true] {
  background-color: var(--bs-color-background-primary);
  color: var(--bs-color-text-inverse);
}
.accordion.accordion-background-active .accordion-header .accordion-button[aria-expanded=true]:before {
  color: var(--bs-color-text-inverse);
}
.accordion.accordion-background-active .accordion-header .accordion-button[aria-expanded=true]:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 24 24' %3E%3Cg%3E%3Cpath fill='hsl(0, 0%, 100%)' d='M12,10.3l4.8,4.8c0.3,0.3,0.8,0.3,1.1,0c0.3-0.3,0.3-0.8,0-1c0,0,0,0,0,0l-4.8-4.8c-0.6-0.6-1.5-0.6-2.1,0L6.2,14c-0.3,0.3-0.3,0.8,0,1c0,0,0,0,0,0c0.3,0.3,0.8,0.3,1.1,0L12,10.3z'/%3E%3C/g%3E%3C/svg%3E");
}
.accordion.accordion-background-hover .accordion-header .accordion-button:hover {
  background-color: var(--bs-color-background-primary);
  color: var(--bs-color-text-inverse);
}
.accordion.accordion-background-hover .accordion-header .accordion-button:hover:before {
  color: var(--bs-color-text-inverse);
}
.accordion.accordion-background-hover .accordion-header .accordion-button:hover:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 24 24' %3E%3Cg%3E%3Cpath fill='hsl(0, 0%, 100%)' d='M12,10.3l4.8,4.8c0.3,0.3,0.8,0.3,1.1,0c0.3-0.3,0.3-0.8,0-1c0,0,0,0,0,0l-4.8-4.8c-0.6-0.6-1.5-0.6-2.1,0L6.2,14c-0.3,0.3-0.3,0.8,0,1c0,0,0,0,0,0c0.3,0.3,0.8,0.3,1.1,0L12,10.3z'/%3E%3C/g%3E%3C/svg%3E");
}
.accordion.accordion-left-icon .accordion-header .accordion-button:after {
  content: none;
}
.accordion.accordion-left-icon .accordion-header .accordion-button:before {
  content: "-";
  width: 1.5rem;
  margin: 0 var(--bs-spacing-s) 0 0;
  float: left;
  overflow: hidden;
  font-family: var(--bs-font-serif);
  font-size: var(--bs-heading-5-font-size);
  font-weight: 300;
  line-height: var(--bs---bs-accordion-btn-line-height);
  transform: none;
}
.accordion.accordion-left-icon .accordion-header .accordion-button[aria-expanded=false]:before {
  content: "+";
}

.accordion-item {
  border-top: var(--bs-accordion-item-border-width) solid var(--bs-accordion-border-color);
  border-bottom: var(--bs-accordion-item-border-width) solid var(--bs-accordion-border-color);
  background-color: var(--bs-accordion-background);
  color: var(--bs-accordion-color);
}
.accordion-item:first-of-type {
  border-top-left-radius: var(--bs-accordion-border-radius);
  border-top-right-radius: var(--bs-accordion-border-radius);
}
.accordion-item:first-of-type .accordion-button {
  border-top-left-radius: var(--bs-accordion-inner-border-radius);
  border-top-right-radius: var(--bs-accordion-inner-border-radius);
}
.accordion-item:not(:first-of-type) {
  border-top: 0;
}
.accordion-item:last-of-type {
  border-bottom-right-radius: var(--bs-accordion-border-radius);
  border-bottom-left-radius: var(--bs-accordion-border-radius);
}
.accordion-item:last-of-type .accordion-button.collapsed {
  border-bottom-right-radius: var(--bs-accordion-inner-border-radius);
  border-bottom-left-radius: var(--bs-accordion-inner-border-radius);
}
.accordion-item:last-of-type .accordion-collapse {
  border-bottom-right-radius: var(--bs-accordion-border-radius);
  border-bottom-left-radius: var(--bs-accordion-border-radius);
}
.accordion-item:first-of-type, .accordion-item:last-of-type {
  border-radius: 0;
}
.accordion-item:first-of-type .accordion-button, .accordion-item:last-of-type .accordion-button {
  border-radius: 0;
}

.accordion-header {
  position: relative;
  margin-bottom: 0;
}
.accordion-header .accordion-button {
  width: 100%;
  border: 0;
  background-color: transparent;
  box-shadow: none;
  color: var(--bs-accordion-btn-color);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-font-weight-solid);
  cursor: pointer;
}
.accordion-header .accordion-button:hover {
  background: none;
  text-decoration: underline;
}
.accordion-header .accordion-button:hover:after {
  text-decoration: none;
}
.accordion-header .accordion-button:active, .accordion-header .accordion-button:hover, .accordion-header .accordion-button:focus {
  border-top-color: var(--bs-accordion-border-color);
}
.accordion-header .accordion-button:not(.collapsed):after {
  transform: scaleY(1);
}
.accordion-header .accordion-button:not(.collapsed):hover:before, .accordion-header .accordion-button[aria-expanded=true]:hover:before {
  text-decoration: none;
}
.accordion-header .accordion-button:after {
  content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 24 24' %3E%3Cg%3E%3Cpath fill='hsl(210, 100%, 40%)' d='M12,10.3l4.8,4.8c0.3,0.3,0.8,0.3,1.1,0c0.3-0.3,0.3-0.8,0-1c0,0,0,0,0,0l-4.8-4.8c-0.6-0.6-1.5-0.6-2.1,0L6.2,14c-0.3,0.3-0.3,0.8,0,1c0,0,0,0,0,0c0.3,0.3,0.8,0.3,1.1,0L12,10.3z'/%3E%3C/g%3E%3C/svg%3E");
  width: 1.5rem;
  height: auto;
  float: right;
  background-image: none;
  color: var(--bs-accordion-btn-color);
  line-height: 0.1rem;
  transform: scaleY(-1);
  transition: transform 0.3s;
}

.accordion-body {
  padding: var(--bs-accordion-body-padding-y) var(--bs-accordion-body-padding-x);
  font-size: var(--bs-body-font-size);
  line-height: var(--bs-body-line-height);
}
.accordion-body .accordion-header button[aria-expanded=true]:before {
  width: 0;
  height: 0;
}

body {
  font-family: var(--bs-font-sans);
}

p,
ul,
ol,
dl {
  font-size: var(--bs-body-font-size);
  line-height: var(--bs-body-line-height);
}

caption,
figcaption {
  font-size: var(--bs-caption-font-size);
  line-height: var(--bs-caption-line-height);
}

b,
strong {
  font-weight: var(--bs-font-weight-strong);
}

mark,
code {
  padding: 0 var(--bs-spacing-3xs);
}

mark {
  background-color: var(--bs-highlight-background);
}

pre,
code,
kbd,
samp {
  border-radius: var(--bs-radius-smooth);
  font-family: var(--bs-font-mono);
}

ins,
del {
  position: relative;
  display: flex;
  align-items: center;
  padding: var(--bs-spacing-3xs) var(--bs-spacing-m);
  font: var(--bs-body-font-size);
  text-decoration: none;
}

ins {
  background-color: var(--bs-ins-background);
  text-decoration: none;
}

del {
  background-color: var(--bs-del-background);
}

del::before,
ins::before {
  position: absolute;
  left: 0.5rem;
}

del::before {
  content: "−";
}

ins::before {
  content: "+";
}

kbd {
  margin: 0 2px;
  padding: 2px var(--bs-spacing-3xs);
  border: var(--bs-border-base) solid var(--bs-color-border-subtle);
  background-color: var(--bs-color-background-secondary-lighter);
  box-shadow: var(--bs-elevation-low), 0 2px 0 0 hsla(255, 0%, 100%, 0.7) inset;
  color: var(--bs-color-text-secondary);
  font-size: var(--bs-font-size-1);
  font-weight: var(--bs-font-weight-solid);
  white-space: nowrap;
}
kbd kbd {
  padding: 0;
  font-size: var(--bs-code-font-size);
}

small,
.small {
  font-size: var(--bs-caption-font-size);
}

.x-small {
  font-size: var(--bs-font-size-1);
}

h1,
.h1 {
  font-size: var(--bs-heading-1-font-size);
}

h2,
.h2 {
  font-size: var(--bs-heading-2-font-size);
}

h3,
.h3 {
  font-size: var(--bs-heading-3-font-size);
}

h4,
.h4 {
  font-size: var(--bs-heading-4-font-size);
}

h5,
.h5 {
  font-size: var(--bs-heading-5-font-size);
}

h6,
.h6 {
  font-size: var(--bs-heading-6-font-size);
}

h1,
.h1,
h2,
.h2,
h3,
.h3,
h4,
.h4,
h5,
.h5,
h6,
.h6 {
  margin-top: 0;
  margin-bottom: var(--bs-heading-spacing);
  line-height: var(--bs-heading-line-height);
}
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + h1, p + h1,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + .h1,
p + .h1,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + h2,
p + h2,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + .h2,
p + .h2,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + h3,
p + h3,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + .h3,
p + .h3,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + h4,
p + h4,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + .h4,
p + .h4,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + h5,
p + h5,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + .h5,
p + .h5,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + h6,
p + h6,
:is(h1, .h1, h2, .h2, h3, .h3, h4, .h4, h5, .h5, h6, .h6) + .h6,
p + .h6 {
  padding-top: var(--bs-spacing-s);
}

h1,
h2,
h3,
.h1,
.h2,
.h3 {
  font-weight: var(--bs-heading-font-weight);
}

h4,
h5,
h6,
.h4,
.h5,
.h6 {
  font-weight: var(--bs-heading-font-weight-weak);
}

h1,
.h1,
.display-1 {
  letter-spacing: -1px;
}

.font-serif {
  font-family: var(--bs-font-serif) !important;
}

.font-sans-serif {
  font-family: var(--bs-font-sans) !important;
}

.font-monospace {
  font-family: var(--bs-font-mono) !important;
}

.display-1 {
  font-size: var(--bs-display-font-size);
  font-weight: var(--bs-heading-font-weight);
  line-height: var(--bs-heading-line-height);
}

.lead {
  font-size: var(--bs-lead-font-size);
  font-weight: var(--bs-lead-font-weight);
  line-height: var(--bs-lead-line-height);
}

blockquote,
.blockquote {
  margin: var(--bs-spacing-m) 0;
  margin-left: var(--bs-spacin-inline-xs);
  padding: var(--bs-spacing-s);
  border-left: var(--bs-border-thick) solid var(--bs-border-color-secondary);
  font-size: var(--bs-body-font-size);
  line-height: var(--bs-body-line-height);
}
blockquote > :last-child,
.blockquote > :last-child {
  margin-bottom: 0;
}
blockquote.text-end,
.blockquote.text-end {
  margin-right: var(--bs-spacin-inline-xs);
  border-right: var(--bs-border-thick) solid var(--bs-border-color-secondary);
}
blockquote.text-center, blockquote.text-end, blockquote.blockquote-simple,
.blockquote.text-center,
.blockquote.text-end,
.blockquote.blockquote-simple {
  margin-left: 0;
  border-right: none;
  border-left: none;
}
blockquote.text-center, blockquote.blockquote-simple,
.blockquote.text-center,
.blockquote.blockquote-simple {
  padding: 0;
}
blockquote.blockquote-simple,
.blockquote.blockquote-simple {
  font-style: italic;
}
blockquote.blockquote-card,
.blockquote.blockquote-card {
  margin-left: 0;
  padding: var(--bs-spacing-m);
  background-color: var(--bs-color-background-inverse);
  box-shadow: var(--bs-elevation-low);
}
blockquote.blockquote-card .blockquote-footer,
.blockquote.blockquote-card .blockquote-footer {
  font-size: inherit;
}
blockquote.blockquote-card .blockquote-footer:before,
.blockquote.blockquote-card .blockquote-footer:before {
  content: none;
}
blockquote.blockquote-card.dark,
.blockquote.blockquote-card.dark {
  border-left: none;
  background-color: var(--bs-color-background-primary);
  color: var(--bs-color-text-inverse);
}
blockquote.blockquote-card.dark .blockquote-footer,
.blockquote.blockquote-card.dark .blockquote-footer {
  color: var(--bs-color-text-inverse);
}

.blockquote-footer {
  margin-top: 0;
  margin-bottom: var(--bs-spacing-s);
  color: var(--bs-color-text-secondary);
  font-size: var(--bs-label-font-size);
}
.blockquote-footer::before {
  content: "— ";
}
.bg-dark .blockquote-footer {
  color: var(--bs-color-text-muted);
}

.initialism {
  font-size: var(--bs-label-font-size-s);
  text-transform: uppercase;
}

:host {
  --bs-accordion-btn-icon-width: 1.5rem;
}

:host([left-icon]) {
  --bs-accordion-btn-icon-width: 1.25rem;
}

:host([background-active]) .accordion-header .accordion-button:not(.collapsed) {
  background-color: var(--bs-color-background-primary);
  color: var(--bs-color-text-inverse);
}

:host([background-hover]) .accordion-header .accordion-button:hover {
  background-color: var(--bs-color-background-primary);
  color: var(--bs-color-text-inverse);
}
:host([background-hover]) .accordion-header .accordion-button:hover it-icon::part(icon) {
  --bs-icon-primary: var(--bs-color-text-inverse);
}

:host(:not(:first-of-type)) .accordion-item {
  border-top: 0;
}

:host([left-icon]) .accordion-header .accordion-button {
  justify-content: flex-start;
}

it-accordion-item {
  display: block;
  width: 100%;
}

it-icon::part(icon) {
  width: var(--bs-accordion-btn-icon-width);
  height: var(--bs-accordion-btn-icon-width);
  fill: currentColor;
}

.accordion-button {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  border-radius: 0;
  color: var(--accordion-button-color, inherit);
  font-family: var(--bs-font-sans);
  text-align: left;
  --bs-accordion-inner-border-radius: 0;
}
.accordion-button::after {
  content: none !important;
}
.accordion-button:focus-visible {
  z-index: 3;
  border-color: #000 !important;
  box-shadow: var(--bs-accordion-btn-focus-box-shadow);
  box-shadow: 0 0 0 2px var(--bs-color-border-inverse), 0 0 0 5px var(--bs-color-outline-focus) !important;
  outline: 3px solid rgba(0, 0, 0, 0) !important;
  outline-offset: 3px !important;
}
.accordion-button span {
  flex: 1;
}

.accordion-icon {
  flex-shrink: 0;
  margin-left: auto;
  transform: scaleY(-1);
  transition: transform 0.3s ease;
}
.accordion-icon.expanded {
  transform: scaleY(1);
}

.accordion-icon-left {
  flex-shrink: 0;
  margin-right: var(--bs-spacing-s, 0.5rem);
}

.accordion.accordion-left-icon .accordion-icon {
  display: none;
}

.accordion-header {
  display: flex;
}
.accordion-header .accordion-button {
  background-color: unset;
}`;class tt{constructor(t){this.host=t,this.host.addController(this)}setConfig(t){this.config=t}hostDisconnected(){this.host.removeController(this)}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}handleKeyDown(t){if(!this.config)return;const e=this.config.getItems(),o=this.getActiveElement(),i=e.indexOf(o);switch(t.key){case"ArrowDown":t.preventDefault(),e.length&&this.config.setActive(i<0?0:(i+1)%e.length);break;case"ArrowUp":t.preventDefault(),e.length&&this.config.setActive(i<0?e.length-1:(i-1+e.length)%e.length);break;case"Home":t.preventDefault(),e.length&&this.config.setActive(0);break;case"End":t.preventDefault(),e.length&&this.config.setActive(e.length-1);break}}}let g=class extends C{constructor(){super(...arguments),this.mode="multiple",this.backgroundActive=!1,this.backgroundHover=!1,this.leftIcon=!1,this._ariaNav=new tt(this),this._onCollapseToggle=t=>{const e=t,{expanded:o}=e.detail;if(this.mode==="single"&&o)for(const i of this.accordionItems)i!==e.target&&(i.expanded=!1)},this._onSlotChange=()=>{this.updateChildrenProperties()}}updated(t){(t.has("backgroundActive")||t.has("backgroundHover")||t.has("leftIcon"))&&this.updateChildrenProperties(),t.has("mode")&&this.mode==="single"&&this.accordionItems.length&&this.accordionItems.forEach(e=>{e.defaultOpen?e.expanded=!0:e.expanded=!1})}updateChildrenProperties(){this.accordionItems.forEach(t=>{this.backgroundActive?t.setAttribute("background-active",""):t.removeAttribute("background-active"),this.backgroundHover?t.setAttribute("background-hover",""):t.removeAttribute("background-hover"),this.leftIcon?t.setAttribute("left-icon",""):t.removeAttribute("left-icon")})}connectedCallback(){var t;(t=super.connectedCallback)==null||t.call(this),this.addEventListener("keydown",this._onKeyDown)}firstUpdated(t){var e;(e=super.firstUpdated)==null||e.call(this,t),this.updateChildrenProperties()}disconnectedCallback(){var t;this.removeEventListener("keydown",this._onKeyDown),(t=super.disconnectedCallback)==null||t.call(this)}_onKeyDown(t){var o;if(t.target&&!this.accordionItems.some(i=>i.contains(t.target)))return;const e=[];for(const i of this.accordionItems){const n=(o=i.shadowRoot)==null?void 0:o.querySelector("button");n&&e.push(n)}e.length&&(this._ariaNav.setConfig({getItems:()=>e,setActive:i=>{var n;(n=e[i])==null||n.focus()}}),this._ariaNav.handleKeyDown(t),t.stopPropagation())}render(){const t=["accordion",this.backgroundActive&&"accordion-background-active",this.backgroundHover&&"accordion-background-hover",this.leftIcon&&"accordion-left-icon"].filter(Boolean).join(" ");return f`<div class="${t}" id="${this._id}" part="accordion">
      <slot @slotchange="${this._onSlotChange}" @it-collapse-toggle="${this._onCollapseToggle}"></slot>
    </div>`}};g.styles=H;a([F({selector:"it-accordion-item"}),s("design:type",Array)],g.prototype,"accordionItems",void 0);a([d({type:String,reflect:!0}),s("design:type",String)],g.prototype,"mode",void 0);a([d({type:Boolean,attribute:"background-active",reflect:!0}),s("design:type",Object)],g.prototype,"backgroundActive",void 0);a([d({type:Boolean,attribute:"background-hover",reflect:!0}),s("design:type",Object)],g.prototype,"backgroundHover",void 0);a([d({type:Boolean,attribute:"left-icon",reflect:!0}),s("design:type",Object)],g.prototype,"leftIcon",void 0);g=a([q("it-accordion")],g);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=Symbol.for(""),et=r=>{if((r==null?void 0:r.r)===U)return r==null?void 0:r._$litStatic$},$=r=>({_$litStatic$:r,r:U}),O=new Map,ot=r=>(t,...e)=>{const o=e.length;let i,n;const c=[],h=[];let y,b=0,S=!1;for(;b<o;){for(y=t[b];b<o&&(n=e[b],(i=et(n))!==void 0);)y+=i+t[++b],S=!0;b!==o&&h.push(n),c.push(y),b++}if(b===o&&c.push(t[o]),S){const _=c.join("$$lit$$");(t=O.get(_))===void 0&&(c.raw=c,O.set(_,t=c)),e=h}return r(t,...e)},it=ot(f);var rt=M`/***************************** 1 ****************************************/
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
  display: block;
}

.collapse-wrapper {
  width: 100%;
}

.collapse-content {
  overflow: hidden;
  height: 0;
}`;const nt=r=>r instanceof MouseEvent,at=r=>r instanceof KeyboardEvent;let u=class extends C{constructor(){super(...arguments),this.expanded=!1,this.label="",this.as="button",this.defaultOpen=!1,this.isAnimating=!1,this.animationDuration=350,this._triggerId=this.generateId("it-collapse-trigger"),this._contentId=this.generateId("it-collapse-content"),this.handleTriggerAction=t=>{if(this.isAnimating){t.preventDefault(),t.stopPropagation();return}at(t)&&(t.key==="Enter"||t.key===" ")?(t.preventDefault(),this.toggle()):nt(t)&&(t.preventDefault(),this.toggle())},this._onTriggerSlotChange=()=>{this.updateAriaAttributes()}}get triggerElement(){return this.triggerElements.length>0?this.triggerElements[0]:null}connectedCallback(){var t;(t=super.connectedCallback)==null||t.call(this),this.defaultOpen&&!this.expanded&&(this.expanded=this.defaultOpen)}async toggle(){var e;if(this.isAnimating)return;const t=!this.expanded;this.expanded=t,this.dispatchEvent(new CustomEvent("it-collapse-toggle",{detail:{expanded:this.expanded,id:(e=this.contentElement)==null?void 0:e.id},bubbles:!0,composed:!0,cancelable:!0}))}setInitialState(){this.contentElement&&(this.expanded?(this.contentElement.style.height="auto",this.contentElement.style.visibility="visible"):(this.contentElement.style.height="0px",this.contentElement.style.visibility="hidden"))}cleanupAnimation(){if(this.animation){try{this.animation.cancel()}catch{}this.animation=void 0}this.isAnimating=!1}firstUpdated(){this.updateAriaAttributes(),this.setInitialState()}updated(t){if(t.has("defaultOpen")&&this.defaultOpen&&!this.expanded&&(this.expanded=this.defaultOpen),t.has("expanded")){this.updateAriaAttributes(),this.updateBackgroundStyles();const e=t.get("expanded");!this.isAnimating&&e!==void 0&&e!==this.expanded&&(this.expanded?this.performExpand():this.performCollapse())}(t.has("backgroundActive")||t.has("backgroundHover")||t.has("leftIcon"))&&this.updateBackgroundStyles()}updateAriaAttributes(){var e;const t=(e=this.shadowRoot)==null?void 0:e.querySelector(".accordion-button");if(t&&(t.setAttribute("aria-expanded",String(this.expanded)),t.setAttribute("aria-controls",this._contentId),t.id=this._triggerId),this.triggerElement)if(this.triggerElement.tagName.toLowerCase()==="button"||this.triggerElement.getAttribute("role")==="button"){const o=this.triggerElement;o.id=this._triggerId,o.setAttribute("aria-expanded",String(this.expanded)),o.setAttribute("aria-controls",this._contentId)}else{const o=this.triggerElement.querySelector('button, [role="button"]');o&&(o.id=this._triggerId,o.setAttribute("aria-expanded",String(this.expanded)),o.setAttribute("aria-controls",this._contentId))}this.updateBackgroundStyles()}updateBackgroundStyles(){}performExpand(){if(!this.contentElement)return;this.cleanupAnimation(),this.isAnimating=!0,this.contentElement.style.overflow="hidden",this.contentElement.style.visibility="visible";const t=this.contentElement.offsetHeight,e=this.contentElement.scrollHeight,o=this.prefersReducedMotion?0:this.animationDuration;this.animation=this.contentElement.animate([{height:`${t}px`},{height:`${e}px`}],{duration:o,easing:"ease"}),this.animation.finished.then(()=>{this.contentElement.style.height="auto",this.contentElement.style.overflow="hidden"}).catch(()=>{}).finally(()=>{this.cleanupAnimation()})}performCollapse(){if(!this.contentElement)return;this.cleanupAnimation(),this.isAnimating=!0;const t=this.contentElement;t.style.overflow="hidden";const e=t.scrollHeight,o=0,i=this.prefersReducedMotion?0:this.animationDuration;t.style.height=`${e}px`,this.animation=t.animate([{height:`${e}px`},{height:`${o}px`}],{duration:i,easing:"ease"}),this.animation.finished.then(()=>{t.style.height="0px",t.style.visibility="hidden",t.style.overflow="hidden"}).catch(()=>{}).finally(()=>{this.cleanupAnimation()})}renderDefaultTrigger(){if(!this.label)return null;const t=this.composeClass(!this.expanded&&"collapsed"),e=f`<button
      type="button"
      part="trigger"
      class="${t}"
      aria-expanded="${this.expanded}"
      aria-controls="${this._contentId}"
      id="${this._triggerId}"
      @click=${this.handleTriggerAction}
      @keydown=${this.handleTriggerAction}
    >
      ${this.label}
    </button>`;if(this.as==="button")return e;const o=this.isValidTag(this.as)?this.as:"div",i=$(o);return f`<${i} part="trigger" role="button" aria-expanded="${this.expanded}" aria-controls="${this._contentId}" id="${this._triggerId}">${this.label}</${i}>`}hasSlottedTrigger(){return!!this.triggerElement}isValidTag(t){return/^[a-z][a-z0-9-]+$/.test(t)}render(){const t=this.hasSlottedTrigger();return f`
      <div class="accordion-item" part="accordion-item">
        <div class="collapse-wrapper">
          ${W(!t,()=>this.renderDefaultTrigger())}
          <slot name="trigger" @slotchange=${this._onTriggerSlotChange} part="trigger"></slot>
          <div
            class="collapse-content"
            part="content"
            role="region"
            aria-labelledby="${this._triggerId}"
            id="${this._contentId}"
          >
            <div class="accordion-body">
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </div>
    `}};u.styles=rt;u.shadowRootOptions={...C.shadowRootOptions,delegatesFocus:!0};a([d({type:Boolean,reflect:!0}),s("design:type",Object)],u.prototype,"expanded",void 0);a([d({type:String}),s("design:type",String)],u.prototype,"label",void 0);a([d({type:String}),s("design:type",String)],u.prototype,"as",void 0);a([d({type:Boolean,attribute:"default-open",reflect:!0}),s("design:type",Object)],u.prototype,"defaultOpen",void 0);a([D(".collapse-content"),s("design:type",HTMLElement)],u.prototype,"contentElement",void 0);a([F({slot:"trigger"}),s("design:type",Array)],u.prototype,"triggerElements",void 0);u=a([q("it-collapse")],u);let m=class extends u{constructor(){super(...arguments),this.as="h2",this.leftIcon=!1,this.backgroundActive=!1,this.backgroundHover=!1}setParentBackground(t,e){this.backgroundActive=t,this.backgroundHover=e}setParentLeftIcon(t){this.leftIcon=t}renderDefaultTrigger(){const t=this.composeClass("accordion-button",!this.expanded&&"collapsed");let e=null;if(this.leftIcon){const n=this.expanded?"it-minus":"it-plus";e=f`<it-icon size="xs" name="${n}" class="accordion-icon-left" color="primary"></it-icon>`}else e=f`<it-icon
        size="sm"
        name="it-collapse"
        class="accordion-icon ${this.expanded?"expanded":""}"
        color="primary"
      ></it-icon>`;const o=f`<button
      type="button"
      part="trigger"
      class="${t}"
      aria-expanded="${this.expanded}"
      aria-controls="${this._contentId}"
      id="${this._triggerId}"
      @click=${this.handleTriggerAction}
    >
      ${this.leftIcon?e:L}
      <slot name="heading"></slot>
      ${this.leftIcon?L:e}
    </button>`,i=this.isValidTag(this.as)?this.as:"h2";return f`
      ${it`
        <${$(i)} class="accordion-header">
          ${o}
        </${$(i)}>
      `}
    `}updateBackgroundStyles(){var e,o;if(this.leftIcon){const i=(e=this.shadowRoot)==null?void 0:e.querySelector(".accordion-icon-left");if(i){const n=this.expanded?"it-minus":"it-plus";i.setAttribute("name",n),this.backgroundActive&&this.expanded?i.setAttribute("color","white"):i.setAttribute("color","primary")}}const t=(o=this.shadowRoot)==null?void 0:o.querySelector(".accordion-icon");t&&(this.expanded?t.classList.add("expanded"):t.classList.remove("expanded"),this.backgroundActive&&this.expanded?t.setAttribute("color","white"):t.setAttribute("color","primary"))}};m.styles=H;a([d({type:String}),s("design:type",String)],m.prototype,"as",void 0);a([d({type:Boolean,attribute:"left-icon",reflect:!0}),s("design:type",Object)],m.prototype,"leftIcon",void 0);a([d({type:Boolean,attribute:"background-active",reflect:!0}),s("design:type",Object)],m.prototype,"backgroundActive",void 0);a([d({type:Boolean,attribute:"background-hover",reflect:!0}),s("design:type",Object)],m.prototype,"backgroundHover",void 0);m=a([q("it-accordion-item")],m);
