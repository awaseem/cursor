import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

export interface CourseHeaderProps {
  title: string
}

export function CourseHeader({ title }: CourseHeaderProps) {
  const { font } = useTheme()
  return (
    <View style={styles.Container}>
      <Text style={font.courseHeading}>{title}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  Container: {},
})
