import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  PAGINATION_SIZES,
  PAGINATION_ALIGNMENTS,
  type PaginationSize,
  type PaginationAlignment,
} from '../src/types.js';

interface PaginationProps {
  value?: string;
  total?: string;
  size?: PaginationSize | '';
  align?: PaginationAlignment;
  responsive?: boolean;
}

interface PaginationItemProps {
  page: string;
  label: string;
  disabled?: boolean;
}

const renderPaginationItem = (params: PaginationItemProps) => html`
  <it-pagination-item page="${params.page}" ?disabled="${params.disabled}">
    <a href="#">${params.label}</a>
  </it-pagination-item>
`;

const renderComponent = (params: PaginationProps, items: PaginationItemProps[] = []) => html`
  <it-pagination
    value="${ifDefined(params.value)}"
    total="${ifDefined(params.total)}"
    size="${ifDefined(params.size)}"
    align="${ifDefined(params.align)}"
    ?responsive="${params.responsive}"
  >
    ${items.map((item) => renderPaginationItem(item))}
  </it-pagination>
`;

const defaultItems: PaginationItemProps[] = [
  { page: '1', label: '1' },
  { page: '2', label: '2' },
  { page: '3', label: '3' },
  { page: '4', label: '4' },
  { page: '5', label: '5' },
];

const meta: Meta<PaginationProps> = {
  title: 'Componenti/Pagination',
  tags: ['a11y-ok', 'web-component'],
  args: {
    value: '1',
    total: '',
    size: '',
    align: 'start',
    responsive: false,
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Pagina corrente selezionata',
      table: { defaultValue: { summary: '1' } },
    },
    total: {
      control: 'text',
      description: 'Numero totale di pagine (opzionale, usato per disabilitare prev/next)',
      table: { defaultValue: { summary: '' } },
    },
    table: { defaultValue: { summary: '1' } },
  },
  size: {
    control: 'select',
    description: 'Dimensione della paginazione',
    options: ['', ...PAGINATION_SIZES],
    table: { defaultValue: { summary: '' } },
  },
  align: {
    control: 'select',
    description: 'Allineamento della paginazione',
    options: PAGINATION_ALIGNMENTS,
    table: { defaultValue: { summary: 'start' } },
  },
  responsive: {
    control: 'boolean',
    description: 'Mostra solo la pagina corrente, prima e ultima su mobile',
    table: { defaultValue: { summary: 'false' } },
  },
};

export default meta;
type Story = StoryObj<PaginationProps>;

export const EsempioInterattivo: Story = {
  render: (args) => renderComponent(args, defaultItems),
};

export const Base: Story = {
  name: 'Paginazione base',
  render: () => html`
    <it-pagination value="3">
      <it-pagination-item page="1">
        <a href="#">1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#">2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#">3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#">4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#">5</a>
      </it-pagination-item>
    </it-pagination>
  `,
};

export const ConNavigazione: Story = {
  name: 'Con pulsanti avanti e indietro',
  render: () => html`
    <it-pagination value="3">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>

      <it-pagination-item page="1">
        <a href="#">1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#">2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#">3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#">4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#">5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
    </it-pagination>
  `,
};

export const ConNavigazioneTestuale: Story = {
  name: 'Con link testuali',
  render: () => html`
    <it-pagination value="3">
      <a href="#" slot="prev">Precedente</a>

      <it-pagination-item page="1">
        <a href="#">1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#">2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#">3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#">4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#">5</a>
      </it-pagination-item>

      <a href="#" slot="next">Successiva</a>
    </it-pagination>
  `,
};

export const PaginazioneGrande: Story = {
  name: 'Dimensione grande',
  render: () => html`
    <it-pagination value="2" size="lg">
      <it-pagination-item page="1">
        <a href="#">1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#">2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#">3</a>
      </it-pagination-item>
    </it-pagination>
  `,
};

export const PaginazionePiccola: Story = {
  name: 'Dimensione piccola',
  render: () => html`
    <it-pagination value="2" size="sm">
      <it-pagination-item page="1">
        <a href="#">1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#">2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#">3</a>
      </it-pagination-item>
    </it-pagination>
  `,
};

export const AllineamentoCenter: Story = {
  name: 'Allineamento centrato',
  render: () => html`
    <it-pagination value="2" align="center">
      <it-pagination-item page="1">
        <a href="#">1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#">2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#">3</a>
      </it-pagination-item>
    </it-pagination>
  `,
};

export const AllineamentoEnd: Story = {
  name: 'Allineamento a destra',
  render: () => html`
    <it-pagination value="2" align="end">
      <it-pagination-item page="1">
        <a href="#">1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#">2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#">3</a>
      </it-pagination-item>
    </it-pagination>
  `,
};

