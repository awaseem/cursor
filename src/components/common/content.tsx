import React from 'react'
import { ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { useSafeAreaWithPadding } from '../../hooks/useSafeArea'

export interface ContentProps {
  enableOffset?: boolean
  children: React.ReactNode
}

export function Content({ enableOffset, children }: ContentProps) {
  const { top } = useSafeAreaWithPadding()

  return (
    <KeyboardAvoidingView
      style={styles.FlexContainer}
      behavior="padding"
      enabled
      keyboardVerticalOffset={enableOffset ? 140 + top : 0}
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
