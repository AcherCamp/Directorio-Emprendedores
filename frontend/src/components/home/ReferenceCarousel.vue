<script setup>
import { ref } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})

const current = ref(0)

function move(direction, total) {
  current.value =
    (current.value + direction + total) % total
}
</script>

<template>
  <section class="reference-section">
    <div class="section-heading">
      <div>
        <span class="eyebrow">CONOCE NUESTRA COMUNIDAD</span>
        <h2>Puntos referentes</h2>
      </div>
    </div>

    <div class="reference-carousel">
      <button
        class="carousel-arrow previous"
        @click="move(-1, items.length)"
        aria-label="Anterior"
      >‹</button>

      <div class="reference-content" v-if="items.length">
        <span class="reference-symbol">
          {{ items[current].symbol }}
        </span>

        <h3>{{ items[current].name }}</h3>
        <p>{{ items[current].description }}</p>

        <div class="carousel-dots">
          <button
            v-for="(item, index) in items"
            :key="item.id"
            :class="{ active: current === index }"
            @click="current = index"
            :aria-label="`Ver punto ${index + 1}`"
          ></button>
        </div>
      </div>

      <button
        class="carousel-arrow next"
        @click="move(1, items.length)"
        aria-label="Siguiente"
      >›</button>
    </div>
  </section>
</template>