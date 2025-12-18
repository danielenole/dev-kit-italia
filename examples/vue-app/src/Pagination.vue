<script setup>
import '@italia/pagination';
import '@italia/icon';
</script>

<template>
  <div class="container">
    <h1>Pagination Examples</h1>

    <section>
      <h2>Con pulsanti avanti e indietro</h2>
      <it-pagination value="3">
        <a href="#" slot="prev">
          <it-icon name="it-chevron-left"></it-icon>
          <span class="visually-hidden">Pagina precedente</span>
        </a>

        <it-pagination-item page="1">
          <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>1</a>
        </it-pagination-item>
        <it-pagination-item page="2">
          <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>2</a>
        </it-pagination-item>
        <it-pagination-item page="3">
          <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>3</a>
        </it-pagination-item>
        <it-pagination-item page="4">
          <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>4</a>
        </it-pagination-item>
        <it-pagination-item page="5">
          <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>5</a>
        </it-pagination-item>

        <a href="#" slot="next">
          <it-icon name="it-chevron-right"></it-icon>
          <span class="visually-hidden">Pagina successiva</span>
        </a>
      </it-pagination>
    </section>

    <section>
      <h2>Simple Mode</h2>
      <it-pagination simple-mode value="1" total="5">
        <a href="#" slot="prev">
          <it-icon name="it-chevron-left"></it-icon>
          <span class="visually-hidden">Pagina precedente</span>
        </a>
        <a href="#" slot="next">
          <it-icon name="it-chevron-right"></it-icon>
          <span class="visually-hidden">Pagina successiva</span>
        </a>
      </it-pagination>
    </section>

    <section>
      <h2>More Mode</h2>
      <it-pagination value="25" total="50" visible-pages="5" disable-responsive>
        <a href="#" slot="prev">
          <it-icon name="it-chevron-left"></it-icon>
          <span class="visually-hidden">Pagina precedente</span>
        </a>

        <it-pagination-item v-for="page in 50" :key="page" :page="page.toString()">
          <a href="#"><span class="d-inline-block d-sm-none">Pagina </span>{{ page }}</a>
        </it-pagination-item>

        <a href="#" slot="next">
          <it-icon name="it-chevron-right"></it-icon>
          <span class="visually-hidden">Pagina successiva</span>
        </a>
      </it-pagination>
    </section>
  </div>
</template>
