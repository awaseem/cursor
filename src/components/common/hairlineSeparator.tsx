import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '../../hooks/themeHooks'

export function HairlineSeparator() {
  const { colors } = useTheme()
  return (
    <View
      style={[
        styles.HairlineWidth,
        {
          borderColor: colors.primary.separtorColor,
          backgroundColor: colors.background,
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  HairlineWidth: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 20,
    marginHorizontal: -20,
  },
})
