import{x as t,o as v,E}from"./iframe-C4eBJZ64.js";import"./preload-helper-Dp1pzeXC.js";const ti=["primary","secondary","success","danger","warning",""],ai=["sm","lg"],si={title:"Componenti/Chip",component:"it-chip",tags:["autodocs","a11y-ok","web-component"],args:{size:"sm",label:"Etichetta",href:void 0,variant:"primary",isDisabled:!1,avatar:"",avatarAlt:"Avatar",a11yDescription:"",dismissable:!1,withIcon:!1,withDismissButton:!1},argTypes:{size:{control:"select",description:"Dimensione del chip (`sm` o `lg`).",options:ai,table:{defaultValue:{summary:"sm"}}},label:{control:"text",description:"Testo mostrato all'interno della chip."},href:{control:"text",description:"Se valorizzato, la chip sarà un link (elemento `<a>`)."},variant:{control:"select",description:"Colore della chip, secondo le varianti di Bootstrap Italia.",options:ti},dismissable:{control:"boolean",description:"Indica che la chip può essere chiusa, ma non inserisce alcun pulsante automaticamente. Il pulsante deve essere inserito nello slot `dismiss-button` dall'utilizzatore, comprensivo di eventuale JavaScript per handling di eventi. Per un esempio completo con Javascript, vedi la story [Chip con chiusura](?path=/story/componenti-chip--chip-con-chiusura).",table:{defaultValue:{summary:"false"}}},isDisabled:{control:"boolean",description:"Disabilita la chip. Utile in contesti non interattivi o di sola lettura.",table:{defaultValue:{summary:"false"}}},avatar:{control:"text",description:"Percorso a un'immagine da mostrare come avatar, es. [randomuser.me](https://randomuser.me/api/portraits/men/46.jpg).",table:{defaultValue:{summary:"https://randomuser.me/api/portraits/men/46.jpg"}}},avatarAlt:{control:"text",description:"Testo alternativo per l'immagine dell'avatar, utile per l'accessibilità.",table:{defaultValue:{summary:"Alt avatar"}}},a11yDescription:{control:"text",description:`Testo descrittivo aggiuntivo per la chip, utile per l'accessibilità. Viene inserito come contenuto visivamente nascosto all'inizio della chip, ad esempio per specificare a che contenuto si fa riferimento, o assegnare una dicitur come "Argomento:".`,table:{defaultValue:{summary:""}}},withIcon:{control:"boolean",description:"Simula la presenza di un'icona nella chip. Non è una proprietà del componente, ma serve per mostrare composizioni nel playground interattivo."},withDismissButton:{control:"boolean",description:"Simula la presenza di un pulsante di rimozione nella chip. Non è una proprietà del componente, ma serve per mostrare composizioni nel playground interattivo."}},parameters:{docs:{description:{component:`
<Description>Elementi compatti che rappresentano un input, attributo o azione.</Description>
Il componente \`<it-chip>\` si compone principalmente di una label testuale e, opzionalmente, di:

- un avatar (immagine) a sinistra, tramite la proprietà \`avatar\`;
- un'icona inserita nello slot \`icon\`;
- un pulsante di chiusura nello slot \`dismiss-button\`, per le chip cancellabili/rimuovibili (la logica di rimozione è a carico dell'utilizzatore, vedi sezione dedicata).

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/chips/).
`}}}},ni=(i="Elimina etichetta",e=!1,b="Aria description")=>t`
  <it-button
    slot="dismiss-button"
    it-aria-label="${i}"
    ?disabled="${e}"
    it-aria-description="${b}"
    ?icon=${!0}
    @click=${a=>{if(e){a.preventDefault(),a.stopPropagation();return}const s=a.currentTarget.closest("it-chip");s&&s.remove()}}
    @keydown=${a=>{if(e){a.preventDefault(),a.stopPropagation();return}if(a.key==="Enter"||a.key===" "){const s=a.currentTarget.closest("it-chip");s&&s.remove()}}}
  >
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
`,ri=(i,e)=>t`
  <it-icon slot="icon" name="it-github" size="${e==="lg"?"sm":"xs"}" color=${i}></it-icon>
`,oi=i=>{const{avatar:e,avatarAlt:b,withIcon:a,label:s,size:z,variant:g,withDismissButton:X,dismissable:f,isDisabled:y,href:Y,id:ii,a11yDescription:ei}=i;return t`
    <it-chip
      label="${s??""}"
      size="${z??"sm"}"
      variant="${g??""}"
      ?dismissable=${f}
      ?is-disabled=${y}
      href="${v(Y||void 0)}"
      avatar="${v(e||void 0)}"
      avatar-alt="${v(b||void 0)}"
      a11y-description="${ei}"
      ?id="${ii}"
      >${a?ri(g,z):E}${f&&X?ni("I am dismissable",y):E}</it-chip
    >
  `},n={...si,name:"Esempio interattivo",args:{variant:"primary"},tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:i=>t`${oi(i)}`},r={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nPer la personalizzazione degli stili si può usare il selettore `::part` passando il valore `chip`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).\n"}}},render:()=>t`<div class="hide-preview"></div>`},o={name:"Variante con link",args:{size:"sm",variant:"",href:"#"},render:()=>t` <it-chip label="Etichetta" size="sm" variant="" href="#"></it-chip> `},c={name:"Varianti di colore",args:{label:"Etichetta",size:"sm",dismissable:!1},parameters:{docs:{description:{story:`
Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:
`}}},render:()=>t`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning"></it-chip>
    </div>
  `},l={name:"Varianti di colore link",args:{label:"Etichetta",size:"sm",dismissable:!1},parameters:{docs:{description:{story:`

