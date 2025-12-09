import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type { ItModal } from '../src/it-modal.ts';
import { MODAL_SIZES, MODAL_POSITIONS, MODAL_VARIANTS } from '../src/types.ts';

interface ModalProps {
  'modal-title': string;
  size: string;
  position: string;
  scrollable: boolean;
  'static-backdrop': boolean;
  'close-button': boolean;
  variant: string;
  'no-escape': boolean;
  'close-label': string;
  fade: boolean;
  'footer-shadow': boolean;
  // Demo props
  triggerLabel: string;
  bodyContent: string;
}

const closeModal = (event: Event) => {
  const el = event.currentTarget as HTMLElement;
  const modal = el.closest('it-modal') as unknown as ItModal;
  modal?.hide();
};

const meta = {
  title: 'Componenti/Modal',
  component: 'it-modal',
  tags: ['beta', 'a11y-ok', 'web-component'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
  args: {
    'modal-title': 'Titolo modale',
    size: '',
    position: 'center',
    scrollable: false,
    'static-backdrop': false,
    'close-button': true,
    variant: '',
    'no-escape': false,
    'close-label': 'Chiudi finestra modale',
    fade: true,
    'footer-shadow': false,
    triggerLabel: 'Apri modale',
    bodyContent: 'Contenuto della modale. Può includere testo, form, o qualsiasi altro elemento.',
  },
  argTypes: {
    'modal-title': {
      control: 'text',
      description: 'Titolo della modale (usa slot `header` per contenuto custom)',
    },
    size: {
      control: 'select',
      options: ['', ...MODAL_SIZES],
      description: 'Dimensione della modale',
      table: { defaultValue: { summary: '' } },
    },
    position: {
      control: 'select',
      options: MODAL_POSITIONS,
      description: 'Posizionamento della modale',
      table: { defaultValue: { summary: 'center' } },
    },
    scrollable: {
      control: 'boolean',
      description: 'Abilita scroll interno al body',
      table: { defaultValue: { summary: 'false' } },
    },
    'static-backdrop': {
      control: 'boolean',
      description: 'Disabilita chiusura su click backdrop',
      table: { defaultValue: { summary: 'false' } },
    },
    'close-button': {
      control: 'boolean',
      description: 'Mostra il pulsante di chiusura',
      table: { defaultValue: { summary: 'true' } },
    },
    variant: {
      control: 'select',
      options: MODAL_VARIANTS,
      description: 'Variante della modale',
      table: { defaultValue: { summary: '' } },
    },
    'no-escape': {
      control: 'boolean',
      description: 'Disabilita chiusura con tasto Escape',
      table: { defaultValue: { summary: 'false' } },
    },
    'close-label': {
      control: 'text',
      description: 'Etichetta accessibile per il pulsante di chiusura',
      table: { defaultValue: { summary: 'Chiudi finestra modale' } },
    },
    fade: {
      control: 'boolean',
      description: 'Abilita animazione fade',
      table: { defaultValue: { summary: 'true' } },
    },
    'footer-shadow': {
      control: 'boolean',
      description: 'Ombra sul footer per contenuti lunghi',
      table: { defaultValue: { summary: 'false' } },
    },
    triggerLabel: {
      control: 'text',
      description: 'Testo del pulsante trigger (solo per demo)',
      table: { category: 'Demo' },
    },
    bodyContent: {
      control: 'text',
      description: 'Contenuto del body (solo per demo)',
      table: { category: 'Demo' },
    },
  },
} satisfies Meta<ModalProps>;

export default meta;
type Story = StoryObj<ModalProps>;

export const EsempioInterattivo: Story = {
  name: 'Esempio interattivo',
  tags: ['!dev'],
  parameters: {
    docs: {
      canvas: { sourceState: 'hidden' },
    },
  },
  render: (args) => html`
    <it-modal
      ?close-button="${args['close-button']}"
      ?fade="${args.fade}"
      size="${ifDefined(args.size || undefined)}"
      position="${args.position}"
      variant="${ifDefined(args.variant || undefined)}"
      ?scrollable="${args.scrollable}"
      ?static-backdrop="${args['static-backdrop']}"
      ?footer-shadow="${args['footer-shadow']}"
      ?no-escape="${args['no-escape']}"
      close-label="${args['close-label']}"
    >
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <h2 slot="header">${args['modal-title']}</h2>
      <p slot="content">${args.bodyContent}</p>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const ModaleBase: Story = {
  name: 'Modale base',
  render: () => html`
    <it-modal>
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <h2 slot="header">Titolo modale</h2>
      <p slot="content">Testo che descrive lo scopo della modale e quali sono le azioni richieste all'utente.</p>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const ConIcona: Story = {
  name: 'Con icona',
  render: () => html`
    <it-modal variant="alert">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <h2 slot="header">Questo è un messaggio di notifica</h2>
      <it-icon slot="header-icon" name="it-warning-circle" size="lg" color="warning"></it-icon>
      <p slot="content">In questo caso viene fornito solo un pulsante di conferma della modale.</p>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};
export const FooterCustom: Story = {
  name: 'Footer custom',
  render: () => html`
    <it-modal>
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <h2 slot="header">Con footer custom</h2>
      <p slot="content">In questo caso viene fornito solo un pulsante di conferma della modale.</p>
      <div slot="footer" class="d-flex justify-content-between gap-2 align-items-center" style="width:100%;">
        <a href="#">Link di supporto</a>
        <div class="d-flex justify-content-end  gap-2">
          <it-button variant="outline-primary" @click="${closeModal}">Annulla</it-button>
          <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
        </div>
      </div>
    </it-modal>
  `,
};

export const ConForm: Story = {
  name: 'Con form',
  render: () => html`
    <it-modal>
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <h2 slot="header">Seleziona un'opzione dal form</h2>
      <div slot="content">
        <it-radio-group name="gruppo1">
          <span slot="label">Esempio interattivo</span>
          <it-radio id="radio1" value="opzione1">
            <span slot="label">Radio di esempio 1</span>
          </it-radio>
          <it-radio id="radio2" value="opzione2">
            <span slot="label">Radio di esempio 2</span>
          </it-radio>
          <it-radio id="radio3" value="opzione3">
            <span slot="label">Radio di esempio 3</span>
          </it-radio>
        </it-radio-group>
      </div>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const ConLinkList: Story = {
  name: 'Con Link List',
  render: () => html`
    <it-modal variant="link-list">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <h2 slot="header">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</h2>
      <div class="link-list-wrapper" slot="content">
        <ul class="link-list">
          <li>
            <a class="list-item icon-left" href="#">
              <span>Link lista 1</span>
            </a>
          </li>
          <li>
            <a class="list-item icon-left" href="#">
              <span>Link lista 2</span>
            </a>
          </li>
          <li>
            <a class="list-item icon-left" href="#">
              <span>Link lista 3</span>
            </a>
          </li>
        </ul>
      </div>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const Popconfirm: Story = {
  render: () => html`
    <div class="d-flex gap-3">
      <it-modal variant="popconfirm" .closeButton=${false} modal-title="Titolo modale">
        <it-button variant="primary" slot="trigger">Popconfirm basico</it-button>
        <p slot="content">Breve messaggio di conferma inserito nella modale</p>
        <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Azione 1</it-button>
        <it-button slot="footer" variant="primary" @click="${closeModal}">Azione 2</it-button>
      </it-modal>

      <it-modal variant="popconfirm">
        <it-button variant="primary" slot="trigger">Popconfirm con header</it-button>
        <h2 slot="header">Titolo modale</h2>
        <p slot="content">Breve messaggio di conferma inserito nella modale</p>
        <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Azione 1</it-button>
        <it-button slot="footer" variant="primary" @click="${closeModal}">Azione 2</it-button>
      </it-modal>
    </div>
  `,
};

export const ScrollInterno: Story = {
  name: 'Scroll interno alla modale',
  render: () => html`
    <it-modal scrollable>
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <h2 slot="header">Modale con scroll interno</h2>
      <div slot="content">
        ${Array(20)
          .fill(0)
          .map(
            () => html`
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            `,
          )}
      </div>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const AllineamentoSinistra: Story = {
  name: 'Allineamento a sinistra',
  render: () => html`
    <it-modal position="left">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <h2 slot="header">Modale allineata a sinistra</h2>
      <p slot="content">Questa modale si apre da sinistra.</p>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const AllineamentoDestra: Story = {
  name: 'Allineamento a destra',
  render: () => html`
    <it-modal position="right">
      <it-button variant="primary" slot="trigger">Lancia la demo della modale</it-button>
      <h2 slot="header">Modale allineata a destra</h2>
      <p slot="content">Questa modale si apre da destra.</p>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const DimensioniOpzionali: Story = {
  name: 'Dimensioni opzionali',
  render: () => html`
    <div class="d-flex gap-3 flex-wrap">
      <it-modal size="sm">
        <it-button slot="trigger" variant="primary">Modale piccola</it-button>
        <h2 slot="header">Modale piccola</h2>
        <p slot="content">Contenuto della modale piccola.</p>
        <it-button slot="footer" variant="primary" @click="${closeModal}">Chiudi</it-button>
      </it-modal>

      <it-modal size="lg">
        <it-button slot="trigger" variant="primary">Modale grande</it-button>
        <h2 slot="header">Modale grande</h2>
        <p slot="content">Contenuto della modale grande.</p>
        <it-button slot="footer" variant="primary" @click="${closeModal}">Chiudi</it-button>
      </it-modal>

      <it-modal size="xl">
        <it-button slot="trigger" variant="primary">Modale molto grande</it-button>
        <h2 slot="header">Modale molto grande</h2>
        <p slot="content">Contenuto della modale molto grande.</p>
        <it-button slot="footer" variant="primary" @click="${closeModal}">Chiudi</it-button>
      </it-modal>
    </div>
  `,
};

export const BackdropStatico: Story = {
  name: 'Backdrop statico',
  render: () => html`
    <it-modal static-backdrop>
      <it-button slot="trigger" variant="primary">Apri modale con backdrop statico</it-button>
      <h2 slot="header">Modale con backdrop statico</h2>
      <p slot="content">Questa modale non si chiude cliccando sullo sfondo.</p>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};

export const SenzaAnimazione: Story = {
  name: 'Senza animazione',
  render: () => html`
    <it-modal .fade="${false}">
      <it-button slot="trigger" variant="primary">Apri modale senza animazione</it-button>
      <h2 slot="header">Modale senza fade</h2>
      <p slot="content">
        Questa modale appare immediatamente senza animazione di dissolvenza. Utile per ridurre il movimento e rispettare
        le preferenze di accessibilità.
      </p>
      <it-button slot="footer" variant="outline-primary" @click="${closeModal}">Annulla</it-button>
      <it-button slot="footer" variant="primary" @click="${closeModal}">Conferma</it-button>
    </it-modal>
  `,
};
