<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Auth from './components/Auth.vue'

import { onErrorCaptured, ref } from 'vue'

const error = ref<Error | null>(null)

onErrorCaptured((err, component, info) => {
  console.log({ err, component, info })
  error.value = err
  return true
})
</script>

<template>
  <header>
    <h1>Test</h1>

    <p v-if="error">Erreur : {{ error.message }}</p>

    <Auth />

    <nav class="*:text-red-500 flex flex-col">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <Suspense>
    <template #default>
      <RouterView />
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
