import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { useTheme } from '../../hooks/themeHooks'
import { BASE_FONT_SIZE } from '../../styles/fonts'

export interface EmptyScreenProps {
  emoji: string
  description: string
}

export function EmptyScreen({ emoji, description }: EmptyScreenProps) {
  const { font } = useTheme()
  return (
    <View style={styles.TextContainer}>
      <Text style={styles.Emoji}>{emoji}</Text>
      <Text style={font.courseHeading}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  TextContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  Emoji: {
    fontSize: BASE_FONT_SIZE * 5,
    marginBottom: 20,
  },
})
