<script setup lang="ts">
import { useTodoStore } from '@/stores/useTodo'

const todoStore = useTodoStore()
</script>

<template>
  <div
    class="w-full min-h-[calc(100vh-64px)] bg-gray-50 flex items-center justify-center px-4 py-16"
  >
    <!-- State: confirmed = false (stumbled here somehow) -->
    <div
      v-if="!todoStore.getLifeConfirmed"
      class="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto"
    >
      <img
        src="https://media.giphy.com/media/3o7527pa7qs9kCG78A/giphy.gif"
        alt="Bruh"
        class="w-64 h-64 rounded-2xl object-cover shadow-lg shrink-0"
      />
      <div>
        <p class="text-sm font-bold text-red-400 uppercase tracking-widest mb-3">Seriously?</p>
        <h1 class="text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Bruh. <br />
          <span class="text-primary-700">Get a life</span><br />
          for real!
        </h1>
        <p class="text-gray-500 text-lg">
          You somehow ended up here without even trying. That's... impressive in a sad way.
        </p>
      </div>
    </div>

    <!-- State: confirmed = true (earned it) -->
    <div v-else class="flex flex-col md:flex-row items-center gap-12 max-w-4xl mx-auto">
      <img
        src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif"
        alt="Congratulations"
        class="w-64 h-64 rounded-2xl object-cover shadow-lg shrink-0"
      />
      <div>
        <p class="text-sm font-bold text-green-500 uppercase tracking-widest mb-3">
          Achievement Unlocked 🏆
        </p>
        <h1 class="text-6xl font-extrabold text-gray-900 leading-tight mb-4">
          Congratulations, <br />
          <span class="text-green-600">you now have</span><br />
          a life!
        </h1>
        <p class="text-gray-500 text-lg">Use it carefully. It's the only one you've got. 🌟</p>
      </div>
    </div>
  </div>
</template>
