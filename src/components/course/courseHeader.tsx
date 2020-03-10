import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { courseHeading } from '../../styles/fonts'

export interface CourseHeaderProps {
  title: string
}

export function CourseHeaderProps({ title }: CourseHeaderProps) {
  return (
    <View style={styles.Container}>
      <Text style={courseHeading}>{title}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  Container: {
    marginHorizontal: 10,
  },
})
