import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'
import { TouchableOpacity } from 'react-native-gesture-handler'

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

export interface HeaderProps {
  readonly title: string
  readonly subtitle?: string
  readonly icon?: {
    readonly emoji: string
    readonly onPress: () => void
  }
}

export function Header({ title, subtitle, icon }: HeaderProps): JSX.Element {
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
        <TouchableOpacity onPress={icon.onPress}>
          <Text style={font.closeButton}>{icon.emoji}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}
