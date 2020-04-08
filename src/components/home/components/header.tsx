import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'
import { TouchableScale } from '../../common/touchableScale'

export interface HeaderProps {
  title: string
  subtitle?: string
  icon?: {
    emoji: string
    onPress: () => void
  }
}

export function Header({ title, subtitle, icon }: HeaderProps) {
  const { font } = useTheme()
  return (
    <View style={styles.Container}>
      <View>
        <Text style={font.greetingHeading}>{title}</Text>
        {subtitle && (
          <Text style={[font.subtitleHeading, styles.SubtitleContainer]}>
            {subtitle}
          </Text>
        )}
      </View>
      {icon && (
        <TouchableScale onPress={icon.onPress}>
          <Text style={font.closeButton}>{icon.emoji}</Text>
        </TouchableScale>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  SubtitleContainer: {
    marginTop: 20,
  },
})
