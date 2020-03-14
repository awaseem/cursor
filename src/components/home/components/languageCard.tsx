import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Header } from './header'
import { languageHeading, languageAcronym } from '../../../styles/fonts'
import { TouchableScale } from '../../touchableScale'

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
  return (
    <TouchableScale
      onPress={onPress}
      style={[styles.CardContainer, { backgroundColor: color }]}
    >
      <Text style={languageHeading}>{title}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Text style={languageAcronym}>{emoji}</Text>
      </View>
    </TouchableScale>
  )
}

const styles = StyleSheet.create({
  CardContainer: {
    width: 350,
    height: 180,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: 'space-around',
  },
})
