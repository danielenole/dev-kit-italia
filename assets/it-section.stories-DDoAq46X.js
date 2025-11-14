import{x as i,E as l,o as C}from"./iframe-C4eBJZ64.js";import"./preload-helper-Dp1pzeXC.js";const I=["muted","emphasis","primary"],P=i`
  <!-- contenuto di esempio START -->
  <div class="container">
    <div class="row mb-3">
      <div class="col-12">
        <h2 id="section-heading">Morbi fermentum amet</h2>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6 col-xl-4">
        <p>
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
      </div>
      <div class="col-12 col-lg-6 col-xl-4">
        <p>
          Eget egestas purus viverra accumsan. Diam maecenas ultricies mi eget mauris pharetra et. Etiam dignissim diam
          quis enim. Eu nisl nunc mi ipsum faucibus.
        </p>
      </div>
      <div class="col-12 col-lg-6 col-xl-4">
        <p>
          Euismod lacinia at quis risus sed vulputate. Scelerisque purus semper eget duis at tellus at urna condimentum.
          Mattis enim ut tellus elementum sagittis.
        </p>
      </div>
    </div>
  </div>
  <!-- contenuto di esempio END -->
`;function r({variant:e,image:$,content:E,inverse:V=!1}){return i`
    <it-section variant="${e||l}" image="${$||l}" ?inverse="${C(V)}">
      ${E||P}
    </it-section>
  `}const Q={title:"Componenti/Section",tags:["autodocs","a11y-ok","web-component"],component:"it-section",parameters:{docs:{description:{component:`<Description>Per creare sezioni di layout orizzontale con differenti sfondi.</Description>

Il componente \`<it-section>\` rappresenta un contenitore visivo per introdurre sezioni di contenuto con o senza immagine.

Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/sections/)


<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità (Draft)</span></div><p>
      Il titolo h2 dello snippet è solo indicativo: assicurati che il contenuto contenga un'intestazione semantica per garantire la corretta navigazione assistiva.
      <br>Il tag it-section contraddistingue una sezione semanticamente riconoscibile, associata all’id del titolo dall’attributo aria-labelledby.

      <br>Gli autori dovrebbero dividere la pagina in sezioni semantiche reali e non per solo scopo decorativo.     <br> Qualora si utilizzino sezioni al solo scopo decorativo sostituire it-section con div ed eliminare l’attributo aria-labelledby.
      <br><br>
      Le immagini fornite tramite l'attributo <code>image</code> sono considerate <strong>decorative</strong>: sono rese con un tag <code>&lt;img&gt;</code> e <code>aria-hidden="true"</code>.
      In questo modo non vengono annunciate dagli screen reader.</p><p class="pt-2">
      </p></div></div>
`}}},args:{variant:"",image:"",inverse:!1},argTypes:{variant:{control:{type:"select"},options:I,description:"Variante grafica del componente, corrisponde alle classi di Bootstrap Italia",table:{defaultValue:{summary:void 0}}},image:{control:{type:"text"},description:"URL immagine di sfondo, ad esempio https://picsum.photos/1600/500"},inverse:{control:{type:"boolean"},description:"Quando attivo, l’attributo inverse applica il colore bianco ai testi. È utile quando la sezione ha uno sfondo scuro o un’immagine di sfondo, così da garantire il corretto contrasto e la leggibilità dei contenuti.",table:{defaultValue:{summary:!1}}}}},a={name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{canvas:{sourceState:"shown"}}},render:e=>i`${r(e)}`},n={name:"Personalizzazione degli stili",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nPer la personalizzazione degli stili si può usare il selettore `::part` passando il valore `section`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).\n\nQuando si organizzano i contenuti usando le classi della griglia, non serve aggiungere spazio ai lati. Se proprio necessario, si può aggiungere spazio laterale usando la variabile `--bs-section-padding-x`.\n\nSi può usare la variabile `--bs-section-image-overlay` per regolare l'opacità dell'overlay applicato all'immagine.\n"}}},render:()=>i`<div class="hide-preview"></div>`},o={name:"Varianti di sfondo",render:()=>i`
    <div class="d-flex flex-column gap-4">
      ${["muted","emphasis","primary"].map(e=>r({variant:e,inverse:e!=="muted",content:i`
            <div class="container">
              <h3 id="section-heading-${e}">Sezione ${e}</h3>
              <p>
                Questa sezione usa la variante <code>${e}</code>
                ${e!=="muted"?"con testo bianco attraverso l'attributo inverse":""}
              </p>
            </div>
          `}))}
    </div>
  `,parameters:{docs:{description:{story:`
Sono disponibili le varianti colore di sfondo per le sezioni, corrispondenti alle classi di Bootstrap italia:

