import{x as n,o as a}from"./iframe-CPtuQipa.js";import{S as de}from"./formControlReusableStories-BUEuIwww.js";import"./form-control-BPE_muG_.js";import{I as pe,a as me}from"./types-CucKb5le.js";var h=Object.freeze,ce=Object.defineProperty,ue=(e,ve)=>h(ce(e,"raw",{value:h(e.slice())})),f;const t=e=>n`<it-input
    id="${a(e.id||void 0)}"
    type="${a(e.type||void 0)}"
    name="${a(e.name||void 0)}"
    value="${a(e.value||void 0)}"
    ?disabled="${e.disabled}"
    form="${a(e.form||void 0)}"
    ?custom-validation="${e.customValidation}"
    validity-message="${a(e.validityMessage||void 0)}"
    pattern="${a(e.pattern||void 0)}"
    min="${a(e.min||void 0)}"
    max="${a(e.max||void 0)}"
    step="${a(e.step||void 0)}"
    minlength="${a(e.minlength)||void 0}"
    maxlength="${a(e.maxlength)||void 0}"
    ?required="${e.required}"
    ?readonly="${e.readonly}"
    ?plaintext="${e.plaintext}"
    placeholder="${a(e.placeholder||void 0)}"
    support-text="${a(e.supportText||void 0)}"
    ?label-hidden="${e.labelHidden}"
    size="${a(e.size||void 0)}"
    ?adaptive="${e.adaptive}"
    ?strength-meter="${e.strengthMeter}"
    ?suggestions="${e.suggestions}"
  >
    <span slot="label">${e.label}</span>
    ${a(e.children||void 0)}
  </it-input>`,i={title:"Componenti/Form/Input",tags:["a11y-ok","web-component"],component:"it-input",args:{id:"",label:"Nome",type:"text",name:"nome",value:"",disabled:!1,form:"",customValidation:!1,validityMessage:"",pattern:void 0,min:void 0,max:void 0,step:void 0,minlength:void 0,maxlength:void 0,required:!1,readonly:!1,plaintext:!1,placeholder:"",supportText:"",labelHidden:!1,size:void 0,adaptive:!1,strengthMeter:!1,suggestions:!1},argTypes:{id:{control:"text",description:"ID del campo"},label:{control:"text",description:"Etichetta del campo"},type:{control:"select",options:me,table:{defaultValue:{summary:"text"}}},name:{control:"text"},value:{control:"text",description:"Valore del campo"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},form:{control:"text",type:"string",description:"ID html del form a cui è associato il campo, se il campo non si trova all'interno di una form "},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},pattern:{control:"text",description:"Pattern di validazione del campo",type:"string"},min:{control:"text",description:"Valore minimo consentito per un campo di tipo numerico o di tipo data",type:"string"},max:{control:"text",description:"Valore massimo consentito per un campo di tipo numerico o di tipo data",type:"string"},step:{control:"number",description:"Incremento per ogni step (tramite i pulsanti +/-) nel caso di input di tipo numerico o di tipo data",type:"number"},minlength:{type:"number",description:"Lunghezza minima del valore da inserire. Usato anche per validare la robustezza della password",table:{defaultValue:{summary:'undefined. Se type="password": 8'}}},maxlength:{type:"number",description:"Lunghezza massima del valore da inserire."},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readonly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},plaintext:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se il campo è readonly, con l'attributo 'plaintext' il campo assume l'aspetto di testo normalizzato."},placeholder:{control:"text",description:"Testo segnaposto"},supportText:{name:"support-text",control:"text",description:"Testo di supporto"},labelHidden:{name:"label-hidden",control:"boolean",type:"boolean",description:"Se si vuole nascondere la label. Risulterà comunque accessibile per i lettori di schermo.",table:{defaultValue:{summary:"false"}}},size:{control:{type:"select",labels:{undefined:"(non definito)",sm:"sm",lg:"lg"}},options:pe,description:"Dimensione del campo: 'sm' | (non definito) | 'lg' ",table:{defaultValue:{summary:void 0}},type:"string"},adaptive:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:'Se il campo è `type="number"`, con l\'attributo `adaptive` il campo assume adatta la sua larghezza al contenuto'},strengthMeter:{name:"strength-meter",control:"boolean",type:"boolean",description:"Se si vuole mostrare o meno il misuratore di robustezza della password nel caso di type='password'",table:{defaultValue:{summary:"false"}}},suggestions:{name:"suggestions",control:"boolean",type:"boolean",description:"Se si vogliono mostrare i suggerimenti per l'insderimento di una password sicura.",table:{defaultValue:{summary:"false"}}}},parameters:{docs:{description:{component:`
