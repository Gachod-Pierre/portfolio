<script setup lang="ts">
import { logout, estConnecté, login } from '@/auth'
</script>
<template>
  <div>
    <button v-if="estConnecté" @click="logout" class="btn bg-red-900">
      Déconnexion {{ estConnecté.name || estConnecté.username }}
    </button>
    <button v-else @click="login" class="btn bg-blue-900">Connexion</button>
  </div>
</template>
<style scoped>
.btn {
  @apply rounded-md px-4 py-2 font-bold text-white;
}
</style>
