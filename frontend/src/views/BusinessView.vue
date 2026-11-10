
<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <main>
    <h1>Perfil del negocio</h1>
    <p>Identificador: {{ route.params.id }}</p>
    <RouterLink to="/">Volver al inicio</RouterLink>
  </main>
</template>
