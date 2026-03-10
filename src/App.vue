<script setup lang="ts">
import TopNavbar from './components/TopNavbar.vue'
import FooterComponent from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-gray-50 font-sans relative overflow-x-hidden">
    <TopNavbar class="relative z-40" />

    <main class="flex-grow w-full relative z-10">
      <router-view />
    </main>

    <FooterComponent class="relative z-50 bg-gray-900" />
  </div>
</template>

<style scoped></style>
