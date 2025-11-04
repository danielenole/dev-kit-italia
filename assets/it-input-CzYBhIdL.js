import{e as T,i as N}from"./directive-CvdRHFdJ.js";import{i as R,x as u,E as z,a as B}from"./iframe-BiclfI91.js";import{r as x,e as U,n as d,t as H}from"./query-Bd2ew8Gc.js";import{o as Z}from"./query-assigned-elements-DeyBePrH.js";import{o as h}from"./if-defined-tWK9HKZq.js";import{n as w}from"./when-BR7zwNJC.js";import{l as M}from"./live-DG_rsUJd.js";function s(r,t,e,o){var i=arguments.length,a=i<3?t:o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(r,t,e,o);else for(var b=r.length-1;b>=0;b--)(l=r[b])&&(a=(i<3?l(a):i>3?l(t,e,a):l(t,e))||a);return i>3&&a&&Object.defineProperty(t,e,a),a}function n(r,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(r,t)}class W extends N{update(t,[e]){const o=t.element;for(const[i,a]of Object.entries(e))a!=null?o.setAttribute(i,a):o.removeAttribute(i);return null}render(t){return null}}const j=T(W);function F(r){var t,e,o="";if(typeof r=="string"||typeof r=="number")o+=r;else if(typeof r=="object")if(Array.isArray(r)){var i=r.length;for(t=0;t<i;t++)r[t]&&(e=F(r[t]))&&(o&&(o+=" "),o+=e)}else for(e in r)r[e]&&(o&&(o+=" "),o+=e);return o}function Q(){for(var r,t,e=0,o="",i=arguments.length;e<i;e++)(r=arguments[e])&&(t=F(r))&&(o&&(o+=" "),o+=t);return o}const q=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:v}=window;let f,P="ltr",A="en";const O=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function D(){O&&(P=document.documentElement.dir||"ltr",A=document.documentElement.lang||navigator.language),[...q.keys()].forEach(r=>{const t=r;typeof t.requestUpdate=="function"&&t.requestUpdate()})}if(O){const r=new MutationObserver(D);P=document.documentElement.dir||"ltr",A=document.documentElement.lang||navigator.language,r.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function I(...r){r.forEach(t=>{const e=t.$code.toLowerCase();v.has(e)?v.set(e,{...v.get(e),...t}):v.set(e,t),f||(f=t)}),D()}window.registerTranslation=I;class X{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){q.add(this.host)}hostDisconnected(){q.delete(this.host)}dir(){return`${this.host.dir||P}`.toLowerCase()}lang(){return`${this.host.lang||A}`.toLowerCase()}getTranslationData(t){var b;const e=new Intl.Locale(t.replace(/_/g,"-")),o=e==null?void 0:e.language.toLowerCase(),i=((b=e==null?void 0:e.region)==null?void 0:b.toLowerCase())??"",a=v.get(`${o}-${i}`),l=v.get(o);return{locale:e,language:o,region:i,primary:a,secondary:l}}exists(t,e){const{primary:o,secondary:i}=this.getTranslationData(e.lang??this.lang()),a={includeFallback:!1,...e};return!!(o&&o[t]||i&&i[t]||a.includeFallback&&f&&f[t])}term(t,...e){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let a;if(o&&o[t])a=o[t];else if(i&&i[t])a=i[t];else if(f&&f[t])a=f[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof a=="function"?a(...e):a}date(t,e){const o=new Date(t);return new Intl.DateTimeFormat(this.lang(),e).format(o)}number(t,e){const o=Number(t);return Number.isNaN(o)?"":new Intl.NumberFormat(this.lang(),e).format(o)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}}const Y=r=>class extends r{constructor(){super(...arguments),this.localize=new X(this)}get $localize(){return this.localize}$t(t){return this.localize.term(t)}$d(t,e){return this.localize.date(t,e)}$n(t,e){return this.localize.number(t,e)}};class G{constructor(t){this.tag=t}format(t,e){return[`[${this.tag}] ${e}`]}warn(t){console.warn(...this.format("warn",t))}error(t){console.error(...this.format("error",t))}info(t){console.info(...this.format("info",t))}}class J extends B{constructor(){super(),this.composeClass=Q,this.logger=new G(this.tagName.toLowerCase())}get _ariaAttributes(){const t={};for(const e of this.getAttributeNames())e==="it-role"?t.role=this.getAttribute(e):e.startsWith("it-aria-")&&(t[e.replace(/^it-/,"")]=this.getAttribute(e));return t}generateId(t){return`${t}-${Math.random().toString(36).slice(2)}`}addFocus(t){}getActiveElement(){let t=document.activeElement;for(;t&&t.shadowRoot&&t.shadowRoot.activeElement;)t=t.shadowRoot.activeElement;return t}get focusElement(){return this}get prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}connectedCallback(){var e;super.connectedCallback();const t=((e=this.id)==null?void 0:e.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(t)}}const K=Y(J),y=new WeakMap,k=new WeakMap,$=new WeakMap,E=new WeakSet,_=new WeakMap;class tt{constructor(t,e){this.handleFormData=o=>{const i=this.options.disabled(this.host),a=this.options.name(this.host),l=this.options.value(this.host),b=this.host.tagName.toLowerCase(),g=b==="it-button";if(this.host.isConnected&&!i&&!g&&typeof a=="string"&&a.length>0&&typeof l<"u")switch(b){case"it-radio":this.host.checked&&o.formData.append(a,l);break;case"it-checkbox":this.host.checked&&o.formData.getAll(a).indexOf(l)<0&&o.formData.append(a,l);break;default:Array.isArray(l)?l.forEach(m=>{o.formData.append(a,m.toString())}):o.formData.append(a,l.toString())}},this.handleFormSubmit=o=>{var l;const i=this.options.disabled(this.host),a=this.options.reportValidity;this.form&&!this.form.noValidate&&((l=y.get(this.form))==null||l.forEach(b=>{this.setUserInteracted(b,!0)})),this.form&&!this.form.noValidate&&!i&&!a(this.host)&&o.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),_.set(this.host,[])},this.handleInteraction=o=>{const i=_.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options={form:o=>{const i=o.form;if(i){const l=o.getRootNode().querySelector(`#${i}`);if(l)return l}return o.closest("form")},name:o=>o.name,value:o=>o.value,disabled:o=>o.disabled??!1,reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>{o.value=i},assumeInteractionOn:["it-input"],...e}}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),_.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),_.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,y.has(this.form)?y.get(this.form).add(this.host):y.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),k.has(this.form)||(k.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),$.has(this.form)||($.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=y.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),k.has(this.form)&&(this.form.reportValidity=k.get(this.form),k.delete(this.form)),$.has(this.form)&&(this.form.checkValidity=$.get(this.form),$.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?E.add(t):E.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){return this.form??null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!E.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}}const et={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};I(et);class p extends K{constructor(){super(...arguments),this.formControlController=new tt(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var t;return(t=this.inputElement)==null?void 0:t.validity}checkValidity(){var e;return((e=this.inputElement)==null?void 0:e.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const t=this.inputElement.checkValidity();return this.handleValidationMessages(),t}setCustomValidity(t){this.inputElement.setCustomValidity(t),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(t){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(t){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(t){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(t){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const t=this.inputElement.validity;t.valueMissing?this.setCustomValidity(this.$t("validityRequired")):t.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):t.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):t.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):t.typeMismatch||t.rangeUnderflow||t.rangeOverflow||t.stepMismatch||t.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}_handleChange(t){const e=t.target;let o;if(e instanceof HTMLInputElement)switch(e.type){case"checkbox":case"radio":o=e.checked;break;case"file":o=e.files;break;default:o=e.value}else e instanceof HTMLSelectElement&&e.multiple?o=Array.from(e.selectedOptions).map(i=>i.value):o=e.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:o,el:e},bubbles:!0,composed:!0}))}updated(t){var e;(e=super.updated)==null||e.call(this,t),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}s([x(),n("design:type",Object)],p.prototype,"_touched",void 0);s([U(".it-form__control"),n("design:type",HTMLInputElement)],p.prototype,"inputElement",void 0);s([d({type:String,reflect:!0}),n("design:type",Object)],p.prototype,"name",void 0);s([d({reflect:!0}),n("design:type",Object)],p.prototype,"value",void 0);s([d({type:Boolean,reflect:!0}),n("design:type",Object)],p.prototype,"disabled",void 0);s([d({reflect:!0,type:String}),n("design:type",Object)],p.prototype,"form",void 0);s([d({type:Boolean,reflect:!0,attribute:"custom-validation"}),n("design:type",Object)],p.prototype,"customValidation",void 0);s([d({attribute:"validity-message",reflect:!0}),n("design:type",String)],p.prototype,"validationText",void 0);s([d(),n("design:type",String)],p.prototype,"pattern",void 0);s([d(),n("design:type",Object)],p.prototype,"min",void 0);s([d(),n("design:type",Object)],p.prototype,"max",void 0);s([d(),n("design:type",Object)],p.prototype,"step",void 0);s([d({type:Number}),n("design:type",Object)],p.prototype,"minlength",void 0);s([d({type:Number}),n("design:type",Object)],p.prototype,"maxlength",void 0);s([d({type:Boolean,reflect:!0}),n("design:type",Object)],p.prototype,"required",void 0);s([x(),n("design:type",Object)],p.prototype,"validationMessage",void 0);const C=(r,t)=>{let e="",o=!1;for(let i=0;i<t.length;i+=1){o=!0;for(let a=0;a<r&&a+i+r<t.length;a+=1)o=o&&t.charAt(a+i)===t.charAt(a+i+r);o?(i+=r-1,o=!1):e+=t.charAt(i)}return e},ot=(r,t)=>{let e=0;if(r.trim().length===0)return-2;if(r.length<t)return-1;e+=r.length*4,e+=C(1,r).length-r.length,e+=C(2,r).length-r.length,e+=C(3,r).length-r.length,e+=C(4,r).length-r.length,r.match(/(.*[0-9].*[0-9].*[0-9])/)&&(e+=5);const o=/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/;return r.match(o)&&(e+=5),r.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)&&(e+=10),r.match(/([a-zA-Z])/)&&r.match(/([0-9])/)&&(e+=15),r.match(/([!,@,#,$,%,^,&,*,?,_,~])/)&&r.match(/([0-9])/)&&(e+=15),r.match(/([!,@,#,$,%,^,&,*,?,_,~])/)&&r.match(/([a-zA-Z])/)&&(e+=15),(r.match(/^\w+$/)||r.match(/^\d+$/))&&(e-=10),e>100&&(e=100),e<0&&(e=0),e},rt=r=>r===-1||r===-2||r<26?"danger":r<51?"warning":(r<76,"success"),it=(r,t)=>r===-1?t.shortPass:r===-2?"":r<26||r<51?t.badPass:r<76?t.goodPass:t.strongPass,S=[{key:"length",text:r=>r.suggestionLength.replace("{minLength}",r.minimumLength.toString()),test:(r,t)=>r.length>=t.minimumLength},{key:"uppercase",text:r=>r.suggestionUppercase,test:r=>/[A-Z]/.test(r)},{key:"lowercase",text:r=>r.suggestionLowercase,test:r=>/[a-z]/.test(r)},{key:"number",text:r=>r.suggestionNumber,test:r=>/[0-9]/.test(r)},{key:"special",text:r=>r.suggestionSpecial,test:r=>/[^A-Za-z0-9]/.test(r)}],at=(r,t,e)=>{let o=0;const i=r.length;return r.forEach(a=>{a.test(t,e)&&(o+=1)}),{completedCount:o,totalCount:i}},st={$code:"it",$name:"Italiano",$dir:"ltr",showHidePassword:"Mostra/Nascondi Password.",shortPass:"Password troppo breve.",badPass:"Password debole.",goodPass:"Password abbastanza sicura.",strongPass:"Password sicura.",ariaLabelPasswordMeter:"Robustezza della password",passwordSuggestionsLabel:"Suggerimenti per una buona password:",passwordSuggestionLength:"Almeno {minLength} caratteri.",passwordSuggestionUppercase:"Una o più maiuscole.",passwordSuggestionLowercase:"Una o più minuscole.",passwordSuggestionNumber:"Uno o più numeri.",passwordSuggestionSpecial:"Uno o più caratteri speciali.",passwordSuggestionFollowed:"suggerimenti seguiti",passwordSuggestionFollowedPlural:"suggerimenti seguiti",passwordSuggestionOf:"di",passwordSuggestionMetLabel:"Soddisfatto:",increaseValue:"Aumenta il valore",decreaseValue:"Diminuisci il valore"};var nt=R`@charset "UTF-8";
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
}

.row {
  --bs-gutter-x: 24px;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}

.col {
  flex: 1 0 0%;
}

.row-cols-auto > * {
  flex: 0 0 auto;
  width: auto;
}

.row-cols-1 > * {
  flex: 0 0 auto;
  width: 100%;
}

.row-cols-2 > * {
  flex: 0 0 auto;
  width: 50%;
}

.row-cols-3 > * {
  flex: 0 0 auto;
  width: 33.3333333333%;
}

.row-cols-4 > * {
  flex: 0 0 auto;
  width: 25%;
}

.row-cols-5 > * {
  flex: 0 0 auto;
  width: 20%;
}

.row-cols-6 > * {
  flex: 0 0 auto;
  width: 16.6666666667%;
}

.col-auto {
  flex: 0 0 auto;
  width: auto;
}

.col-1 {
  flex: 0 0 auto;
  width: 8.33333333%;
}

.col-2 {
  flex: 0 0 auto;
  width: 16.66666667%;
}

.col-3 {
  flex: 0 0 auto;
  width: 25%;
}

.col-4 {
  flex: 0 0 auto;
  width: 33.33333333%;
}

.col-5 {
  flex: 0 0 auto;
  width: 41.66666667%;
}

.col-6 {
  flex: 0 0 auto;
  width: 50%;
}

.col-7 {
  flex: 0 0 auto;
  width: 58.33333333%;
}

.col-8 {
  flex: 0 0 auto;
  width: 66.66666667%;
}

.col-9 {
  flex: 0 0 auto;
  width: 75%;
}

.col-10 {
  flex: 0 0 auto;
  width: 83.33333333%;
}

.col-11 {
  flex: 0 0 auto;
  width: 91.66666667%;
}

.col-12 {
  flex: 0 0 auto;
  width: 100%;
}

.offset-1 {
  margin-left: 8.33333333%;
}

.offset-2 {
  margin-left: 16.66666667%;
}

.offset-3 {
  margin-left: 25%;
}

.offset-4 {
  margin-left: 33.33333333%;
}

.offset-5 {
  margin-left: 41.66666667%;
}

.offset-6 {
  margin-left: 50%;
}

.offset-7 {
  margin-left: 58.33333333%;
}

.offset-8 {
  margin-left: 66.66666667%;
}

.offset-9 {
  margin-left: 75%;
}

.offset-10 {
  margin-left: 83.33333333%;
}

.offset-11 {
  margin-left: 91.66666667%;
}

.g-0,
.gx-0 {
  --bs-gutter-x: 0;
}

.g-0,
.gy-0 {
  --bs-gutter-y: 0;
}

.g-1,
.gx-1 {
  --bs-gutter-x: 0.25rem;
}

.g-1,
.gy-1 {
  --bs-gutter-y: 0.25rem;
}

.g-2,
.gx-2 {
  --bs-gutter-x: 0.5rem;
}

.g-2,
.gy-2 {
  --bs-gutter-y: 0.5rem;
}

.g-3,
.gx-3 {
  --bs-gutter-x: 1rem;
}

.g-3,
.gy-3 {
  --bs-gutter-y: 1rem;
}

.g-4,
.gx-4 {
  --bs-gutter-x: 1.5rem;
}

.g-4,
.gy-4 {
  --bs-gutter-y: 1.5rem;
}

.g-5,
.gx-5 {
  --bs-gutter-x: 3rem;
}

.g-5,
.gy-5 {
  --bs-gutter-y: 3rem;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }
  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-sm-0 {
    margin-left: 0;
  }
  .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .offset-sm-3 {
    margin-left: 25%;
  }
  .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .offset-sm-6 {
    margin-left: 50%;
  }
  .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .offset-sm-9 {
    margin-left: 75%;
  }
  .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .g-sm-0,
  .gx-sm-0 {
    --bs-gutter-x: 0;
  }
  .g-sm-0,
  .gy-sm-0 {
    --bs-gutter-y: 0;
  }
  .g-sm-1,
  .gx-sm-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-sm-1,
  .gy-sm-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-sm-2,
  .gx-sm-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-sm-2,
  .gy-sm-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-sm-3,
  .gx-sm-3 {
    --bs-gutter-x: 1rem;
  }
  .g-sm-3,
  .gy-sm-3 {
    --bs-gutter-y: 1rem;
  }
  .g-sm-4,
  .gx-sm-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-sm-4,
  .gy-sm-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-sm-5,
  .gx-sm-5 {
    --bs-gutter-x: 3rem;
  }
  .g-sm-5,
  .gy-sm-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }
  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-md-0 {
    margin-left: 0;
  }
  .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .offset-md-3 {
    margin-left: 25%;
  }
  .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .offset-md-6 {
    margin-left: 50%;
  }
  .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .offset-md-9 {
    margin-left: 75%;
  }
  .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .g-md-0,
  .gx-md-0 {
    --bs-gutter-x: 0;
  }
  .g-md-0,
  .gy-md-0 {
    --bs-gutter-y: 0;
  }
  .g-md-1,
  .gx-md-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-md-1,
  .gy-md-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-md-2,
  .gx-md-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-md-2,
  .gy-md-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-md-3,
  .gx-md-3 {
    --bs-gutter-x: 1rem;
  }
  .g-md-3,
  .gy-md-3 {
    --bs-gutter-y: 1rem;
  }
  .g-md-4,
  .gx-md-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-md-4,
  .gy-md-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-md-5,
  .gx-md-5 {
    --bs-gutter-x: 3rem;
  }
  .g-md-5,
  .gy-md-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }
  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-lg-0 {
    margin-left: 0;
  }
  .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .offset-lg-3 {
    margin-left: 25%;
  }
  .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .offset-lg-6 {
    margin-left: 50%;
  }
  .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .offset-lg-9 {
    margin-left: 75%;
  }
  .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .g-lg-0,
  .gx-lg-0 {
    --bs-gutter-x: 0;
  }
  .g-lg-0,
  .gy-lg-0 {
    --bs-gutter-y: 0;
  }
  .g-lg-1,
  .gx-lg-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-lg-1,
  .gy-lg-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-lg-2,
  .gx-lg-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-lg-2,
  .gy-lg-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-lg-3,
  .gx-lg-3 {
    --bs-gutter-x: 1rem;
  }
  .g-lg-3,
  .gy-lg-3 {
    --bs-gutter-y: 1rem;
  }
  .g-lg-4,
  .gx-lg-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-lg-4,
  .gy-lg-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-lg-5,
  .gx-lg-5 {
    --bs-gutter-x: 3rem;
  }
  .g-lg-5,
  .gy-lg-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1200px) {
  .col-xl {
    flex: 1 0 0%;
  }
  .row-cols-xl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xl-0 {
    margin-left: 0;
  }
  .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xl-3 {
    margin-left: 25%;
  }
  .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xl-6 {
    margin-left: 50%;
  }
  .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xl-9 {
    margin-left: 75%;
  }
  .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .g-xl-0,
  .gx-xl-0 {
    --bs-gutter-x: 0;
  }
  .g-xl-0,
  .gy-xl-0 {
    --bs-gutter-y: 0;
  }
  .g-xl-1,
  .gx-xl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xl-1,
  .gy-xl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xl-2,
  .gx-xl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xl-2,
  .gy-xl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xl-3,
  .gx-xl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xl-3,
  .gy-xl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xl-4,
  .gx-xl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xl-4,
  .gy-xl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xl-5,
  .gx-xl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xl-5,
  .gy-xl-5 {
    --bs-gutter-y: 3rem;
  }
}
@media (min-width: 1400px) {
  .col-xxl {
    flex: 1 0 0%;
  }
  .row-cols-xxl-auto > * {
    flex: 0 0 auto;
    width: auto;
  }
  .row-cols-xxl-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }
  .row-cols-xxl-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }
  .row-cols-xxl-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }
  .row-cols-xxl-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }
  .row-cols-xxl-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }
  .row-cols-xxl-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }
  .col-xxl-auto {
    flex: 0 0 auto;
    width: auto;
  }
  .col-xxl-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }
  .col-xxl-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }
  .col-xxl-3 {
    flex: 0 0 auto;
    width: 25%;
  }
  .col-xxl-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
  .col-xxl-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }
  .col-xxl-6 {
    flex: 0 0 auto;
    width: 50%;
  }
  .col-xxl-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }
  .col-xxl-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }
  .col-xxl-9 {
    flex: 0 0 auto;
    width: 75%;
  }
  .col-xxl-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }
  .col-xxl-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }
  .col-xxl-12 {
    flex: 0 0 auto;
    width: 100%;
  }
  .offset-xxl-0 {
    margin-left: 0;
  }
  .offset-xxl-1 {
    margin-left: 8.33333333%;
  }
  .offset-xxl-2 {
    margin-left: 16.66666667%;
  }
  .offset-xxl-3 {
    margin-left: 25%;
  }
  .offset-xxl-4 {
    margin-left: 33.33333333%;
  }
  .offset-xxl-5 {
    margin-left: 41.66666667%;
  }
  .offset-xxl-6 {
    margin-left: 50%;
  }
  .offset-xxl-7 {
    margin-left: 58.33333333%;
  }
  .offset-xxl-8 {
    margin-left: 66.66666667%;
  }
  .offset-xxl-9 {
    margin-left: 75%;
  }
  .offset-xxl-10 {
    margin-left: 83.33333333%;
  }
  .offset-xxl-11 {
    margin-left: 91.66666667%;
  }
  .g-xxl-0,
  .gx-xxl-0 {
    --bs-gutter-x: 0;
  }
  .g-xxl-0,
  .gy-xxl-0 {
    --bs-gutter-y: 0;
  }
  .g-xxl-1,
  .gx-xxl-1 {
    --bs-gutter-x: 0.25rem;
  }
  .g-xxl-1,
  .gy-xxl-1 {
    --bs-gutter-y: 0.25rem;
  }
  .g-xxl-2,
  .gx-xxl-2 {
    --bs-gutter-x: 0.5rem;
  }
  .g-xxl-2,
  .gy-xxl-2 {
    --bs-gutter-y: 0.5rem;
  }
  .g-xxl-3,
  .gx-xxl-3 {
    --bs-gutter-x: 1rem;
  }
  .g-xxl-3,
  .gy-xxl-3 {
    --bs-gutter-y: 1rem;
  }
  .g-xxl-4,
  .gx-xxl-4 {
    --bs-gutter-x: 1.5rem;
  }
  .g-xxl-4,
  .gy-xxl-4 {
    --bs-gutter-y: 1.5rem;
  }
  .g-xxl-5,
  .gx-xxl-5 {
    --bs-gutter-x: 3rem;
  }
  .g-xxl-5,
  .gy-xxl-5 {
    --bs-gutter-y: 3rem;
  }
}
.row.variable-gutters {
  margin-right: -12px;
  margin-left: -12px;
  margin-right: -6px;
  margin-left: -6px;
}
.row.variable-gutters > .col,
.row.variable-gutters > [class*=col-] {
  padding-right: 12px;
  padding-left: 12px;
}
.row.variable-gutters > .col,
.row.variable-gutters > [class*=col-] {
  padding-right: 6px;
  padding-left: 6px;
}
@media (min-width: 576px) {
  .row.variable-gutters {
    margin-right: -6px;
    margin-left: -6px;
  }
  .row.variable-gutters > .col,
  .row.variable-gutters > [class*=col-] {
    padding-right: 6px;
    padding-left: 6px;
  }
}
@media (min-width: 768px) {
  .row.variable-gutters {
    margin-right: -10px;
    margin-left: -10px;
  }
  .row.variable-gutters > .col,
  .row.variable-gutters > [class*=col-] {
    padding-right: 10px;
    padding-left: 10px;
  }
}
@media (min-width: 992px) {
  .row.variable-gutters {
    margin-right: -12px;
    margin-left: -12px;
  }
  .row.variable-gutters > .col,
  .row.variable-gutters > [class*=col-] {
    padding-right: 12px;
    padding-left: 12px;
  }
}
@media (min-width: 1200px) {
  .row.variable-gutters {
    margin-right: -12px;
    margin-left: -12px;
  }
  .row.variable-gutters > .col,
  .row.variable-gutters > [class*=col-] {
    padding-right: 12px;
    padding-left: 12px;
  }
}
@media (min-width: 1400px) {
  .row.variable-gutters {
    margin-right: -14px;
    margin-left: -14px;
  }
  .row.variable-gutters > .col,
  .row.variable-gutters > [class*=col-] {
    padding-right: 14px;
    padding-left: 14px;
  }
}

