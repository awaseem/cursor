import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Header } from './header'
import { languageHeading, languageAcronym } from '../../../styles/fonts'

export interface LanguageCardProps {
  color: string
  title: string
  emoji: string
}

export function LanguageCard({ color, title, emoji }: LanguageCardProps) {
  return (
    <View style={[styles.CardContainer, { backgroundColor: color }]}>
      <Text style={languageHeading}>{title}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
        <Text style={languageAcronym}>{emoji}</Text>
      </View>
    </View>
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
