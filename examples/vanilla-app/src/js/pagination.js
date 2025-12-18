import '@italia/pagination';
import '@italia/icon';

// Generate pagination items for More Mode
const morePagination = document.getElementById('more-pagination');
if (morePagination) {
  for (let i = 1; i <= 50; i++) {
    const item = document.createElement('it-pagination-item');
    item.setAttribute('page', i.toString());
    
    const link = document.createElement('a');
    link.href = '#';
    link.innerHTML = `<span class="d-inline-block d-sm-none">Pagina </span>${i}`;
    
    item.appendChild(link);
    morePagination.appendChild(item);
  }
}

// Listen to pagination events
document.querySelectorAll('it-pagination').forEach((pagination) => {
  pagination.addEventListener('it-pagination-change', (e) => {
    console.log('Pagination changed to page:', e.detail.page);
  });
});
