import { iOSUIKit } from 'react-native-typography'
import { colors } from './color'

export interface FontTheme {
  greetingHeading: Object
  languageHeading: Object
  languageAcronym: Object
  subtitleHeading: Object
  titleHeading: Object
  courseHeading: Object
  courseMessage: Object
  courseRowText: Object
  codeMessage: Object
}

export const BASE_FONT_SIZE = 16

export const fontsLightTheme: FontTheme = {
  greetingHeading: {
    ...iOSUIKit.largeTitleEmphasizedObject,
  },
  languageHeading: {
    ...iOSUIKit.largeTitleEmphasizedWhiteObject,
  },
  languageAcronym: {
    ...iOSUIKit.largeTitleEmphasizedWhiteObject,
  },
  subtitleHeading: {
    ...iOSUIKit.title3Object,
  },
  titleHeading: {
    ...iOSUIKit.title3EmphasizedObject,
    fontSize: BASE_FONT_SIZE * 1.25,
  },
  courseHeading: {
    ...iOSUIKit.title3EmphasizedObject,
    fontSize: BASE_FONT_SIZE * 1.5,
  },
  courseMessage: {
    ...iOSUIKit.bodyObject,
    fontSize: BASE_FONT_SIZE,
    lineHeight: 30,
  },
  courseRowText: {
    ...iOSUIKit.title3Object,
    fontSize: BASE_FONT_SIZE,
  },
  codeMessage: {
    fontFamily: 'Courier',
    fontSize: BASE_FONT_SIZE * 1.1,
    color: colors.codingColor,
  },
}

export const fontsDarkTheme: FontTheme = {
  greetingHeading: {
    ...iOSUIKit.largeTitleEmphasizedWhiteObject,
  },
  languageHeading: {
    ...iOSUIKit.largeTitleEmphasizedWhiteObject,
  },
  languageAcronym: {
    ...iOSUIKit.largeTitleEmphasizedWhiteObject,
  },
  subtitleHeading: {
    ...iOSUIKit.title3WhiteObject,
  },
  titleHeading: {
    ...iOSUIKit.title3EmphasizedWhiteObject,
    fontSize: BASE_FONT_SIZE * 1.25,
  },
  courseHeading: {
    ...iOSUIKit.title3EmphasizedWhiteObject,
    fontSize: BASE_FONT_SIZE * 1.5,
  },
  courseMessage: {
    ...iOSUIKit.bodyWhiteObject,
    fontSize: BASE_FONT_SIZE,
    lineHeight: 30,
  },
  courseRowText: {
    ...iOSUIKit.title3WhiteObject,
    fontSize: BASE_FONT_SIZE,
  },
  codeMessage: {
    fontFamily: 'Courier',
    fontSize: BASE_FONT_SIZE * 1.1,
    color: colors.codingColor,
  },
}
