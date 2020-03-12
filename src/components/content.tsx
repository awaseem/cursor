import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'

export interface ContentProps {
  children: React.ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1 }}
      contentContainerStyle={styles.Container}
    >
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingTop: 40,
  },
})
