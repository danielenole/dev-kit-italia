import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import '@italia/hero';

interface HeroProps {
  'it-aria-label'?: string;
}

const meta = {
  title: 'Componenti/Hero',
  tags: ['alpha', 'web-component', 'a11y-ok'],
  component: 'it-hero',

  args: {
    'it-aria-label': 'In evidenza',
  },
  argTypes: {
    'it-aria-label': {
      control: 'text',
      description:
        "Testo usato come `aria-label` sul contenitore dell'Hero (es. \"In evidenza\"). Obbligatorio quando l'hero contiene solamente un'immagine.",
      table: { defaultValue: { summary: 'In evidenza' } },
    },
  },
} satisfies Meta<HeroProps>;

const renderComponentWithImage = (args: any) => html`
  <it-hero it-aria-label=${args['it-aria-label']}>
    <img
      title="titolo immagine"
      alt="descrizione immagine"
      slot="background"
      src="https://animals.sandiegozoo.org/sites/default/files/2016-08/animals_hero_mountains.jpg"
    />
  </it-hero>
`;
export default meta;
type Story = StoryObj<HeroProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: { docs: { canvas: { sourceState: 'hidden' } } },
  render: (args) =>
    html`${renderComponentWithImage({
      ...args,
    })}`,
};

export const ConImmagine: Story = {
  name: 'Con immagine',
  render: (args) =>
    html`${renderComponentWithImage({
      ...args,
    })}`,
};

export const ConContenutiTestuali: Story = {
  name: 'Con contenuti testuali',
  render: (args) =>
    html` <it-hero>
      <div slot="content">
        <span class="it-category">Titolo occhiello</span>
        <h1>Titolo della sezione</h1>
        <p class="d-none d-lg-block">
          Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Dictum sit amet justo
          donec enim diam vulputate ut. Eu nisl nunc mi ipsum faucibus.
        </p>
        <div class="my-btn-container"><a class="btn btn-sm btn-outline-primary" href="#">Azione primaria </a></div>
      </div>
    </it-hero>`,
};
