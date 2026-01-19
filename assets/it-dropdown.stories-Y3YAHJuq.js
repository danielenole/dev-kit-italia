import{x as i,o as t}from"./iframe--5LOoNCc.js";const r="height:200px;display:flex;align-items:flex-start;",io={title:"Componenti/Dropdown",component:"it-dropdown",tags:["a11y-ok","web-component"],args:{label:"Apri dropdown",disabled:!1,alignment:void 0,variant:"primary",size:void 0,"it-role":void 0,dark:!1,"full-width":!1,"it-aria-label":void 0},argTypes:{label:{control:"text",description:"Testo del pulsante che apre il dropdown"},disabled:{control:"boolean",description:"Disabilita il dropdown",table:{defaultValue:{summary:"false"}}},alignment:{control:"select",description:"Posizionamento del menu rispetto al pulsante",options:["top","right","bottom","left","top-start","top-end","right-start","right-end","bottom-start","bottom-end","left-start","left-end"],type:"string",table:{defaultValue:{summary:"bottom-start"}}},variant:{control:"select",description:"Variante grafica del pulsante",options:["primary","secondary","success","danger","warning","light","link"],type:"string",table:{defaultValue:{summary:"primary"}}},size:{control:"select",description:"Dimensione del pulsante",options:["sm","lg"],type:"string",table:{}},"it-role":{control:"select",description:"Ruolo del pulsante (vedi la sezione Accessibilità)",options:["menu","list"],type:"string",table:{defaultValue:{summary:"menu"}}},dark:{control:"boolean",description:"Stile scuro per il menu dropdown",table:{defaultValue:{summary:"false"}}},"full-width":{control:"boolean",description:"Imposta la larghezza del menu dropdown al 100% del contenitore",table:{defaultValue:{summary:"false"}}},"it-aria-label":{control:"text",description:"Valore per l'attributo `aria-label` del pulsante (obbligatorio per accessibilità se `label` è vuoto)",type:"string"}},parameters:{docs:{source:{excludeDecorators:!0}}}};function e(o){return Object.keys(io.argTypes).reduce((g,b)=>(o!=null&&o.includes(b)||(g[b]={table:{disable:!0}}),g),{})}const n={render:o=>i`
    <it-dropdown
      label=${o.label}
      ?disabled=${o.disabled}
      alignment=${t(o.alignment)}
      size=${t(o.size)}
      variant=${o.variant}
      it-role=${t(o["it-role"])}
      ?dark=${o.dark}
      ?full-width=${o["full-width"]}
      it-aria-label=${t(o["it-aria-label"])}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,tags:["!autodocs","!dev"],decorators:[o=>i`<div style="height:200px">${o()}</div>`]},d={render:()=>i`
    <it-dropdown label="Apri dropdown" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[o=>i`<div style="${r}gap:0.5rem;flex-wrap:wrap">${o()}</div>`],argTypes:{...e()}},a={render:()=>i`
    <it-dropdown label="Apri dropdown" alignment="bottom-start" style="grid-column:2">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropup" alignment="top-start" style="grid-row:3;grid-column:2">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropstart" alignment="left" style="grid-row:2;grid-column:3">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropend" alignment="right" style="grid-row:2;grid-column:1">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[o=>i`<div style="display:grid;gap:.5rem;grid:1fr 1fr 1fr/1fr 1fr 1fr;">${o()}</div>`],argTypes:{...e()}},l={render:o=>i`
    <it-dropdown label=${o.label} variant=${o.variant}>
      <it-dropdown-item href="#" active>Attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
      <it-dropdown-item href="#">Non attivo</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["label","variant"])},decorators:[o=>i`<div style=${r}>${o()}</div>`]},p={args:{disabled:!0},render:o=>i`
    <it-dropdown label=${o.label} ?disabled=${o.disabled} variant=${o.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["label","variant"])}},s={render:o=>i`
    <it-dropdown label=${o.label} variant=${o.variant}>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" disabled>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["label","variant"])},decorators:[o=>i`<div style=${r}>${o()}</div>`]},m={render:o=>i`
    <it-dropdown label="Apri dropdown" variant=${o.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["variant"])},decorators:[o=>i`<div style=${r}>${o()}</div>`]},w={render:o=>i`
    <it-dropdown label=${o.label} variant=${o.variant}>
      <it-dropdown-item href="#" large>Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" large>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["label","variant"])},decorators:[o=>i`<div style=${r}>${o()}</div>`]},c={args:{"full-width":!0},render:o=>i`
    <it-dropdown
      label=${o.label}
      ?disabled=${o.disabled}
      alignment=${t(o.alignment)}
      size=${t(o.size)}
      variant=${t(o.variant)}
      it-role=${t(o["it-role"])}
      ?dark=${o.dark}
      ?full-width=${o["full-width"]}
      style="width: 100%;"
      it-aria-label=${t(o["it-aria-label"])}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,decorators:[o=>i`<div style="${r}height:100px;min-width:300px">${o()}</div>`]},f={render:o=>i`
    <it-dropdown label=${o.label} variant=${o.variant}>
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
  `,argTypes:{...e(["label","variant"])},decorators:[o=>i`<div style=${r}>${o()}</div>`]},h={render:o=>i`
    <it-dropdown label=${o.label} variant=${o.variant}>
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
  `,argTypes:{...e(["label","variant"])},decorators:[o=>i`<div style=${r}>${o()}</div>`]},u={args:{dark:!0},render:o=>i`
    <it-dropdown label=${o.label} variant=${o.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  `,argTypes:{...e(["label","variant"])},decorators:[o=>i`<div style="${r}height:220px">${o()}</div>`]};var z,v,A;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
      it-aria-label=\${ifDefined(args['it-aria-label'])}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  tags: ['!autodocs', '!dev'],
  decorators: [Story => html\`<div style="height:200px">\${Story()}</div>\`]
}`,...(A=(v=n.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var y,$,S;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => html\`
    <it-dropdown label="Apri dropdown" variant="primary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="secondary">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="success">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropdown" variant="danger">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="\${containerStyle}gap:0.5rem;flex-wrap:wrap">\${Story()}</div>\`],
  argTypes: {
    ...disabledControls()
  }
}`,...(S=($=d.parameters)==null?void 0:$.docs)==null?void 0:S.source}}};var x,T,k;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => html\`
    <it-dropdown label="Apri dropdown" alignment="bottom-start" style="grid-column:2">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropup" alignment="top-start" style="grid-row:3;grid-column:2">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropstart" alignment="left" style="grid-row:2;grid-column:3">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>

    <it-dropdown label="Apri dropend" alignment="right" style="grid-row:2;grid-column:1">
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="display:grid;gap:.5rem;grid:1fr 1fr 1fr/1fr 1fr 1fr;">\${Story()}</div>\`],
  argTypes: {
    ...disabledControls()
  }
}`,...(k=(T=a.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var M,D,V;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
  decorators: [Story => html\`<div style=\${containerStyle}>\${Story()}</div>\`]
}`,...(V=(D=l.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var C,I,_;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
  }
}`,...(_=(I=p.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};var P,N,O;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
  decorators: [Story => html\`<div style=\${containerStyle}>\${Story()}</div>\`]
}`,...(O=(N=s.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var j,B,G;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown label="Apri dropdown" variant=\${args.variant}>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item separator></it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['variant'])
  },
  decorators: [Story => html\`<div style=\${containerStyle}>\${Story()}</div>\`]
}`,...(G=(B=m.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var L,E,R;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant}>
      <it-dropdown-item href="#" large>Azione 1</it-dropdown-item>
      <it-dropdown-item href="#" large>Azione 2</it-dropdown-item>
      <it-dropdown-item href="#" large>Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  decorators: [Story => html\`<div style=\${containerStyle}>\${Story()}</div>\`]
}`,...(R=(E=w.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var q,F,H;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
      it-aria-label=\${ifDefined(args['it-aria-label'])}
    >
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  decorators: [Story => html\`<div style="\${containerStyle}height:100px;min-width:300px">\${Story()}</div>\`]
}`,...(H=(F=c.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var J,K,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
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
  decorators: [Story => html\`<div style=\${containerStyle}>\${Story()}</div>\`]
}`,...(Q=(K=f.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var U,W,X;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
  decorators: [Story => html\`<div style=\${containerStyle}>\${Story()}</div>\`]
}`,...(X=(W=h.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Y,Z,oo;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    dark: true
  },
  render: args => html\`
    <it-dropdown label=\${args.label} variant=\${args.variant} dark>
      <h4 slot="header" class="link-list-heading dropdown-header">Intestazione</h4>
      <it-dropdown-item href="#">Azione 1</it-dropdown-item>
      <it-dropdown-item href="#">Azione 2</it-dropdown-item>
      <it-dropdown-item href="#">Azione 3</it-dropdown-item>
    </it-dropdown>
  \`,
  argTypes: {
    ...disabledControls(['label', 'variant'])
  },
  decorators: [Story => html\`<div style="\${containerStyle}height:220px">\${Story()}</div>\`]
}`,...(oo=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:oo.source}}};const eo=["Base","Varianti","Posizionamento","MenuVociAttive","MenuDisabilitato","MenuVociDisabilitate","MenuIntestazioniSeparatori","MenuVociGrandi","MenuATuttaLarghezza","MenuIconaDestra","MenuIconaSinistra","MenuScuro"],ro=Object.freeze(Object.defineProperty({__proto__:null,Base:n,MenuATuttaLarghezza:c,MenuDisabilitato:p,MenuIconaDestra:f,MenuIconaSinistra:h,MenuIntestazioniSeparatori:m,MenuScuro:u,MenuVociAttive:l,MenuVociDisabilitate:s,MenuVociGrandi:w,Posizionamento:a,Varianti:d,__namedExportsOrder:eo,default:io},Symbol.toStringTag,{value:"Module"}));export{n as B,p as M,a as P,ro as S,d as V,l as a,s as b,m as c,w as d,c as e,f,h as g,u as h};
