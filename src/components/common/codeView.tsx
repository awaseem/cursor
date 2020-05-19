import React from 'react'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import SyntaxHighlighter from 'react-native-syntax-highlighter'
import { BASE_FONT_SIZE } from '../../styles/fonts'
import { useTheme } from '../../hooks/themeHooks'

export interface CodeViewProps {
  readonly message: string;
  readonly language: 'javascript' | 'python';
}

export function CodeView({ message , language}: CodeViewProps): JSX.Element {
  const { font } = useTheme()

  return (
    <SyntaxHighlighter
      fontSize={BASE_FONT_SIZE * 0.875}
      language={language}
      style={font.syntax}
      customStyle={{ paddingHorizontal: -15 }}
      highlighter={'hljs'}
    >
      {message}
    </SyntaxHighlighter>
  )
}
