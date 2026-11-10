<script setup>
defineProps({
  businesses: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <section class="popular-section">
    <div class="section-heading">
      <div>
        <span class="eyebrow">DESCUBRE</span>
        <h2>Los más consultados</h2>
        <p>Emprendimientos que despiertan interés.</p>
      </div>
    </div>

    <div class="business-grid">
      <article
        v-for="business in businesses"
        :key="business.id"
        class="business-card"
      >
        <div class="business-image">
          <span>{{ business.symbol }}</span>
        </div>

        <div class="business-info">
          <span class="category">{{ business.category }}</span>
          <h3>{{ business.name }}</h3>
          <p>{{ business.description }}</p>
          <span class="views">
            ◉ {{ business.views }} consultas
          </span>
        </div>
      </article>
    </div>
  </section>
</template>