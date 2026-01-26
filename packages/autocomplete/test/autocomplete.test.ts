import { fixture, html, expect, nextFrame } from '@open-wc/testing';
import { ItAutocomplete } from '../src/it-autocomplete.js';
import '@italia/autocomplete';

describe('ItAutocomplete', () => {
  it('renders with default properties', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete>
        <span slot="label">Test Label</span>
      </it-autocomplete>
    `);
    expect(el).to.exist;
    expect(el.shadowRoot).to.exist;
  });

  it('renders label correctly', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete>
        <span slot="label">Regione</span>
      </it-autocomplete>
    `);

    // Forza un re-render per assicurarsi che lo slot sia processato
    el.requestUpdate();
    await el.updateComplete;

    const label = el.shadowRoot!.querySelector('label');
    expect(label).to.exist;
  });

  it('renders input with correct attributes', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete placeholder="Cerca..." required>
        <span slot="label">Test</span>
      </it-autocomplete>
    `);
    const input = el.shadowRoot!.querySelector('input');
    expect(input).to.exist;
    expect(input?.getAttribute('placeholder')).to.equal('Cerca...');
    expect(input?.hasAttribute('required')).to.be.true;
  });

  it('filters options when typing', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete .source="${['Apple', 'Banana', 'Cherry']}">
        <span slot="label">Fruit</span>
      </it-autocomplete>
    `);

    const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
    input.value = 'ba';
    input.dispatchEvent(new Event('input'));

    await el.updateComplete;

    const listbox = el.shadowRoot!.querySelector('.autocomplete-listbox');
    expect(listbox).to.exist;
  });

  it('respects minLength property', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete min-length="3" .source="${['Apple', 'Banana', 'Cherry']}">
        <span slot="label">Fruit</span>
      </it-autocomplete>
    `);

    const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

    // Type 2 characters
    input.value = 'ap';
    input.dispatchEvent(new Event('input'));
    await el.updateComplete;

    let listbox = el.shadowRoot!.querySelector('.autocomplete-listbox');
    expect(listbox).to.not.exist;

    // Type 3 characters
    input.value = 'app';
    input.dispatchEvent(new Event('input'));
    await el.updateComplete;

    listbox = el.shadowRoot!.querySelector('.autocomplete-listbox');
    expect(listbox).to.exist;
  });

  it('emits change event when value changes', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete .source="${['Apple', 'Banana']}">
        <span slot="label">Test</span>
      </it-autocomplete>
    `);

    let eventFired = false;
    el.addEventListener('it-autocomplete-change', () => {
      eventFired = true;
    });

    const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
    input.value = 'test';
    input.dispatchEvent(new Event('input'));

    expect(eventFired).to.be.true;
  });

  it('can be disabled', async () => {
    const el = await fixture<ItAutocomplete>(html`
      <it-autocomplete disabled>
        <span slot="label">Test</span>
      </it-autocomplete>
    `);

    const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
    expect(input.disabled).to.be.true;
  });

  describe('Keyboard Navigation', () => {
    it('ArrowDown opens menu and navigates to first option when input is empty', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Apple', 'Banana', 'Cherry']}">
          <span slot="label">Fruit</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Initially closed
      expect(el._isOpen).to.be.false;
      expect(el._activeIndex).to.equal(-1);

      // Press ArrowDown
      input.focus();
      const keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);

      await el.updateComplete;

      // Menu should be open and first item selected (W3C APG: ArrowDown va alla prima)
      expect(el._isOpen).to.be.true;
      expect(el._activeIndex).to.equal(0);
      expect(el._filteredOptions.length).to.be.greaterThan(0);

      const listbox = el.shadowRoot!.querySelector('.autocomplete-listbox');
      expect(listbox).to.exist;
    });

    it('ArrowDown navigates through options with wrap', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Apple', 'Apricot', 'Avocado']}">
          <span slot="label">Fruit</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu digitando "a" - filtra tutte e 3 le opzioni
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // Prima ArrowDown: va alla prima opzione (listbox prende focus)
      let keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;
      expect(el._activeIndex).to.equal(0);
      expect(el._listboxHasVisualFocus).to.be.true;

      // Seconda ArrowDown: va alla seconda opzione
      keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;
      expect(el._activeIndex).to.equal(1);

      // Terza ArrowDown: va alla terza opzione
      keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;
      expect(el._activeIndex).to.equal(2);

      // Quarta ArrowDown: wrap alla prima (W3C APG comportamento)
      keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;
      expect(el._activeIndex).to.equal(0);
    });

    it('ArrowUp from combobox goes to last option', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Apple', 'Apricot', 'Avocado']}">
          <span slot="label">Fruit</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu digitando "a" - filtra tutte e 3
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // ArrowUp da combobox: va all'ultima opzione (W3C APG)
      const keyEvent = new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;
      expect(el._activeIndex).to.equal(2); // Ultima opzione (Avocado)
      expect(el._listboxHasVisualFocus).to.be.true;

      // Navigate up again (wrap to seconda)
      input.dispatchEvent(keyEvent);
      await el.updateComplete;
      expect(el._activeIndex).to.equal(1); // Wrapped to Apricot
    });

    it('Enter selects option only when listbox has focus', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Apple', 'Banana', 'Cherry']}">
          <span slot="label">Fruit</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu digitando
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // ArrowDown per dare focus al listbox e selezionare prima opzione
      let keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;

      expect(el._activeIndex).to.equal(0);
      expect(el._listboxHasVisualFocus).to.be.true;

      // Press Enter (ora dovrebbe selezionare)
      keyEvent = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;

      // Menu chiuso e valore impostato
      expect(el._isOpen).to.be.false;
      expect(input.value).to.equal('Apple');
    });

    it('Escape closes the menu', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Apple', 'Banana', 'Cherry']}">
          <span slot="label">Fruit</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;
      expect(el._isOpen).to.be.true;

      // Press Escape
      const keyEvent = new KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;

      expect(el._isOpen).to.be.false;
    });
  });

  describe('ARIA Attributes', () => {
    it('has correct ARIA attributes on input', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Apple', 'Banana']}">
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      expect(input.getAttribute('role')).to.equal('combobox');
      expect(input.getAttribute('aria-autocomplete')).to.equal('list');
      expect(input.getAttribute('aria-expanded')).to.equal('false');
    });

    it('updates aria-expanded when menu opens', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Apple', 'Banana']}">
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      expect(input.getAttribute('aria-expanded')).to.equal('true');
    });

    it('sets aria-activedescendant when option is active', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Apple', 'Banana']}">
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu and navigate
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // Simula ArrowDown per dare focus al listbox (W3C APG pattern)
      const keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true });
      input.dispatchEvent(keyEvent);
      await el.updateComplete;

      // Ora aria-activedescendant dovrebbe essere impostato
      const activeDescendant = input.getAttribute('aria-activedescendant');
      expect(activeDescendant).to.include('option-0');
    });

    it('has aria-live regions for announcements', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Apple', 'Banana']}">
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      // Should have two aria-live regions (bump pattern)
      const liveRegions = el.shadowRoot!.querySelectorAll('[role="status"][aria-live="polite"]');
      expect(liveRegions.length).to.equal(2);
    });

    it('options have aria-posinset and aria-setsize', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Apple', 'Banana', 'Cherry']}">
          <span slot="label">Fruit</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Open menu
      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      const options = el.shadowRoot!.querySelectorAll('[role="option"]');
      expect(options.length).to.be.greaterThan(0);

      options.forEach((option, index) => {
        expect(option.getAttribute('aria-posinset')).to.equal(String(index + 1));
        expect(option.getAttribute('aria-setsize')).to.equal(String(options.length));
      });
    });
  });

  describe('Assistive Hint', () => {
    it('shows assistive hint initially', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Apple', 'Banana']}">
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      expect(el._showAssistiveHint).to.be.true;

      const hint = el.shadowRoot!.querySelector('.visually-hidden');
      expect(hint).to.exist;
    });

    it('removes assistive hint after first input', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Apple', 'Banana']}">
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      expect(el._showAssistiveHint).to.be.true;

      input.value = 'a';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      expect(el._showAssistiveHint).to.be.false;
    });
  });

  describe('Form Integration', () => {
    it('integrates with native form and validates required field', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <it-autocomplete name="region" required .source="${['Emilia Romagna', 'Lombardia', 'Lazio']}">
            <span slot="label">Regione</span>
          </it-autocomplete>
        </form>
      `);

      form.addEventListener('submit', (e) => e.preventDefault());

      const el = form.querySelector('it-autocomplete') as ItAutocomplete;
      await el.updateComplete;

      // Valore NON nelle opzioni → invalido
      el.value = 'Emilia';
      expect(el.checkValidity()).to.be.false;

      // Valore nelle opzioni → valido
      el.value = 'Emilia Romagna';
      expect(el.checkValidity()).to.be.true;

      // Valore parziale → invalido
      el.value = 'Emilia Rom';
      expect(el.checkValidity()).to.be.false;
    });

    it('accepts defaultValue as valid selection', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete required default-value="Lombardia" .source="${['Emilia Romagna', 'Lombardia', 'Lazio']}">
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      await el.updateComplete;

      expect(el.value).to.equal('Lombardia');
      expect(el.checkValidity()).to.be.true;
    });

    it('rejects defaultValue if not in options', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete required default-value="Invalid Option" .source="${['Emilia Romagna', 'Lombardia', 'Lazio']}">
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      await el.updateComplete;

      expect(el.value).to.equal('');
    });

    it('allows any value when not required', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Option1', 'Option2']}">
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Digita un valore senza selezionare dalla lista
      input.value = 'Any text';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // Dovrebbe essere valido perché non è required
      expect(el.invalid).to.be.false;
    });

    it('shows invalid state when validation fails', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete required .source="${['Option1', 'Option2']}">
          <span slot="label">Test</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Campo vuoto required è invalido
      await el.updateComplete;

      expect(el.invalid).to.be.true;
      expect(input.classList.contains('is-invalid')).to.be.true;
    });

    it('typing does not set value, only selection does', async () => {
      const el = await fixture<ItAutocomplete>(html`
        <it-autocomplete .source="${['Emilia Romagna', 'Lombardia', 'Lazio']}">
          <span slot="label">Regione</span>
        </it-autocomplete>
      `);

      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;
      await el.updateComplete;

      // L'utente digita "e" ma non seleziona dalla lista
      input.value = 'e';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // value deve rimanere vuoto
      expect(el.value).to.equal('');

      // Ora selezioniamo dalla lista
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await el.updateComplete;
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      await el.updateComplete;

      // Ora value deve avere l'opzione selezionata
      expect(el.value).to.equal('Emilia Romagna');
    });

    it('submits form with selected autocomplete value', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <it-autocomplete name="test-field" .source="${['Value1', 'Value2']}">
            <span slot="label">Test</span>
          </it-autocomplete>
        </form>
      `);

      const el = form.querySelector('it-autocomplete') as ItAutocomplete;
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Digita e seleziona dalla lista
      input.value = 'Value1';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // Simula selezione con ArrowDown + Enter
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await el.updateComplete;
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      await el.updateComplete;

      const formData = new FormData(form);
      expect(formData.get('test-field')).to.equal('Value1');
    });

    it('resets value when form is reset', async () => {
      const form = await fixture<HTMLFormElement>(html`
        <form>
          <it-autocomplete name="test" .source="${['A', 'B', 'C']}">
            <span slot="label">Test</span>
          </it-autocomplete>
        </form>
      `);

      const el = form.querySelector('it-autocomplete') as ItAutocomplete;
      const input = el.shadowRoot!.querySelector('input') as HTMLInputElement;

      // Digita e seleziona dalla lista
      input.value = 'A';
      input.dispatchEvent(new Event('input'));
      await el.updateComplete;

      // Seleziona con ArrowDown + Enter
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
      await el.updateComplete;
      input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      await el.updateComplete;

      expect(el.value).to.equal('A');

      // Reset form
      form.reset();
      await el.updateComplete;

      expect(el.value).to.equal('');
    });
  });
});
