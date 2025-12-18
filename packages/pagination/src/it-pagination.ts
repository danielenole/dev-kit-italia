import { BaseComponent } from '@italia/globals';
import { html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import type { ItPaginationItem } from './it-pagination-item.js';
import type { PaginationSize, PaginationAlignment } from './types.js';
import styles from './pagination.scss';

@customElement('it-pagination')
export class ItPagination extends BaseComponent {
  static styles = styles;

  @queryAssignedElements({ selector: 'it-pagination-item' })
  private paginationItems!: ItPaginationItem[];

  @queryAssignedElements({ slot: 'prev' })
  private prevElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'next' })
  private nextElements!: HTMLElement[];

  @queryAssignedElements({ slot: 'total' })
  private totalElements!: HTMLElement[];

  @property({ type: String, reflect: true })
  value = '1';

  @property({ type: String, reflect: true })
  total = undefined;

  @property({ type: String, reflect: true })
  align: PaginationAlignment = 'start';

  @property({ type: Boolean, reflect: true })
  disableResponsive = false;

  @property({ type: String, attribute: 'it-aria-label', reflect: true })
  itAriaLabel = 'Navigazione della pagina';

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    if (changedProperties.has('value') || changedProperties.has('total')) {
      // Wait for slot changes to be processed
      this.updateComplete.then(() => {
        this.updatePaginationItems();
        this.updatePaginationItemsClasses();
        this.updateNavigationButtons();
      });
    }
    if (changedProperties.has('disableResponsive') && changedProperties.get('disableResponsive') !== undefined) {
      // this.updateComplete.then(() => {
      this.updatePaginationItemsClasses();
      // });
    }
  }

  private emitPageChange(newPage: number) {
    const currentPage = parseInt(this.value, 10);
    const totalPages = this.total ? parseInt(this.total) : this.paginationItems.length;

    if (newPage < 1) return;
    if (totalPages > 0 && newPage > totalPages) return;

    if (newPage === currentPage) return;
    const event = new CustomEvent('it-pagination-change', {
      detail: { page: newPage },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
    this.value = newPage.toString();
  }

  private handleItemClick(e: CustomEvent) {
    e.stopPropagation(); // Fermiamo l'evento interno, non serve che esca
    const page = parseInt(e.detail.page, 10);
    if (!isNaN(page)) {
      this.emitPageChange(page);
    }
  }

  private handlePrevClick(e: MouseEvent) {
    e.preventDefault();

    const currentPage = parseInt(this.value, 10);
    if (currentPage > 1) {
      this.emitPageChange(currentPage - 1);
    }
  }

  private handleNextClick(e: MouseEvent) {
    e.preventDefault();
    const currentPage = parseInt(this.value, 10);
    const totalPages = this.total ? parseInt(this.total) : this.paginationItems.length;

    // Se non c'è 'total', assumiamo che ci siano altre pagine finché ci sono items
    if (!totalPages || currentPage < totalPages) {
      this.emitPageChange(currentPage + 1);
    }
  }

  private updatePaginationItemsClasses() {
    if (this.paginationItems.length) {
      this.paginationItems.forEach((item) => {
        const isCurrentPage = item.page === this.value;

        // Remove all classes first
        item.classList.remove('d-none', 'd-sm-flex');

        // Apply responsive hiding for non-current pages (when NOT disabled)
        if (!this.disableResponsive && !isCurrentPage) {
          item.classList.add('d-none', 'd-sm-flex');
        }
      });
    }
  }

  private updatePaginationItems() {
    if (this.paginationItems.length) {
      this.paginationItems.forEach((item) => {
        const isCurrentPage = item.page === this.value;
        // eslint-disable-next-line no-param-reassign
        item.current = isCurrentPage;
      });
    }
  }

  private updateNavigationButtons() {
    const currentPage = parseInt(this.value, 10);
    const totalPages = this.total ? parseInt(this.total) : this.paginationItems.length;

    // Update prev button visual state
    if (this.prevElements.length) {
      this.prevElements.forEach((el) => {
        if (currentPage <= 1) {
          el.setAttribute('aria-disabled', 'true');
          el.classList.add('disabled');
          // el.setAttribute('tabindex', '-1');
        } else {
          el.removeAttribute('aria-disabled');
          el.classList.remove('disabled');
        }
        el.classList.add('page-link');
      });
    }

    // Update next button visual state
    if (this.nextElements.length) {
      this.nextElements.forEach((el) => {
        if (totalPages && currentPage >= totalPages) {
          el.setAttribute('aria-disabled', 'true');
          el.classList.add('disabled');
        } else {
          el.removeAttribute('aria-disabled');
          el.classList.remove('disabled');
        }
        el.classList.add('page-link');
      });
    }
  }

  private handleSlotChange() {
    this.updatePaginationItems();
    this.updateNavigationButtons();
  }

  private handlePrevSlotChange() {
    this.updateNavigationButtons();
  }

  private handleNextSlotChange() {
    this.updateNavigationButtons();
  }
  private handleTotalSlotChange() {
    // Update component and rerender when total slot changes
    this.requestUpdate();
  }

  override render() {
    const navClasses = this.composeClass('pagination-wrapper', this.totalElements.length > 0 && 'pagination-total');
    const ulClasses = this.composeClass('pagination', this.disableResponsive && 'pagination-responsive');

    return html`
      <nav class="${navClasses}" aria-label="${this.itAriaLabel}">
        <ul class="${ulClasses}" @it-item-click="${this.handleItemClick}">
          <li class="pagination-prev-wrapper page-item" @click="${this.handlePrevClick}">
            <slot name="prev" @slotchange="${this.handlePrevSlotChange}"></slot>
          </li>
          <slot @slotchange="${this.handleSlotChange}"></slot>
          <li class="pagination-next-wrapper page-item" @click="${this.handleNextClick}">
            <slot name="next" @slotchange="${this.handleNextSlotChange}"></slot>
          </li>
        </ul>

        <slot name="page-changer"></slot>
        <slot name="jump-to-page"></slot>
        <slot name="total" @slotchange="${this.handleTotalSlotChange}"></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-pagination': ItPagination;
  }
}
