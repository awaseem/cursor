import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

export interface HeaderProps {
  title: string
  onPress: () => void
}

export function Header({ title, onPress }: HeaderProps) {
  const { font } = useTheme()
  return (
    <View style={styles.Container}>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={font.titleHeading}>{'❎'}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.TitleContainer}>
        <Text style={font.titleHeading}>{title}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  TitleContainer: {
    padding: 10,
  },
})
