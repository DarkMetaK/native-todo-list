import { StatusBar } from 'expo-status-bar'

import { ThemesProvider } from './src/contexts/themes'
import { TasksProvider } from './src/contexts/tasks'
import { Home } from './src/screens/Home'

export default function App() {
  return (
    <>
      <StatusBar style="light" translucent={false} />

      <ThemesProvider>
        <TasksProvider>
          <Home />
        </TasksProvider>        
      </ThemesProvider>
    </>
  )
}
