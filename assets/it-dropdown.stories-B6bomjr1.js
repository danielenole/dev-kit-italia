import{x as i,o as n}from"./iframe-D-IYe-vP.js";import"./preload-helper-Dp1pzeXC.js";const h="height:200px;display:flex;align-items:flex-start;",t={title:"Componenti/Dropdown",component:"it-dropdown",tags:["autodocs","a11y-ok","web-component"],args:{label:"Apri dropdown",disabled:!1,alignment:void 0,variant:"primary",size:void 0,"it-role":void 0,dark:!1,"full-width":!1},argTypes:{label:{control:"text"},disabled:{control:"boolean"},alignment:{control:"select",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"]},variant:{control:"select",options:["primary","secondary","success","danger","warning","light","link"]},size:{control:"select",options:["sm","lg"]},"it-role":{control:"select",options:["menu","list"]},dark:{control:"boolean"},"full-width":{control:"boolean"}},decorators:[e=>i`<div style=${h}>${e()}</div>`],parameters:{docs:{description:{component:'\n<Description>Attiva o disattiva overlay contestuali per visualizzare liste di link ed altro ancora con questi menu a tendina.</Description>\n\nPer la creazione di un dropdown è necessario utilizzare il componente `<it-dropdown>` che può contenere al suo interno uno o più `<it-dropdown-item>`.\nÈ necessario specificare l\'etichetta del menu tramite l\'attributo `label`.\nÈ possibile specificare una variante tramite l\'attributo `variant`, questa verrà applicata al pulsante di attivazione del menu.\n\n<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>\n<p>Lo standard <a href="https://www.w3.org/TR/wai-aria/">WAI ARIA</a> definisce un widget con proprietà <a href="https://www.w3.org/TR/wai-aria/#menu">`role="menu"`</a>, specifica per i menu applicativi con link o azioni.\nQuesti menu possono contenere solo voci di menu, voci di menu di caselle di controllo, voci di menu dei pulsanti di opzione, gruppi di pulsanti di opzione e sottomenu.</p>\n<p>I dropdown di **Dev Kit Italia** sono progettati per essere invece generici e applicabili a una varietà di situazioni. Per questo motivo, il componente `it-dropdown` ha come ruolo predefinito il ruolo `menu` e gestisce automaticamente il ruolo degli elementi interni, ma gli autori potranno modificare il ruolo del Dropdown generato da questo componente ad una semplice lista impostando l\'attributo `it-role="list"`.</p>\n<p>Questo componente comprende di base il supporto per la maggior parte delle interazioni standard del menu della tastiera, come la possibilità di spostarsi tra i singoli elementi `it-dropdown-item` usando i tasti freccia, e chiude il menu con il tasto ESC.</p>\n</div></div>\n'}}}};function o(e){return Object.keys(t.argTypes).reduce((b,z)=>(e!=null&&e.includes(z)||(b[z]={table:{disable:!0}}),b),{})}const r={render:e=>i`
    <it-dropdown
      label=${e.label}
      ?disabled=${e.disabled}
      alignment=${n(e.alignment)}
      size=${n(e.size)}
      variant=${e.variant}
      it-role=${n(e["it-role"])}
      ?dark=${e.dark}
      ?full-width=${e["full-width"]}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,parameters:{...t.parameters,docs:{source:{excludeDecorators:!0},canvas:{sourceState:"shown"}}},tags:["!autodocs","!dev"]},a={name:"Dropdown button varianti",render:()=>i`
    <it-dropdown label="Primario" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Secondario" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Success" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Danger" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[e=>i`<div style="${h}gap:0.5rem;flex-wrap:wrap;display:flex">${e()}</div>`],argTypes:{...o()},parameters:{...t.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Ovviamente sono disponibili tutte le varianti già disponibili per i pulsanti. Di seguito, un esempio di utilizzo con le varianti `primary`, `secondary`, `success` e `danger`."}}}},d={render:()=>i`
    <it-dropdown label="Giù" alignment="bottom-start">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Su" alignment="top-start">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Sinistra" alignment="left">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Destra" alignment="right">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[e=>i`<div
        style="${h}gap:2rem;flex-wrap:wrap;align-items:space-between;justify-content:center;flex-direction:column;"
      >
        ${e()}
      </div>`],argTypes:{...o()},parameters:{...t.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Per aprire le voci di menu in direzioni diverse,\nè possibile utilizzare l'attributo `alignment` con i valori `top`, `right`,\n`bottom`, `left`, `top-start`, `top-end`, `right-start`, `right-end`,\n`bottom-start`, `bottom-end`, `left-start` e `left-end`.\n\nI valori `top`, `right`, `bottom` e `left` aprono il menu in direzioni standard,\ncentrate rispetto al trigger,\nmentre i valori `top-start`, `top-end`, `right-start`, `right-end`,\n`bottom-start`, `bottom-end`, `left-start` e `left-end` permettono di specificare\nla posizione esatta del menu rispetto al trigger.\n"}}}},s={name:"Menu con voci attive",render:e=>i`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...o(["label","variant"])},parameters:{...t.parameters,docs:{source:{excludeDecorators:!0},description:{story:`Aggiungere l'attributo active agli elementi del dropdown che si vogliono mostrare come attivi.
Per questioni di accessibilità il componente aggiungerà automaticamente <span class="visually-hidden"> attivo</span> in coda al testo degli elementi attivi.`}}}},l={name:"Menu disabilitato",args:{disabled:!0},render:e=>i`
    <it-dropdown label=${e.label} ?disabled=${e.disabled} variant=${e.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...o(["label","variant"])},parameters:{...t.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Aggiungere l'attributo `disabled` al dropdown per **disabilitarlo** completamente."}}}},p={name:"Menu con voci disabilitate",render:e=>i`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...o(["label","variant"])},parameters:{...t.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Aggiungere l'attributo `disabled` agli elementi del dropdown che si vogliono mostrare come **disabilitati**."}}}},m={name:"Menu con intestazioni e separatori",render:e=>i`
    <it-dropdown label="Item con separatore e header" variant=${e.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Prima voce</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Dopo separatore</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...o(["variant"])},parameters:{...t.parameters,docs:{source:{excludeDecorators:!0},description:{story:"All'interno del menu dropdown possono essere inseriti header e separatori."}}}},c={name:"Menu con voci grandi",render:e=>i`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Grande</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...o(["label","variant"])},parameters:{...t.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Per aumentare la dimensione degli elementi contenuti nel dropdown\nè sufficiente aggiungere agli stessi l'attributo `large`."}}}},u={name:"Menu a tutta larghezza",args:{"full-width":!0},render:e=>i`
    <it-dropdown
      label=${e.label}
      ?disabled=${e.disabled}
      alignment=${n(e.alignment)}
      size=${n(e.size)}
      variant=${n(e.variant)}
      it-role=${n(e["it-role"])}
      ?dark=${e.dark}
      ?full-width=${e["full-width"]}
      style="width: 100%;"
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[e=>i`<div style="${h}min-width:300px">${e()}</div>`],parameters:{...t.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Per ottenere un dropdown menu largo quanto l’elemento che contiene il dropdown button\nè sufficiente aggiungere l'attributo `full-width`.\nI link e testi contenuti al suo interno saranno disposti in orizzontale."}}}},w={name:"Menu con icona a destra",render:e=>i`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#">
        Azione 1
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 2
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 3
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...o(["label","variant"])},parameters:{...t.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa\nallineata a destra utilizzando lo slot `suffix`"}}}},g={name:"Menu con icona a sinistra",render:e=>i`
    <it-dropdown label=${e.label} variant=${e.variant}>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 1
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 2
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 3
      </it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...o(["label","variant"])},parameters:{...t.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa\nallineata a sinistra utilizzando lo slot `prefix`"}}}},f={name:"Menu scuro",args:{dark:!0},render:e=>i`
    <it-dropdown label=${e.label} variant=${e.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...o(["label","variant"])},parameters:{...t.parameters,docs:{source:{excludeDecorators:!0},description:{story:"Aggiungendo l'attributo `dark` al dropdown si ottiene una versione con un colore primario scuro.\nLink ed elementi interni vengono declinati di conseguenza."}}}};var v,A,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown
      label=\${args.label}
      ?disabled=\${args.disabled}
      alignment=\${ifDefined(args.alignment)}
      size=\${ifDefined(args.size)}
      variant=\${args.variant}
      it-role=\${ifDefined(args['it-role'])}
      ?dark=\${args.dark}
      ?full-width=\${args['full-width']}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  tags: ['!autodocs', '!dev']
}`,...(y=(A=r.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var $,x,D;a.parameters={...a.parameters,docs:{...($=a.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Dropdown button varianti',
  render: () => html\`
    <it-dropdown label="Primario" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Secondario" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Success" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Danger" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="\${containerStyle}gap:0.5rem;flex-wrap:wrap;display:flex">\${Story()}</div>\`],
  argTypes: {
    ...disabledControls()
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: 'Ovviamente sono disponibili tutte le varianti già disponibili per i pulsanti. Di seguito, un esempio di utilizzo con le varianti \`primary\`, \`secondary\`, \`success\` e \`danger\`.'
      }
    }
  }
}`,...(D=(x=a.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var S,M,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:'{\n  render: () => html`\n    <it-dropdown label="Giù" alignment="bottom-start">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n\n    <it-dropdown label="Su" alignment="top-start">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n\n    <it-dropdown label="Sinistra" alignment="left">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n\n    <it-dropdown label="Destra" alignment="right">\n      <it-dropdown-item href="#">Azione 1</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 2</it-dropdown-item>\n      <it-dropdown-item href="#">Azione 3</it-dropdown-item>\n    </it-dropdown>\n  `,\n  decorators: [Story => html`<div\n        style="${containerStyle}gap:2rem;flex-wrap:wrap;align-items:space-between;justify-content:center;flex-direction:column;"\n      >\n        ${Story()}\n      </div>`],\n  argTypes: {\n    ...disabledControls()\n  },\n  parameters: {\n    ...meta.parameters,\n    docs: {\n      source: {\n        excludeDecorators: true\n      },\n      description: {\n        story: `Per aprire le voci di menu in direzioni diverse,\nè possibile utilizzare l\'attributo \\`alignment\\` con i valori \\`top\\`, \\`right\\`,\n\\`bottom\\`, \\`left\\`, \\`top-start\\`, \\`top-end\\`, \\`right-start\\`, \\`right-end\\`,\n\\`bottom-start\\`, \\`bottom-end\\`, \\`left-start\\` e \\`left-end\\`.\n\nI valori \\`top\\`, \\`right\\`, \\`bottom\\` e \\`left\\` aprono il menu in direzioni standard,\ncentrate rispetto al trigger,\nmentre i valori \\`top-start\\`, \\`top-end\\`, \\`right-start\\`, \\`right-end\\`,\n\\`bottom-start\\`, \\`bottom-end\\`, \\`left-start\\` e \\`left-end\\` permettono di specificare\nla posizione esatta del menu rispetto al trigger.\n`\n      }\n    }\n  }\n}',...(k=(M=d.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var T,I,P;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Menu con voci attive',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungere l'attributo active agli elementi del dropdown che si vogliono mostrare come attivi.
Per questioni di accessibilità il componente aggiungerà automaticamente <span class="visually-hidden"> attivo</span> in coda al testo degli elementi attivi.\`
      }
    }
  }
}`,...(P=(I=s.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var C,q,V;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Menu disabilitato',
  args: {
    disabled: true
  },
  render: args => html\`
    <it-dropdown label=\${args.label} ?disabled=\${args.disabled} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungere l'attributo \\\`disabled\\\` al dropdown per **disabilitarlo** completamente.\`
      }
    }
  }
}`,...(V=(q=l.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var G,L,N;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: 'Menu con voci disabilitate',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungere l'attributo \\\`disabled\\\` agli elementi del dropdown che si vogliono mostrare come **disabilitati**.\`
      }
    }
  }
}`,...(N=(L=p.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var O,j,R;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Menu con intestazioni e separatori',
  render: args => html\`
    <it-dropdown label="Item con separatore e header" variant=\${args.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Prima voce</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Dopo separatore</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`All'interno del menu dropdown possono essere inseriti header e separatori.\`
      }
    }
  }
}`,...(R=(j=m.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var B,E,Q;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Menu con voci grandi',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Grande</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Per aumentare la dimensione degli elementi contenuti nel dropdown
è sufficiente aggiungere agli stessi l'attributo \\\`large\\\`.\`
      }
    }
  }
}`,...(Q=(E=c.parameters)==null?void 0:E.docs)==null?void 0:Q.source}}};var _,K,W;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Menu a tutta larghezza',
  args: {
    'full-width': true
  },
  render: args => html\`
    <it-dropdown
      label=\${args.label}
      ?disabled=\${args.disabled}
      alignment=\${ifDefined(args.alignment)}
      size=\${ifDefined(args.size)}
      variant=\${ifDefined(args.variant)}
      it-role=\${ifDefined(args['it-role'])}
      ?dark=\${args.dark}
      ?full-width=\${args['full-width']}
      style="width: 100%;"
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="\${containerStyle}min-width:300px">\${Story()}</div>\`],
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Per ottenere un dropdown menu largo quanto l’elemento che contiene il dropdown button
è sufficiente aggiungere l'attributo \\\`full-width\\\`.
I link e testi contenuti al suo interno saranno disposti in orizzontale.\`
      }
    }
  }
}`,...(W=(K=u.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var F,H,J;w.parameters={...w.parameters,docs:{...(F=w.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Menu con icona a destra',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">
        Azione 1
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 2
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
      <it-dropdown-item href="#">
        Azione 3
        <it-icon slot="suffix" name="it-star-outline" size="sm" color="primary"></it-icon>
      </it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa
allineata a destra utilizzando lo slot \\\`suffix\\\`\`
      }
    }
  }
}`,...(J=(H=w.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var U,X,Y;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Menu con icona a sinistra',
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 1
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 2
      </it-dropdown-item>
      <it-dropdown-item href="#">
        <it-icon slot="prefix" name="it-star-outline" size="sm" color="primary"></it-icon>
        Azione 3
      </it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Agli elementi contenuti nel menu può essere aggiunta un’icona illustrativa
allineata a sinistra utilizzando lo slot \\\`prefix\\\`\`
      }
    }
  }
}`,...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ie;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Menu scuro',
  args: {
    dark: true
  },
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  parameters: {
    ...meta.parameters,
    docs: {
      source: {
        excludeDecorators: true
      },
      description: {
        story: \`Aggiungendo l'attributo \\\`dark\\\` al dropdown si ottiene una versione con un colore primario scuro.
Link ed elementi interni vengono declinati di conseguenza.\`
      }
    }
  }
}`,...(ie=(ee=f.parameters)==null?void 0:ee.docs)==null?void 0:ie.source}}};const ne=["Base","Varianti","Direzioni","MenuVociAttive","MenuDisabilitato","MenuVociDisabilitate","MenuIntestazioniSeparatori","MenuVociGrandi","MenuATuttaLarghezza","MenuIconaDestra","MenuIconaSinistra","MenuScuro"];export{r as Base,d as Direzioni,u as MenuATuttaLarghezza,l as MenuDisabilitato,w as MenuIconaDestra,g as MenuIconaSinistra,m as MenuIntestazioniSeparatori,f as MenuScuro,s as MenuVociAttive,p as MenuVociDisabilitate,c as MenuVociGrandi,a as Varianti,ne as __namedExportsOrder,t as default};
