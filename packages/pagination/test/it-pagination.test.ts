import { expect, fixture, html } from '@open-wc/testing';
import { ItPagination } from '../src/it-pagination.js';
import '../src/it-pagination.js';
import '../src/it-pagination-item.js';

describe('it-pagination', () => {
  it('is defined', () => {
    const el = document.createElement('it-pagination');
    expect(el).to.be.instanceOf(ItPagination);
  });

  it('renders with shadow DOM', async () => {
    const el = await fixture(html`<it-pagination></it-pagination>`);
    expect(el.shadowRoot).to.exist;
  });

  it('has default value of "1"', async () => {
    const el = await fixture<ItPagination>(html`<it-pagination></it-pagination>`);
    expect(el.value).to.equal('1');
  });

  it('renders pagination items', async () => {
    const el = await fixture(html`
      <it-pagination value="2">
        <it-pagination-item page="1">
          <a href="?page=1" class="page-link">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2" class="page-link">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3" class="page-link">3</a>
        </it-pagination-item>
      </it-pagination>
    `);

    const items = el.querySelectorAll('it-pagination-item');
    expect(items.length).to.equal(3);
  });

  it('sets aria-current on the current page', async () => {
    const el = await fixture(html`
      <it-pagination value="2">
        <it-pagination-item page="1">
          <a href="?page=1" class="page-link">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2" class="page-link">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3" class="page-link">3</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;
    
    const items = el.querySelectorAll('it-pagination-item');
    const links = Array.from(items).map((item) => item.querySelector('a'));
    
    expect(links[0]?.hasAttribute('aria-current')).to.be.false;
    expect(links[1]?.getAttribute('aria-current')).to.equal('page');
    expect(links[2]?.hasAttribute('aria-current')).to.be.false;
  });

  it('supports different sizes', async () => {
    const elSmall = await fixture<ItPagination>(html`<it-pagination size="sm"></it-pagination>`);
    const elLarge = await fixture<ItPagination>(html`<it-pagination size="lg"></it-pagination>`);

    expect(elSmall.size).to.equal('sm');
    expect(elLarge.size).to.equal('lg');
  });

  it('supports different alignments', async () => {
    const elCenter = await fixture<ItPagination>(html`<it-pagination align="center"></it-pagination>`);
    const elEnd = await fixture<ItPagination>(html`<it-pagination align="end"></it-pagination>`);

    expect(elCenter.align).to.equal('center');
    expect(elEnd.align).to.equal('end');
  });

  it('supports responsive mode', async () => {
    const el = await fixture<ItPagination>(html`<it-pagination responsive></it-pagination>`);
    expect(el.responsive).to.be.true;
  });

  it('has nav tag with aria-label', async () => {
    const el = await fixture<ItPagination>(html`<it-pagination></it-pagination>`);
    const nav = el.shadowRoot?.querySelector('nav');
    expect(nav).to.exist;
    expect(nav?.getAttribute('aria-label')).to.exist;
  });

  it('supports prev and next slots', async () => {
    const el = await fixture(html`
      <it-pagination value="2">
        <a href="?page=1" slot="prev">Precedente</a>
        <it-pagination-item page="1">
          <a href="?page=1" class="page-link">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2" class="page-link">2</a>
        </it-pagination-item>
        <a href="?page=3" slot="next">Successiva</a>
      </it-pagination>
    `);

    const prevSlot = el.querySelector('[slot="prev"]');
    const nextSlot = el.querySelector('[slot="next"]');
    
    expect(prevSlot).to.exist;
    expect(nextSlot).to.exist;
  });

  it('can set total pages', async () => {
    const el = await fixture<ItPagination>(html`<it-pagination total="10"></it-pagination>`);
    expect(el.total).to.equal('10');
  });

  it('disables prev button on first page', async () => {
    const el = await fixture(html`
      <it-pagination value="1" total="5">
        <a href="?page=0" slot="prev" class="page-link">Prev</a>
        <it-pagination-item page="1">
          <a href="?page=1" class="page-link">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2" class="page-link">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3" class="page-link">3</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;
    
    const prevButton = el.querySelector('[slot="prev"]');
    expect(prevButton?.getAttribute('aria-disabled')).to.equal('true');
    expect(prevButton?.getAttribute('tabindex')).to.equal('-1');
  });

  it('enables prev button when not on first page', async () => {
    const el = await fixture(html`
      <it-pagination value="2" total="5">
        <a href="?page=1" slot="prev" class="page-link">Prev</a>
        <it-pagination-item page="1">
          <a href="?page=1" class="page-link">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2" class="page-link">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3" class="page-link">3</a>
        </it-pagination-item>
      </it-pagination>
    `);

    await el.updateComplete;
    
    const prevButton = el.querySelector('[slot="prev"]');
    expect(prevButton?.hasAttribute('aria-disabled')).to.be.false;
    expect(prevButton?.hasAttribute('tabindex')).to.be.false;
  });

  it('disables next button on last page', async () => {
    const el = await fixture(html`
      <it-pagination value="5" total="5">
        <a href="?page=4" slot="prev" class="page-link">Prev</a>
        <it-pagination-item page="3">
          <a href="?page=3" class="page-link">3</a>
        </it-pagination-item>
        <it-pagination-item page="4">
          <a href="?page=4" class="page-link">4</a>
        </it-pagination-item>
        <it-pagination-item page="5">
          <a href="?page=5" class="page-link">5</a>
        </it-pagination-item>
        <a href="?page=6" slot="next" class="page-link">Next</a>
      </it-pagination>
    `);

    await el.updateComplete;
    
    const nextButton = el.querySelector('[slot="next"]');
    expect(nextButton?.getAttribute('aria-disabled')).to.equal('true');
    expect(nextButton?.getAttribute('tabindex')).to.equal('-1');
  });

  it('enables next button when not on last page', async () => {
    const el = await fixture(html`
      <it-pagination value="3" total="5">
        <a href="?page=2" slot="prev" class="page-link">Prev</a>
        <it-pagination-item page="1">
          <a href="?page=1" class="page-link">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2" class="page-link">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3" class="page-link">3</a>
        </it-pagination-item>
        <a href="?page=4" slot="next" class="page-link">Next</a>
      </it-pagination>
    `);

    await el.updateComplete;
    
    const nextButton = el.querySelector('[slot="next"]');
    expect(nextButton?.hasAttribute('aria-disabled')).to.be.false;
    expect(nextButton?.hasAttribute('tabindex')).to.be.false;
  });

  it('uses pagination items count as total when total is not specified', async () => {
    const el = await fixture(html`
      <it-pagination value="3">
        <a href="?page=2" slot="prev" class="page-link">Prev</a>
        <it-pagination-item page="1">
          <a href="?page=1" class="page-link">1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="?page=2" class="page-link">2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="?page=3" class="page-link">3</a>
        </it-pagination-item>
        <a href="?page=4" slot="next" class="page-link">Next</a>
      </it-pagination>
    `);

    await el.updateComplete;
    
    const nextButton = el.querySelector('[slot="next"]');
    // Should be disabled because we're on page 3 of 3
    expect(nextButton?.getAttribute('aria-disabled')).to.equal('true');
  });

  it('supports page-changer slot', async () => {
    const el = await fixture(html`
      <it-pagination value="1">
        <it-pagination-item page="1">
          <a href="?page=1" class="page-link">1</a>
        </it-pagination-item>
        <div slot="page-changer">Page size selector</div>
      </it-pagination>
    `);

    const pageChanger = el.querySelector('[slot="page-changer"]');
    expect(pageChanger).to.exist;
    expect(pageChanger?.textContent).to.equal('Page size selector');
  });

  it('supports jump-to-page slot', async () => {
    const el = await fixture(html`
      <it-pagination value="1">
        <it-pagination-item page="1">
          <a href="?page=1" class="page-link">1</a>
        </it-pagination-item>
        <div slot="jump-to-page">Jump to page input</div>
      </it-pagination>
    `);

    const jumpToPage = el.querySelector('[slot="jump-to-page"]');
    expect(jumpToPage).to.exist;
    expect(jumpToPage?.textContent).to.equal('Jump to page input');
  });

  it('supports total slot', async () => {
    const el = await fixture(html`
      <it-pagination value="1">
        <it-pagination-item page="1">
          <a href="?page=1" class="page-link">1</a>
        </it-pagination-item>
        <span slot="total">di 10 pagine</span>
      </it-pagination>
    `);

    const totalSlot = el.querySelector('[slot="total"]');
    expect(totalSlot).to.exist;
    expect(totalSlot?.textContent).to.equal('di 10 pagine');
  });
});
