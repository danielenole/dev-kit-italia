import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html, type TemplateResult } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface NavscrollProps {
  ['it-aria-label']: string | undefined;
  slot?: string | TemplateResult;
}

// Renderizza il wc di default
const renderComponent = (params: NavscrollProps, defaultSlot: string | TemplateResult = '') => {
  const slot = params.slot ?? defaultSlot;
  return html`<it-navscroll it-aria-label=${ifDefined(params['it-aria-label'])}> ${slot} </it-navscroll>

    <it-navscroll breakpoint="1024" modal-title="Navigazione sezioni" open-label="Apri navigazione">
      <nav>
        <a href="#a">A</a>
        <a href="#b">B</a>
        <a href="#c">C</a>
      </nav>
    </it-navscroll> `;
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Componenti/Navscroll',
  tags: ['beta'],
  component: 'it-navscroll',
  args: {
    'it-aria-label': 'Aria label',
  },
  argTypes: {
    'it-aria-label': {
      control: 'text',
      description: 'Testo aria-label del wrapper degli navscroll.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
<Description>Lista di link con àncore per navigare velocemente a una sezione specifica della pagina in cui è contenuto il componente.</Description>
`,
      },
    },
  },
} satisfies Meta<NavscrollProps>;

export default meta;
type Story = StoryObj<NavscrollProps>;

export const EsempioInterattivo: Story = {
  ...meta,
  name: 'Esempio',
  args: {
    'it-aria-label': 'Vai a:',
  },
  parameters: {
    docs: {
      className: 'my-wide-story',
      canvas: {
        sourceState: 'shown',
      },
    },
  },

  render: (params) =>
    html` ${renderComponent({
      ...params,
      slot: html`<a href="#menu">Vai al menu</a>
        <a href="#main-content">Vai al contenuto principale</a>
        <a href="#satisfaction">Questa pagina ti è stata utile?</a>
        <a href="#footer">Vai al piè di pagina</a>
        <a href="https://form.agid.gov.it/view/xyz">Dichiarazione di accessibilità (link esterno su sito AgID</a> `,
    })}`,
};

// export const PochiLink: Story = {
//   ...meta,
//   name: 'Numero ridotto di link',
//   args: {},
//   parameters: {
//     docs: {
//       description: {
//         story: `
// Quando sono presenti uno o due link, il componente evita di generare un elemento \`<nav>\` al fine di ridurre la complessità di lettura per gli screen reader.
// `,
//       },
//     },
//   },
//   render: (params) =>
//     html` ${renderComponent({
//       ...params,
//       // eslint-disable-next-line no-useless-computed-key
//       ['it-aria-label']: undefined,
//       slot: html`<a href="#menu">Vai al menu</a>
//         <a href="#main-content">Vai al contenuto principale</a> `,
//     })}`,
// };
