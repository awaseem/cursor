import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { TouchableScale } from '../../common/touchableScale'
import { useTheme } from '../../../hooks/themeHooks'

export interface LanguageCardProps {
  color: string
  title: string
  emoji: string
  onPress: () => void
}

export function LanguageCard({
  color,
  title,
  emoji,
  onPress,
}: LanguageCardProps) {
  const { font } = useTheme()
  return (
    <TouchableScale
      onPress={onPress}
      style={[styles.CardContainer, { backgroundColor: color }]}
    >
      <Text style={font.languageHeading}>{title}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Text style={font.languageAcronym}>{emoji}</Text>
      </View>
    </TouchableScale>
  )
}

const styles = StyleSheet.create({
  CardContainer: {
    width: 350,
    height: 150,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: 'space-around',
  },
})
