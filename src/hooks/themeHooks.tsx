import React from 'react'
import { useColorScheme } from 'react-native-appearance'
import { darkTheme, lightTheme } from '../styles/theme'

export function useTheme() {
  const colorScheme = useColorScheme()

  if (colorScheme === 'dark') {
    return darkTheme
  }

  return lightTheme
}
