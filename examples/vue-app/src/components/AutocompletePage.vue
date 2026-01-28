<template>
  <div class="container my-4">
    <h1>it-autocomplete</h1>

    <section class="example-section">
      <h2>Esempio di autocompletamento</h2>
      <p>Passaggio diretto dell'array tramite <code>:source.prop</code></p>
      <div class="form-group">
        <it-autocomplete name="regione" placeholder="Seleziona una regione..." :source.prop="italianRegions">
          <span slot="label">Regione</span>
        </it-autocomplete>
      </div>
    </section>

    <section class="example-section">
      <h2>Con placeholder</h2>
      <it-autocomplete name="regione" placeholder="Es: Lombardia" :source.prop="italianRegions">
        <span slot="label">Cerca regione</span>
      </it-autocomplete>
    </section>

    <section class="example-section">
      <h2>Campo obbligatorio</h2>
      <form @submit.prevent="handleRequiredSubmit">
        <it-autocomplete name="regione" required :source.prop="italianRegions">
          <span slot="label">Regione</span>
        </it-autocomplete>
        <it-button type="submit" variant="primary" class="mt-3"> Valida </it-button>
      </form>
    </section>

    <section class="example-section">
      <h2>Con lunghezza minima</h2>
      <it-autocomplete name="regione" min-length="3" :source.prop="italianRegions">
        <span slot="label">Regione</span>
      </it-autocomplete>
    </section>

    <section class="example-section">
      <h2>Campo disabilitato</h2>
      <it-autocomplete name="regione" disabled default-value="lombardia" :source.prop="italianRegions">
        <span slot="label">Regione</span>
      </it-autocomplete>
    </section>

    <section class="example-section">
      <h2>Etichetta nascosta</h2>
      <it-autocomplete name="regione" label-hidden placeholder="Cerca regione..." :source.prop="italianRegions">
        <span slot="label">Cerca regione</span>
      </it-autocomplete>
    </section>

    <section class="example-section">
      <h2>Valore predefinito (stringa)</h2>
      <it-autocomplete name="regione-default" default-value="lombardia" :source.prop="italianRegions">
        <span slot="label">Regione</span>
      </it-autocomplete>
    </section>

    <section class="example-section">
      <h2>Valore predefinito (oggetto)</h2>
      <p>Passaggio oggetto complesso tramite <code>:defaultValue.prop</code></p>
      <it-autocomplete
        name="regione-default-obj"
        :defaultValue.prop="{ value: 'lazio', label: 'Lazio' }"
        :source.prop="italianRegions"
      >
        <span slot="label">Regione</span>
      </it-autocomplete>
    </section>

    <section class="example-section">
      <h2>Ricerca asincrona</h2>
      <p>Passaggio funzione tramite <code>:source.prop</code></p>
      <it-autocomplete name="citta" min-length="2" :source.prop="asyncSearchFunction">
        <span slot="label">Cerca città</span>
      </it-autocomplete>
    </section>

    <section class="example-section">
      <h2>Cambiare i valori dinamicamente</h2>
      <div class="row">
        <div class="col-12 col-md-6 mb-3">
          <div class="form-group">
            <label for="categoria-select">Categoria alimento</label>
            <select id="categoria-select" class="form-control" v-model="selectedCategory">
              <option value="frutta">Frutta</option>
              <option value="verdura">Verdura</option>
              <option value="cereali">Cereali</option>
              <option value="legumi">Legumi</option>
              <option value="latticini">Latticini</option>
            </select>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <it-autocomplete name="alimento" :key="selectedCategory" :source.prop="categories[selectedCategory]">
            <span slot="label">Alimento</span>
          </it-autocomplete>
        </div>
      </div>
    </section>

    <section class="example-section">
      <h2>Integrazione con form</h2>
      <form @submit.prevent="handleFormSubmit">
        <div class="row">
          <div class="col-12 col-md-6 mb-3">
            <it-autocomplete name="regione" required :source.prop="italianRegions">
              <span slot="label">Regione</span>
            </it-autocomplete>
          </div>
          <div class="col-12 col-md-6 mb-3">
            <it-autocomplete name="provincia" :source.prop="provinces">
              <span slot="label">Provincia</span>
            </it-autocomplete>
          </div>
        </div>
        <it-button type="submit" variant="primary"> Invia </it-button>
        <div v-if="formOutput" class="mt-3">
          <div class="alert alert-success" role="alert">
            <strong>Form valido!</strong> Dati inviati:
            <pre>{{ formOutput }}</pre>
          </div>
        </div>
      </form>
    </section>

    <section class="example-section">
      <h2>Regioni e Comuni</h2>
      <div class="row">
        <div class="col-12 col-md-6 mb-3">
          <it-autocomplete name="regione" :source.prop="regioniUniche" @it-change="handleRegioneChange">
            <span slot="label">Regione</span>
          </it-autocomplete>
        </div>
        <div class="col-12 col-md-6">
          <it-autocomplete
            name="comune"
            :disabled="comuneDisabled"
            min-length="2"
            :source.prop="comuniFiltrati"
            :value="comuneValue"
          >
            <span slot="label">Comune</span>
          </it-autocomplete>
        </div>
      </div>
    </section>

    <section class="example-section">
      <h2>Gestione degli eventi</h2>
      <div>
        <it-autocomplete
          name="regione"
          :source.prop="italianRegions"
          @it-autocomplete-ready="logEvent('Evento inizializzazione')"
          @it-autocomplete-search="(e) => logEvent(`Ricerca: ${e.detail.value}`)"
          @it-change="(e) => logEvent(`Change: ${e.detail.value}`)"
        >
          <span slot="label">Regione</span>
        </it-autocomplete>

        <div style="margin-top: 1rem; padding: 1rem; background: #f5f5f5; border-radius: 4px">
          <div v-if="eventLog.length === 0">
            <em>Digita o seleziona una regione per vedere gli eventi</em>
          </div>
          <div v-for="(event, index) in eventLog" :key="index">{{ event }}</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// --- DATI STATICI ---
