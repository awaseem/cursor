import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { courseRowText } from '../../../styles/fonts'

export interface CouresRowProps {
  title: string
  emoji: string
  disabled?: boolean
}

export function CourseRow({ title, emoji, disabled }: CouresRowProps) {
  return (
    <View style={styles.RowContainer}>
      <Text style={courseRowText}>{title}</Text>
      <Text style={courseRowText}>{emoji}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  RowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
  },
})
