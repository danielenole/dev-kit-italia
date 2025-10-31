import{x as a}from"./iframe-Bva7CR0T.js";import{o as n}from"./query-CblQfenQ.js";import{I as R}from"./types-krleEmxp.js";import"./it-input-BMEXubjN.js";import"./preload-helper-Dp1pzeXC.js";import"./directive-CvdRHFdJ.js";import"./query-assigned-elements-B4zEjXUi.js";import"./when-BR7zwNJC.js";const t=e=>a`<it-input
    id="${n(e.id||void 0)}"
    type="number"
    name="${n(e.name||void 0)}"
    value="${n(e.value||void 0)}"
    ?disabled="${e.disabled}"
    ?custom-validation="${e.customValidation}"
    validity-message="${n(e.validityMessage||void 0)}"
    min="${n(e.min||void 0)}"
    max="${n(e.max||void 0)}"
    step="${n(e.step||void 0)}"
    ?required="${e.required}"
    ?readonly="${e.readonly}"
    ?plaintext="${e.plaintext}"
    placeholder="${n(e.placeholder||void 0)}"
    support-text="${n(e.supportText||void 0)}"
    size="${n(e.size||void 0)}"
    ?adaptive="${e.adaptive}"
    ><span slot="label">${e.label}</span>${n(e.children||void 0)}</it-input
  >`,i={title:"Componenti/Form/Input Numerico",tags:["autodocs"],component:"it-input",args:{id:"",label:"Input Number",type:"number",name:"inputNumber",value:"100",disabled:!1,customValidation:!1,validityMessage:"",min:void 0,max:void 0,step:void 0,required:!1,readonly:!1,plaintext:!1,placeholder:"",supportText:"",size:void 0,adaptive:!1},argTypes:{label:{control:"text",description:"Etichetta del campo"},type:{control:"select",options:["number"],fixed:!0,table:{defaultValue:{summary:"number"}}},name:{control:"text"},value:{control:"text",description:"Valore del campo"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},min:{control:"number",description:"Valore minimo consentito"},max:{control:"number",description:"Valore massimo consentito"},step:{control:"number",description:"Incremento per ogni step (utilizzato dai pulsanti +/-)"},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readonly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},plaintext:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se il campo è readonly, con l'attributo 'plaintext' il campo assume l'aspetto di testo normalizzato."},placeholder:{control:"text",description:"Testo segnaposto"},supportText:{name:"support-text",control:"text",description:"Testo di supporto"},size:{control:"select",options:R,description:"Dimensione del campo: 'sm' | (stringa vuota) | 'lg' ",table:{defaultValue:{summary:void 0}}},adaptive:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:'Se il campo è `type="number"`, con l\'attributo `adaptive` il campo assume adatta la sua larghezza al contenuto'}},parameters:{docs:{description:{component:`
<Description>Campi input con pulsanti per incrementare/decrementare valori numerici.</Description>


L'input numerico è una variante del componente \`<it-input>\` con l'attributo \`type\` impostato su \`number\`.

Pertanto, per quanto riguarda:

- la **validazione** e la **gestione degli errori**
- la **gestione degli eventi**
- i **metodi e le proprietà** accessibili tramite JavaScript
- il **supporto all’internazionalizzazione (i18n)**


è necessario fare riferimento alla **documentazione principale** del componente \`<it-input>\`.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Tutti gli attributi \`aria-*\` passati a \`<it-input>\` vengono applicati all'input generato.
</p></div></div>

`}}}},r={...i,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>a`${t({...e,label:"Input Numerico",name:"inputNumber",id:"exampleInputNumber"})}`},o={...i,parameters:{docs:{description:{story:`
La larghezza del campo predefinita è quella del suo contenitore, per limitare la larghezza alle dimensioni del valore contenuto utilizzare il ridimensionamento adattivo.
`}}},args:{value:"100"},render:e=>a`
    <div class="w-100">
      ${t({...e,label:"Input Numerico inserito in una colonna a tutta larghezza",name:"inputNumberFull",id:"inputNumberFull"})}
    </div>
    <div class="w-50">
      ${t({...e,label:"Input Numerico inserito in una colonna di larghezza 50%",name:"inputNumberHalf",id:"inputNumberHalf"})}
    </div>
  `},s={...i,name:"Limiti e Step",parameters:{docs:{description:{story:'\nAggiungendo gli attributi HTML `min=""`, `max=""` e `step=""` all\'input è possibile limitare il valore minimo e massimo del campo e decidere di quanto varierà a ogni click sui pulsanti.\n'}}},args:{value:"100",min:0,max:200,step:10},render:e=>a`
    ${t({...e,label:"Min, Max & Step",name:"inputNumberLimits",id:"inputNumberLimits"})}
  `},l={...i,parameters:{docs:{description:{story:"\nPer anteporre il simbolo della valuta (ad esempio in Euro), utilizza lo slot `prepend`.\n"}}},args:{value:"3.50",step:.01,min:0},render:e=>a`
    ${t({...e,label:"Currency",name:"inputNumberCurrency",id:"inputNumberCurrency",children:a`<span slot="prepend" class="fw-semibold">&euro;</span> `})}
  `},u={...i,parameters:{docs:{description:{story:'\nPer anteporre il simbolo percentuale, utilizza lo slot `prepend`.\n\nSi consiglia di impostare gli attributi `min=0` e `max="100"`.\n'}}},args:{value:"50",step:10,min:0,max:100},render:e=>a`
    ${t({...e,label:"Percentage",name:"inputNumberPercent",id:"inputNumberPercent",children:a`<span slot="prepend" class="fw-semibold">%</span> `})}
  `},m={...i,parameters:{docs:{description:{story:"\nPer disabilitare un Input number, aggiungere l'attributo `disabled` al componente `<it-input>`.\n"}}},args:{value:"50",disabled:!0},render:e=>a`
    ${t({...e,label:"Disabled",name:"inputNumberDisabled",id:"inputNumberDisabled"})}
  `},p={...i,parameters:{docs:{description:{story:"\nPer rendere un Input number `readonly`, aggiungere l'attributo `readonly` al componente `<it-input>`.\n"}}},args:{value:"50",readonly:!0},render:e=>a`
    ${t({...e,label:"Contenuto in sola lettura",name:"inputNumberReadonly",id:"inputNumberReadonly"})}
  `},d={...i,parameters:{docs:{description:{story:"\nÈ possibile far sì che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Per ottenere questo comportamento, è sufficiente aggiungere l'attributo `adaptive` al componente `<it-input>`.\n"}}},args:{value:"99999",adaptive:!0},render:e=>a`
    ${t({...e,label:"Adattivo",name:"inputNumberAdaptive",id:"inputNumberAdaptive"})}
  `};var c,b,v;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
  render: params => html\`\${renderNumberInput({
    ...params,
    label: 'Input Numerico',
    name: 'inputNumber',
    id: 'exampleInputNumber'
  })}\`
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var g,y,N;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
La larghezza del campo predefinita è quella del suo contenitore, per limitare la larghezza alle dimensioni del valore contenuto utilizzare il ridimensionamento adattivo.
\`
      }
    }
  },
  args: {
    value: '100'
  },
  render: params => html\`
    <div class="w-100">
      \${renderNumberInput({
    ...params,
    label: 'Input Numerico inserito in una colonna a tutta larghezza',
    name: 'inputNumberFull',
    id: 'inputNumberFull'
  })}
    </div>
    <div class="w-50">
      \${renderNumberInput({
    ...params,
    label: 'Input Numerico inserito in una colonna di larghezza 50%',
    name: 'inputNumberHalf',
    id: 'inputNumberHalf'
  })}
    </div>
  \`
}`,...(N=(y=o.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var z,f,x;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  ...meta,
  name: 'Limiti e Step',
  parameters: {
    docs: {
      description: {
        story: \`
Aggiungendo gli attributi HTML \\\`min=""\\\`, \\\`max=""\\\` e \\\`step=""\\\` all'input è possibile limitare il valore minimo e massimo del campo e decidere di quanto varierà a ogni click sui pulsanti.
\`
      }
    }
  },
  args: {
    value: '100',
    min: 0,
    max: 200,
    step: 10
  },
  render: params => html\`
    \${renderNumberInput({
    ...params,
    label: 'Min, Max & Step',
    name: 'inputNumberLimits',
    id: 'inputNumberLimits'
  })}
  \`
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var $,h,I;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
Per anteporre il simbolo della valuta (ad esempio in Euro), utilizza lo slot \\\`prepend\\\`.
\`
      }
    }
  },
  args: {
    value: '3.50',
    step: 0.01,
    min: 0
  },
  render: params => html\`
    \${renderNumberInput({
    ...params,
    label: 'Currency',
    name: 'inputNumberCurrency',
    id: 'inputNumberCurrency',
    children: html\`<span slot="prepend" class="fw-semibold">&euro;</span> \`
  })}
  \`
}`,...(I=(h=l.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var S,P,V;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
Per anteporre il simbolo percentuale, utilizza lo slot \\\`prepend\\\`.

Si consiglia di impostare gli attributi \\\`min=0\\\` e \\\`max="100"\\\`.
\`
      }
    }
  },
  args: {
    value: '50',
    step: 10,
    min: 0,
    max: 100
  },
  render: params => html\`
    \${renderNumberInput({
    ...params,
    label: 'Percentage',
    name: 'inputNumberPercent',
    id: 'inputNumberPercent',
    children: html\`<span slot="prepend" class="fw-semibold">%</span> \`
  })}
  \`
}`,...(V=(P=u.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var q,E,L;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
Per disabilitare un Input number, aggiungere l'attributo \\\`disabled\\\` al componente \\\`<it-input>\\\`.
\`
      }
    }
  },
  args: {
    value: '50',
    disabled: true
  },
  render: params => html\`
    \${renderNumberInput({
    ...params,
    label: 'Disabled',
    name: 'inputNumberDisabled',
    id: 'inputNumberDisabled'
  })}
  \`
}`,...(L=(E=m.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var D,w,C;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
Per rendere un Input number \\\`readonly\\\`, aggiungere l'attributo \\\`readonly\\\` al componente \\\`<it-input>\\\`.
\`
      }
    }
  },
  args: {
    value: '50',
    readonly: true
  },
  render: params => html\`
    \${renderNumberInput({
    ...params,
    label: 'Contenuto in sola lettura',
    name: 'inputNumberReadonly',
    id: 'inputNumberReadonly'
  })}
  \`
}`,...(C=(w=p.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var M,T,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
È possibile far sì che il campo numerico si ridimensioni automaticamente a seconda del valore contenuto in esso. Per ottenere questo comportamento, è sufficiente aggiungere l'attributo \\\`adaptive\\\` al componente \\\`<it-input>\\\`.
\`
      }
    }
  },
  args: {
    value: '99999',
    adaptive: true
  },
  render: params => html\`
    \${renderNumberInput({
    ...params,
    label: 'Adattivo',
    name: 'inputNumberAdaptive',
    id: 'inputNumberAdaptive'
  })}
  \`
}`,...(A=(T=d.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};const Z=["EsempioInterattivo","Esempi","LimitiEStep","Valuta","Percentuale","Disabilitato","Readonly","Ridimensionamento"];export{m as Disabilitato,o as Esempi,r as EsempioInterattivo,s as LimitiEStep,u as Percentuale,p as Readonly,d as Ridimensionamento,l as Valuta,Z as __namedExportsOrder,i as default};
