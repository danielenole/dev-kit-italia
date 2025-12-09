# \<it-modal>

Web component per finestre modali del Design system .italia.

## Installazione

```bash
npm i @italia/modal
```

## Utilizzo

```html
<script type="module">
  import '@italia/modal';
</script>

<it-modal id="my-modal" modal-title="Titolo modale">
  <p>Contenuto della modale</p>
  <it-button slot="footer" variant="outline-primary">Annulla</it-button>
  <it-button slot="footer" variant="primary">Conferma</it-button>
</it-modal>

<it-button onclick="document.getElementById('my-modal').open = true">
  Apri modale
</it-button>
```

## Attributi

| Attributo | Tipo | Default | Descrizione |
|-----------|------|---------|-------------|
| `open` | `boolean` | `false` | Stato aperto/chiuso della modale |
| `modal-title` | `string` | `''` | Titolo della modale |
| `size` | `'sm' \| 'lg' \| 'xl'` | `''` | Dimensione della modale |
| `position` | `'center' \| 'left' \| 'right'` | `'center'` | Posizionamento della modale |
| `scrollable` | `boolean` | `false` | Abilita scroll interno |
| `static-backdrop` | `boolean` | `false` | Disabilita chiusura su click backdrop |
| `close-button` | `boolean` | `true` | Mostra il pulsante di chiusura |
| `variant` | `'alert' \| 'popconfirm' \| 'link-list'` | `''` | Variante della modale |

## Eventi

| Evento | Descrizione |
|--------|-------------|
| `it-modal-show` | Emesso prima dell'apertura |
| `it-modal-shown` | Emesso dopo l'apertura |
| `it-modal-hide` | Emesso prima della chiusura |
| `it-modal-hidden` | Emesso dopo la chiusura |

## Test

```bash
npm run test
```

## Linting

```bash
npm run lint
```

## Accessibilità

Il componente implementa le linee guida WAI-ARIA per i dialog modali:
- Focus trap automatico
- Supporto tastiera (Tab, Shift+Tab, Escape)
- Attributi `aria-modal`, `aria-labelledby`, `aria-describedby`
- Ripristino del focus all'elemento di origine alla chiusura
