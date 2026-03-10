<template>
  <div class="w-full min-h-[calc(100vh-64px)] pb-12 bg-gray-50">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 class="text-5xl font-extrabold text-center text-gray-900 tracking-tight mb-12">
        Latest <span class="text-primary-700">Insights</span>
      </h1>
      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="i in 4"
          :key="i"
          class="bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all"
        >
          <p class="text-sm font-semibold text-primary-600 mb-2">Productivity</p>
          <h2 class="text-xl font-bold text-gray-900 mb-3">
            10 Ways to Master Your Daily Workflow
          </h2>
          <p class="text-gray-600 mb-4 line-clamp-2">
            Discover the secrets to staying on track and getting your tasks done efficiently without
            burning out.
          </p>
          <span class="text-gray-400 font-semibold cursor-not-allowed"
            >Read more &rarr; <span class="text-xs ml-1 font-normal">(Coming Soon)</span></span
          >
        </div>
      </div>
    </div>
  </div>
</template>
