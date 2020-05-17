import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '../../hooks/themeHooks'

const EXTRA_SPACING = 20
const ZERO_SPACING = 0

const styles = StyleSheet.create({
  HairlineWidth: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: -20,
  },
})

export interface HairlineSeparatorProps {
  readonly extraSpacing?: boolean
}

export function HairlineSeparator({
  extraSpacing,
}: HairlineSeparatorProps): JSX.Element {
  const { colors } = useTheme()
  return (
    <View
      style={[
        styles.HairlineWidth,
        {
          borderColor: colors.primary.separatorColor,
          backgroundColor: colors.background,
          marginTop: extraSpacing ? EXTRA_SPACING : ZERO_SPACING,
        },
      ]}
    />
  )
}
