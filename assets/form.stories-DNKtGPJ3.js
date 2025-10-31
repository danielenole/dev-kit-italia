import{x as e}from"./iframe-CXDqws0b.js";import"./preload-helper-Dp1pzeXC.js";var u=Object.freeze,U=Object.defineProperty,Z=(c,N)=>u(U(c,"raw",{value:u(N||c.slice())})),p;const i={title:"Componenti/Form",tags:["autodocs"],parameters:{docs:{description:{component:`
Per indicazioni su "Come e Quando usarlo" si fa riferimento alla [guida del design-system](https://designers.italia.it/design-system/componenti/form/).
`}}}},t={name:"Elementi e stili per la creazione di form accessibili e responsivi.",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nNella visualizzazione predefinita di un form gli elementi sono distribuiti verticalmente, ma è possibile utilizzare classi aggiuntive per variare questo tipo di layout.\n\nBootstrap Italia applica automaticamente a tutti i form `display: block` e `width: 100%`.\n"}}},render:()=>e`<div class="hide-preview"></div>`},a={...i,name:"Dimensionamento delle colonne",render:()=>e` <form>
      <div class="row">
        <it-input class="col-md-6" label="Nome" id="nome"></it-input>
        <it-input class="col-md-6" label="Cognome" id="cognome"></it-input>
      </div>
      <div class="row">
        <it-input class="col" label="Indirizzo" id="indirizzo"></it-input>
      </div>
      <div class="row">
        <it-input class="col-md-6" label="Comune" id="comune"></it-input>
        <it-input class="col-md" label="Provincia" id="provincia"></it-input>
        <it-input class="col-md" label="CAP" id="cap"></it-input>
      </div>
      <div class="row">
        <it-input class="col-md-6" label="E-mail" id="email" type="email"></it-input>
        <it-input class="col-md-6" label="Password" id="password" type="password"></it-input>
      </div>
      <div class="row mt-4">
        <div class="form-group col text-center">
          <it-button type="button" variant="primary" outline>Annulla</it-button>
          <it-button type="submit" variant="primary">Conferma</button>
        </div>
      </div>
    </form>`},n={...i,name:"Auto-dimensionamento",parameters:{docs:{description:{story:"\nL’esempio seguente usa una delle [utilità di flexbox](https://italia.github.io/bootstrap-italia/docs/organizzare-gli-spazi/flex/) per centrare verticalmente dal breakpoint `lg` in su il contenuto e cambiando `.col` con `.col-auto` in modo che le colonne occupino solo lo spazio necessario.\nIn altre parole, la colonna si dimensiona in base al contenuto.\n\nÈ possibile usarlo anche quando sono presenti altre colonne con dimensioni specifiche (es.: `col-sm-3`)."}}},render:()=>e` <form>
      <div class="row align-itmes-center">
        <it-input class="col-md-6 col-lg-auto" label="Nome" id="nome" label-hidden placeholder="Nome e cognome"></it-input>
        <it-input class="col-md-6 col-lg-auto" label="Username" id="username" label-hidden placeholder="username"><span slot="icon">@</span></it-input>
        <div class="col-6 col-md-3 col-lg-auto d-flex justify-content-end">
          <it-button type="submit" variant="primary">Invia</button>
        </div>

    </form>`},o={...i,name:"Disabilitazione di campi",parameters:{docs:{description:{story:"\nAggiungi l’attributo booleano `disabled` su un widget per impedire le interazioni dell’utente e renderlo più chiaro."}}},render:()=>e` <form>
      <it-input
        label="Esempio input disabilitato"
        id="nome"
        label-hidden
        placeholder="Esempio input disabilitato"
        disabled
      ></it-input>
    </form>`},s={...i,name:"Disabilitazione di un intero form o gruppo di campi",parameters:{docs:{description:{story:"\nAggiungi l’attributo booleano `disabled` al `fieldset` e, poichè il browser non è in grado di propagare in autonomia lo stato disabilitato agli elementi contenuti nel `fieldset`, devi propagare tu l'attributo `disabled` (o `aria-disabled` per i bottoni) su tutti gli elementi in esso contenuti.\n\nPuoi gestirlo anche via JS, in questo modo:\n\n```js\nif (fieldset.disabled) {\n  myInput.disabled = true;\n}\n```\n\n"}}},render:()=>e` <form>
      <fieldset disabled aria-label="Form disabilitato">
        <div class="row">
          <it-input disabled class="col-md-6" label="Nome" id="nome" placeholder="input disabilitato"></it-input>
          <it-input disabled class="col-md-6" label="Cognome" id="cognome" placeholder="input disabilitato"></it-input>
        </div>
        <div class="row>
          <div class="col">
           <it-button aria-disabled type="submit" id="submit" variant="primary">Pulsante disabilitato</button>
          </div>
        </div>
      </fieldset>
    </form>`},l={...i,parameters:{docs:{description:{story:'\nDi base, i componenti che implementano widget utilizzabili nelle form, come ad esempio `<it-input>`, forniscono la validazione standard del browser a seconda del tipo di campo e/o degli attributi `minlength`, `maxlength`, `pattern` e `required`.\n\n#### Validazione custom\n\nIn alternativa, è possibile eseguire una propria validazione (lato server, o con js), impostando l\' attributo `custom-validation="true"`. In questo modo la validazione di default effettuata internamente al componente è disabilitata.\n\nNel caso il campo non sia valido, è necessario invalidare il campo impostando il messaggio di errore da visualizzare attraverso l\'attributo `validity-message="Messaggio di errore"`.\n'}}},render:()=>e` <form action="/prova">
      <div class="row">
        <it-input
          class="col-md-6"
          label="Email"
          id="email"
          type="email"
          placeholder="Validazione di default"
        ></it-input>
        <it-input
          class="col-md-6"
          label="Username"
          id="username"
          custom-validation
          validity-message="Username obbligatorio"
          required
          placeholder="Validazione custom"
        ></it-input>
      </div>
    </form>`},r={...i,name:"Validazione via JS",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:`
È possibile implementare una propria validazione via JS, intercettando gli eventi emessi dai componenti:

\`\`\`js
 window.addEventListener('DOMContentLoaded', () => {
      const form = document.querySelector('#form');
      const all_input = form.querySelectorAll('it-input');

      // evento scatenato quando il web-component ha effettutato il primo render, e l'input è disonibile nel DOM
      all_input.forEach(input=>{
        input.addEventListener('it-input-ready', (event) => {
          const input = event.detail.el;
          // il tuo codice qui.
        });
      });

      // evento scatenato quando l'input riceve l'evento di 'it-input' (ad esempio, durante l'inserimento di testo da parte dell'utente)
      all_input.forEach(i=>{
        i.addEventListener('it-input', (event) => {
          const input = event.detail.el;
          // il tuo codice qui.
        });
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // il tuo codice qui.
      });
    });
\`\`\`
`}}},render:()=>e`<div class="hide-preview"></div>`},d={...i,name:"Esempio di validazione via JS con plugin JustValidate",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:`
Ecco qui un esempio di implementazione della validazione con il plugin [JustValidate](https://just-validate.dev/).
`}}},render:()=>e(p||(p=Z([`<script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"><\/script>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          const formEl = document.querySelector('#form-validation-example');

          // Inizializziamo JustValidate senza selettore, passando il form element
          const validate = new JustValidate(formEl);

          // Funzione helper per leggere valore da <it-input>
          const getItInputValue = (selector) => {
            const el = formEl.querySelector(selector);
            return el?.value || ''; // .value dovrebbe essere esposto dal tuo componente
          };

          // Aggiungiamo regole
          validate
            .addField('it-input[id="email"]', [
              {
                rule: 'required',
                errorMessage: 'Email obbligatoria',
              },
              {
                validator: () => {
                  const value = getItInputValue('it-input[id="email"]');
                  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(value);
                },
                errorMessage: 'Formato email non valido',
              },
            ])
            .addField('it-input[id="messaggio"]', [
              {
                validator: () => {
                  const value = getItInputValue('it-input[id="messaggio"]');
                  return value.length > 10;
                },
                errorMessage: 'Inserire almeno 10 caratteri',
              },
            ]);

          validate.onValidate((props) => {
            const { fields } = props;

            // Rimuovi TUTTI i messaggi creati da JustValidate (questi sono quelli prima del bottone submit)
            document.querySelectorAll('.just-validate-error-label').forEach((el) => el.remove());
            // aggiorna il Web Component
            Object.keys(fields).forEach((k) => {
              const f = fields[k];
              const wc = f.elem;
              if (wc) {
                wc.validationText = f.isValid ? '' : f.errorMessage;
              }
            });
          });

          formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validate.isValid) {
              console.log('Form valido!');
              // gestire qui il submit della form
              // fetch('/submit', { method: 'POST', body: ... })
            }
          });
          // oppure
          // validate.onSuccess(( event ) => {
          //  submit della form
          //   event.currentTarget.submit();
          // });
        });
      <\/script>

      <form id="form-validation-example">
        <it-input id="nome" name="nome" label="Nome"></it-input>
        <it-input id="cognome" name="cognome" label="Cogome"></it-input>
        <it-input id="email" name="email" label="E-mail" type="email" support-text="Inserisci la tua email"
          custom-validation></it-input>
        <it-input id="messaggio" name="messaggio" label="Messaggio" type="textarea"
          support-text="Inserisci il tuo messaggio" custom-validation></it-input>
        <!-- <it-input id="password"  label="Password" type="password" minlength="10" suggestions strength-meter></it-input> -->
        <it-button type="submit" variant="primary" block>Invia</it-button></form>
      </form>`],[`<script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"><\/script>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          const formEl = document.querySelector('#form-validation-example');

          // Inizializziamo JustValidate senza selettore, passando il form element
          const validate = new JustValidate(formEl);

          // Funzione helper per leggere valore da <it-input>
          const getItInputValue = (selector) => {
            const el = formEl.querySelector(selector);
            return el?.value || ''; // .value dovrebbe essere esposto dal tuo componente
          };

          // Aggiungiamo regole
          validate
            .addField('it-input[id="email"]', [
              {
                rule: 'required',
                errorMessage: 'Email obbligatoria',
              },
              {
                validator: () => {
                  const value = getItInputValue('it-input[id="email"]');
                  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(value);
                },
                errorMessage: 'Formato email non valido',
              },
            ])
            .addField('it-input[id="messaggio"]', [
              {
                validator: () => {
                  const value = getItInputValue('it-input[id="messaggio"]');
                  return value.length > 10;
                },
                errorMessage: 'Inserire almeno 10 caratteri',
              },
            ]);

          validate.onValidate((props) => {
            const { fields } = props;

            // Rimuovi TUTTI i messaggi creati da JustValidate (questi sono quelli prima del bottone submit)
            document.querySelectorAll('.just-validate-error-label').forEach((el) => el.remove());
            // aggiorna il Web Component
            Object.keys(fields).forEach((k) => {
              const f = fields[k];
              const wc = f.elem;
              if (wc) {
                wc.validationText = f.isValid ? '' : f.errorMessage;
              }
            });
          });

          formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validate.isValid) {
              console.log('Form valido!');
              // gestire qui il submit della form
              // fetch('/submit', { method: 'POST', body: ... })
            }
          });
          // oppure
          // validate.onSuccess(( event ) => {
          //  submit della form
          //   event.currentTarget.submit();
          // });
        });
      <\/script>

      <form id="form-validation-example">
        <it-input id="nome" name="nome" label="Nome"></it-input>
        <it-input id="cognome" name="cognome" label="Cogome"></it-input>
        <it-input id="email" name="email" label="E-mail" type="email" support-text="Inserisci la tua email"
          custom-validation></it-input>
        <it-input id="messaggio" name="messaggio" label="Messaggio" type="textarea"
          support-text="Inserisci il tuo messaggio" custom-validation></it-input>
        <!-- <it-input id="password"  label="Password" type="password" minlength="10" suggestions strength-meter></it-input> -->
        <it-button type="submit" variant="primary" block>Invia</it-button></form>
      </form>`])))},m={name:"Tipologie di campi",tags:["!dev"],parameters:{viewMode:"docs",docs:{canvas:{hidden:!0,sourceState:"none"},description:{story:"\nI singoli campi di tipo `<it-input>`, `<it-checkbox>`, `<it-radio>`, `<it-toggle>`, ecc. sono trattati in pagine separate della documentazione.\n"}}},render:()=>e`<div class="hide-preview"></div>`};var v,g,b;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Elementi e stili per la creazione di form accessibili e responsivi.',
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
Nella visualizzazione predefinita di un form gli elementi sono distribuiti verticalmente, ma è possibile utilizzare classi aggiuntive per variare questo tipo di layout.

