<script setup>
import { ref } from 'vue'

const search = ref('')
</script>

<template>
  <form class="search-bar" @submit.prevent>
    <span class="search-icon">⌕</span>

    <input
      v-model="search"
      type="search"
      placeholder="¿Qué estás buscando?"
      aria-label="Buscar emprendimientos"
    />

    <button type="submit" aria-label="Buscar">
      Buscar
    </button>
  </form>
</template>