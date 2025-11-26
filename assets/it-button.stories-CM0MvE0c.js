import{x as t,o as $}from"./iframe-CPtuQipa.js";const q=["lg","sm","xs"],M=["primary","secondary","success","danger","warning","link"],a=(n,e="")=>{var o;const i=((o=n.slot)==null?void 0:o.length)>0?n.slot:e;return t`
    <it-button
      variant="${$(n.variant)}"
      ?outline="${n.outline}"
      size="${$(n.size)}"
      ?block="${n.block}"
      ?disabled="${$(n.disabled?"true":void 0)}"
      ?icon="${n.icon}"
      type="${$(n.type)}"
    >
      ${i}
    </it-button>
  `},y=n=>t`
  <div class="flex">
    ${a(n)}
    ${a({...n,disabled:!0,slot:`${n.slot} disabled`})}
  </div>
`,s=(n,e)=>{var o;const i=((o=n.slot)==null?void 0:o.length)>0?n.slot:null;return t`<div class="flex p-0">
    ${y({...n,slot:i??e})}
    ${n.variant!=="link"?y({...n,slot:i??`${e} outline`,outline:!0}):""}
  </div>`},g=(n,e)=>t`<div class="flex">
    ${a({...n,variant:"primary"},`Primary ${e}`)}
    ${a({...n,variant:"secondary"},`Secondary ${e}`)}
  </div>`,v={title:"Componenti/Button",tags:["a11y-ok","web-component"],component:"it-button",args:{slot:"Testo del pulsante",variant:"primary",size:void 0,block:!1,outline:!1,disabled:!1,icon:!1,type:"button",value:""},argTypes:{variant:{control:"select",description:"Varianti di colore",options:M},size:{control:"select",description:"Dimensione del pulsante",options:q},block:{control:"boolean",type:"boolean",description:"Quando abilitato, estende il componente Button fino a prendere tutta la larghezza disponibile",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},outline:{control:"boolean",type:"boolean",description:"Applica il colore solamente al bordo, usando il colore di sfondo come colore interno del pulsante.",table:{defaultValue:{summary:"false"}}},icon:{control:"boolean",type:"boolean",description:"Se il pulsante mostra un'icona, è necessario aggiungere questo attributo.",table:{defaultValue:{summary:"false"}}},slot:{control:"text",description:"Testo del pulsante"},type:{control:"select",description:"Tipologia di pulsante",options:["button","submit","reset"],table:{defaultValue:{summary:"button"}}},value:{control:"text"}}},r={...v,name:"Esempio interattivo",args:{variant:"primary"},tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:n=>t` ${a({...n})}`},l={name:"Stato disabilitato",args:{slot:"",disabled:!0},argTypes:{variant:{table:{disable:!0}},outline:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:n=>t`
    ${a({...n,variant:"primary"},"Primary")}
    ${a({...n,variant:"secondary"},"Secondary")}
    ${a({...n,variant:"success"},"Success")}
    ${a({...n,variant:"danger"},"Danger")}
    ${a({...n,variant:"warning"},"Warning")}
    ${a({...n,variant:"link"},"Pulsante link")}
  `},c={name:"Varianti di colore",args:{slot:""},argTypes:{variant:{table:{disable:!0}},outline:{table:{disable:!0}},disabled:{table:{disable:!0}}},render:n=>t`
    ${s({...n,variant:"primary"},"Primary")}
    ${s({...n,variant:"secondary"},"Secondary")}
    ${s({...n,variant:"success"},"Success")}
    ${s({...n,variant:"danger"},"Danger")}
    ${s({...n,variant:"warning"},"Warning")}
    ${s({...n,variant:"link"},"Pulsante link")}
  `},d={name:"Varianti di dimensione",args:{slot:""},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}},block:{table:{disable:!0}}},render:n=>t`
    ${g({...n,size:"lg"},"Large")} ${g({...n},"Default")}
    ${g({...n,size:"xs"},"Extra Small")}
    <div class="flex">
      ${a({...n,block:!0,variant:"primary"},"Primary Block")}
    </div>
    <div class="flex">
      ${a({...n,block:!0,variant:"secondary"},"Secondary Block")}
    </div>
  `},u={...v,args:{variant:"primary"},render:n=>t`
    <div class="flex">
      ${a({...n,slot:`Button - ${n.slot}`,type:"button"})}
      ${a({...n,slot:`Submit - ${n.slot}`,type:"submit"})}
      ${a({...n,slot:`Reset - ${n.slot}`,type:"reset"})}
    </div>
  `},p={name:"Sfondo scuro",args:{slot:""},argTypes:{variant:{table:{disable:!0}},outline:{table:{disable:!0}},disabled:{table:{disable:!0}}},parameters:{docs:{description:{story:`
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Trasmettere significato alle tecnologie assistive</span></div>
<p>
L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive –
come gli screen reader.
Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo
visibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe <code>.visually-hidden</code>.</p></div></div>`}}},render:n=>t`
    <div class="bg-dark p-4">
      ${s({...n,variant:"primary"},"Primary")}
      ${s({...n,variant:"secondary"},"Secondary")}
      ${s({...n,variant:"link"},"Pulsante link")}
    </div>
  `},b={...v,name:"Con icona",args:{},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}}},parameters:{docs:{description:{story:'\n<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>\n<p>\nLe icone sono di default puramente decorative. Nel caso in cui l\'icona non debba essere un elemento decorativo, è necessario utilizzare correttamente gli attributi `label`, `role` e `aria-hidden` sul componente `<it-icon>`. Per maggiori dettagli visita la [guida dedicata](?path=/docs/componenti-icon--documentazione) al componente `<it-icon>`.</p></div></div>\n'}}},render:n=>{var i;const e=((i=n.slot)==null?void 0:i.length)>0?n.slot:null;return t` <div class="flex">
      <it-button
        variant="success"
        size="lg"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <it-icon name="it-star-full" color="inverse" size="sm"></it-icon>
        <span>${e??"Pulsante Large con icona"}</span>
      </it-button>

      <it-button
        variant="primary"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <it-icon name="it-star-full" color="inverse" size="sm"></it-icon> <span>${e??"Pulsante con icona"}</span>
      </it-button>

      <it-button
        variant="danger"
        size="xs"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <it-icon name="it-star-full" color="inverse" size="xs"></it-icon>
        <span>${e??"Pulsante Extra Small con icona"}</span>
      </it-button>

      <it-button
        variant="link"
        size="xs"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <it-icon name="it-star-full" color="primary" size="xs"></it-icon>
        <span>${e??"Pulsante Link Extra Small con icona"}</span>
      </it-button>
    </div>`}},m={...v,name:"Con icona cerchiata",args:{},argTypes:{variant:{table:{disable:!0}},size:{table:{disable:!0}}},render:n=>{var i;const e=((i=n.slot)==null?void 0:i.length)>0?n.slot:null;return t`
      <it-button
        class="me-2"
        variant="success"
        size="lg"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="success" size="xs"></it-icon>
        </span>
        <span>${e??"Pulsante Large con icona"}</span>
      </it-button>

      <it-button
        class="me-2"
        variant="primary"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <span class="rounded-icon" size="sm">
          <it-icon name="it-user" color="primary" size="xs"></it-icon>
        </span>
        <span>${e??"Pulsante con icona"}</span>
      </it-button>

      <it-button
        class="me-2"
        variant="danger"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="danger" size="xs"></it-icon>
        </span>
        <span>${e??"Pulsante Small con icona"}</span>
      </it-button>

      <it-button
        class="me-2"
        variant="secondary"
        size="xs"
        icon
        ?outline="${n.outline}"
        ?block="${n.block}"
        ?disabled="${n.disabled}"
        type="${n.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="secondary" size="xs"></it-icon>
        </span>
        <span>${e??"Pulsante Link Extra Small con icona"}</span>
      </it-button>
    `}};var k,z,S;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  args: {
    variant: 'primary'
  },
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\` \${renderComponent({
    ...params
  })}\`
}`,...(S=(z=r.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var f,x,P;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Stato disabilitato',
  args: {
    slot: '',
    disabled: true
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    outline: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    }
  },
  render: args => html\`
    \${renderComponent({
    ...args,
    variant: 'primary'
  }, 'Primary')}
    \${renderComponent({
    ...args,
    variant: 'secondary'
  }, 'Secondary')}
    \${renderComponent({
    ...args,
    variant: 'success'
  }, 'Success')}
    \${renderComponent({
    ...args,
    variant: 'danger'
  }, 'Danger')}
    \${renderComponent({
    ...args,
    variant: 'warning'
  }, 'Warning')}
    \${renderComponent({
    ...args,
    variant: 'link'
  }, 'Pulsante link')}
  \`
}`,...(P=(x=l.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var h,V,C;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Varianti di colore',
  args: {
    slot: ''
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    outline: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    }
  },
  render: args => html\`
    \${renderVariant({
    ...args,
    variant: 'primary'
  }, 'Primary')}
    \${renderVariant({
    ...args,
    variant: 'secondary'
  }, 'Secondary')}
    \${renderVariant({
    ...args,
    variant: 'success'
  }, 'Success')}
    \${renderVariant({
    ...args,
    variant: 'danger'
  }, 'Danger')}
    \${renderVariant({
    ...args,
    variant: 'warning'
  }, 'Warning')}
    \${renderVariant({
    ...args,
    variant: 'link'
  }, 'Pulsante link')}
  \`
}`,...(C=(V=c.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var T,E,L;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Varianti di dimensione',
  args: {
    slot: ''
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    },
    block: {
      table: {
        disable: true
      }
    }
  },
  render: args => html\`
    \${renderSizeVariant({
    ...args,
    size: 'lg'
  }, 'Large')} \${renderSizeVariant({
    ...args
  }, 'Default')}
    \${renderSizeVariant({
    ...args,
    size: 'xs'
  }, 'Extra Small')}
    <div class="flex">
      \${renderComponent({
    ...args,
    block: true,
    variant: 'primary'
  }, 'Primary Block')}
    </div>
    <div class="flex">
      \${renderComponent({
    ...args,
    block: true,
    variant: 'secondary'
  }, 'Secondary Block')}
    </div>
  \`
}`,...(L=(E=d.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var D,B,w;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...meta,
  // name: 'Tipologie',
  args: {
    variant: 'primary'
  },
  render: params => html\`
    <div class="flex">
      \${renderComponent({
    ...params,
    slot: \`Button - \${params.slot}\`,
    type: 'button'
  })}
      \${renderComponent({
    ...params,
    slot: \`Submit - \${params.slot}\`,
    type: 'submit'
  })}
      \${renderComponent({
    ...params,
    slot: \`Reset - \${params.slot}\`,
    type: 'reset'
  })}
    </div>
  \`
}`,...(w=(B=u.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var I,_,A;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Sfondo scuro',
  args: {
    slot: ''
  },
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    outline: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Trasmettere significato alle tecnologie assistive</span></div>
<p>
L’uso del colore per aggiungere un significato fornisce solo un’indicazione visiva, che non sarà trasmesso agli utenti di tecnologie assistive –
come gli screen reader.
Assicurati che le informazioni denotate dal colore siano rese disponibili anche dal contenuto stesso (es.: il testo
visibile), o siano incluse attraverso mezzi alternativi, come testo aggiuntivo nascosto con la classe <code>.visually-hidden</code>.</p></div></div>\`
      }
    }
  },
  render: args => html\`
    <div class="bg-dark p-4">
      \${renderVariant({
    ...args,
    variant: 'primary'
  }, 'Primary')}
      \${renderVariant({
    ...args,
    variant: 'secondary'
  }, 'Secondary')}
      \${renderVariant({
    ...args,
    variant: 'link'
  }, 'Pulsante link')}
    </div>
  \`
}`,...(A=(_=p.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var N,O,W;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  ...meta,
  name: 'Con icona',
  args: {},
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    }
  },
  parameters: {
    docs: {
      description: {
        story: \`
<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Le icone sono di default puramente decorative. Nel caso in cui l'icona non debba essere un elemento decorativo, è necessario utilizzare correttamente gli attributi \\\`label\\\`, \\\`role\\\` e \\\`aria-hidden\\\` sul componente \\\`<it-icon>\\\`. Per maggiori dettagli visita la [guida dedicata](?path=/docs/componenti-icon--documentazione) al componente \\\`<it-icon>\\\`.</p></div></div>
\`
      }
    }
  },
  render: params => {
    const slot = params.slot?.length > 0 ? params.slot : null;
    return html\` <div class="flex">
      <it-button
        variant="success"
        size="lg"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <it-icon name="it-star-full" color="inverse" size="sm"></it-icon>
        <span>\${slot ?? 'Pulsante Large con icona'}</span>
      </it-button>

      <it-button
        variant="primary"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <it-icon name="it-star-full" color="inverse" size="sm"></it-icon> <span>\${slot ?? 'Pulsante con icona'}</span>
      </it-button>

      <it-button
        variant="danger"
        size="xs"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <it-icon name="it-star-full" color="inverse" size="xs"></it-icon>
        <span>\${slot ?? 'Pulsante Extra Small con icona'}</span>
      </it-button>

      <it-button
        variant="link"
        size="xs"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <it-icon name="it-star-full" color="primary" size="xs"></it-icon>
        <span>\${slot ?? 'Pulsante Link Extra Small con icona'}</span>
      </it-button>
    </div>\`;
  }
}`,...(W=(O=b.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var R,j,U;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  ...meta,
  name: 'Con icona cerchiata',
  args: {},
  argTypes: {
    variant: {
      table: {
        disable: true
      }
    },
    size: {
      table: {
        disable: true
      }
    }
  },
  render: params => {
    const slot = params.slot?.length > 0 ? params.slot : null;
    return html\`
      <it-button
        class="me-2"
        variant="success"
        size="lg"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="success" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante Large con icona'}</span>
      </it-button>

      <it-button
        class="me-2"
        variant="primary"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon" size="sm">
          <it-icon name="it-user" color="primary" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante con icona'}</span>
      </it-button>

      <it-button
        class="me-2"
        variant="danger"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="danger" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante Small con icona'}</span>
      </it-button>

      <it-button
        class="me-2"
        variant="secondary"
        size="xs"
        icon
        ?outline="\${params.outline}"
        ?block="\${params.block}"
        ?disabled="\${params.disabled}"
        type="\${params.type}"
      >
        <span class="rounded-icon">
          <it-icon name="it-user" color="secondary" size="xs"></it-icon>
        </span>
        <span>\${slot ?? 'Pulsante Link Extra Small con icona'}</span>
      </it-button>
    \`;
  }
}`,...(U=(j=m.parameters)==null?void 0:j.docs)==null?void 0:U.source}}};const Q=["EsempioInterattivo","Disabilitato","VariantiColore","VariantiDimensione","Tipologie","SfondoScuro","ConIcona","ConIconaCerchiata"],F=Object.freeze(Object.defineProperty({__proto__:null,ConIcona:b,ConIconaCerchiata:m,Disabilitato:l,EsempioInterattivo:r,SfondoScuro:p,Tipologie:u,VariantiColore:c,VariantiDimensione:d,__namedExportsOrder:Q,default:v},Symbol.toStringTag,{value:"Module"}));export{b as C,l as D,r as E,F as S,u as T,c as V,d as a,p as b,m as c};
