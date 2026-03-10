<template>
  <div class="w-full min-h-[calc(100vh-64px)] pb-12 bg-gray-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 class="text-5xl font-extrabold text-center text-gray-900 tracking-tight mb-6">
        Powerful <span class="text-primary-700">Features</span>
      </h1>
      <p class="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        Everything you need to manage your personal and team tasks seamlessly.
      </p>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="feature in ['Real-time Sync', 'Smart Categorization', 'Progress Analytics']"
          :key="feature"
          class="bg-white/80 rounded-2xl p-8 border border-gray-100 shadow-sm text-center transform hover:-translate-y-1 transition-all"
        >
          <div
            class="w-12 h-12 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center mx-auto mb-4 font-bold"
          >
            ✨
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">{{ feature }}</h3>
          <p class="text-gray-500 text-sm">
            Experience next-level productivity with AI-driven workflows specifically tailored to
            your needs.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
