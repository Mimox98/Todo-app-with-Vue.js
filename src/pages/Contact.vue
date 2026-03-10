<template>
  <div class="relative w-full min-h-[calc(100vh-64px)] pb-12 bg-gradient-to-br from-gray-50 via-gray-100 to-primary-50/50">
    <div class="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 class="text-5xl font-extrabold text-gray-900 tracking-tight mb-8">Get in <span class="text-primary-700">Touch</span></h1>
      <p class="text-xl text-gray-600 mb-12">Have a question? We'd love to hear from you.</p>
      <div class="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-gray-100 max-w-xl mx-auto text-left">
        <label class="block text-sm font-semibold text-gray-700 mb-1.5">Email</label>
        <input type="email" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 mb-5 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="hello@example.com">
        <label class="block text-sm font-semibold text-gray-700 mb-1.5">Message</label>
        <textarea rows="4" class="w-full border border-gray-300 rounded-xl px-4 py-2.5 mb-5 focus:outline-none focus:ring-2 focus:ring-primary-500" placeholder="How can we help?"></textarea>
        <button disabled class="w-full bg-primary-800/50 text-white/70 font-bold py-3 rounded-xl cursor-not-allowed">Send Message <span class="text-xs ml-1 font-normal">(Coming Soon)</span></button>
      </div>
    </div>
  </div>
</template>
