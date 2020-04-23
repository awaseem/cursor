import React, { useRef, useEffect } from 'react'
import { StyleSheet, View, FlatList, ListRenderItemInfo } from 'react-native'
import { StepperButton } from './stepperButton'
import { useTheme } from '../../../hooks/themeHooks'

const styles = StyleSheet.create({
  InnerContainer: {
    marginBottom: 20,
  },
  Container: {
    marginHorizontal: -20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})

export interface StepperProps {
  readonly completed: boolean
  readonly steps: number
  readonly activeStep: number

  readonly onStepperPress?: (index: number) => void
}

export function Stepper({
  steps,
  activeStep,
  completed = false,
  onStepperPress,
}: StepperProps): JSX.Element {
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

  function handleStepperButton(item: number) {
    return (): void => {
      if (completed && onStepperPress) {
        onStepperPress(item)
      }
    }
  }

  function renderItem({ item }: ListRenderItemInfo<number>): JSX.Element {
    return (
      <StepperButton
        onPress={handleStepperButton(item)}
        active={activeStep === item}
        text={(item + 1).toString()}
      />
    )
  }

  function keyExtractor(item: number): string {
    return item.toString()
  }

  function onScrollToIndexFailed(info: {
    readonly index: number
    readonly highestMeasuredFrameIndex: number
    readonly averageItemLength: number
  }): void {
    setTimeout(() => {
      flatListRef.current?.scrollToIndex({
        index: info.index,
        animated: true,
      })
    }, 0)
  }

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={stepButton}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={[
          styles.Container,
          { borderBottomColor: colors.primary.separtorColor },
        ]}
        onScrollToIndexFailed={onScrollToIndexFailed}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.InnerContainer}
        horizontal
      >
        {stepButton}
      </FlatList>
    </View>
  )
}
