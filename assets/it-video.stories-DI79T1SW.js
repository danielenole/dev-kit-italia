import{x as i,o as t,E as v}from"./iframe-C4eBJZ64.js";import"./preload-helper-Dp1pzeXC.js";const J={"Audio Player":"Lettore audio","Video Player":"Lettore video",Play:"Play",Pause:"Pausa",Replay:"Replay","Current Time":"Orario attuale",Duration:"Durata","Remaining Time":"Tempo rimanente","Stream Type":"Tipo di streaming",LIVE:"LIVE",Loaded:"Caricato",Progress:"Stato","Progress Bar":"Barra di avanzamento","progress bar timing: currentTime={1} duration={2}":"{1} di {2}",Fullscreen:"Schermo intero","Exit Fullscreen":"Chiudi Schermo intero",Mute:"Disattiva l’audio",Unmute:"Attiva l’audio","Playback Rate":"Velocità di riproduzione",Subtitles:"Sottotitoli","subtitles off":"Senza sottotitoli",Captions:"Sottotitoli non udenti","captions off":"Senza sottotitoli non udenti",Chapters:"Capitolo",Descriptions:"Descrizioni","descriptions off":"Descrizioni disattivate","Audio Track":"Traccia audio","Volume Level":"Livello del volume","You aborted the media playback":"La riproduzione del filmato è stata interrotta.","A network error caused the media download to fail part-way.":"Il download del filmato è stato interrotto a causa di un problema rete.","The media could not be loaded, either because the server or network failed or because the format is not supported.":"Il filmato non può essere caricato a causa di un errore nel server o nella rete o perché il formato non viene supportato.","The media playback was aborted due to a corruption problem or because the media used features your browser did not support.":"La riproduzione del filmato è stata interrotta a causa di un file danneggiato o per l’utilizzo di impostazioni non supportate dal browser.","No compatible source was found for this media.":"Non ci sono fonti compatibili per questo filmato.","The media is encrypted and we do not have the keys to decrypt it.":"Il contenuto multimediale è criptato e non disponiamo delle chiavi per decifrarlo.","Play Video":"Riproduci il video",Close:"Chiudi","Close Modal Dialog":"Chiudi la finestra di dialogo","Modal Window":"Finestra di dialogo","This is a modal window":"Questa è una finestra di dialogo","This modal can be closed by pressing the Escape key or activating the close button.":"Questa finestra di dialogo può essere chiusa premendo sul tasto Esc o attivando il pulsante di chiusura.",", opens captions settings dialog":", aprire i parametri della trascrizione dei sottotitoli",", opens subtitles settings dialog":", aprire i parametri dei sottotitoli",", opens descriptions settings dialog":", aprire i parametri delle descrizioni",", selected":", selezionato","captions settings":"Parametri sottotitoli non udenti","subtitles settings":"Parametri sottotitoli","descriptions settings":"Parametri descrizioni",Text:"Testo",White:"Bianco",Black:"Nero",Red:"Rosso",Green:"Verde",Blue:"Blu",Yellow:"Giallo",Magenta:"Magenta",Cyan:"Ciano",Background:"Sfondo",Window:"Finestra",Transparent:"Trasparente","Semi-Transparent":"Semi-Trasparente",Opaque:"Opaco","Font Size":"Dimensione dei caratteri","Text Edge Style":"Stile dei bordi del testo",None:"Nessuno",Uniform:"Uniforme","Drop shadow":"Ombra","Font Family":"Carattere","Proportional Sans-Serif":"Sans-Serif proporzionale","Monospace Sans-Serif":"Sans-Serif monospaziato","Proportional Serif":"Serif proporzionale","Monospace Serif":"Serif monospaziato","Small Caps":"Maiuscoletto",Reset:"Reinizializza","restore all settings to the default values":"Ripristina i valori predefiniti per tutti i parametri",Done:"Fatto","Caption Settings Dialog":"Finestra di dialogo dei parametri della trascrizione dei sottotitoli","Beginning of dialog window. Escape will cancel and close the window.":"Inizio della finestra di dialogo. Il tasto Esc annullerà l’operazione e chiuderà la finestra.","End of dialog window.":"Fine della finestra di dialogo.","{1} is loading.":"{1} in fase di caricamento.","Exit Picture-in-Picture":"Esci dalla modalità Picture-in-Picture","Picture-in-Picture":"Picture-in-Picture",Color:"Colore",Opacity:"Opacità","Text Background":"Sfondo testo","Caption Area Background":"Sfondo area sottotitoli","Skip forward {1} seconds":"Avanti {1} secondi","Skip backward {1} seconds":"Indietro {1} secondi"},U={$code:"it",$name:"Italiano",$dir:"ltr",video_consent_icon:"it-video",video_consent_text:'Accetta i cookie di YouTube per vedere il video. Puoi gestire le preferenze nella <a href="#" class="text-white">cookie policy</a>.',video_consent_accept:"Accetta",video_consent_remember:"Ricorda per tutti i video"},o=e=>i`
  <it-video
    src="${t(e.src)}"
    poster="${t(e.poster)}"
    type="${t(e.type)}"
    options="${e.options?JSON.stringify(e.options):v}"
    translations="${e.translations?JSON.stringify(e.translations):v}"
    lang="${t(e.lang)}"
    track="${e.track?JSON.stringify(e.track):v}"
    >${e.slot}</it-video
  >
`,a={title:"Componenti/Video",tags:["autodocs","a11y-ok","web-component"],component:"it-video",args:{src:"https://vjs.zencdn.net/v/oceans.webm",poster:"",type:"video/mp4",options:void 0,track:[],consentOptions:{},lang:"it",translations:{it:J},initPlugins:""},argTypes:{src:{control:"text",description:"Sorgente del video"},poster:{control:"text",description:"Sorgente dell'immagine di anteprima"},type:{control:"text",description:"Tipo del video.",table:{defaultValue:{summary:"video/mp4"}}},options:{control:"object",description:"Opzioni per il video player. https://videojs.com/guides/options/ qui tutte le opzioni disponibili."},track:{control:"text",table:{defaultValue:{summary:'[{kind:"chapter", src: "/path/file.ext", srclang:"it", label: "Capitoli", default: true }]'}},description:"Tracce per didascalie, sottotitoli, capitoli e descrizioni. Nel campo `kind` è necessario indicare la tipologia di traccia fra <ul><li>captions</li><li>subtitles</li><li>description</li><li>chapters</li><li>metadata</li></ul>"},consentOptions:{name:"consent-options",control:"object",description:"Oggetto per la configurazione del consenso dei cookie. <br/>Di default viene salvata una variabile nel localstorage con lo stesso nome del type del video, ma è possibile personalizzarla passando in `consentOptions` un valore per `consentKey`. <br/>Inoltre, quando viene dato il consenso permanente per i cookie, è possibile personalizzare il comportamento passando in questo oggetto due funzioni specifiche per la gestione della memorizzazione del consenso: `onAccept` e `isAccepted`.",table:{defaultValue:{summary:"{}"}}},lang:{control:"select",options:["it","en","fr","de","es"],description:"Lingua del player di cui verrano usate le corrispondenti 'translations'",table:{defaultValue:{summary:"it"}}},translations:{control:"object",description:"Traduzioni del player per le diverse lingue. Di base è disponibile solo la lingua it. Usare questa prop per aggiungere le traduzioni in altre lingue. "},initPlugins:{name:"init-plugins",control:"text",description:"Nome della propria funzione presente nella window che verrà invocata da video.js per inizializzare eventuali plugin aggiuntivi definiti dallo sviluppatore."}},decorators:[e=>i`<div class="sbdocs-video-container">${e()}</div>`],parameters:{docs:{source:{excludeDecorators:!0},description:{component:`
<Description>Componente Video Player.</Description>
<br/><br/>
Il tag video HTML5 consente di incorporare video all’interno di una pagina web senza dover utilizzare plugin esterni.
Questo componente utilizza la libreria [video.js](https://videojs.com/) per implementare funzionalità avanzate come il supporto a diversi formati video, la personalizzazione dell’interfaccia utente e l’integrazione con API esterne.

<div class="callout callout-success"><div class="callout-inner"><div class="callout-title"><span class="text">Accessibilità</span></div>
<p>Le persone che utilizzano le tecnologie assistive possono agevolmente accedere ai comandi di questo player video, tuttavia per rendere accessibile un contenuto video è necessario soddisfare i Criteri di Successo contenuti nelle <a href="https://www.w3.org/Translations/WCAG21-it/#time-based-media">linee guida 1.2 Media temporizzati delle WCAG (versione corrente)</a>. In particolare:</p>
<ul>
<li>Se il contenuto è costituito da “solo video” oppure “solo audio”, è necessario fornire una trascrizione (Criterio di Successo 1.2.1)</li>
<li>Fornire sempre sottotitoli (Criterio di Successo 1.2.2).</li>
<li>Fornire audio descrizioni quando sono presenti scene o contenuti non descritte dalla traccia audio primaria. (Criteri di Successo 1.2.3 e 1.2.5)</li>
</ul></div></div>
`}}}},n={...a,name:"Esempio interattivo",tags:["!autodocs","!dev"],parameters:{docs:{source:{excludeDecorators:!0},canvas:{sourceState:"shown"}}},render:e=>i` ${o({...e})}`},r={name:"Come usarlo",tags:["!dev"],render:()=>i`<div class="hide-preview"></div>`,parameters:{viewMode:"docs",docs:{description:{story:`
Per aggiungere un video, è sufficiente utilizzare il componente \`<it-video />\` ed i relativi attributi per gestirne la sorgente, e le opzioni del video player. - Usa l'attributo \`options\` per passare
al player le opzioni definite qui [https://videojs.com/guides/options/](https://videojs.com/guides/options/).

- Usa l'attributo \`translations\` per definire le traduzioni del player diverse dalla lingua italiana, o per
sovrascrivere le traduzioni italiane pre-impostate.

### Font per le icone del player
Per utilizzare le icone del player, è necessario includere il font \`VideoJS.woff\` nella tua applicazione. Puoi farlo aggiungendo il css compilato di dev-kit-italia nel tuo sorgente HTML:

\`\`\`html
<link rel="stylesheet" href="dev-kit-italia/dist/styles.css" />
\`\`\`
oppure se stai usando SCSS puoi definire il font direttamente nel tuo file SCSS:

\`\`\`scss
@font-face {
  font-family: VideoJS;
  src: url('./assets/fonts/VideoJS.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
\`\`\`
copiando l'asset \`VideoJS.woff\` nella tua cartella assets/fonts (lo puoi copiare dal package dev-kit-italia).


### Plugin
Esistono numerosi plugin disponibili per Video.js, che consentono di aggiungere nuove funzionalità, come la riproduzione di video in VR, l’analisi delle statistiche di visualizzazione del video, le utility per la UI mobile e molto altro ancora.

#### Utilizzo di ulteriori plugin
<Description> (Ad esempio il plugin per l'embed di Vimeo)</Description>
Con l'attributo  \`init-plugins\` è possibile passare al componente \`<it-video>\` il nome della propria funzione di inizializzazione dei plugin, che deve essere definita nella window.

Esempio:

\`\`\`html
<it-video ...... init-plugins="myInitPlugin"></it-video>
<script> const myInitPlugin = (videojs)=>{ /*my code*/ }<\/script>
\`\`\`
`}}}},s={...a,name:"Con trascrizione",render:e=>i` ${o({...e,translations:void 0,slot:i`<it-accordion class="vjs-transcription">
        <it-accordion-item>
          <span slot="heading" id="transcription-head4">Trascrizione</span>
          <div slot="content">
            Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
            facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
          </div>
        </it-accordion-item>
      </it-accordion>`})}`},l={...a,name:"Sottotitoli, didascalie, capitoli e descrizioni",parameters:{docs:{description:{story:"\nTramite l'attributo `track` puoi aggiungere del testo accessibile presente in un file testuale; l’unico formato supportato è WebVTT.\nL'attributo `track` accetta un elenco di valori con il seguente formato:\n\n```js\n[{kind:'captions', src:'https://example.com/captions.vtt', srclang:'it', label:'Italiano', default:true}, ...]\n```\n\ndove ogni singolo elemento rappresenta un file di sottotitoli, didascalie, capitoli o descrizioni.\n\nValorizzando opportunamente la proprietà `kind` puoi specificare se il file associato contiene:\n- `captions`: per i sottotitoli (trascrizione dei dialoghi)\n- `subtitles`: per le didascalie (trascrizione dei dialoghi, degli effetti sonori, trascrizione del tipo di emozioni rappresentate dalla musica, ecc)\n- `chapters`: per i capitoli\n- `descriptions`: per le descrizioni (testo che descrive il contenuto visivo del video, utile per le persone con disabilità visive)\n- `metadata`: per i metadati (informazioni aggiuntive sul video, come la durata, la risoluzione, ecc)\n\nL'attributo `default` indica se il file associato è quello predefinito da utilizzare di default quando il video viene caricato.\n\nApprofondisci l’argomento consultando la documentazione di [VideoJS](https://videojs.com/guides/text-tracks/) (Inglese).\n\nDi seguito un esempio d’uso delle didascalie (kind:\"captions\") in diverse lingue.\n"}}},render:e=>i`${o({...e,src:"./assets/video/ElephantsDream.mp4",track:[{kind:"captions",src:"./assets/video/subtitles-it.vtt",srclang:"it",label:"Italiano",default:!0},{kind:"captions",src:"./assets/video/subtitles-en.vtt",srclang:"en",label:"English"},{kind:"captions",src:"./assets/video/subtitles-es.vtt",srclang:"es",label:"Español"}],translations:void 0})}`},d={...a,name:"Immagine di anteprima",parameters:{docs:{description:{story:`
Per aggiungere un’immagine di anteprima come copertina al video occorre utilizzare l’attributo \`poster\` inizializzato con la url dell’anteprima.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Attenzione</span></div>
<p>Le immagini caricate come copertina devono rispettare la stessa \`aspect ratio\` del video per una corretta visualizzazione.
</p></div></div>

`}}},render:e=>i`${o({...e,src:"./assets/video/ElephantsDream.mp4",poster:"./assets/video/ElephantsDream.mp4-poster21.jpg",translations:void 0})}`},c={...a,parameters:{docs:{description:{story:`
Servire i video tramite dei file in formato mp4 o webm (che sono i formati più supportati) non è la migliore soluzione in termini di performance e di ottimizzazione della banda.

Per garantire una buona esperienza utente è fondamentale scegliere il formato di riproduzione più adatto.

In questo contesto, i formati di streaming HLS e DASH offrono importanti vantaggi rispetto al tradizionale file MP4.

L’uso dei formati di streaming permette una riproduzione fluida dei video online grazie alla loro
capacità di adattarsi alla larghezza di banda disponibile. In questo modo si evitano interruzioni o rallentamenti durante la visualizzazione, migliorando l’esperienza utente. Inoltre, questi formati consentono di distribuire il contenuto su diverse piattaforme e dispositivi, aumentando la portabilità del video.

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text"><h5 id="tip">Tip</h5></span></div><p>FFmpeg è uno strumento di conversione multimediale open-source che consente di convertire facilmente i
file MP4 in formati adattivi come HLS o DASH, ti permette la conversione del video MP4 in un formato a
bitrate variabile per adattare la qualità del video alle diverse velocità di connessione degli utenti.
Approfondisci su <a href="https://ffmpeg.org/">FFmpeg</a>.</p></div></div>



Le playlist HLS e DASH possono essere riprodotte su più domini condividendo solo l’URL.
Tuttavia, a causa delle restrizioni imposte dalle politiche di sicurezza del browser, l’utilizzo di queste playlist in domini diversi da quello originale può causare errori CORS (Cross-Origin Resource Sharing).
In altre parole, il browser può rifiutare l’accesso alle risorse audio e video, impedendo la corretta riproduzione del contenuto multimediale.

Per superare questo problema, è necessario configurare correttamente il server che fornisce le risorse audio e video, consentendo l’accesso a domini esterni tramite le policy CORS.

Di seguito un esempio in formato MPEG-DASH:
`}}},render:e=>i`${o({...e,src:"./assets/video/ElephantsDreamDASH/ElephantsDream.mp4.mpd",type:"application/dash+xml",poster:"./assets/video/ElephantsDream.mp4-poster16.gif",track:[{kind:"captions",src:"./assets/video/subtitles-it.vtt",srclang:"it",label:"Italiano",default:!0},{kind:"captions",src:"./assets/video/subtitles-en.vtt",srclang:"en",label:"English"},{kind:"captions",src:"./assets/video/subtitles-es.vtt",srclang:"es",label:"Español"},{kind:"chapters",src:"./assets/video/chapters-it.vtt",srclang:"it",label:"Italiano"},{kind:"chapters",src:"./assets/video/chapters-en.vtt",srclang:"en",label:"English"},{kind:"chapters",src:"./assets/video/chapters-es.vtt",srclang:"es",label:"Español"}],translations:void 0})}`},p={...a,name:"Gestire più tracce audio",parameters:{docs:{description:{story:`
L’uso di più tracce audio nei video è una buona tecnica per migliorare l’accessibilità dei contenuti multimediali.
Ad esempio, è possibile creare una traccia audio aggiuntiva che descrive in dettaglio le immagini e le azioni che si svolgono nel video, per aiutare le persone non vedenti a comprendere il contenuto visivo.
Inoltre, l’aggiunta di tracce audio in lingue diverse consente di offrire il video in più lingue.

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Tieni presente che</span></div>
<p>Video.js offre un’implementazione cross-browser delle tracce audio, a condizione che la
tecnologia di riproduzione supporti le tracce audio. Le tracce audio per i file mp4 sono
supportate solo da Safari, altri browser non supportano la riproduzione mp4 con più tracce
audio. L’unico modo per fornire l’audio multi-traccia cross-browser è l’uso dei formati
HLS e/o DASH.
Approfondisci su <a href="https://videojs.com/guides/audio-tracks/">Video.js</a></p>
</div></div>


Per vedere tutte le opzioni disponibili, consultare la documentazione di [VideoJS](https://videojs.com/guides/options/).

Di seguito un esempio in formato HLS multilingua.
`}}},render:e=>i`${o({...e,src:"./assets/video/ElephantsDreamHLS/ElephantsDream.mp4.m3u8",type:"application/x-mpegURL",poster:"./assets/video/ElephantsDream.mp4-poster21.jpg",translations:void 0})}`},u={...a,name:"Embed da piattaforme terze",parameters:{docs:{description:{story:`
Oltre a consentire la riproduzione di video direttamente sulle proprie pagine web, il player video.js offre anche la possibilità di incorporare video provenienti da altre piattaforme come YouTube.

Questa funzionalità consente di sfruttare i video già disponibili su queste piattaforme, senza doverli caricare sul proprio sito web.
Tuttavia, è importante tenere in considerazione la questione della privacy: quando si incorporano video di terze parti, si può finire per condividere con queste piattaforme i dati degli utenti che visualizzano i video, come ad esempio le informazioni sulla navigazione o l’indirizzo IP.
È quindi importante l’utilizzo di questa funzionalità assieme al componente di accettazione del consenso per garantire la protezione della privacy degli utenti.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Nota</span></div>
<p>Gli esempi che seguono fanno tutti riferimento alla piattaforma di terze parti YouTube.</p>
</div></div>

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Responsabilità della privacy</span></div>
<p>Coinvolgi il Responsabile per la protezione dei dati (RDP/DPO) della tua amministrazione e ricordati di aggiornare la cookie policy del sito. Designers Italia mette a disposizione il [kit Privacy](https://designers.italia.it/risorse-per-progettare/organizzare/privacy/) per approfondire questi temi e in particolare uno strumento dedicato alla redazione della Cookie policy che trovi in [questa azione del kit](https://designers.italia.it/risorse-per-progettare/organizzare/privacy/rispetta-la-privacy-per-il-go-live-di-un-sito/).</p>
</div></div>

#### Attivazione dell’overlay di consenso
L’utilizzo di un overlay per il consenso è una soluzione comune per garantire la conformità alla normativa sulla privacy in materia di cookie e tracciamento degli utenti.
L’overlay per il consenso consente di informare l’utente sui cookie utilizzati e di ottenere il suo consenso in modo esplicito e consapevole alla riproduzione del video prima dell’installazione di qualunque cookie.

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Obblighi</span></div>
<p>Per questo la Pubblica Amministrazione che fa uso di servizi di terze parti come YouTube deve necessariamente specificare l’utilizzo di cookie di tracciamento da parte di piattaforme di terze parti, inserendo inoltre il link alla propria cookie policy all’interno dell’overlay (dove adesso c’è il link a ‘#’).
Nella sezione seguente vengono illustrate le funzioni per la gestione delle preferenze con JavaScript.</p>
</div></div>

L'overlay di consenso viene automaticamente istanziato dal componente se si tratta di un video Youtube.

Per personalizzare il comportamento sulle scelte effettuate nell'overlay di consenso, è possibile passare al componente \`<it-video>\` l'attributo \`consentOptions\` con il seguente formato:

\`\`\`js
consentOptions = {
    consentKey?: string; //nome della variabile da usare nel localStorage per il salvataggio della preferenza sul consenso. Di default è 'youtube' per i video di Youtube.
    onAccept?: Function; //(accepted, consentKey)=>{} - funzione che viene invocata quando si accetta il consenso permanente per un video di questa tipologia. Se presente, non viene gestita la preferenza nel localstorage, ma è compito dello sviluppatore implementare la logica di salvataggio delle preferenze
    isAccepted?: Function; // (consentKey)=>{} - funzione che ritorna un valore booleano (true/false), che indica se l'utente ha gia accettato il consenso permanente per tutti i video di quel tipo.
  };
\`\`\`

Di default sono gia previsti testi e icona, ma è possibile (ed è suggerito) modificare il testo con il link alla pagina della privacy policy.
I testi e l'icona sono modificabili attraverso il sistema di traduzioni. Vedi la guida dedicata.
`}}},render:e=>i`${o({...e,src:"https://youtu.be/_0j7ZQ67KtY",type:void 0})}`},m={name:"i18n",tags:["!dev"],render:()=>i`<div class="hide-preview"></div>`,parameters:{viewMode:"docs",docs:{description:{story:`
Oltre all'attributo \`translations\` che permette di modificare le traduzioni interne al player, sono disponibili ulteriori stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\`\`\`js
const translation = {
  ${JSON.stringify(U).replaceAll('{"','"').replaceAll('",',`",
	`).replaceAll('"}','"')}
}
\`\`\`
`}}}};var g,z,f;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  ...meta,
  name: 'Esempio interattivo',
  tags: ['!autodocs', '!dev'],
  parameters: {
    docs: {
      source: {
        excludeDecorators: true
      },
      canvas: {
        sourceState: 'shown'
      }
    }
  },
  render: params => html\` \${renderComponent({
    ...params
  })}\`
}`,...(f=(z=n.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};var b,h,y;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: 'Come usarlo',
  tags: ['!dev'],
  render: () => html\`<div class="hide-preview"></div>\`,
  parameters: {
    viewMode: 'docs',
    // assicura che si apra la tab Docs anziché Canvas
    docs: {
      description: {
        story: \`
Per aggiungere un video, è sufficiente utilizzare il componente \\\`<it-video />\\\` ed i relativi attributi per gestirne la sorgente, e le opzioni del video player. - Usa l'attributo \\\`options\\\` per passare
al player le opzioni definite qui [https://videojs.com/guides/options/](https://videojs.com/guides/options/).

- Usa l'attributo \\\`translations\\\` per definire le traduzioni del player diverse dalla lingua italiana, o per
sovrascrivere le traduzioni italiane pre-impostate.

### Font per le icone del player
Per utilizzare le icone del player, è necessario includere il font \\\`VideoJS.woff\\\` nella tua applicazione. Puoi farlo aggiungendo il css compilato di dev-kit-italia nel tuo sorgente HTML:

\\\`\\\`\\\`html
<link rel="stylesheet" href="dev-kit-italia/dist/styles.css" />
\\\`\\\`\\\`
oppure se stai usando SCSS puoi definire il font direttamente nel tuo file SCSS:

\\\`\\\`\\\`scss
@font-face {
  font-family: VideoJS;
  src: url('./assets/fonts/VideoJS.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
\\\`\\\`\\\`
copiando l'asset \\\`VideoJS.woff\\\` nella tua cartella assets/fonts (lo puoi copiare dal package dev-kit-italia).


### Plugin
Esistono numerosi plugin disponibili per Video.js, che consentono di aggiungere nuove funzionalità, come la riproduzione di video in VR, l’analisi delle statistiche di visualizzazione del video, le utility per la UI mobile e molto altro ancora.

#### Utilizzo di ulteriori plugin
<Description> (Ad esempio il plugin per l'embed di Vimeo)</Description>
Con l'attributo  \\\`init-plugins\\\` è possibile passare al componente \\\`<it-video>\\\` il nome della propria funzione di inizializzazione dei plugin, che deve essere definita nella window.

Esempio:

\\\`\\\`\\\`html
<it-video ...... init-plugins="myInitPlugin"></it-video>
<script> const myInitPlugin = (videojs)=>{ /*my code*/ }<\/script>
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,k,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  ...meta,
  name: 'Con trascrizione',
  render: params => html\` \${renderComponent({
    ...params,
    translations: undefined,
    slot: html\`<it-accordion class="vjs-transcription">
        <it-accordion-item>
          <span slot="heading" id="transcription-head4">Trascrizione</span>
          <div slot="content">
            Vestibulum hendrerit ultrices nibh, sed pharetra lacus ultrices eget. Morbi et ipsum et sapien dapibus
            facilisis. Integer eget semper nibh. Proin enim nulla, egestas ac rutrum eget, ullamcorper nec turpis.
          </div>
        </it-accordion-item>
      </it-accordion>\`
  })}\`
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var D,P,C;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  ...meta,
  name: 'Sottotitoli, didascalie, capitoli e descrizioni',
  parameters: {
    docs: {
      description: {
        story: \`
Tramite l'attributo \\\`track\\\` puoi aggiungere del testo accessibile presente in un file testuale; l’unico formato supportato è WebVTT.
L'attributo \\\`track\\\` accetta un elenco di valori con il seguente formato:

\\\`\\\`\\\`js
[{kind:'captions', src:'https://example.com/captions.vtt', srclang:'it', label:'Italiano', default:true}, ...]
\\\`\\\`\\\`

dove ogni singolo elemento rappresenta un file di sottotitoli, didascalie, capitoli o descrizioni.

Valorizzando opportunamente la proprietà \\\`kind\\\` puoi specificare se il file associato contiene:
- \\\`captions\\\`: per i sottotitoli (trascrizione dei dialoghi)
- \\\`subtitles\\\`: per le didascalie (trascrizione dei dialoghi, degli effetti sonori, trascrizione del tipo di emozioni rappresentate dalla musica, ecc)
- \\\`chapters\\\`: per i capitoli
- \\\`descriptions\\\`: per le descrizioni (testo che descrive il contenuto visivo del video, utile per le persone con disabilità visive)
- \\\`metadata\\\`: per i metadati (informazioni aggiuntive sul video, come la durata, la risoluzione, ecc)

L'attributo \\\`default\\\` indica se il file associato è quello predefinito da utilizzare di default quando il video viene caricato.

Approfondisci l’argomento consultando la documentazione di [VideoJS](https://videojs.com/guides/text-tracks/) (Inglese).

Di seguito un esempio d’uso delle didascalie (kind:"captions") in diverse lingue.
\`
      }
    }
  },
  render: params => html\`\${renderComponent({
    ...params,
    src: './assets/video/ElephantsDream.mp4',
    track: [{
      kind: 'captions',
      src: './assets/video/subtitles-it.vtt',
      srclang: 'it',
      label: 'Italiano',
      default: true
    }, {
      kind: 'captions',
      src: './assets/video/subtitles-en.vtt',
      srclang: 'en',
      label: 'English'
    }, {
      kind: 'captions',
      src: './assets/video/subtitles-es.vtt',
      srclang: 'es',
      label: 'Español'
    }],
    translations: undefined
  })}\`
}`,...(C=(P=l.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var E,T,q;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  ...meta,
  name: 'Immagine di anteprima',
  parameters: {
    docs: {
      description: {
        story: \`
Per aggiungere un’immagine di anteprima come copertina al video occorre utilizzare l’attributo \\\`poster\\\` inizializzato con la url dell’anteprima.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Attenzione</span></div>
<p>Le immagini caricate come copertina devono rispettare la stessa \\\`aspect ratio\\\` del video per una corretta visualizzazione.
</p></div></div>

\`
      }
    }
  },
  render: params => html\`\${renderComponent({
    ...params,
    src: './assets/video/ElephantsDream.mp4',
    poster: './assets/video/ElephantsDream.mp4-poster21.jpg',
    translations: undefined
  })}\`
}`,...(q=(T=d.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var A,I,L;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  ...meta,
  // name: 'Streaming',
  parameters: {
    docs: {
      description: {
        story: \`
Servire i video tramite dei file in formato mp4 o webm (che sono i formati più supportati) non è la migliore soluzione in termini di performance e di ottimizzazione della banda.

Per garantire una buona esperienza utente è fondamentale scegliere il formato di riproduzione più adatto.

In questo contesto, i formati di streaming HLS e DASH offrono importanti vantaggi rispetto al tradizionale file MP4.

L’uso dei formati di streaming permette una riproduzione fluida dei video online grazie alla loro
capacità di adattarsi alla larghezza di banda disponibile. In questo modo si evitano interruzioni o rallentamenti durante la visualizzazione, migliorando l’esperienza utente. Inoltre, questi formati consentono di distribuire il contenuto su diverse piattaforme e dispositivi, aumentando la portabilità del video.

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text"><h5 id="tip">Tip</h5></span></div><p>FFmpeg è uno strumento di conversione multimediale open-source che consente di convertire facilmente i
file MP4 in formati adattivi come HLS o DASH, ti permette la conversione del video MP4 in un formato a
bitrate variabile per adattare la qualità del video alle diverse velocità di connessione degli utenti.
Approfondisci su <a href="https://ffmpeg.org/">FFmpeg</a>.</p></div></div>



Le playlist HLS e DASH possono essere riprodotte su più domini condividendo solo l’URL.
Tuttavia, a causa delle restrizioni imposte dalle politiche di sicurezza del browser, l’utilizzo di queste playlist in domini diversi da quello originale può causare errori CORS (Cross-Origin Resource Sharing).
In altre parole, il browser può rifiutare l’accesso alle risorse audio e video, impedendo la corretta riproduzione del contenuto multimediale.

Per superare questo problema, è necessario configurare correttamente il server che fornisce le risorse audio e video, consentendo l’accesso a domini esterni tramite le policy CORS.

Di seguito un esempio in formato MPEG-DASH:
\`
      }
    }
  },
  render: params => html\`\${renderComponent({
    ...params,
    src: './assets/video/ElephantsDreamDASH/ElephantsDream.mp4.mpd',
    type: 'application/dash+xml',
    poster: './assets/video/ElephantsDream.mp4-poster16.gif',
    track: [{
      kind: 'captions',
      src: './assets/video/subtitles-it.vtt',
      srclang: 'it',
      label: 'Italiano',
      default: true
    }, {
      kind: 'captions',
      src: './assets/video/subtitles-en.vtt',
      srclang: 'en',
      label: 'English'
    }, {
      kind: 'captions',
      src: './assets/video/subtitles-es.vtt',
      srclang: 'es',
      label: 'Español'
    }, {
      kind: 'chapters',
      src: './assets/video/chapters-it.vtt',
      srclang: 'it',
      label: 'Italiano'
    }, {
      kind: 'chapters',
      src: './assets/video/chapters-en.vtt',
      srclang: 'en',
      label: 'English'
    }, {
      kind: 'chapters',
      src: './assets/video/chapters-es.vtt',
      srclang: 'es',
      label: 'Español'
    }],
    translations: undefined
  })}\`
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var V,j,x;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  ...meta,
  name: 'Gestire più tracce audio',
  parameters: {
    docs: {
      description: {
        story: \`
L’uso di più tracce audio nei video è una buona tecnica per migliorare l’accessibilità dei contenuti multimediali.
Ad esempio, è possibile creare una traccia audio aggiuntiva che descrive in dettaglio le immagini e le azioni che si svolgono nel video, per aiutare le persone non vedenti a comprendere il contenuto visivo.
Inoltre, l’aggiunta di tracce audio in lingue diverse consente di offrire il video in più lingue.

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Tieni presente che</span></div>
<p>Video.js offre un’implementazione cross-browser delle tracce audio, a condizione che la
tecnologia di riproduzione supporti le tracce audio. Le tracce audio per i file mp4 sono
supportate solo da Safari, altri browser non supportano la riproduzione mp4 con più tracce
audio. L’unico modo per fornire l’audio multi-traccia cross-browser è l’uso dei formati
HLS e/o DASH.
Approfondisci su <a href="https://videojs.com/guides/audio-tracks/">Video.js</a></p>
</div></div>


Per vedere tutte le opzioni disponibili, consultare la documentazione di [VideoJS](https://videojs.com/guides/options/).

Di seguito un esempio in formato HLS multilingua.
\`
      }
    }
  },
  render: params => html\`\${renderComponent({
    ...params,
    src: './assets/video/ElephantsDreamHLS/ElephantsDream.mp4.m3u8',
    type: 'application/x-mpegURL',
    poster: './assets/video/ElephantsDream.mp4-poster21.jpg',
    translations: undefined
  })}\`
}`,...(x=(j=p.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var O,R,$;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  ...meta,
  name: 'Embed da piattaforme terze',
  parameters: {
    docs: {
      description: {
        story: \`
Oltre a consentire la riproduzione di video direttamente sulle proprie pagine web, il player video.js offre anche la possibilità di incorporare video provenienti da altre piattaforme come YouTube.

Questa funzionalità consente di sfruttare i video già disponibili su queste piattaforme, senza doverli caricare sul proprio sito web.
Tuttavia, è importante tenere in considerazione la questione della privacy: quando si incorporano video di terze parti, si può finire per condividere con queste piattaforme i dati degli utenti che visualizzano i video, come ad esempio le informazioni sulla navigazione o l’indirizzo IP.
È quindi importante l’utilizzo di questa funzionalità assieme al componente di accettazione del consenso per garantire la protezione della privacy degli utenti.

<div class="callout callout-warning"><div class="callout-inner"><div class="callout-title"><span class="text">Nota</span></div>
<p>Gli esempi che seguono fanno tutti riferimento alla piattaforma di terze parti YouTube.</p>
</div></div>

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Responsabilità della privacy</span></div>
<p>Coinvolgi il Responsabile per la protezione dei dati (RDP/DPO) della tua amministrazione e ricordati di aggiornare la cookie policy del sito. Designers Italia mette a disposizione il [kit Privacy](https://designers.italia.it/risorse-per-progettare/organizzare/privacy/) per approfondire questi temi e in particolare uno strumento dedicato alla redazione della Cookie policy che trovi in [questa azione del kit](https://designers.italia.it/risorse-per-progettare/organizzare/privacy/rispetta-la-privacy-per-il-go-live-di-un-sito/).</p>
</div></div>

#### Attivazione dell’overlay di consenso
L’utilizzo di un overlay per il consenso è una soluzione comune per garantire la conformità alla normativa sulla privacy in materia di cookie e tracciamento degli utenti.
L’overlay per il consenso consente di informare l’utente sui cookie utilizzati e di ottenere il suo consenso in modo esplicito e consapevole alla riproduzione del video prima dell’installazione di qualunque cookie.

<div class="callout callout-info"><div class="callout-inner"><div class="callout-title"><span class="text">Obblighi</span></div>
<p>Per questo la Pubblica Amministrazione che fa uso di servizi di terze parti come YouTube deve necessariamente specificare l’utilizzo di cookie di tracciamento da parte di piattaforme di terze parti, inserendo inoltre il link alla propria cookie policy all’interno dell’overlay (dove adesso c’è il link a ‘#’).
Nella sezione seguente vengono illustrate le funzioni per la gestione delle preferenze con JavaScript.</p>
</div></div>

L'overlay di consenso viene automaticamente istanziato dal componente se si tratta di un video Youtube.

Per personalizzare il comportamento sulle scelte effettuate nell'overlay di consenso, è possibile passare al componente \\\`<it-video>\\\` l'attributo \\\`consentOptions\\\` con il seguente formato:

\\\`\\\`\\\`js
consentOptions = {
    consentKey?: string; //nome della variabile da usare nel localStorage per il salvataggio della preferenza sul consenso. Di default è 'youtube' per i video di Youtube.
    onAccept?: Function; //(accepted, consentKey)=>{} - funzione che viene invocata quando si accetta il consenso permanente per un video di questa tipologia. Se presente, non viene gestita la preferenza nel localstorage, ma è compito dello sviluppatore implementare la logica di salvataggio delle preferenze
    isAccepted?: Function; // (consentKey)=>{} - funzione che ritorna un valore booleano (true/false), che indica se l'utente ha gia accettato il consenso permanente per tutti i video di quel tipo.
  };
\\\`\\\`\\\`

Di default sono gia previsti testi e icona, ma è possibile (ed è suggerito) modificare il testo con il link alla pagina della privacy policy.
I testi e l'icona sono modificabili attraverso il sistema di traduzioni. Vedi la guida dedicata.
\`
      }
    }
  },
  render: params => html\`\${renderComponent({
    ...params,
    src: 'https://youtu.be/_0j7ZQ67KtY',
    type: undefined
    // translations: undefined,
  })}\`
}`,...($=(R=u.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var H,F,M;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'i18n',
  tags: ['!dev'],
  render: () => html\`<div class="hide-preview"></div>\`,
  parameters: {
    viewMode: 'docs',
    // assicura che si apra la tab Docs anziché Canvas
    docs: {
      description: {
        story: \`
Oltre all'attributo \\\`translations\\\` che permette di modificare le traduzioni interne al player, sono disponibili ulteriori stringhe traducibili tramite l'[utility di internazionalizzazione](/docs/i18n-internazionalizzazione--documentazione).

\\\`\\\`\\\`js
const translation = {
  \${JSON.stringify(i18nIT).replaceAll('{"', '"').replaceAll('",', '",\\n\\t').replaceAll('"}', '"')}
}
\\\`\\\`\\\`
\`
      }
    }
  }
}`,...(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};const G=["EsempioInterattivo","ComeUsarlo","ConTrascrizione","SottotitoliDidascalieCapitoliEDescrizioni","ImmagineDiAnteprima","Streaming","GestirePiuTracceAudio","EmbedDaPiattaformeTerze","I18n"];export{r as ComeUsarlo,s as ConTrascrizione,u as EmbedDaPiattaformeTerze,n as EsempioInterattivo,p as GestirePiuTracceAudio,m as I18n,d as ImmagineDiAnteprima,l as SottotitoliDidascalieCapitoliEDescrizioni,c as Streaming,G as __namedExportsOrder,a as default};
