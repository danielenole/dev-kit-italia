import{x as a,o as t}from"./iframe-C4eBJZ64.js";import{S as q}from"./form-control-DQ_lH2-M.js";import"./preload-helper-Dp1pzeXC.js";const o=e=>{var i,u;return a`<it-checkbox
    id="${t(e.id||void 0)}"
    name="${t(e.name||void 0)}"
    value="${t(((i=e.value)==null?void 0:i.length)>0?e.value:void 0)}"
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
    ><span slot="label">${e.label}</span>${t(e.children||void 0)}</it-checkbox
  >`},n={title:"Componenti/Form/Checkbox",tags:["autodocs","new","a11y-ok","web-component"],component:"it-checkbox",args:{id:"",label:"Checkbox di esempio",name:"esempio",value:void 0,checked:!1,indeterminate:!1,disabled:!1,form:void 0,customValidation:!1,validityMessage:"",required:!1,inline:!1,group:!1,supportText:""},argTypes:{id:{control:"text",description:"ID del campo"},label:{control:"text",description:"Etichetta del campo"},name:{control:"text"},value:{control:"text",description:"Valore del campo"},checked:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},indeterminate:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},disabled:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},form:{control:"text",description:"ID html del form a cui è associato il campo, se il campo non si trova all'interno di una form "},customValidation:{name:"custom-validation",control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}},description:"Se la validazione del campo è fatta esternamente (lato server o con plugin js - validazione custom), impostare questo attributo a `true`."},validityMessage:{name:"validity-message",control:"text",description:"Messaggio da mostrare quando il campo è invalido nel caso di validazione esterna (validazione custom). Se impostato a '' (stringa vuota) il campo viene considerato valido."},required:{control:"boolean",type:"boolean",table:{defaultValue:{summary:"false"}}},inline:{control:"boolean",type:"boolean",description:"Se si vogliono mostrare più checkbox affiancate orizzontalmente",table:{defaultValue:{summary:"false"}}},group:{control:"boolean",type:"boolean",description:"Se si vogliono mostrare più checkbox raggruppate visivamente",table:{defaultValue:{summary:"false"}}},supportText:{name:"support-text",control:"text",description:"Testo di supporto"}},parameters:{docs:{description:{component:`
<Description>Casella di controllo accessibile e responsiva, che consente all'utente di attivare o disattivare un'opzione.</Description>


<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Tutti gli attributi \`it-aria-*\` passati a \`<it-checkbox>\` vengono applicati all'input generato.
</p></div></div>
`}}}},r={...n,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>a`${o({...e})} `},l={...n,args:{disabled:!0},parameters:{docs:{description:{story:"\nPer disabilitare i checkbox, aggiungi l'attributo `disabled` al componente `<it-checkbox>`.\n"}}},render:e=>a`
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      ${o({...e,label:"Checkbox non selezionato",className:"mb-2"})}
      ${o({...e,label:"Checkbox selezionato",checked:!0})}
    </fieldset>
  `},s={...n,name:"Indeterminato (mixed)",args:{indeterminate:!0},parameters:{docs:{description:{story:"\nPer ottenere lo stato indeterminato di una checkbox, aggiungi l'attributo `indeterminate` al componente `<it-checkbox>`.\n"}}},render:e=>a`
    ${o({...e,label:"Checkbox indeterminato"})}
  `},c={...n,args:{inline:!0},argTypes:{...Object.fromEntries(Object.entries(n.argTypes).map(([e,i])=>e!=="inline"?[e,{...i,table:{...i.table,disable:!0}}]:[e,{...i}]))},parameters:{docs:{description:{story:"\nPer allineare orizzontalmente le checkbox, aggiungi l'attributo `inline` a `<it-checkbox>`.\n"}}},render:e=>a`
    <fieldset>
      <legend>Gruppo di checkbox</legend>
      ${o({...e,label:"Checkbox non selezionato"})}
      ${o({...e,label:"Checkbox selezionato",checked:!0})}
    </fieldset>
  `},d={...n,name:"Gruppo di checkbox",args:{group:!0},parameters:{docs:{description:{story:"\nPer creare un gruppo di checkbox allineati in colonna, occorre aggiungere l'attributo `group` al componente `<it-checkbox>`. L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale.\n\nIn questi casi, se tutti gli elementi `<it-checkbox>` hanno lo stesso attributo `name`, al submit della form via js, il modo corretto per estrarre il valore è:\n\n```js\n  const formData = new FormData(document.getElementById('form'));\nformData.getAll(field_name) // dove `field_name` è il valore dell'attributo `[name]`\n```\n"}}},render:e=>a`
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
  `},p={...n,name:"Testo di supporto",args:{supportText:"Testo descrittivo di supporto per l'opzione selezionabile"},parameters:{docs:{description:{story:'\nPer mostrare un testo di supporto alla checkbox, aggiungi l\'attributo `supportText="Testo di supporto"` a `<it-checkbox>`.\n'}}},render:e=>a`
    ${o({...e,label:"Checkbox con testo di supporto selezionato"})}
  `},m={...q({componentName:"it-checkbox",otherMethods:"|`click()`| Triggera l'evento di click sull'input reale | - |"}),tags:["!dev"]};var b,g,h;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
  render: params => html\`\${renderComponent({
    ...params
  })} \`
}`,...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var x,k,v;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  ...meta,
  // name: 'Disabilitato',
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Per disabilitare i checkbox, aggiungi l'attributo \\\`disabled\\\` al componente \\\`<it-checkbox>\\\`.
\`
      }
    }
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
}`,...(v=(k=l.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var f,z,C;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...meta,
  name: 'Indeterminato (mixed)',
  args: {
    indeterminate: true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Per ottenere lo stato indeterminato di una checkbox, aggiungi l'attributo \\\`indeterminate\\\` al componente \\\`<it-checkbox>\\\`.
\`
      }
    }
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Checkbox indeterminato'
  })}
  \`
}`,...(C=(z=s.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var $,y,T;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
  parameters: {
    docs: {
      description: {
        story: \`
Per allineare orizzontalmente le checkbox, aggiungi l'attributo \\\`inline\\\` a \\\`<it-checkbox>\\\`.
\`
      }
    }
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
}`,...(T=(y=c.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,P,I;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...meta,
  name: 'Gruppo di checkbox',
  args: {
    group: true
  },
  parameters: {
    docs: {
      description: {
        story: \`
Per creare un gruppo di checkbox allineati in colonna, occorre aggiungere l'attributo \\\`group\\\` al componente \\\`<it-checkbox>\\\`. L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale.

In questi casi, se tutti gli elementi \\\`<it-checkbox>\\\` hanno lo stesso attributo \\\`name\\\`, al submit della form via js, il modo corretto per estrarre il valore è:

\\\`\\\`\\\`js
  const formData = new FormData(document.getElementById('form'));
formData.getAll(field_name) // dove \\\`field_name\\\` è il valore dell'attributo \\\`[name]\\\`
\\\`\\\`\\\`
\`
      }
    }
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
}`,...(I=(P=d.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var D,E,G;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...meta,
  name: 'Testo di supporto',
  args: {
    supportText: "Testo descrittivo di supporto per l'opzione selezionabile"
  },
  parameters: {
    docs: {
      description: {
        story: \`
Per mostrare un testo di supporto alla checkbox, aggiungi l'attributo \\\`supportText="Testo di supporto"\\\` a \\\`<it-checkbox>\\\`.
\`
      }
    }
  },
  render: params => html\`
    \${renderComponent({
    ...params,
    label: 'Checkbox con testo di supporto selezionato'
  })}
  \`
}`,...(G=(E=p.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var V,M,j;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...StoryFormControlMethodAndProps({
    componentName: 'it-checkbox',
    otherMethods: \`|\\\`click()\\\`| Triggera l'evento di click sull'input reale | - |\`
  }),
  tags: ['!dev']
}`,...(j=(M=m.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};const F=["EsempioInterattivo","Disabilitato","Indeterminate","Inline","Group","SupportText","MetodiEPropPubblici"];export{l as Disabilitato,r as EsempioInterattivo,d as Group,s as Indeterminate,c as Inline,m as MetodiEPropPubblici,p as SupportText,F as __namedExportsOrder,n as default};
