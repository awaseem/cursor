import { iOSUIKit } from 'react-native-typography'
import { colors } from './color'
import {
  tomorrowNightBright,
  tomorrow,
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export interface FontTheme {
  readonly welcomeHeading: Record<string, unknown>
  readonly greetingHeading: Record<string, unknown>
  readonly languageHeading: Record<string, unknown>
  readonly languageDescription: Record<string, unknown>
  readonly languageAcronym: Record<string, unknown>
  readonly subtitleHeading: Record<string, unknown>
  readonly titleHeading: Record<string, unknown>
  readonly closeButton: Record<string, unknown>
  readonly courseHeading: Record<string, unknown>
  readonly courseMessage: Record<string, unknown>
  readonly courseRowHeading: Record<string, unknown>
  readonly courseRowText: Record<string, unknown>
  readonly codeMessage: Record<string, unknown>
  readonly syntax: Record<string, unknown>
  readonly toggleHeading: Record<string, unknown>
  readonly toggleDescription: Record<string, unknown>
  readonly helperHeading: Record<string, unknown>
  readonly helperDescription: Record<string, unknown>
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
