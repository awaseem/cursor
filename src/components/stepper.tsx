import React from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import { titleHeading } from '../styles/fonts'
import { StepperButton } from './stepperButton'

export interface StepperProps {
  steps: number
}

export function Stepper({ steps }: StepperProps) {
  const stepButton = Array.from(Array(steps).keys()).map(step => (
    <StepperButton key={step} text={(step + 1).toString()} />
  ))

  return (
    <View>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.InnerContainer}
        horizontal={true}
      >
        {stepButton}
      </ScrollView>
    </View>
  )
}

export const styles = StyleSheet.create({
  InnerContainer: {
    paddingTop: 10,
    paddingBottom: 20,
  },
})
