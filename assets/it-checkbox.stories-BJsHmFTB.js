import{x as a,o as t}from"./iframe-B8IU2_pc.js";import{S as q}from"./formControlReusableStories-B7_LpbhX.js";import"./form-control-_cQkz3Ex.js";const o=e=>{var r,u;return a`<it-checkbox
    id="${t(e.id||void 0)}"
    name="${t(e.name||void 0)}"
    value="${t(((r=e.value)==null?void 0:r.length)>0?e.value:void 0)}"
    ?checked="${e.checked}"
    ?indeterminate="${e.indeterminate}"
    ?disabled="${e.disabled}"
    ?inline="${e.inline}"
    form="${t(((u=e.form)==null?void 0:u.length)>0?e.form:void 0)}"
    ?custom-validation="${e.customValidation}"
    validity-message="${t(e.validityMessage||void 0)}"
    ?required="${e.required}"
    support-text="${t(e.supportText||void 0)}"
    ?group="${e.group}"
    class="${t(e.className||void 0)}"
  >
    <span slot="label">${e.label}</span>${t(e.children||void 0)}
  </it-checkbox> `},n={title:"Componenti/Form/Checkbox",tags:["new","a11y-ok","web-component"],component:"it-checkbox",args:{id:"",label:"Checkbox di esempio",name:"esempio",value:void 0,checked:!1,indeterminate:!1,disabled:!1,form:void 0,customValidation:!1,validityMessage:"",required:!1,inline:!1,group:!1,supportText:""},argTypes:{id:{control:"text",description:"ID del campo",type:"string"},label:{control:"text",description:"Etichetta del campo",type:"string"},name:{control:"text",type:"string"},value:{control:"text",description:"Valore del campo",type:"string"},checked:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},indeterminate:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},form:{control:"text",type:"string",description:"ID html del form a cui è associato il campo, se il campo non si trova all'interno di una form "},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",type:"string",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},inline:{control:"boolean",type:"boolean",description:"Se si vogliono mostrare più checkbox affiancate orizzontalmente",table:{defaultValue:{summary:"false"}}},group:{control:"boolean",type:"boolean",description:"Se si vogliono mostrare più checkbox raggruppate visivamente",table:{defaultValue:{summary:"false"}}},supportText:{name:"support-text",control:"text",description:"Testo di supporto",type:"string"}}},i={...n,name:"Esempio interattivo",tags:["!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>a`${o({...e})} `},s={...n,args:{disabled:!0},render:e=>a`
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      ${o({...e,label:"Checkbox non selezionato",className:"mb-2"})}
      ${o({...e,label:"Checkbox selezionato",checked:!0})}
    </fieldset>
  `},l={...n,name:"Indeterminato (mixed)",args:{indeterminate:!0},render:e=>a`
    ${o({...e,label:"Checkbox indeterminato"})}
  `},d={...n,args:{inline:!0},argTypes:{...Object.fromEntries(Object.entries(n.argTypes).map(([e,r])=>e!=="inline"?[e,{...r,table:{...r.table,disable:!0}}]:[e,{...r}]))},render:e=>a`
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      ${o({...e,label:"Checkbox non selezionato"})}
      ${o({...e,label:"Checkbox selezionato",checked:!0})}
    </fieldset>
  `},c={...n,name:"Gruppo di checkbox",args:{group:!0},render:e=>a`
    <div class="row">
      <fieldset class="col-12 col-md-6">
        <legend>Gruppo di checkbox</legend>
        ${o({...e,label:"Checkbox selezionato",checked:!0})}
        ${o({...e,label:"Checkbox non selezionato"})}
        ${o({...e,disabled:!0,label:"Checkbox disabilitato non selezionato"})}
      </fieldset>

      <fieldset class="col-12 col-md-6">
        <legend>Gruppo di checkbox</legend>
        ${o({...e,label:"Checkbox selezionato",checked:!0,supportText:"Testo descrittivo di supporto per l'opzione selezionabile"})}
        ${o({...e,label:"Checkbox non selezionato",supportText:"Testo descrittivo di supporto per l'opzione selezionabile"})}
        ${o({...e,disabled:!0,label:"Checkbox disabilitato non selezionato",supportText:"Testo descrittivo di supporto per l'opzione selezionabile"})}
      </fieldset>
    </div>
  `},p={...n,name:"Testo di supporto",args:{supportText:"Testo descrittivo di supporto per l'opzione selezionabile"},render:e=>a`
    ${o({...e,label:"Checkbox con testo di supporto selezionato"})}
  `},m={...q({componentName:"it-checkbox",otherMethods:"|`click()`| Triggera l'evento di click sull'input reale | - |"}),tags:["!dev"]};var b,g,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\`\${renderComponent({
    ...params
  })} \`
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,v,k;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...meta,
  // name: 'Disabilitato',
  args: {
    disabled: true
  },
  render: params => html\`
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      \${renderComponent({
    ...params,
    label: 'Checkbox non selezionato',
    className: 'mb-2'
  })}
      \${renderComponent({
    ...params,
    label: 'Checkbox selezionato',
    checked: true
  })}
    </fieldset>
  \`
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var f,z,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...meta,
  name: 'Indeterminato (mixed)',
  args: {
    indeterminate: true
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Checkbox indeterminato'
  })}
  \`
}`,...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var $,y,T;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  ...meta,
  // name: 'Inline',
  args: {
    inline: true
  },
  argTypes: {
    ...Object.fromEntries(Object.entries(meta.argTypes).map(([key, value]) => key !== 'inline' ? [key, {
      ...value,
      table: {
        ...value.table,
        disable: true
      }
    }] : [key, {
      ...value
    }]))
  },
  render: params => html\`
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      \${renderComponent({
    ...params,
    label: 'Checkbox non selezionato'
  })}
      \${renderComponent({
    ...params,
    label: 'Checkbox selezionato',
    checked: true
  })}
    </fieldset>
  \`
}`,...(T=(y=d.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,G,I;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...meta,
  name: 'Gruppo di checkbox',
  args: {
    group: true
  },
  render: params => html\`
    <div class="row">
      <fieldset class="col-12 col-md-6">
        <legend>Gruppo di checkbox</legend>
        \${renderComponent({
    ...params,
    label: 'Checkbox selezionato',
    checked: true
  })}
        \${renderComponent({
    ...params,
    label: 'Checkbox non selezionato'
  })}
        \${renderComponent({
    ...params,
    disabled: true,
    label: 'Checkbox disabilitato non selezionato'
  })}
      </fieldset>

      <fieldset class="col-12 col-md-6">
        <legend>Gruppo di checkbox</legend>
        \${renderComponent({
    ...params,
    label: 'Checkbox selezionato',
    checked: true,
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  })}
        \${renderComponent({
    ...params,
    label: 'Checkbox non selezionato',
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  })}
        \${renderComponent({
    ...params,
    disabled: true,
    label: 'Checkbox disabilitato non selezionato',
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  })}
      </fieldset>
    </div>
  \`
}`,...(I=(G=c.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var M,E,V;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...meta,
  name: 'Testo di supporto',
  args: {
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Checkbox con testo di supporto selezionato'
  })}
  \`
}`,...(V=(E=p.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var j,O,P;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...StoryFormControlMethodAndProps({
    componentName: 'it-checkbox',
    otherMethods: \`|\\\`click()\\\`| Triggera l'evento di click sull'input reale | - |\`
  }),
  tags: ['!dev']
}`,...(P=(O=m.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};const w=["EsempioInterattivo","Disabilitato","Indeterminate","Inline","Group","SupportText","MetodiEPropPubblici"],F=Object.freeze(Object.defineProperty({__proto__:null,Disabilitato:s,EsempioInterattivo:i,Group:c,Indeterminate:l,Inline:d,MetodiEPropPubblici:m,SupportText:p,__namedExportsOrder:w,default:n},Symbol.toStringTag,{value:"Module"}));export{s as D,i as E,c as G,l as I,m as M,F as S,d as a,p as b};
