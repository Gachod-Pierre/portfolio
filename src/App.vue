<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { onErrorCaptured, ref } from 'vue'

const error = ref<Error | null>(null)

onErrorCaptured((err, component, info) => {
  console.log({ err, component, info })
  error.value = err
  return true
})
</script>

<template>
  <Suspense>
    <template #default>
      <RouterView />
    </template>

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>
</template>
