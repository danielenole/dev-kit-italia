import type { Meta, StoryObj } from '@storybook/web-components-vite';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

interface AutocompleteProps {
  id: string;
  label: string;
  name: string;
  value: string;
  disabled?: boolean;
  required: boolean;
  placeholder: string;
  supportText: string;
  labelHidden: boolean;
  minLength: number;
  defaultValue: string;
  showArrow: boolean;
  source: string[] | ((query: string, populateResults: (results: string[]) => void) => void);
}

const italianRegions = [
  'Abruzzo',
  'Basilicata',
  'Calabria',
  'Campania',
  'Emilia Romagna',
  'Friuli Venezia Giulia',
  'Lazio',
  'Liguria',
  'Lombardia',
  'Marche',
  'Molise',
  'Piemonte',
  'Puglia',
  'Sardegna',
  'Sicilia',
  'Toscana',
  'Trentino Alto Adige',
  'Umbria',
  "Valle d'Aosta",
  'Veneto',
];

// Renderizza il componente it-autocomplete
const renderComponent = (params: any) =>
  html`<it-autocomplete
    id="${ifDefined(params.id || undefined)}"
    name="${ifDefined(params.name || undefined)}"
    value="${ifDefined(params.value || undefined)}"
    ?disabled="${params.disabled}"
    ?required="${params.required}"
    placeholder="${ifDefined(params.placeholder || undefined)}"
    support-text="${ifDefined(params.supportText || undefined)}"
    ?label-hidden="${params.labelHidden}"
    ?show-arrow="${params.showArrow}"
    min-length="${ifDefined(params.minLength || undefined)}"
    default-value="${ifDefined(params.defaultValue || undefined)}"
    .source="${params.source}"
  >
    <span slot="label">${params.label}</span>
  </it-autocomplete>`;

const meta = {
  title: 'Componenti/Form/Autocomplete',
  tags: ['a11y-ok', 'web-component'],
  component: 'it-autocomplete',
  args: {
    id: 'autocomplete-regione',
    label: 'Regione',
    name: 'regione',
    value: '',
    disabled: false,
    required: false,
    placeholder: '',
    supportText: '',
    labelHidden: false,
    showArrow: true,
    minLength: 0,
    defaultValue: '',
    source: italianRegions,
  },
  argTypes: {
    id: {
      control: 'text',
      description: 'ID del campo',
    },
    label: {
      control: 'text',
      description: 'Etichetta del campo',
    },
    name: {
      control: 'text',
      description: 'Nome del campo',
    },
    value: {
      control: 'text',
      description: 'Valore corrente del campo',
    },
    disabled: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    required: {
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
    },
    placeholder: {
      control: 'text',
      description: 'Testo segnaposto',
    },
    supportText: {
      name: 'support-text',
      control: 'text',
      description: 'Testo di supporto',
    },
    labelHidden: {
      name: 'label-hidden',
      control: 'boolean',
      table: { defaultValue: { summary: 'false' } },
      description: "Nasconde visivamente l'etichetta",
    },
    showArrow: {
      name: 'show-arrow',
      control: 'boolean',
      table: { defaultValue: { summary: 'true' } },
      description: 'Mostra la freccia per aprire/chiudere il menu',
    },
    minLength: {
      name: 'min-length',
      control: 'number',
      table: { defaultValue: { summary: '0' } },
      description: 'Numero minimo di caratteri prima di mostrare i suggerimenti',
    },
    defaultValue: {
      name: 'default-value',
      control: 'text',
      description: 'Valore di default',
    },
    source: {
      control: 'object',
      description: 'Sorgente di dati: array di stringhe o funzione',
    },
  },
  render: renderComponent,
} satisfies Meta<AutocompleteProps>;

export default meta;
type Story = StoryObj<AutocompleteProps>;

// Esempio interattivo
export const EsempioInterattivo: Story = {};

// Esempio base con regioni italiane
export const EsempioBase: Story = {
  name: 'Esempio di autocompletamento',
  args: {
    label: 'Regione',
    placeholder: 'Inizia a digitare...',
    supportText: 'Seleziona una regione italiana',
  },
  render: (args) => html` <div class="form-group">${renderComponent(args)}</div> `,
};

// Placeholder
export const Placeholder: Story = {
  name: 'Con placeholder',
  args: {
    label: 'Cerca regione',
    placeholder: 'Es: Lombardia',
  },
};

// Testo di supporto
export const TestoDiSupporto: Story = {
  name: 'Con testo di supporto',
  args: {
    label: 'Regione di residenza',
    supportText: 'Seleziona la regione in cui risiedi',
  },
};