const italianRegions = [
  { value: 'abruzzo', label: 'Abruzzo' },
  { value: 'basilicata', label: 'Basilicata' },
  { value: 'calabria', label: 'Calabria' },
  { value: 'campania', label: 'Campania' },
  { value: 'emilia-romagna', label: 'Emilia Romagna' },
  { value: 'friuli-venezia-giulia', label: 'Friuli Venezia Giulia' },
  { value: 'lazio', label: 'Lazio' },
  { value: 'liguria', label: 'Liguria' },
  { value: 'lombardia', label: 'Lombardia' },
  { value: 'marche', label: 'Marche' },
  { value: 'molise', label: 'Molise' },
  { value: 'piemonte', label: 'Piemonte' },
  { value: 'puglia', label: 'Puglia' },
  { value: 'sardegna', label: 'Sardegna' },
  { value: 'sicilia', label: 'Sicilia' },
  { value: 'toscana', label: 'Toscana' },
  { value: 'trentino-alto-adige', label: 'Trentino Alto Adige' },
  { value: 'umbria', label: 'Umbria' },
  { value: 'valle-d-aosta', label: "Valle d'Aosta" },
  { value: 'veneto', label: 'Veneto' },
];

const provinces = [
  { value: 'milano', label: 'Milano' },
  { value: 'roma', label: 'Roma' },
  { value: 'napoli', label: 'Napoli' },
  { value: 'torino', label: 'Torino' },
  { value: 'palermo', label: 'Palermo' },
  { value: 'genova', label: 'Genova' },
  { value: 'bologna', label: 'Bologna' },
  { value: 'firenze', label: 'Firenze' },
  { value: 'bari', label: 'Bari' },
  { value: 'catania', label: 'Catania' },
];

