<script setup>
defineProps({
  notices: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="wall-section">
    <div class="wall-header">
      <span class="wall-icon">▤</span>
      <span class="eyebrow">INFORMACIÓN DE INTERÉS</span>
      <h2>El Mural</h2>
      <p>
        Comunicados y avisos generales de nuestra comunidad.
      </p>
    </div>

    <article
      v-for="notice in notices"
      :key="notice.id"
      class="wall-notice"
    >
      <h3>{{ notice.title }}</h3>
      <p>{{ notice.message }}</p>
    </article>

    <span class="wall-footer">Administrado por LCO</span>
  </section>
</template>