import React, { useRef, useEffect, useState } from 'react'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  Animated,
  LayoutChangeEvent,
} from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { useTheme } from '../../../hooks/themeHooks'

const ZERO_VALUE = 0
const ACTION_TIMER = 600
const DELAY_ACTION = 1000
const PRESS_IN_THRESHOLD = 0.55
const RESET_TIMER_DIVIDER = 2

const styles = StyleSheet.create({
  Container: {
    width: '95%',
    alignItems: 'center',
    borderRadius: 10,
  },
  ContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  AdditionalText: {
    ...iOSUIKit.bodyWhiteObject,
    marginTop: 25,
    paddingHorizontal: 20,
  },
  bgFillLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  bgFillRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
})

export interface CourseButtonProps {
  readonly text: string
  readonly marker: string
  readonly finalColor: string
  readonly onHold: () => void

  readonly additionalText?: string
  readonly reset?: boolean
  readonly vibrationMethod?: () => void
}

export function CourseButton({
  text,
  marker,
  finalColor,
  onHold,
  vibrationMethod,
  additionalText,
  reset,
}: CourseButtonProps): JSX.Element {
  const { colors } = useTheme()
  const COLORS = ['white', colors.primary.buttonSelectionColor]

  const _value = useRef(ZERO_VALUE)

  const [pressAction] = useState(new Animated.Value(ZERO_VALUE))
  const [completeAction] = useState(new Animated.Value(ZERO_VALUE))

  const [completed, setCompleted] = useState(false)
  const [buttonWidth, setButtonWidth] = useState(ZERO_VALUE)
  const [buttonHeight, setButtonHeight] = useState(ZERO_VALUE)

  useEffect(() => {
    pressAction.addListener(({ value }) => (_value.current = value))
  }, [])

  function resetAnimation(): void {
    Animated.timing(completeAction, {
      duration: ACTION_TIMER / RESET_TIMER_DIVIDER,
      toValue: 0,
    }).start(() => {
      Animated.timing(pressAction, {
        duration: ACTION_TIMER / RESET_TIMER_DIVIDER,
        toValue: 0,
      }).start()
    })
  }

  function fireDelayedOnHold(): void {
    setTimeout(() => {
      if (reset) {
        resetAnimation()
      } else {
        onHold()
      }
    }, DELAY_ACTION)
  }

  function animationActionComplete(): void {
    if (_value.current === 1) {
      setCompleted(true)

      vibrationMethod && vibrationMethod()

      if (additionalText) {
        Animated.timing(completeAction, {
          duration: ACTION_TIMER,
          toValue: 1,
        }).start(() => fireDelayedOnHold())
      } else if (reset) {
        fireDelayedOnHold()
      } else {
        onHold()
      }
    }
  }

  function handlePressIn(): void {
    Animated.timing(pressAction, {
      duration: ACTION_TIMER,
      toValue: 1,
    }).start(animationActionComplete)
  }

  function handlePressOut(): void {
    if (_value.current < PRESS_IN_THRESHOLD) {
      Animated.timing(pressAction, {
        duration: _value.current * ACTION_TIMER,
        toValue: 0,
      }).start()
    }
  }

  function buttonWidthHeightOnLayout(e: LayoutChangeEvent): void {
    setButtonWidth(e.nativeEvent.layout.width)
    setButtonHeight(e.nativeEvent.layout.height)
  }

  function getProgressStyles(): Record<string, unknown> {
    const width = pressAction.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, buttonWidth / 2, buttonWidth / 2],
    })
    const backgroundColor = pressAction.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [...COLORS, finalColor],
    })
    const scale = pressAction.interpolate({
      inputRange: [0, 0.5, 0.75, 1],
      outputRange: [1, 1.1, 1.25, 1],
    })

    return {
      width,
      height: buttonHeight,
      backgroundColor,
      transform: [{ scale }],
    }
  }

  function getAnimatedText(): Record<string, unknown> {
    const translateX = pressAction.interpolate({
      inputRange: [0, 0.5, 0.75, 1],
      outputRange: [20, 20, 0, 0],
    })

    return {
      transform: [
        {
          translateX,
        },
      ],
    }
  }

  function getAnimatedMarker(): Record<string, unknown> {
    const opacity = pressAction.interpolate({
      inputRange: [0, 0.5, 0.75, 1],
      outputRange: [0, 0, 1, 1],
    })
    const translateY = pressAction.interpolate({
      inputRange: [0, 0.5, 0.75, 1],
      outputRange: [5, 5, 0, 0],
    })
    const scale = pressAction.interpolate({
      inputRange: [0, 0.5, 0.75, 1],
      outputRange: [1, 1, 1.25, 1.25],
    })

    return {
      opacity,
      transform: [
        {
          translateY,
        },
        { scale },
      ],
    }
  }

  function changeHeightForAdditionalText(): Record<string, unknown> {
    const height = completeAction.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [60, 80, 100, 125, 160],
    })

    return {
      height,
    }
  }

  function getAnimatedContentComplete(): Record<string, unknown> {
    const translateY = completeAction.interpolate({
      inputRange: [0, 0.5, 0.75, 1],
      outputRange: [20, 20, 15, 10],
    })

    return {
      transform: [
        {
          translateY,
        },
      ],
    }
  }

  function showAdditionalText(): Record<string, unknown> {
    const opacity = completeAction.interpolate({
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [0, 0, 0, 0, 1],
    })

    return {
      opacity,
    }
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={completed ? undefined : handlePressOut}
    >
      <Animated.View
        style={[
          styles.Container,
          { backgroundColor: colors.primary.buttonMainColor },
          changeHeightForAdditionalText(),
        ]}
        onLayout={buttonWidthHeightOnLayout}
      >
        <Animated.View style={[styles.bgFillLeft, getProgressStyles()]} />
        <Animated.View style={[styles.bgFillRight, getProgressStyles()]} />
        <Animated.View
          style={[styles.ContentContainer, getAnimatedContentComplete()]}
        >
          <Animated.Text
            style={[iOSUIKit.bodyEmphasizedWhiteObject, getAnimatedText()]}
          >
            {text}
          </Animated.Text>
          <Animated.Text
            style={[
              iOSUIKit.bodyEmphasizedWhiteObject,
              getAnimatedMarker(),
              { paddingHorizontal: 10 },
            ]}
          >
            {` ${marker}`}
          </Animated.Text>
        </Animated.View>
        {additionalText && (
          <Animated.Text style={[styles.AdditionalText, showAdditionalText()]}>
            {additionalText}
          </Animated.Text>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}
