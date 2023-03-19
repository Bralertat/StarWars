import { createContext, useContext, useState } from 'react'
import { changeCssVariables } from 'services/changeCssVariables'

export const DARK_THEME = 'dark'
export const LIGHT_THEME = 'light'
export const NEUTRAL_THEME = 'neutral'

const ThemeContext = createContext()

const ThemeProvider = ({ children, ...props }) => {
  const [theme, setTheme] = useState(null)

  const change = themeName => {
    setTheme(themeName)
    changeCssVariables(themeName)
  }
  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        change: change
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeProvider

export const useTheme = () => useContext(ThemeContext)
