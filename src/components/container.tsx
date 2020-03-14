import React from 'react'
import { useSafeArea } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { useColorScheme } from 'react-native-appearance'

export interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  const insets = useSafeArea()
  const colorScheme = useColorScheme()

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top },
        { backgroundColor: colorScheme === 'dark' ? 'black' : 'white' },
      ]}
    >
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
