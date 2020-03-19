import React, { useRef, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { StepperButton } from './stepperButton'
import { useTheme } from '../../../hooks/themeHooks'

const SCROLL_PADDING = 5

export interface StepperProps {
  steps: number
  activeStep: number
}

export function Stepper({ steps, activeStep }: StepperProps) {
  const flatListRef = useRef<FlatList<number> | null>(null)
  const { colors } = useTheme()
  const stepButton = Array.from(Array(steps).keys())

  useEffect(() => {
    if (activeStep !== 0) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: activeStep,
        viewOffset: SCROLL_PADDING,
      })
    }
  }, [activeStep])

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={stepButton}
        renderItem={({ item }) => (
          <StepperButton
            active={activeStep === item}
            text={(item + 1).toString()}
          />
        )}
        keyExtractor={item => item.toString()}
        style={[
          styles.Container,
          { borderBottomColor: colors.primary.separtorColor },
        ]}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.InnerContainer}
        horizontal={true}
      >
        {stepButton}
      </FlatList>
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
