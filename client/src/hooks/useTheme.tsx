import { useState, useEffect, createContext, useContext } from 'react'

type Themes = 'light' | 'dark'
const themeModes = ['light', 'dark']
const defaultTheme = themeModes[1] as Themes

type ContextProps = {
  theme: Themes,
  toggleTheme: (currentTheme: Themes) => void
}

const ThemeContext = createContext({} as ContextProps)

const getLocalTheme = () => {
  try {
    const localTheme = localStorage && localStorage.getItem('theme')
    if (localTheme && themeModes.includes(localTheme)) {
      return localTheme as Themes
    } else {
      return null
    }
  } catch (error) {
    console.warn('Cannot access local storage: ', error.message)
  }
}

const getTheme = (): Themes => {
  const localTheme = getLocalTheme()
  const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  const browserTheme = isDark ? 'dark' : 'light'
  if (localTheme) {
    return localTheme
  } else {
    return browserTheme
  }
}

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Themes>(defaultTheme)
  
  function toggleTheme(currentTheme: Themes) {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }

  useEffect(() => {
    if (!theme) {
      const initial = getTheme() || defaultTheme
      setTheme(initial)
      initial === 'dark' ? document.documentElement.classList.add('dark') : ''
      return
    }
    theme === 'light' ?
      document.documentElement.classList.remove('dark') :
      document.documentElement.classList.add('dark')
      
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }} >
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => useContext(ThemeContext)

export { ThemeProvider, useThemeContext, themeModes }