<Description>Campi per l'inserimento di dati testuali e numerici, in forma libera o in formati specifici, all'interno di un form</Description>

Per il corretto funzionamento degli elementi di tipo \`<it-input>\` è di fondamentale importanza l’utilizzo uno degli appositi attributi \`type\` (ad esempio, "email" per l’inserimento di indirizzi email o "number" per informazioni numeriche), in modo da sfruttare i controlli nativi dei browser più recenti come la verifica dell’email, l’utilizzo di metodo di input numerico ed altro.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Tutti gli attributi \`it-aria-*\` passati a \`<it-input>\` vengono applicati all'input generato.
</p></div></div>
`}}}},o={...i,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"closed"}}},render:e=>n`${t({...e,type:"text",label:"Campo di testo",name:"testo",id:"exampleInputText"})}
    ${t({...e,type:"email",label:"Campo email",name:"email",id:"exampleInputEmail"})}
    ${t({...e,type:"number",label:"Campo numerico",name:"number",id:"exampleInputNumber"})}
    ${t({...e,type:"tel",label:"Campo telefonico",name:"telefono",id:"exampleInputTel"})}
    ${t({...e,type:"time",label:"Campo orario",name:"orario",id:"exampleInputTime"})}
    ${t({...e,type:"date",label:"Campo data",name:"data",id:"exampleInputDate"})}`},r={...i,name:"Testo segnaposto",args:{type:"text",placeholder:"Testo segnaposto",label:"Etichetta",name:"placeholder-example",id:"placeholder-example"},render:e=>n`
    ${t({...e})}
  `},l={...i,name:"Testo di supporto",args:{type:"text",label:"Etichetta",placeholder:"Testo segnaposto",name:"supportText-example",id:"supportText-example",supportText:"Testo di supporto"},render:e=>n`
    ${t({...e})}
  `},s={...i,name:"Etichetta nascosta",args:{placeholder:"Cerca...",label:"Cerca nel sito",labelHidden:!0},render:e=>n`
    ${t({...e})}
  `},d={...i,name:"Icone o pulsanti",args:{placeholder:"Icone o pulsanti",type:"text",label:"Campo con icona",name:"field-icon-example",id:"field-icon-example",supportText:"Testo di supporto"},parameters:{docs:{description:{story:'<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità delle icone</span></div><p>Nel caso in cui l’icona è semanticamente rilevante e non spiegata dal testo che la segue, devi passare al componente `<it-icon>` l\'attributo `label` che ne spieghi il significato (nel formato `<it-icon .... label="Significato dell\'icona"/>`)</p></div></div>'}}},render:e=>n`
    ${t({...e,children:n`<it-icon name="it-pencil" slot="prepend" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
  `},p={...i,parameters:{docs:{description:{story:"L'input di base ha una dimensione media che non necessita di alcuna classe aggiuntiva.\n\nPer modificare questa dimensione, puoi utilizzare l'attributo `size` il cui valore può essere `sm` oppure `lg`.\n\nPer modificare invece la dimensione dell’icona, puoi utilizzare l'attributo `size` sull'icona in questo modo:\n<table>\n<thead>\n  <tr><th>Dimensione input</th><th>Attributo size (di it-input)</th><th>Dimensione icona</th></tr>\n</thead>\n<tbody>\n  <tr><td>Grande</td><td>`lg`</td><td>`md`</td></tr>\n  <tr><td>Base (default)</td><td></td><td>`sm`</td></tr>\n  <tr><td>Piccola</td><td>`sm`</td><td>`xs`</td></tr>\n</tbody>\n</table>\n"}}},args:{type:"text",placeholder:"Testo segnaposto"},render:e=>n`
    ${t({...e,label:"Campo di dimensione grande",name:"field-big-example",id:"field-big-example",size:"lg",children:n`<it-icon name="it-pencil" slot="prepend" size="md"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
    ${t({...e,label:"Campo di dimensione base",name:"field-sizebase-example",id:"field-sizebase-example",placeholder:"Testo segnaposto",children:n`<it-icon name="it-pencil" slot="prepend" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
    ${t({...e,label:"Campo di dimensione piccola",name:"field-small-example",id:"field-small-example",size:"sm",children:n`<it-icon name="it-pencil" slot="prepend" size="xs"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
  `},m={...i,name:"Stato disabilitato",args:{type:"text",label:"Campo disabilitato",name:"field-disabled-example",id:"field-disabled-example",disabled:!0},render:e=>n`
    ${t({...e})}
  `},c={...i,name:"Stato readonly",args:{type:"text",readonly:!0,value:"Contenuto in sola lettura"},render:e=>n`
    ${t({...e,label:"Campo readonly",name:"field-readonly-example",id:"field-readonly-example"})}
    ${t({...e,label:"Campo readonly normalizzato come plaintext",name:"field-readonlyplaintext-example",id:"field-readonlyplaintext-example",plaintext:!0})}
  `},u={...i,args:{type:"password",label:"Campo password",supportText:"Inserisci almeno 8 caratteri e alcuni caratteri speciali.",minlength:8},render:e=>n`
    ${t({...e,name:"field-password-example",id:"field-password-example"})}
    ${t({...e,name:"field-password-strength-example",id:"field-password-strength-example",strengthMeter:!0,suggestions:!0})}
  `},b={...i,name:"Area di testo",args:{type:"textarea",label:"Area di testo",name:"textarea-example",id:"textarea-example",placeholder:"Testo segnaposto"},render:e=>n`
    ${t({...e})}
  `},v={...i,name:"Validazione nativa",args:{type:"text",placeholder:"Testo segnaposto"},render:e=>n`
    ${t({...e,label:"Campo obbligatorio",name:"required-example",id:"required-example",required:!0})}
  `},g={...i,name:"Validazione custom",args:{type:"text",placeholder:"Testo segnaposto"},render:e=>n`
    ${t({...e,label:"Validazione esterna",name:"external-validation-example",id:"external-validation-example",validityMessage:"Questo campo è obbligatorio!!!",customValidation:!0,required:void 0})}
  `},x={...i,name:"Gestione degli eventi",parameters:{docs:{description:{story:"È possibile gestire gli eventi di `it-input`, `it-blur`, `it-change`, `it-focus`, `it-click` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.\n<br/><br/>\nÈ sufficiente aggiungere un event listener al componente `<it-input>` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di input, è possibile utilizzare il seguente codice:\n\n```js\ndocument.querySelector('it-input#event-input-example').addEventListener('it-input', (event) => {\n  console.log('Input event:', event);\n  alert('Input event);\n});\n```\n\nIl componente, emette anche un evento di tipo `it-input-ready` quando l'input è pronto e caricato nel DOM:\n\n```js\ndocument.querySelector('it-input#event-input-example').addEventListener('it-input-ready', (event) => {\n  console.log('Input ready:', event);\n});\n```\n      "}}},args:{type:"text",label:"Prova evento di input",name:"event-input-example",id:"event-input-example",placeholder:"Testo segnaposto"},render:e=>n(f||(f=ue([`
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
  `])),t({...e}))},y={...de({}),tags:["!dev"]};var z,$,C;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'closed'
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
  })}
    \${renderComponent({
    ...params,
    type: 'date',
    label: 'Campo data',
    name: 'data',
    id: 'exampleInputDate'
  })}\`
}`,...(C=($=o.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var T,I,S;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...meta,
  name: 'Testo segnaposto',
  args: {
    type: 'text',
    placeholder: 'Testo segnaposto',
    label: 'Etichetta',
    name: 'placeholder-example',
    id: 'placeholder-example'
  },
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(S=(I=r.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var V,q,E;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(E=(q=l.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var P,w,D;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  ...meta,
  name: 'Etichetta nascosta',
  args: {
    placeholder: 'Cerca...',
    label: 'Cerca nel sito',
    labelHidden: true
  },
  render: params => html\`
    \${renderComponent({
    ...params
  })}
  \`
}`,...(D=(w=s.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var M,L,_;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
        story: \`<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità delle icone</span></div><p>Nel caso in cui l’icona è semanticamente rilevante e non spiegata dal testo che la segue, devi passare al componente \\\`<it-icon>\\\` l'attributo \\\`label\\\` che ne spieghi il significato (nel formato \\\`<it-icon .... label="Significato dell'icona"/>\\\`)</p></div></div>\`
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
}`,...(_=(L=d.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var A,j,N;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`L'input di base ha una dimensione media che non necessita di alcuna classe aggiuntiva.

Per modificare questa dimensione, puoi utilizzare l'attributo \\\`size\\\` il cui valore può essere \\\`sm\\\` oppure \\\`lg\\\`.

Per modificare invece la dimensione dell’icona, puoi utilizzare l'attributo \\\`size\\\` sull'icona in questo modo:
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
}`,...(N=(j=p.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var O,G,H;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...meta,
  name: 'Stato disabilitato',
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
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var R,F,U;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...meta,
  name: 'Stato readonly',
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
}`,...(U=(F=c.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var k,B,Q;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...meta,
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
}`,...(Q=(B=u.parameters)==null?void 0:B.docs)==null?void 0:Q.source}}};var Y,Z,J;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  ...meta,
  name: 'Area di testo',
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
}`,...(J=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,W,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  ...meta,
  name: 'Validazione nativa',
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
  \`
}`,...(X=(W=v.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var ee,te,ne;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  ...meta,
  name: 'Validazione custom',
  args: {
    type: 'text',
    placeholder: 'Testo segnaposto'
  },
  render: params => html\`
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
}`,...(ne=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,ie,oe;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...meta,
  name: 'Gestione degli eventi',
  parameters: {
    docs: {
      description: {
        story: \`È possibile gestire gli eventi di \\\`it-input\\\`, \\\`it-blur\\\`, \\\`it-change\\\`, \\\`it-focus\\\`, \\\`it-click\\\` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.
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
}`,...(oe=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var re,le,se;y.parameters={...y.parameters,docs:{...(re=y.parameters)==null?void 0:re.docs,source:{originalSource:`{
  ...StoryFormControlMethodAndProps({}),
  tags: ['!dev']
}`,...(se=(le=y.parameters)==null?void 0:le.docs)==null?void 0:se.source}}};const be=["EsempioInterattivo","Placeholder","TestoDiSupporto","LabelHidden","IconeOPulsanti","Dimensioni","Disabilitato","Readonly","Password","Textarea","ValidazioneNativa","ValidazioneCustom","GestioneEventi","MetodiEPropPubblici"],fe=Object.freeze(Object.defineProperty({__proto__:null,Dimensioni:p,Disabilitato:m,EsempioInterattivo:o,GestioneEventi:x,IconeOPulsanti:d,LabelHidden:s,MetodiEPropPubblici:y,Password:u,Placeholder:r,Readonly:c,TestoDiSupporto:l,Textarea:b,ValidazioneCustom:g,ValidazioneNativa:v,__namedExportsOrder:be,default:i},Symbol.toStringTag,{value:"Module"}));export{p as D,o as E,x as G,d as I,s as L,y as M,r as P,c as R,fe as S,l as T,v as V,m as a,u as b,b as c,g as d};
