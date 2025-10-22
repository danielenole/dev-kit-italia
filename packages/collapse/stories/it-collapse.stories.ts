import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import '@italia/collapse';
import '@italia/icon';
import '@italia/button';
import { type Variants, type Sizes, BUTTON_VARIANTS, BUTTON_SIZES } from '@italia/button';
import { ifDefined } from 'lit/directives/if-defined.js';

interface CollapseProps {
  label: string;
  expanded: boolean;
  defaultOpen: boolean;
  as?: string;
  content?: string;
  variant?: Variants;
  size?: Sizes;
  outline?: boolean;
}
const CONTENT =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';
const renderComponent = (params: Partial<CollapseProps & { slot?: any }>) => html`
  <it-collapse
    ?expanded="${ifDefined(params.expanded)}"
    ?default-open="${params.defaultOpen}"
    variant="${ifDefined(params.variant)}"
    size="${ifDefined(params.size)}"
    ?outline="${ifDefined(params.outline)}"
    as="${ifDefined(params.as)}"
  >
    ${params.slot}
    <span slot="label">${!params.slot ? params.label || 'Toggle collapse' : ''}</span>
    <div
      slot="content"
      style="padding: 1.5rem 1rem; background-color: #fff; border: 1px solid black; border-radius:4px;"
    >
      ${params.content || CONTENT}
    </div>
  </it-collapse>
`;

