import{j as e,M as c,C as n,a as l,D as d}from"./blocks-CXb0FRvx.js";import{useMDXComponents as s}from"./index-AeOFCnZs.js";import{S as h,E as a,D as x,I as p,a as m,G as u,b as j,M as t}from"./it-checkbox.stories-CaUBgMgC.js";import"./preload-helper-Dp1pzeXC.js";import"./iframe-Dlb5fj8U.js";import"./formControlReusableStories-BoRnK5eb.js";import"./form-control-BvnJyQCb.js";function r(o){const i={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...s(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(c,{of:h}),`
`,e.jsx(i.h1,{id:"checkbox",children:"Checkbox"}),`
`,e.jsx("description",{children:"Casella di controllo accessibile e responsiva, che consente all'utente di attivare o disattivare un'opzione."}),`
`,e.jsx(i.h2,{id:"cosa-fa",children:"Cosa fa"}),`
`,e.jsx(i.p,{children:"Il componente checkbox consente all’utente di selezionare o deselezionare una o più opzioni da un elenco di scelte predefinite."}),`
`,e.jsx(i.p,{children:e.jsx(i.a,{href:"https://designers.italia.it/design-system/componenti/checkbox/",rel:"nofollow",children:"Approfondisci come e quando usare il componente Checkbox"})}),`
`,e.jsx(i.h2,{id:"anteprima-e-attributi-del-componente",children:"Anteprima e attributi del componente"}),`
`,e.jsxs(i.p,{children:["Modifica gli attributi nella tabella per personalizzare in tempo reale l'aspetto e il comportamento del componente. Per vedere come cambia il codice, clicca su ",e.jsx(i.strong,{children:"Show code"}),"."]}),`
`,e.jsx(n,{of:a}),`
`,e.jsx(l,{of:a}),`
`,e.jsx(i.h2,{id:"accessibilità",children:"Accessibilità"}),`
`,e.jsxs(i.p,{children:["Tutti gli attributi ",e.jsx(i.code,{children:"it-aria-*"})," passati a ",e.jsx(i.code,{children:"<it-checkbox>"})," vengono applicati all'input generato."]}),`
`,e.jsx(i.h2,{id:"stato-disabilitato",children:"Stato disabilitato"}),`
`,e.jsxs(i.p,{children:["Per disabilitare una checkbox, aggiungi l'attributo ",e.jsx(i.code,{children:"disabled"})," al componente ",e.jsx(i.code,{children:"<it-checkbox>"}),"."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(i.h2,{id:"stato-indeterminato-mixed",children:"Stato indeterminato (mixed)"}),`
`,e.jsxs(i.p,{children:["Per ottenere lo stato indeterminato di una checkbox, aggiungi l'attributo ",e.jsx(i.code,{children:"indeterminate"})," al componente ",e.jsx(i.code,{children:"<it-checkbox>"}),"."]}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(i.h2,{id:"inline",children:"Inline"}),`
`,e.jsxs(i.p,{children:["Per allineare orizzontalmente le checkbox, aggiungi l'attributo ",e.jsx(i.code,{children:"inline"})," a ",e.jsx(i.code,{children:"<it-checkbox>"}),"."]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(i.h2,{id:"gruppo-di-checkbox",children:"Gruppo di checkbox"}),`
`,e.jsxs(i.p,{children:["Per creare un gruppo di checkbox allineati in colonna, occorre aggiungere l'attributo ",e.jsx(i.code,{children:"group"})," al componente ",e.jsx(i.code,{children:"<it-checkbox>"}),". L’elemento grafico di spunta verrà allineato alla destra del contenuto testuale."]}),`
`,e.jsxs(i.p,{children:["In questi casi, se tutti gli elementi ",e.jsx(i.code,{children:"<it-checkbox>"})," hanno lo stesso attributo ",e.jsx(i.code,{children:"name"}),", al submit della form via js, il modo corretto per estrarre il valore è:"]}),`
`,e.jsx(i.pre,{children:e.jsx(i.code,{className:"language-js",children:"const formData = new FormData(document.getElementById('form'));\nformData.getAll(field_name) // dove `field_name` è il valore dell'attributo `[name]`\n"})}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(i.h2,{id:"testo-di-supporto",children:"Testo di supporto"}),`
`,e.jsxs(i.p,{children:["Per mostrare un testo di supporto alla checkbox, aggiungi l'attributo ",e.jsx(i.code,{children:'supportText="Testo di supporto"'})," a ",e.jsx(i.code,{children:"<it-checkbox>"}),"."]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(i.h2,{id:"",children:t.name}),`
`,e.jsx(d,{of:t}),`
`,e.jsx(n,{of:t})]})}function M(o={}){const{wrapper:i}={...s(),...o.components};return i?e.jsx(i,{...o,children:e.jsx(r,{...o})}):r(o)}export{M as default};
