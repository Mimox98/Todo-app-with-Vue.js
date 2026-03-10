<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTodoStore } from '@/stores/useTodo'
import type { Task } from '@/stores/useTodo'
import ConfirmLifeModal from './ConfirmLifeModal.vue'

const todoStore = useTodoStore()
const router = useRouter()

const props = defineProps<{
  task: Task
}>()

const showConfirmModal = ref(false)

function handleMarkDone() {
  if (props.task.title === 'Get a life') {
    showConfirmModal.value = true
  } else {
    todoStore.markAsDone(props.task.id)
  }
}

function handleLifeConfirmed() {
  todoStore.markAsDone(props.task.id)
  todoStore.confirmLife()
  showConfirmModal.value = false
  router.push('/secretRoute')
}
</script>

<template>
  <div
    class="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-200/80 p-7 flex flex-col gap-5 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
  >
    <div>
      <h2
        class="text-xl font-bold leading-tight mb-2"
        :class="task.done ? 'line-through text-gray-400' : 'text-gray-900'"
      >
        {{ task.title }}
      </h2>
      <p
        class="text-base line-clamp-4 leading-relaxed"
        :class="task.done ? 'text-gray-400' : 'text-gray-600'"
      >
        {{ task.description }}
      </p>
    </div>

    <div class="flex gap-4 mt-auto pt-5 border-t border-gray-100 items-center justify-between">
      <button
        v-if="!task.done"
        class="text-sm font-bold px-5 py-2.5 rounded-xl bg-primary-50 text-primary-700 hover:bg-primary-600 hover:text-white transition-all duration-200 flex-1 shadow-sm hover:shadow-md"
        @click="handleMarkDone()"
      >
        Mark as Done
      </button>
      <div
        v-else
        class="flex-1 flex text-green-600 gap-2 items-center text-base font-bold bg-green-50/50 px-4 py-2 rounded-xl"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            d="M5 13l4 4L19 7"
          />
        </svg>
        Completed
      </div>

      <button
        class="p-2.5 text-gray-400 hover:text-white hover:bg-red-500 rounded-xl transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-sm"
        @click="todoStore.deleteTask(task.id)"
        title="Delete task"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </button>
    </div>
  </div>

  <ConfirmLifeModal
    v-if="showConfirmModal"
    @close="showConfirmModal = false"
    @confirm="handleLifeConfirmed"
  />
</template>
