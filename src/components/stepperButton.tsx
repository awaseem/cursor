import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'
import { titleHeading } from '../styles/fonts'

export interface StepperButtonProps {
  text: string
}

export function StepperButton({ text }: StepperButtonProps) {
  return (
    <TouchableOpacity style={styles.Container}>
      <Text style={titleHeading}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 20,
  },
})