const meta: Meta<CollapseProps> = {
  title: 'Componenti/Collapse',
  tags: ['autodocs'],
  component: 'it-collapse',
  args: {
    // label: 'Toggle collapse',
    expanded: false,
    defaultOpen: false,
    content: CONTENT,
    variant: 'primary',
    size: '',
    outline: false,
  },
  argTypes: {
    as: {
      control: 'text',
      description:
        'Tipo di elemento HTML da utilizzare come trigger (es. button, a, div). Utilizza solo tag idonei per il ruolo di pulsante.',
      table: { defaultValue: { summary: 'button' } },
    },
    variant: {
      control: 'select',
      description: 'Variante di stile del trigger, basata sulle varianti Bootstrap Italia dei pulsanti.',
      options: BUTTON_VARIANTS,
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      description: 'Dimensione del trigger, basata sulle dimensioni Bootstrap Italia dei pulsanti.',
      options: BUTTON_SIZES,
      table: { defaultValue: { summary: undefined } },
    },
    outline: {
      control: 'boolean',
      description: 'Se true, applica lo stile outline Bootstrap Italia dei pulsanti al trigger.',
      table: { defaultValue: { summary: 'false' } },
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Se true, il collapse è aperto di default al primo rendering',
      table: { defaultValue: { summary: 'false' } },

      name: 'default-open',
    },
    content: {
      control: 'text',
      description: 'Contenuto del collapse (slot content), solo per playground interattivo.',
    },
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
<Description>Per mostrare e nascondere contenuti secondari con un'animazione fluida.</Description>

Per ottimizzare l’ingombro dei contenuti di una pagina si possono usare degli elementi richiudibili (in gergo definiti collassabili o collapse), che possono essere attivati indipendentemente l’uno dall’altro oppure in modo esclusivo con l’attivazione di solo un blocco alla volta (in gergo definiti fisarmoniche o accordion).

Il componente [Accordion](?path=/docs/componenti-accordion--documentazione) è basato su Collapse.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
Il componente implementa le best practices per l'accessibilità:
<br/>
• Attributi ARIA appropriati (<code>aria-expanded</code>, <code>aria-controls</code>) per comunicare lo stato
<br/>
• Supporto completo per navigazione da tastiera (<code>Enter</code>, <code>Space</code>)
<br/>
• Relazione semantica tra trigger e contenuto tramite ID univoci
<br/>
• Rispetto delle preferenze di riduzione del movimento definite dall'utente per le animazioni
</p></div></div>

### Differenza tra Collapse, Accordion e Tabs

I componenti Accordion, Tabs e Collapse funzionano tutti nascondendo sezioni di contenuto che l’utente può scegliere di visualizzare. Evitare di usare questi componenti l’uno all’interno dell’altro.

Se decidi di usare uno di questi componenti, considera quanto segue:

- L’utente ha bisogno di visualizzare più di una sezione alla volta? L’accordion può mostrare più sezioni contemporaneamente, a differenza dei tabs.

- L’utente deve passare rapidamente tra le sezioni? I tabs permettono di cambiare contenuto senza spostare le altre sezioni nella pagina, a differenza dell’accordion.

- Ci sono molte sezioni di contenuto? L’accordion può contenere più sezioni perché sono disposte verticalmente, mentre i tabs sono disposti orizzontalmente.

- Ci sono solo uno o due contenuti brevi e meno importanti? Il componente Collapse è più adatto perché visivamente più piccolo e meno prominente rispetto a un accordion o ai tabs.

<br/>

| Componente | Contenuti multipli | Visibilità | Esclusività | Uso tipico | Esempi |
|----------|--------------------|-------------|--------------|-------------|---------|
| **Collapse** | No | Singolo contenuto mostrato o nascosto | N/A | Mostrare o nascondere dettagli secondari | “Mostra dettagli”, “Visualizza termini” |
| **Accordion** | Sì | Più sezioni espandibili | Solo una aperta alla volta *(consigliato)* | Raggruppare contenuti correlati in blocchi espandibili | FAQ, elenchi informativi |
| **Tabs** | Sì | Una sezione visibile alla volta | Sempre esclusiva | Organizzare viste equivalenti o alternative | Schede di impostazioni, pannelli di dati |


### Utilizzo base
Il componente può essere utilizzato in due modalità:
- Con **trigger di default**:  inserendo un elemento nello slot \`label\` per definire il testo del pulsante
- Con **trigger personalizzato**: inserendo un elemento nello slot \`trigger\`
`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<CollapseProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
  render: (args) => renderComponent(args),
};

export const PersonalizzazioneDegliStili: Story = {
  name: 'Personalizzazione degli stili',
  tags: ['!dev'],
  parameters: {
    viewMode: 'docs',
    docs: {
      canvas: { hidden: true, sourceState: 'none' },
      description: {
        story: `
Per la personalizzazione degli stili si possono usare i selettori \`::part\`:
- \`::part(trigger)\` - elemento trigger
- \`::part(content)\` - contenitore del contenuto

[Vedi qui la guida dettagliata](/docs/personalizzazione-degli-stili--documentazione#selettore-part).
`,
      },
    },
  },
  render: () => html`<div class="hide-preview"></div>`,
};

export const Comportamento: Story = {
  parameters: {
    docs: {
      description: {
        story: `
La proprietà \`as\` seleziona il tag del trigger di default.

- Default \`button\`: il componente renderizza un \`<button>\` con id e attributi ARIA (\`aria-expanded\`, \`aria-controls\`).
- Altri tag validi (es. \`a\`, \`p\`, \`div\`, \`span\`): il componente renderizza il tag scelto e imposta automaticamente \`role="button"\` e \`tabindex="0"\`; l'utilizzatore deve solo assicurarsi non usare tag incompatibili col ruolo button.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>
ARIA, id univoci e attivazione da tastiera sono gestiti dal componente. Evitare tag non idonei per il ruolo pulsante/elementi che non possono ricevere focus.
</p></div></div>
`,
      },
    },
  },
  render: () => html`
    <div>
      ${renderComponent({
        label: 'Apri sezione (button)',
        as: 'button',
        variant: 'primary',
      })}
      ${renderComponent({
        label: 'Apri sezione (a)',
        as: 'a',
        variant: 'link',
      })}
    </div>
  `,
};

export const TriggerClassi: Story = {
  name: 'Varianti del trigger',
  parameters: {
    docs: {
      description: {
        story: `
Usa l'attributo \`variant\` per applicare le varianti Bootstrap Italia ai trigger di Collapse.

Usa l'attributo \`size\` per applicare le dimensioni Bootstrap Italia ai trigger di Collapse.

Usa l'attributo \`outline\` per applicare le varianti outline Bootstrap Italia ai trigger di Collapse.
<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Attenzione</span></div>
<p>
Sono attualmente supportate solo gli stili Bootstrap Italia relativi ai pulsanti, in quanto il trigger è semanticamente un pulsante e come tale deve essere reso, coerente col resto del Design Kit.
</p><p>Vedi la sezione dedicata per come inserire un [trigger personalizzato](?path=/docs/componenti-collapse--trigger-personalizzato) e/o quella per la personalizzazione degli stili per esplorare le altre possibilità fornite dal Kit.
</p></div></div>
        `,
      },
    },
  },
  render: () => html`
    <div style="display:flex;flex-direction:column;gap:1rem">
      <div style="display:flex;flex-wrap:wrap;gap:1rem;flex-grow:1;">
        ${renderComponent({ label: 'Pulsante primary', variant: 'primary', as: 'button' })}
        ${renderComponent({ label: 'Pulsante secondary', variant: 'secondary', as: 'button' })}
        ${renderComponent({ label: 'Pulsante success', variant: 'success', as: 'button' })}
        ${renderComponent({ label: 'Pulsante danger', variant: 'danger', as: 'button' })}
        ${renderComponent({ label: 'Pulsante warning', variant: 'warning', as: 'button' })}
        ${renderComponent({ label: 'Pulsante link', variant: 'link', as: 'button' })}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:1rem;">
        ${renderComponent({ label: 'Pulsante outline primary', variant: 'primary', outline: true, as: 'button' })}
        ${renderComponent({ label: 'Pulsante outline secondary', variant: 'secondary', outline: true, as: 'button' })}
        ${renderComponent({ label: 'Pulsante outline success', variant: 'success', outline: true, as: 'button' })}
        ${renderComponent({ label: 'Pulsante outline danger', variant: 'danger', outline: true, as: 'button' })}
        ${renderComponent({ label: 'Pulsante outline warning', variant: 'warning', outline: true, as: 'button' })}
        ${renderComponent({ label: 'Pulsante outline link', variant: 'link', outline: true, as: 'button' })}
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:1rem;">
        ${renderComponent({ label: 'Pulsante xs', size: 'xs', variant: 'primary', as: 'button' })}
        ${renderComponent({ label: 'Pulsante sm', size: 'sm', variant: 'primary', as: 'button' })}
        ${renderComponent({ label: 'Pulsante lg', size: 'lg', variant: 'primary', as: 'button' })}
      </div>
    </div>
  `,
};
export const Aperto: Story = {
  name: 'Stato iniziale aperto',
  parameters: {
    docs: {
      description: {
        story: `
L'attributo \`default-open\` permette di avere il collapse aperto al primo rendering.
`,
      },
    },
  },
  render: () => html`
    <div>
      ${renderComponent({
        label: 'Apri sezione (button)',
        defaultOpen: true,
        as: 'button',
      })}
      ${renderComponent({
        label: 'Apri sezione (a)',
        as: 'a',
      })}
    </div>
  `,
};

export const LinkCollapse: Story = {
  name: 'Link come trigger',
  parameters: {
    docs: {
      description: {
        story: `
È possibile utilizzare un link come trigger del collapse. In questo caso è importante aggiungere \`role="button"\` per garantire l'accessibilità.
`,
      },
    },
  },
  render: () => html`
    ${renderComponent({
      label: 'Link per aprire il collapse',
      as: 'a',
    })}
  `,
};

export const TriggerPersonalizzato: Story = {
  name: 'Trigger personalizzato',
  parameters: {
    docs: {
      description: {
        story: `
È possibile utilizzare un trigger personalizzato inserendo un elemento nello slot \`trigger\`. Questo elemento diventa il controllo per aprire e chiudere il collapse.


**Non utilizzare Web Component con Shadow DOM o elementi non idonei per il trigger, per garantire l'accessibilità.**
`,
      },
    },
  },
  render: () => html`
    <it-collapse>
      <button class="my-custom-collapse-button" slot="trigger"><span slot="label">Trigger custom</span></button>

      <div
        slot="content"
        style="padding: 1.5rem 1rem; background-color: #fff; border: 1px solid black; border-radius:4px;"
      >
        ${CONTENT}
      </div>
    </it-collapse>
    <style>
      .my-custom-collapse-button {
        background-color: #e0e0e0;
        border: none;
        padding: 10px 20px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;
      }
      .my-custom-collapse-button:hover {
        background-color: #d5d5d5;
      }
    </style>
  `,
};
