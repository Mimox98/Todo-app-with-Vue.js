<script setup lang="ts">
const links = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'Updates', href: '/updates' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]
</script>

<template>
  <nav class="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <router-link
          to="/"
          class="text-2xl font-extrabold text-gray-900 tracking-tight flex items-center gap-2 hover:opacity-90 transition-opacity"
        >
          <span
            class="w-8 h-8 rounded bg-primary-700 flex items-center justify-center text-white text-sm"
            >T</span
          >
          TaskFlow
        </router-link>

        <ul class="hidden md:flex gap-8">
          <li v-for="link in links" :key="link.href">
            <router-link
              :to="link.href"
              class="text-sm font-medium text-gray-600 hover:text-primary-700 transition-colors"
              active-class="text-primary-700 font-bold"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>

        <div class="md:hidden flex items-center">
          <button class="text-gray-500 hover:text-gray-900 focus:outline-none">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