`}}},render:()=>t`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning" href="#"></it-chip>
    </div>
  `},p={name:"Varianti di dimensione",args:{size:"sm",variant:"",dismissable:!0},render:()=>t`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <it-chip label="Etichetta" size="sm" variant="" dismissable></it-chip>
      <it-chip label="Etichetta" size="lg" variant="" dismissable></it-chip>
    </div>
  `},m={name:"Chip con chiusura",render:()=>t`
    <it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        it-aria-description="Puoi premere per eliminare la chip."
        @click=${i=>{const e=i.currentTarget.closest("it-chip");e&&e.remove()}}
        @keydown=${i=>{if(i.key==="Enter"||i.key===" "){i.preventDefault();const e=i.currentTarget.closest("it-chip");e&&e.remove()}}}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  `,parameters:{docs:{canvas:{sourceState:"shown"},description:{story:"\nQuesta composizione mostra una chip con funzionalità di chiusura.\n\nLa proprietà `dismissable` **non aggiunge automaticamente il pulsante**: è responsabilità dell'utilizzatore fornire un `<it-button>` con `slot=\"dismiss-button\"` e logica di rimozione/logiche di esecuzione.\nL'icona di chiusura deve avere dimensione `sm` per rispettare il design.\nIl codice JS dell'esempio gestisce la rimozione della chip sia via click che via tastiera (`Enter` o `Spazio`).\n\n"},source:{code:`<it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
  <it-button
    slot="dismiss-button"
    icon
    it-aria-label="Elimina etichetta"
    it-aria-description="Puoi premere per eliminare la chip."
  >
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
</it-chip>

<script type="module">
  const dismissButtons = document.querySelectorAll('it-chip#chip-dismissable [slot="dismiss-button"]');

  dismissButtons.forEach((btn) => {
    const removeChip = (e) => {
      const chip = btn.closest('it-chip');
      if (chip) chip.remove();
    };

    btn.addEventListener('click', removeChip);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        removeChip(e);
      }
    });
  });
<\/script>

`,language:"html"}}}},d={name:"Chip disabilitata",args:{isDisabled:!0},parameters:{docs:{description:{story:"\nAggiungendo l'attributo `is-disabled` si ottiene una chip disabilitata.\n"}}},render:i=>t`
    <it-chip label="Etichetta" size="sm" variant="${i.variant}" dismissable ?is-disabled="${i.isDisabled}">
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        ?disabled="${i.isDisabled}"
        it-aria-description="Questa chip è disabilitata e non può essere rimossa."
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  `},u={name:"Chip con avatar",parameters:{docs:{description:{story:"\nLe chip possono includere un avatar utilizzando gli attributi `avatar` e `avatar-alt`.\n"}}},render:()=>t`
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <it-chip
        label="Mario Rossi"
        size="sm"
        variant="primary"
        avatar="https://randomuser.me/api/portraits/men/46.jpg"
        avatar-alt="Mario Rossi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi Mario Rossi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip
        label="Anna Verdi"
        size="lg"
        variant="secondary"
        avatar="https://randomuser.me/api/portraits/women/32.jpg"
        avatar-alt="Anna Verdi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi Anna Verdi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
    </div>
  `},h={name:"Chip con icona",parameters:{docs:{description:{story:"\nLe chip possono includere un'icona utilizzando lo slot `icon` con il componente it-icon.\n"}}},render:()=>t`
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <it-chip label="Download" size="sm" variant="primary" dismissable>
        <it-icon slot="icon" name="it-download"></it-icon>
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi download"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip label="Carica file" size="lg" variant="success" dismissable>
        <it-icon slot="icon" name="it-upload"></it-icon>
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi carica file"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip href="#" label="Preferiti" size="sm" variant="warning">
        <it-icon slot="icon" name="it-star-full"></it-icon>
      </it-chip>
    </div>
  `};var w,C,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  args: {
    variant: 'primary'
  },
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\`\${renderComponent(params)}\`
}`,...(D=(C=n.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var k,V,$;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
Per la personalizzazione degli stili si può usare il selettore \\\`::part\\\` passando il valore \\\`chip\\\`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...($=(V=r.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var S,x,P;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Variante con link',
  args: {
    size: 'sm',
    variant: '',
    href: '#'
  },
  render: () => html\` <it-chip label="Etichetta" size="sm" variant="" href="#"></it-chip> \`
}`,...(P=(x=o.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var A,I,L;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Varianti di colore',
  args: {
    label: 'Etichetta',
    size: 'sm',
    dismissable: false
  },
  parameters: {
    docs: {
      description: {
        story: \`
Gli stili definiti da Bootstrap Italia utilizzano un naming consistente con Bootstrap, con alcune personalizzazioni:
\`
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning"></it-chip>
    </div>
  \`
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var R,T,q;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Varianti di colore link',
  args: {
    label: 'Etichetta',
    size: 'sm',
    dismissable: false
  },
  parameters: {
    docs: {
      description: {
        story: \`

\`
      }
    }
  },
  render: () => html\`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <it-chip label="Etichetta" size="sm" variant="primary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="secondary" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="success" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="danger" href="#"></it-chip>
      <it-chip label="Etichetta" size="sm" variant="warning" href="#"></it-chip>
    </div>
  \`
}`,...(q=(T=l.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var B,M,j;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Varianti di dimensione',
  args: {
    size: 'sm',
    variant: '',
    dismissable: true
  },
  render: () => html\`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap; align-items: center;">
      <it-chip label="Etichetta" size="sm" variant="" dismissable></it-chip>
      <it-chip label="Etichetta" size="lg" variant="" dismissable></it-chip>
    </div>
  \`
}`,...(j=(M=p.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var Q,H,J;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Chip con chiusura',
  render: () => html\`
    <it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        it-aria-description="Puoi premere per eliminare la chip."
        @click=\${(e: Event) => {
    const chip = (e.currentTarget as HTMLElement).closest('it-chip');
    if (chip) chip.remove();
  }}
        @keydown=\${(e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const chip = (e.currentTarget as HTMLElement).closest('it-chip');
      if (chip) chip.remove();
    }
  }}
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  \`,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      },
      description: {
        story: \`
Questa composizione mostra una chip con funzionalità di chiusura.

La proprietà \\\`dismissable\\\` **non aggiunge automaticamente il pulsante**: è responsabilità dell'utilizzatore fornire un \\\`<it-button>\\\` con \\\`slot="dismiss-button"\\\` e logica di rimozione/logiche di esecuzione.
L'icona di chiusura deve avere dimensione \\\`sm\\\` per rispettare il design.
Il codice JS dell'esempio gestisce la rimozione della chip sia via click che via tastiera (\\\`Enter\\\` o \\\`Spazio\\\`).

\`
      },
      source: {
        code: \`<it-chip label="Etichetta" size="sm" variant="primary" dismissable id="chip-dismissable">
  <it-button
    slot="dismiss-button"
    icon
    it-aria-label="Elimina etichetta"
    it-aria-description="Puoi premere per eliminare la chip."
  >
    <it-icon name="it-close" size="sm"></it-icon>
  </it-button>
</it-chip>

<script type="module">
  const dismissButtons = document.querySelectorAll('it-chip#chip-dismissable [slot="dismiss-button"]');

  dismissButtons.forEach((btn) => {
    const removeChip = (e) => {
      const chip = btn.closest('it-chip');
      if (chip) chip.remove();
    };

    btn.addEventListener('click', removeChip);
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        removeChip(e);
      }
    });
  });
<\/script>

\`,
        language: 'html'
      }
    }
  }
}`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var _,N,G;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Chip disabilitata',
  args: {
    isDisabled: true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Aggiungendo l'attributo \\\`is-disabled\\\` si ottiene una chip disabilitata.
\`
      }
    }
  },
  render: args => html\`
    <it-chip label="Etichetta" size="sm" variant="\${args.variant}" dismissable ?is-disabled="\${args.isDisabled}">
      <it-button
        slot="dismiss-button"
        icon
        it-aria-label="Elimina etichetta"
        ?disabled="\${args.isDisabled}"
        it-aria-description="Questa chip è disabilitata e non può essere rimossa."
      >
        <it-icon name="it-close" size="sm"></it-icon>
      </it-button>
    </it-chip>
  \`
}`,...(G=(N=d.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var K,O,U;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Chip con avatar',
  parameters: {
    docs: {
      description: {
        story: \`
Le chip possono includere un avatar utilizzando gli attributi \\\`avatar\\\` e \\\`avatar-alt\\\`.
\`
      }
    }
  },
  render: () => html\`
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <it-chip
        label="Mario Rossi"
        size="sm"
        variant="primary"
        avatar="https://randomuser.me/api/portraits/men/46.jpg"
        avatar-alt="Mario Rossi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi Mario Rossi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip
        label="Anna Verdi"
        size="lg"
        variant="secondary"
        avatar="https://randomuser.me/api/portraits/women/32.jpg"
        avatar-alt="Anna Verdi"
        dismissable
      >
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi Anna Verdi"
          it-aria-description="Puoi premere per rimuovere questo utente."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
    </div>
  \`
}`,...(U=(O=u.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var Z,F,W;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Chip con icona',
  parameters: {
    docs: {
      description: {
        story: \`
Le chip possono includere un'icona utilizzando lo slot \\\`icon\\\` con il componente it-icon.
\`
      }
    }
  },
  render: () => html\`
    <div class="d-flex gap-2 flex-wrap align-items-center">
      <it-chip label="Download" size="sm" variant="primary" dismissable>
        <it-icon slot="icon" name="it-download"></it-icon>
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi download"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip label="Carica file" size="lg" variant="success" dismissable>
        <it-icon slot="icon" name="it-upload"></it-icon>
        <it-button
          slot="dismiss-button"
          icon
          it-aria-label="Rimuovi carica file"
          it-aria-description="Puoi premere per rimuovere questa azione."
        >
          <it-icon name="it-close" size="sm"></it-icon>
        </it-button>
      </it-chip>
      <it-chip href="#" label="Preferiti" size="sm" variant="warning">
        <it-icon slot="icon" name="it-star-full"></it-icon>
      </it-chip>
    </div>
  \`
}`,...(W=(F=h.parameters)==null?void 0:F.docs)==null?void 0:W.source}}};const pi=["EsempioInterattivo","PersonalizzazioneDegliStili","VarianteConLink","VariantiColore","VariantiColoreLink","VariantiDimensione","ChipConChiusura","ChipDisabilitata","ChipConAvatar","ChipConIcona"];export{u as ChipConAvatar,m as ChipConChiusura,h as ChipConIcona,d as ChipDisabilitata,n as EsempioInterattivo,r as PersonalizzazioneDegliStili,o as VarianteConLink,c as VariantiColore,l as VariantiColoreLink,p as VariantiDimensione,pi as __namedExportsOrder,si as default};
