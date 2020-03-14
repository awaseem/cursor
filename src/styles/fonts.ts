import { iOSUIKit, Style } from 'react-native-typography'
import { colors } from './color'

export const BASE_FONT_SIZE = 16

export const greetingHeading: Style = {
  ...iOSUIKit.largeTitleEmphasizedObject,
}

export const languageHeading: Style = {
  ...iOSUIKit.largeTitleEmphasizedObject,
}

export const languageAcronym: Style = {
  ...iOSUIKit.largeTitleEmphasizedWhiteObject,
}

export const subtitleHeading: Style = {
  ...iOSUIKit.title3Object,
}

export const titleHeading: Style = {
  ...iOSUIKit.subheadEmphasizedObject,
  fontSize: BASE_FONT_SIZE * 1.25,
}

export const courseHeading: Style = {
  ...iOSUIKit.title3EmphasizedObject,
  fontSize: BASE_FONT_SIZE * 1.5,
}

export const courseMessage: Style = {
  ...iOSUIKit.bodyObject,
  fontSize: BASE_FONT_SIZE,
  lineHeight: 30,
}

export const codeMessage: Style = {
  fontFamily: 'Courier',
  fontSize: BASE_FONT_SIZE * 1.1,
  color: colors.codingColor,
}