const cities = [
  { value: 'milano', label: 'Milano' },
  { value: 'roma', label: 'Roma' },
  { value: 'napoli', label: 'Napoli' },
  { value: 'torino', label: 'Torino' },
  { value: 'palermo', label: 'Palermo' },
  { value: 'genova', label: 'Genova' },
  { value: 'bologna', label: 'Bologna' },
  { value: 'firenze', label: 'Firenze' },
  { value: 'bari', label: 'Bari' },
  { value: 'catania', label: 'Catania' },
  { value: 'venezia', label: 'Venezia' },
  { value: 'verona', label: 'Verona' },
  { value: 'messina', label: 'Messina' },
  { value: 'padova', label: 'Padova' },
  { value: 'trieste', label: 'Trieste' },
  { value: 'brescia', label: 'Brescia' },
  { value: 'parma', label: 'Parma' },
  { value: 'taranto', label: 'Taranto' },
  { value: 'prato', label: 'Prato' },
  { value: 'modena', label: 'Modena' },
  { value: 'reggio-calabria', label: 'Reggio Calabria' },
  { value: 'reggio-emilia', label: 'Reggio Emilia' },
  { value: 'perugia', label: 'Perugia' },
  { value: 'ravenna', label: 'Ravenna' },
  { value: 'livorno', label: 'Livorno' },
  { value: 'cagliari', label: 'Cagliari' },
  { value: 'foggia', label: 'Foggia' },
];

const categories = {
  frutta: [
    { value: 'mela', label: 'Mela' },
    { value: 'pera', label: 'Pera' },
    { value: 'banana', label: 'Banana' },
    { value: 'arancia', label: 'Arancia' },
    { value: 'fragola', label: 'Fragola' },
    { value: 'kiwi', label: 'Kiwi' },
    { value: 'ananas', label: 'Ananas' },
    { value: 'mango', label: 'Mango' },
    { value: 'pesca', label: 'Pesca' },
    { value: 'albicocca', label: 'Albicocca' },
    { value: 'ciliegia', label: 'Ciliegia' },
    { value: 'uva', label: 'Uva' },
    { value: 'melone', label: 'Melone' },
    { value: 'anguria', label: 'Anguria' },
    { value: 'pompelmo', label: 'Pompelmo' },
    { value: 'mandarino', label: 'Mandarino' },
    { value: 'limone', label: 'Limone' },
    { value: 'prugna', label: 'Prugna' },
    { value: 'fico', label: 'Fico' },
    { value: 'melograno', label: 'Melograno' },
  ],
  verdura: [
    { value: 'carota', label: 'Carota' },
    { value: 'pomodoro', label: 'Pomodoro' },
    { value: 'lattuga', label: 'Lattuga' },
    { value: 'zucchina', label: 'Zucchina' },
    { value: 'melanzana', label: 'Melanzana' },
    { value: 'peperone', label: 'Peperone' },
    { value: 'cipolla', label: 'Cipolla' },
    { value: 'aglio', label: 'Aglio' },
    { value: 'patata', label: 'Patata' },
    { value: 'spinaci', label: 'Spinaci' },
    { value: 'broccoli', label: 'Broccoli' },
    { value: 'cavolfiore', label: 'Cavolfiore' },
    { value: 'cavolo', label: 'Cavolo' },
    { value: 'sedano', label: 'Sedano' },
    { value: 'finocchio', label: 'Finocchio' },
    { value: 'cetriolo', label: 'Cetriolo' },
    { value: 'ravanello', label: 'Ravanello' },
    { value: 'rucola', label: 'Rucola' },
    { value: 'valeriana', label: 'Valeriana' },
    { value: 'barbabietola', label: 'Barbabietola' },
  ],
  cereali: [
    { value: 'riso', label: 'Riso' },
    { value: 'pasta', label: 'Pasta' },
    { value: 'pane', label: 'Pane' },
    { value: 'farro', label: 'Farro' },
    { value: 'orzo', label: 'Orzo' },
    { value: 'quinoa', label: 'Quinoa' },
    { value: 'avena', label: 'Avena' },
    { value: 'miglio', label: 'Miglio' },
    { value: 'grano-saraceno', label: 'Grano saraceno' },
    { value: 'segale', label: 'Segale' },
    { value: 'couscous', label: 'Couscous' },
    { value: 'bulgur', label: 'Bulgur' },
    { value: 'amaranto', label: 'Amaranto' },
    { value: 'mais', label: 'Mais' },
    { value: 'kamut', label: 'Kamut' },
  ],
  legumi: [
    { value: 'fagioli', label: 'Fagioli' },
    { value: 'lenticchie', label: 'Lenticchie' },
    { value: 'ceci', label: 'Ceci' },
    { value: 'piselli', label: 'Piselli' },
    { value: 'fave', label: 'Fave' },
    { value: 'soia', label: 'Soia' },
    { value: 'lupini', label: 'Lupini' },
    { value: 'fagioli-borlotti', label: 'Fagioli borlotti' },
    { value: 'fagioli-cannellini', label: 'Fagioli cannellini' },
    { value: 'fagioli-neri', label: 'Fagioli neri' },
    { value: 'cicerchie', label: 'Cicerchie' },
    { value: 'fagiolini', label: 'Fagiolini' },
  ],
  latticini: [
    { value: 'latte', label: 'Latte' },
    { value: 'yogurt', label: 'Yogurt' },
    { value: 'mozzarella', label: 'Mozzarella' },
    { value: 'parmigiano', label: 'Parmigiano' },
    { value: 'pecorino', label: 'Pecorino' },
    { value: 'gorgonzola', label: 'Gorgonzola' },
    { value: 'ricotta', label: 'Ricotta' },
    { value: 'burro', label: 'Burro' },
    { value: 'formaggio-spalmabile', label: 'Formaggio spalmabile' },
    { value: 'mascarpone', label: 'Mascarpone' },
    { value: 'fontina', label: 'Fontina' },
    { value: 'taleggio', label: 'Taleggio' },
    { value: 'grana-padano', label: 'Grana Padano' },
    { value: 'caciocavallo', label: 'Caciocavallo' },
  ],
};

