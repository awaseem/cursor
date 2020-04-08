import React from 'react'
import { StyleSheet, View, Switch, Text } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

export interface ToggleProps {
  text: string
  description: string
  enabled: boolean
  onValueChange: (value: boolean) => void
}

export function Toggle({
  enabled,
  onValueChange,
  text,
  description,
}: ToggleProps) {
  const { colors, font } = useTheme()

  return (
    <View style={styles.SwitchContainer}>
      <View style={{ flex: 0.8 }}>
        <Text style={font.helperHeading}>{text}</Text>
        <Text style={[styles.Description, font.helperDescription]}>
          {description}
        </Text>
      </View>
      <View style={{ flex: 0.2, alignItems: 'center' }}>
        <Switch
          trackColor={{
            false: colors.primary.buttonErrorColor,
            true: colors.primary.buttonSucessColor,
          }}
          onValueChange={onValueChange}
          value={enabled}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  SwitchContainer: {
    marginBottom: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Description: {
    marginTop: 10,
  },
})
