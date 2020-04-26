import { FontTheme, fontsLightTheme, fontsDarkTheme } from './fonts'
import { ColorTheme, colorLightTheme, colorDarkTheme } from './color'

export interface Theme {
  readonly type: 'light' | 'dark'
  readonly font: FontTheme
  readonly colors: ColorTheme
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
