<script setup lang="ts">
import { pb } from '@/backend'

const testData = await pb.collection('test').getFullList()
</script>

<template>
  <main>
    bonjour de home
    <ul>
      <li v-for="item in testData" :key="item.id">
        {{ item.text }}
      </li>
    </ul>
  </main>
</template>