export const Responsive: Story = {
  name: 'Paginazione responsive',
  render: () => html`
    <it-pagination value="1" responsive>
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
      </a>

      <it-pagination-item page="1">
        <a href="#">1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#">2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#">3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#">4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#">5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
      </a>
    </it-pagination>
    <p style="margin-top: 1rem;">
      <em>Ridimensiona la finestra per vedere l'effetto responsive (solo pagina corrente, prima e ultima su mobile)</em>
    </p>
  `,
};

export const ConTotale: Story = {
  name: 'Con numero totale di pagine',
  render: () => html`
    <it-pagination value="3">
      <it-pagination-item page="1">
        <a href="#">1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#">2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#">3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#">4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#">5</a>
      </it-pagination-item>

      <span slot="total">di 10 pagine</span>
    </it-pagination>
  `,
};

export const ItemDisabilitati: Story = {
  name: 'Pulsanti prev/next disabilitati automaticamente',
  render: () => html`
    <div style="margin-bottom: 2rem;">
      <h4>Prima pagina (prev disabilitato)</h4>
      <it-pagination value="1" total="3">
        <a href="#" slot="prev">
          <it-icon name="it-chevron-left"></it-icon>
          <span class="visually-hidden">Pagina precedente</span>
        </a>

        <it-pagination-item page="1">
          <a href="#">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="#">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="#">3</a>
        </it-pagination-item>

        <a href="#" slot="next">
          <it-icon name="it-chevron-right"></it-icon>
          <span class="visually-hidden">Pagina successiva</span>
        </a>
      </it-pagination>
    </div>

    <div>
      <h4>Ultima pagina (next disabilitato)</h4>
      <it-pagination value="3" total="3">
        <a href="#" slot="prev">
          <it-icon name="it-chevron-left"></it-icon>
          <span class="visually-hidden">Pagina precedente</span>
        </a>

        <it-pagination-item page="1">
          <a href="#">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="#">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="#">3</a>
        </it-pagination-item>

        <a href="#" slot="next">
          <it-icon name="it-chevron-right"></it-icon>
          <span class="visually-hidden">Pagina successiva</span>
        </a>
      </it-pagination>
    </div>
  `,
};

export const ConPageChanger: Story = {
  name: 'Con selettore pagine (dropdown)',
  render: () => html`
    <it-pagination value="3" total="10">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
      </a>

      <it-pagination-item page="1">
        <a href="#">1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#">2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#">3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#">4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#">5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
      </a>

      <div slot="page-changer" style="display: flex; align-items: center; gap: 0.5rem;">
        <label for="page-size">Elementi per pagina:</label>
        <select id="page-size" class="form-select" style="width: auto;">
          <option value="10">10</option>
          <option value="25" selected>25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
    </it-pagination>
  `,
};

export const ConJumpToPage: Story = {
  name: 'Con salto a pagina specifica',
  render: () => html`
    <it-pagination value="5" total="20">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
      </a>

      <it-pagination-item page="1">
        <a href="#">1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#">2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#">3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#">4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#">5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
      </a>

      <div slot="jump-to-page" style="display: flex; align-items: center; gap: 0.5rem;">
        <label for="jump-page">Vai a pagina:</label>
        <input type="number" id="jump-page" class="form-control" min="1" max="20" value="5" style="width: 80px;" />
        <button type="button" class="btn btn-primary btn-sm">Vai</button>
      </div>

      <span slot="total">di 20 pagine</span>
    </it-pagination>
  `,
};

export const Completa: Story = {
  name: 'Paginazione completa',
  render: () => html`
    <it-pagination value="7" total="15">
      <a href="#" slot="prev">Precedente</a>

      <it-pagination-item page="1">
        <a href="#">1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#">2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#">3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#">4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#">5</a>
      </it-pagination-item>
      <it-pagination-item page="6">
        <a href="#">6</a>
      </it-pagination-item>
      <it-pagination-item page="7">
        <a href="?page=7">7</a>
      </it-pagination-item>
      <it-pagination-item page="8">
        <a href="?page=8">8</a>
      </it-pagination-item>
      <it-pagination-item page="9">
        <a href="?page=9">9</a>
      </it-pagination-item>
      <it-pagination-item page="10">
        <a href="#0">10</a>
      </it-pagination-item>

      <a href="?page=8" slot="next">Successiva</a>

      <div slot="page-changer" style="display: flex; align-items: center; gap: 0.5rem;">
        <label for="items-per-page">Mostra:</label>
        <select id="items-per-page" class="form-select" style="width: auto;">
          <option value="10">10</option>
          <option value="25" selected>25</option>
          <option value="50">50</option>
        </select>
      </div>

      <div slot="jump-to-page" style="display: flex; align-items: center; gap: 0.5rem;">
        <label for="goto-page">Pagina:</label>
        <input type="number" id="goto-page" class="form-control" min="1" max="15" value="7" style="width: 70px;" />
      </div>

      <span slot="total">di 15</span>
    </it-pagination>
  `,
};
