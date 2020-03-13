import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { courseMessage } from '../styles/fonts'

export interface CourseMessageProps {
  message: string
}

export function CourseMessage({ message }: CourseMessageProps) {
  return (
    <View style={styles.Container}>
      <Text style={courseMessage}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 30,
  },
})
