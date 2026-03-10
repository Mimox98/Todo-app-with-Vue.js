import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Task {
  id: number
  title: string
  description: string
  done: boolean
}

export const useTodoStore = defineStore('todo', () => {
  const tasks = ref<Task[]>([
    { id: 1, title: 'Learn Vue', description: 'Learn Vue.js fundamentals', done: false },
    {
      id: 2,
      title: 'Build a Todo App',
      description: 'Create a simple todo app using Vue',
      done: false,
    },
    {
      id: 3,
      title: 'Explore Pinia',
      description: 'Understand how to use Pinia for state management',
      done: false,
    },
    {
      id: 4,
      title: 'Learn Tailwind CSS',
      description: 'Style the app using Tailwind CSS',
      done: false,
    },
  ])

  const openTasks = computed(() => tasks.value.filter((t) => !t.done))
  const completedTasks = computed(() => tasks.value.filter((t) => t.done))

  const addTask = (task: Omit<Task, 'done'>) => {
    tasks.value.push({ ...task, done: false })
  }

  const deleteTask = (id: number) => {
    tasks.value = tasks.value.filter((task) => task.id !== id)
  }

  const markAsDone = (id: number) => {
    const task = tasks.value.find((t) => t.id === id)
    if (task) task.done = true
  }

  return { tasks, openTasks, completedTasks, addTask, deleteTask, markAsDone }
})
