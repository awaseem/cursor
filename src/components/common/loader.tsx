import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { useTheme } from '../../hooks/themeHooks'

const ZERO_SPACING = 0

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

interface LoaderProps {
  readonly extraTopSpacing?: number
  readonly disableBackground?: boolean
}

export function Loader({
  extraTopSpacing,
  disableBackground,
}: LoaderProps): JSX.Element {
  const { colors } = useTheme()
  return (
    <View
      style={[
        styles.Container,
        {
          marginTop: extraTopSpacing ?? ZERO_SPACING,
          backgroundColor: disableBackground ? undefined : colors.background,
        },
      ]}
    >
      <ActivityIndicator size={'large'} />
    </View>
  )
}
