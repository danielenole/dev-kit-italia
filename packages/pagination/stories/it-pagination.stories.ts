import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { PAGINATION_ALIGNMENTS, type PaginationAlignment } from '../src/types.js';

interface PaginationProps {
  value?: string;
  align?: PaginationAlignment;
  total?: string;
  disableResponsive?: boolean;
}

interface PaginationItemProps {
  page: string;
  label: string;
  disabled?: boolean;
}

const renderPaginationItem = (params: PaginationItemProps) => html`
  <it-pagination-item page="${params.page}" ?disabled="${params.disabled}">
    <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>${params.label}</a>
  </it-pagination-item>
`;

const renderComponent = (params: PaginationProps, items: PaginationItemProps[] = []) => html`
  <it-pagination
    total="${ifDefined(params.total || undefined)}"
    value="${ifDefined(params.value)}"
    align="${ifDefined(params.align)}"
    ?disable-responsive="${ifDefined(params.disableResponsive)}"
  >
    <a href="#" slot="prev">
      <it-icon name="it-chevron-left"></it-icon>
      <span class="visually-hidden">Pagina precedente</span>
    </a>
    ${items.map((item) => renderPaginationItem(item))}
    <a href="#" slot="next">
      <it-icon name="it-chevron-right"></it-icon>
      <span class="visually-hidden">Pagina successiva</span>
    </a>
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
  decorators: [
    (story, context) => {
      if (context.parameters.overrideMetaWrapper) return story();
      return html` <div style="padding: 2rem;margin:auto;display:flex; justify-content:center;">${story()}</div> `;
    },
  ],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    value: '1',
    total: '5',
    align: 'start',
    disableResponsive: false,
  },
  argTypes: {
    value: {
      control: 'text',
      description: 'Pagina corrente selezionata',
      table: { defaultValue: { summary: '1' } },
    },
    total: {
      control: false,
      description:
        'Numero totale di pagine, se non specificato viene calcolato in base agli elementi `it-pagination-item` presenti. Utile per indicare un numero di pagine diverso rispetto agli elementi effettivamente presenti (es. con caricamento dinamico)',
      table: { defaultValue: { summary: undefined } },
    },
    align: {
      control: 'select',
      description: 'Allineamento della paginazione',
      options: PAGINATION_ALIGNMENTS,
      table: { defaultValue: { summary: 'start' } },
    },
    disableResponsive: {
      control: 'boolean',
      description: 'Disabilita responsive mode (nasconde pagine non correnti su mobile)',
      table: { defaultValue: { summary: 'false' } },
    },
  },
};

export default meta;
type Story = StoryObj<PaginationProps>;

export const EsempioInterattivo: Story = {
  render: (args) => renderComponent(args, defaultItems),
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
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
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
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">Successiva</a>
    </it-pagination>
  `,
};

export const AllineamentoStart: Story = {
  name: 'Allineamento a sinistra',
  parameters: {
    overrideMetaWrapper: true,
  },
  decorators: [(story) => html` <div style="padding: 2rem;margin:auto;display:flex;">${story()}</div> `],
  render: () => html`
    <it-pagination value="2" align="start">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `,
};
export const AllineamentoCenter: Story = {
  name: 'Allineamento centrato',
  render: () => html`
    <it-pagination value="2" align="center">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `,
};

export const AllineamentoEnd: Story = {
  name: 'Allineamento a destra',
  decorators: [(story) => html` <div style="width:100%">${story()}</div> `],
  render: () => html`
    <it-pagination value="2" align="end">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
        <span class="visually-hidden">Pagina precedente</span>
      </a>
      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
        <span class="visually-hidden">Pagina successiva</span>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `,
};

export const Responsive: Story = {
  name: 'Paginazione responsive',
  render: () => html`
    <it-pagination value="1">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina</span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `,
};

export const ConTotale: Story = {
  name: 'Con numero totale di pagine',
  render: () => html`
    <it-pagination value="3">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
      </a>
      <p slot="total">Totale 300 elementi</p>
    </it-pagination>
  `,
};

export const More: Story = {
  render: () => html`
    <it-pagination value="26" total="50">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item>
        <span>...</span>
      </it-pagination-item>
      <it-pagination-item page="24">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>24</a>
      </it-pagination-item>
      <it-pagination-item page="25">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>25</a>
      </it-pagination-item>
      <it-pagination-item page="26">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>26</a>
      </it-pagination-item>
      <it-pagination-item page="27">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>27</a>
      </it-pagination-item>
      <it-pagination-item page="28">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>28</a>
      </it-pagination-item>
      <it-pagination-item>
        <span>...</span>
      </it-pagination-item>
      <it-pagination-item page="50">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>50</a>
      </it-pagination-item>
      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
      </a>
    </it-pagination>
  `,
};
export const ConPageChanger: Story = {
  name: 'Con selettore pagine',
  render: () => html`
    <it-pagination value="3">
      <a href="#" slot="prev">
        <it-icon name="it-chevron-left"></it-icon>
      </a>

      <it-pagination-item page="1">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
      </a>

      <div slot="page-changer">
        <label for="page-size" class="visually-hidden">Elementi per pagina:</label>
        <select id="page-size" class="form-select" style="padding-right: 1.5rem;">
          <option value="10">10/pagina</option>
          <option value="20" selected>20/pagina</option>
          <option value="50">50/pagina</option>
          <option value="100">100/pagina</option>
        </select>
      </div>
    </it-pagination>

    <script>
      const pageSizeSelect = document.getElementById('page-size');
      pageSizeSelect.addEventListener('change', (event) => {
        const selectedValue = event.target.value;
        console.log('PageChanger: Elementi per pagina selezionati:', selectedValue);
      });
    </script>
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
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
      </it-pagination-item>
      <it-pagination-item page="2">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
      </it-pagination-item>
      <it-pagination-item page="3">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
      </it-pagination-item>
      <it-pagination-item page="4">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
      </it-pagination-item>
      <it-pagination-item page="5">
        <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
      </it-pagination-item>

      <a href="#" slot="next">
        <it-icon name="it-chevron-right"></it-icon>
      </a>

      <div slot="jump-to-page" style="display: flex; align-items: center; gap: 0.5rem;">
        <it-input type="number" id="jump-page" value="5" style="max-width:60px">
          <span slot="label">Vai a:</span>
        </it-input>

        <it-button type="button" variant="primary" style="margin-top:0.5rem">Vai</it-button>
      </div>
    </it-pagination>
  `,
};
