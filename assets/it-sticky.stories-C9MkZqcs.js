import{o as e,E as l,x as _}from"./iframe-Dlb5fj8U.js";import"./preload-helper-Dp1pzeXC.js";function T({stackable:r,paddingTop:w,stickyClassName:M,positionType:I}){return _`
    <it-sticky
      ?stackable=${e(r)}
      padding-top=${e(w||l)}
      sticky-class-name=${e(M||l)}
      position-type=${e(I||l)}
    >
      <div class="bg-primary text-white p-3">Elemento Sticky</div>
    </it-sticky>
  `}const O={title:"Componenti/Sticky",component:"it-sticky",tags:["autodocs","new","a11y-ok","web-component"],args:{stackable:!1,paddingTop:0,stickyClassName:void 0,positionType:void 0},parameters:{docs:{description:{component:`<Description>Rende un elemento della pagina costantemente visibile allo scorrere della pagina.</Description>
Talvolta è necessario che uno o più elementi della pagina restino sempre visibili anche quando essa viene fatta scorrere. Questo comportamento viene comunemente definito “sticky”.
<br>


Il componente <code>&lt;it-sticky&gt;</code> consente di mantenere visibile un elemento della pagina durante lo scroll, applicando automaticamente il comportamento “sticky”.
<br>
Per utilizzarlo, basta racchiudere il contenuto da fissare all’interno del tag <code>&lt;it-sticky&gt;</code>.
Il componente gestisce in autonomia anche casi avanzati, come elementi impilabili o con padding e classi personalizzate, attraverso specifiche proprietà.
<br>

È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--single-sticky&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
`}}},argTypes:{stackable:{control:"boolean",description:"Attiva/disattiva la possibilità di rendere l'elemento impilabile su altri elementi sticky presenti in pagina",table:{defaultValue:{summary:!1}}},paddingTop:{control:"number",description:"Indica la distanza dall'elemento in sticky dal margine superiore",table:{defaultValue:{summary:0}}},stickyClassName:{control:"text",description:"Classi CSS da applicare all'elemento quando viene attivata la funzionalità sticky",table:{defaultValue:{summary:""}}},positionType:{control:{type:"select"},options:["sticky","fixed"],description:"Indica il valore della proprietà CSS `position`. I valori ammessi sono `sticky` o `fixed`",table:{defaultValue:{summary:"sticky"}}}},render:r=>T(r)},i={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}}},t={name:"Offset",args:{paddingTop:50},parameters:{docs:{description:{story:`
Impostando la proprietà <code>padding-top</code>, è possibile definire un offset in pixel tra l’elemento e il margine superiore.
È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--padded-sticky&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
        `}}}},a={name:"Position fixed",parameters:{docs:{description:{story:`
Il componente assegna all’elemento la proprietà CSS \`position\` con valore \`sticky\` di default.<br>
In alcuni casi, questo valore può causare problemi di posizionamento, specialmente se l’elemento cambia altezza quando diventa sticky.
Per questi scenari, è possibile forzare il valore \`fixed\` tramite l’attributo <code>position-type="fixed"</code>.
<br>

È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--fixed-sticky&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
        `},source:{code:`<it-sticky position-type="fixed">
  <div class="bg-primary text-white p-3">Elemento Sticky</div>
</it-sticky>`}}}},o={name:"Classi personalizzate",args:{stickyClassName:"bg-light text-black"},parameters:{docs:{description:{story:`
Per personalizzare lo stile dell’elemento quando è sticky o fixed, puoi usare la proprietà <code>sticky-class-name</code>:
tutte le classi CSS che inserisci in questo attributo verranno aggiunte all’elemento quando diventa sticky e rimosse quando torna normale.

È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--fixed-stick-classnamey&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
        `}}}},n={name:"Versione impilabile",args:{stackable:!0,paddingTop:0,stickyClassName:""},parameters:{docs:{description:{story:`
Se sono presenti più componenti sticky nella pagina, è possibile fare in modo che si impilino l’uno sull’altro utilizzando l’attributo <code>stackable</code>.

È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--stackable-sticky&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
<br> Un'altra <a href="iframe.html?globals=&id=esempi-sticky--stackable-sticky-resize&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> mostra invece il comportamento con media query e breakpoint.
        `}}}},s={name:"Eventi Custom",parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:`
Il componente <code>it-sticky</code> emette eventi custom per notificare quando un elemento diventa sticky o smette di esserlo:

- <strong>it-sticky-on</strong>: Emesso quando l'elemento diventa sticky
- <strong>it-sticky-off</strong>: Emesso quando l'elemento smette di essere sticky

##### Proprietà degli eventi:

Entrambi gli eventi hanno le seguenti proprietà:
- <code>bubbles: true</code> - L'evento si propaga attraverso il DOM
- <code>composed: true</code> - L'evento attraversa i confini del Shadow DOM
- <code>cancelable: true</code> - L'evento può essere cancellato
- <code>detail: { id: string }</code> - Contiene l'ID dell'elemento sticky

##### Esempio di utilizzo:

\`\`\`javascript
const stickyElement = document.querySelector('it-sticky');

// Ascolta quando diventa sticky
stickyElement.addEventListener('it-sticky-on', (event) => {
  console.log('Elemento diventato sticky:', event.detail.id);
  // Aggiungi logica personalizzata
});

// Ascolta quando smette di essere sticky
stickyElement.addEventListener('it-sticky-off', (event) => {
  console.log('Elemento non più sticky:', event.detail.id);
  // Aggiungi logica personalizzata
});
\`\`\`

\`\`\`
        `}}}};var c,d,p;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  }
}`,...(p=(d=i.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,y;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Offset',
  args: {
    paddingTop: 50
  },
  parameters: {
    docs: {
      description: {
        story: \`
Impostando la proprietà <code>padding-top</code>, è possibile definire un offset in pixel tra l’elemento e il margine superiore.
È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--padded-sticky&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
        \`
      }
    }
  }
}`,...(y=(u=t.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,k,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Position fixed',
  parameters: {
    docs: {
      description: {
        story: \`
Il componente assegna all’elemento la proprietà CSS \\\`position\\\` con valore \\\`sticky\\\` di default.<br>
In alcuni casi, questo valore può causare problemi di posizionamento, specialmente se l’elemento cambia altezza quando diventa sticky.
Per questi scenari, è possibile forzare il valore \\\`fixed\\\` tramite l’attributo <code>position-type="fixed"</code>.
<br>

È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--fixed-sticky&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
        \`
      },
      source: {
        code: \`<it-sticky position-type="fixed">
  <div class="bg-primary text-white p-3">Elemento Sticky</div>
</it-sticky>\`
      }
    }
  }
}`,...(b=(k=a.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var f,v,z;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Classi personalizzate',
  args: {
    stickyClassName: 'bg-light text-black'
  },
  parameters: {
    docs: {
      description: {
        story: \`
Per personalizzare lo stile dell’elemento quando è sticky o fixed, puoi usare la proprietà <code>sticky-class-name</code>:
tutte le classi CSS che inserisci in questo attributo verranno aggiunte all’elemento quando diventa sticky e rimosse quando torna normale.

È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--fixed-stick-classnamey&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
        \`
      }
    }
  }
}`,...(z=(v=o.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var h,q,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Versione impilabile',
  args: {
    stackable: true,
    paddingTop: 0,
    stickyClassName: ''
  },
  parameters: {
    docs: {
      description: {
        story: \`
Se sono presenti più componenti sticky nella pagina, è possibile fare in modo che si impilino l’uno sull’altro utilizzando l’attributo <code>stackable</code>.

È disponibile una <a href="iframe.html?globals=&id=esempi-sticky--stackable-sticky&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> dedicata a questa funzionalità per comprenderne appieno significato ed utilizzo.
<br> Un'altra <a href="iframe.html?globals=&id=esempi-sticky--stackable-sticky-resize&viewMode=story" target="_blank" rel="noopener">
  pagina di esempio
</a> mostra invece il comportamento con media query e breakpoint.
        \`
      }
    }
  }
}`,...(S=(q=n.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var E,x,C;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Eventi Custom',
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: {
        hidden: true,
        sourceState: 'none'
      },
      description: {
        story: \`
Il componente <code>it-sticky</code> emette eventi custom per notificare quando un elemento diventa sticky o smette di esserlo:

- <strong>it-sticky-on</strong>: Emesso quando l'elemento diventa sticky
- <strong>it-sticky-off</strong>: Emesso quando l'elemento smette di essere sticky

##### Proprietà degli eventi:

Entrambi gli eventi hanno le seguenti proprietà:
- <code>bubbles: true</code> - L'evento si propaga attraverso il DOM
- <code>composed: true</code> - L'evento attraversa i confini del Shadow DOM
- <code>cancelable: true</code> - L'evento può essere cancellato
- <code>detail: { id: string }</code> - Contiene l'ID dell'elemento sticky

##### Esempio di utilizzo:

\\\`\\\`\\\`javascript
const stickyElement = document.querySelector('it-sticky');

// Ascolta quando diventa sticky
stickyElement.addEventListener('it-sticky-on', (event) => {
  console.log('Elemento diventato sticky:', event.detail.id);
  // Aggiungi logica personalizzata
});

// Ascolta quando smette di essere sticky
stickyElement.addEventListener('it-sticky-off', (event) => {
  console.log('Elemento non più sticky:', event.detail.id);
  // Aggiungi logica personalizzata
});
\\\`\\\`\\\`

\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const P=["Base","TopOffset","Fixed","CustomClass","Stackable","CustomEvents"];export{i as Base,o as CustomClass,s as CustomEvents,a as Fixed,n as Stackable,t as TopOffset,P as __namedExportsOrder,O as default};
