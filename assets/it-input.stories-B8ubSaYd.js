import{x as s,a as Oe}from"./lit-element-DvQWNfDj.js";import{r as Me,e as De,n as u,o as d}from"./query-Bx2OwlQ7.js";import"./it-icon-FbjACWbu.js";import"./it-button-BjN_fu7P.js";import"./it-input-CUvaNISs.js";import"./iframe-Bt5dub1B.js";import"./directive-CvdRHFdJ.js";import"./directive-helpers-Bd0d1ZrF.js";const je={name:"Metodi e proprietà accessibili via js",tags:["!dev"],render:()=>s`<div class="hide-preview"></div>`,parameters:{viewMode:"docs",docs:{description:{story:`Il componente espone delle proprietà e dei metodi pubblici, utili per eventuali interazioni via js.

\`\`\`html
<it-input ... id="myinput"></it-input>
\`\`\`

\`\`\`js
const myInput = document.getElementById("myInput");
const validity = myInput.validity;
const validationMessage = myInput.validationMessage;

const form = myInput.getForm();
myInput.checkValidity();
myInput.reportValidity();
myInput.setCustomValidity("Messaggio di errore");
\`\`\`

<br/>
<h4>Proprietà</h4>
- \`validity\`: Ritorna l'oggetto di validazione effettuata dal browser.
- \`validationMessage\`: ritorna il messaggio di errore in caso di validazione fallita.

<h4>Metodi</h4>
- \`getForm()\`: ritorna l'elemento del dom corrispondente alla form di riferimento dell'input.
- \`checkValidity()\`: triggera la validazione nativa del browser sul campo, e restituisce true o false a seconda che l'input sia valido o meno.
- \`reportValidity()\`: controlla se l'elemento è valido secondo le regole di validazione del browser. Se non è valido, mostra un messaggio di errore (tooltip nativo del browser) e restituisce false. Se è valido, restituisce true.
- \`setCustomValidity('')\`: permette di impostare un messaggio di errore personalizzato passato come parametro. Se il messaggio non è vuoto, rende invalido l'elemento. Se invece il messaggio è vuoto (''), rende valido l'elemento.
      `}}}};function Te(i){var e,t,n="";if(typeof i=="string"||typeof i=="number")n+=i;else if(typeof i=="object")if(Array.isArray(i)){var a=i.length;for(e=0;e<a;e++)i[e]&&(t=Te(i[e]))&&(n&&(n+=" "),n+=t)}else for(t in i)i[t]&&(n&&(n+=" "),n+=t);return n}function _e(){for(var i,e,t=0,n="",a=arguments.length;t<a;t++)(i=arguments[t])&&(e=Te(i))&&(n&&(n+=" "),n+=e);return n}const D=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:f}=window;let v,j="ltr",_="en";const Pe=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function Ae(){Pe&&(j=document.documentElement.dir||"ltr",_=document.documentElement.lang||navigator.language),[...D.keys()].forEach(i=>{const e=i;typeof e.requestUpdate=="function"&&e.requestUpdate()})}if(Pe){const i=new MutationObserver(Ae);j=document.documentElement.dir||"ltr",_=document.documentElement.lang||navigator.language,i.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Le(...i){i.forEach(e=>{const t=e.$code.toLowerCase();f.has(t)?f.set(t,{...f.get(t),...e}):f.set(t,e),v||(v=e)}),Ae()}window.registerTranslation=Le;class Ne{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){D.add(this.host)}hostDisconnected(){D.delete(this.host)}dir(){return`${this.host.dir||j}`.toLowerCase()}lang(){return`${this.host.lang||_}`.toLowerCase()}getTranslationData(e){var g;const t=new Intl.Locale(e.replace(/_/g,"-")),n=t==null?void 0:t.language.toLowerCase(),a=((g=t==null?void 0:t.region)==null?void 0:g.toLowerCase())??"",o=f.get(`${n}-${a}`),l=f.get(n);return{locale:t,language:n,region:a,primary:o,secondary:l}}exists(e,t){const{primary:n,secondary:a}=this.getTranslationData(t.lang??this.lang()),o={includeFallback:!1,...t};return!!(n&&n[e]||a&&a[e]||o.includeFallback&&v&&v[e])}term(e,...t){const{primary:n,secondary:a}=this.getTranslationData(this.lang());let o;if(n&&n[e])o=n[e];else if(a&&a[e])o=a[e];else if(v&&v[e])o=v[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof o=="function"?o(...t):o}date(e,t){const n=new Date(e);return new Intl.DateTimeFormat(this.lang(),t).format(n)}number(e,t){const n=Number(e);return Number.isNaN(n)?"":new Intl.NumberFormat(this.lang(),t).format(n)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}}const Re=i=>class extends i{constructor(){super(...arguments),this.localize=new Ne(this)}get $localize(){return this.localize}$t(e){return this.localize.term(e)}$d(e,t){return this.localize.date(e,t)}$n(e,t){return this.localize.number(e,t)}};class ke{constructor(e){this.tag=e}format(e,t){return[`[${this.tag}] ${t}`]}warn(e){console.warn(...this.format("warn",e))}error(e){console.error(...this.format("error",e))}info(e){console.info(...this.format("info",e))}}class Ue extends Oe{constructor(){super(),this.composeClass=_e,this.logger=new ke(this.tagName.toLowerCase())}get _ariaAttributes(){const e={};for(const t of this.getAttributeNames())t==="it-role"?e.role=this.getAttribute(t):t.startsWith("it-aria-")&&(e[t.replace(/^it-/,"")]=this.getAttribute(t));return e}generateId(e){return`${e}-${Math.random().toString(36).slice(2)}`}addFocus(e){}getActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}connectedCallback(){var t;super.connectedCallback();const e=((t=this.id)==null?void 0:t.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(e)}}const Be=Re(Ue);function p(i,e,t,n){var a=arguments.length,o=a<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(i,e,t,n);else for(var g=i.length-1;g>=0;g--)(l=i[g])&&(o=(a<3?l(o):a>3?l(e,t,o):l(e,t))||o);return a>3&&o&&Object.defineProperty(e,t,o),o}function m(i,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(i,e)}const b=new WeakMap,y=new WeakMap,z=new WeakMap,O=new WeakSet,x=new WeakMap;class He{constructor(e,t){this.handleFormData=n=>{const a=this.options.disabled(this.host),o=this.options.name(this.host),l=this.options.value(this.host),g=this.host.tagName.toLowerCase()==="it-button";this.host.isConnected&&!a&&!g&&typeof o=="string"&&o.length>0&&typeof l<"u"&&(Array.isArray(l)?l.forEach(Fe=>{n.formData.append(o,Fe.toString())}):n.formData.append(o,l.toString()))},this.handleFormSubmit=n=>{var l;const a=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&((l=b.get(this.form))==null||l.forEach(g=>{this.setUserInteracted(g,!0)})),this.form&&!this.form.noValidate&&!a&&!o(this.host)&&n.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),x.set(this.host,[])},this.handleInteraction=n=>{const a=x.get(this.host);a.includes(n.type)||a.push(n.type),a.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const a of n)if(typeof a.checkValidity=="function"&&!a.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const n=this.form.querySelectorAll("*");for(const a of n)if(typeof a.reportValidity=="function"&&!a.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options={form:n=>{const a=n.form;if(a){const l=n.getRootNode().querySelector(`#${a}`);if(l)return l}return n.closest("form")},name:n=>n.name,value:n=>n.value,disabled:n=>n.disabled??!1,reportValidity:n=>typeof n.reportValidity=="function"?n.reportValidity():!0,checkValidity:n=>typeof n.checkValidity=="function"?n.checkValidity():!0,setValue:(n,a)=>{n.value=a},assumeInteractionOn:["it-input"],...t}}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),x.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),x.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,b.has(this.form)?b.get(this.form).add(this.host):b.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),y.has(this.form)||(y.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),z.has(this.form)||(z.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=b.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),y.has(this.form)&&(this.form.reportValidity=y.get(this.form),y.delete(this.form)),z.has(this.form)&&(this.form.checkValidity=z.get(this.form),z.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?O.add(e):O.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(a=>{t.hasAttribute(a)&&n.setAttribute(a,t.getAttribute(a))})),this.form.append(n),n.click(),n.remove()}}getForm(){return this.form??null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=!!O.has(t),a=!!t.required;t.toggleAttribute("data-required",a),t.toggleAttribute("data-optional",!a),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}}const Ge={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};Le(Ge);class c extends Be{constructor(){super(...arguments),this.formControlController=new He(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var e;return(e=this.inputElement)==null?void 0:e.validity}checkValidity(){var t;return((t=this.inputElement)==null?void 0:t.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.inputElement.checkValidity();return this.handleValidationMessages(),e}setCustomValidity(e){this.inputElement.setCustomValidity(e),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(e){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(e){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(e){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(e){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const e=this.inputElement.validity;e.valueMissing?this.setCustomValidity(this.$t("validityRequired")):e.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):e.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):e.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):e.typeMismatch||e.rangeUnderflow||e.rangeOverflow||e.stepMismatch||e.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}_handleChange(e){const t=e.target;let n;if(t instanceof HTMLInputElement)switch(t.type){case"checkbox":case"radio":n=t.checked;break;case"file":n=t.files;break;default:n=t.value}else t instanceof HTMLSelectElement&&t.multiple?n=Array.from(t.selectedOptions).map(a=>a.value):n=t.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:n,el:t},bubbles:!0,composed:!0}))}updated(e){var t;(t=super.updated)==null||t.call(this,e),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}p([Me(),m("design:type",Object)],c.prototype,"_touched",void 0);p([De(".it-form__control"),m("design:type",HTMLInputElement)],c.prototype,"inputElement",void 0);p([u({type:String,reflect:!0}),m("design:type",Object)],c.prototype,"name",void 0);p([u({reflect:!0}),m("design:type",Object)],c.prototype,"value",void 0);p([u({type:Boolean,reflect:!0}),m("design:type",Object)],c.prototype,"disabled",void 0);p([u({reflect:!0,type:String}),m("design:type",Object)],c.prototype,"form",void 0);p([u({type:Boolean,reflect:!0,attribute:"custom-validation"}),m("design:type",Object)],c.prototype,"customValidation",void 0);p([u({attribute:"validity-message",reflect:!0}),m("design:type",String)],c.prototype,"validationText",void 0);p([u(),m("design:type",String)],c.prototype,"pattern",void 0);p([u(),m("design:type",Object)],c.prototype,"min",void 0);p([u(),m("design:type",Object)],c.prototype,"max",void 0);p([u(),m("design:type",Object)],c.prototype,"step",void 0);p([u({type:Number}),m("design:type",Object)],c.prototype,"minlength",void 0);p([u({type:Number}),m("design:type",Object)],c.prototype,"maxlength",void 0);p([u({type:Boolean,reflect:!0}),m("design:type",Object)],c.prototype,"required",void 0);p([Me(),m("design:type",Object)],c.prototype,"validationMessage",void 0);const We=["text","email","number","tel","time","password","textarea"],Qe=["sm",void 0,"lg"],Je={$code:"it",$name:"Italiano",$dir:"ltr",showHidePassword:"Mostra/Nascondi Password.",shortPass:"Password troppo breve.",badPass:"Password debole.",goodPass:"Password abbastanza sicura.",strongPass:"Password sicura.",ariaLabelPasswordMeter:"Robustezza della password",passwordSuggestionsLabel:"Suggerimenti per una buona password:",passwordSuggestionLength:"Almeno {minLength} caratteri.",passwordSuggestionUppercase:"Una o più maiuscole.",passwordSuggestionLowercase:"Una o più minuscole.",passwordSuggestionNumber:"Uno o più numeri.",passwordSuggestionSpecial:"Uno o più caratteri speciali.",passwordSuggestionFollowed:"suggerimenti seguiti",passwordSuggestionFollowedPlural:"suggerimenti seguiti",passwordSuggestionOf:"di",passwordSuggestionMetLabel:"Soddisfatto:"};var N=Object.freeze,Ye=Object.defineProperty,Ze=(i,e)=>N(Ye(i,"raw",{value:N(i.slice())})),R;const r=i=>s`<it-input
    id="${d(i.id||void 0)}"
    label="${d(i.label||void 0)}"
    type="${d(i.type||void 0)}"
    name="${d(i.name||void 0)}"
    value="${d(i.value||void 0)}"
    ?disabled="${i.disabled}"
    form="${d(i.form||void 0)}"
    ?custom-validation="${i.customValidation}"
    validity-message="${d(i.validityMessage||void 0)}"
    pattern="${d(i.pattern||void 0)}"
    min="${d(i.min||void 0)}"
    max="${d(i.max||void 0)}"
    step="${d(i.step||void 0)}"
    minlength="${d(i.minlength)||void 0}"
    maxlength="${d(i.maxlength)||void 0}"
    ?required="${i.required}"
    ?readonly="${i.readonly}"
    ?plaintext="${i.plaintext}"
    placeholder="${d(i.placeholder||void 0)}"
    support-text="${d(i.supportText||void 0)}"
    ?label-hidden="${i.labelHidden}"
    size="${d(i.size||void 0)}"
    ?adaptive="${i.adaptive}"
    ?strength-meter="${i.strengthMeter}"
    ?suggestions="${i.suggestions}"
    >${d(i.children||void 0)}</it-input
  >`,h={title:"Componenti/Form/Input",tags:["autodocs"],component:"it-input",args:{id:"",label:"Nome",type:"text",name:"nome",value:"",disabled:!1,form:"",customValidation:!1,validityMessage:"",pattern:void 0,min:void 0,max:void 0,step:void 0,minlength:void 0,maxlength:void 0,required:!1,readonly:!1,plaintext:!1,placeholder:"",supportText:"",labelHidden:!1,size:void 0,adaptive:!1,strengthMeter:!1,suggestions:!1},argTypes:{id:{control:"text",description:"ID del campo"},label:{control:"text",description:"Etichetta del campo"},type:{control:"select",options:We,table:{defaultValue:{summary:"text"}}},name:{control:"text"},value:{control:"text",description:"Valore del campo"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},form:{control:"text",description:"ID html del form a cui è associato il campo, se il campo non si trova all'interno di una form "},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},pattern:{control:"text",description:"Pattern di validazione del campo"},min:{control:"text",description:"Valore minimo consentito per un campo di tipo numerico o di tipo data"},max:{control:"text",description:"Valore massimo consentito per un campo di tipo numerico o di tipo data"},step:{control:"number",description:"Incremento per ogni step (tramite i pulsanti +/-) nel caso di input di tipo numerico o di tipo data"},minlength:{type:"number",description:"Lunghezza minima del valore da inserire. Usato anche per validare la robustezza della password",table:{defaultValue:{summary:'undefined. Se type="password": 8'}}},maxlength:{type:"number",description:"Lunghezza massima del valore da inserire."},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readonly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},plaintext:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se il campo è readonly, con l'attributo 'plaintext' il campo assume l'aspetto di testo normalizzato."},placeholder:{control:"text",description:"Testo segnaposto"},supportText:{name:"support-text",control:"text",description:"Testo di supporto"},labelHidden:{name:"label-hidden",control:"boolean",type:"boolean",description:"Se si vuole nascondere la label. Risulterà comunque accessibile per i lettori di schermo.",table:{defaultValue:{summary:"false"}}},size:{control:"select",options:Qe,description:"Dimensione del campo: 'sm' | (stringa vuota) | 'lg' ",table:{defaultValue:{summary:void 0}}},adaptive:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:'Se il campo è `type="number"`, con l\'attributo `adaptive` il campo assume adatta la sua larghezza al contenuto'},strengthMeter:{name:"strength-meter",control:"boolean",type:"boolean",description:"Se si vuole mostrare o meno il misuratore di robustezza della password nel caso di type='password'",table:{defaultValue:{summary:"false"}}},suggestions:{name:"suggestions",control:"boolean",type:"boolean",description:"Se si vogliono mostrare i suggerimenti per l'insderimento di una password sicura.",table:{defaultValue:{summary:"false"}}}},parameters:{docs:{description:{component:`
