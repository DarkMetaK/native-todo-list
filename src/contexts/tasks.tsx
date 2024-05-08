import { ReactNode, createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface TaskProps {
  id: string
  title: string
  completed: boolean
}

interface TasksContext {
  tasks: TaskProps[]
  isLoading: boolean
  addNewTask: (title: string) => void
  updateTask: (id: string) => void
  deleteTask: (id: string) => void
}

interface TasksProvider {
  children: ReactNode
}

export const tasksContext = createContext({} as TasksContext)

export function TasksProvider({ children }: TasksProvider) {
  const [tasks, setTasks] = useState<TaskProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadTasksFromLocalStorage() {
      const tasksJson = await AsyncStorage.getItem('darkmetak-todo')
      
      if (tasksJson !== null) {
        const tasks = JSON.parse(tasksJson)
        setTasks(tasks)
      }

      setIsLoading(false)
    }

    loadTasksFromLocalStorage()
  }, [])

  useEffect(() => {
    async function saveUpdatedTasks() {
      await AsyncStorage.setItem('darkmetak-todo', JSON.stringify(tasks))
      setIsLoading(false)
    }

    setIsLoading(true)
    saveUpdatedTasks()
  }, [tasks])

  function addNewTask(title: string) {
    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: new Date().toISOString(),
        title,
        completed: false,
      }
    ])
  }

  function updateTask(id: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      })
    )
  }

  function deleteTask(id: string) {
    setTasks((state) => state.filter((task) => task.id != id))
  }

  return (
    <tasksContext.Provider value={{
      tasks,
      isLoading,
      addNewTask,
      updateTask,
      deleteTask,
    }}>
      {children}
    </tasksContext.Provider>
  )
}
