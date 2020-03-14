import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

export interface HeaderProps {
  title: string
  subtitle?: string
}

export function Header({ title, subtitle }: HeaderProps) {
  const { font } = useTheme()
  return (
    <View style={styles.Container}>
      <Text style={font.greetingHeading}>{title}</Text>
      {subtitle && (
        <Text style={[font.subtitleHeading, styles.SubtitleContainer]}>
          {subtitle}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 40,
  },
  SubtitleContainer: {
    marginTop: 20,
  },
})
