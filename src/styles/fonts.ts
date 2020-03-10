import { iOSUIKit, Style } from 'react-native-typography'

export const BASE_FONT_SIZE = 16

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
