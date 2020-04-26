export interface Colors {
  readonly indicatorColor: string
  readonly separtorColor: string
  readonly buttonMainColor: string
  readonly buttonSucessColor: string
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

  separtorColor: '#4C5454',

  buttonMainColor: '#758282',

  buttonSucessColor: '#1EA896',

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
