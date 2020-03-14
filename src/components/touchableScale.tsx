import React, { useRef } from 'react'
import { Animated } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const SCALE_DURATION_ANIMATION = 200

export interface TouchableScaleProps {
  style?: any
  children: React.ReactNode
  onPress: () => void
}

export function TouchableScale({
  children,
  onPress,
  style,
}: TouchableScaleProps) {
  const scaleAnimatedValue = useRef(new Animated.Value(0)).current

  function scaleAnimation() {
    const scale = scaleAnimatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0.9],
    })

    return {
      transform: [
        {
          scale,
        },
      ],
    }
  }

  function handlePressIn() {
    Animated.timing(scaleAnimatedValue, {
      duration: SCALE_DURATION_ANIMATION,
      toValue: 1,
    }).start(result => {
      if (result.finished) {
        onPress()
      }
    })
  }

  function handlePressOut() {
    Animated.timing(scaleAnimatedValue, {
      duration: SCALE_DURATION_ANIMATION / 2,
      toValue: 0,
    }).start()
  }

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <Animated.View
        style={style ? [style, scaleAnimation()] : scaleAnimation()}
      >
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}
