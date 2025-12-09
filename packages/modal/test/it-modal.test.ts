/// <reference types="mocha"/>

import '@italia/modal';
import { expect, fixture, html, oneEvent, aTimeout } from '@open-wc/testing';
import { type ItModal } from '@italia/modal';

// Helper per simulare pressione tasti
const pressKey = (element: HTMLElement, key: string) => {
  element.dispatchEvent(
    new KeyboardEvent('keydown', {
      key,
      bubbles: true,
      cancelable: true,
      composed: true,
    }),
  );
};

describe('it-modal', () => {
  describe('rendering', () => {
    it('renders nothing when closed', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test">Content</it-modal>`);

      expect(el.shadowRoot?.querySelector('.modal')).to.be.null;
    });

    it('renders modal when open', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open>Content</it-modal>`);

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal).to.exist;
      expect(modal?.getAttribute('role')).to.equal('dialog');
      expect(modal?.getAttribute('aria-modal')).to.equal('true');
    });

    it('renders title correctly', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Titolo Test" open>Content</it-modal>`);

      const title = el.shadowRoot?.querySelector('.modal-title');
      expect(title?.textContent).to.equal('Titolo Test');
    });

    it('renders close button when closeButton is true', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open close-button>Content</it-modal>`);

      const closeBtn = el.shadowRoot?.querySelector('.btn-close');
      expect(closeBtn).to.exist;
    });

    it('does not render close button when closeButton is false', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" open .closeButton=${false}>Content</it-modal>`,
      );

      const closeBtn = el.shadowRoot?.querySelector('.btn-close');
      expect(closeBtn).to.be.null;
    });

    it('renders slotted content in body', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal modal-title="Test" open>
          <p id="test-content">Slotted content</p>
        </it-modal>
      `);

      const slot = el.shadowRoot?.querySelector('.modal-body slot:not([name])');
      expect(slot).to.exist;
    });

    it('renders slotted footer content', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal modal-title="Test" open>
          Content
          <button slot="footer">Action</button>
        </it-modal>
      `);

      const footerSlot = el.shadowRoot?.querySelector('.modal-footer slot[name="footer"]');
      expect(footerSlot).to.exist;
    });
  });

  describe('accessibility', () => {
    it('default is accessible', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal modal-title="Accessible Modal" open>
          <p>Modal content</p>
          <button slot="footer">Close</button>
        </it-modal>
      `);

      // Verifica solo regole aria, skip color-contrast che dipende da Bootstrap
      await expect(el).to.be.accessible({
        ignoredRules: ['color-contrast'],
      });
    });

    it('has correct aria-labelledby when title is set', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test Title" open>Content</it-modal>`);

      const modal = el.shadowRoot?.querySelector('.modal');
      const title = el.shadowRoot?.querySelector('.modal-title');

      expect(modal?.getAttribute('aria-labelledby')).to.equal(title?.id);
    });

    it('close button has accessible label', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" open close-label="Chiudi">Content</it-modal>`,
      );

      const closeBtn = el.shadowRoot?.querySelector('.btn-close');
      expect(closeBtn?.getAttribute('aria-label')).to.equal('Chiudi');
    });
  });

  describe('variants', () => {
    it('applies alert-modal class for alert variant', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Alert" variant="alert" open>Content</it-modal>`);

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal?.classList.contains('alert-modal')).to.be.true;
    });

    it('applies popconfirm-modal class for popconfirm variant', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Confirm" variant="popconfirm" open>Content</it-modal>`,
      );

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal?.classList.contains('popconfirm-modal')).to.be.true;
    });

    it('applies it-dialog-link-list class for link-list variant', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Links" variant="link-list" open>Content</it-modal>`,
      );

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal?.classList.contains('it-dialog-link-list')).to.be.true;
    });
  });

  describe('sizes', () => {
    it('applies modal-sm class for small size', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Small" size="sm" open>Content</it-modal>`);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-sm')).to.be.true;
    });

    it('applies modal-lg class for large size', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Large" size="lg" open>Content</it-modal>`);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-lg')).to.be.true;
    });

    it('applies modal-xl class for extra large size', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="XL" size="xl" open>Content</it-modal>`);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-xl')).to.be.true;
    });
  });

  describe('positioning', () => {
    it('applies modal-dialog-centered for center position', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Center" position="center" open>Content</it-modal>`);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-dialog-centered')).to.be.true;
    });

    it('applies modal-dialog-left for left position', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Left" position="left" open>Content</it-modal>`);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-dialog-left')).to.be.true;
    });

    it('applies modal-dialog-right for right position', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Right" position="right" open>Content</it-modal>`);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-dialog-right')).to.be.true;
    });
  });

  describe('methods', () => {
    it('show() opens the modal', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" .fade=${false}>Content</it-modal>`);

      expect(el.open).to.be.false;
      el.show();
      expect(el.open).to.be.true;
    });

    it('hide() closes the modal', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      expect(el.open).to.be.true;
      el.hide();
      await aTimeout(50);
      expect(el.open).to.be.false;
    });

    it('toggle() toggles the modal state', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" .fade=${false}>Content</it-modal>`);

      expect(el.open).to.be.false;
      el.toggle();
      await aTimeout(50);
      expect(el.open).to.be.true;
      el.toggle();
      await aTimeout(50);
      expect(el.open).to.be.false;
    });
  });

  describe('events', () => {
    it('fires it-modal-show before opening', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test">Content</it-modal>`);

      const listener = oneEvent(el, 'it-modal-show');
      el.show();
      const event = await listener;

      expect(event).to.exist;
      expect(event.detail.modal).to.equal(el);
    });

    it('fires it-modal-shown after opening', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" .fade=${false}>Content</it-modal>`);

      const listener = oneEvent(el, 'it-modal-shown');
      el.show();
      const event = await listener;

      expect(event).to.exist;
    });

    it('fires it-modal-hide before closing', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const listener = oneEvent(el, 'it-modal-hide');
      el.hide();
      const event = await listener;

      expect(event).to.exist;
    });

    it('fires it-modal-hidden after closing', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const listener = oneEvent(el, 'it-modal-hidden');
      el.hide();
      const event = await listener;

      expect(event).to.exist;
    });

    it('can prevent opening by canceling it-modal-show', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test">Content</it-modal>`);

      el.addEventListener('it-modal-show', (e) => e.preventDefault());
      el.show();
      await aTimeout(50);

      expect(el.open).to.be.false;
    });
  });

  describe('keyboard interaction', () => {
    it('closes on Escape key', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      pressKey(el, 'Escape');
      await aTimeout(50);

      expect(el.open).to.be.false;
    });

    it('does not close on Escape when noEscape is true', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" open no-escape .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      pressKey(el, 'Escape');
      await aTimeout(50);

      expect(el.open).to.be.true;
    });

    it('does not close on Escape when staticBackdrop is true', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" open static-backdrop .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      pressKey(el, 'Escape');
      await aTimeout(50);

      expect(el.open).to.be.true;
    });
  });

  describe('backdrop', () => {
    it('closes when clicking backdrop', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const modal = el.shadowRoot?.querySelector('.modal') as HTMLElement;
      modal?.click();
      await aTimeout(50);

      expect(el.open).to.be.false;
    });

    it('does not close when clicking backdrop with staticBackdrop', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" open static-backdrop .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const modal = el.shadowRoot?.querySelector('.modal') as HTMLElement;
      modal?.click();
      await aTimeout(50);

      expect(el.open).to.be.true;
    });

    it('does not close when clicking modal content', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const content = el.shadowRoot?.querySelector('.modal-content') as HTMLElement;
      content?.click();
      await aTimeout(50);

      expect(el.open).to.be.true;
    });
  });

  describe('close button', () => {
    it('closes modal when close button is clicked', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const closeBtn = el.shadowRoot?.querySelector('.btn-close') as HTMLButtonElement;
      closeBtn?.click();
      await aTimeout(50);

      expect(el.open).to.be.false;
    });
  });

  describe('scrollable', () => {
    it('applies scrollable class when scrollable is true', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" scrollable open>Content</it-modal>`);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-dialog-scrollable')).to.be.true;
    });
  });

  describe('footer shadow', () => {
    it('applies modal-footer-shadow class when footerShadow is true', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" footer-shadow open>Content</it-modal>`);

      const footer = el.shadowRoot?.querySelector('.modal-footer');
      expect(footer?.classList.contains('modal-footer-shadow')).to.be.true;
    });
  });

  describe('animation', () => {
    it('applies fade class when fade is true', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open>Content</it-modal>`);

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal?.classList.contains('fade')).to.be.true;
    });

    it('does not apply fade class when fade is false', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" .fade=${false} open>Content</it-modal>`);

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal?.classList.contains('fade')).to.be.false;
    });
  });

  describe('slots', () => {
    it('renders content in icon slot', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal modal-title="Alert" variant="alert" open>
          <span slot="icon">⚠️</span>
          Content
        </it-modal>
      `);

      const iconSlot = el.shadowRoot?.querySelector('slot[name="icon"]') as HTMLSlotElement;
      const assignedElements = iconSlot?.assignedElements();
      expect(assignedElements?.length).to.be.greaterThan(0);
    });

    it('renders content in title slot when no modal-title', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal open>
          <h2 slot="title">Custom Title</h2>
          Content
        </it-modal>
      `);

      const titleSlot = el.shadowRoot?.querySelector('slot[name="title"]') as HTMLSlotElement;
      expect(titleSlot).to.exist;
    });

    it('renders custom close button in close-button slot', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal modal-title="Test" open>
          <button slot="close-button" id="custom-close">X</button>
          Content
        </it-modal>
      `);

      const closeSlot = el.shadowRoot?.querySelector('slot[name="close-button"]') as HTMLSlotElement;
      const assignedElements = closeSlot?.assignedElements();
      expect(assignedElements?.length).to.be.greaterThan(0);
    });
  });
});
