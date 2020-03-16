import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { useTheme } from '../hooks/themeHooks'

export function Loader() {
  const { colors } = useTheme()
  return (
    <View style={[styles.Container, { backgroundColor: colors.background }]}>
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
