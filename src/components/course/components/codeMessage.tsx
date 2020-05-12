import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BASE_FONT_SIZE } from '../../../styles/fonts'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { useTheme } from '../../../hooks/themeHooks'

export interface CodeMessageProps {
  readonly message: string
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 30,
  },
})

export function CodeMessage({ message }: CodeMessageProps): JSX.Element {
  const { font } = useTheme()
  return (
    <View style={styles.Container}>
      <SyntaxHighlighter
        fontSize={BASE_FONT_SIZE * 0.875}
        language={'javascript'}
        style={font.syntax}
        customStyle={{ paddingHorizontal: -15 }}
        highlighter={'hljs'}
      >
        {message}
      </SyntaxHighlighter>
    </View>
  )
}
