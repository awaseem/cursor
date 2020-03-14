import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { StepperButton } from './stepperButton'
import { useTheme } from '../../../hooks/themeHooks'

export interface StepperProps {
  steps: number
  activeStep: number
}

export function Stepper({ steps, activeStep }: StepperProps) {
  const { colors } = useTheme()
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
        style={[
          styles.Container,
          { borderBottomColor: colors.primary.separtorColor },
        ]}
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
    marginBottom: 20,
  },
  Container: {
    marginHorizontal: -20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})
