import React from 'react'
import { SafeAreaView, useSafeArea } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'

export interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  const insets = useSafeArea()

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
})
