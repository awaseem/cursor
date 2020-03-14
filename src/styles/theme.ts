import { FontTheme, fontsLightTheme, fontsDarkTheme } from './fonts'
import { ColorTheme, colorLightTheme, colorDarkTheme } from './color'

export interface Theme {
  font: FontTheme
  colors: ColorTheme
}

export const lightTheme: Theme = {
  font: fontsLightTheme,
  colors: colorLightTheme,
}

export const darkTheme: Theme = {
  font: fontsDarkTheme,
  colors: colorDarkTheme,
}