Bootstrap Italia applica automaticamente a tutti i form \\\`display: block\\\` e \\\`width: 100%\\\`.
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,h,z;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  ...meta,
  name: 'Dimensionamento delle colonne',
  render: () => html\` <form>
      <div class="row">
        <it-input class="col-md-6" label="Nome" id="nome"></it-input>
        <it-input class="col-md-6" label="Cognome" id="cognome"></it-input>
      </div>
      <div class="row">
        <it-input class="col" label="Indirizzo" id="indirizzo"></it-input>
      </div>
      <div class="row">
        <it-input class="col-md-6" label="Comune" id="comune"></it-input>
        <it-input class="col-md" label="Provincia" id="provincia"></it-input>
        <it-input class="col-md" label="CAP" id="cap"></it-input>
      </div>
      <div class="row">
        <it-input class="col-md-6" label="E-mail" id="email" type="email"></it-input>
        <it-input class="col-md-6" label="Password" id="password" type="password"></it-input>
      </div>
      <div class="row mt-4">
        <div class="form-group col text-center">
          <it-button type="button" variant="primary" outline>Annulla</it-button>
          <it-button type="submit" variant="primary">Conferma</button>
        </div>
      </div>
    </form>\`
}`,...(z=(h=a.parameters)==null?void 0:h.docs)==null?void 0:z.source}}};var y,w,E;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...meta,
  name: 'Auto-dimensionamento',
  parameters: {
    docs: {
      description: {
        story: \`
L’esempio seguente usa una delle [utilità di flexbox](https://italia.github.io/bootstrap-italia/docs/organizzare-gli-spazi/flex/) per centrare verticalmente dal breakpoint \\\`lg\\\` in su il contenuto e cambiando \\\`.col\\\` con \\\`.col-auto\\\` in modo che le colonne occupino solo lo spazio necessario.
In altre parole, la colonna si dimensiona in base al contenuto.

È possibile usarlo anche quando sono presenti altre colonne con dimensioni specifiche (es.: \\\`col-sm-3\\\`).\`
      }
    }
  },
  render: () => html\` <form>
      <div class="row align-itmes-center">
        <it-input class="col-md-6 col-lg-auto" label="Nome" id="nome" label-hidden placeholder="Nome e cognome"></it-input>
        <it-input class="col-md-6 col-lg-auto" label="Username" id="username" label-hidden placeholder="username"><span slot="icon">@</span></it-input>
        <div class="col-6 col-md-3 col-lg-auto d-flex justify-content-end">
          <it-button type="submit" variant="primary">Invia</button>
        </div>

    </form>\`
}`,...(E=(w=n.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var I,S,q;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  ...meta,
  name: 'Disabilitazione di campi',
  parameters: {
    docs: {
      description: {
        story: \`
Aggiungi l’attributo booleano \\\`disabled\\\` su un widget per impedire le interazioni dell’utente e renderlo più chiaro.\`
      }
    }
  },
  render: () => html\` <form>
      <it-input
        label="Esempio input disabilitato"
        id="nome"
        label-hidden
        placeholder="Esempio input disabilitato"
        disabled
      ></it-input>
    </form>\`
}`,...(q=(S=o.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var V,x,C;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...meta,
  name: 'Disabilitazione di un intero form o gruppo di campi',
  parameters: {
    docs: {
      description: {
        story: \`
Aggiungi l’attributo booleano \\\`disabled\\\` al \\\`fieldset\\\` e, poichè il browser non è in grado di propagare in autonomia lo stato disabilitato agli elementi contenuti nel \\\`fieldset\\\`, devi propagare tu l'attributo \\\`disabled\\\` (o \\\`aria-disabled\\\` per i bottoni) su tutti gli elementi in esso contenuti.

Puoi gestirlo anche via JS, in questo modo:

\\\`\\\`\\\`js
if (fieldset.disabled) {
  myInput.disabled = true;
}
\\\`\\\`\\\`

\`
      }
    }
  },
  render: () => html\` <form>
      <fieldset disabled aria-label="Form disabilitato">
        <div class="row">
          <it-input disabled class="col-md-6" label="Nome" id="nome" placeholder="input disabilitato"></it-input>
          <it-input disabled class="col-md-6" label="Cognome" id="cognome" placeholder="input disabilitato"></it-input>
        </div>
        <div class="row>
          <div class="col">
           <it-button aria-disabled type="submit" id="submit" variant="primary">Pulsante disabilitato</button>
          </div>
        </div>
      </fieldset>
    </form>\`
}`,...(C=(x=s.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var M,D,A;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  ...meta,
  parameters: {
    docs: {
      description: {
        story: \`
Di base, i componenti che implementano widget utilizzabili nelle form, come ad esempio \\\`<it-input>\\\`, forniscono la validazione standard del browser a seconda del tipo di campo e/o degli attributi \\\`minlength\\\`, \\\`maxlength\\\`, \\\`pattern\\\` e \\\`required\\\`.

#### Validazione custom

In alternativa, è possibile eseguire una propria validazione (lato server, o con js), impostando l' attributo \\\`custom-validation="true"\\\`. In questo modo la validazione di default effettuata internamente al componente è disabilitata.

Nel caso il campo non sia valido, è necessario invalidare il campo impostando il messaggio di errore da visualizzare attraverso l'attributo \\\`validity-message="Messaggio di errore"\\\`.
\`
      }
    }
  },
  render: () => html\` <form action="/prova">
      <div class="row">
        <it-input
          class="col-md-6"
          label="Email"
          id="email"
          type="email"
          placeholder="Validazione di default"
        ></it-input>
        <it-input
          class="col-md-6"
          label="Username"
          id="username"
          custom-validation
          validity-message="Username obbligatorio"
          required
          placeholder="Validazione custom"
        ></it-input>
      </div>
    </form>\`
}`,...(A=(D=l.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var j,J,L;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
  ...meta,
  name: 'Validazione via JS',
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
È possibile implementare una propria validazione via JS, intercettando gli eventi emessi dai componenti:

\\\`\\\`\\\`js
 window.addEventListener('DOMContentLoaded', () => {
      const form = document.querySelector('#form');
      const all_input = form.querySelectorAll('it-input');

      // evento scatenato quando il web-component ha effettutato il primo render, e l'input è disonibile nel DOM
      all_input.forEach(input=>{
        input.addEventListener('it-input-ready', (event) => {
          const input = event.detail.el;
          // il tuo codice qui.
        });
      });

      // evento scatenato quando l'input riceve l'evento di 'it-input' (ad esempio, durante l'inserimento di testo da parte dell'utente)
      all_input.forEach(i=>{
        i.addEventListener('it-input', (event) => {
          const input = event.detail.el;
          // il tuo codice qui.
        });
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // il tuo codice qui.
      });
    });
\\\`\\\`\\\`
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...(L=(J=r.parameters)==null?void 0:J.docs)==null?void 0:L.source}}};var k,F,T;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio di validazione via JS con plugin JustValidate',
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
Ecco qui un esempio di implementazione della validazione con il plugin [JustValidate](https://just-validate.dev/).
\`
      }
    }
  },
  render: () => html\`<script src="https://unpkg.com/just-validate@latest/dist/just-validate.production.min.js"><\/script>
      <script>
        window.addEventListener('DOMContentLoaded', () => {
          const formEl = document.querySelector('#form-validation-example');

          // Inizializziamo JustValidate senza selettore, passando il form element
          const validate = new JustValidate(formEl);

          // Funzione helper per leggere valore da <it-input>
          const getItInputValue = (selector) => {
            const el = formEl.querySelector(selector);
            return el?.value || ''; // .value dovrebbe essere esposto dal tuo componente
          };

          // Aggiungiamo regole
          validate
            .addField('it-input[id="email"]', [
              {
                rule: 'required',
                errorMessage: 'Email obbligatoria',
              },
              {
                validator: () => {
                  const value = getItInputValue('it-input[id="email"]');
                  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/.test(value);
                },
                errorMessage: 'Formato email non valido',
              },
            ])
            .addField('it-input[id="messaggio"]', [
              {
                validator: () => {
                  const value = getItInputValue('it-input[id="messaggio"]');
                  return value.length > 10;
                },
                errorMessage: 'Inserire almeno 10 caratteri',
              },
            ]);

          validate.onValidate((props) => {
            const { fields } = props;

            // Rimuovi TUTTI i messaggi creati da JustValidate (questi sono quelli prima del bottone submit)
            document.querySelectorAll('.just-validate-error-label').forEach((el) => el.remove());
            // aggiorna il Web Component
            Object.keys(fields).forEach((k) => {
              const f = fields[k];
              const wc = f.elem;
              if (wc) {
                wc.validationText = f.isValid ? '' : f.errorMessage;
              }
            });
          });

          formEl.addEventListener('submit', (e) => {
            e.preventDefault();
            if (validate.isValid) {
              console.log('Form valido!');
              // gestire qui il submit della form
              // fetch('/submit', { method: 'POST', body: ... })
            }
          });
          // oppure
          // validate.onSuccess(( event ) => {
          //  submit della form
          //   event.currentTarget.submit();
          // });
        });
      <\/script>

      <form id="form-validation-example">
        <it-input id="nome" name="nome" label="Nome"></it-input>
        <it-input id="cognome" name="cognome" label="Cogome"></it-input>
        <it-input id="email" name="email" label="E-mail" type="email" support-text="Inserisci la tua email"
          custom-validation></it-input>
        <it-input id="messaggio" name="messaggio" label="Messaggio" type="textarea"
          support-text="Inserisci il tuo messaggio" custom-validation></it-input>
        <!-- <it-input id="password"  label="Password" type="password" minlength="10" suggestions strength-meter></it-input> -->
        <it-button type="submit" variant="primary" block>Invia</it-button></form>
      </form>\`
}`,...(T=(F=d.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var P,_,O;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: 'Tipologie di campi',
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
I singoli campi di tipo \\\`<it-input>\\\`, \\\`<it-checkbox>\\\`, \\\`<it-radio>\\\`, \\\`<it-toggle>\\\`, ecc. sono trattati in pagine separate della documentazione.
\`
      }
    }
  },
  render: () => html\`<div class="hide-preview"></div>\`
}`,...(O=(_=m.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const $=["ElementiEStili","DimensionamentoColonne","Autodimensionamento","DisabilitazioneCampi","DisabilitazioneForm","Validazione","ValidazioneJS","EsempioJustValidate","SingoliCampi"];export{n as Autodimensionamento,a as DimensionamentoColonne,o as DisabilitazioneCampi,s as DisabilitazioneForm,t as ElementiEStili,d as EsempioJustValidate,m as SingoliCampi,l as Validazione,r as ValidazioneJS,$ as __namedExportsOrder,i as default};
