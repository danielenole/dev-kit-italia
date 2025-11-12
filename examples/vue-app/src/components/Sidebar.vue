<template>
  <div class="sidebar-wrapper it-line-right-side">
    <div class="sidebar-linklist-wrapper">
      <div class="link-list-wrapper">
        <ul class="link-list">
          <li>
            <h3>Menu di navigazione</h3>
          </li>
          <li>
            <a class="list-item medium active left-icon" href="#">
              <it-icon name="it-calendar" color="primary" size="sm" class="left"></it-icon>
              <span>Pagina attiva</span>
            </a>
          </li>
          <li>
            <a class="list-item medium left-icon" href="#">
              <it-icon name="it-comment" color="primary" size="sm" class="left"></it-icon>
              <span>Sezione 1</span>
            </a>
          </li>
          <li>
            <a class="list-item medium left-icon" href="#">
              <it-icon name="it-camera" color="primary" size="sm" class="left"></it-icon>
              <span>Sezione 2</span>
            </a>
            <ul class="link-sublist">
              <li>
                <a class="list-item" href="#"><span>Sottosezione 2.1</span></a>
              </li>
              <li>
                <a class="list-item" href="#"><span>Sottosezione 2.2</span></a>
              </li>
              <li>
                <a class="list-item" href="#"><span>Sottosezione 2.3</span></a>
              </li>
            </ul>
          </li>
          <li>
            <a class="list-item medium left-icon" href="#">
              <it-icon name="it-file" color="primary" size="sm" class="left"></it-icon>
              <span>Sezione 3</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="sidebar-linklist-wrapper linklist-secondary">
      <div class="link-list-wrapper">
        <ul class="link-list">
          <li>
            <a class="list-item medium left-icon" href="#">
              <it-icon name="it-settings" color="primary" size="sm" class="left"></it-icon>
              <span>Impostazioni</span>
            </a>
          </li>
          <li>
            <a class="list-item medium left-icon" href="#">
              <it-icon name="it-help-circle" color="primary" size="sm" class="left"></it-icon>
              <span>Aiuto</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>
