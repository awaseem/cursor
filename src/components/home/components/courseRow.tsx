import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TouchableScale } from '../../common/touchableScale'
import { useTheme } from '../../../hooks/themeHooks'

export interface CouresRowProps {
  title: string
  emoji: string
  borderColor: string
  onPress: () => void
  disabled?: boolean
}

export function CourseRow({
  title,
  emoji,
  onPress,
  borderColor,
}: CouresRowProps) {
  const { font } = useTheme()
  return (
    <TouchableScale
      onPress={onPress}
      style={[styles.RowContainer, { borderColor: borderColor }]}
    >
      <Text style={font.courseRowText}>{title}</Text>
      <Text style={font.courseRowText}>{emoji}</Text>
    </TouchableScale>
  )
}

const styles = StyleSheet.create({
  RowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    padding: 20,
    borderWidth: 1,
    borderRadius: 10,
  },
})