- \`muted\`
- \`emphasis\`
- \`primary\`

Il componente Section ha, per default, uno sfondo trasparente.
        `}}}},s={name:"Sezione con immagine decorativa",args:{image:"https://picsum.photos/1280/720?image=81",inverse:!0},render:e=>r({...e}),parameters:{docs:{description:{story:"\nValorizzando l'attributo `image` del componente con l’URL dell’immagine da utilizzare  la Section utilizzerà l’immagine indicata come sfondo, adattandone automaticamente le dimensioni per coprire l’intera Section.\n\nA seconda della luminosità dell’immagine si consiglia di valorizzare o meno l'attributo `inverse` per garantire il corretto contrasto fra testi e sfondo.\n        "}}}},t={name:"Sezione con card",args:{variant:"muted"},render:e=>r({...e,content:i`
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 id="section-heading-card" class="mb-4">Morbi fermentum amet</h2>
            </div>
          </div>
          <div class="row gy-3">
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      `}),parameters:{docs:{description:{story:`
Per aggiungere una serie di card all’interno di una Section si consiglia di utilizzare le griglie per garantire un corretto margine fra gli elementi .
        `}}}};var c,d,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: args => html\`\${renderSection(args)}\`
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    // assicura che si apra la tab Docs anziché Canvas
    docs: {
      canvas: {
        hidden: true,
        sourceState: 'none'
      },
      // nasconde solo il canvas nella docs page
      description: {
        story: \`
Per la personalizzazione degli stili si può usare il selettore \\\`::part\\\` passando il valore \\\`section\\\`. [Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).

Quando si organizzano i contenuti usando le classi della griglia, non serve aggiungere spazio ai lati. Se proprio necessario, si può aggiungere spazio laterale usando la variabile \\\`--bs-section-padding-x\\\`.

Si può usare la variabile \\\`--bs-section-image-overlay\\\` per regolare l'opacità dell'overlay applicato all'immagine.
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var g,z,b;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Varianti di sfondo',
  render: () => html\`
    <div class="d-flex flex-column gap-4">
      \${(['muted', 'emphasis', 'primary'] as const).map(variant => renderSection({
    variant,
    inverse: variant !== 'muted',
    content: html\`
            <div class="container">
              <h3 id="section-heading-\${variant}">Sezione \${variant}</h3>
              <p>
                Questa sezione usa la variante <code>\${variant}</code>
                \${variant !== 'muted' ? "con testo bianco attraverso l'attributo inverse" : ''}
              </p>
            </div>
          \`
  }))}
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: \`
Sono disponibili le varianti colore di sfondo per le sezioni, corrispondenti alle classi di Bootstrap italia:

- \\\`muted\\\`
- \\\`emphasis\\\`
- \\\`primary\\\`

Il componente Section ha, per default, uno sfondo trasparente.
        \`
      }
    }
  }
}`,...(b=(z=o.parameters)==null?void 0:z.docs)==null?void 0:b.source}}};var f,h,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Sezione con immagine decorativa',
  args: {
    image: 'https://picsum.photos/1280/720?image=81',
    inverse: true
  },
  render: params => renderSection({
    ...params
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Valorizzando l'attributo \\\`image\\\` del componente con l’URL dell’immagine da utilizzare  la Section utilizzerà l’immagine indicata come sfondo, adattandone automaticamente le dimensioni per coprire l’intera Section.

A seconda della luminosità dell’immagine si consiglia di valorizzare o meno l'attributo \\\`inverse\\\` per garantire il corretto contrasto fra testi e sfondo.
        \`
      }
    }
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var y,x,w;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: 'Sezione con card',
  args: {
    variant: 'muted'
  },
  render: params => renderSection({
    ...params,
    content: html\`
        <div class="container">
          <div class="row">
            <div class="col">
              <h2 id="section-heading-card" class="mb-4">Morbi fermentum amet</h2>
            </div>
          </div>
          <div class="row gy-3">
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <div class="card shadow">
                <div class="card-body">
                  <p class="card-text font-serif">
                    Dictum sit amet justo donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      \`
  }),
  parameters: {
    docs: {
      description: {
        story: \`
Per aggiungere una serie di card all’interno di una Section si consiglia di utilizzare le griglie per garantire un corretto margine fra gli elementi .
        \`
      }
    }
  }
}`,...(w=(x=t.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const A=["EsempioInterattivo","PersonalizzazioneDegliStili","VariantiColore","VarianteConImmagine","SectionConCard"];export{a as EsempioInterattivo,n as PersonalizzazioneDegliStili,t as SectionConCard,s as VarianteConImmagine,o as VariantiColore,A as __namedExportsOrder,Q as default};
