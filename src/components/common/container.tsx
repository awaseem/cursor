import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '../../hooks/themeHooks'
import { useSafeAreaWithPadding } from '../../hooks/useSafeArea'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
})

export interface ContainerProps {
  readonly children?: React.ReactNode
}

export function Container({ children }: ContainerProps): JSX.Element {
  const { top } = useSafeAreaWithPadding()
  const { colors } = useTheme()

  return (
    <View
      style={[
        styles.container,
        { paddingTop: top },
        { backgroundColor: colors.background },
      ]}
    >
      {children}
    </View>
  )
}