.row.row-column-border > [class^=col-] {
  padding-top: var(--bs-spacing-l);
  padding-bottom: var(--bs-spacing-l);
  border-top: var(--bs-border-base) solid var(--bs-color-border-subtle);
}
.row.row-column-border > [class^=col-]:first-child {
  border: none;
}
.row.row-column-border > [class^=col-] .navbar {
  padding: 0;
}
.row.row-column-border > [class^=col-] .navbar .menu-wrapper .nav-link {
  padding-right: 0;
}
.row.row-column-menu-left > [class^=col-]:first-child {
  padding: var(--bs-spacing-s) 0;
}
.row.row-column-menu-right > [class^=col-]:last-child {
  padding: var(--bs-spacing-s) 0;
}
.row.row-card {
  background-color: var(--bs-color-background-inverse);
}
@media (min-width: 992px) {
  .row.row-column-border {
    margin-top: 1rem;
    border-top: var(--bs-border-base) solid var(--bs-color-border-subtle);
  }
  .row.row-column-border > [class^=col-] {
    padding: 3rem 3rem;
    border-top: none;
    border-left: var(--bs-border-base) solid var(--bs-color-border-subtle);
  }
  .row.row-column-border > [class^=col-]:first-child {
    border: none;
    padding-left: 0;
  }
  .row.row-column-border > [class^=col-] .navbar {
    padding: 8px 0;
  }
  .row.row-column-border > [class^=col-] .navbar .menu-wrapper {
    padding: 0;
  }
  .row.row-column-menu-left > [class^=col-]:first-child {
    padding: 0;
  }
  .row.row-column-menu-right > [class^=col-]:last-child {
    padding: 0;
  }
}
.row.row-full-width {
  max-width: 100vw;
  margin: 0 calc(-50vw + 50%);
}
.row.row-full-width > * {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.row.row-full-width > * img {
  width: 100%;
  height: 100%;
  max-height: 600px;
  object-fit: cover;
}
.row.row-title {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
@media (min-width: 576px) {
  .row.row-title {
    flex-direction: row;
    align-items: flex-start;
  }
}
.row.row-border h1 {
  border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
  padding-bottom: var(--bs-spacing-s);
  margin-bottom: var(--bs-spacing-s);
}
.row.row-border h2 {
  border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
  padding-bottom: var(--bs-spacing-s);
  margin-bottom: var(--bs-spacing-s);
}
.row.row-border h3 {
  border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
  padding-bottom: var(--bs-spacing-s);
  margin-bottom: var(--bs-spacing-s);
}
.row.row-border h4 {
  border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
  padding-bottom: var(--bs-spacing-s);
  margin-bottom: var(--bs-spacing-s);
}
.row.row-border h5 {
  border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
  padding-bottom: var(--bs-spacing-s);
  margin-bottom: var(--bs-spacing-s);
}
.row.row-border h6 {
  border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
  padding-bottom: var(--bs-spacing-s);
  margin-bottom: var(--bs-spacing-s);
}
@media (min-width: 576px) {
  .row.row-border {
    border-bottom: var(--bs-border-base) solid var(--bs-color-border-subtle);
    padding-bottom: var(--bs-spacing-s);
    margin-bottom: var(--bs-spacing-s);
  }
  .row.row-border h1 {
    border: none;
    margin: 0;
    padding: 0;
  }
  .row.row-border h2 {
    border: none;
    margin: 0;
    padding: 0;
  }
  .row.row-border h3 {
    border: none;
    margin: 0;
    padding: 0;
  }
  .row.row-border h4 {
    border: none;
    margin: 0;
    padding: 0;
  }
  .row.row-border h5 {
    border: none;
    margin: 0;
    padding: 0;
  }
  .row.row-border h6 {
    border: none;
    margin: 0;
    padding: 0;
  }
}
.row.row-calendar {
  display: block;
}

.sticky-wrapper.is-sticky {
  position: fixed;
}
.sticky-wrapper.is-sticky.navbar-wrapper {
  z-index: 1;
  left: 0;
  right: 0;
  width: auto;
}
.sticky-wrapper.is-sticky.navbar-wrapper .navbar {
  padding-top: var(--bs-spacing-s);
  padding-bottom: var(--bs-spacing-s);
  border-top: var(--bs-border-base) solid var(--bs-color-border-subtle);
}
.sticky-wrapper.is-sticky.navbar-wrapper.sticky-expanded {
  z-index: auto;
}
@media (min-width: 992px) {
  .sticky-wrapper.is-sticky.navbar-wrapper {
    z-index: auto;
    left: auto;
    right: auto;
    width: unset;
  }
  .sticky-wrapper.is-sticky.navbar-wrapper .navbar {
    border: none;
    background-color: transparent;
    padding: 0;
  }
  .sticky-wrapper.is-sticky.navbar-wrapper .navbar .menu-wrapper {
    padding: 0;
  }
  .sticky-wrapper.is-sticky.navbar-wrapper .navbar .menu-wrapper .nav-link {
    padding-right: 0;
  }
  .sticky-wrapper.is-sticky.navbar-wrapper .navbar.it-bottom-navscroll {
    border: none;
  }
  .sticky-wrapper.is-sticky.navbar-wrapper.at-bottom {
    position: absolute;
    top: auto !important;
    bottom: 0;
  }
}
.sticky-wrapper.navbar-wrapper .navbar.it-top-navscroll, .sticky-wrapper.navbar-wrapper .navbar.it-bottom-navscroll {
  position: relative;
  top: auto;
  left: auto;
  right: auto;
  bottom: auto;
}

@keyframes progress-bar-stripes {
  0% {
    background-position-x: 16px;
  }
}
.progress-bar-striped {
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
  background-size: var(--bs-progress-height) var(--bs-progress-height);
}

.progress-bar-animated {
  animation: 1s linear infinite progress-bar-stripes;
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar-animated {
    animation: none;
  }
}

@keyframes progressBarIndeterminate {
  0% {
    left: -5%;
  }
  50% {
    width: 66%;
  }
  100% {
    left: 100%;
    width: 33%;
  }
}
.progress {
  --bs-progress-height: 16px;
  --bs-progress-font-size: 0.75rem;
  --bs-progress-bg: hsl(0, 0%, 90%);
  --bs-progress-border-radius: 0;
  --bs-progress-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  --bs-progress-bar-color: hsl(0, 0%, 100%);
  --bs-progress-bar-bg: hsl(210, 100%, 40%);
  --bs-progress-bar-transition: width 0.6s ease;
  display: flex;
  overflow: hidden;
  font-size: var(--bs-progress-font-size);
  background-color: var(--bs-progress-bg);
  border-radius: var(--bs-progress-border-radius);
  height: 4px;
  box-shadow: none;
}
.progress.progress-color {
  background-color: hsl(210, 3%, 85%);
}
.progress.progress-indeterminate {
  position: relative;
}
.progress.progress-indeterminate .progress-bar {
  width: 0;
  animation: progressBarIndeterminate 1.4s cubic-bezier(0.77, 0, 0.175, 1) infinite forwards;
  position: absolute;
  top: 0;
  bottom: 0;
}

.progress-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: var(--bs-progress-bar-color);
  text-align: center;
  white-space: nowrap;
  transition: var(--bs-progress-bar-transition);
  background-color: hsl(210, 17%, 44%);
}
@media (prefers-reduced-motion: reduce) {
  .progress-bar {
    transition: none;
  }
}

.progress-bar-label {
  text-align: right;
  font-size: 0.75rem;
  color: hsl(0, 0%, 10%);
  font-weight: 500;
}

.btn-progress .progress {
  display: block;
  position: absolute;
  bottom: 0;
  width: 100%;
  left: 0;
  border-radius: 0 0 4px 4px;
}
.btn-progress .progress-bar {
  height: 4px;
}

@media (min-width: 576px) {
  .progress-bar-label {
    font-size: 0.75rem;
  }
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

.password-icon {
  position: absolute;
  top: calc(var(--bs-form-control-spacing) * 4.5);
  right: var(--bs-form-control-spacing);
  z-index: 10;
  padding: 0 var(--bs-spacing-xxs);
  background-color: var(--bs-form-control-background-color);
  cursor: pointer;
}
.password-icon .icon {
  fill: var(--bs-icon-primary);
}

.password-meter {
  bottom: -12px;
  left: 0;
  width: 100%;
  max-width: 200px;
  height: 4px;
}
.password-meter .col-3 {
  height: 4px;
}

.password-caps {
  display: none;
}
.password-caps.show {
  display: block;
}

.input-number {
  position: relative;
}
.input-number.input-number-adaptive {
  width: fit-content;
}
.input-number.input-number-adaptive input[type=number] {
  width: auto;
  transition: all va(--bs-transition-instant);
}
.input-number input[type=number] {
  appearance: textfield;
  border-top-right-radius: var(--bs-form-control-border-radius) !important;
  border-bottom-right-radius: var(--bs-form-control-border-radius) !important;
}
.input-number input[type=number]::-webkit-inner-spin-button, .input-number input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
.input-number input[type=number]::-ms-clear {
  display: none;
}
.input-number input[type=number]:not(:disabled) {
  border-left: 1px solid var(--bs-form-control-border-color);
}
.input-number input[type=number][readonly] ~ .input-group-text .input-number-add,
.input-number input[type=number][readonly] ~ .input-group-text .input-number-sub {
  display: none;
}
.input-number.disabled button {
  display: none;
  pointer-events: none;
}
.input-number.disabled button:hover {
  cursor: not-allowed;
}
.input-number .input-group-text.align-buttons {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  padding-right: var(--bs-form-control-spacing);
  border: none;
  background: transparent;
}
.is-invalid + .input-number .input-group-text.align-buttons {
  bottom: 0;
}
.input-number .input-group-text button {
  position: relative;
  transition: opacity 0.1s;
  padding: 0;
  border: none;
  height: 50%;
  width: 16px;
  background: transparent;
}
.input-number .input-group-text button:after {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  content: "";
  width: 0;
  height: 0;
  border-style: solid;
}
.input-number .input-group-text button:focus.input-number-add:after, .input-number .input-group-text button:hover.input-number-add:after {
  border-color: transparent transparent hsl(210, 54%, 20%) transparent;
}
.input-number .input-group-text button:focus.input-number-sub:after, .input-number .input-group-text button:hover.input-number-sub:after {
  border-color: hsl(210, 54%, 20%) transparent transparent transparent;
}
.input-number .input-group-text button:focus:not([data-focus-mouse=true]) {
  opacity: 1;
}
.input-number .input-group-text button.input-number-add:after {
  border-width: 0 5px 6px 5px;
  border-color: transparent transparent hsl(210, 17.6470588235%, 43.35%) transparent;
}
.input-number .input-group-text button.input-number-sub:after {
  border-width: 6px 5px 0 5px;
  border-color: hsl(210, 17.6470588235%, 43.35%) transparent transparent transparent;
}
.input-number .input-group-text button:hover {
  cursor: pointer;
}

.input-number .input-group-text + input[type=number] {
  border-left: 0;
}

@media (min-width: 1200px) {
  .input-number button {
    opacity: 0;
  }
  .input-number:hover button {
    opacity: 1;
  }
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > input {
  border-left-width: 0;
}
.input-group > .form-control,
.input-group > .form-select,
.input-group > .form-floating {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus,
.input-group > .form-select:focus,
.input-group > .form-floating:focus-within {
  z-index: 5;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 5;
}

.input-group-text {
  display: flex;
  align-items: center;
  padding: var(--bs-form-control-spacing) 0 var(--bs-form-control-spacing) var(--bs-form-control-spacing);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-font-weight-solid);
  color: var(--bs-form-inpunt-text-color);
  background-color: var(--bs-form-control-background-color);
  text-align: center;
  white-space: nowrap;
  border-top-width: 1px;
  border-left-width: 1px;
  border-right-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: var(--bs-form-control-border-color);
  border-radius: var(--bs-form-control-border-radius);
}
.disabled .input-group-text {
  background-color: var(--bs-color-background-disabled);
  border-color: var(--bs-color-border-disabled);
  color: var(--bs-color-text-disabled);
}

.input-group:not(.has-validation) > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group:not(.has-validation) > .dropdown-toggle:nth-last-child(n+3),
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-control,
.input-group:not(.has-validation) > .form-floating:not(:last-child) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group.has-validation > :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
.input-group.has-validation > .dropdown-toggle:nth-last-child(n+4),
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-control,
.input-group.has-validation > .form-floating:nth-last-child(n+3) > .form-select {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.input-group > .form-floating:not(:first-child) > .form-control,
.input-group > .form-floating:not(:first-child) > .form-select {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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

.position-absolute {
  position: absolute !important;
}

.w-100 {
  width: 100% !important;
}

.m-0 {
  margin: 0 !important;
}

.bg-muted {
  --bs-bg-opacity: 1;
  background-color: hsl(0, 0%, 96%) !important;
}

.bg-danger {
  --bs-bg-opacity: 1;
  background-color: hsl(350, 60%, 50%) !important;
}

.bg-warning {
  --bs-bg-opacity: 1;
  background-color: hsl(36, 100%, 30%) !important;
}

.bg-success {
  --bs-bg-opacity: 1;
  background-color: hsl(160, 100%, 25%) !important;
}

.border-start {
  border-left: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-start-0 {
  border-left: 0 !important;
}

.border-end {
  border-right: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color) !important;
}

.border-end-0 {
  border-right: 0 !important;
}

.border-white {
  --bs-border-opacity: 1;
  border-color: white !important;
}

.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}

.text-secondary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
}

.text-success {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
}

.text-info {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
}

.text-warning {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
}

.text-danger {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}

.text-light {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
}

.text-dark {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
}

.text-black {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
}

.text-white {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}

.text-100 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-100-rgb), var(--bs-text-opacity)) !important;
}

