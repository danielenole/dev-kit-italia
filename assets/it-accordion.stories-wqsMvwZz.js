import{x as i}from"./iframe-BiclfI91.js";import{o as q}from"./if-defined-tWK9HKZq.js";import"./it-accordion-item-CDs2Zh-2.js";import"./it-button-7O2qlVVR.js";import"./it-icon-CSHPhcQf.js";import"./preload-helper-Dp1pzeXC.js";import"./query-Bd2ew8Gc.js";import"./query-assigned-elements-DeyBePrH.js";import"./when-BR7zwNJC.js";import"./directive-CvdRHFdJ.js";const C=["single","multiple"],O=e=>i`
  <it-accordion-item ?default-open="${e.defaultOpen}">
    <span slot="heading">${q(e.label)}</span>
    <div slot="content">${e.content}</div>
  </it-accordion-item>
`,u=(e,t=[])=>i`
  <it-accordion
    mode="${e.mode}"
    ?background-active="${e.backgroundActive}"
    ?background-hover="${e.backgroundHover}"
    ?left-icon="${e.leftIcon}"
  >
    ${t.map(n=>O(n))}
  </it-accordion>
`,p=[{label:"Accordion Item #1",content:"Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.",defaultOpen:!0},{label:"Accordion Item #2",content:"Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis."},{label:"Accordion Item #3",content:"Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis."}],j={title:"Componenti/Accordion",tags:["autodocs"],component:"it-accordion",args:{mode:"multiple",backgroundActive:!1,backgroundHover:!1,leftIcon:!1},decorators:[(e,t)=>{var n;return((n=t==null?void 0:t.parameters)==null?void 0:n.useMetaDecorator)===!1?e():i`<div style="min-height:350px;display:flex;align-items:center">${e()}</div>`}],argTypes:{mode:{control:"select",description:"Se impostato a single, solo un elemento dell'accordion può essere aperto contemporaneamente. Il default è multiple.",options:C},backgroundActive:{control:"boolean",description:"Applica sfondo primario agli header attivi (quando il contenuto è visibile)",table:{defaultValue:{summary:"false"}},name:"background-active"},backgroundHover:{control:"boolean",description:"Applica sfondo primario agli header al passaggio del mouse",table:{defaultValue:{summary:"false"}},name:"background-hover"},leftIcon:{control:"boolean",description:"Mostra icone plus/minus a sinistra invece della freccia a destra (Bootstrap Italia)",table:{defaultValue:{summary:"false"}},name:"left-icon"}},parameters:{layout:"padded",docs:{source:{excludeDecorators:!0},description:{component:`
<Description>Costruisci accordion collassabili verticalmente.</Description>
Per ottimizzare l'ingombro dei contenuti di una pagina a volte è necessario usare degli elementi richiudibili (in gergo definiti collassabili o collapse), che possono essere attivati indipendentemente l'uno dall'altro oppure in modo esclusivo con l'attivazione di solo un blocco alla volta (in gergo definiti fisarmoniche o accordion).

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
L'accordion implementa le specifiche ARIA [WAI-ARIA Authoring Practices 1.1 accordion pattern](https://www.w3.org/TR/wai-aria-practices-1.1/#accordion) per garantire piena accessibilità:

• Navigazione da tastiera con tasti freccia per spostarsi tra gli elementi

• Supporto per <code>Space</code> ed <code>Enter</code> per attivare/disattivare elementi

• Attributi ARIA appropriati per comunicare lo stato agli screen reader

• Heading semantici configurabili per una corretta struttura del documento

• Rispetto delle preferenze di riduzione del movimento definite dall'utente per le animazioni di apertura/chiusura
</p></div></div>
### Gruppi di elementi richiudibili
Gli elementi richiudibili sono molto spesso mostrati in gruppo, tipicamente usati per approfondire voci o argomenti mostrati nelle singole barre cliccabili.
`}}}},a={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>u(e,p)},o={argTypes:{label:{control:"text",description:"Testo dell'header dell'elemento accordion",table:{defaultValue:{summary:"Accordion Item"}},name:"Intestazione"},as:{control:{type:"select"},options:["h2","h3","h4","h5","h6"],description:"Livello di heading per l'header (h2-h6)",table:{defaultValue:{summary:"h2"}}},defaultOpen:{control:"boolean",description:"Se true, l'elemento è aperto di default (stato iniziale)",table:{defaultValue:{summary:"false"}},name:"default-open"},backgroundActive:{control:"boolean",description:"Se true, applica uno sfondo primario all'header quando l'elemento è aperto",table:{defaultValue:{summary:"false"}},name:"background-active"},backgroundHover:{control:"boolean",description:"Se true, applica uno sfondo primario all'header al passaggio del mouse",table:{defaultValue:{summary:"false"}},name:"background-hover"},leftIcon:{control:"boolean",description:"Se true, mostra le icone +/- a sinistra invece della freccia a destra",table:{defaultValue:{summary:"false"}},name:"left-icon"}},decorators:[e=>i`
      <div style="min-height:150px;display:flex;align-items:center">
        <it-accordion>${e()}</it-accordion>
      </div>
    `],parameters:{useMetaDecorator:!1,docs:{source:{excludeDecorators:!0},description:{story:`
Il componente \`it-accordion-item\` rappresenta un singolo elemento accordion che deve essere utilizzato all'interno di un contenitore \`it-accordion\`.

#### Proprietà

- **\`as\`**: Il livello di heading (h2-h6) da utilizzare per l'header (opzionale, default: \`h2\`)
- **\`default-open\`**: Se true, l'elemento viene mostrato espanso (opzionale, default: \`false\`)

#### Contenuto

L'intestazione dell'accordion item va inserita nello slot heading (intestazione dell'elemento).

Il contenuto dell'accordion item va inserito nello slot content (contenuto dell'elemento).
        `}}},render:e=>i`
    <it-accordion-item
      ?default-open="${e.defaultOpen||!1}"
      ?background-active="${e.backgroundActive||!1}"
      ?background-hover="${e.backgroundHover||!1}"
      ?left-icon="${e.leftIcon||!1}"
    >
      <span slot="heading">${e.label||"Accordion Item"}</span>
      <div slot="content">
        Contenuto dell'accordion item. Questo testo è all'interno dello slot "content". Qui puoi inserire qualsiasi
        contenuto HTML: paragrafi, liste, immagini, ecc.
      </div>
    </it-accordion-item>
  `,args:{label:"Accordion Item",as:"h2",defaultOpen:!1,backgroundActive:!1,backgroundHover:!1,leftIcon:!1}},r={name:"Modalità esclusiva",args:{mode:"single"},argTypes:{mode:{table:{disable:!0}}},parameters:{docs:{description:{story:`
In modalità single, può essere aperto un solo elemento alla volta. Aprendo un elemento tutti gli altri si chiudono automaticamente.
`}}},render:e=>u(e,p)},s={name:"Accordion annidati",decorators:[e=>i`<div style="min-height:575px;display:flex;align-items:center">${e()}</div>`],parameters:{useMetaDecorator:!1,docs:{description:{story:`
Più gruppi di accordion possono essere annidati.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità e accordion annidati</span></div>
<p>
Utilizzare questo approccio solo quando strettamente necessario: dal punto di vista dell'accessibilità non si tratta di una soluzione ottimale.
</p></div></div>
        `}}},render:()=>i` <it-accordion>
      <it-accordion-item default-open>
        <span slot="heading">Elemento Accordion #1</span>
        <div slot="content">
          <!-- Accordion annidato -->
          <it-accordion>
            <it-accordion-item as="h3" default-open>
              <span slot="heading">Elemento Accordion annidato #1</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
            <it-accordion-item as="h3">
              <span slot="heading">Elemento Accordion annidato #2</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
            <it-accordion-item as="h3">
              <span slot="heading">Elemento Accordion annidato #3</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
          </it-accordion>
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>`},c={name:"Stato attivo",argTypes:{backgroundActive:{table:{disable:!0}}},parameters:{docs:{description:{story:`
Aggiungere la proprietà <code>background-active</code> a <code>it-accordion</code> per ottenere header con sfondo di colore primario quando questi sono attivi e il contenuto relativo è visibile.
`}}},render:()=>i`
    <it-accordion background-active>
      <it-accordion-item default-open>
        <span slot="heading">Elemento Accordion #1</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
  `},l={name:"Stato hover",argTypes:{backgroundHover:{table:{disable:!0}}},parameters:{docs:{description:{story:`
Aggiungere la proprietà <code>background-hover</code> a <code>it-accordion</code> per ottenere header con sfondo di colore primario all'hover.
`}}},render:()=>i`
    <it-accordion background-hover>
      <it-accordion-item default-open>
        <span slot="heading">Elemento Accordion #1</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
  `},d={name:"Icona a sinistra",args:{leftIcon:!0},argTypes:{leftIcon:{table:{disable:!0}},backgroundActive:{table:{disable:!0}}},parameters:{docs:{description:{story:"\nQuando l'attributo `left-icon` è abilitato, si ottiene una variante in cui l’icona chevron che indica lo stato di apertura è sostituita da segni meno/più allineati a sinistra del titolo dell’header.\n"}}},render:e=>u(e,p)};var m,g,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: args => renderComponent(args, defaultItems)
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var h,v,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  argTypes: {
    label: {
      control: 'text',
      description: "Testo dell'header dell'elemento accordion",
      table: {
        defaultValue: {
          summary: 'Accordion Item'
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
    },
    backgroundActive: {
      control: 'boolean',
      description: "Se true, applica uno sfondo primario all'header quando l'elemento è aperto",
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      name: 'background-active'
    },
    backgroundHover: {
      control: 'boolean',
      description: "Se true, applica uno sfondo primario all'header al passaggio del mouse",
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      name: 'background-hover'
    },
    leftIcon: {
      control: 'boolean',
      description: 'Se true, mostra le icone +/- a sinistra invece della freccia a destra',
      table: {
        defaultValue: {
          summary: 'false'
        }
      },
      name: 'left-icon'
    }
  },
  decorators: [Story => html\`
      <div style="min-height:150px;display:flex;align-items:center">
        <it-accordion>\${Story()}</it-accordion>
      </div>
    \`],
  parameters: {
    useMetaDecorator: false,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`
Il componente \\\`it-accordion-item\\\` rappresenta un singolo elemento accordion che deve essere utilizzato all'interno di un contenitore \\\`it-accordion\\\`.

#### Proprietà

- **\\\`as\\\`**: Il livello di heading (h2-h6) da utilizzare per l'header (opzionale, default: \\\`h2\\\`)
- **\\\`default-open\\\`**: Se true, l'elemento viene mostrato espanso (opzionale, default: \\\`false\\\`)

#### Contenuto

L'intestazione dell'accordion item va inserita nello slot heading (intestazione dell'elemento).

Il contenuto dell'accordion item va inserito nello slot content (contenuto dell'elemento).
        \`
      }
    }
  },
  render: (args: any) => html\`
    <it-accordion-item
      ?default-open="\${args.defaultOpen || false}"
      ?background-active="\${args.backgroundActive || false}"
      ?background-hover="\${args.backgroundHover || false}"
      ?left-icon="\${args.leftIcon || false}"
    >
      <span slot="heading">\${args.label || 'Accordion Item'}</span>
      <div slot="content">
        Contenuto dell'accordion item. Questo testo è all'interno dello slot "content". Qui puoi inserire qualsiasi
        contenuto HTML: paragrafi, liste, immagini, ecc.
      </div>
    </it-accordion-item>
  \`,
  args: {
    label: 'Accordion Item',
    as: 'h2',
    defaultOpen: false,
    backgroundActive: false,
    backgroundHover: false,
    leftIcon: false
  }
} satisfies Meta<AccordionItemProps>`,...(f=(v=o.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var A,I,y;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(y=(I=r.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var k,V,M;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Accordion annidati',
  decorators: [Story => html\`<div style="min-height:575px;display:flex;align-items:center">\${Story()}</div>\`],
  parameters: {
    useMetaDecorator: false,
    docs: {
      description: {
        story: \`
Più gruppi di accordion possono essere annidati.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità e accordion annidati</span></div>
<p>
Utilizzare questo approccio solo quando strettamente necessario: dal punto di vista dell'accessibilità non si tratta di una soluzione ottimale.
</p></div></div>
        \`
      }
    }
  },
  render: () => html\` <it-accordion>
      <it-accordion-item default-open>
        <span slot="heading">Elemento Accordion #1</span>
        <div slot="content">
          <!-- Accordion annidato -->
          <it-accordion>
            <it-accordion-item as="h3" default-open>
              <span slot="heading">Elemento Accordion annidato #1</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
            <it-accordion-item as="h3">
              <span slot="heading">Elemento Accordion annidato #2</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
            <it-accordion-item as="h3">
              <span slot="heading">Elemento Accordion annidato #3</span>
              <div slot="content">
                Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
                facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
              </div>
            </it-accordion-item>
          </it-accordion>
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>\`
}`,...(M=(V=s.parameters)==null?void 0:V.docs)==null?void 0:M.source}}};var S,z,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Stato attivo',
  argTypes: {
    backgroundActive: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
Aggiungere la proprietà <code>background-active</code> a <code>it-accordion</code> per ottenere header con sfondo di colore primario quando questi sono attivi e il contenuto relativo è visibile.
\`
      }
    }
  },
  render: () => html\`
    <it-accordion background-active>
      <it-accordion-item default-open>
        <span slot="heading">Elemento Accordion #1</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
  \`
}`,...(P=(z=c.parameters)==null?void 0:z.docs)==null?void 0:P.source}}};var E,$,H;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Stato hover',
  argTypes: {
    backgroundHover: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
Aggiungere la proprietà <code>background-hover</code> a <code>it-accordion</code> per ottenere header con sfondo di colore primario all'hover.
\`
      }
    }
  },
  render: () => html\`
    <it-accordion background-hover>
      <it-accordion-item default-open>
        <span slot="heading">Elemento Accordion #1</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #2</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
      <it-accordion-item>
        <span slot="heading">Elemento Accordion #3</span>
        <div slot="content">
          Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
          facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
        </div>
      </it-accordion-item>
    </it-accordion>
  \`
}`,...(H=($=l.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};var x,T,D;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      description: {
        story: \`
Quando l'attributo \\\`left-icon\\\` è abilitato, si ottiene una variante in cui l’icona chevron che indica lo stato di apertura è sostituita da segni meno/più allineati a sinistra del titolo dell’header.
\`
      }
    }
  },
  render: args => renderComponent(args, defaultItems)
}`,...(D=(T=d.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const F=["EsempioInterattivo","AccordionItem","Single","AccordionAnnidati","HeaderAttivi","HoverDegliHeader","IconaASinistra"];export{s as AccordionAnnidati,o as AccordionItem,a as EsempioInterattivo,c as HeaderAttivi,l as HoverDegliHeader,d as IconaASinistra,r as Single,F as __namedExportsOrder,j as default};
