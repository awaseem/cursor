import { useColorScheme } from 'react-native-appearance'
import { darkTheme, lightTheme, Theme } from '../styles/theme'

export function useTheme(): Theme {
  const colorScheme = useColorScheme()

  if (colorScheme === 'dark') {
    return darkTheme
  }

  return lightTheme
}
