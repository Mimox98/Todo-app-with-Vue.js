<template>
  <div class="relative w-full h-full min-h-[calc(100vh-64px)] pb-12 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none z-0 bg-gradient-to-br from-gray-50 via-gray-100 to-primary-50/50"></div>
    <div class="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 class="text-5xl font-extrabold text-gray-900 tracking-tight mb-12 text-center">Product <span class="text-primary-700">Updates</span></h1>
      <div class="space-y-8">
        <div class="flex gap-6 items-start relative pl-8 border-l-2 border-primary-200">
          <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-primary-50"></div>
          <div>
            <div class="text-sm font-bold text-primary-600 mb-1">March 2026</div>
            <h2 class="text-2xl font-bold text-gray-900 mb-2">The AI Redesign Release</h2>
            <p class="text-gray-600 bg-white/80 p-5 rounded-2xl shadow-sm border border-gray-100">We've completely overhauled the UI to match modern SaaS standards and implemented blazing fast client-side performance.</p>
          </div>
        </div>
        <div class="flex gap-6 items-start relative pl-8 border-l-2 border-primary-200">
          <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-300 border-4 border-white"></div>
          <div class="opacity-70">
            <div class="text-sm font-bold text-gray-500 mb-1">January 2026</div>
            <h2 class="text-2xl font-bold text-gray-700 mb-2">Initial Alpha Launch</h2>
            <p class="text-gray-500 bg-white/60 p-5 rounded-2xl shadow-sm border border-gray-100">The very first version of TaskFlow allowed users to add, mark complete, and delete tasks in real-time.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
