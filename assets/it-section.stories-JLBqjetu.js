import{x as m,a as Z,E as M}from"./lit-element-DvQWNfDj.js";import{r as Q,e as ee,n as d,t as te,o as ie}from"./query-Bx2OwlQ7.js";import{e as oe}from"./class-map-4X9Nymdy.js";import"./directive-CvdRHFdJ.js";const ne=["muted","emphasis","primary"];function r(n,e,t,i){var o=arguments.length,s=o<3?e:i,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,i);else for(var u=n.length-1;u>=0;u--)(a=n[u])&&(s=(o<3?a(s):o>3?a(e,t,s):a(e,t))||s);return o>3&&s&&Object.defineProperty(e,t,s),s}function l(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)}function H(n){var e,t,i="";if(typeof n=="string"||typeof n=="number")i+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=H(n[e]))&&(i&&(i+=" "),i+=t)}else for(t in n)n[t]&&(i&&(i+=" "),i+=t);return i}function se(){for(var n,e,t=0,i="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=H(n))&&(i&&(i+=" "),i+=e);return i}const $=new Set;window&&!window.translations&&(window.translations=new Map);const{translations:p}=window;let h,x="ltr",A="en";const G=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";function J(){G&&(x=document.documentElement.dir||"ltr",A=document.documentElement.lang||navigator.language),[...$.keys()].forEach(n=>{const e=n;typeof e.requestUpdate=="function"&&e.requestUpdate()})}if(G){const n=new MutationObserver(J);x=document.documentElement.dir||"ltr",A=document.documentElement.lang||navigator.language,n.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function K(...n){n.forEach(e=>{const t=e.$code.toLowerCase();p.has(t)?p.set(t,{...p.get(t),...e}):p.set(t,e),h||(h=e)}),J()}window.registerTranslation=K;class ae{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){$.add(this.host)}hostDisconnected(){$.delete(this.host)}dir(){return`${this.host.dir||x}`.toLowerCase()}lang(){return`${this.host.lang||A}`.toLowerCase()}getTranslationData(e){var u;const t=new Intl.Locale(e.replace(/_/g,"-")),i=t==null?void 0:t.language.toLowerCase(),o=((u=t==null?void 0:t.region)==null?void 0:u.toLowerCase())??"",s=p.get(`${i}-${o}`),a=p.get(i);return{locale:t,language:i,region:o,primary:s,secondary:a}}exists(e,t){const{primary:i,secondary:o}=this.getTranslationData(t.lang??this.lang()),s={includeFallback:!1,...t};return!!(i&&i[e]||o&&o[e]||s.includeFallback&&h&&h[e])}term(e,...t){const{primary:i,secondary:o}=this.getTranslationData(this.lang());let s;if(i&&i[e])s=i[e];else if(o&&o[e])s=o[e];else if(h&&h[e])s=h[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof s=="function"?s(...t):s}date(e,t){const i=new Date(e);return new Intl.DateTimeFormat(this.lang(),t).format(i)}number(e,t){const i=Number(e);return Number.isNaN(i)?"":new Intl.NumberFormat(this.lang(),t).format(i)}relativeTime(e,t,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,t)}}const re=n=>class extends n{constructor(){super(...arguments),this.localize=new ae(this)}get $localize(){return this.localize}$t(e){return this.localize.term(e)}$d(e,t){return this.localize.date(e,t)}$n(e,t){return this.localize.number(e,t)}};class le{constructor(e){this.tag=e}format(e,t){return[`[${this.tag}] ${t}`]}warn(e){console.warn(...this.format("warn",e))}error(e){console.error(...this.format("error",e))}info(e){console.info(...this.format("info",e))}}class X extends Z{constructor(){super(),this.composeClass=se,this.logger=new le(this.tagName.toLowerCase())}get _ariaAttributes(){const e={};for(const t of this.getAttributeNames())t==="it-role"?e.role=this.getAttribute(t):t.startsWith("it-aria-")&&(e[t.replace(/^it-/,"")]=this.getAttribute(t));return e}generateId(e){return`${e}-${Math.random().toString(36).slice(2)}`}addFocus(e){}getActiveElement(){let e=document.activeElement;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}connectedCallback(){var t;super.connectedCallback();const e=((t=this.id)==null?void 0:t.length)>0?this.id:this.tagName.toLowerCase();this._id=this.generateId(e)}}const de=re(X),g=new WeakMap,f=new WeakMap,v=new WeakMap,I=new WeakSet,b=new WeakMap;class ce{constructor(e,t){this.handleFormData=i=>{const o=this.options.disabled(this.host),s=this.options.name(this.host),a=this.options.value(this.host),u=this.host.tagName.toLowerCase()==="it-button";this.host.isConnected&&!o&&!u&&typeof s=="string"&&s.length>0&&typeof a<"u"&&(Array.isArray(a)?a.forEach(Y=>{i.formData.append(s,Y.toString())}):i.formData.append(s,a.toString()))},this.handleFormSubmit=i=>{var a;const o=this.options.disabled(this.host),s=this.options.reportValidity;this.form&&!this.form.noValidate&&((a=g.get(this.form))==null||a.forEach(u=>{this.setUserInteracted(u,!0)})),this.form&&!this.form.noValidate&&!o&&!s(this.host)&&i.preventDefault()},this.handleFormReset=()=>{this.options.setValue(this.host,""),this.setUserInteracted(this.host,!1),b.set(this.host,[])},this.handleInteraction=i=>{const o=b.get(this.host);o.includes(i.type)||o.push(i.type),o.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.checkValidity=="function"&&!o.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const i=this.form.querySelectorAll("*");for(const o of i)if(typeof o.reportValidity=="function"&&!o.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options={form:i=>{const o=i.form;if(o){const a=i.getRootNode().querySelector(`#${o}`);if(a)return a}return i.closest("form")},name:i=>i.name,value:i=>i.value,disabled:i=>i.disabled??!1,reportValidity:i=>typeof i.reportValidity=="function"?i.reportValidity():!0,checkValidity:i=>typeof i.checkValidity=="function"?i.checkValidity():!0,setValue:(i,o)=>{i.value=o},assumeInteractionOn:["it-input"],...t}}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),b.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),b.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,g.has(this.form)?g.get(this.form).add(this.host):g.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),f.has(this.form)||(f.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),v.has(this.form)||(v.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=g.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),f.has(this.form)&&(this.form.reportValidity=f.get(this.form),f.delete(this.form)),v.has(this.form)&&(this.form.checkValidity=v.get(this.form),v.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?I.add(e):I.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const i=document.createElement("button");i.type=e,i.style.position="absolute",i.style.width="0",i.style.height="0",i.style.clipPath="inset(50%)",i.style.overflow="hidden",i.style.whiteSpace="nowrap",t&&(i.name=t.name,i.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(o=>{t.hasAttribute(o)&&i.setAttribute(o,t.getAttribute(o))})),this.form.append(i),i.click(),i.remove()}}getForm(){return this.form??null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,i=!!I.has(t),o=!!t.required;t.toggleAttribute("data-required",o),t.toggleAttribute("data-optional",!o),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&i),t.toggleAttribute("data-user-valid",e&&i)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("it-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}}const ue={$code:"it",$name:"Italiano",$dir:"ltr",validityRequired:"Questo campo è obbligatorio.",validityPattern:"Il valore non corrisponde al formato richiesto.",validityMinlength:"Il valore deve essere lungo almeno {minlength} caratteri.",validityMaxlength:"Il valore deve essere lungo al massimo {maxlength} caratteri."};K(ue);class c extends de{constructor(){super(...arguments),this.formControlController=new ce(this,{assumeInteractionOn:["it-input","it-blur","it-change"]}),this._touched=!1,this.name="",this.value="",this.disabled=!1,this.form="",this.customValidation=!1,this.validationText="",this.step="any",this.minlength=-1,this.maxlength=-1,this.required=!1,this.validationMessage=""}get validity(){var e;return(e=this.inputElement)==null?void 0:e.validity}checkValidity(){var t;return((t=this.inputElement)==null?void 0:t.checkValidity())??!0}getForm(){return this.formControlController.getForm()}reportValidity(){const e=this.inputElement.checkValidity();return this.handleValidationMessages(),e}setCustomValidity(e){this.inputElement.setCustomValidity(e),this.validationMessage=this.inputElement.validationMessage,this.formControlController.updateValidity()}_handleReady(){requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("it-input-ready",{bubbles:!0,detail:{el:this.inputElement}}))})}_handleInput(e){this.handleValidationMessages(),this.dispatchEvent(new CustomEvent("it-input",{detail:{value:this.inputElement.value,el:this.inputElement},bubbles:!0,composed:!0}))}_handleBlur(e){this._touched=!0,this.handleValidationMessages(),this.dispatchEvent(new FocusEvent("it-blur",{bubbles:!0,composed:!0}))}_handleFocus(e){this.dispatchEvent(new FocusEvent("it-focus",{bubbles:!0,composed:!0}))}_handleClick(e){this.dispatchEvent(new MouseEvent("it-click",{bubbles:!0,composed:!0}))}handleValidationMessages(){if(!this.customValidation){const e=this.inputElement.validity;e.valueMissing?this.setCustomValidity(this.$t("validityRequired")):e.patternMismatch?this.setCustomValidity(this.$t("validityPattern")):e.tooShort?this.setCustomValidity(this.$t("validityMinlength").replace("{minlength}",this.minlength.toString())):e.tooLong?this.setCustomValidity(this.$t("validityMaxlength").replace("{maxlength}",this.maxlength.toString())):e.typeMismatch||e.rangeUnderflow||e.rangeOverflow||e.stepMismatch||e.badInput||this.setCustomValidity("")}this.validationMessage=this.inputElement.validationMessage}_handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}_handleChange(e){const t=e.target;let i;if(t instanceof HTMLInputElement)switch(t.type){case"checkbox":case"radio":i=t.checked;break;case"file":i=t.files;break;default:i=t.value}else t instanceof HTMLSelectElement&&t.multiple?i=Array.from(t.selectedOptions).map(o=>o.value):i=t.value;this.dispatchEvent(new CustomEvent("it-change",{detail:{value:i,el:t},bubbles:!0,composed:!0}))}updated(e){var t;(t=super.updated)==null||t.call(this,e),this.customValidation?this.setCustomValidity(this.validationText??""):this.formControlController.updateValidity()}}r([Q(),l("design:type",Object)],c.prototype,"_touched",void 0);r([ee(".it-form__control"),l("design:type",HTMLInputElement)],c.prototype,"inputElement",void 0);r([d({type:String,reflect:!0}),l("design:type",Object)],c.prototype,"name",void 0);r([d({reflect:!0}),l("design:type",Object)],c.prototype,"value",void 0);r([d({type:Boolean,reflect:!0}),l("design:type",Object)],c.prototype,"disabled",void 0);r([d({reflect:!0,type:String}),l("design:type",Object)],c.prototype,"form",void 0);r([d({type:Boolean,reflect:!0,attribute:"custom-validation"}),l("design:type",Object)],c.prototype,"customValidation",void 0);r([d({attribute:"validity-message",reflect:!0}),l("design:type",String)],c.prototype,"validationText",void 0);r([d(),l("design:type",String)],c.prototype,"pattern",void 0);r([d(),l("design:type",Object)],c.prototype,"min",void 0);r([d(),l("design:type",Object)],c.prototype,"max",void 0);r([d(),l("design:type",Object)],c.prototype,"step",void 0);r([d({type:Number}),l("design:type",Object)],c.prototype,"minlength",void 0);r([d({type:Number}),l("design:type",Object)],c.prototype,"maxlength",void 0);r([d({type:Boolean,reflect:!0}),l("design:type",Object)],c.prototype,"required",void 0);r([Q(),l("design:type",Object)],c.prototype,"validationMessage",void 0);let y=class extends X{constructor(){super(...arguments),this.image="",this.inverse=!1}createRenderRoot(){return this}connectedCallback(){var e;(e=super.connectedCallback)==null||e.call(this),this.sectionId=this.generateId("it-section")}updated(){this.organizeContent(),this.updateAriaLabelledBy(),this.updateInverseClass()}updateInverseClass(){const e=this.querySelector("section");if(!e)return;const t=e.querySelector(".section-content");t&&(this.inverse?t.classList.add("white-color"):t.classList.remove("white-color"))}organizeContent(){const e=this.querySelector("section");if(!e||e.querySelector(".section-content"))return;const i=document.createElement("div");i.classList.add("section-content"),this.inverse&&i.classList.add("white-color"),Array.from(this.childNodes).filter(s=>s!==e&&s.nodeType===Node.ELEMENT_NODE).forEach(s=>{i.appendChild(s)}),e.appendChild(i)}updateAriaLabelledBy(){const e=this.querySelector("section");if(!e)return;const t=e.querySelector(".section-content"),i=t?t.querySelectorAll("h1, h2, h3, h4, h5, h6"):this.querySelectorAll("h1, h2, h3, h4, h5, h6");let o;for(const s of i){const a=s;if(a.id){o=a.id;break}}if(!o&&i.length>0){const s=i[0];o=this.generateId("section-heading"),s.id=o}o?e.setAttribute("aria-labelledby",o):e.removeAttribute("aria-labelledby")}render(){const e={section:!0,[`section-${this.variant}`]:!!this.variant,"section-image":!!this.image};return m`
      <section id="${this.sectionId}" class="${oe(e)}" part="section">
        ${this.image?m`
              <div class="img-responsive-wrapper">
                <div class="img-responsive">
                  <div class="img-wrapper">
                    <img src="${this.image}" alt="" aria-hidden="true" />
                  </div>
                </div>
              </div>
            `:null}
      </section>
    `}};r([d({type:String}),l("design:type",String)],y.prototype,"variant",void 0);r([d({type:String}),l("design:type",Object)],y.prototype,"image",void 0);r([d({type:Boolean}),l("design:type",Object)],y.prototype,"inverse",void 0);y=r([te("it-section")],y);const me=m`
  <!-- contenuto di esempio START -->
  <div class="container">
    <div class="row mb-3">
      <div class="col-12">
        <h2 id="section-heading">Morbi fermentum amet</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-4">
        <p>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
      </div>
      <div class="col-12 col-lg-6 col-xl-4">
        <p>
          Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam
          quis enim. Eu nisl nunc mi ipsum faucibus.
        </p>
      </div>
      <div class="col-12 col-lg-6 col-xl-4">
        <p>
          Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum.
          Mattis enim ut tellus elementum sagittis.
        </p>
      </div>
    </div>
  </div>
  <!-- contenuto di esempio END -->
`;function V({variant:n,image:e,content:t,inverse:i=!1}){return m`
    <it-section variant="${n||M}" image="${e||M}" ?inverse="${ie(i)}">
      ${t||me}
    </it-section>
  `}const ye={title:"Componenti/Section",tags:["autodocs"],component:"it-section",parameters:{docs:{description:{component:`<Description>Per creare sezioni di layout orizzontale con differenti sfondi.</Description>

Il componente \`<it-section>\` rappresenta un contenitore visivo per introdurre sezioni di contenuto con o senza immagine.

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/sections/)


<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità (Draft)</span></div><p>
      Il titolo h2 dello snippet è solo indicativo: assicurati che il contenuto contenga un'intestazione semantica per garantire la corretta navigazione assistiva.
      <br>Il tag it-section contraddistingue una sezione semanticamente riconoscibile, associata all’id del titolo dall’attributo aria-labelledby.

      <br>Gli autori dovrebbero dividere la pagina in sezioni semantiche reali e non per solo scopo decorativo.     <br> Qualora si utilizzino sezioni al solo scopo decorativo sostituire it-section con div ed eliminare l’attributo aria-labelledby.
      <br><br>
      Le immagini fornite tramite l'attributo <code>image</code> sono considerate <strong>decorative</strong>: sono rese con un tag <code>&lt;img&gt;</code> e <code>aria-hidden="true"</code>.
      In questo modo non vengono annunciate dagli screen reader.</p><p class="pt-2">
      </p></div></div>
`}}},args:{variant:"",image:"",inverse:!1},argTypes:{variant:{control:{type:"select"},options:ne,description:"Variante grafica del componente, corrisponde alle classi di Bootstrap Italia",table:{defaultValue:{summary:void 0}}},image:{control:{type:"text"},description:"URL immagine di sfondo, ad esempio https://picsum.photos/1600/500"},inverse:{control:{type:"boolean"},description:"Quando attivo, l’attributo inverse applica il colore bianco ai testi. È utile quando la sezione ha uno sfondo scuro o un’immagine di sfondo, così da garantire il corretto contrasto e la leggibilità dei contenuti.",table:{defaultValue:{summary:!1}}}}},z={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:n=>m`${V(n)}`},E={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nPer la personalizzazione degli stili si può usare il selettore `::part` passando il valore `section`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).\n\nQuando si organizzano i contenuti usando le classi della griglia, non serve aggiungere spazio ai lati. Se proprio necessario, si può aggiungere spazio laterale usando la variabile `--bs-section-padding-x`.\n\nSi può usare la variabile `--bs-section-image-overlay` per regolare l'opacità dell'overlay applicato all'immagine.\n"}}},render:()=>m`<div class="hide-preview"></div>`},S={name:"Varianti di sfondo",render:()=>m`
    <div class="d-flex flex-column gap-4">
      ${["muted","emphasis","primary"].map(n=>V({variant:n,inverse:n!=="muted",content:m`
            <div class="container">
              <h3 id="section-heading-${n}">Sezione ${n}</h3>
              <p>
                Questa sezione usa la variante <code>${n}</code>
                ${n!=="muted"?"con testo bianco attraverso l'attributo inverse":""}
              </p>
            </div>
          `}))}
    </div>
  `,parameters:{docs:{description:{story:`
