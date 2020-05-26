import React from 'react'
import { StyleSheet, View, Switch, Text } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

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

export interface ToggleProps {
  readonly text: string
  readonly description: string
  readonly enabled: boolean
  readonly onValueChange: (value: boolean) => void
}

export function Toggle({
  enabled,
  onValueChange,
  text,
  description,
}: ToggleProps): JSX.Element {
  const { colors, font } = useTheme()

  return (
    <View style={styles.SwitchContainer}>
      <View style={{ flex: 0.8 }}>
        <Text style={font.toggleHeading}>{text}</Text>
        <Text style={[styles.Description, font.toggleDescription]}>
          {description}
        </Text>
      </View>
      <View style={{ flex: 0.2, alignItems: 'center' }}>
        <Switch
          trackColor={{
            false: colors.primary.buttonErrorColor,
            true: colors.primary.buttonSuccessColor,
          }}
          onValueChange={onValueChange}
          value={enabled}
        />
      </View>
    </View>
  )
}
