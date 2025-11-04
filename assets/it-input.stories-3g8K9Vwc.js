import{x as i}from"./iframe-BiclfI91.js";import{o as a}from"./if-defined-tWK9HKZq.js";import{S as de}from"./form-control-trSpb7tG.js";import{I as pe,a as me}from"./types-krleEmxp.js";import"./it-icon-CSHPhcQf.js";import"./it-button-7O2qlVVR.js";import"./it-input-CzYBhIdL.js";import"./preload-helper-Dp1pzeXC.js";import"./query-Bd2ew8Gc.js";import"./directive-CvdRHFdJ.js";import"./query-assigned-elements-DeyBePrH.js";import"./when-BR7zwNJC.js";import"./live-DG_rsUJd.js";const ce={$code:"it",$name:"Italiano",$dir:"ltr",showHidePassword:"Mostra/Nascondi Password.",shortPass:"Password troppo breve.",badPass:"Password debole.",goodPass:"Password abbastanza sicura.",strongPass:"Password sicura.",ariaLabelPasswordMeter:"Robustezza della password",passwordSuggestionsLabel:"Suggerimenti per una buona password:",passwordSuggestionLength:"Almeno {minLength} caratteri.",passwordSuggestionUppercase:"Una o più maiuscole.",passwordSuggestionLowercase:"Una o più minuscole.",passwordSuggestionNumber:"Uno o più numeri.",passwordSuggestionSpecial:"Uno o più caratteri speciali.",passwordSuggestionFollowed:"suggerimenti seguiti",passwordSuggestionFollowedPlural:"suggerimenti seguiti",passwordSuggestionOf:"di",passwordSuggestionMetLabel:"Soddisfatto:",increaseValue:"Aumenta il valore",decreaseValue:"Diminuisci il valore"};var x=Object.freeze,ue=Object.defineProperty,ge=(e,ve)=>x(ue(e,"raw",{value:x(e.slice())})),y;const t=e=>i`<it-input
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
    ><span slot="label">${e.label}</span>${a(e.children||void 0)}</it-input
  >`,n={title:"Componenti/Form/Input",tags:["autodocs"],component:"it-input",args:{id:"",label:"Nome",type:"text",name:"nome",value:"",disabled:!1,form:"",customValidation:!1,validityMessage:"",pattern:void 0,min:void 0,max:void 0,step:void 0,minlength:void 0,maxlength:void 0,required:!1,readonly:!1,plaintext:!1,placeholder:"",supportText:"",labelHidden:!1,size:void 0,adaptive:!1,strengthMeter:!1,suggestions:!1},argTypes:{id:{control:"text",description:"ID del campo"},label:{control:"text",description:"Etichetta del campo"},type:{control:"select",options:me,table:{defaultValue:{summary:"text"}}},name:{control:"text"},value:{control:"text",description:"Valore del campo"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},form:{control:"text",description:"ID html del form a cui è associato il campo, se il campo non si trova all'interno di una form "},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},pattern:{control:"text",description:"Pattern di validazione del campo"},min:{control:"text",description:"Valore minimo consentito per un campo di tipo numerico o di tipo data"},max:{control:"text",description:"Valore massimo consentito per un campo di tipo numerico o di tipo data"},step:{control:"number",description:"Incremento per ogni step (tramite i pulsanti +/-) nel caso di input di tipo numerico o di tipo data"},minlength:{type:"number",description:"Lunghezza minima del valore da inserire. Usato anche per validare la robustezza della password",table:{defaultValue:{summary:'undefined. Se type="password": 8'}}},maxlength:{type:"number",description:"Lunghezza massima del valore da inserire."},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readonly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},plaintext:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se il campo è readonly, con l'attributo 'plaintext' il campo assume l'aspetto di testo normalizzato."},placeholder:{control:"text",description:"Testo segnaposto"},supportText:{name:"support-text",control:"text",description:"Testo di supporto"},labelHidden:{name:"label-hidden",control:"boolean",type:"boolean",description:"Se si vuole nascondere la label. Risulterà comunque accessibile per i lettori di schermo.",table:{defaultValue:{summary:"false"}}},size:{control:"select",options:pe,description:"Dimensione del campo: 'sm' | (stringa vuota) | 'lg' ",table:{defaultValue:{summary:void 0}}},adaptive:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:'Se il campo è `type="number"`, con l\'attributo `adaptive` il campo assume adatta la sua larghezza al contenuto'},strengthMeter:{name:"strength-meter",control:"boolean",type:"boolean",description:"Se si vuole mostrare o meno il misuratore di robustezza della password nel caso di type='password'",table:{defaultValue:{summary:"false"}}},suggestions:{name:"suggestions",control:"boolean",type:"boolean",description:"Se si vogliono mostrare i suggerimenti per l'insderimento di una password sicura.",table:{defaultValue:{summary:"false"}}}},parameters:{docs:{description:{component:`
