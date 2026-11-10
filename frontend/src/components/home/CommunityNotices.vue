<script setup>
defineProps({
  notices: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="notices-section">
    <div class="section-heading">
      <div>
        <span class="eyebrow">LO QUE SUCEDE HOY</span>
        <h2>Avisos Comunitarios</h2>
        <p>Promociones y novedades de los negocios locales.</p>
      </div>
    </div>

    <div class="notices-list">
      <article
        v-for="notice in notices"
        :key="notice.id"
        class="notice-card"
      >
        <span class="notice-symbol">{{ notice.symbol }}</span>

        <div class="notice-content">
          <span class="notice-date">{{ notice.date }}</span>
          <h3>{{ notice.business }}</h3>
          <p>{{ notice.message }}</p>
        </div>
      </article>
    </div>
  </section>
</template>