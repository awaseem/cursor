import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

export interface StepperButtonProps {
  text: string
  active?: boolean
}

export function StepperButton({ text, active }: StepperButtonProps) {
  const { colors, font } = useTheme()
  return (
    <TouchableOpacity style={styles.Container}>
      <Text style={font.titleHeading}>{text}</Text>
      {active && (
        <View
          style={[
            styles.ActiveIndicator,
            { backgroundColor: colors.primary.indicatorColor },
          ]}
        ></View>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 20,
  },
  ActiveIndicator: {
    position: 'absolute',
    width: 5,
    height: 5,
    right: 0,
    borderRadius: 5,
  },
})
