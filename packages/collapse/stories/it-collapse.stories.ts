import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import '@italia/collapse';
import '@italia/icon';
import '@italia/button';
import { type Variants, type Sizes, BUTTON_VARIANTS, BUTTON_SIZES } from '@italia/button';
import { ifDefined } from 'lit/directives/if-defined.js';
import { CollapsibleOrHiddenContentGuidelines } from '@italia/globals';

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
    <div slot="content" style="padding: 1.5rem 1rem; background-color: #fff;">${params.content || CONTENT}</div>
  </it-collapse>
`;

const meta: Meta<CollapseProps> = {
  title: 'Componenti/Collapse',
  // tags: ['autodocs'],
  component: 'it-collapse',
  args: {
    // label: 'Toggle collapse',
    defaultOpen: false,
    content: CONTENT,
    variant: 'primary',
    size: '',
    outline: false,
    as: 'button',
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
  },
};

export default meta;
type Story = StoryObj<CollapseProps>;

export const Info: Story = { ...CollapsibleOrHiddenContentGuidelines(), tags: ['!dev'] };

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
Il componente \`it-collapse\` permette di mostrare o nascondere del contenuto in modo dinamico, tramite un trigger che l'utente può attivare.

Il contenuto da mostrare o nascondere va inserito nello slot \`content\` del componente.

La proprietà \`as\` seleziona il tag del trigger di default:

- Default \`button\`: il componente renderizza un \`<button>\` con id e attributi ARIA (\`aria-expanded\`, \`aria-controls\`).
- Altri tag validi (es. \`a\`, \`p\`, \`div\`, \`span\`): il componente renderizza il tag scelto e imposta automaticamente \`role="button"\`, \`tabindex="0"\`, id univoco e attributi ARIA; l'utilizzatore deve solo assicurarsi non usare tag incompatibili col ruolo button.

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


**Non utilizzare elementi non idonei per il trigger, per garantire l'accessibilità.**
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
