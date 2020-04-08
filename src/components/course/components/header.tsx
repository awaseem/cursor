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
        <Text style={font.titleHeading}>{title}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={font.closeButton}>{'Close'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
