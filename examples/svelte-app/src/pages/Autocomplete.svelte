<script>
  import { onMount } from 'svelte';

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
    { value: 'valle-aosta', label: "Valle d'Aosta" },
    { value: 'veneto', label: 'Veneto' },
  ];

  let formOutput = '';

  // Dati
  let comuniData = [];
  let regioniUniche = [];

  // Stato per logica nested
  let comuniFiltrati = [];
  let comuneDisabilitato = true;
  let comuneValore = ''; // Per il reset visivo

  onMount(() => {
    fetch('/assets/comuni.json')
      .then((response) => response.json())
      .then((data) => {
        comuniData = data;
        const regioniSet = new Set(data.map((item) => item.regione));
        regioniUniche = Array.from(regioniSet)
          .sort()
          .map((regione) => ({
            value: regione.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
            label: regione,
          }));
        // Svelte aggiornerà automaticamente <it-autocomplete source={regioniUniche}>
      });
  });

  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    formOutput = JSON.stringify(data, null, 2);
  }

  function handleRegioneChange(e) {
    const selectedValue = e.detail.value;

    if (selectedValue) {
      const selectedRegione = regioniUniche.find((r) => r.value === selectedValue);
      const regioneLabel = selectedRegione ? selectedRegione.label : selectedValue;

      comuneDisabilitato = false;
      comuneValore = ''; // Reset one-way

      // Aggiorniamo la variabile reattiva, Svelte passerà il nuovo array al componente
      comuniFiltrati = comuniData
        .filter((item) => item.regione === regioneLabel)
        .map((item) => ({
          value: item.comune.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
          label: item.comune,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));
    } else {
      comuneDisabilitato = true;
      comuniFiltrati = [];
      comuneValore = '';
    }
  }
</script>

<div class="container my-4">
  <h1>it-autocomplete</h1>

  <section class="example-section">
    <h2>Esempio di autocompletamento</h2>
    <p>Passaggio diretto dell'array alla proprietà source (senza JSON.stringify)</p>
    <div class="form-group">
      <it-autocomplete name="regione" placeholder="Seleziona una regione..." source={italianRegions}>
        <span slot="label">Regione</span>
      </it-autocomplete>
    </div>
  </section>

  <section class="example-section">
    <h2>Valore predefinito (stringa)</h2>
    <it-autocomplete name="regione-default" default-value="lombardia" source={italianRegions}>
      <span slot="label">Regione</span>
    </it-autocomplete>
  </section>

  <section class="example-section">
    <h2>Valore predefinito (oggetto)</h2>
    <it-autocomplete
      name="regione-default-obj"
      defaultValue={{ value: 'lazio', label: 'Lazio' }}
      source={italianRegions}
    >
      <span slot="label">Regione</span>
    </it-autocomplete>
  </section>

  <section class="example-section">
    <h2>Integrazione con form</h2>
    <form on:submit={handleFormSubmit}>
      <div class="row">
        <div class="col-12 col-md-6 mb-3">
          <it-autocomplete name="regione" required source={italianRegions}>
            <span slot="label">Regione</span>
          </it-autocomplete>
        </div>
      </div>
      <it-button type="submit" variant="primary">Invia</it-button>
      <it-button type="reset" variant="secondary" class="ms-2">Reset</it-button>
      {#if formOutput}
        <div class="mt-3">
          <div class="alert alert-success" role="alert">
            <strong>Form valido!</strong> Dati inviati:
            <pre>{formOutput}</pre>
          </div>
        </div>
      {/if}
    </form>
  </section>

  <section class="example-section">
    <h2>Regioni e Comuni</h2>
    <p>Gestione reattiva dello stato (senza manipolazione DOM manuale)</p>
    <div class="row">
      <div class="col-12 col-md-6 mb-3">
        <it-autocomplete
          name="regione"
          source={regioniUniche}
          on:it-change={handleRegioneChange}
        >
          <span slot="label">Regione</span>
        </it-autocomplete>
      </div>
      <div class="col-12 col-md-6">
        <it-autocomplete
          name="comune"
          disabled={comuneDisabilitato}
          min-length="2"
          source={comuniFiltrati}
          value={comuneValore}
        >
          <span slot="label">Comune</span>
        </it-autocomplete>
      </div>
    </div>
  </section>
</div>
