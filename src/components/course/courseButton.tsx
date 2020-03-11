import React, { useRef, useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  LayoutChangeEvent,
  Vibration,
} from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { colors } from '../../styles/color'

const ACTION_TIMER = 600
const COLORS = ['white', colors.buttonSelectionColor]

export interface CourseButtonProps {
  text: string
  marker: string
  finalColor: string
  onHold: () => void
}

export function CourseButton({
  text,
  marker,
  finalColor,
  onHold,
}: CourseButtonProps) {
  const _value = useRef(0)

  const [pressAction] = useState(new Animated.Value(0))
  const [completed, setCompleted] = useState(false)

  const [buttonWidth, setButtonWidth] = useState(0)
  const [buttonHeight, setButtonHeight] = useState(0)

  useEffect(() => {
    pressAction.addListener(({ value }) => (_value.current = value))
  }, [])

  function handlePressIn() {
    Animated.timing(pressAction, {
      duration: ACTION_TIMER,
      toValue: 1,
    }).start(animationActionComplete)
  }

  function handlePressOut() {
    Animated.timing(pressAction, {
      duration: _value.current * ACTION_TIMER,
      toValue: 0,
    }).start()
  }

  function buttonWidthHeightOnLayout(e: LayoutChangeEvent) {
    setButtonWidth(e.nativeEvent.layout.width)
    setButtonHeight(e.nativeEvent.layout.height)
  }

  function getProgressStyles() {
    const width = pressAction.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, buttonWidth / 2, buttonWidth / 2],
    })
    const backgroundColor = pressAction.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [...COLORS, finalColor],
    })
    const scale = pressAction.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.1, 1],
    })

    return {
      width,
      height: buttonHeight,
      backgroundColor,
      transform: [{ scale }],
    }
  }

  function getAnimatedText() {
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

  function getAnimatedMarker() {
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

  function animationActionComplete() {
    if (_value.current === 1) {
      setCompleted(true)
      onHold()
    }
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={completed ? undefined : handlePressOut}
    >
      <View style={styles.Container} onLayout={buttonWidthHeightOnLayout}>
        <Animated.View style={[styles.bgFillLeft, getProgressStyles()]} />
        <Animated.View style={[styles.bgFillRight, getProgressStyles()]} />
        <View style={styles.ContentContainer}>
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
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: '95%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonMainColor,
    borderRadius: 10,
  },
  ContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
