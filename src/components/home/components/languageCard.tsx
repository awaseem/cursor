import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'
import { TouchableOpacity } from 'react-native-gesture-handler'

const styles = StyleSheet.create({
  CardContainer: {
    width: 350,
    height: 150,
    marginHorizontal: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    justifyContent: 'space-around',
  },
  DescriptionContainer: {
    paddingTop: 15,
  },
})

export interface LanguageCardProps {
  readonly color: string
  readonly title: string
  readonly description: string
  readonly emoji: string
  readonly selected: boolean
  readonly onPress: () => void
}

export function LanguageCard({
  color,
  title,
  description,
  emoji,
  selected,
  onPress,
}: LanguageCardProps): JSX.Element {
  const { font } = useTheme()

  const cardColorStyle = selected
    ? { backgroundColor: color }
    : { borderWidth: 2.5, borderColor: color }
  return (
    <TouchableOpacity
      onPress={selected ? () => undefined : onPress}
      style={[styles.CardContainer, cardColorStyle]}
    >
      <Text style={font.languageHeading}>{title}</Text>
      <Text style={[font.languageDescription, styles.DescriptionContainer]}>
        {description}
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Text style={font.languageAcronym}>{emoji}</Text>
      </View>
    </TouchableOpacity>
  )
}
