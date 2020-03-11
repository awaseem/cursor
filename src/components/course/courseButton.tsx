import React, { useRef, useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
  LayoutChangeEvent,
} from 'react-native'
import { iOSUIKit } from 'react-native-typography'
import { colors } from '../../styles/color'

var ACTION_TIMER = 400
var COLORS = ['rgb(255,255,255)', colors.buttonSecondaryColor]

export interface CourseButtonProps {
  text: string
}

export function CourseButton({ text }: CourseButtonProps) {
  const _value = useRef(0)
  const [pressAction, setPressAction] = useState(new Animated.Value(0))
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
    var width = pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: [0, buttonWidth],
    })
    var bgColor = pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: COLORS,
    })
    return {
      width: width,
      height: buttonHeight,
      backgroundColor: bgColor,
    }
  }

  function animationActionComplete() {}

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <View style={styles.Container} onLayout={buttonWidthHeightOnLayout}>
        <Animated.View style={[styles.bgFill, getProgressStyles()]} />
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
  bgFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderRadius: 25,
  },
})