// Campo obbligatorio
export const CampoObbligatorio: Story = {
  name: 'Campo obbligatorio',
  args: {
    label: 'Regione',
    required: true,
    supportText: 'Questo campo è obbligatorio',
  },
};

// Con minLength
export const ConMinLength: Story = {
  name: 'Con lunghezza minima',
  args: {
    label: 'Regione',
    minLength: 3,
    supportText: 'Digita almeno 3 caratteri per vedere i suggerimenti',
  },
};

// Disabilitato
export const Disabilitato: Story = {
  name: 'Campo disabilitato',
  args: {
    label: 'Regione',
    disabled: true,
    defaultValue: 'Lombardia',
  },
};

// Etichetta nascosta
export const LabelHidden: Story = {
  name: 'Etichetta nascosta',
  args: {
    label: 'Cerca regione',
    labelHidden: true,
    placeholder: 'Cerca regione...',
  },
};

// Senza freccia
export const SenzaFreccia: Story = {
  name: 'Senza freccia di apertura',
  args: {
    label: 'Regione',
    showArrow: false,
    placeholder: 'Inizia a digitare...',
    supportText: 'La freccia per aprire il menu è nascosta',
  },
};

// Esempio con dati dinamici
export const DatiDinamici: Story = {
  name: 'Cambiare i valori dinamicamente',
  render: () => {
    const categories = {
      frutta: ['Mela', 'Pera', 'Banana', 'Arancia', 'Fragola', 'Kiwi'],
      verdura: ['Carota', 'Pomodoro', 'Lattuga', 'Zucchina', 'Melanzana', 'Peperone'],
      cereali: ['Riso', 'Pasta', 'Pane', 'Farro', 'Orzo', 'Quinoa'],
    };

    let currentCategory: keyof typeof categories = 'frutta';

    const updateAutocomplete = (category: keyof typeof categories) => {
      currentCategory = category;
      const autocomplete = document.getElementById('autocomplete-alimento') as any;
      if (autocomplete) {
        autocomplete.source = categories[category];
        autocomplete.value = '';
      }
    };

    setTimeout(() => {
      const select = document.getElementById('categoria-select') as HTMLSelectElement;
      if (select) {
        select.addEventListener('change', (e) => {
          updateAutocomplete((e.target as HTMLSelectElement).value as keyof typeof categories);
        });
      }
    }, 100);

    return html`
      <div class="row">
        <div class="col-12 col-md-6 mb-3">
          <div class="form-group">
            <label for="categoria-select">Categoria alimento</label>
            <select id="categoria-select" class="form-control">
              <option value="frutta">Frutta</option>
              <option value="verdura">Verdura</option>
              <option value="cereali">Cereali</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <it-autocomplete id="autocomplete-alimento" name="alimento" .source="${categories.frutta}">
            <span slot="label">Alimento</span>
          </it-autocomplete>
        </div>
      </div>
    `;
  },
};
// Integrazione con form
export const IntegrazioneForm: Story = {
  name: 'Integrazione con form',
  parameters: {
    docs: {
      description: {
        story: `Il componente \`<it-autocomplete>\` si integra perfettamente con i form HTML nativi. Supporta la validazione nativa del browser con l'attributo \`required\` e può essere utilizzato con FormData per l'invio dei dati.`,
      },
    },
  },
  render: () => {
    const form = document.getElementById('form-autocomplete') as HTMLFormElement;
    const submitBtn = document.getElementById('submit-autocomplete');
    const output = document.getElementById('form-output');

    if (form && submitBtn && output) {
      submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (form.checkValidity()) {
          const formData = new FormData(form);
          const data: Record<string, any> = {};
          formData.forEach((value, key) => {
            data[key] = value;
          });

          output.innerHTML = `
              <div class="alert alert-success" role="alert">
                <strong>Form valido!</strong> Dati inviati:
                <pre>${JSON.stringify(data, null, 2)}</pre>
              </div>
            `;
        } else {
          // form.reportValidity();
          output.innerHTML = `
              <div class="alert alert-danger" role="alert">
                <strong>Errore:</strong> Compila tutti i campi obbligatori
              </div>
            `;
        }
      });
    }

    return html`
      <form id="form-autocomplete">
        <div class="row">
          <div class="col-12 col-md-6 mb-3">
            <it-autocomplete name="regione" required .source="${italianRegions}">
              <span slot="label">Regione *</span>
              <span slot="support-text">Campo obbligatorio</span>
            </it-autocomplete>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <it-autocomplete name="provincia" .source="${['Milano', 'Roma', 'Napoli', 'Torino', 'Palermo', 'Genova']}">
              <span slot="label">Provincia</span>
              <span slot="support-text">Campo facoltativo</span>
            </it-autocomplete>
          </div>
        </div>
        <button id="submit-autocomplete" type="button" class="btn btn-primary">Invia</button>
        <button type="reset" class="btn btn-secondary ms-2">Reset</button>
        <div id="form-output" class="mt-3"></div>
      </form>
    `;
  },
};
// Esempio con funzione source (ricerca asincrona)
export const RicercaAsincrona: Story = {
  name: 'Con ricerca asincrona',
  render: () => {
    const comuni = [
      'Roma',
      'Milano',
      'Napoli',
      'Torino',
      'Palermo',
      'Genova',
      'Bologna',
      'Firenze',
      'Bari',
      'Catania',
      'Venezia',
      'Verona',
      'Messina',
      'Padova',
      'Trieste',
      'Brescia',
      'Parma',
      'Prato',
      'Taranto',
      'Modena',
      'Reggio Calabria',
      'Reggio Emilia',
      'Perugia',
      'Livorno',
      'Ravenna',
      'Cagliari',
      'Foggia',
      'Rimini',
      'Salerno',
      'Ferrara',
    ];

    const searchFunction = (query: string, populateResults: (results: string[]) => void) => {
      // Simula una ricerca asincrona
      setTimeout(() => {
        const filtered = comuni.filter((comune) => comune.toLowerCase().includes(query.toLowerCase()));
        populateResults(filtered);
      }, 300);
    };

    return html`
      <it-autocomplete id="autocomplete-comuni" name="comune" .source="${searchFunction}" min-length="2">
        <span slot="label">Comune</span>
        <span slot="support-text">La ricerca viene effettuata dopo aver digitato almeno 2 caratteri</span>
      </it-autocomplete>
    `;
  },
};

