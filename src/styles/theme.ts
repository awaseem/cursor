import { FontTheme, fontsLightTheme, fontsDarkTheme } from './fonts'
import { ColorTheme, colorLightTheme, colorDarkTheme } from './color'

export interface Theme {
  type: 'light' | 'dark'
  font: FontTheme
  colors: ColorTheme
}

export const lightTheme: Theme = {
  type: 'light',
  font: fontsLightTheme,
  colors: colorLightTheme,
}

export const darkTheme: Theme = {
  type: 'dark',
  font: fontsDarkTheme,
  colors: colorDarkTheme,
}
