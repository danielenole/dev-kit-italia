import{_ as t}from"./preload-helper-Dp1pzeXC.js";import{i as C,E as S,b as x,x as q,a as F}from"./iframe-Bva7CR0T.js";import{r as V,e as L,n as l,t as M}from"./query-CblQfenQ.js";function n(a,i,e,r){var o=arguments.length,s=o<3?i:r,_;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(a,i,e,r);else for(var p=a.length-1;p>=0;p--)(_=a[p])&&(s=(o<3?_(s):o>3?_(i,e,s):_(i,e))||s);return o>3&&s&&Object.defineProperty(i,e,s),s}function m(a,i){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(a,i)}function O(a){var i,e,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var o=a.length;for(i=0;i<o;i++)a[i]&&(e=O(a[i]))&&(r&&(r+=" "),r+=e)}else for(e in a)a[e]&&(r&&(r+=" "),r+=e);return r}function z(){for(var a,i,e=0,r="",o=arguments.length;e<o;e++)(a=arguments[e])&&(i=O(a))&&(r&&(r+=" "),r+=i);return r}const y=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:h}=window;let c,A="ltr",I="en";const T=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function R(){T&&(A=document.documentElement.dir||"ltr",I=document.documentElement.lang||navigator.language),[...y.keys()].forEach(a=>{const i=a;typeof i.requestUpdate=="function"&&i.requestUpdate()})}if(T){const a=new MutationObserver(R);A=document.documentElement.dir||"ltr",I=document.documentElement.lang||navigator.language,a.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function D(...a){a.forEach(i=>{const e=i.$code.toLowerCase();h.has(e)?h.set(e,{...h.get(e),...i}):h.set(e,i),c||(c=i)}),R()}window.registerTranslation=D;class ${constructor(i){this.host=i,this.host.addController(this)}hostConnected(){y.add(this.host)}hostDisconnected(){y.delete(this.host)}dir(){return`${this.host.dir||A}`.toLowerCase()}lang(){return`${this.host.lang||I}`.toLowerCase()}getTranslationData(i){var p;const e=new Intl.Locale(i.replace(/_/g,"-")),r=e==null?void 0:e.language.toLowerCase(),o=((p=e==null?void 0:e.region)==null?void 0:p.toLowerCase())??"",s=h.get(`${r}-${o}`),_=h.get(r);return{locale:e,language:r,region:o,primary:s,secondary:_}}exists(i,e){const{primary:r,secondary:o}=this.getTranslationData(e.lang??this.lang()),s={includeFallback:!1,...e};return!!(r&&r[i]||o&&o[i]||s.includeFallback&&c&&c[i])}term(i,...e){const{primary:r,secondary:o}=this.getTranslationData(this.lang());let s;if(r&&r[i])s=r[i];else if(o&&o[i])s=o[i];else if(c&&c[i])s=c[i];else return console.error(`No translation found for: ${String(i)}`),String(i);return typeof s=="function"?s(...e):s}date(i,e){const r=new Date(i);return new Intl.DateTimeFormat(this.lang(),e).format(r)}number(i,e){const r=Number(i);return Number.isNaN(r)?"":new Intl.NumberFormat(this.lang(),e).format(r)}relativeTime(i,e,r){return new Intl.RelativeTimeFormat(this.lang(),r).format(i,e)}}const j=a=>class extends a{constructor(){super(...arguments),this.localize=new $(this)}get $localize(){return this.localize}$t(i){return this.localize.term(i)}$d(i,e){return this.localize.date(i,e)}$n(i,e){return this.localize.number(i,e)}};class N{constructor(i){this.tag=i}format(i,e){return[`[${this.tag}] ${e}`]}warn(i){console.warn(...this.format("warn",i))}error(i){console.error(...this.format("error",i))}info(i){console.info(...this.format("info",i))}}class P extends F{constructor(){super(),this.composeClass=z,this.logger=new N(this.tagName.toLowerCase())}get _ariaAttributes(){const i={};for(const e of this.getAttributeNames())e==="it-role"?i.role=this.getAttribute(e):e.startsWith("it-aria-")&&(i[e.replace(/^it-/,"")]=this.getAttribute(e));return i}generateId(i){return`${i}-${Math.random().toString(36).slice(2)}`}addFocus(i){}getActiveElement(){let i=document.activeElement;for(;i&&i.shadowRoot&&i.shadowRoot.activeElement;)i=i.shadowRoot.activeElement;return i}get focusElement(){return this}get prefersReducedMotion(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}connectedCallback(){var e;super.connectedCallback();const i=((e=this.id)==null?void 0:e.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(i)}}const U=j(P),E=new WeakMap,v=new WeakMap,g=new WeakMap,f=new WeakSet,b=new WeakMap;class B{constructor(i,e){this.handleFormData=r=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),_=this.options.value(this.host),p=this.host.tagName.toLowerCase(),w=p==="it-button";if(this.host.isConnected&&!o&&!w&&typeof s=="string"&&s.length>0&&typeof _<"u")switch(p){case"it-radio":this.host.checked&&r.formData.append(s,_);break;default:Array.isArray(_)?_.forEach(k=>{r.formData.append(s,k.toString())}):r.formData.append(s,_.toString())}},this.handleFormSubmit=r=>{var _;const o=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((_=E.get(this.form))==null||_.forEach(p=>{this.setUserInteracted(p,!0)})),this.form&&!this.form.noValidate&&!o&&!s(this.host)&&r.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),b.set(this.host,[])},this.handleInteraction=r=>{const o=b.get(this.host);o.includes(r.type)||o.push(r.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const r=this.form.querySelectorAll("*");for(const o of r)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=i).addController(this),this.options={form:r=>{const o=r.form;if(o){const _=r.getRootNode().querySelector(`#${o}`);if(_)return _}return r.closest("form")},name:r=>r.name,value:r=>r.value,disabled:r=>r.disabled??!1,reportValidity:r=>typeof r.reportValidity=="function"?r.reportValidity():!0,checkValidity:r=>typeof r.checkValidity=="function"?r.checkValidity():!0,setValue:(r,o)=>{r.value=o},assumeInteractionOn:["it-input"],...e}}hostConnected(){const i=this.options.form(this.host);i&&this.attachForm(i),b.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),b.delete(this.host),this.options.assumeInteractionOn.forEach(i=>{this.host.removeEventListener(i,this.handleInteraction)})}hostUpdated(){const i=this.options.form(this.host);i||this.detachForm(),i&&this.form!==i&&(this.detachForm(),this.attachForm(i)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(i){i?(this.form=i,E.has(this.form)?E.get(this.form).add(this.host):E.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),v.has(this.form)||(v.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),g.has(this.form)||(g.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const i=E.get(this.form);i&&(i.delete(this.host),i.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),v.has(this.form)&&(this.form.reportValidity=v.get(this.form),v.delete(this.form)),g.has(this.form)&&(this.form.checkValidity=g.get(this.form),g.delete(this.form)),this.form=void 0))}setUserInteracted(i,e){e?f.add(i):f.delete(i),i.requestUpdate()}doAction(i,e){if(this.form){const r=document.createElement("button");r.type=i,r.style.position="absolute",r.style.width="0",r.style.height="0",r.style.clipPath="inset(50%)",r.style.overflow="hidden",r.style.whiteSpace="nowrap",e&&(r.name=e.name,r.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{e.hasAttribute(o)&&r.setAttribute(o,e.getAttribute(o))})),this.form.append(r),r.click(),r.remove()}}getForm(){return this.form??null}reset(i){this.doAction("reset",i)}submit(i){this.doAction("submit",i)}setValidity(i){const e=this.host,r=!!f.has(e),o=!!e.required;e.toggleAttribute("data-required",o),e.toggleAttribute("data-optional",!o),e.toggleAttribute("data-invalid",!i),e.toggleAttribute("data-valid",i),e.toggleAttribute("data-user-invalid",!i&&r),e.toggleAttribute("data-user-valid",i&&r)}updateValidity(){const i=this.host;this.setValidity(i.validity.valid)}emitInvalidEvent(i){const e=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});i||e.preventDefault(),this.host.dispatchEvent(e)||i==null||i.preventDefault()}}const W={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};D(W);class d extends U{constructor(){super(...arguments),this.formControlController=new B(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var i;return(i=this.inputElement)==null?void 0:i.validity}checkValidity(){var e;return((e=this.inputElement)==null?void 0:e.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const i=this.inputElement.checkValidity();return this.handleValidationMessages(),i}setCustomValidity(i){this.inputElement.setCustomValidity(i),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(i){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(i){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(i){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(i){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const i=this.inputElement.validity;i.valueMissing?this.setCustomValidity(this.$t("validityRequired")):i.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):i.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):i.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):i.typeMismatch||i.rangeUnderflow||i.rangeOverflow||i.stepMismatch||i.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(i){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(i)}_handleChange(i){const e=i.target;let r;if(e instanceof HTMLInputElement)switch(e.type){case"checkbox":case"radio":r=e.checked;break;case"file":r=e.files;break;default:r=e.value}else e instanceof HTMLSelectElement&&e.multiple?r=Array.from(e.selectedOptions).map(o=>o.value):r=e.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:r,el:e},bubbles:!0,composed:!0}))}updated(i){var e;(e=super.updated)==null||e.call(this,i),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}n([V(),m("design:type",Object)],d.prototype,"_touched",void 0);n([L(".it-form__control"),m("design:type",HTMLInputElement)],d.prototype,"inputElement",void 0);n([l({type:String,reflect:!0}),m("design:type",Object)],d.prototype,"name",void 0);n([l({reflect:!0}),m("design:type",Object)],d.prototype,"value",void 0);n([l({type:Boolean,reflect:!0}),m("design:type",Object)],d.prototype,"disabled",void 0);n([l({reflect:!0,type:String}),m("design:type",Object)],d.prototype,"form",void 0);n([l({type:Boolean,reflect:!0,attribute:"custom-validation"}),m("design:type",Object)],d.prototype,"customValidation",void 0);n([l({attribute:"validity-message",reflect:!0}),m("design:type",String)],d.prototype,"validationText",void 0);n([l(),m("design:type",String)],d.prototype,"pattern",void 0);n([l(),m("design:type",Object)],d.prototype,"min",void 0);n([l(),m("design:type",Object)],d.prototype,"max",void 0);n([l(),m("design:type",Object)],d.prototype,"step",void 0);n([l({type:Number}),m("design:type",Object)],d.prototype,"minlength",void 0);n([l({type:Number}),m("design:type",Object)],d.prototype,"maxlength",void 0);n([l({type:Boolean,reflect:!0}),m("design:type",Object)],d.prototype,"required",void 0);n([V(),m("design:type",Object)],d.prototype,"validationMessage",void 0);const H={"it-android-square":()=>t(()=>import("./it-android-square-DfqyrO5U-Eg4jPaVh.js"),[],import.meta.url),"it-android":()=>t(()=>import("./it-android-CGxOWsaS-D6nbXBzR.js"),[],import.meta.url),"it-apple-square":()=>t(()=>import("./it-apple-square-CNoIXb-Z-CUHkWIys.js"),[],import.meta.url),"it-apple":()=>t(()=>import("./it-apple-P7QW_1Zs-BZhiPHA6.js"),[],import.meta.url),"it-arrow-down-circle":()=>t(()=>import("./it-arrow-down-circle-DRWh9RJ_-BW3iitgY.js"),[],import.meta.url),"it-arrow-down-triangle":()=>t(()=>import("./it-arrow-down-triangle-BKTwp33c-C2isQddH.js"),[],import.meta.url),"it-arrow-down":()=>t(()=>import("./it-arrow-down-hjJ5QmuD-Cu7tVit2.js"),[],import.meta.url),"it-arrow-left-circle":()=>t(()=>import("./it-arrow-left-circle-Dmp8ijvW-O3_x4Vj7.js"),[],import.meta.url),"it-arrow-left-triangle":()=>t(()=>import("./it-arrow-left-triangle-cGF4Zctt-_Ej1iel3.js"),[],import.meta.url),"it-arrow-left":()=>t(()=>import("./it-arrow-left-DBgaUG7B-Cpg5JKHK.js"),[],import.meta.url),"it-arrow-right-circle":()=>t(()=>import("./it-arrow-right-circle-CBc1nFG0-DYUyJwBw.js"),[],import.meta.url),"it-arrow-right-triangle":()=>t(()=>import("./it-arrow-right-triangle-C6efeUG2-liZIYqPa.js"),[],import.meta.url),"it-arrow-right":()=>t(()=>import("./it-arrow-right-Bc7F_HOe-CS62Ka8x.js"),[],import.meta.url),"it-arrow-up-circle":()=>t(()=>import("./it-arrow-up-circle-EJbIj1-3-DW1SIKLF.js"),[],import.meta.url),"it-arrow-up-triangle":()=>t(()=>import("./it-arrow-up-triangle-DQJaSUOi-mIv2MGsH.js"),[],import.meta.url),"it-arrow-up":()=>t(()=>import("./it-arrow-up-CHFXAycK-D5HBwvUR.js"),[],import.meta.url),"it-ban":()=>t(()=>import("./it-ban-CdIzAxSs-CS-upZOA.js"),[],import.meta.url),"it-behance":()=>t(()=>import("./it-behance-Ok_4lDQZ-o44GoFtc.js"),[],import.meta.url),"it-bluesky":()=>t(()=>import("./it-bluesky-CI9ZM6e1-Dv-gwakN.js"),[],import.meta.url),"it-bookmark":()=>t(()=>import("./it-bookmark-BFfUQBqO-BJ9RDxIH.js"),[],import.meta.url),"it-box":()=>t(()=>import("./it-box-BVGtGs1p-CC7kvh4Y.js"),[],import.meta.url),"it-burger":()=>t(()=>import("./it-burger-D9BVNtVP-0tVV9LqK.js"),[],import.meta.url),"it-calendar":()=>t(()=>import("./it-calendar-Cwdx5gUb-DBUyjdZ3.js"),[],import.meta.url),"it-camera":()=>t(()=>import("./it-camera-Cu_i0s2L-Bz0N2Ywn.js"),[],import.meta.url),"it-car":()=>t(()=>import("./it-car-BiMEZwAa-DyWFYEsO.js"),[],import.meta.url),"it-card":()=>t(()=>import("./it-card-DZhpkuPN-BE2_-7Bv.js"),[],import.meta.url),"it-cart":()=>t(()=>import("./it-cart-DFu9Alt2-BbMr5cWc.js"),[],import.meta.url),"it-chart-line":()=>t(()=>import("./it-chart-line-BkdxX107-DLjsmUkQ.js"),[],import.meta.url),"it-check-circle":()=>t(()=>import("./it-check-circle-BjvSPVge-B-cB8S27.js"),[],import.meta.url),"it-check":()=>t(()=>import("./it-check-DzQL86G9-DEmqtfl8.js"),[],import.meta.url),"it-chevron-left":()=>t(()=>import("./it-chevron-left-j1tPYBdS-Dz2S0-YS.js"),[],import.meta.url),"it-chevron-right":()=>t(()=>import("./it-chevron-right-BcPgb7pE-ChP0b1ES.js"),[],import.meta.url),"it-clip":()=>t(()=>import("./it-clip-B2EwtAEB-CzJwZgYy.js"),[],import.meta.url),"it-clock":()=>t(()=>import("./it-clock-DMGNSkzq-5oVMlBZZ.js"),[],import.meta.url),"it-close-big":()=>t(()=>import("./it-close-big-DiuS-VNr-BMLsKFA4.js"),[],import.meta.url),"it-close-circle":()=>t(()=>import("./it-close-circle-C3WkuIQ0-C5EF_kvM.js"),[],import.meta.url),"it-close":()=>t(()=>import("./it-close-CiA9lXtc-C6hxh3th.js"),[],import.meta.url),"it-code-circle":()=>t(()=>import("./it-code-circle-D5WVuEn4-BdHBC8ZA.js"),[],import.meta.url),"it-collapse":()=>t(()=>import("./it-collapse-DedzUAzu-3iV-i6TK.js"),[],import.meta.url),"it-comment":()=>t(()=>import("./it-comment-CFNsPq26-B_TrAPR0.js"),[],import.meta.url),"it-copy":()=>t(()=>import("./it-copy-BKoAUYMx-_Y8qcscW.js"),[],import.meta.url),"it-delete":()=>t(()=>import("./it-delete-BRl41-_G-BxEVgQyK.js"),[],import.meta.url),"it-designers-italia":()=>t(()=>import("./it-designers-italia-C4NEUsVF-BbY9CBko.js"),[],import.meta.url),"it-download":()=>t(()=>import("./it-download-CVUEI0yr-BJWXUVVp.js"),[],import.meta.url),"it-error":()=>t(()=>import("./it-error-DxMZc_6a-DSj4dpJa.js"),[],import.meta.url),"it-exchange-circle":()=>t(()=>import("./it-exchange-circle-K9BZ9x3--rX2qpM9c.js"),[],import.meta.url),"it-expand":()=>t(()=>import("./it-expand-BOgVeR4w-Bp20XcGV.js"),[],import.meta.url),"it-external-link":()=>t(()=>import("./it-external-link-EQbtOfEU-Bx6RhGKE.js"),[],import.meta.url),"it-facebook-square":()=>t(()=>import("./it-facebook-square-DzG2jfFe-BG99kGkN.js"),[],import.meta.url),"it-facebook":()=>t(()=>import("./it-facebook-BWE4v4O9-BABRu6SQ.js"),[],import.meta.url),"it-figma-square":()=>t(()=>import("./it-figma-square-CbtavA_h-Se_LRfAW.js"),[],import.meta.url),"it-figma":()=>t(()=>import("./it-figma-ayNovoW6-bVHR4d9E.js"),[],import.meta.url),"it-file-audio":()=>t(()=>import("./it-file-audio-DfjfNE2c-D9btUnKJ.js"),[],import.meta.url),"it-file-compressed":()=>t(()=>import("./it-file-compressed-BdL256I7-DtnNvQ0k.js"),[],import.meta.url),"it-file-csv":()=>t(()=>import("./it-file-csv-B65pqfER-CdFIrvD4.js"),[],import.meta.url),"it-file-docx":()=>t(()=>import("./it-file-docx-zhJTBltS-stMM-Vyv.js"),[],import.meta.url),"it-file-image":()=>t(()=>import("./it-file-image-CR9vISp3-BcW3_8Jp.js"),[],import.meta.url),"it-file-json":()=>t(()=>import("./it-file-json-DP1chXDD--xRkSGxt.js"),[],import.meta.url),"it-file-odp":()=>t(()=>import("./it-file-odp-CMJkW8AU-DjxBItAx.js"),[],import.meta.url),"it-file-ods":()=>t(()=>import("./it-file-ods-CSXIpods-B94AQ22t.js"),[],import.meta.url),"it-file-odt":()=>t(()=>import("./it-file-odt-BCQi6KOY-CdvHqWa5.js"),[],import.meta.url),"it-file-pdf-ext":()=>t(()=>import("./it-file-pdf-ext-q7BV_sNG-cbAzZkRl.js"),[],import.meta.url),"it-file-pdf":()=>t(()=>import("./it-file-pdf-CJHLU35Y-Zw5Z_j1Y.js"),[],import.meta.url),"it-file-ppt":()=>t(()=>import("./it-file-ppt-Lt5D5W4Z-BylLyYZ4.js"),[],import.meta.url),"it-file-sheet":()=>t(()=>import("./it-file-sheet-BKnNyH-z-B4i6Ah7U.js"),[],import.meta.url),"it-file-signed":()=>t(()=>import("./it-file-signed-BRDmitPQ-CjlbVEM6.js"),[],import.meta.url),"it-file-slides":()=>t(()=>import("./it-file-slides-CF66Gxkw-CpVhFAgz.js"),[],import.meta.url),"it-file-txt":()=>t(()=>import("./it-file-txt-Bg66gff7-BKNS3K6o.js"),[],import.meta.url),"it-file-video":()=>t(()=>import("./it-file-video-DdQOSQKz-oRP8mfCn.js"),[],import.meta.url),"it-file-xlsx":()=>t(()=>import("./it-file-xlsx-DEESTwtq-eFIlHFDV.js"),[],import.meta.url),"it-file-xml":()=>t(()=>import("./it-file-xml-rpj0hTY6-DbUn3CKj.js"),[],import.meta.url),"it-file":()=>t(()=>import("./it-file-BxbypKZb-DE53fObR.js"),[],import.meta.url),"it-files":()=>t(()=>import("./it-files-CumaPxbC-DU3PIHdO.js"),[],import.meta.url),"it-flag":()=>t(()=>import("./it-flag-BBHqX3a7-JrYkY564.js"),[],import.meta.url),"it-flickr-square":()=>t(()=>import("./it-flickr-square-Bygoby8_-aaHmRNoH.js"),[],import.meta.url),"it-flickr":()=>t(()=>import("./it-flickr-0bB7B4XG-IE2WbFAw.js"),[],import.meta.url),"it-folder":()=>t(()=>import("./it-folder-CScH9ihQ-Dwkl51cI.js"),[],import.meta.url),"it-fullscreen":()=>t(()=>import("./it-fullscreen-BspUXrZa-Dh3J5s32.js"),[],import.meta.url),"it-funnel":()=>t(()=>import("./it-funnel-C2f_AIYS-C1vVYsdU.js"),[],import.meta.url),"it-github":()=>t(()=>import("./it-github-WW8XzWj3-DC56eyCd.js"),[],import.meta.url),"it-google":()=>t(()=>import("./it-google-G_PvkjBf-BcN-fJKw.js"),[],import.meta.url),"it-hearing":()=>t(()=>import("./it-hearing-COVVIjZc-3bPc1CVC.js"),[],import.meta.url),"it-help-circle":()=>t(()=>import("./it-help-circle-JafiAkJ_-BIwynsa6.js"),[],import.meta.url),"it-help":()=>t(()=>import("./it-help-Zh8IWIOf-DucJwsvv.js"),[],import.meta.url),"it-horn":()=>t(()=>import("./it-horn-47v7fbsN-Dw0PRDrY.js"),[],import.meta.url),"it-inbox":()=>t(()=>import("./it-inbox-BijAKZAa-BJnhLAga.js"),[],import.meta.url),"it-info-circle":()=>t(()=>import("./it-info-circle-CRgTvswq-uVeg7rq0.js"),[],import.meta.url),"it-instagram":()=>t(()=>import("./it-instagram-DIHoCYgS-BkWWwAvg.js"),[],import.meta.url),"it-key":()=>t(()=>import("./it-key-ChlMIByl-C4tf4b6i.js"),[],import.meta.url),"it-less-circle":()=>t(()=>import("./it-less-circle-B-1frsy8-BeAK4pBU.js"),[],import.meta.url),"it-link":()=>t(()=>import("./it-link-Cx0Ak5EZ-BBQPSmci.js"),[],import.meta.url),"it-linkedin-square":()=>t(()=>import("./it-linkedin-square-DNi1kKUs-DShojCP2.js"),[],import.meta.url),"it-linkedin":()=>t(()=>import("./it-linkedin-DlE9mQU5-DFQAmJOl.js"),[],import.meta.url),"it-list":()=>t(()=>import("./it-list-pNuIE6eo-DibMWziu.js"),[],import.meta.url),"it-lock":()=>t(()=>import("./it-lock-yOq-wwxl-DrGSeKdE.js"),[],import.meta.url),"it-locked":()=>t(()=>import("./it-locked-Cy2s-CSD-ClwBogg_.js"),[],import.meta.url),"it-logout":()=>t(()=>import("./it-logout-CY7_FEMN-Br2mi-TD.js"),[],import.meta.url),"it-mail-open":()=>t(()=>import("./it-mail-open-Ch8H4FPa-BnPhgJ8Y.js"),[],import.meta.url),"it-mail":()=>t(()=>import("./it-mail-5j30YG84-DvgCNrXJ.js"),[],import.meta.url),"it-map-marker-circle":()=>t(()=>import("./it-map-marker-circle-BBB_9zOZ-DJQhcR6U.js"),[],import.meta.url),"it-map-marker-minus":()=>t(()=>import("./it-map-marker-minus-iL3qC8X4-CKBA8ato.js"),[],import.meta.url),"it-map-marker-plus":()=>t(()=>import("./it-map-marker-plus-0HvYHiyj-DMj-Vo1I.js"),[],import.meta.url),"it-map-marker":()=>t(()=>import("./it-map-marker-Ce2WHDc5-DXKj1F-p.js"),[],import.meta.url),"it-mastodon-square":()=>t(()=>import("./it-mastodon-square-D4jUZcO1-CExTd1Mi.js"),[],import.meta.url),"it-mastodon":()=>t(()=>import("./it-mastodon-u9vJ54XP-DBM_FfCB.js"),[],import.meta.url),"it-maximize-alt":()=>t(()=>import("./it-maximize-alt-B7r2308X-iC8Edkp9.js"),[],import.meta.url),"it-maximize":()=>t(()=>import("./it-maximize-CcyYylk6-CBZdG-kB.js"),[],import.meta.url),"it-medium-square":()=>t(()=>import("./it-medium-square-DNjf0CIV-W9c7rVNz.js"),[],import.meta.url),"it-medium":()=>t(()=>import("./it-medium-CBQiq3iZ-DyipFuJj.js"),[],import.meta.url),"it-minimize":()=>t(()=>import("./it-minimize-BC87wdS6-DoEwPlAM.js"),[],import.meta.url),"it-minus-circle":()=>t(()=>import("./it-minus-circle-Bx9sZMXD-Bpi0h9OZ.js"),[],import.meta.url),"it-minus":()=>t(()=>import("./it-minus-1sHTR5AZ-DlsmPTi3.js"),[],import.meta.url),"it-moodle-square":()=>t(()=>import("./it-moodle-square-DhnTNCIv-Bc9s4G4i.js"),[],import.meta.url),"it-moodle":()=>t(()=>import("./it-moodle-BTeQpxDV-CyoZ0GQO.js"),[],import.meta.url),"it-more-actions":()=>t(()=>import("./it-more-actions-hFPfNc6s-Ded4AXqR.js"),[],import.meta.url),"it-more-items":()=>t(()=>import("./it-more-items-CbPqsuSY-CHbcQs7x.js"),[],import.meta.url),"it-note":()=>t(()=>import("./it-note-D8SqkWrQ-gIEymSxq.js"),[],import.meta.url),"it-open-source":()=>t(()=>import("./it-open-source-BiMRfYSR-bZSNyR0M.js"),[],import.meta.url),"it-pa":()=>t(()=>import("./it-pa-CCcbo1ZV-D8ls4A-W.js"),[],import.meta.url),"it-password-invisible":()=>t(()=>import("./it-password-invisible-4wTCzXFL-KCTtzy8Q.js"),[],import.meta.url),"it-password-visible":()=>t(()=>import("./it-password-visible-PDoUihUc-BBp5Z6CS.js"),[],import.meta.url),"it-pencil":()=>t(()=>import("./it-pencil-D5oaABq--ulO2VpPu.js"),[],import.meta.url),"it-piattaforme":()=>t(()=>import("./it-piattaforme-CgJB3YLa-D0ZIErIb.js"),[],import.meta.url),"it-pin":()=>t(()=>import("./it-pin-DfKX1now-BFfPijcY.js"),[],import.meta.url),"it-pinterest-square":()=>t(()=>import("./it-pinterest-square-CU5uyOE--D5C1KFsx.js"),[],import.meta.url),"it-pinterest":()=>t(()=>import("./it-pinterest-CzVyzVYr-Be6f0_mn.js"),[],import.meta.url),"it-plug":()=>t(()=>import("./it-plug-BMA_ZSK6-Bgpc08z7.js"),[],import.meta.url),"it-plus-circle":()=>t(()=>import("./it-plus-circle-cIx_LkOv-DYrFF3Ps.js"),[],import.meta.url),"it-plus":()=>t(()=>import("./it-plus-C0bEoXIO-CUBGpXzR.js"),[],import.meta.url),"it-presentation":()=>t(()=>import("./it-presentation-Bv2tmr0P-Ds-u3giN.js"),[],import.meta.url),"it-print":()=>t(()=>import("./it-print-fHC_jbNf-D_I-JIcb.js"),[],import.meta.url),"it-quora-square":()=>t(()=>import("./it-quora-square-1i1zt9IJ-0TLEmbNm.js"),[],import.meta.url),"it-quora":()=>t(()=>import("./it-quora-BMQ4xoD1-B_A3fYGi.js"),[],import.meta.url),"it-reddit-square":()=>t(()=>import("./it-reddit-square-DaPG0Mub-DzQ8zjdr.js"),[],import.meta.url),"it-reddit":()=>t(()=>import("./it-reddit-BpicjY6C-BcrQAw02.js"),[],import.meta.url),"it-refresh":()=>t(()=>import("./it-refresh-B4EmBigI-Di8dPhZi.js"),[],import.meta.url),"it-restore":()=>t(()=>import("./it-restore-6-7X2Qfu-ZSJ7hs8v.js"),[],import.meta.url),"it-rss-square":()=>t(()=>import("./it-rss-square-DDxWYzTB-CN5Q5kQk.js"),[],import.meta.url),"it-rss":()=>t(()=>import("./it-rss-CvtsNYf3-T8694byI.js"),[],import.meta.url),"it-search":()=>t(()=>import("./it-search-DalK3rlx-slLirWFc.js"),[],import.meta.url),"it-settings":()=>t(()=>import("./it-settings-13H0AbvP-pG2_vsNF.js"),[],import.meta.url),"it-share":()=>t(()=>import("./it-share-BLdy8bcU-BC5olIHB.js"),[],import.meta.url),"it-sign":()=>t(()=>import("./it-sign-DTz5eFiv-DGIgZQS-.js"),[],import.meta.url),"it-slack-square":()=>t(()=>import("./it-slack-square-CcrSJfaB-DNKSJryk.js"),[],import.meta.url),"it-slack":()=>t(()=>import("./it-slack-Bo5VXuy8-CHhv0Jpd.js"),[],import.meta.url),"it-snapchat-square":()=>t(()=>import("./it-snapchat-square-RELoHIXG-C5A8NPXl.js"),[],import.meta.url),"it-snapchat":()=>t(()=>import("./it-snapchat-DR2q7-eJ-BEIMNwCz.js"),[],import.meta.url),"it-software":()=>t(()=>import("./it-software-CvXTmJmV-ShvQDljj.js"),[],import.meta.url),"it-spotify":()=>t(()=>import("./it-spotify-rbBp6yUH-DiWKbGve.js"),[],import.meta.url),"it-stackexchange-square":()=>t(()=>import("./it-stackexchange-square-Dmkt_1eY-FKmHQfyv.js"),[],import.meta.url),"it-stackexchange":()=>t(()=>import("./it-stackexchange-BBgFNGzM-C8okTPsx.js"),[],import.meta.url),"it-stackoverflow-square":()=>t(()=>import("./it-stackoverflow-square-Dc63Kz24-CP6I2sNu.js"),[],import.meta.url),"it-stackoverflow":()=>t(()=>import("./it-stackoverflow-CuCI-bn1-B7r9IO1v.js"),[],import.meta.url),"it-star-full":()=>t(()=>import("./it-star-full-klirYUuR-Dm6Qw9qa.js"),[],import.meta.url),"it-star-outline":()=>t(()=>import("./it-star-outline-DVg7wfrN-ERruT5ff.js"),[],import.meta.url),"it-team-digitale":()=>t(()=>import("./it-team-digitale-5kDifKOv-DloplYLN.js"),[],import.meta.url),"it-telegram":()=>t(()=>import("./it-telegram-sJWN1tJ6-Dwwnsr-g.js"),[],import.meta.url),"it-telephone":()=>t(()=>import("./it-telephone-Z7Azcb5m-CKuGiPis.js"),[],import.meta.url),"it-threads-square":()=>t(()=>import("./it-threads-square-Bf702vNt-oJ2PQ2cO.js"),[],import.meta.url),"it-threads":()=>t(()=>import("./it-threads-ChqMOQN8-BOcYASFm.js"),[],import.meta.url),"it-tiktok-square":()=>t(()=>import("./it-tiktok-square-Bg380BDO-DPDLxCLB.js"),[],import.meta.url),"it-tiktok":()=>t(()=>import("./it-tiktok-C9pmFxx7-zOYB6UF0.js"),[],import.meta.url),"it-tool":()=>t(()=>import("./it-tool-CNElwkSY-CxcbNnFw.js"),[],import.meta.url),"it-twitter-square":()=>t(()=>import("./it-twitter-square-CAtpMN9W-DASIoEh_.js"),[],import.meta.url),"it-twitter":()=>t(()=>import("./it-twitter-DP7nO2uq-CgSGvUeC.js"),[],import.meta.url),"it-unlocked":()=>t(()=>import("./it-unlocked-CeTVcA9L-B2JTgdVP.js"),[],import.meta.url),"it-upload":()=>t(()=>import("./it-upload-DF9h0FfD-CO3xOZXu.js"),[],import.meta.url),"it-user":()=>t(()=>import("./it-user-DxvTXC8y-zAo5snyG.js"),[],import.meta.url),"it-video":()=>t(()=>import("./it-video-lLpTTp6k-DCF6CGxb.js"),[],import.meta.url),"it-vimeo-square":()=>t(()=>import("./it-vimeo-square-CJdj4meE-a3QYRIKv.js"),[],import.meta.url),"it-vimeo":()=>t(()=>import("./it-vimeo-BY4lsy3M-CQtwSzN7.js"),[],import.meta.url),"it-warning-circle":()=>t(()=>import("./it-warning-circle-fnlVt93l-Dh8Wkw_-.js"),[],import.meta.url),"it-warning":()=>t(()=>import("./it-warning-C7tNfcHA-BBJyehkE.js"),[],import.meta.url),"it-whatsapp-square":()=>t(()=>import("./it-whatsapp-square-BZFa1i__-CnNockpK.js"),[],import.meta.url),"it-whatsapp":()=>t(()=>import("./it-whatsapp-BmcvUOkQ-BpLFoZBc.js"),[],import.meta.url),"it-wifi":()=>t(()=>import("./it-wifi-B9w_AYy4-f_nZwCad.js"),[],import.meta.url),"it-youtube":()=>t(()=>import("./it-youtube-DCwiktms-DXNMghCj.js"),[],import.meta.url),"it-zoom-in":()=>t(()=>import("./it-zoom-in-DWHll7qe-DwzOZKE6.js"),[],import.meta.url),"it-zoom-out":()=>t(()=>import("./it-zoom-out-DVqgWM8m-BdTuTDXP.js"),[],import.meta.url)},G=a=>H[a];var Q=C`/***************************** 1 ****************************************/
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
.icon {
  width: var(--bs-icon-size-m);
  height: var(--bs-icon-size-m);
  fill: var(--bs-icon-default);
  vertical-align: middle;
}
.icon.icon-padded {
  margin: 8px;
}
.icon.icon-xs {
  width: var(--bs-icon-size-xs);
  height: var(--bs-icon-size-xs);
}
.icon.icon-xs.icon-padded {
  margin: 4px;
}
.icon.icon-sm {
  width: var(--bs-icon-size-s);
  height: var(--bs-icon-size-s);
}
.icon.icon-sm.icon-padded {
  margin: 6px;
}
.icon.icon-lg {
  width: var(--bs-icon-size-l);
  height: var(--bs-icon-size-l);
}
.icon.icon-lg.icon-padded {
  margin: 12px;
}
.icon.icon-xl {
  width: var(--bs-icon-size-xl);
  height: var(--bs-icon-size-xl);
}
.icon.icon-xl.icon-padded {
  margin: 16px;
}

.icon-primary {
  fill: var(--bs-icon-primary);
}

.icon-secondary {
  fill: var(--bs-icon-secondary);
}

.icon-success {
  fill: var(--bs-icon-success);
}

.icon-warning {
  fill: var(--bs-icon-warning);
}

.icon-danger {
  fill: var(--bs-icon-danger);
}

.icon-inverse {
  fill: var(--bs-icon-inverse);
}

.icon-light {
  fill: var(--bs-icon-inverse);
}

.icon-disabled {
  fill: var(--bs-icon-disabled);
}

:root {
  --bs-rounded-icon-size: var(--it-icon-size-s);
}

.rounded-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--bs-rounded-icon-size);
  height: var(--bs-rounded-icon-size);
  background-color: var(--bs-icon-inverse);
  border-radius: var(--bs-radius-circle);
}
.rounded-icon.rounded-primary {
  background-color: var(--bs-icon-primary);
}
.rounded-icon.rounded-secondary {
  background-color: var(--bs-icon-secondary);
}
.rounded-icon.rounded-success {
  background-color: var(--bs-icon-success);
}
.rounded-icon.rounded-warning {
  background-color: var(--bs-icon-warning);
}
.rounded-icon.rounded-danger {
  background-color: var(--bs-icon-danger);
}
.rounded-icon.rounded-inverse {
  background-color: var(--bs-icon-inverse);
}
.rounded-icon.rounded-light {
  background-color: var(--bs-icon-inverse);
}
.rounded-icon.rounded-disabled {
  background-color: var(--bs-icon-disabled);
}
.rounded-icon .icon {
  margin-right: 0;
}

.align-top {
  vertical-align: top !important;
}

.align-middle {
  vertical-align: middle !important;
}

.align-bottom {
  vertical-align: bottom !important;
}

.bg-primary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-secondary {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
}

.bg-success {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
}

.bg-info {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
}

.bg-warning {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
}

.bg-danger {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
}

.bg-light {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
}

.bg-dark {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
}

.bg-black {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
}

.bg-white {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
}

.bg-100 {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-100-rgb), var(--bs-bg-opacity)) !important;
}

.bg-200 {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-200-rgb), var(--bs-bg-opacity)) !important;
}

.bg-300 {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-300-rgb), var(--bs-bg-opacity)) !important;
}

.bg-400 {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-400-rgb), var(--bs-bg-opacity)) !important;
}

.bg-500 {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-500-rgb), var(--bs-bg-opacity)) !important;
}

.bg-600 {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-600-rgb), var(--bs-bg-opacity)) !important;
}

.bg-700 {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-700-rgb), var(--bs-bg-opacity)) !important;
}

.bg-800 {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-800-rgb), var(--bs-bg-opacity)) !important;
}

.bg-900 {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-900-rgb), var(--bs-bg-opacity)) !important;
}

.bg-body {
  --bs-bg-opacity: 1;
  background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;
}

.bg-transparent {
  --bs-bg-opacity: 1;
  background-color: transparent !important;
}

:host {
  display: inline-block;
}

.icon-white {
  fill: #fff !important;
}
.icon-white path {
  fill: #fff !important;
}`;let u=class extends P{constructor(){super(...arguments),this.align="middle",this.label="",this.padded=!1}async updated(i){if(i.has("name")&&this.name){const e=G(this.name);if(e){const r=(await e()).default;this.parseAndStoreSvg(r)}}i.has("src")&&this.src&&await this.loadSvgFromUrl(this.src),i.has("label")&&this.handleTitleId(),(i.has("label")||i.has("size")||i.has("color")||i.has("padded")||i.has("role")||i.has("align"))&&this.updateSvgAttributes()}handleTitleId(){this.label?this.titleId||(this.titleId=`icon-label-${crypto.randomUUID()}`):this.titleId=void 0}async loadSvgFromUrl(i){try{const e=await fetch(i);if(!e.ok)throw new Error(`Failed to load SVG from ${i} (status: ${e.status})`);const r=await e.text();this.parseAndStoreSvg(r)}catch{this.svgElement=void 0,this.announceSvgLoadError()}}announceSvgLoadError(){this.dispatchEvent(new Event("error",{bubbles:!1,composed:!1,cancelable:!1}))}parseAndStoreSvg(i){const o=new DOMParser().parseFromString(i,"image/svg+xml").documentElement;this.svgElement=o,this.updateSvgAttributes()}applySvgAttributes(i){i.removeAttribute("width"),i.removeAttribute("height");const e=this.updateClasses();if(i.setAttribute("class",e),i.setAttribute("part","icon"),this.label){if(i.removeAttribute("aria-hidden"),i.setAttribute("role","img"),i.removeAttribute("aria-labelledby"),i.querySelectorAll("title").forEach(r=>r.remove()),this.titleId){const r=document.createElementNS("http://www.w3.org/2000/svg","title");r.id=this.titleId,r.textContent=this.label,i.prepend(r),i.setAttribute("aria-labelledby",this.titleId)}}else i.setAttribute("aria-hidden","true"),i.setAttribute("role","presentation"),i.removeAttribute("aria-labelledby"),i.querySelectorAll("title").forEach(r=>r.remove())}updateSvgAttributes(){this.svgElement&&this.applySvgAttributes(this.svgElement)}updateClasses(){return["icon",this.size?`icon-${this.size}`:"",this.color?`icon-${this.color}`:"",this.align?`align-${this.align}`:"",this.padded?"icon-padded":""].filter(Boolean).join(" ").trim()}handleSlotChange(){const e=this.slotEl.assignedNodes({flatten:!0}).find(r=>r.nodeType===Node.ELEMENT_NODE&&r.tagName.toLowerCase()==="svg");e&&this.applySvgAttributes(e)}render(){return q`
      <slot @slotchange=${this.handleSlotChange}>${this.svgElement?x`${this.svgElement}`:S}</slot>
    `}};u.styles=Q;n([l({type:String,reflect:!0}),m("design:type",Object)],u.prototype,"size",void 0);n([l({type:String}),m("design:type",String)],u.prototype,"name",void 0);n([l({type:String,reflect:!0}),m("design:type",String)],u.prototype,"color",void 0);n([l({type:String,reflect:!0}),m("design:type",String)],u.prototype,"align",void 0);n([l({type:String,reflect:!0}),m("design:type",Object)],u.prototype,"label",void 0);n([l({type:Boolean,reflect:!0}),m("design:type",Object)],u.prototype,"padded",void 0);n([l({type:String,reflect:!0}),m("design:type",String)],u.prototype,"src",void 0);n([V(),m("design:type",HTMLElement)],u.prototype,"svgElement",void 0);n([L("slot"),m("design:type",HTMLSlotElement)],u.prototype,"slotEl",void 0);u=n([M("it-icon")],u);
