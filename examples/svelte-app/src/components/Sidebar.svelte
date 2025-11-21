<script>
import { onMount, onDestroy } from 'svelte';
let cleanup;
onMount(() => {
  const sidebar = document.querySelector('.sidebar-wrapper');
  if (!sidebar) return;
  sidebar.querySelectorAll('[aria-disabled="true"]').forEach((el) => {
    el.addEventListener('click', clickHandler);
    el.addEventListener('keydown', keydownHandler);
  });
  function clickHandler(event) {
    console.log('Link disabilitato cliccato');
    event.preventDefault();
    event.stopPropagation();
  }
  function keydownHandler(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      console.log('Link disabilitato attivato da tastiera');
      event.preventDefault();
      event.stopPropagation();
    }
  }
  cleanup = () => {
    sidebar.querySelectorAll('[aria-disabled="true"]').forEach((el) => {
      el.replaceWith(el.cloneNode(true));
    });
  };
});
onDestroy(() => {
  if (cleanup) cleanup();
});
</script>
<aside class="sidebar-wrapper" aria-labelledby="header">
  <h3 id="header">Header</h3>
  <div class="sidebar-linklist-wrapper">
    <nav aria-label="Navigazione laterale principale" class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item medium active" aria-current="page" href="#">
            <span>Link lista 1 (attivo)</span>
          </a>
        </li>
        <li>
          <a class="list-item medium disabled" href="#" aria-disabled="true">
            <span>Link lista 2 (disabilitato)</span>
          </a>
        </li>
        <li>
          <a class="list-item medium" href="#">
            <span>Link lista 3</span>
          </a>
        </li>
        <li>
          <a class="list-item medium" href="#">
            <span>Link lista 4</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  <div class="sidebar-linklist-wrapper linklist-secondary">
    <nav aria-label="Navigazione laterale secondaria" class="link-list-wrapper">
      <ul class="link-list">
        <li>
          <a class="list-item" href="#">
            <span>Link secondario 1</span>
          </a>
        </li>
        <li>
          <a class="list-item active" aria-current="page" href="#">
            <span>Link secondario 2 (attivo)</span>
          </a>
        </li>
        <li>
          <a class="list-item disabled" href="#" aria-disabled="true">
            <span>Link secondario 3 (disabilitato)</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</aside>
