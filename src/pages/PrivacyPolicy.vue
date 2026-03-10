<template>
  <div class="w-full min-h-[calc(100vh-64px)] pb-12 bg-gray-50">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <h1 class="text-5xl font-extrabold text-gray-900 tracking-tight mb-4 text-center">
        Privacy <span class="text-primary-700">Policy</span>
      </h1>
      <p class="text-center text-gray-400 italic mb-12">
        Last updated: Whenever we felt like it. Probably never.
      </p>

      <div
        class="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8 text-gray-600"
      >
        <div
          class="bg-yellow-50 border border-yellow-200 rounded-xl p-4 text-sm text-yellow-800 font-medium"
        >
          🎉 Congratulations! You are one of approximately 3 people in human history to actually
          open this page. Your reward: a slightly uncomfortable amount of honesty.
        </div>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">1. What We Collect</h2>
          <p>
            We collect absolutely nothing. This is a Vue.js demo project running entirely in your
            browser. There is no server. There is no database. There is no shadowy data broker
            rubbing his hands together in a dark room. Your tasks live in memory and vanish the
            moment you refresh the page, like most of your New Year's resolutions.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">2. Cookies</h2>
          <p>
            We don't use cookies. We considered it, then realized we'd have to write this entire
            page for real, and that sounded exhausting. If you're hungry for cookies, we recommend
            the double chocolate chip variety from your local bakery. They are considerably more
            useful than tracking cookies.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">3. Third-Party Sharing</h2>
          <p>
            We share your data with exactly zero third parties. We couldn't share it even if we
            wanted to — we don't have it. We're not even sure who "we" is at this point. It's just a
            Vue component.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">4. Your Rights</h2>
          <p>
            Under the GDPR, CCPA, and every other scary acronym you've heard of, you have the right
            to access, correct, and delete your data. Congrats — your data is the contents of a
            <code class="bg-gray-100 text-primary-700 px-1.5 py-0.5 rounded font-mono text-sm"
              >ref([])</code
            >
            in a Pinia store. You can exercise all your rights by pressing F5.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">5. Security</h2>
          <p>
            Your data is stored with military-grade security: inside your own browser tab. No
            hackers have ever stolen data from a Vue.js reactive array (we think). We are 73%
            confident about this.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">6. Changes to This Policy</h2>
          <p>
            We reserve the right to change this policy at any time, for any reason, including but
            not limited to: boredom, a dare, or the heat death of the universe. We will not notify
            you because, again, we have no idea who you are.
          </p>
        </section>

        <section>
          <h2 class="text-xl font-bold text-gray-900 mb-3">7. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy, please go to the
            <RouterLink to="/contact" class="text-primary-700 font-semibold hover:underline"
              >Contact page</RouterLink
            >
            and fill in the form that doesn't actually submit anything. We find this poetic.
          </p>
        </section>

        <p class="text-sm text-gray-400 italic border-t border-gray-100 pt-6">
          By continuing to use this app you agree to these terms. By not continuing to use it, you
          also agree. There is no escape. Have a great day! 🙂
        </p>
      </div>
    </div>
  </div>
</template>
