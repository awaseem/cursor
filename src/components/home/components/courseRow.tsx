import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { courseRowText } from '../../../styles/fonts'
import { TouchableScale } from '../../touchableScale'

export interface CouresRowProps {
  title: string
  emoji: string
  onPress: () => void
  disabled?: boolean
}

export function CourseRow({ title, emoji, onPress }: CouresRowProps) {
  return (
    <TouchableScale onPress={onPress} style={styles.RowContainer}>
      <Text style={courseRowText}>{title}</Text>
      <Text style={courseRowText}>{emoji}</Text>
    </TouchableScale>
  )
}

const styles = StyleSheet.create({
  RowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    padding: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
})