Sono disponibili le varianti colore di sfondo per le sezioni, corrispondenti alle classi di Bootstrap italia:

- \`muted\`
- \`emphasis\`
- \`primary\`

Il componente Section ha, per default, uno sfondo trasparente.
        `}}}},w={name:"Sezione con immagine decorativa",args:{image:"https://picsum.photos/1280/720?image=81",inverse:!0},render:n=>V({...n}),parameters:{docs:{description:{story:"\nValorizzando l'attributo `image` del componente con l’URL dell’immagine da utilizzare  la Section utilizzerà l’immagine indicata come sfondo, adattandone automaticamente le dimensioni per coprire l’intera Section.\n\nA seconda della luminosità dell’immagine si consiglia di valorizzare o meno l'attributo `inverse` per garantire il corretto contrasto fra testi e sfondo.\n        "}}}},C={name:"Sezione con card",args:{variant:"muted"},render:n=>V({...n,content:m`
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 id="section-heading-card" class="mb-4">Morbi fermentum amet</h2>
            </div>
          </div>
          <div class="row gy-3">
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `}),parameters:{docs:{description:{story:`
Per aggiungere una serie di card all’interno di una Section si consiglia di utilizzare le griglie per garantire un corretto margine fra gli elementi .
        `}}}};var L,F,q;z.parameters={...z.parameters,docs:{...(L=z.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: args => html\`\${renderSection(args)}\`
}`,...(q=(F=z.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var O,D,R;E.parameters={...E.parameters,docs:{...(O=E.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
Per la personalizzazione degli stili si può usare il selettore \\\`::part\\\` passando il valore \\\`section\\\`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).

Quando si organizzano i contenuti usando le classi della griglia, non serve aggiungere spazio ai lati. Se proprio necessario, si può aggiungere spazio laterale usando la variabile \\\`--bs-section-padding-x\\\`.

Si può usare la variabile \\\`--bs-section-image-overlay\\\` per regolare l'opacità dell'overlay applicato all'immagine.
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...(R=(D=E.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var _,k,j;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Varianti di sfondo',
  render: () => html\`
    <div class="d-flex flex-column gap-4">
      \${(['muted', 'emphasis', 'primary'] as const).map(variant => renderSection({
    variant,
    inverse: variant !== 'muted',
    content: html\`
            <div class="container">
              <h3 id="section-heading-\${variant}">Sezione \${variant}</h3>
              <p>
                Questa sezione usa la variante <code>\${variant}</code>
                \${variant !== 'muted' ? "con testo bianco attraverso l'attributo inverse" : ''}
              </p>
            </div>
          \`
  }))}
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
Sono disponibili le varianti colore di sfondo per le sezioni, corrispondenti alle classi di Bootstrap italia:

- \\\`muted\\\`
- \\\`emphasis\\\`
- \\\`primary\\\`

Il componente Section ha, per default, uno sfondo trasparente.
        \`
      }
    }
  }
}`,...(j=(k=S.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var T,N,B;w.parameters={...w.parameters,docs:{...(T=w.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Sezione con immagine decorativa',
  args: {
    image: 'https://picsum.photos/1280/720?image=81',
    inverse: true
  },
  render: params => renderSection({
    ...params
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Valorizzando l'attributo \\\`image\\\` del componente con l’URL dell’immagine da utilizzare  la Section utilizzerà l’immagine indicata come sfondo, adattandone automaticamente le dimensioni per coprire l’intera Section.

A seconda della luminosità dell’immagine si consiglia di valorizzare o meno l'attributo \\\`inverse\\\` per garantire il corretto contrasto fra testi e sfondo.
        \`
      }
    }
  }
}`,...(B=(N=w.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var P,U,W;C.parameters={...C.parameters,docs:{...(P=C.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Sezione con card',
  args: {
    variant: 'muted'
  },
  render: params => renderSection({
    ...params,
    content: html\`
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 id="section-heading-card" class="mb-4">Morbi fermentum amet</h2>
            </div>
          </div>
          <div class="row gy-3">
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Per aggiungere una serie di card all’interno di una Section si consiglia di utilizzare le griglie per garantire un corretto margine fra gli elementi .
        \`
      }
    }
  }
}`,...(W=(U=C.parameters)==null?void 0:U.docs)==null?void 0:W.source}}};const be=["EsempioInterattivo","PersonalizzazioneDegliStili","VariantiColore","VarianteConImmagine","SectionConCard"];export{z as EsempioInterattivo,E as PersonalizzazioneDegliStili,C as SectionConCard,w as VarianteConImmagine,S as VariantiColore,be as __namedExportsOrder,ye as default};
