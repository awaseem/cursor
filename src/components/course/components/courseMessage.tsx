import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

const styles = StyleSheet.create({
  Container: {
    marginTop: 30,
  },
})

export interface CourseMessageProps {
  readonly message: string
}

export function CourseMessage({ message }: CourseMessageProps): JSX.Element {
  const { font } = useTheme()
  return (
    <View style={styles.Container}>
      <Text style={font.courseMessage}>{message}</Text>
    </View>
  )
}
