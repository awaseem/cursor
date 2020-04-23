import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

const styles = StyleSheet.create({
  Container: {
    paddingVertical: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})

export interface HeaderProps {
  readonly title?: string
  readonly onPress?: () => void
}

export function Header({ title, onPress }: HeaderProps): JSX.Element {
  const { font } = useTheme()
  return (
    <View style={styles.Container}>
      {<View>{title && <Text style={font.titleHeading}>{title}</Text>}</View>}
      <View>
        {onPress && (
          <TouchableOpacity onPress={onPress}>
            <Text style={font.closeButton}>{'Close'}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}
