import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { titleHeading } from '../../../styles/fonts'
import { colors } from '../../../styles/color'

export interface StepperButtonProps {
  text: string
  active?: boolean
}

export function StepperButton({ text, active }: StepperButtonProps) {
  return (
    <TouchableOpacity style={styles.Container}>
      <Text style={titleHeading}>{text}</Text>
      {active && <View style={styles.ActiveIndicator}></View>}
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
    backgroundColor: colors.indicatorColor,
    right: 0,
    borderRadius: 5,
  },
})
