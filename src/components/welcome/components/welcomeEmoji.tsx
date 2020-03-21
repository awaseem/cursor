import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

export function WelcomeEmoji() {
  const { font } = useTheme()

  return (
    <View>
      <Text style={font.welcomeHeading}>{'👋'}</Text>
    </View>
  )
}
