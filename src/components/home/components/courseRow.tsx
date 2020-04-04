import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { TouchableScale } from '../../common/touchableScale'
import { useTheme } from '../../../hooks/themeHooks'
import { BASE_FONT_SIZE } from '../../../styles/fonts'

export interface CouresRowProps {
  title: string
  description: string
  emoji: string
  borderColor: string
  onPress: () => void
  disabled?: boolean
}

export function CourseRow({
  title,
  description,
  emoji,
  onPress,
  borderColor,
}: CouresRowProps) {
  const { font } = useTheme()
  return (
    <TouchableScale
      onPress={onPress}
      style={[styles.RowContainer, { borderColor }]}
    >
      <Text style={font.courseRowHeading}>{title}</Text>
      <View style={styles.DescriptionContainer}>
        <Text style={font.courseRowText}>{description}</Text>
      </View>
      <View style={styles.EmojiContainer}>
        <Text style={styles.EmojiText}>{emoji}</Text>
      </View>
    </TouchableScale>
  )
}

const styles = StyleSheet.create({
  RowContainer: {
    justifyContent: 'space-between',
    marginBottom: 30,
    padding: 20,
    borderWidth: 2.5,
    borderRadius: 10,
  },
  MessageContainer: {
    marginTop: 5,
  },
  DescriptionContainer: {
    marginTop: 5,
  },
  EmojiContainer: {
    alignItems: 'flex-end',
  },
  EmojiText: {
    marginTop: 5,
    fontSize: BASE_FONT_SIZE * 1.5,
  },
})
