import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent implements AfterViewInit {
  // Riferimenti al DOM
  @ViewChild('autoBase') autoBase!: ElementRef;

  @ViewChild('autoDefaultStr') autoDefaultStr!: ElementRef;

  @ViewChild('autoDefaultObj') autoDefaultObj!: ElementRef;

  @ViewChild('autoForm') autoForm!: ElementRef;

  @ViewChild('autoRegioneNested') autoRegioneNested!: ElementRef;

  @ViewChild('autoComuneNested') autoComuneNested!: ElementRef;

  @ViewChild('autoAsync') autoAsync!: ElementRef;

  formOutput = '';

  // Dati
  italianRegions = [
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

  cities = [
    { value: 'milano', label: 'Milano' },
    { value: 'roma', label: 'Roma' },
    { value: 'napoli', label: 'Napoli' },
  ];

  comuniData: any[] = [];

  regioniUniche: any[] = [];

  ngAfterViewInit() {
    // Usiamo setTimeout per assicurarci che il custom element sia "upgradato"
    // e pronto a ricevere proprietà complesse.
    setTimeout(() => {
      this.initComponents();
    }, 0);
  }

  initComponents() {
    // 1. Base
    if (this.autoBase) {
      this.autoBase.nativeElement.source = this.italianRegions;
    }

    // 2. Default Stringa
    if (this.autoDefaultStr) {
      this.autoDefaultStr.nativeElement.source = this.italianRegions;
      // Impostiamo il valore iniziale via JS
      this.autoDefaultStr.nativeElement.value = 'lombardia';
    }

    // 3. Default Oggetto
    if (this.autoDefaultObj) {
      this.autoDefaultObj.nativeElement.source = this.italianRegions;
      // Assegnazione proprietà complessa
      this.autoDefaultObj.nativeElement.defaultValue = { value: 'lazio', label: 'Lazio' };
    }

    // 4. Form
    if (this.autoForm) {
      this.autoForm.nativeElement.source = this.italianRegions;
    }

    // 5. Async Search
    if (this.autoAsync) {
      this.autoAsync.nativeElement.source = (query: string, populateResults: any) => {
        setTimeout(() => {
          const lower = query.toLowerCase();
          const results = this.cities.filter((c) => c.label.toLowerCase().includes(lower));
          populateResults(results);
        }, 500);
      };
    }

    // 6. Nested (Regioni/Comuni)
    this.initNestedData();
  }

  initNestedData() {
    fetch('/assets/comuni.json')
      .then((res) => res.json())
      .then((data) => {
        this.comuniData = data;
        const setReg = new Set(data.map((i: any) => i.regione));
        this.regioniUniche = Array.from(setReg)
          .sort()
          .map((r: any) => ({
            value: r.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
            label: r,
          }));

        if (this.autoRegioneNested) {
          this.autoRegioneNested.nativeElement.source = this.regioniUniche;
        }
      })
      .catch((e) => console.error(e));
  }

  handleFormSubmit(event: Event) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data: any = {};
    formData.forEach((v, k) => (data[k] = v));
    this.formOutput = JSON.stringify(data, null, 2);
  }

  handleRegioneChange(event: any) {
    const val = event.detail.value;
    const comuneEl = this.autoComuneNested.nativeElement;

    if (val && comuneEl) {
      const regObj = this.regioniUniche.find((r) => r.value === val);
      const label = regObj ? regObj.label : val;

      comuneEl.disabled = false;
      comuneEl.value = ''; // Reset

      const filtrati = this.comuniData
        .filter((c) => c.regione === label)
        .map((c) => ({
          value: c.comune.toLowerCase().replace(/\s+/g, '-').replace(/'/g, ''),
          label: c.comune,
        }))
        .sort((a, b) => a.label.localeCompare(b.label));

      comuneEl.source = filtrati;
    } else if (comuneEl) {
      comuneEl.disabled = true;
      comuneEl.value = '';
      comuneEl.source = [];
    }
  }
}
