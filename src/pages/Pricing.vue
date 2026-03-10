<template>
  <div
    class="relative w-full min-h-[calc(100vh-64px)] pb-12 bg-gradient-to-br from-gray-50 via-gray-100 to-primary-50/50"
  >
    <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center mb-16">
        <h1 class="text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Simple, Transparent <span class="text-primary-700">Pricing</span>
        </h1>
        <p class="text-xl text-gray-600">Start for free, upgrade when you need to.</p>
      </div>
      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div class="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
          <h3 class="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
          <p class="text-gray-500 mb-6">Perfect for individuals.</p>
          <div class="text-4xl font-extrabold mb-6">
            $0<span class="text-lg text-gray-400 font-medium">/mo</span>
          </div>
          <button
            disabled
            class="w-full py-3 rounded-xl bg-gray-100/50 text-gray-400 font-bold cursor-not-allowed mb-6"
          >
            Current Plan <span class="text-xs ml-1 font-normal">(Coming Soon)</span>
          </button>
          <ul class="space-y-3 text-gray-600 text-sm font-medium">
            <li>✓ Unlimited tasks</li>
            <li>✓ Web & Mobile App</li>
            <li>✓ Basic filters</li>
          </ul>
        </div>
        <div
          class="bg-gray-900 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden transform md:-translate-y-4"
        >
          <div class="absolute top-0 right-0 p-4">
            <span
              class="bg-primary-500 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
              >Popular</span
            >
          </div>
          <h3 class="text-2xl font-bold text-white mb-2">Pro</h3>
          <p class="text-gray-400 mb-6">For high-performing professionals.</p>
          <div class="text-4xl font-extrabold text-white mb-6">
            $12<span class="text-lg text-gray-400 font-medium">/mo</span>
          </div>
          <button
            disabled
            class="w-full py-3 rounded-xl bg-primary-800/50 text-primary-200 font-bold cursor-not-allowed mb-6"
          >
            Upgrade to Pro <span class="text-xs ml-1 font-normal">(Coming Soon)</span>
          </button>
          <ul class="space-y-3 text-gray-300 text-sm font-medium">
            <li>✓ Everything in Starter</li>
            <li>✓ Priority Support</li>
            <li>✓ Advanced Analytics</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
