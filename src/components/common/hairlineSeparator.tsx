import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '../../hooks/themeHooks'

export interface HairlineSeparatorProps {
  extraSpacing?: boolean
}

export function HairlineSeparator({ extraSpacing }: HairlineSeparatorProps) {
  const { colors } = useTheme()
  return (
    <View
      style={[
        styles.HairlineWidth,
        {
          borderColor: colors.primary.separtorColor,
          backgroundColor: colors.background,
          marginTop: extraSpacing ? 20 : 0,
        },
      ]}
    />
  )
}

const styles = StyleSheet.create({
  HairlineWidth: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: -20,
  },
})