// Esempio regioni e comuni (nested)
export const RegioniEComuni: Story = {
  name: 'Regioni e Comuni',
  render: () => {
    const comuniPerRegione: Record<string, string[]> = {
      Lombardia: ['Milano', 'Brescia', 'Bergamo', 'Monza', 'Como', 'Varese'],
      Lazio: ['Roma', 'Latina', 'Frosinone', 'Rieti', 'Viterbo'],
      Campania: ['Napoli', 'Salerno', 'Caserta', 'Avellino', 'Benevento'],
      Sicilia: ['Palermo', 'Catania', 'Messina', 'Siracusa', 'Trapani'],
      Veneto: ['Venezia', 'Verona', 'Padova', 'Vicenza', 'Treviso'],
    };

    setTimeout(() => {
      const regioneAutocomplete = document.getElementById('autocomplete-regione-nested') as any;
      const comuneAutocomplete = document.getElementById('autocomplete-comune-nested') as any;

      if (regioneAutocomplete && comuneAutocomplete) {
        regioneAutocomplete.addEventListener('it-autocomplete-select', (e: CustomEvent) => {
          const regione = e.detail.value;
          comuneAutocomplete.source = comuniPerRegione[regione] || [];
          comuneAutocomplete.value = '';
          comuneAutocomplete.disabled = !comuniPerRegione[regione];
        });
      }
    }, 100);

    return html`
      <div class="row">
        <div class="col-12 col-md-6 mb-3">
          <it-autocomplete id="autocomplete-regione-nested" name="regione" .source="${Object.keys(comuniPerRegione)}">
            <span slot="label">Regione</span>
          </it-autocomplete>
        </div>
        <div class="col-12 col-md-6">
          <it-autocomplete id="autocomplete-comune-nested" name="comune" .source="${[]}" disabled>
            <span slot="label">Comune</span>
            <span slot="support-text">Seleziona prima una regione</span>
          </it-autocomplete>
        </div>
      </div>
    `;
  },
};

// Gestione eventi
export const GestioneEventi: Story = {
  name: 'Gestione degli eventi',
  render: () => {
    setTimeout(() => {
      const autocomplete = document.getElementById('autocomplete-eventi') as any;
      const output = document.getElementById('event-output');

      if (autocomplete && output) {
        autocomplete.addEventListener('it-autocomplete-change', (e: CustomEvent) => {
          output.innerHTML = `<strong>Evento change:</strong> ${e.detail.value}`;
        });

        autocomplete.addEventListener('it-autocomplete-select', (e: CustomEvent) => {
          output.innerHTML = `<strong>Evento select:</strong> ${e.detail.value}`;
        });
      }
    }, 100);

    return html`
      <div>
        <it-autocomplete id="autocomplete-eventi" name="regione" .source="${italianRegions}">
          <span slot="label">Regione</span>
        </it-autocomplete>
        <div id="event-output" style="margin-top: 1rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
          <em>Digita o seleziona una regione per vedere gli eventi</em>
        </div>
      </div>
    `;
  },
};
