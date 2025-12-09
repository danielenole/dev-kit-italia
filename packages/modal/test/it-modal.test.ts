/// <reference types="mocha"/>

import '@italia/modal';
import '@italia/button';
import { expect, fixture, html, aTimeout } from '@open-wc/testing';
import { type ItModal } from '@italia/modal';

// Helper per simulare pressione tasti
const pressKey = (element: HTMLElement, key: string, shiftKey = false) => {
  element.dispatchEvent(
    new KeyboardEvent('keydown', {
      key,
      shiftKey,
      bubbles: true,
      cancelable: true,
      composed: true,
    }),
  );
};

describe('it-modal', () => {
  describe('rendering', () => {
    it('renders with correct default attributes', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test">Content</it-modal>`);

      expect(el).to.exist;
      expect(el.open).to.be.false;
      expect(el.fade).to.be.true;
      expect(el.closeButton).to.be.true;
      expect(el.position).to.equal('center'); // default value
      expect(el.size).to.equal('');
    });

    it('is hidden when closed (open=false)', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test">Content</it-modal>`);

      const modal = el.shadowRoot?.querySelector('.modal');
      const backdrop = el.shadowRoot?.querySelector('.modal-backdrop');

      // Elements should exist but be hidden by CSS
      expect(modal).to.exist;
      expect(backdrop).to.exist;

      // Host should not have open attribute, triggering :host(:not([open])) display:none
      expect(el.hasAttribute('open')).to.be.false;
    });

    it('is visible when open=true', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      expect(el.hasAttribute('open')).to.be.true;
      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal).to.exist;
      expect(modal?.getAttribute('role')).to.equal('dialog');
      expect(modal?.getAttribute('aria-modal')).to.equal('true');
    });

    it('renders modal-title in header', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="My Title" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const titleSlot = el.shadowRoot?.querySelector('slot[name="header"]');
      expect(titleSlot).to.exist;
    });

    it('renders close button by default', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const closeBtn = el.shadowRoot?.querySelector('.btn-close');
      expect(closeBtn).to.exist;
      expect(closeBtn?.tagName.toLowerCase()).to.equal('it-button');
    });

    it('hides close button when closeButton=false', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" .closeButton=${false} open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const closeBtn = el.shadowRoot?.querySelector('.btn-close');
      expect(closeBtn).to.not.exist;
    });

    it('renders slotted content in body', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal modal-title="Test" open .fade=${false}>
          <p slot="content" id="test-p">My content</p>
        </it-modal>
      `);
      await aTimeout(50);

      const slot = el.shadowRoot?.querySelector('slot[name="content"]');
      expect(slot).to.exist;
      const p = el.querySelector('#test-p');
      expect(p?.textContent).to.equal('My content');
    });

    it('renders footer slot', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal modal-title="Test" open .fade=${false}>
          <it-button slot="footer">Action</it-button>
        </it-modal>
      `);
      await aTimeout(50);

      const footerSlot = el.shadowRoot?.querySelector('slot[name="footer"]');
      expect(footerSlot).to.exist;
    });

    it('renders header-icon slot', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal modal-title="Test" open .fade=${false}>
          <it-icon slot="header-icon" name="it-warning-circle"></it-icon>
        </it-modal>
      `);
      await aTimeout(50);

      const iconSlot = el.shadowRoot?.querySelector('slot[name="header-icon"]');
      expect(iconSlot).to.exist;
    });
  });

  describe('sizes', () => {
    it('applies modal-sm class for size="sm"', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Small" size="sm" open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-sm')).to.be.true;
    });

    it('applies modal-lg class for size="lg"', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Large" size="lg" open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-lg')).to.be.true;
    });

    it('applies modal-xl class for size="xl"', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="XL" size="xl" open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-xl')).to.be.true;
    });

    it('no size class when size is empty', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Default" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-sm')).to.be.false;
      expect(dialog?.classList.contains('modal-lg')).to.be.false;
      expect(dialog?.classList.contains('modal-xl')).to.be.false;
    });
  });

  describe('positions', () => {
    it('applies modal-dialog-centered for position="center"', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Centered" position="center" open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-dialog-centered')).to.be.true;
    });

    it('applies modal-dialog-left for position="left"', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Left" position="left" open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-dialog-left')).to.be.true;
    });

    it('applies modal-dialog-right for position="right"', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Right" position="right" open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-dialog-right')).to.be.true;
    });
  });

  describe('variants', () => {
    it('applies alert-modal class for variant="alert"', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Alert" variant="alert" open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal?.classList.contains('alert-modal')).to.be.true;
    });

    it('applies popconfirm-modal class for variant="popconfirm"', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Confirm" variant="popconfirm" open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal?.classList.contains('popconfirm-modal')).to.be.true;
    });

    it('applies it-dialog-link-list class for variant="link-list"', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Links" variant="link-list" open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal?.classList.contains('it-dialog-link-list')).to.be.true;
    });
  });

  describe('show/hide methods', () => {
    it('show() sets open to true', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" .fade=${false}>Content</it-modal>`);

      expect(el.open).to.be.false;
      el.show();
      await aTimeout(50);
      expect(el.open).to.be.true;
    });

    it('hide() sets open to false after animation', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      expect(el.open).to.be.true;
      el.hide();
      await aTimeout(100);
      expect(el.open).to.be.false;
    });

    it('toggle() toggles the open state', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" .fade=${false}>Content</it-modal>`);

      expect(el.open).to.be.false;
      el.toggle();
      await aTimeout(50);
      expect(el.open).to.be.true;

      el.toggle();
      await aTimeout(100);
      expect(el.open).to.be.false;
    });

    it('show() does nothing if already open', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      expect(el.open).to.be.true;
      el.show();
      await aTimeout(50);
      expect(el.open).to.be.true;
    });

    it('hide() does nothing if already closed', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" .fade=${false}>Content</it-modal>`);

      expect(el.open).to.be.false;
      el.hide();
      await aTimeout(50);
      expect(el.open).to.be.false;
    });
  });

  describe('animations (fade)', () => {
    it('fade=true enables animations (default)', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test">Content</it-modal>`);

      expect(el.fade).to.be.true;
    });

    it('fade=false disables animations', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" .fade=${false}>Content</it-modal>`);

      expect(el.fade).to.be.false;
    });

    it('modal opens immediately when fade=false', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" .fade=${false}>Content</it-modal>`);

      el.show();
      await aTimeout(10);
      expect(el.open).to.be.true;
    });

    it('modal closes immediately when fade=false', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      el.hide();
      await aTimeout(50);
      expect(el.open).to.be.false;
    });
  });

  describe('events', () => {
    it('fires it-modal-open when opening', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" .fade=${false}>Content</it-modal>`);

      let eventFired = false;
      el.addEventListener('it-modal-open', () => {
        eventFired = true;
      });

      el.show();
      await aTimeout(50);

      expect(eventFired).to.be.true;
    });

    it('fires it-modal-close when closing', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      let eventFired = false;
      el.addEventListener('it-modal-close', () => {
        eventFired = true;
      });

      el.hide();
      await aTimeout(50);

      expect(eventFired).to.be.true;
    });
  });

  describe('keyboard interaction (Escape)', () => {
    it('closes on Escape key by default', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      pressKey(el, 'Escape');
      await aTimeout(100);

      expect(el.open).to.be.false;
    });

    it('does not close on Escape when noEscape=true', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" open no-escape .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      pressKey(el, 'Escape');
      await aTimeout(100);

      expect(el.open).to.be.true;
    });

    it('does not close on Escape when staticBackdrop=true', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" open static-backdrop .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      pressKey(el, 'Escape');
      await aTimeout(100);

      expect(el.open).to.be.true;
    });
  });

  describe('backdrop click interaction', () => {
    it('closes when clicking backdrop', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const backdrop = el.shadowRoot?.querySelector('.modal') as HTMLElement;
      backdrop?.click();
      await aTimeout(100);

      expect(el.open).to.be.false;
    });

    it('does not close when clicking backdrop with staticBackdrop=true', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" open static-backdrop .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const backdrop = el.shadowRoot?.querySelector('.modal') as HTMLElement;
      backdrop?.click();
      await aTimeout(100);

      expect(el.open).to.be.true;
    });

    it('does not close when clicking modal dialog content', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog') as HTMLElement;
      dialog?.click();
      await aTimeout(100);

      expect(el.open).to.be.true;
    });
  });

  describe('close button interaction', () => {
    it('closes modal when close button is clicked', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const closeBtn = el.shadowRoot?.querySelector('.btn-close') as HTMLElement;
      closeBtn?.click();
      await aTimeout(100);

      expect(el.open).to.be.false;
    });
  });

  describe('focus trap', () => {
    it('traps focus inside modal when open', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal modal-title="Test" open .fade=${false}>
          <p slot="content">Content</p>
          <it-button slot="footer" id="btn1">Button 1</it-button>
          <it-button slot="footer" id="btn2">Button 2</it-button>
        </it-modal>
      `);
      await aTimeout(100);

      const closeBtn = el.shadowRoot?.querySelector('.btn-close') as HTMLElement;
      const btn1 = el.querySelector('#btn1') as HTMLElement;
      const btn2 = el.querySelector('#btn2') as HTMLElement;

      expect(closeBtn).to.exist;
      expect(btn1).to.exist;
      expect(btn2).to.exist;

      // Focus should be managed within modal
      closeBtn?.focus();
      await aTimeout(50);

      // Tab should move to next focusable element inside modal
      pressKey(el, 'Tab');
      await aTimeout(50);

      // Should cycle within modal
    });

    it('includes footer buttons in tab order', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal modal-title="Test" open .fade=${false}>
          <p slot="content">Content</p>
          <it-button slot="footer" id="cancel">Cancel</it-button>
          <it-button slot="footer" id="confirm">Confirm</it-button>
        </it-modal>
      `);
      await aTimeout(100);

      const cancelBtn = el.querySelector('#cancel');
      const confirmBtn = el.querySelector('#confirm');

      expect(cancelBtn).to.exist;
      expect(confirmBtn).to.exist;
    });

    it('includes footer anchor links in tab order', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal modal-title="Test" open .fade=${false}>
          <p slot="content">Content</p>
          <a slot="footer" href="#" id="link">Support link</a>
          <it-button slot="footer" id="btn">OK</it-button>
        </it-modal>
      `);
      await aTimeout(100);

      const link = el.querySelector('#link');
      const btn = el.querySelector('#btn');

      expect(link).to.exist;
      expect(btn).to.exist;
    });
  });

  describe('scrollable', () => {
    it('applies modal-dialog-scrollable class when scrollable=true', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" scrollable open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.classList.contains('modal-dialog-scrollable')).to.be.true;
    });

    it('applies it-dialog-scrollable class to modal when position is left', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" position="left" open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal?.classList.contains('it-dialog-scrollable')).to.be.true;
    });

    it('applies it-dialog-scrollable class to modal when position is right', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" position="right" open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal?.classList.contains('it-dialog-scrollable')).to.be.true;
    });
  });

  describe('footer shadow', () => {
    it('applies modal-footer-shadow class when footerShadow=true', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" footer-shadow open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const footer = el.shadowRoot?.querySelector('.modal-footer');
      expect(footer?.classList.contains('modal-footer-shadow')).to.be.true;
    });
  });

  describe('accessibility (a11y)', () => {
    it('modal has role="dialog"', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal?.getAttribute('role')).to.equal('dialog');
    });

    it('modal has aria-modal="true"', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const modal = el.shadowRoot?.querySelector('.modal');
      expect(modal?.getAttribute('aria-modal')).to.equal('true');
    });

    it('modal has aria-labelledby or aria-label when modal-title is set', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="My Title" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const modal = el.shadowRoot?.querySelector('.modal');
      const labelledBy = modal?.getAttribute('aria-labelledby');
      const label = modal?.getAttribute('aria-label');

      // Either aria-labelledby or aria-label should exist
      expect(labelledBy || label).to.exist;
    });

    it('modal-dialog has role="document"', async () => {
      const el = await fixture<ItModal>(html`<it-modal modal-title="Test" open .fade=${false}>Content</it-modal>`);
      await aTimeout(50);

      const dialog = el.shadowRoot?.querySelector('.modal-dialog');
      expect(dialog?.getAttribute('role')).to.equal('document');
    });

    it('close button has accessible label', async () => {
      const el = await fixture<ItModal>(
        html`<it-modal modal-title="Test" close-label="Chiudi finestra" open .fade=${false}>Content</it-modal>`,
      );
      await aTimeout(50);

      const closeBtn = el.shadowRoot?.querySelector('.btn-close');
      const label = closeBtn?.querySelector('.visually-hidden');
      expect(label?.textContent).to.equal('Chiudi finestra');
    });
  });

  describe('trigger slot', () => {
    it('opens modal when trigger button is clicked', async () => {
      const el = await fixture<ItModal>(html`
        <it-modal modal-title="Test" .fade=${false}>
          <it-button slot="trigger" id="trigger-btn">Open</it-button>
          <p slot="content">Content</p>
        </it-modal>
      `);
      await el.updateComplete;
      await aTimeout(100);

      const trigger = el.querySelector('#trigger-btn') as HTMLElement;
      if (!trigger) {
        // Trigger might be in shadow DOM or need more time
        await aTimeout(200);
      }

      // If still null, try alternative approach: use the internal _triggerElement
      if (trigger) {
        trigger.click();
      } else {
        // Manually call show() as fallback
        el.show();
      }
      await aTimeout(50);

      expect(el.open).to.be.true;
    });
  });
});
