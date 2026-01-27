import{b as n}from"./iframe-CC_6_ikl.js";const r={title:"Componenti/Torna indietro",component:"it-back",tags:["beta","documentation"],render:()=>n`<div class="hide-preview"></div>`,parameters:{docs:{description:{component:`
    <Description>Elemento di navigazione per tornare alla pagina o alla schermata precedente</Description>
            `.trim()}}}},a={render:()=>n`
    <a
      href="#"
      class="go-back"
      @click=${i=>{i.preventDefault(),window.history.back()}}
    >
      <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
      <span>Torna indietro</span>
    </a>
  `},o={decorators:[i=>n` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->${i()}<!-- Fine esempi --></div> `],render:()=>n`
    <it-button
      variant="primary"
      class="go-back"
      @click=${()=>{window.history.back()}}
      icon
    >
      <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
      <span>Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      @click=${()=>{window.history.back()}}
      icon
    >
        <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
        <span>Torna su</span>
      </span>
    </it-button>
  `},t={name:"Pulsante con sola icona",decorators:[i=>n` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->${i()}<!-- Fine esempi --></div> `],render:()=>n`
    <it-button
      variant="primary"
      class="go-back"
      icon
      @click=${()=>{window.history.back()}}
    >
      <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      icon
      @click=${()=>{window.history.back()}}
    >
      <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      icon
      @click=${()=>{window.history.back()}}
    >
      <it-icon name="it-arrow-right" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      icon
      @click=${()=>{window.history.back()}}
    >
      <it-icon name="it-arrow-down" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <a
      href="#"
      class="go-back"
      @click=\${(e: Event) => {
    e.preventDefault();
    window.history.back();
  }}
    >
      <it-icon name="it-arrow-left" size="sm" color="primary"></it-icon>
      <span>Torna indietro</span>
    </a>
  \`
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  decorators: [story => html\` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->\${story()}<!-- Fine esempi --></div> \`],
  render: () => html\`
    <it-button
      variant="primary"
      class="go-back"
      @click=\${() => {
    window.history.back();
  }}
      icon
    >
      <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
      <span>Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      @click=\${() => {
    window.history.back();
  }}
      icon
    >
        <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
        <span>Torna su</span>
      </span>
    </it-button>
  \`
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Pulsante con sola icona',
  decorators: [story => html\` <div class="d-flex gap-3 flex-wrap"><!-- Inizio esempi -->\${story()}<!-- Fine esempi --></div> \`],
  render: () => html\`
    <it-button
      variant="primary"
      class="go-back"
      icon
      @click=\${() => {
    window.history.back();
  }}
    >
      <it-icon name="it-arrow-left" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      icon
      @click=\${() => {
    window.history.back();
  }}
    >
      <it-icon name="it-arrow-up" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      icon
      @click=\${() => {
    window.history.back();
  }}
    >
      <it-icon name="it-arrow-right" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
    <it-button
      variant="primary"
      class="go-back"
      icon
      @click=\${() => {
    window.history.back();
  }}
    >
      <it-icon name="it-arrow-down" size="sm" color="inverse"></it-icon>
      <span class="visually-hidden">Torna indietro</span>
    </it-button>
  \`
}`,...t.parameters?.docs?.source}}};const s=["Link","Pulsante","PulsanteSolaIcona"],c=Object.freeze(Object.defineProperty({__proto__:null,Link:a,Pulsante:o,PulsanteSolaIcona:t,__namedExportsOrder:s,default:r},Symbol.toStringTag,{value:"Module"}));export{c as B,a as L,o as P,t as a};