<Description>Input accessibile e responsivo.</Description>

Per il corretto funzionamento degli elementi di tipo \`<it-input>\` è di fondamentale importanza l’utilizzo uno degli appositi attributi \`type\` (ad esempio, "email" per l’inserimento di indirizzi email o "number" per informazioni numeriche), in modo da sfruttare i controlli nativi dei browser più recenti come la verifica dell’email, l’utilizzo di metodo di input numerico ed altro.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Tutti gli attributi \`aria-*\` passati a \`<it-input>\` vengono applicati all'input generato.
</p></div></div>
`}}}},w={...h,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:i=>s`${r({...i,type:"text",label:"Campo di testo",name:"testo",id:"exampleInputText"})}
    ${r({...i,type:"email",label:"Campo email",name:"email",id:"exampleInputEmail"})}
    ${r({...i,type:"number",label:"Campo numerico",name:"number",id:"exampleInputNumber"})}
    ${r({...i,type:"tel",label:"Campo telefonico",name:"telefono",id:"exampleInputTel"})}
    ${r({...i,type:"time",label:"Campo orario",name:"orario",id:"exampleInputTime"})}`},C={...h,name:"Testo segnaposto",args:{type:"text",placeholder:"Testo segnaposto",label:"Etichetta",name:"placeholder-example",id:"placeholder-example"},parameters:{docs:{description:{story:"\nÈ possibile abbinare al componente `<it-input>` un testo segnaposto (placeholder) per fornire indicazioni sul tipo di contenuto atteso. Questo testo non sostituisce l’etichetta, ma fornisce informazioni aggiuntive.\n"}}},render:i=>s`
    ${r({...i})}
  `},E={...h,name:"Testo di supporto",args:{type:"text",label:"Etichetta",placeholder:"Testo segnaposto",name:"supportText-example",id:"supportText-example",supportText:"Testo di supporto"},parameters:{docs:{description:{story:"In caso di necessità, è anche possibile utilizzare un ulteriore contenuto testuale sotto il campo di testo, indicando nell'attributo `support-text` il testo da visualizzare."}}},render:i=>s`
    ${r({...i})}
  `},I={...h,name:"Etichetta nascosta",args:{placeholder:"Cerca...",label:"Cerca nel sito",labelHidden:!0},parameters:{docs:{description:{story:"Se si vuole nascondere l'etichetta, come ad esempio nei campi di ricerca, è sufficiente passare l'attributo `label-hidden`."}}},render:i=>s`
    ${r({...i})}
  `},$={...h,name:"Icone o pulsanti",args:{placeholder:"Icone o pulsanti",type:"text",label:"Campo con icona",name:"field-icon-example",id:"field-icon-example",supportText:"Testo di supporto"},parameters:{docs:{description:{story:'<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità delle icone</span></div><p>Nel caso in cui l’icona è semanticamente rilevante e non spiegata dal testo che la segue, occorre passare al componente `<it-icon>` l\'attributo `label` che ne spieghi il significato (nel formato `<it-icon .... label="Significato dell\'icona"/>`)</p></div></div>'}}},render:i=>s`
    ${r({...i,children:s`<it-icon name="it-pencil" slot="prepend" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
  `},S={...h,parameters:{docs:{description:{story:"L'input di base ha una dimensione media che non necessita di alcuna classe aggiuntiva.\n\nPer modificare questa dimensione, è possiible utilizzare l'attributo `size` il cui valore può essere `sm` oppure `lg`.\n\nPer modificare invece la dimensione dell’icona, è possibile utilizzare l'attributo `size` sull'icona in questo modo:\n<table>\n<thead>\n  <tr><th>Dimensione input</th><th>Attributo size (di it-input)</th><th>Dimensione icona</th></tr>\n</thead>\n<tbody>\n  <tr><td>Grande</td><td>`lg`</td><td>`md`</td></tr>\n  <tr><td>Base (default)</td><td></td><td>`sm`</td></tr>\n  <tr><td>Piccola</td><td>`sm`</td><td>`xs`</td></tr>\n</tbody>\n</table>\n"}}},args:{type:"text",placeholder:"Testo segnaposto"},render:i=>s`
    ${r({...i,label:"Campo di dimensione grande",name:"field-big-example",id:"field-big-example",size:"lg",children:s`<it-icon name="it-pencil" slot="prepend" size="md"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
    ${r({...i,label:"Campo di dimensione base",name:"field-sizebase-example",id:"field-sizebase-example",placeholder:"Testo segnaposto",children:s`<it-icon name="it-pencil" slot="prepend" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
    ${r({...i,label:"Campo di dimensione piccola",name:"field-small-example",id:"field-small-example",size:"sm",children:s`<it-icon name="it-pencil" slot="prepend" size="xs"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
  `},V={...h,parameters:{docs:{description:{story:"Aggiungi l’attributo `disabled` ad un `<it-input>` per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti."}}},args:{type:"text",label:"Campo disabilitato",name:"field-disabled-example",id:"field-disabled-example",disabled:!0},render:i=>s`
    ${r({...i})}
  `},q={...h,parameters:{docs:{description:{story:"Aggiungi l’attributo `readonly` ad un `<it-input>` per impedire la modifica del valore contenuto.\n<br/><br/><h4>Readonly normalizzato</h4>Se per qualche motivo vuoi avere gli elementi input readonly nella forma stilizzata come testo, aggiungi l'attributo `plaintext` a `<it-input>`."}}},args:{type:"text",readonly:!0,value:"Contenuto in sola lettura"},render:i=>s`
    ${r({...i,label:"Campo readonly",name:"field-readonly-example",id:"field-readonly-example"})}
    ${r({...i,label:"Campo readonly normalizzato come plaintext",name:"field-readonlyplaintext-example",id:"field-readonlyplaintext-example",plaintext:!0})}
  `},M={...h,parameters:{docs:{description:{story:'Per semplificare l’inserimento della password, il componente `<it-input>` di tipo password include un pulsante che mostra i caratteri digitati.\n        È inoltre possibile aggiungere un testo di supporto che aiuti nella compilazione, attraverso l’attributo `support-text`.\n        <br/><br/>\n        <h4>Misuratore sicurezza e suggerimenti</h4>\nNel caso di un campo per la scelta di una nuova password, è possibile abbinare controlli per segnalare quanto la password che si sta inserendo segua alcuni suggerimenti di sicurezza, come la lunghezza minima o l’uso di caratteri speciali, attraverso gli attributi `strength-meter="true"` e `minlength` per modificare la lunghezza minima richiesta per la password.\n\nInoltre, è possibile restituire all’utente una lista dei suggerimenti, con indicati quelli che sono stati soddisfatti, attraverso l’attributo `suggestions="true"`.\n'}}},args:{type:"password",label:"Campo password",supportText:"Inserisci almeno 8 caratteri e alcuni caratteri speciali.",minlength:8},render:i=>s`
    ${r({...i,name:"field-password-example",id:"field-password-example"})}
    ${r({...i,name:"field-password-strength-example",id:"field-password-strength-example",strengthMeter:!0,suggestions:!0})}
  `},T={...h,name:"Area di testo",parameters:{docs:{description:{story:'Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni), è bene utilizzare un elemento `<it-input>` con `type="textarea"`.'}}},args:{type:"textarea",label:"Area di testo",name:"textarea-example",id:"textarea-example",placeholder:"Testo segnaposto"},render:i=>s`
    ${r({...i})}
  `},P={...h,name:"Validazione e gestione degli errori",parameters:{docs:{description:{story:"Se non è stata impostata la validazione custom tramite l'attributo `custom-validation`, e sono stati impostati uno di questi attributi <ul><li>`required`</li><li>`pattern`</li><li>`min`</li><li>`max`</li><li>`step`</li><li>`minlength`</li><li>`maxlength`</li></ul> viene effettuata una validazione interna utilizzando la validazione nativa del browser.\n <br/><br/><h4>Personalizzazione dei messaggi di errore</h4>E' possibile personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione):\n        <ul><li>`validityRequired`: messaggio che viene mostrato quando il campo è required e non è compilato</li>\n        <li>`validityPattern`: messaggio che viene mostrato quando il campo non rispetta il pattern indicato</li>\n        <li>`validityMinlength`: messaggio che viene mostrato quando la lunghezza del valore del campo è troppo corta rispetto al valore passatto nell'attributo `min-length`</li>\n         <li>`validityMaxlength`: messaggio che viene mostrato quando la lunghezza del valore del campo è troppo lunga rispetto al valore passatto nell'attributo `max-length`</li>\n      </ul>\n      Per gli altri errori di validazione non indicati, verranno mostrati i messsaggi di errore nativi del browser.\n      <h4>Validazione esterna (validazione custom)</h4>\n        E' inoltre possibile validare il campo esternamente (via js ad esempio, o lato server), impostando l' attributo `custom-validation=\"true\"`. In questo modo la validazione di default del browser effettuata internamente al componente è disabilitata.\n        <br/><br/><h5>Campo invalido</h5>Nel caso il campo non sia valido, è necessario invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo `validity-message=\"Messaggio di errore\"`.\n        <br/><br/><h5>Campo valido</h5>Per riportare il campo ad uno stato 'valido', è sufficiente impostare il messaggio di errore a vuoto: `validity-message=\"\"`."}}},args:{type:"text",placeholder:"Testo segnaposto"},render:i=>s`
    ${r({...i,label:"Campo obbligatorio",name:"required-example",id:"required-example",required:!0})}
    ${r({...i,label:"Validazione esterna",name:"external-validation-example",id:"external-validation-example",validityMessage:"Questo campo è obbligatorio!!!",customValidation:!0,required:void 0})}
  `},A={...h,name:"Gestione degli eventi",parameters:{docs:{description:{story:"E' possibile gestire gli eventi di `it-input`, `it-blur`, `it-change`, `it-focus`, `it-click` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.\n        <br/><br/>\n        È sufficiente aggiungere un event listener al componente `<it-input>` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di input, è possibile utilizzare il seguente codice:\n\n```js\ndocument.querySelector('it-input#event-input-example').addEventListener('it-input', (event) => {\n  console.log('Input event:', event);\n  alert('Input event);\n});\n```\n\nIl componente, emette anche un evento di tipo `it-input-ready` quando l'input è pronto e caricato nel DOM:\n\n```js\ndocument.querySelector('it-input#event-input-example').addEventListener('it-input-ready', (event) => {\n  console.log('Input ready:', event);\n});\n```\n      "}}},args:{type:"text",label:"Prova evento di input",name:"event-input-example",id:"event-input-example",placeholder:"Testo segnaposto"},render:i=>s(R||(R=Ze([`
    <script>
      document.querySelector('it-input#event-input-example').addEventListener('it-input', (event) => {
        console.log('Input event:', event);
        alert('Input event');
      });
      document.querySelector('it-input#event-input-example').addEventListener('it-input-ready', (event) => {
        console.log('Input ready:', event);
      });
    <\/script>
    `,`
  `])),r({...i}))},L={...je,tags:["!dev"]},F={name:"i18n",tags:["!dev"],render:()=>s`<div class="hide-preview"></div>`,parameters:{viewMode:"docs",docs:{description:{story:`
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = {
  ${JSON.stringify(Je).replaceAll('{"','"').replaceAll('",',`",
	`).replaceAll('"}','"')}
}
\`\`\`
`}}}};var k,U,B;w.parameters={...w.parameters,docs:{...(k=w.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
    ...params,
    type: 'text',
    label: 'Campo di testo',
    name: 'testo',
    id: 'exampleInputText'
  })}
    \${renderComponent({
    ...params,
    type: 'email',
    label: 'Campo email',
    name: 'email',
    id: 'exampleInputEmail'
  })}
    \${renderComponent({
    ...params,
    type: 'number',
    label: 'Campo numerico',
    name: 'number',
    id: 'exampleInputNumber'
  })}
    \${renderComponent({
    ...params,
    type: 'tel',
    label: 'Campo telefonico',
    name: 'telefono',
    id: 'exampleInputTel'
  })}
    \${renderComponent({
    ...params,
    type: 'time',
    label: 'Campo orario',
    name: 'orario',
    id: 'exampleInputTime'
  })}\`
}`,...(B=(U=w.parameters)==null?void 0:U.docs)==null?void 0:B.source}}};var H,G,W;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
  ...meta,
  name: 'Testo segnaposto',
  args: {
    type: 'text',
    placeholder: 'Testo segnaposto',
    label: 'Etichetta',
    name: 'placeholder-example',
    id: 'placeholder-example'
  },
  parameters: {
    docs: {
      description: {
        story: \`
È possibile abbinare al componente \\\`<it-input>\\\` un testo segnaposto (placeholder) per fornire indicazioni sul tipo di contenuto atteso. Questo testo non sostituisce l’etichetta, ma fornisce informazioni aggiuntive.
\`
      }
    }
  },
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(W=(G=C.parameters)==null?void 0:G.docs)==null?void 0:W.source}}};var Q,J,Y;E.parameters={...E.parameters,docs:{...(Q=E.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  ...meta,
  name: 'Testo di supporto',
  args: {
    type: 'text',
    label: 'Etichetta',
    placeholder: 'Testo segnaposto',
    name: 'supportText-example',
    id: 'supportText-example',
    supportText: 'Testo di supporto'
  },
  parameters: {
    docs: {
      description: {
        story: \`In caso di necessità, è anche possibile utilizzare un ulteriore contenuto testuale sotto il campo di testo, indicando nell'attributo \\\`support-text\\\` il testo da visualizzare.\`
      }
    }
  },
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(Y=(J=E.parameters)==null?void 0:J.docs)==null?void 0:Y.source}}};var Z,K,X;I.parameters={...I.parameters,docs:{...(Z=I.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...meta,
  name: 'Etichetta nascosta',
  args: {
    placeholder: 'Cerca...',
    label: 'Cerca nel sito',
    labelHidden: true
  },
  parameters: {
    docs: {
      description: {
        story: \`Se si vuole nascondere l'etichetta, come ad esempio nei campi di ricerca, è sufficiente passare l'attributo \\\`label-hidden\\\`.\`
      }
    }
  },
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(X=(K=I.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var ee,te,ie;$.parameters={...$.parameters,docs:{...(ee=$.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...meta,
  name: 'Icone o pulsanti',
  args: {
    placeholder: 'Icone o pulsanti',
    type: 'text',
    label: 'Campo con icona',
    name: 'field-icon-example',
    id: 'field-icon-example',
    supportText: 'Testo di supporto'
  },
  parameters: {
    docs: {
      description: {
        story: \`<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità delle icone</span></div><p>Nel caso in cui l’icona è semanticamente rilevante e non spiegata dal testo che la segue, occorre passare al componente \\\`<it-icon>\\\` l'attributo \\\`label\\\` che ne spieghi il significato (nel formato \\\`<it-icon .... label="Significato dell'icona"/>\\\`)</p></div></div>\`
      }
    }
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    children: html\`<it-icon name="it-pencil" slot="prepend" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>\`
  })}
  \`
}`,...(ie=(te=$.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ne,ae,oe;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`L'input di base ha una dimensione media che non necessita di alcuna classe aggiuntiva.

Per modificare questa dimensione, è possiible utilizzare l'attributo \\\`size\\\` il cui valore può essere \\\`sm\\\` oppure \\\`lg\\\`.

Per modificare invece la dimensione dell’icona, è possibile utilizzare l'attributo \\\`size\\\` sull'icona in questo modo:
<table>
<thead>
  <tr><th>Dimensione input</th><th>Attributo size (di it-input)</th><th>Dimensione icona</th></tr>
</thead>
<tbody>
  <tr><td>Grande</td><td>\\\`lg\\\`</td><td>\\\`md\\\`</td></tr>
  <tr><td>Base (default)</td><td></td><td>\\\`sm\\\`</td></tr>
  <tr><td>Piccola</td><td>\\\`sm\\\`</td><td>\\\`xs\\\`</td></tr>
</tbody>
</table>
\`
      }
    }
  },
  args: {
    type: 'text',
    placeholder: 'Testo segnaposto'
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Campo di dimensione grande',
    name: 'field-big-example',
    id: 'field-big-example',
    size: 'lg',
    children: html\`<it-icon name="it-pencil" slot="prepend" size="md"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>\`
  })}
    \${renderComponent({
    ...params,
    label: 'Campo di dimensione base',
    name: 'field-sizebase-example',
    id: 'field-sizebase-example',
    placeholder: 'Testo segnaposto',
    children: html\`<it-icon name="it-pencil" slot="prepend" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>\`
  })}
    \${renderComponent({
    ...params,
    label: 'Campo di dimensione piccola',
    name: 'field-small-example',
    id: 'field-small-example',
    size: 'sm',
    children: html\`<it-icon name="it-pencil" slot="prepend" size="xs"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>\`
  })}
  \`
}`,...(oe=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var re,se,le;V.parameters={...V.parameters,docs:{...(re=V.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`Aggiungi l’attributo \\\`disabled\\\` ad un \\\`<it-input>\\\` per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti.\`
      }
    }
  },
  args: {
    type: 'text',
    label: 'Campo disabilitato',
    name: 'field-disabled-example',
    id: 'field-disabled-example',
    disabled: true
  },
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(le=(se=V.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var de,pe,me;q.parameters={...q.parameters,docs:{...(de=q.parameters)==null?void 0:de.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`Aggiungi l’attributo \\\`readonly\\\` ad un \\\`<it-input>\\\` per impedire la modifica del valore contenuto.
<br/><br/><h4>Readonly normalizzato</h4>Se per qualche motivo vuoi avere gli elementi input readonly nella forma stilizzata come testo, aggiungi l'attributo \\\`plaintext\\\` a \\\`<it-input>\\\`.\`
      }
    }
  },
  args: {
    type: 'text',
    readonly: true,
    value: 'Contenuto in sola lettura'
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Campo readonly',
    name: 'field-readonly-example',
    id: 'field-readonly-example'
  })}
    \${renderComponent({
    ...params,
    label: 'Campo readonly normalizzato come plaintext',
    name: 'field-readonlyplaintext-example',
    id: 'field-readonlyplaintext-example',
    plaintext: true
  })}
  \`
}`,...(me=(pe=q.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ce,ue,he;M.parameters={...M.parameters,docs:{...(ce=M.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`Per semplificare l’inserimento della password, il componente \\\`<it-input>\\\` di tipo password include un pulsante che mostra i caratteri digitati.
        È inoltre possibile aggiungere un testo di supporto che aiuti nella compilazione, attraverso l’attributo \\\`support-text\\\`.
        <br/><br/>
        <h4>Misuratore sicurezza e suggerimenti</h4>
Nel caso di un campo per la scelta di una nuova password, è possibile abbinare controlli per segnalare quanto la password che si sta inserendo segua alcuni suggerimenti di sicurezza, come la lunghezza minima o l’uso di caratteri speciali, attraverso gli attributi \\\`strength-meter="true"\\\` e \\\`minlength\\\` per modificare la lunghezza minima richiesta per la password.

Inoltre, è possibile restituire all’utente una lista dei suggerimenti, con indicati quelli che sono stati soddisfatti, attraverso l’attributo \\\`suggestions="true"\\\`.
\`
      }
    }
  },
  args: {
    type: 'password',
    label: 'Campo password',
    supportText: 'Inserisci almeno 8 caratteri e alcuni caratteri speciali.',
    minlength: 8
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    name: 'field-password-example',
    id: 'field-password-example'
  })}
    \${renderComponent({
    ...params,
    name: 'field-password-strength-example',
    id: 'field-password-strength-example',
    strengthMeter: true,
    suggestions: true
  })}
  \`
}`,...(he=(ue=M.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var ge,ve,fe;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  ...meta,
  name: 'Area di testo',
  parameters: {
    docs: {
      description: {
        story: \`Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni), è bene utilizzare un elemento \\\`<it-input>\\\` con \\\`type="textarea"\\\`.\`
      }
    }
  },
  args: {
    type: 'textarea',
    label: 'Area di testo',
    name: 'textarea-example',
    id: 'textarea-example',
    placeholder: 'Testo segnaposto'
  },
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(fe=(ve=T.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var be,ye,ze;P.parameters={...P.parameters,docs:{...(be=P.parameters)==null?void 0:be.docs,source:{originalSource:`{
  ...meta,
  name: 'Validazione e gestione degli errori',
  parameters: {
    docs: {
      description: {
        story: \`Se non è stata impostata la validazione custom tramite l'attributo \\\`custom-validation\\\`, e sono stati impostati uno di questi attributi <ul><li>\\\`required\\\`</li><li>\\\`pattern\\\`</li><li>\\\`min\\\`</li><li>\\\`max\\\`</li><li>\\\`step\\\`</li><li>\\\`minlength\\\`</li><li>\\\`maxlength\\\`</li></ul> viene effettuata una validazione interna utilizzando la validazione nativa del browser.
 <br/><br/><h4>Personalizzazione dei messaggi di errore</h4>E' possibile personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione):
        <ul><li>\\\`validityRequired\\\`: messaggio che viene mostrato quando il campo è required e non è compilato</li>
        <li>\\\`validityPattern\\\`: messaggio che viene mostrato quando il campo non rispetta il pattern indicato</li>
        <li>\\\`validityMinlength\\\`: messaggio che viene mostrato quando la lunghezza del valore del campo è troppo corta rispetto al valore passatto nell'attributo \\\`min-length\\\`</li>
         <li>\\\`validityMaxlength\\\`: messaggio che viene mostrato quando la lunghezza del valore del campo è troppo lunga rispetto al valore passatto nell'attributo \\\`max-length\\\`</li>
      </ul>
      Per gli altri errori di validazione non indicati, verranno mostrati i messsaggi di errore nativi del browser.
      <h4>Validazione esterna (validazione custom)</h4>
        E' inoltre possibile validare il campo esternamente (via js ad esempio, o lato server), impostando l' attributo \\\`custom-validation="true"\\\`. In questo modo la validazione di default del browser effettuata internamente al componente è disabilitata.
        <br/><br/><h5>Campo invalido</h5>Nel caso il campo non sia valido, è necessario invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo \\\`validity-message="Messaggio di errore"\\\`.
        <br/><br/><h5>Campo valido</h5>Per riportare il campo ad uno stato 'valido', è sufficiente impostare il messaggio di errore a vuoto: \\\`validity-message=""\\\`.\`
      }
    }
  },
  args: {
    type: 'text',
    placeholder: 'Testo segnaposto'
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Campo obbligatorio',
    name: 'required-example',
    id: 'required-example',
    required: true
  })}
    \${renderComponent({
    ...params,
    label: 'Validazione esterna',
    name: 'external-validation-example',
    id: 'external-validation-example',
    validityMessage: 'Questo campo è obbligatorio!!!',
    customValidation: true,
    required: undefined
  })}
  \`
}`,...(ze=(ye=P.parameters)==null?void 0:ye.docs)==null?void 0:ze.source}}};var xe,we,Ce;A.parameters={...A.parameters,docs:{...(xe=A.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  ...meta,
  name: 'Gestione degli eventi',
  parameters: {
    docs: {
      description: {
        story: \`E' possibile gestire gli eventi di \\\`it-input\\\`, \\\`it-blur\\\`, \\\`it-change\\\`, \\\`it-focus\\\`, \\\`it-click\\\` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.
        <br/><br/>
        È sufficiente aggiungere un event listener al componente \\\`<it-input>\\\` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di input, è possibile utilizzare il seguente codice:

\\\`\\\`\\\`js
document.querySelector('it-input#event-input-example').addEventListener('it-input', (event) => {
  console.log('Input event:', event);
  alert('Input event);
});
\\\`\\\`\\\`

Il componente, emette anche un evento di tipo \\\`it-input-ready\\\` quando l'input è pronto e caricato nel DOM:

\\\`\\\`\\\`js
document.querySelector('it-input#event-input-example').addEventListener('it-input-ready', (event) => {
  console.log('Input ready:', event);
});
\\\`\\\`\\\`
      \`
      }
    }
  },
  args: {
    type: 'text',
    label: 'Prova evento di input',
    name: 'event-input-example',
    id: 'event-input-example',
    placeholder: 'Testo segnaposto'
  },
  render: params => html\`
    <script>
      document.querySelector('it-input#event-input-example').addEventListener('it-input', (event) => {
        console.log('Input event:', event);
        alert('Input event');
      });
      document.querySelector('it-input#event-input-example').addEventListener('it-input-ready', (event) => {
        console.log('Input ready:', event);
      });
    <\/script>
    \${renderComponent({
    ...params
  })}
  \`
}`,...(Ce=(we=A.parameters)==null?void 0:we.docs)==null?void 0:Ce.source}}};var Ee,Ie,$e;L.parameters={...L.parameters,docs:{...(Ee=L.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  ...StoryFormControlMethodAndProps,
  tags: ['!dev']
}`,...($e=(Ie=L.parameters)==null?void 0:Ie.docs)==null?void 0:$e.source}}};var Se,Ve,qe;F.parameters={...F.parameters,docs:{...(Se=F.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  name: 'i18n',
  tags: ['!dev'],
  render: () => html\`<div class="hide-preview"></div>\`,
  parameters: {
    viewMode: 'docs',
    // assicura che si apra la tab Docs anziché Canvas
    docs: {
      description: {
        story: \`
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\\\`\\\`\\\`js
const translation = {
  \${JSON.stringify(i18nIT).replaceAll('{"', '"').replaceAll('",', '",\\n\\t').replaceAll('"}', '"')}
}
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...(qe=(Ve=F.parameters)==null?void 0:Ve.docs)==null?void 0:qe.source}}};const rt=["EsempioInterattivo","Placeholder","TestoDiSupporto","LabelHidden","IconeOPulsanti","Dimensioni","Disabilitato","Readonly","Password","Textarea","GestioneErrori","GestioneEventi","MetodiEPropPubblici","I18n"];export{S as Dimensioni,V as Disabilitato,w as EsempioInterattivo,P as GestioneErrori,A as GestioneEventi,F as I18n,$ as IconeOPulsanti,I as LabelHidden,L as MetodiEPropPubblici,M as Password,C as Placeholder,q as Readonly,E as TestoDiSupporto,T as Textarea,rt as __namedExportsOrder,h as default};
