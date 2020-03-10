import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { StepperButton } from './stepperButton'

export interface StepperProps {
  steps: number
  activeStep: number
}

export function Stepper({ steps, activeStep }: StepperProps) {
  const stepButton = Array.from(Array(steps).keys()).map(step => (
    <StepperButton
      active={activeStep === step}
      key={step}
      text={(step + 1).toString()}
    />
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
