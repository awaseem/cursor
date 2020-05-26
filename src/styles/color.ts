export interface Colors {
  readonly indicatorColor: string
  readonly secondaryIndicatorColor: string
  readonly separtorColor: string
  readonly buttonMainColor: string
  readonly buttonSuccessColor: string
  readonly buttonSelectionColor: string
  readonly buttonErrorColor: string
  readonly codingColor: string
  readonly backgroundPillColor: string
}

export interface ColorTheme {
  readonly background: string
  readonly primary: Colors
}

export const colors: Colors = {
  indicatorColor: '#EF476F',

  secondaryIndicatorColor: '#10B890',

  separtorColor: '#4C5454',

  buttonMainColor: '#758282',

  buttonSuccessColor: '#1EA896',

  buttonSelectionColor: '#105E53',

  buttonErrorColor: '#FF715B',

  codingColor: '#FF715B',

  backgroundPillColor: '#EF476F',
}

export const colorLightTheme: ColorTheme = {
  background: 'white',
  primary: colors,
}

export const colorDarkTheme: ColorTheme = {
  background: 'black',
  primary: colors,
}
