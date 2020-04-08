export interface Colors {
  indicatorColor: string
  separtorColor: string
  buttonMainColor: string
  buttonSucessColor: string
  buttonSelectionColor: string
  buttonErrorColor: string
  codingColor: string
}

export interface ColorTheme {
  background: string
  primary: Colors
}

export const colors: Colors = {
  indicatorColor: '#1EA896',

  separtorColor: '#4C5454',

  buttonMainColor: '#758282',

  buttonSucessColor: '#1EA896',

  buttonSelectionColor: '#105E53',

  buttonErrorColor: '#FF715B',

  codingColor: '#FF715B',
}

export const colorLightTheme: ColorTheme = {
  background: 'white',
  primary: colors,
}

export const colorDarkTheme: ColorTheme = {
  background: 'black',
  primary: colors,
}
