import React from 'react'
import { useSafeArea } from 'react-native-safe-area-context'
import { StyleSheet, View } from 'react-native'
import { useColorScheme } from 'react-native-appearance'
import { useTheme } from '../hooks/themeHooks'

export interface ContainerProps {
  children: React.ReactNode
}

export function Container({ children }: ContainerProps) {
  const insets = useSafeArea()
  const { colors } = useTheme()

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top },
        { backgroundColor: colors.background },
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