.text-200 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-200-rgb), var(--bs-text-opacity)) !important;
}

.text-300 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-300-rgb), var(--bs-text-opacity)) !important;
}

.text-400 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-400-rgb), var(--bs-text-opacity)) !important;
}

.text-500 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-500-rgb), var(--bs-text-opacity)) !important;
}

.text-600 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-600-rgb), var(--bs-text-opacity)) !important;
}

.text-700 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-700-rgb), var(--bs-text-opacity)) !important;
}

.text-800 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-800-rgb), var(--bs-text-opacity)) !important;
}

.text-900 {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-900-rgb), var(--bs-text-opacity)) !important;
}

.text-body {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
}

.text-muted {
  --bs-text-opacity: 1;
  color: hsl(210, 17%, 44%) !important;
}

.text-black-50 {
  --bs-text-opacity: 1;
  color: rgba(0, 0, 0, 0.5) !important;
}

.text-white-50 {
  --bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) !important;
}

.text-reset {
  --bs-text-opacity: 1;
  color: inherit !important;
}

.d-none {
  display: none !important;
}

.flex-column {
  flex-direction: column !important;
}

@media (min-width: 576px) {
  .m-sm-0 {
    margin: 0 !important;
  }
  .d-sm-none {
    display: none !important;
  }
  .flex-sm-column {
    flex-direction: column !important;
  }
}
@media (min-width: 768px) {
  .m-md-0 {
    margin: 0 !important;
  }
  .d-md-none {
    display: none !important;
  }
  .flex-md-column {
    flex-direction: column !important;
  }
}
@media (min-width: 992px) {
  .m-lg-0 {
    margin: 0 !important;
  }
  .d-lg-none {
    display: none !important;
  }
  .flex-lg-column {
    flex-direction: column !important;
  }
}
@media (min-width: 1200px) {
  .m-xl-0 {
    margin: 0 !important;
  }
  .d-xl-none {
    display: none !important;
  }
  .flex-xl-column {
    flex-direction: column !important;
  }
}
@media (min-width: 1400px) {
  .m-xxl-0 {
    margin: 0 !important;
  }
  .d-xxl-none {
    display: none !important;
  }
  .flex-xxl-column {
    flex-direction: column !important;
  }
}
@media print {
  .d-print-none {
    display: none !important;
  }
}
.password-icon {
  top: calc(var(--bs-form-control-spacing) * 5);
  --bs-icon-default: var(--bs-icon-primary);
}`,V;I(st);let c=V=class extends p{constructor(){super(...arguments),this._slotPrepend=null,this._slotAppend=null,this.type="text",this.adaptive=!1,this.labelHidden=!1,this.placeholder="",this.supportText="",this.plaintext=!1,this.readonly=!1,this.passwordStrengthMeter=!1,this.suggestions=!1,this._passwordVisible=!1,this._strengthInfos="",this._score=0}get label(){return this.labelElements.length>0?this.labelElements[0].innerText.trim():""}get slotted(){return this._slotPrepend||this._slotAppend}firstUpdated(){var t,e;this._slotPrepend=this.querySelector('[slot="prepend"]'),this._slotAppend=this.querySelector('[slot="append"]'),(t=this._slotPrepend)==null||t.addEventListener("slotchange",()=>{this.requestUpdate()}),(e=this._slotAppend)==null||e.addEventListener("slotchange",()=>{this.requestUpdate()})}connectedCallback(){var t;(t=super.connectedCallback)==null||t.call(this),this.type==="password"&&this.minlength<0&&(this.minlength=8),this._handleReady()}updated(t){var e,o;(e=super.updated)==null||e.call(this,t),this.passwordStrengthMeter&&this.type!=="password"&&this.logger.warn("The strength-meter property is enabled, but type isn't password. Please, remove strength-meter property."),this.suggestions&&this.type!=="password"&&this.logger.warn("The suggestions property is enabled, but type isn't password. Please, remove suggestions this property."),(!this.label||((o=this.label)==null?void 0:o.length)===0)&&this.logger.warn(`Label is required to ensure accessibility. Please, define a label for <it-input name="${this.name}" ... /> . Set attribute label-hidden="true" if you don't want to show label.`)}_handleInput(t){this.value=this.inputElement.value,this.value==="00"&&(this.value="0",this.inputElement.value="0"),this.passwordStrengthMeter&&this._checkPasswordStrength(this.inputElement.value),super._handleInput(t)}_togglePasswordVisibility(){this._passwordVisible=!this._passwordVisible,this.inputElement&&(this.inputElement.type=this._passwordVisible?"text":"password")}_checkPasswordStrength(t){this._score=ot(t,this.minlength),this._updateStrengthInfos()}_getPasswordConfig(){return{minimumLength:this.minlength,showHidePassword:this.$t("showHidePassword"),shortPass:this.$t("shortPass"),badPass:this.$t("badPass"),goodPass:this.$t("goodPass"),strongPass:this.$t("strongPass"),ariaLabelPasswordMeter:this.$t("ariaLabelPasswordMeter"),suggestionsLabel:this.$t("passwordSuggestionsLabel"),suggestionLength:this.$t("passwordSuggestionLength"),suggestionUppercase:this.$t("passwordSuggestionUppercase"),suggestionLowercase:this.$t("passwordSuggestionLowercase"),suggestionNumber:this.$t("passwordSuggestionNumber"),suggestionSpecial:this.$t("passwordSuggestionSpecial"),suggestionFollowed:this.$t("passwordSuggestionFollowed"),suggestionFollowedPlural:this.$t("passwordSuggestionFollowedPlural"),suggestionOf:this.$t("passwordSuggestionOf")}}_updateStrengthInfos(){let t=it(this._score,{shortPass:this.$t("shortPass"),badPass:this.$t("badPass"),goodPass:this.$t("goodPass"),strongPass:this.$t("strongPass")});if(S){const{completedCount:e,totalCount:o}=at(S,this.value,this._getPasswordConfig()),i=e===1?this.$t("passwordSuggestionFollowed"):this.$t("passwordSuggestionFollowedPlural");t+=` ${e} ${this.$t("passwordSuggestionOf")} ${o} ${i}.`}this._strengthInfos=t}static _cleanFloat(t){return parseFloat(t.toPrecision(15))}_inputNumberIncDec(t){var g;const e=typeof this.step=="number"?this.step:Number(this.step)||1,o=typeof this.value=="number"?this.value:Number(this.value)||0,i=typeof this.min=="number"?this.min:Number(this.min),a=typeof this.max=="number"?this.max:Number(this.max),l=t*e,b=V._cleanFloat(o+l);if(!(b>a||b<i)){const m=b.toString();this.value=m,this.inputElement.dispatchEvent(new Event("blur",{bubbles:!0})),this.inputElement.dispatchEvent(new Event("change",{bubbles:!0}));const L=(g=this.shadowRoot)==null?void 0:g.querySelector(`#${this._id}-live-region`);L&&(L.textContent=`${m}`)}}_renderTogglePasswordButton(){return this.type==="password"?u`
        <button
          type="button"
          class="password-icon btn"
          role="switch"
          aria-checked="${this._passwordVisible}"
          @click="${this._togglePasswordVisibility}"
          part="focusable"
        >
          <span class="visually-hidden">${this.$t("showHidePassword")}</span>
          <it-icon
            name="${this._passwordVisible?"it-password-visible":"it-password-invisible"}"
            size="sm"
          ></it-icon>
        </button>
      `:z}_renderSuggestions(){return this.suggestions?u`<div class="strength-meter-suggestions small form-text text-muted">
          <label class="visually-hidden" for="suggestions">${this.$t("passwordSuggestionsLabel")}</label>
          <div class="password-suggestions">
            ${S.map(t=>{const e=t.test(this.value,this._getPasswordConfig());return u`
                <div class="suggestion">
                  ${e?u` <svg
                        class="icon icon-xs me-1"
                        aria-label="${this.$t("passwordSuggestionMetLabel")}"
                        viewBox="0 0 24 24"
                        style="width: 1em; height: 1em;"
                      >
                        <path d="M9.6 16.9 4 11.4l.8-.7 4.8 4.8 8.5-8.4.7.7-9.2 9.1z"></path>
                      </svg>`:z}
                  <span>${t.text(this._getPasswordConfig())}</span>
                </div>
              `})}
          </div>
        </div>`:z}_renderpasswordStrengthMeter(){var t;if(this.type==="password"&&this.passwordStrengthMeter){const e=this._score<0?0:this._score,o=((t=this.value)==null?void 0:t.length)===0?"muted":rt(this._score);return u`<div class="password-strength-meter">
        ${this._renderSuggestions()}

        <p
          id=${`strengthMeterInfo_${this._id}`}
          class="${`strength-meter-info small form-text pt-0 text-${o}`}"
          aria-live="polite"
        >
          ${this._strengthInfos}
        </p>
        <div class="password-meter progress rounded-0 position-absolute">
          <div
            class="${this.composeClass("progress-bar",`bg-${o}`)}"
            style="width: ${e}%"
            role="progressbar"
            aria-valuenow="${e}"
            aria-valuemin="0"
            aria-valuemax="100"
            aria-label="${this.$t("ariaLabelPasswordMeter")}"
          >
            <div class="row position-absolute w-100 m-0">
              <div class="col-3 border-start border-end border-white"></div>
              <div class="col-3 border-start border-end border-white"></div>
              <div class="col-3 border-start border-end border-white"></div>
              <div class="col-3 border-start border-end border-white"></div>
            </div>
          </div>
        </div>
      </div>`}return z}_renderInput(t,e,o){var b,g;const i=this.composeClass(((b=this.supportText)==null?void 0:b.length)>0?t:"",this.passwordStrengthMeter?`strengthMeterInfo_${this._id}`:"",((g=this._ariaAttributes["aria-describedby"])==null?void 0:g.length)>0?this._ariaAttributes["aria-describedby"]:"",(o==null?void 0:o.length)>0?`invalid-feedback-${this._id}`:""),a=this.composeClass("it-form__control",this.plaintext?"form-control-plaintext":"form-control",this.size?`form-control-${this.size}`:"",e?"is-invalid":"",!e&&this._touched&&!this.readonly?"just-validate-success-field":"");let l;if(this.type==="textarea")l=u`
        <textarea
          part="textarea focusable"
          ${j(this._ariaAttributes)}
          aria-describedby=${h(i||void 0)}
          ?aria-invalid=${e}
          @input="${this._handleInput}"
          @blur=${this._handleBlur}
          @focus=${this._handleFocus}
          @click=${this._handleClick}
          @change=${this._handleChange}
          @invalid=${this._handleInvalid}
          id="${this._id}"
          name="${this.name}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          minlength=${h(this.minlength)}
          maxlength=${h(this.maxlength)}
          pattern=${h(this.pattern)}
          ?formNoValidate=${this.customValidation}
          .value="${M(this.value)}"
          placeholder=${h(this.placeholder||void 0)}
          class="${a}"
        ></textarea>
      `;else{let m=null;this.type==="number"&&this.adaptive&&(m=`width: calc(${this.value.toString().length}ch + 70px);`),l=u`
        <input
          part="input focusable"
          ${j(this._ariaAttributes)}
          aria-describedby=${h(i||void 0)}
          ?aria-invalid=${e}
          @input="${this._handleInput}"
          @blur=${this._handleBlur}
          @focus=${this._handleFocus}
          @click=${this._handleClick}
          @change=${this._handleChange}
          @invalid=${this._handleInvalid}
          type="${this.type}"
          id="${this._id}"
          name="${this.name}"
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          minlength=${h(this.minlength)}
          maxlength=${h(this.maxlength)}
          min=${h(this.min)}
          max=${h(this.max)}
          step=${h(this.step)}
          pattern=${h(this.pattern)}
          ?formNoValidate=${this.customValidation}
          .value="${M(this.value)}"
          placeholder=${h(this.placeholder||void 0)}
          class="${a}"
          style=${h(m)}
        />${this._renderTogglePasswordButton()}
      `}return l}render(){var l;const t=`${this._id}-support-text`,e=u` ${w(this.supportText,()=>u` <small class="form-text" id="${t}">${this.supportText}</small> `)}`,o=this.validationMessage??"",i=(o==null?void 0:o.length)>0||!this.customValidation&&((l=this.inputElement)==null?void 0:l.checkValidity())===!1,a=u`<div
      role="alert"
      id="invalid-feedback-${this._id}"
      class="invalid-feedback form-feedback form-text form-feedback just-validate-error-label"
      ?hidden=${!((o==null?void 0:o.length)>0)}
    >
      <span class="visually-hidden">${this.label}: </span>${o}
    </div>`;return u`
      <div class="form-group" part="input-wrapper">
        <label
          for="${h(this._id||void 0)}"
          part="label"
          class="${this.composeClass("active",this.labelHidden?"visually-hidden":"")}"
          ><slot name="label"></slot
        ></label>

        ${w(this.slotted||this.type==="number",()=>u`<div
                class="${this.composeClass("input-group ",this.type==="number"?"input-number":"",this.type==="number"&&this.adaptive?"input-number-adaptive":"",this.disabled?"disabled":"",this.readonly?"readonly":"")}"
              >
                ${w(this._slotPrepend,()=>u` <span class="input-group-text">
                      <slot name="prepend" @slotchange=${()=>this.requestUpdate()}></slot
                    ></span>`)}
                ${this._renderInput(t,i,o)}
                ${w(this.type==="number",()=>u`<span class="input-group-text align-buttons flex-column">
                      <button
                        class="input-number-add"
                        @click=${()=>this._inputNumberIncDec(1)}
                        ?disabled=${this.disabled||this.readonly}
                      >
                        <span class="visually-hidden">${this.$t("increaseValue")}</span>
                      </button>
                      <button
                        class="input-number-sub"
                        @click=${()=>this._inputNumberIncDec(-1)}
                        ?disabled=${this.disabled||this.readonly}
                      >
                        <span class="visually-hidden">${this.$t("decreaseValue")}</span>
                      </button>
                      <div aria-live="polite" class="visually-hidden" id="${this._id}-live-region"></div>
                    </span>`)}
                ${w(this._slotAppend,()=>u` <div class="input-group-append">
                      <slot name="append" @slotchange=${()=>this.requestUpdate()}></slot>
                    </div>`)}
              </div>
              ${a} ${e} ${this._renderpasswordStrengthMeter()}`,()=>u` ${this._renderInput(t,i,o)} ${a}
            ${e} ${this._renderpasswordStrengthMeter()}`)}
      </div>
    `}};c.styles=nt;s([x(),n("design:type",Object)],c.prototype,"_slotPrepend",void 0);s([x(),n("design:type",Object)],c.prototype,"_slotAppend",void 0);s([d({type:String}),n("design:type",String)],c.prototype,"type",void 0);s([d(),n("design:type",Object)],c.prototype,"size",void 0);s([d({type:Boolean}),n("design:type",Object)],c.prototype,"adaptive",void 0);s([d({type:Boolean,attribute:"label-hidden"}),n("design:type",Object)],c.prototype,"labelHidden",void 0);s([d({type:String}),n("design:type",Object)],c.prototype,"placeholder",void 0);s([d({type:String,attribute:"support-text"}),n("design:type",Object)],c.prototype,"supportText",void 0);s([d({type:Boolean}),n("design:type",Object)],c.prototype,"plaintext",void 0);s([d({type:Boolean}),n("design:type",Object)],c.prototype,"readonly",void 0);s([d({type:Boolean,attribute:"strength-meter"}),n("design:type",Object)],c.prototype,"passwordStrengthMeter",void 0);s([d({type:Boolean}),n("design:type",Object)],c.prototype,"suggestions",void 0);s([Z({slot:"label"}),n("design:type",Array)],c.prototype,"labelElements",void 0);s([x(),n("design:type",Object)],c.prototype,"_passwordVisible",void 0);s([x(),n("design:type",Object)],c.prototype,"_strengthInfos",void 0);s([x(),n("design:type",Object)],c.prototype,"_score",void 0);c=V=s([H("it-input")],c);
