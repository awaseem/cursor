import React from 'react'
import { View, StyleSheet } from 'react-native'
import { BASE_FONT_SIZE } from '../../../styles/fonts'
// @ts-ignore
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { useTheme } from '../../../hooks/themeHooks'

export interface CodeMessageProps {
  message: string
}

export function CodeMessage({ message }: CodeMessageProps) {
  const { font } = useTheme()
  return (
    <View style={styles.Container}>
      <SyntaxHighlighter
        fontSize={BASE_FONT_SIZE}
        language={'javascript'}
        style={font.syntax}
        highlighter={'hljs'}
      >
        {message}
      </SyntaxHighlighter>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 30,
  },
})
