import { StatusBar } from 'expo-status-bar'

import { TasksProvider } from './src/contexts/tasks'
import { Home } from './src/screens/Home'

export default function App() {
  return (
    <>
      <StatusBar style="light" translucent={false} />

      <TasksProvider>
        <Home />
      </TasksProvider>
    </>
  )
}
