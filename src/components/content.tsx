import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

export interface ContentProps {
  children: React.ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <ScrollView contentContainerStyle={styles.Container}>{children}</ScrollView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingTop: 40,
  },
})
