import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

export interface CourseMessageProps {
  message: string
}

export function CourseMessage({ message }: CourseMessageProps) {
  const { font } = useTheme()
  return (
    <View style={styles.Container}>
      <Text style={font.courseMessage}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 30,
  },
})