// --- STATI ---
const selectedCategory = ref('frutta');
const formOutput = ref('');
const eventLog = ref([]);

// Stati per Nested
const comuniData = ref([]);
const regioniUniche = ref([]);
const comuniFiltrati = ref([]);
const comuneDisabled = ref(true);
const comuneValue = ref('');

// --- LOGICA ---

// Funzione Source Asincrona
const asyncSearchFunction = (query, populateResults) => {
  setTimeout(() => {
    const lowerQuery = query.toLowerCase();
    const results = cities.filter((city) => city.label.toLowerCase().includes(lowerQuery));
    populateResults(results);
  }, 800);
};

// Caricamento dati iniziali
onMounted(() => {
  fetch('/assets/comuni.json')
    .then((response) => response.json())
    .then((data) => {
      comuniData.value = data;
      const regioniSet = new Set(data.map((item) => item.regione));
      regioniUniche.value = Array.from(regioniSet)
        .sort()
        .map((regione) => ({
          value: regione.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
          label: regione,
        }));
    })
    .catch((error) => console.error('Errore comuni:', error));
});

const handleRequiredSubmit = () => {
  alert('Form valido!');
};

const handleFormSubmit = (e) => {
  const formData = new FormData(e.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });
  formOutput.value = JSON.stringify(data, null, 2);
};

const handleRegioneChange = (e) => {
  const selectedValue = e.detail.value;

  if (selectedValue) {
    const selectedRegione = regioniUniche.value.find((r) => r.value === selectedValue);
    const regioneLabel = selectedRegione ? selectedRegione.label : selectedValue;

    comuneDisabled.value = false;
    comuneValue.value = ''; // Reset

    comuniFiltrati.value = comuniData.value
      .filter((item) => item.regione === regioneLabel)
      .map((item) => ({
        value: item.comune.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
        label: item.comune,
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  } else {
    comuneDisabled.value = true;
    comuniFiltrati.value = [];
    comuneValue.value = '';
  }
};

const logEvent = (msg) => {
  eventLog.value.push(msg);
};
</script>
