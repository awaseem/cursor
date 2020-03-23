import React, { useRef, useEffect } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { StepperButton } from './stepperButton'
import { useTheme } from '../../../hooks/themeHooks'

export interface StepperProps {
  completed: boolean
  steps: number
  activeStep: number

  onStepperPress?: (index: number) => void
}

export function Stepper({
  steps,
  activeStep,
  completed = false,
  onStepperPress,
}: StepperProps) {
  const flatListRef = useRef<FlatList<number> | null>(null)
  const { colors } = useTheme()
  const stepButton = Array.from(Array(steps).keys())

  useEffect(() => {
    if (completed) {
      return
    }

    if (activeStep !== 0) {
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: activeStep,
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
            onPress={() => completed && onStepperPress && onStepperPress(item)}
            active={activeStep === item}
            text={(item + 1).toString()}
          />
        )}
        keyExtractor={item => item.toString()}
        style={[
          styles.Container,
          { borderBottomColor: colors.primary.separtorColor },
        ]}
        onScrollToIndexFailed={async info => {
          setTimeout(() => {
            flatListRef.current?.scrollToIndex({
              index: info.index,
              animated: true,
            })
          }, 0)
        }}
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
