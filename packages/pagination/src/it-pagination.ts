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

  @property({ type: String, reflect: true })
  value = '1';

  @property({ type: String, reflect: true })
  total = '';

  @property({ type: String, reflect: true })
  size: PaginationSize | '' = '';

  @property({ type: String, reflect: true })
  align: PaginationAlignment = 'start';

  @property({ type: Boolean, reflect: true })
  responsive = false;

  @property({ type: String, attribute: 'it-aria-label', reflect: true })
  itAriaLabel = 'Navigazione della pagina';

  override updated(changedProperties: Map<string | number | symbol, unknown>) {
    super.updated?.(changedProperties);

    if (changedProperties.has('value') || changedProperties.has('total')) {
      this.updatePaginationItems();
      this.updateNavigationButtons();
    }
  }

  override firstUpdated(changedProperties: Map<string | number | symbol, unknown>) {
    super.firstUpdated?.(changedProperties);
    this.updatePaginationItems();
    this.updateNavigationButtons();
  }

  private emitPageChange(newPage: number) {
    const currentPage = parseInt(this.value, 10);
    const totalPages = this.total ? parseInt(this.total, 10) : this.paginationItems.length;

    if (newPage < 1) return;
    if (totalPages > 0 && newPage > totalPages) return;

    if (newPage === currentPage) return;
    const event = new CustomEvent('it-pagination-change', {
      detail: { page: newPage },
      bubbles: true,
      composed: true,
    });
    console.log('Emitting it-pagination-change for page', event);
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
    const totalPages = this.total ? parseInt(this.total, 10) : this.paginationItems.length;

    // Se non c'è 'total', assumiamo che ci siano altre pagine finché ci sono items
    if (!totalPages || currentPage < totalPages) {
      this.emitPageChange(currentPage + 1);
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
    const totalPages = this.total ? parseInt(this.total, 10) : this.paginationItems.length;

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

  override render() {
    const navClasses = this.composeClass('pagination-wrapper');
    const ulClasses = this.composeClass(
      'pagination',
      this.size && `pagination-${this.size}`,
      this.align && this.align !== 'start' && `justify-content-${this.align}`,
      this.responsive && 'pagination-responsive',
    );

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
        <slot name="total"></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'it-pagination': ItPagination;
  }
}
