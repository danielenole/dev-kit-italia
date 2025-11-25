import{o as n,x as o}from"./iframe-DTWXh8gn.js";import{S as W}from"./formControlReusableStories-Dh8XFgFg.js";import"./form-control-CDIqqFx3.js";import"./preload-helper-Dp1pzeXC.js";const i=e=>o`<it-radio
    id="${n(e.id||void 0)}"
    value="${n(e.value||void 0)}"
    ?checked="${e.checked}"
    ?disabled="${e.disabled}"
    support-text="${n(e.supportText||void 0)}"
    form="${n(e.form||void 0)}"
    ?custom-validation="${e.customValidation}"
    validity-message="${n(e.validityMessage||void 0)}"
  >
    <span slot="label">${e.label||""}</span>
  </it-radio>`,a={title:"Componenti/Form/Radio",tags:["autodocs","new","a11y-ok","web-component"],component:"it-radio-group",args:{id:"",name:"gruppo1",disabled:!1,supportText:"",grouped:!1,inline:!1,form:"",customValidation:!1,validityMessage:"",required:!1},argTypes:{id:{control:"text",description:"ID del campo"},name:{control:"text",description:"Nome del campo. I radio dello stesso gruppo devono avere lo stesso name."},grouped:{control:"boolean",type:"boolean",description:"Se il radio-group deve avere i suoi elementi raggruppati visivamente",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",type:"boolean",description:"Se il gruppo di radio è disabilitato. Per l'omonimo attributo del componente it-radio, vedi la sezione dedicata",table:{defaultValue:{summary:"false"}}},inline:{control:"boolean",type:"boolean",description:"Se il radio-group deve avere i suoi elementi visualizzati in linea",table:{defaultValue:{summary:"false"}}},supportText:{name:"support-text",control:"text",description:"Testo di supporto per un singolo componente it-radio"},form:{control:"text",description:"ID html del form a cui è associato il componente it-radio-group, se non si trova all'interno di una form "},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del radio group è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",description:"Messaggio da mostrare quando il radio group è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},required:{control:"boolean",type:"boolean",description:"Se il radio group è obbligatorio",table:{defaultValue:{summary:"false"}}}},parameters:{docs:{description:{component:'\n<Description>Radio button accessibili e personalizzabili.</Description>\n\nIl componente `<it-radio-group>` permette di raggruppare una serie di `<it-radio>`, gestendo la selezione di un solo elemento alla volta.\n\nOgni `<it-radio>` all\'interno del gruppo deve avere un valore unico nell\'attributo `value`.\n\n<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>\n<p>\nIl componente implementa completamente le specifiche ARIA per i gruppi di radio button: `<it-radio-group>` gestisce automaticamente gli attributi `role="radiogroup"` e `aria-labelledby`, mentre ogni `<it-radio>` riceve gli attributi `role="radio"`, `aria-checked` e `aria-disabled` in base al proprio stato.</p>\n<p>\nA causa delle limitazioni architetturali dei Web Components e del Shadow DOM, non è possibile utilizzare il meccanismo nativo HTML basato su `<fieldset>` e `<legend>`. Questo approccio, pur essendo standard, presenta notevoli problematiche di compatibilità cross-browser con gli screen reader: test approfonditi hanno dimostrato comportamenti inconsistenti tra diverse combinazioni di browser, sistemi operativi e tecnologie assistive. In alcuni casi la `<legend>` non viene annunciata, in altri il gruppo non viene riconosciuto come tale, mentre in altri ancora mancano informazioni sulla posizione delle opzioni all\'interno del gruppo. Per superare queste limitazioni e garantire un\'esperienza uniforme e accessibile su tutte le piattaforme, il componente richiede che l\'etichetta del gruppo venga fornita tramite lo slot `label`, assicurando così la corretta associazione semantica anche all\'interno dello Shadow DOM.</p>\n<p>L\'implementazione si conforma al pattern "Radio Group" definito nelle [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio/), adottando la gestione della tastiera e degli stati prevista dalle linee guida di accessibilità. Questo approccio garantisce che le tecnologie assistive, in particolare gli screen reader, comunichino correttamente la posizione di ogni opzione nel gruppo (es. "1 di 3", "2 di 3", "3 di 3"), migliorando significativamente l\'esperienza utente per le persone con disabilità.\n</p></div></div>\n'}}}},t={...a,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},decorators:[e=>o` <div style="min-width:450px">${e()}</div>`],render:e=>o`

      <it-radio-group
        name="${e.name}"
        ?inline="${e.inline}"
        ?grouped="${e.grouped}"
        .form="${e.form}"
        ?required="${e.required}"
        ?custom-validation="${e.customValidation}"
        validity-message="${n(e.validityMessage||void 0)}"
      >
        <span slot="label">Esempio interattivo</span>
        ${i({...e,id:"radio1",label:"Radio di esempio 1",value:"opzione1"})}
        ${i({...e,id:"radio2",label:"Radio di esempio 2",value:"opzione2"})}
        ${i({...e,id:"radio3",label:"Radio di esempio 3",value:"opzione3"})}
      </it-radio-group>
    </div>
  `},r={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:`
Per la personalizzazione degli stili del componente \`<it-radio>\` si può usare il selettore \`::part\` con i seguenti valori:

| Part | Descrizione |
|------|-------------|
| \`input\` | Il contenitore dell'input nascosto |
| \`button\` | Il cerchio del radio button visibile |
| \`input-wrapper\` | Il wrapper principale che contiene il radio control e il testo di supporto |
| \`radio-control\` | Il contenitore che racchiude il button e la label |
| \`label\` | L'etichetta del radio button |

[Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).

Esempio di personalizzazione:

\`\`\`css
it-radio::part(button) {
  border-color: #0066cc;
}

it-radio::part(label) {
  font-weight: bold;
  color: #333;
}
\`\`\`
`}}},render:()=>o`<div class="hide-preview"></div>`},l={...a,name:"Utilizzo",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nIl componente `<it-radio>` deve essere sempre utilizzato all'interno di un `<it-radio-group>` e richiede obbligatoriamente:\n\n- Un **attributo `value`** univoco per identificare l'opzione\n- Una **etichetta definita tramite slot** `<span slot=\"label\">Testo dell'etichetta</span>`\n\n#### Proprietà principali\n\n| Proprietà | Tipo | Descrizione |\n|-----------|------|-------------|\n| `value` | `string` | Valore univoco del radio button (obbligatorio) |\n| `disabled` | `boolean` | Se `true`, disabilita il singolo radio button |\n| `support-text` | `string` | Testo di supporto visualizzato sotto l'etichetta (obbligatorio) |\n"}}},render:()=>o`<div class="hide-preview"></div>`},s={...a,name:"Definizione dell'etichetta",parameters:{docs:{description:{story:"\n\nSia `<it-radio-group>` che `<it-radio>` espongono uno slot `label` per definire le rispettive etichette.\n\nL'etichetta del gruppo `<it-radio-group>` viene definita tramite lo slot `label` dell'elemento `<it-radio-group>` e identifica l'intero gruppo di radio button. È possibile utilizzare HTML all'interno dello slot per creare etichette formattate.\n\nOgni `<it-radio>` richiede obbligatoriamente un'etichetta definita tramite il proprio slot `label`. L'etichetta identifica la singola opzione all'interno del gruppo. È possibile utilizzare anche HTML all'interno dello slot per creare etichette più complesse con formattazione o altri elementi.\n"}}},render:e=>o`
    <it-radio-group name="gruppo-label">
      <span slot="label">Gruppo con label formattate</span>
      ${i({...e,id:"radio-label1",label:"Etichetta semplice",value:"opzione1"})}
      <it-radio id="radio-label2" value="opzione2">
        <span slot="label"><strong>Etichetta</strong> con <em>formattazione</em></span>
      </it-radio>
      <it-radio id="radio-label3" value="opzione3">
        <span slot="label">Etichetta semplice</span>
      </it-radio>
    </it-radio-group>
  `},d={...a,name:"Testo di supporto",parameters:{docs:{description:{story:"In caso di necessità, è possibile utilizzare un contenuto testuale sotto il radio button tramite l'attributo `support-text` del componente `<it-radio>`."}}},render:e=>o`
    <it-radio-group name="gruppo-support">
      <span slot="label">Esempio con testo di supporto</span>
      ${i({...e,id:"radio-support1",label:"Radio con testo di supporto",value:"opzione1",supportText:"Questo è un testo di supporto per il radio button"})}
      ${i({...e,id:"radio-support2",label:"Altro radio",value:"opzione2"})}
    </it-radio-group>
  `},p={...a,parameters:{docs:{description:{story:"Per allineare orizzontalmente i radio button basterà aggiungere l'attributo `inline` a `<it-radio-group>`."}}},render:e=>o`
    <it-radio-group name="gruppo-inline" inline>
      <span slot="label">Esempio inline</span>
      ${i({...e,id:"radio-inline1",label:"Radio inline 1",value:"opzione1",checked:!0})}
      ${i({...e,id:"radio-inline2",label:"Radio inline 2",value:"opzione2"})}
      ${i({...e,id:"radio-inline3",label:"Radio inline 3",value:"opzione3"})}
    </it-radio-group>
  `},u={...a,name:"Stato disabilitato",parameters:{docs:{description:{story:`

#### Radio singolo disabilitato

Aggiungi l'attributo \`disabled\` ad un singolo \`<it-radio>\` per disabilitare quell'opzione.

#### Gruppo di radio disabilitato

Se invece intendi disabilitare l'intero gruppo, aggiungi l'attributo \`disabled\` a \`<it-radio-group>\`. In questo modo tutti i radio al suo interno risulteranno disabilitati automaticamente.
`}}},render:e=>o`
    <div class="row">
      <div class="col-12 col-md-6">
        <it-radio-group name="gruppo-alcuni-disabled" value="opzione1">
          <span slot="label">Esempio con alcuni disabilitati</span>
          ${i({...e,id:"radio-disabled1",label:"Radio selezionato e disabilitato",value:"opzione1",disabled:!0})}
          ${i({...e,id:"radio-disabled2",label:"Radio disabilitato",value:"opzione2",disabled:!0})}
          ${i({...e,id:"radio-disabled3",label:"Radio abilitato",value:"opzione3"})}
        </it-radio-group>
        </div>
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-tutti-disabled" value="opzione2" disabled>
            <span slot="label">Esempio con tutti disabilitati</span>
            ${i({...e,id:"radio-disabled4",label:"Radio selezionato e disabilitato",value:"opzione1"})}
            ${i({...e,id:"radio-disabled5",label:"Radio disabilitato",value:"opzione2"})}
            ${i({...e,id:"radio-disabled6",label:"Radio abilitato",value:"opzione3"})}
          </it-radio-group>
        </div>
      </div>
    </div>
  `},c={...a,name:"Raggruppati visivamente",parameters:{docs:{description:{story:"Per raggruppare visivamente i radio button occorrerà aggiungere l'attributo `group` a `<it-radio-group>`. L'elemento grafico di selezione verrà allineato alla destra del contenuto testuale."}}},render:e=>o`
    <div>
      <div class="row">
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-visual" grouped>
            <span slot="label">Esempio grouped senza testo di supporto</span>
            ${i({...e,id:"radio-group1",label:"Opzione 1",value:"opzione1",checked:!0})}
            ${i({...e,id:"radio-group2",label:"Opzione 2",value:"opzione2"})}
            ${i({...e,id:"radio-group3",label:"Opzione 3",value:"opzione3"})}
          </it-radio-group>
        </div>
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-visual2" grouped>
            <span slot="label">Esempio grouped con testo di supporto</span>
            ${i({...e,id:"radio-group4",label:"Opzione 1",supportText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero",value:"opzione1",checked:!0})}
            ${i({...e,id:"radio-group5",label:"Opzione 2",supportText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero",value:"opzione2"})}
            ${i({...e,id:"radio-group6",label:"Opzione 3",supportText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero",value:"opzione3"})}
          </it-radio-group>
        </div>
      </div>
    </div>
  `},m={name:"Validazione e gestione degli errori",parameters:{docs:{description:{story:`
Se non è stata impostata la validazione custom tramite l'attributo \`custom-validation\`, e sono stati impostati attributi come \`required\`, viene effettuata una validazione interna utilizzando la validazione nativa del browser.
Verranno mostrati i messaggi di errore nativi, e i componenti \`<it-radio-group>\` e \`<it-radio>\` riceveranno l'attributo \`aria-invalid="true"\` quando non validi.

\`\`\`html
<form>
  <it-radio-group name="scelta" required>
    <span slot="label">Seleziona un'opzione (obbligatorio)</span>
    <it-radio value="si">
      <span slot="label">Sì, accetto</span>
    </it-radio>
    <it-radio value="no">
      <span slot="label">No, non accetto</span>
    </it-radio>
  </it-radio-group>
  <it-button type="submit" variant="primary">Invia</it-button>
</form>
\`\`\`

<br/>
### Personalizzazione dei messaggi di errore

E' possibile personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione):
<ul>
  <li>\`validityRequired\`: messaggio che viene mostrato quando il radio group è obbligatorio e nessuna opzione è stata selezionata</li>
</ul>

Non esistono altre possibili validazioni native per questo tipo di input. Per validazioni custom dovrai fornire i tuoi messaggi di errore.


`}}},render:()=>o`
    <form id="demo-form">
      <it-radio-group name="scelta" required>
        <span slot="label">Esempio con validazione</span>
        <it-radio value="si">
          <span slot="label">Sì, accetto</span>
        </it-radio>
        <it-radio value="no">
          <span slot="label">No, non accetto</span>
        </it-radio>
        <it-radio value="forse">
          <span slot="label">Forse</span>
        </it-radio>
      </it-radio-group>
      <it-button type="submit" class="mt-3" variant="primary">Invia</it-button>
      <p class="form-text mt-2">Prova a inviare il form senza selezionare nulla per vedere la validazione.</p>
    </form>
  `},b={...W(""),tags:["!dev"]};var g,v,z;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
  decorators: [Story => html\` <div style="min-width:450px">\${Story()}</div>\`],
  render: params => html\`

      <it-radio-group
        name="\${params.name}"
        ?inline="\${params.inline}"
        ?grouped="\${params.grouped}"
        .form="\${params.form}"
        ?required="\${params.required}"
        ?custom-validation="\${params.customValidation}"
        validity-message="\${ifDefined(params.validityMessage || undefined)}"
      >
        <span slot="label">Esempio interattivo</span>
        \${renderComponent({
    ...params,
    id: 'radio1',
    label: 'Radio di esempio 1',
    value: 'opzione1'
  })}
        \${renderComponent({
    ...params,
    id: 'radio2',
    label: 'Radio di esempio 2',
    value: 'opzione2'
  })}
        \${renderComponent({
    ...params,
    id: 'radio3',
    label: 'Radio di esempio 3',
    value: 'opzione3'
  })}
      </it-radio-group>
    </div>
  \`
}`,...(z=(v=t.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var h,f,$;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
Per la personalizzazione degli stili del componente \\\`<it-radio>\\\` si può usare il selettore \\\`::part\\\` con i seguenti valori:

| Part | Descrizione |
|------|-------------|
| \\\`input\\\` | Il contenitore dell'input nascosto |
| \\\`button\\\` | Il cerchio del radio button visibile |
| \\\`input-wrapper\\\` | Il wrapper principale che contiene il radio control e il testo di supporto |
| \\\`radio-control\\\` | Il contenitore che racchiude il button e la label |
| \\\`label\\\` | L'etichetta del radio button |

[Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).

Esempio di personalizzazione:

\\\`\\\`\\\`css
it-radio::part(button) {
  border-color: #0066cc;
}

it-radio::part(label) {
  font-weight: bold;
  color: #333;
}
\\\`\\\`\\\`
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...($=(f=r.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};var y,S,R;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...meta,
  name: 'Utilizzo',
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
Il componente \\\`<it-radio>\\\` deve essere sempre utilizzato all'interno di un \\\`<it-radio-group>\\\` e richiede obbligatoriamente:

- Un **attributo \\\`value\\\`** univoco per identificare l'opzione
- Una **etichetta definita tramite slot** \\\`<span slot="label">Testo dell'etichetta</span>\\\`

#### Proprietà principali

| Proprietà | Tipo | Descrizione |
|-----------|------|-------------|
| \\\`value\\\` | \\\`string\\\` | Valore univoco del radio button (obbligatorio) |
| \\\`disabled\\\` | \\\`boolean\\\` | Se \\\`true\\\`, disabilita il singolo radio button |
| \\\`support-text\\\` | \\\`string\\\` | Testo di supporto visualizzato sotto l'etichetta (obbligatorio) |
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...(R=(S=l.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var I,w,E;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...meta,
  name: "Definizione dell'etichetta",
  parameters: {
    docs: {
      description: {
        story: \`

Sia \\\`<it-radio-group>\\\` che \\\`<it-radio>\\\` espongono uno slot \\\`label\\\` per definire le rispettive etichette.

L'etichetta del gruppo \\\`<it-radio-group>\\\` viene definita tramite lo slot \\\`label\\\` dell'elemento \\\`<it-radio-group>\\\` e identifica l'intero gruppo di radio button. È possibile utilizzare HTML all'interno dello slot per creare etichette formattate.

Ogni \\\`<it-radio>\\\` richiede obbligatoriamente un'etichetta definita tramite il proprio slot \\\`label\\\`. L'etichetta identifica la singola opzione all'interno del gruppo. È possibile utilizzare anche HTML all'interno dello slot per creare etichette più complesse con formattazione o altri elementi.
\`
      }
    }
  },
  render: params => html\`
    <it-radio-group name="gruppo-label">
      <span slot="label">Gruppo con label formattate</span>
      \${renderComponent({
    ...params,
    id: 'radio-label1',
    label: 'Etichetta semplice',
    value: 'opzione1'
  })}
      <it-radio id="radio-label2" value="opzione2">
        <span slot="label"><strong>Etichetta</strong> con <em>formattazione</em></span>
      </it-radio>
      <it-radio id="radio-label3" value="opzione3">
        <span slot="label">Etichetta semplice</span>
      </it-radio>
    </it-radio-group>
  \`
}`,...(E=(w=s.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var q,x,P;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...meta,
  name: 'Testo di supporto',
  parameters: {
    docs: {
      description: {
        story: \`In caso di necessità, è possibile utilizzare un contenuto testuale sotto il radio button tramite l'attributo \\\`support-text\\\` del componente \\\`<it-radio>\\\`.\`
      }
    }
  },
  render: params => html\`
    <it-radio-group name="gruppo-support">
      <span slot="label">Esempio con testo di supporto</span>
      \${renderComponent({
    ...params,
    id: 'radio-support1',
    label: 'Radio con testo di supporto',
    value: 'opzione1',
    supportText: 'Questo è un testo di supporto per il radio button'
  })}
      \${renderComponent({
    ...params,
    id: 'radio-support2',
    label: 'Altro radio',
    value: 'opzione2'
  })}
    </it-radio-group>
  \`
}`,...(P=(x=d.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var T,C,M;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`Per allineare orizzontalmente i radio button basterà aggiungere l'attributo \\\`inline\\\` a \\\`<it-radio-group>\\\`.\`
      }
    }
  },
  render: params => html\`
    <it-radio-group name="gruppo-inline" inline>
      <span slot="label">Esempio inline</span>
      \${renderComponent({
    ...params,
    id: 'radio-inline1',
    label: 'Radio inline 1',
    name: 'gruppo-inline',
    value: 'opzione1',
    checked: true
  })}
      \${renderComponent({
    ...params,
    id: 'radio-inline2',
    label: 'Radio inline 2',
    name: 'gruppo-inline',
    value: 'opzione2'
  })}
      \${renderComponent({
    ...params,
    id: 'radio-inline3',
    label: 'Radio inline 3',
    name: 'gruppo-inline',
    value: 'opzione3'
  })}
    </it-radio-group>
  \`
}`,...(M=(C=p.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var D,L,V;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...meta,
  name: 'Stato disabilitato',
  parameters: {
    docs: {
      description: {
        story: \`

#### Radio singolo disabilitato

Aggiungi l'attributo \\\`disabled\\\` ad un singolo \\\`<it-radio>\\\` per disabilitare quell'opzione.

#### Gruppo di radio disabilitato

Se invece intendi disabilitare l'intero gruppo, aggiungi l'attributo \\\`disabled\\\` a \\\`<it-radio-group>\\\`. In questo modo tutti i radio al suo interno risulteranno disabilitati automaticamente.
\`
      }
    }
  },
  render: params => html\`
    <div class="row">
      <div class="col-12 col-md-6">
        <it-radio-group name="gruppo-alcuni-disabled" value="opzione1">
          <span slot="label">Esempio con alcuni disabilitati</span>
          \${renderComponent({
    ...params,
    id: 'radio-disabled1',
    label: 'Radio selezionato e disabilitato',
    value: 'opzione1',
    disabled: true
  })}
          \${renderComponent({
    ...params,
    id: 'radio-disabled2',
    label: 'Radio disabilitato',
    name: 'gruppo-disabled',
    value: 'opzione2',
    disabled: true
  })}
          \${renderComponent({
    ...params,
    id: 'radio-disabled3',
    label: 'Radio abilitato',
    name: 'gruppo-disabled',
    value: 'opzione3'
  })}
        </it-radio-group>
        </div>
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-tutti-disabled" value="opzione2" disabled>
            <span slot="label">Esempio con tutti disabilitati</span>
            \${renderComponent({
    ...params,
    id: 'radio-disabled4',
    label: 'Radio selezionato e disabilitato',
    value: 'opzione1'
  })}
            \${renderComponent({
    ...params,
    id: 'radio-disabled5',
    label: 'Radio disabilitato',
    value: 'opzione2'
  })}
            \${renderComponent({
    ...params,
    id: 'radio-disabled6',
    label: 'Radio abilitato',
    value: 'opzione3'
  })}
          </it-radio-group>
        </div>
      </div>
    </div>
  \`
}`,...(V=(L=u.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var O,A,k;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...meta,
  name: 'Raggruppati visivamente',
  parameters: {
    docs: {
      description: {
        story: \`Per raggruppare visivamente i radio button occorrerà aggiungere l'attributo \\\`group\\\` a \\\`<it-radio-group>\\\`. L'elemento grafico di selezione verrà allineato alla destra del contenuto testuale.\`
      }
    }
  },
  render: params => html\`
    <div>
      <div class="row">
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-visual" grouped>
            <span slot="label">Esempio grouped senza testo di supporto</span>
            \${renderComponent({
    ...params,
    id: 'radio-group1',
    label: 'Opzione 1',
    name: 'gruppo-visual',
    value: 'opzione1',
    checked: true
  })}
            \${renderComponent({
    ...params,
    id: 'radio-group2',
    label: 'Opzione 2',
    name: 'gruppo-visual',
    value: 'opzione2'
  })}
            \${renderComponent({
    ...params,
    id: 'radio-group3',
    label: 'Opzione 3',
    name: 'gruppo-visual',
    value: 'opzione3'
  })}
          </it-radio-group>
        </div>
        <div class="col-12 col-md-6">
          <it-radio-group name="gruppo-visual2" grouped>
            <span slot="label">Esempio grouped con testo di supporto</span>
            \${renderComponent({
    ...params,
    id: 'radio-group4',
    label: 'Opzione 1',
    supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
    name: 'gruppo-visual2',
    value: 'opzione1',
    checked: true
  })}
            \${renderComponent({
    ...params,
    id: 'radio-group5',
    label: 'Opzione 2',
    supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
    name: 'gruppo-visual2',
    value: 'opzione2'
  })}
            \${renderComponent({
    ...params,
    id: 'radio-group6',
    label: 'Opzione 3',
    supportText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas molestie libero',
    name: 'gruppo-visual2',
    value: 'opzione3'
  })}
          </it-radio-group>
        </div>
      </div>
    </div>
  \`
}`,...(k=(A=c.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var U,G,N;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Validazione e gestione degli errori',
  parameters: {
    docs: {
      description: {
        story: \`
Se non è stata impostata la validazione custom tramite l'attributo \\\`custom-validation\\\`, e sono stati impostati attributi come \\\`required\\\`, viene effettuata una validazione interna utilizzando la validazione nativa del browser.
Verranno mostrati i messaggi di errore nativi, e i componenti \\\`<it-radio-group>\\\` e \\\`<it-radio>\\\` riceveranno l'attributo \\\`aria-invalid="true"\\\` quando non validi.

\\\`\\\`\\\`html
<form>
  <it-radio-group name="scelta" required>
    <span slot="label">Seleziona un'opzione (obbligatorio)</span>
    <it-radio value="si">
      <span slot="label">Sì, accetto</span>
    </it-radio>
    <it-radio value="no">
      <span slot="label">No, non accetto</span>
    </it-radio>
  </it-radio-group>
  <it-button type="submit" variant="primary">Invia</it-button>
</form>
\\\`\\\`\\\`

<br/>
### Personalizzazione dei messaggi di errore

E' possibile personalizzare alcuni dei messaggi di errore di validazione, traducendo le seguenti stringhe tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione):
<ul>
  <li>\\\`validityRequired\\\`: messaggio che viene mostrato quando il radio group è obbligatorio e nessuna opzione è stata selezionata</li>
</ul>

Non esistono altre possibili validazioni native per questo tipo di input. Per validazioni custom dovrai fornire i tuoi messaggi di errore.


\`
      }
    }
  },
  render: () => html\`
    <form id="demo-form">
      <it-radio-group name="scelta" required>
        <span slot="label">Esempio con validazione</span>
        <it-radio value="si">
          <span slot="label">Sì, accetto</span>
        </it-radio>
        <it-radio value="no">
          <span slot="label">No, non accetto</span>
        </it-radio>
        <it-radio value="forse">
          <span slot="label">Forse</span>
        </it-radio>
      </it-radio-group>
      <it-button type="submit" class="mt-3" variant="primary">Invia</it-button>
      <p class="form-text mt-2">Prova a inviare il form senza selezionare nulla per vedere la validazione.</p>
    </form>
  \`
}`,...(N=(G=m.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var F,H,Q;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:"{\n  ...StoryFormControlMethodAndProps('', `|\\`click()\\`| Triggera l'evento di click sull'input reale | - |`),\n  tags: ['!dev']\n}",...(Q=(H=b.parameters)==null?void 0:H.docs)==null?void 0:Q.source}}};const K=["EsempioInterattivo","PersonalizzazioneDegliStili","ComeUsareItRadio","DefinizioneDellaLabel","TestoDiSupporto","Inline","Disabilitato","RaggruppatiVisivamente","RadioGroupRequired","MetodiEPropPubblici"];export{l as ComeUsareItRadio,s as DefinizioneDellaLabel,u as Disabilitato,t as EsempioInterattivo,p as Inline,b as MetodiEPropPubblici,r as PersonalizzazioneDegliStili,m as RadioGroupRequired,c as RaggruppatiVisivamente,d as TestoDiSupporto,K as __namedExportsOrder,a as default};
