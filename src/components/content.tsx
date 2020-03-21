import React from 'react'
import { ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'

export interface ContentProps {
  children: React.ReactNode
}

export function Content({ children }: ContentProps) {
  return (
    <KeyboardAvoidingView
      style={styles.FlexContainer}
      behavior="padding"
      enabled
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.FlexContainer}
        contentContainerStyle={styles.Container}
      >
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  FlexContainer: {
    flex: 1,
  },
  Container: {
    paddingTop: 40,
    paddingBottom: 40,
  },
})
