import { useContext } from 'react'

import { themesContext } from '../contexts/themes'
import { darkTheme } from '../themes/dark'
import { lightTheme } from '../themes/light'

export function useTheme() {
  const { currentTheme } = useContext(themesContext)

  const colors = currentTheme === 'dark' ? {
    ...darkTheme
  } : {
    ...lightTheme
  }

  return {
    colors,
    activeTheme: currentTheme
  }
}
