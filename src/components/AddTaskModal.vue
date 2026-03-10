<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits<{
  submit: [title: string, description: string]
  close: []
}>()

const title = ref('')
const description = ref('')
const titleError = ref('')
const descriptionError = ref('')

function validate(): boolean {
  titleError.value = title.value.trim() ? '' : 'Title is required.'
  descriptionError.value = description.value.trim() ? '' : 'Description is required.'
  return !titleError.value && !descriptionError.value
}

function handleSubmit() {
  if (!validate()) return
  emit('submit', title.value.trim(), description.value.trim())
  title.value = ''
  description.value = ''
}
</script>

<template>
  <Transition name="modal-fade">
    <div
      class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      @click.self="emit('close')"
    >
      <Transition name="modal-zoom" appear>
        <!-- Modal -->
        <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative">
          <button
            @click="emit('close')"
            class="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 class="text-2xl font-bold text-gray-900 mb-6">New Task</h2>

          <div class="mb-5">
            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Title</label>
            <input
              v-model="title"
              type="text"
              placeholder="E.g., Design homepage"
              class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all shadow-sm bg-gray-50/50"
              :class="{ 'border-red-500 bg-red-50/50': titleError }"
            />
            <p v-if="titleError" class="text-red-500 text-xs mt-1.5 font-medium">
              {{ titleError }}
            </p>
          </div>

          <div class="mb-8">
            <label class="block text-sm font-semibold text-gray-700 mb-1.5">Description</label>
            <textarea
              v-model="description"
              placeholder="Add details about the task..."
              rows="3"
              class="w-full border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none transition-all shadow-sm bg-gray-50/50"
              :class="{ 'border-red-500 bg-red-50/50': descriptionError }"
            />
            <p v-if="descriptionError" class="text-red-500 text-xs mt-1.5 font-medium">
              {{ descriptionError }}
            </p>
          </div>

          <div class="flex flex-col-reverse sm:flex-row justify-end gap-3">
            <button
              class="w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold text-gray-700 hover:bg-gray-100 transition-colors"
              @click="emit('close')"
            >
              Cancel
            </button>
            <button
              class="w-full sm:w-auto px-5 py-2.5 rounded-xl font-semibold bg-primary-700 text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-100 transition-all shadow-sm"
              @click="handleSubmit"
            >
              Create Task
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>
