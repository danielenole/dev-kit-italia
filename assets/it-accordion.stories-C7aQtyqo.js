import{x as i,o as R}from"./iframe-CPkArXh1.js";import{C as _}from"./reusableUsageGuidelinesStories-BnFSQHGT.js";import"./form-control-B85VX68e.js";const w=["single","multiple"],Q=e=>i`
  <it-accordion-item ?default-open="${e.defaultOpen}">
    <span slot="heading">${R(e.label)}</span>
    <div slot="content">${e.content}</div>
  </it-accordion-item>
`,p=(e,t=[])=>i`
  <it-accordion
    mode="${e.mode}"
    ?background-active="${e.backgroundActive}"
    ?background-hover="${e.backgroundHover}"
    ?left-icon="${e.leftIcon}"
  >
    ${t.map(u=>Q(u))}
  </it-accordion>
`,m=[{label:"Elemento richiudibile #1",content:"Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.",defaultOpen:!0},{label:"Elemento richiudibile #2",content:"Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis."},{label:"Elemento richiudibile #3",content:"Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis."}],G={title:"Componenti/Accordion",tags:["a11y-ok","web-component"],component:"it-accordion",args:{mode:"multiple",backgroundActive:!1,backgroundHover:!1,leftIcon:!1},decorators:[(e,t)=>{var u;return((u=t==null?void 0:t.parameters)==null?void 0:u.useMetaDecorator)===!1?e():i`<div style="min-height:350px;display:flex;align-items:center">${e()}</div>`}],argTypes:{mode:{control:"select",description:"Se impostato a `single`, solo un elemento dell'accordion può essere aperto contemporaneamente. Il default è `multiple`.",table:{defaultValue:{summary:"multiple"}},options:w},backgroundActive:{control:"boolean",description:"Applica sfondo primario agli elementi attivi (quando il contenuto è visibile)",table:{defaultValue:{summary:"false"}},name:"background-active"},backgroundHover:{control:"boolean",description:"Applica sfondo primario agli elementi al passaggio del mouse",table:{defaultValue:{summary:"false"}},name:"background-hover"},leftIcon:{control:"boolean",description:"Mostra icone plus/minus a sinistra invece della freccia a destra",table:{defaultValue:{summary:"false"}},name:"left-icon"}},parameters:{layout:"padded",docs:{source:{excludeDecorators:!0},description:{component:`
<Description>Costruisci accordion richiudibili verticalmente.</Description>
Per ottimizzare l'ingombro dei contenuti di una pagina a volte è necessario usare degli elementi richiudibili (in gergo definiti richiudibili o collapse), che possono essere attivati indipendentemente l'uno dall'altro oppure in modo esclusivo con l'attivazione di solo un blocco alla volta (in gergo definiti fisarmoniche o accordion).

Il componente Accordion è basato su [Collapse](?path=/docs/componenti-collapse--documentazione).

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
L'accordion implementa le specifiche ARIA [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) per garantire piena accessibilità:

• Navigazione da tastiera con tasti freccia per spostarsi tra gli elementi

• Supporto per <code>Space</code> ed <code>Enter</code> per attivare/disattivare elementi

• Attributi ARIA appropriati per comunicare lo stato agli screen reader

• Heading semantici configurabili per una corretta struttura del documento

• Rispetto delle preferenze di riduzione del movimento definite dall'utente per le animazioni di apertura/chiusura
</p></div></div>

### Differenza tra Collapse, Accordion e Tabs

I componenti Accordion, Tabs e Collapse funzionano tutti nascondendo sezioni di contenuto che l’utente può scegliere di visualizzare. Evitare di usare questi componenti l’uno all’interno dell’altro.

Se decidi di usare uno di questi componenti, considera quanto segue:

- L’utente ha bisogno di visualizzare più di una sezione alla volta? L’accordion può mostrare più sezioni contemporaneamente, a differenza dei tabs.

- L’utente deve passare rapidamente tra le sezioni? I tabs permettono di cambiare contenuto senza spostare le altre sezioni nella pagina, a differenza dell’accordion.

- Ci sono molte sezioni di contenuto? L’accordion può contenere più sezioni perché sono disposte verticalmente, mentre i tabs sono disposti orizzontalmente.

- Ci sono solo uno o due contenuti brevi e meno importanti? Il componente Collapse è più adatto perché visivamente più piccolo e meno prominente rispetto a un accordion o ai tabs.

<br/>

| Componente | Contenuti multipli | Visibilità | Esclusività | Uso tipico | Esempi |
|----------|--------------------|-------------|--------------|-------------|---------|
| **Collapse** | No | Singolo contenuto mostrato o nascosto | N/A | Mostrare o nascondere dettagli secondari | “Mostra dettagli”, “Visualizza termini” |
| **Accordion** | Sì | Più sezioni espandibili | Solo una aperta alla volta *(consigliato)* | Raggruppare contenuti correlati in blocchi espandibili | FAQ, elenchi informativi |
| **Tabs** | Sì | Una sezione visibile alla volta | Sempre esclusiva | Organizzare viste equivalenti o alternative | Schede di impostazioni, pannelli di dati |


### Gruppi di elementi richiudibili
Gli elementi richiudibili sono molto spesso mostrati in gruppo, tipicamente usati per approfondire voci o argomenti mostrati nelle singole barre cliccabili.
`}}}},n={..._(),tags:["!dev"]},a={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"hidden"}}},render:e=>p(e,m)},r={name:"Informazioni generali",argTypes:{mode:{table:{disable:!0}},backgroundActive:{table:{disable:!0}},backgroundHover:{table:{disable:!0}},leftIcon:{table:{disable:!0}},label:{control:"text",description:"Testo dell'header dell'Elemento richiudibile per l'esempio interattivo, inserito nello `slot heading`",table:{defaultValue:{summary:"Elemento richiudibile"}},name:"Intestazione"},as:{control:{type:"select"},options:["h2","h3","h4","h5","h6"],description:"Livello di heading per l'header (h2-h6)",table:{defaultValue:{summary:"h2"}}},defaultOpen:{control:"boolean",description:"Se true, l'elemento è aperto di default (stato iniziale)",table:{defaultValue:{summary:"false"}},name:"default-open"}},decorators:[e=>i`
      <div style="min-height:150px;display:flex;align-items:center">
        <it-accordion>${e()}</it-accordion>
      </div>
    `],parameters:{useMetaDecorator:!1,docs:{source:{excludeDecorators:!0}}},render:e=>i`
    <it-accordion-item as="${e.as||"h2"}" ?default-open="${e.defaultOpen||!1}">
      <span slot="heading">${e.label||"Elemento richiudibile"}</span>
      <div slot="content">
        Contenuto dell'elemento richiudibile. Questo testo è all'interno dello slot "content". Qui puoi inserire
        qualsiasi contenuto HTML: paragrafi, liste, immagini, ecc.
      </div>
    </it-accordion-item>
  `,args:{label:"Elemento richiudibile",as:"h2",defaultOpen:!1}},o={name:"Modalità esclusiva",args:{mode:"single"},argTypes:{mode:{table:{disable:!0}}},parameters:{docs:{description:{story:`
In modalità single, può essere aperto un solo elemento alla volta. Aprendo un elemento tutti gli altri si chiudono automaticamente.
`}}},render:e=>p(e,m)},s={name:"Accordion annidati",decorators:[e=>i`<div style="min-height:575px;display:flex;align-items:center">${e()}</div>`],parameters:{useMetaDecorator:!1},render:()=>i` <it-accordion>
      <it-accordion-item default-open>
        <span slot="heading">Elemento richiudibile #1</span>
        <div slot="content">
          <!-- Accordion annidato -->
          <it-accordion>
            <it-accordion-item as="h3" default-open>
              <span slot="heading">Elemento richiudibile annidato #1</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
            <it-accordion-item as="h3">
              <span slot="heading">Elemento richiudibile annidato #2</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
            <it-accordion-item as="h3">
              <span slot="heading">Elemento richiudibile annidato #3</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
          </it-accordion>
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>`},l={name:"Sfondo degli elementi attivi",argTypes:{backgroundActive:{table:{disable:!0}}},parameters:{},render:()=>i`
    <it-accordion background-active>
      <it-accordion-item default-open>
        <span slot="heading">Elemento richiudibile #1</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
  `},c={name:"Sfondo all'hover degli elementi",argTypes:{backgroundHover:{table:{disable:!0}}},parameters:{},render:()=>i`
    <it-accordion background-hover>
      <it-accordion-item default-open>
        <span slot="heading">Elemento richiudibile #1</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
  `},d={name:"Icona a sinistra",args:{leftIcon:!0},argTypes:{leftIcon:{table:{disable:!0}},backgroundActive:{table:{disable:!0}}},parameters:{},render:e=>p(e,m)};var g,b,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...CollapsibleOrHiddenContentGuidelines(),
  tags: ['!dev']
}`,...(h=(b=n.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,f,I;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden'
      }
    }
  },
  render: args => renderComponent(args, defaultItems)
}`,...(I=(f=a.parameters)==null?void 0:f.docs)==null?void 0:I.source}}};var A,E,y;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Informazioni generali',
  argTypes: {
    mode: {
      table: {
        disable: true
      }
    },
    backgroundActive: {
      table: {
        disable: true
      }
    },
    backgroundHover: {
      table: {
        disable: true
      }
    },
    leftIcon: {
      table: {
        disable: true
      }
    },
    // Accordion item controls
    label: {
      control: 'text',
      description: "Testo dell'header dell'Elemento richiudibile per l'esempio interattivo, inserito nello \`slot heading\`",
      table: {
        defaultValue: {
          summary: 'Elemento richiudibile'
        }
      },
      name: 'Intestazione'
    },
    as: {
      control: {
        type: 'select'
      },
      options: ['h2', 'h3', 'h4', 'h5', 'h6'],
      description: "Livello di heading per l'header (h2-h6)",
      table: {
        defaultValue: {
          summary: 'h2'
        }
      }
    },
    defaultOpen: {
      control: 'boolean',
      description: "Se true, l'elemento è aperto di default (stato iniziale)",
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      name: 'default-open'
    }
  },
  decorators: [(Story: any) => html\`
      <div style="min-height:150px;display:flex;align-items:center">
        <it-accordion>\${Story()}</it-accordion>
      </div>
    \`],
  parameters: {
    useMetaDecorator: false,
    docs: {
      source: {
        excludeDecorators: true
      }
    }
  },
  render: (args: any) => html\`
    <it-accordion-item as="\${args.as || 'h2'}" ?default-open="\${args.defaultOpen || false}">
      <span slot="heading">\${args.label || 'Elemento richiudibile'}</span>
      <div slot="content">
        Contenuto dell'elemento richiudibile. Questo testo è all'interno dello slot "content". Qui puoi inserire
        qualsiasi contenuto HTML: paragrafi, liste, immagini, ecc.
      </div>
    </it-accordion-item>
  \`,
  args: {
    label: 'Elemento richiudibile',
    as: 'h2',
    defaultOpen: false
  }
}`,...(y=(E=r.parameters)==null?void 0:E.docs)==null?void 0:y.source}}};var z,M,S;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Modalità esclusiva',
  args: {
    mode: 'single'
  },
  argTypes: {
    mode: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
In modalità single, può essere aperto un solo elemento alla volta. Aprendo un elemento tutti gli altri si chiudono automaticamente.
\`
      }
    }
  },
  render: args => renderComponent(args, defaultItems)
}`,...(S=(M=o.parameters)==null?void 0:M.docs)==null?void 0:S.source}}};var V,P,k;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Accordion annidati',
  decorators: [Story => html\`<div style="min-height:575px;display:flex;align-items:center">\${Story()}</div>\`],
  parameters: {
    useMetaDecorator: false
  },
  render: () => html\` <it-accordion>
      <it-accordion-item default-open>
        <span slot="heading">Elemento richiudibile #1</span>
        <div slot="content">
          <!-- Accordion annidato -->
          <it-accordion>
            <it-accordion-item as="h3" default-open>
              <span slot="heading">Elemento richiudibile annidato #1</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
            <it-accordion-item as="h3">
              <span slot="heading">Elemento richiudibile annidato #2</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
            <it-accordion-item as="h3">
              <span slot="heading">Elemento richiudibile annidato #3</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
          </it-accordion>
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>\`
}`,...(k=(P=s.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var C,T,H;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Sfondo degli elementi attivi',
  argTypes: {
    backgroundActive: {
      table: {
        disable: true
      }
    }
  },
  parameters: {},
  render: () => html\`
    <it-accordion background-active>
      <it-accordion-item default-open>
        <span slot="heading">Elemento richiudibile #1</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
  \`
}`,...(H=(T=l.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var $,O,x;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: "Sfondo all'hover degli elementi",
  argTypes: {
    backgroundHover: {
      table: {
        disable: true
      }
    }
  },
  parameters: {},
  render: () => html\`
    <it-accordion background-hover>
      <it-accordion-item default-open>
        <span slot="heading">Elemento richiudibile #1</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento richiudibile #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
  \`
}`,...(x=(O=c.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var D,L,q;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Icona a sinistra',
  args: {
    leftIcon: true
  },
  argTypes: {
    leftIcon: {
      table: {
        disable: true
      }
    },
    backgroundActive: {
      table: {
        disable: true
      }
    }
  },
  parameters: {},
  render: args => renderComponent(args, defaultItems)
}`,...(q=(L=d.parameters)==null?void 0:L.docs)==null?void 0:q.source}}};const N=["Info","EsempioInterattivo","AccordionItem","Single","AccordionAnnidati","HeaderAttivi","HoverDegliHeader","IconaASinistra"],W=Object.freeze(Object.defineProperty({__proto__:null,AccordionAnnidati:s,AccordionItem:r,EsempioInterattivo:a,HeaderAttivi:l,HoverDegliHeader:c,IconaASinistra:d,Info:n,Single:o,__namedExportsOrder:N,default:G},Symbol.toStringTag,{value:"Module"}));export{W as A,a as E,l as H,d as I,o as S,r as a,c as b,s as c};
