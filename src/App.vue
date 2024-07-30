<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { onErrorCaptured, ref, onMounted } from 'vue'

import { initCustomCursor } from './assets/custom-cursor'

const error = ref<Error | null>(null)

onErrorCaptured((err, component, info) => {
  console.log({ err, component, info })
  error.value = err
  return true
})

onMounted(() => {
  console.log('Vue app mounted')
  initCustomCursor()
})
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>
