<script setup lang="ts">
defineEmits<{
  close: []
  confirm: []
}>()
</script>

<template>
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    @click.self="$emit('close')"
  >
    <div class="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full mx-4 text-center">
      <div class="text-6xl mb-4">🤨</div>
      <h2 class="text-2xl font-extrabold text-gray-900 mb-2">Hold on a second...</h2>
      <p class="text-gray-500 text-base mb-8">
        Are you <span class="font-semibold text-gray-800">sure</span> you want to complete this
        task? This is a big commitment.
      </p>
      <div class="flex gap-3">
        <button
          class="flex-1 flex items-center justify-center gap-2 bg-red-50 text-red-600 font-bold py-3 rounded-xl border border-red-100 hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200"
          @click="$emit('close')"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          Close
        </button>
        <button
          class="flex-1 flex items-center justify-center gap-2 bg-green-50 text-green-700 font-bold py-3 rounded-xl border border-green-100 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-200"
          @click="$emit('confirm')"
        >
          <svg
            class="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="3"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          Confirm
        </button>
      </div>
    </div>
  </div>
</template>
