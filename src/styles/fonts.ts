import { iOSUIKit, Style } from 'react-native-typography'

export const BASE_FONT_SIZE = 16

export const titleHeading: Style = {
  ...iOSUIKit.subheadEmphasizedObject,
  fontSize: BASE_FONT_SIZE * 1.25,
}
