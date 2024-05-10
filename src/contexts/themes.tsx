import { ReactNode, createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

interface ThemesContext {
  currentTheme: string
  toggleTheme: () => void
}

interface ThemesProvider {
  children: ReactNode
}

export const themesContext = createContext({} as ThemesContext)

export function ThemesProvider({ children }: ThemesProvider) {
  const [currentTheme, setCurrentTheme] = useState('dark')

  useEffect(() => {
    async function loadCurrentThemeFromLocalStorage() {
      const theme = await AsyncStorage.getItem('darkmetak-todo:themes')
      
      if (theme !== null) {
        setCurrentTheme(theme)
      }
    }

    loadCurrentThemeFromLocalStorage()
  }, [])

  useEffect(() => {
    async function saveCurrentTheme() {
      await AsyncStorage.setItem('darkmetak-todo:themes', currentTheme)
    }

    saveCurrentTheme()
  }, [currentTheme])

  function toggleTheme() {
    setCurrentTheme((state) => {
      if (state === 'dark') {
        return 'light'
      }

      return 'dark'
    })
  }

  return (
    <themesContext.Provider value={{
      currentTheme,
      toggleTheme,
    }}>
      {children}
    </themesContext.Provider>
  )
}
