<script setup lang="ts"></script>

<template>
  <footer class="bg-gray-900 text-gray-300 py-12 mt-20 border-t border-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="col-span-1 md:col-span-2">
          <a href="/" class="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
            <span
              class="w-8 h-8 rounded bg-primary-700 flex items-center justify-center text-white text-sm"
              >T</span
            >
            TaskFlow
          </a>
          <p class="mt-4 text-gray-400 max-w-sm">
            Elevate your personal productivity with our beautifully designed, high-performance task
            management application.
          </p>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Product</h3>
          <ul class="space-y-3">
            <li><a href="#" class="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Pricing</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Updates</a></li>
          </ul>
        </div>

        <div>
          <h3 class="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
          <ul class="space-y-3">
            <li><a href="#" class="hover:text-white transition-colors">About</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} TaskFlow, Inc. All rights reserved.
        </p>
        <div class="flex gap-6">
          <a href="#" class="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" class="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>
