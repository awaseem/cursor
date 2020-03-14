import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { greetingHeading, subtitleHeading } from '../../../styles/fonts'

export interface HeaderProps {
  title: string
  subtitle?: string
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <View style={styles.Container}>
      <Text style={greetingHeading}>{title}</Text>
      {subtitle && (
        <Text style={[subtitleHeading, styles.SubtitleContainer]}>
          {subtitle}
        </Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 60,
  },
  SubtitleContainer: {
    marginTop: 20,
  },
})
