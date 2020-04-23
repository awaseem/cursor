import React from 'react'
import { ScrollView, StyleSheet, KeyboardAvoidingView } from 'react-native'
import { useSafeAreaWithPadding } from '../../hooks/useSafeArea'

const OFFSET = 140
const ZERO_OFFSET = 0

const styles = StyleSheet.create({
  FlexContainer: {
    flex: 1,
  },
  Container: {
    paddingTop: 40,
    paddingBottom: 40,
  },
})

export interface ContentProps {
  readonly enableOffset?: boolean
  readonly children: React.ReactNode
}

export function Content({ enableOffset, children }: ContentProps): JSX.Element {
  const { top } = useSafeAreaWithPadding()

  return (
    <KeyboardAvoidingView
      style={styles.FlexContainer}
      behavior="padding"
      enabled
      keyboardVerticalOffset={enableOffset ? OFFSET + top : ZERO_OFFSET}
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
