import{x as s,o as t}from"./iframe-BD5xBRNY.js";import{I as S}from"./types-CucKb5le.js";const o=new Date,M=o.toISOString().split("T")[0],x=new Date(o);x.setDate(o.getDate()+3);const $=x.toISOString().split("T")[0],D=o.getDay(),I=(8-D)%7||7,f=new Date(o);f.setDate(o.getDate()+I);const h=f.toISOString().split("T")[0],l=e=>s`<it-input
    id="${t(e.id||void 0)}"
    type="date"
    name="${t(e.name||void 0)}"
    value="${t(e.value||void 0)}"
    ?disabled="${e.disabled}"
    ?custom-validation="${e.customValidation}"
    validity-message="${t(e.validityMessage||void 0)}"
    min="${t(e.min||void 0)}"
    max="${t(e.max||void 0)}"
    step="${t(e.step||void 0)}"
    ?required="${e.required}"
    ?readonly="${e.readonly}"
    ?plaintext="${e.plaintext}"
    placeholder="${t(e.placeholder||void 0)}"
    support-text="${t(e.supportText||void 0)}"
    size="${t(e.size||void 0)}"
    ?adaptive="${e.adaptive}"
  >
    <span slot="label">${e.label}</span>${t(e.children||void 0)}
  </it-input>`,a={title:"Componenti/Form/Input Calendario",tags:["a11y-ok","web-component"],component:"it-input",args:{id:"",label:"Datepicker",type:"date",name:"inputDate",value:void 0,disabled:!1,customValidation:!1,validityMessage:"",min:void 0,max:void 0,step:void 0,required:!1,readonly:!1,plaintext:!1,placeholder:"",supportText:"",size:void 0},argTypes:{label:{control:"text",description:"Etichetta del campo"},type:{control:"select",options:["date"],fixed:!0,table:{defaultValue:{summary:"date"}}},name:{control:"text"},value:{control:"text",description:"Valore del campo (nel formato YYYY-MM-DD)",type:"string"},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},min:{control:"text",description:"Valore minimo consentito (nel formato YYYY-MM-DD)",type:"string"},max:{control:"text",description:"Valore massimo consentito (nel formato YYYY-MM-DD)",type:"string"},step:{control:"number",description:"Incremento per ogni step (utilizzato dai pulsanti +/-)",type:"string"},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},readonly:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},plaintext:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se il campo è readonly, con l'attributo 'plaintext' il campo assume l'aspetto di testo normalizzato."},placeholder:{control:"text",description:"Testo segnaposto"},supportText:{name:"support-text",control:"text",description:"Testo di supporto"},size:{control:{type:"select",labels:{undefined:"(non definito)",sm:"sm",lg:"lg"}},options:S,description:"Dimensione del campo: 'sm' | (non definito) | 'lg' ",table:{defaultValue:{summary:void 0}},type:"string"}}},n={...a,name:"Esempio interattivo",parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>s`${l({...e})}`},i={...a,name:"Restringere il periodo di validità",parameters:{docs:{canvas:{sourceState:"shown"}}},args:{...a.args,min:M,max:$,label:"Scegli una data nel periodo"},render:e=>s`${l({...e})}`},r={...a,name:"Impostare intervalli di date regolari",parameters:{docs:{canvas:{sourceState:"shown"}}},args:{...a.args,min:h,step:7,label:"Scegli una data"},render:e=>s`${l({...e})}`};var d,c,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\`\${renderCalendarInput({
    ...params
  })}\`
}`,...(p=(c=n.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...meta,
  name: 'Restringere il periodo di validità',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  args: {
    ...meta.args,
    min: defaultMin,
    max: defaultMax,
    label: 'Scegli una data nel periodo'
  },
  render: params => html\`\${renderCalendarInput({
    ...params
  })}\`
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,y,b;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...meta,
  name: 'Impostare intervalli di date regolari',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  args: {
    ...meta.args,
    min: nextMonday,
    step: 7,
    label: 'Scegli una data'
  },
  render: params => html\`\${renderCalendarInput({
    ...params
  })}\`
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};const V=["EsempioInterattivo","MinMax","Step"],T=Object.freeze(Object.defineProperty({__proto__:null,EsempioInterattivo:n,MinMax:i,Step:r,__namedExportsOrder:V,default:a},Symbol.toStringTag,{value:"Module"}));export{n as E,i as M,T as S,r as a};
