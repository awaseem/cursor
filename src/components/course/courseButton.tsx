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

var ACTION_TIMER = 800
var COLORS = ['white', '#136D61', colors.buttonSecondaryColor]

export interface CourseButtonProps {
  text: string
}

export function CourseButton({ text }: CourseButtonProps) {
  const _value = useRef(0)

  const [pressAction] = useState(new Animated.Value(0))

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
      outputRange: COLORS,
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

  function animationActionComplete() {
    if (_value.current === 1) {
    }
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View style={styles.Container} onLayout={buttonWidthHeightOnLayout}>
        <Animated.View style={[styles.bgFillLeft, getProgressStyles()]} />
        <Animated.View style={[styles.bgFillRight, getProgressStyles()]} />
        <Text style={iOSUIKit.bodyEmphasizedWhiteObject}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.buttonMainColor,
    borderRadius: 25,
  },
  bgFillLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  bgFillRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
})
