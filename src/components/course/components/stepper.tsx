import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import { StepperButton } from './stepperButton'
import { useTheme } from '../../../hooks/themeHooks'

const SCROLL_PADDING = 10

export interface StepperProps {
  steps: number
  activeStep: number
}

export function Stepper({ steps, activeStep }: StepperProps) {
  const stepperPositionMap = useRef(new Map<number, number>()).current
  const scrollViewRef = useRef<ScrollView | null>(null)

  const { colors } = useTheme()

  const stepButton = Array.from(Array(steps).keys()).map(step => (
    <StepperButton
      active={activeStep === step}
      onLayout={event =>
        stepperPositionMap.set(
          step,
          event.nativeEvent.layout.x - SCROLL_PADDING,
        )
      }
      key={step}
      text={(step + 1).toString()}
    />
  ))

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ x: stepperPositionMap.get(activeStep) })
  }, [activeStep])

  return (
    <View>
      <ScrollView
        ref={scrollViewRef}
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