<Description>Input accessibile e responsivo.</Description>

Per il corretto funzionamento degli elementi di tipo \`<it-input>\` è di fondamentale importanza l’utilizzo uno degli appositi attributi \`type\` (ad esempio, "email" per l’inserimento di indirizzi email o "number" per informazioni numeriche), in modo da sfruttare i controlli nativi dei browser più recenti come la verifica dell’email, l’utilizzo di metodo di input numerico ed altro.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Tutti gli attributi \`it-aria-*\` passati a \`<it-input>\` vengono applicati all'input generato.
</p></div></div>
`}}}},o={...n,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>i`${t({...e,type:"text",label:"Campo di testo",name:"testo",id:"exampleInputText"})}
    ${t({...e,type:"email",label:"Campo email",name:"email",id:"exampleInputEmail"})}
    ${t({...e,type:"number",label:"Campo numerico",name:"number",id:"exampleInputNumber"})}
    ${t({...e,type:"tel",label:"Campo telefonico",name:"telefono",id:"exampleInputTel"})}
    ${t({...e,type:"time",label:"Campo orario",name:"orario",id:"exampleInputTime"})}`},r={...n,name:"Testo segnaposto",args:{type:"text",placeholder:"Testo segnaposto",label:"Etichetta",name:"placeholder-example",id:"placeholder-example"},parameters:{docs:{description:{story:"\nÈ possibile abbinare al componente `<it-input>` un testo segnaposto (placeholder) per fornire indicazioni sul tipo di contenuto atteso. Questo testo non sostituisce l’etichetta, ma fornisce informazioni aggiuntive.\n"}}},render:e=>i`
    ${t({...e})}
  `},s={...n,name:"Testo di supporto",args:{type:"text",label:"Etichetta",placeholder:"Testo segnaposto",name:"supportText-example",id:"supportText-example",supportText:"Testo di supporto"},parameters:{docs:{description:{story:"In caso di necessità, è anche possibile utilizzare un ulteriore contenuto testuale sotto il campo di testo, indicando nell'attributo `support-text` il testo da visualizzare."}}},render:e=>i`
    ${t({...e})}
  `},l={...n,name:"Etichetta nascosta",args:{placeholder:"Cerca...",label:"Cerca nel sito",labelHidden:!0},parameters:{docs:{description:{story:"Se si vuole nascondere l'etichetta, come ad esempio nei campi di ricerca, è sufficiente passare l'attributo `label-hidden`."}}},render:e=>i`
    ${t({...e})}
  `},d={...n,name:"Icone o pulsanti",args:{placeholder:"Icone o pulsanti",type:"text",label:"Campo con icona",name:"field-icon-example",id:"field-icon-example",supportText:"Testo di supporto"},parameters:{docs:{description:{story:'<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità delle icone</span></div><p>Nel caso in cui l’icona è semanticamente rilevante e non spiegata dal testo che la segue, occorre passare al componente `<it-icon>` l\'attributo `label` che ne spieghi il significato (nel formato `<it-icon .... label="Significato dell\'icona"/>`)</p></div></div>'}}},render:e=>i`
    ${t({...e,children:i`<it-icon name="it-pencil" slot="prepend" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
  `},p={...n,parameters:{docs:{description:{story:"L'input di base ha una dimensione media che non necessita di alcuna classe aggiuntiva.\n\nPer modificare questa dimensione, è possiible utilizzare l'attributo `size` il cui valore può essere `sm` oppure `lg`.\n\nPer modificare invece la dimensione dell’icona, è possibile utilizzare l'attributo `size` sull'icona in questo modo:\n<table>\n<thead>\n  <tr><th>Dimensione input</th><th>Attributo size (di it-input)</th><th>Dimensione icona</th></tr>\n</thead>\n<tbody>\n  <tr><td>Grande</td><td>`lg`</td><td>`md`</td></tr>\n  <tr><td>Base (default)</td><td></td><td>`sm`</td></tr>\n  <tr><td>Piccola</td><td>`sm`</td><td>`xs`</td></tr>\n</tbody>\n</table>\n"}}},args:{type:"text",placeholder:"Testo segnaposto"},render:e=>i`
    ${t({...e,label:"Campo di dimensione grande",name:"field-big-example",id:"field-big-example",size:"lg",children:i`<it-icon name="it-pencil" slot="prepend" size="md"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
    ${t({...e,label:"Campo di dimensione base",name:"field-sizebase-example",id:"field-sizebase-example",placeholder:"Testo segnaposto",children:i`<it-icon name="it-pencil" slot="prepend" size="sm"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
    ${t({...e,label:"Campo di dimensione piccola",name:"field-small-example",id:"field-small-example",size:"sm",children:i`<it-icon name="it-pencil" slot="prepend" size="xs"></it-icon>
        <it-button variant="primary" slot="append">Invio</it-button>`})}
  `},m={...n,parameters:{docs:{description:{story:"Aggiungi l’attributo `disabled` ad un `<it-input>` per impedire la modifica del valore contenuto e non inviare i dati in esso contenuti."}}},args:{type:"text",label:"Campo disabilitato",name:"field-disabled-example",id:"field-disabled-example",disabled:!0},render:e=>i`
    ${t({...e})}
  `},c={...n,parameters:{docs:{description:{story:"Aggiungi l’attributo `readonly` ad un `<it-input>` per impedire la modifica del valore contenuto.\n<br/><br/><h4>Readonly normalizzato</h4>Se per qualche motivo vuoi avere gli elementi input readonly nella forma stilizzata come testo, aggiungi l'attributo `plaintext` a `<it-input>`."}}},args:{type:"text",readonly:!0,value:"Contenuto in sola lettura"},render:e=>i`
    ${t({...e,label:"Campo readonly",name:"field-readonly-example",id:"field-readonly-example"})}
    ${t({...e,label:"Campo readonly normalizzato come plaintext",name:"field-readonlyplaintext-example",id:"field-readonlyplaintext-example",plaintext:!0})}
  `},u={...n,parameters:{docs:{description:{story:'Per semplificare l’inserimento della password, il componente `<it-input>` di tipo password include un pulsante che mostra i caratteri digitati.\n        È inoltre possibile aggiungere un testo di supporto che aiuti nella compilazione, attraverso l’attributo `support-text`.\n        <br/><br/>\n        <h4>Misuratore sicurezza e suggerimenti</h4>\nNel caso di un campo per la scelta di una nuova password, è possibile abbinare controlli per segnalare quanto la password che si sta inserendo segua alcuni suggerimenti di sicurezza, come la lunghezza minima o l’uso di caratteri speciali, attraverso gli attributi `strength-meter="true"` e `minlength` per modificare la lunghezza minima richiesta per la password.\n\nInoltre, è possibile restituire all’utente una lista dei suggerimenti, con indicati quelli che sono stati soddisfatti, attraverso l’attributo `suggestions="true"`.\n'}}},args:{type:"password",label:"Campo password",supportText:"Inserisci almeno 8 caratteri e alcuni caratteri speciali.",minlength:8},render:e=>i`
    ${t({...e,name:"field-password-example",id:"field-password-example"})}
    ${t({...e,name:"field-password-strength-example",id:"field-password-strength-example",strengthMeter:!0,suggestions:!0})}
  `},g={...n,name:"Area di testo",parameters:{docs:{description:{story:'Per permettere agli utenti di inserire un testo esteso (ad esempio per lasciare commenti o informazioni), è bene utilizzare un elemento `<it-input>` con `type="textarea"`.'}}},args:{type:"textarea",label:"Area di testo",name:"textarea-example",id:"textarea-example",placeholder:"Testo segnaposto"},render:e=>i`
    ${t({...e})}
  `},v={...n,name:"Validazione e gestione degli errori",parameters:{docs:{description:{story:"Se non è stata impostata la validazione custom tramite l'attributo `custom-validation`, e sono stati impostati uno di questi attributi <ul><li>`required`</li><li>`pattern`</li><li>`min`</li><li>`max`</li><li>`step`</li><li>`minlength`</li><li>`maxlength`</li></ul> viene effettuata una validazione interna utilizzando la validazione nativa del browser.\n <br/><br/><h4>Personalizzazione dei messaggi di errore</h4>E' possibile personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione):\n        <ul><li>`validityRequired`: messaggio che viene mostrato quando il campo è required e non è compilato</li>\n        <li>`validityPattern`: messaggio che viene mostrato quando il campo non rispetta il pattern indicato</li>\n        <li>`validityMinlength`: messaggio che viene mostrato quando la lunghezza del valore del campo è troppo corta rispetto al valore passatto nell'attributo `min-length`</li>\n         <li>`validityMaxlength`: messaggio che viene mostrato quando la lunghezza del valore del campo è troppo lunga rispetto al valore passatto nell'attributo `max-length`</li>\n      </ul>\n      Per gli altri errori di validazione non indicati, verranno mostrati i messsaggi di errore nativi del browser.\n      <h4>Validazione esterna (validazione custom)</h4>\n        E' inoltre possibile validare il campo esternamente (via js ad esempio, o lato server), impostando l' attributo `custom-validation=\"true\"`. In questo modo la validazione di default del browser effettuata internamente al componente è disabilitata.\n        <br/><br/><h5>Campo invalido</h5>Nel caso il campo non sia valido, è necessario invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo `validity-message=\"Messaggio di errore\"`.\n        <br/><br/><h5>Campo valido</h5>Per riportare il campo ad uno stato 'valido', è sufficiente impostare il messaggio di errore a vuoto: `validity-message=\"\"`."}}},args:{type:"text",placeholder:"Testo segnaposto"},render:e=>i`
    ${t({...e,label:"Campo obbligatorio",name:"required-example",id:"required-example",required:!0})}
    ${t({...e,label:"Validazione esterna",name:"external-validation-example",id:"external-validation-example",validityMessage:"Questo campo è obbligatorio!!!",customValidation:!0,required:void 0})}
  `},b={...n,name:"Gestione degli eventi",parameters:{docs:{description:{story:"E' possibile gestire gli eventi di `it-input`, `it-blur`, `it-change`, `it-focus`, `it-click` per effettuare operazioni personalizzate, come la validazione esterna o l'aggiornamento di altri campi.\n        <br/><br/>\n        È sufficiente aggiungere un event listener al componente `<it-input>` per intercettare gli eventi desiderati. Ad esempio, per gestire l'evento di input, è possibile utilizzare il seguente codice:\n\n```js\ndocument.querySelector('it-input#event-input-example').addEventListener('it-input', (event) => {\n  console.log('Input event:', event);\n  alert('Input event);\n});\n```\n\nIl componente, emette anche un evento di tipo `it-input-ready` quando l'input è pronto e caricato nel DOM:\n\n```js\ndocument.querySelector('it-input#event-input-example').addEventListener('it-input-ready', (event) => {\n  console.log('Input ready:', event);\n});\n```\n      "}}},args:{type:"text",label:"Prova evento di input",name:"event-input-example",id:"event-input-example",placeholder:"Testo segnaposto"},render:e=>i(y||(y=ge([`
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
  `])),t({...e}))},h={...de({}),tags:["!dev"]},z={name:"i18n",tags:["!dev"],render:()=>i`<div class="hide-preview"></div>`,parameters:{viewMode:"docs",docs:{description:{story:`
Per questo componente sono disponibili alcune stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = {
  ${JSON.stringify(ce).replaceAll('{"','"').replaceAll('",',`",
	`).replaceAll('"}','"')}
}
\`\`\`
`}}}};var f,$,w;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(w=($=o.parameters)==null?void 0:$.docs)==null?void 0:w.source}}};var C,S,I;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(S=r.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var q,P,T;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(T=(P=s.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var E,M,V;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(V=(M=l.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var A,L,D;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(L=d.parameters)==null?void 0:L.docs)==null?void 0:D.source}}};var N,j,_;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(_=(j=p.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var O,G,H;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var R,U,F;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(U=c.parameters)==null?void 0:U.docs)==null?void 0:F.source}}};var Q,B,J;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(J=(B=u.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var k,Y,Z;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var K,W,X;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(X=(W=v.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var ee,te,ie;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ie=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var ae,ne,oe;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...StoryFormControlMethodAndProps({}),
  tags: ['!dev']
}`,...(oe=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var re,se,le;z.parameters={...z.parameters,docs:{...(re=z.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(se=z.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};const Te=["EsempioInterattivo","Placeholder","TestoDiSupporto","LabelHidden","IconeOPulsanti","Dimensioni","Disabilitato","Readonly","Password","Textarea","GestioneErrori","GestioneEventi","MetodiEPropPubblici","I18n"];export{p as Dimensioni,m as Disabilitato,o as EsempioInterattivo,v as GestioneErrori,b as GestioneEventi,z as I18n,d as IconeOPulsanti,l as LabelHidden,h as MetodiEPropPubblici,u as Password,r as Placeholder,c as Readonly,s as TestoDiSupporto,g as Textarea,Te as __namedExportsOrder,n as default};
