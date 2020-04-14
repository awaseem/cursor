import { iOSUIKit } from 'react-native-typography'
import { colors } from './color'
import {
  tomorrowNightBright,
  tomorrow,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export interface FontTheme {
  welcomeHeading: Object
  greetingHeading: Object
  languageHeading: Object
  languageDescription: Object
  languageAcronym: Object
  subtitleHeading: Object
  titleHeading: Object
  closeButton: Object
  courseHeading: Object
  courseMessage: Object
  courseRowHeading: Object
  courseRowText: Object
  codeMessage: Object
  syntax: Object
  toggleHeading: Object
  toggleDescription: Object
  helperHeading: Object
  helperDescription: Object
}

export const BASE_FONT_SIZE = 16

export const fontsLightTheme: FontTheme = {
  welcomeHeading: {
    fontSize: BASE_FONT_SIZE * 4,
  },
  greetingHeading: {
    ...iOSUIKit.largeTitleEmphasizedObject,
  },
  languageHeading: {
    ...iOSUIKit.largeTitleEmphasizedObject,
  },
  languageDescription: {
    ...iOSUIKit.bodyObject,
  },
  languageAcronym: {
    ...iOSUIKit.largeTitleEmphasizedObject,
  },
  subtitleHeading: {
    ...iOSUIKit.title3Object,
  },
  titleHeading: {
    ...iOSUIKit.title3EmphasizedObject,
    fontSize: BASE_FONT_SIZE * 1.25,
  },
  closeButton: {
    ...iOSUIKit.title3Object,
    fontSize: BASE_FONT_SIZE * 1.25,
    color: colors.buttonErrorColor,
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
  courseRowHeading: {
    ...iOSUIKit.title3EmphasizedObject,
    fontSize: BASE_FONT_SIZE,
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
  syntax: tomorrow,
  toggleHeading: {
    ...iOSUIKit.bodyEmphasizedObject,
  },
  toggleDescription: {
    ...iOSUIKit.subheadObject,
  },
  helperHeading: {
    ...iOSUIKit.bodyEmphasizedWhiteObject,
  },
  helperDescription: {
    ...iOSUIKit.subheadWhiteObject,
  },
}

export const fontsDarkTheme: FontTheme = {
  welcomeHeading: {
    fontSize: BASE_FONT_SIZE * 4,
  },
  greetingHeading: {
    ...iOSUIKit.largeTitleEmphasizedWhiteObject,
  },
  languageHeading: {
    ...iOSUIKit.largeTitleEmphasizedWhiteObject,
  },
  languageDescription: {
    ...iOSUIKit.bodyWhiteObject,
  },
  languageAcronym: {
    ...iOSUIKit.largeTitleEmphasizedWhiteObject,
  },
  subtitleHeading: {
    ...iOSUIKit.title3WhiteObject,
  },
  titleHeading: {
    ...iOSUIKit.title3EmphasizedWhiteObject,
  },
  closeButton: {
    ...iOSUIKit.title3Object,
    color: colors.buttonErrorColor,
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
  courseRowHeading: {
    ...iOSUIKit.title3EmphasizedWhiteObject,
    fontSize: BASE_FONT_SIZE,
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
  syntax: tomorrowNightBright,
  toggleHeading: {
    ...iOSUIKit.bodyEmphasizedWhiteObject,
  },
  toggleDescription: {
    ...iOSUIKit.subheadWhiteObject,
  },
  helperHeading: {
    ...iOSUIKit.bodyEmphasizedWhiteObject,
  },
  helperDescription: {
    ...iOSUIKit.subheadWhiteObject,
  },
}
