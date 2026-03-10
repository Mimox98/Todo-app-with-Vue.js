<script setup lang="ts">
import { ref, computed } from 'vue'
import TodoCard from '../components/TodoCard.vue'
import AddTaskModal from '../components/AddTaskModal.vue'
import { useTodoStore } from '../stores/useTodo'

const todoStore = useTodoStore()
const activeTab = ref<'todo' | 'completed'>('todo')
const showModal = ref(false)

const visibleTasks = computed(() =>
  activeTab.value === 'todo' ? todoStore.openTasks : todoStore.completedTasks,
)

function handleAddTask(title: string, description: string) {
  todoStore.addTask({ id: Date.now(), title, description })
  showModal.value = false
}
</script>

<template>
  <div class="w-full min-h-[calc(100vh-64px)] pb-12 bg-gray-50">
    <div>
      <!-- Hero Section -->
      <section class="relative overflow-hidden bg-gray-900 shadow-lg">
        <!-- Background Looping Video -->
        <video
          autoplay
          loop
          muted
          playsinline
          class="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen pointer-events-none"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-4174-large.mp4"
            type="video/mp4"
          />
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/friday.mp4"
            type="video/mp4"
          />
        </video>

        <!-- Deep dark red overlay -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-gray-900/90 to-primary-900/80 pointer-events-none"
        ></div>

        <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 text-center">
          <h1
            class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 drop-shadow-xl"
          >
            Manage your work with
            <span
              class="text-primary-500 animate-pulse inline-block [text-shadow:0_0_15px_theme(colors.primary.500)] hover:[text-shadow:0_0_25px_theme(colors.primary.500),0_0_40px_theme(colors.primary.500),0_0_60px_theme(colors.primary.500)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >clarity</span
            >.
          </h1>
          <p
            class="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-xl mx-auto drop-shadow-lg font-medium"
          >
            Stay focused, organized, and on track. Add your tasks, mark them complete, and feel the
            productivity flow (and then disappear again the moment you refresh the page, lol).
          </p>
        </div>
      </section>

      <!-- Main Content -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-6 mb-10">
          <!-- Tabs -->
          <div
            class="inline-flex bg-gray-100/80 p-1.5 rounded-xl border border-gray-200 shadow-sm w-full sm:w-auto"
          >
            <button
              class="flex-1 sm:flex-none px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200"
              :class="
                activeTab === 'todo'
                  ? 'bg-white text-primary-700 shadow shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
              "
              @click="activeTab = 'todo'"
            >
              To-Do
              <span
                class="ml-1.5 px-2 py-0.5 rounded-full text-xs"
                :class="
                  activeTab === 'todo'
                    ? 'bg-primary-50 text-primary-700'
                    : 'bg-gray-200 text-gray-500'
                "
              >
                {{ todoStore.openTasks.length }}
              </span>
            </button>
            <button
              class="flex-1 sm:flex-none px-6 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200"
              :class="
                activeTab === 'completed'
                  ? 'bg-white text-green-700 shadow shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
              "
              @click="activeTab = 'completed'"
            >
              Completed
              <span
                class="ml-1.5 px-2 py-0.5 rounded-full text-xs"
                :class="
                  activeTab === 'completed'
                    ? 'bg-green-50 text-green-700'
                    : 'bg-gray-200 text-gray-500'
                "
              >
                {{ todoStore.completedTasks.length }}
              </span>
            </button>
          </div>

          <!-- Add Button -->
          <button
            class="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold shadow-sm shadow-primary-700/20 hover:bg-primary-800 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-100"
            @click="showModal = true"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 4v16m8-8H4"
              />
            </svg>
            New Task
          </button>
        </div>

        <!-- Task Grid -->
        <TransitionGroup
          name="list"
          tag="div"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative"
        >
          <TodoCard v-for="task in visibleTasks" :key="task.id" :task="task" />
        </TransitionGroup>

        <!-- Empty State -->
        <div
          v-if="!visibleTasks.length"
          class="bg-white border text-center border-dashed border-gray-300 rounded-2xl p-12 mt-6"
        >
          <div
            class="h-16 w-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <svg
              class="w-8 h-8 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">No tasks found</h3>
          <p class="text-gray-500 max-w-sm mx-auto">
            {{
              activeTab === 'todo'
                ? "You've caught up on all your work! Why not take a break or add a new task?"
                : "You haven't completed any tasks yet. Let's get to work!"
            }}
          </p>
          <button
            v-if="activeTab === 'todo'"
            class="mt-6 text-primary-700 font-semibold hover:text-primary-800 transition-colors"
            @click="showModal = true"
          >
            + Create your first task
          </button>
        </div>
      </section>
    </div>

    <!-- Modal lives outside the main flow to cover everything -->
    <AddTaskModal v-if="showModal" @submit="handleAddTask" @close="showModal = false" />
  </div>
</template>
