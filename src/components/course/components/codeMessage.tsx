import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

export interface CodeMessageProps {
  message: string
}

export function CodeMessage({ message }: CodeMessageProps) {
  const { font, colors } = useTheme()
  const syntaxWithBlank = message
    .split(' ')
    .map(addBlockToBlank(colors.primary.separtorColor))

  return (
    <View style={styles.Container}>
      <Text style={font.codeMessage}>{syntaxWithBlank}</Text>
    </View>
  )
}

function addBlockToBlank(color: string) {
  return (message: string, index: number) => {
    if (message === 'BLANK') {
      return (
        <View key={index} style={styles.BlankSpacing}>
          <View style={[styles.Blank, { borderColor: color }]} />
        </View>
      )
    }
    return message + ' '
  }
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 30,
  },
  BlankSpacing: {
    marginRight: 5,
  },
  Blank: {
    width: 80,
    height: 15,
    borderWidth: 1,
  },
})
