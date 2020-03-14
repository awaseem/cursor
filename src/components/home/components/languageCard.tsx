import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Header } from './header'
import { languageHeading, languageAcronym } from '../../../styles/fonts'

export interface LanguageCardProps {
  color: string
  title: string
  emoji: string
  acronym: string
}

export function LanguageCard({
  color,
  title,
  acronym,
  emoji,
}: LanguageCardProps) {
  return (
    <View style={[styles.CardContainer, { backgroundColor: color }]}>
      <Text style={languageHeading}>{title}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={languageAcronym}>{emoji}</Text>
        <Text style={languageAcronym}>{acronym}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  CardContainer: {
    height: 180,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 15,
    justifyContent: 'space-around',
  },
})
