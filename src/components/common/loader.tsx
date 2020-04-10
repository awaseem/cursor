import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { useTheme } from '../../hooks/themeHooks'

interface LoaderProps {
  extraTopSpacing?: number
  disableBackground?: boolean
}

export function Loader({ extraTopSpacing, disableBackground }: LoaderProps) {
  const { colors } = useTheme()
  return (
    <View
      style={[
        styles.Container,
        {
          marginTop: extraTopSpacing ?? 0,
          backgroundColor: disableBackground ? undefined : colors.background,
        },
      ]}
    >
      <ActivityIndicator size={'large'} />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
