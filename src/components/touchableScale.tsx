import React, { useRef } from 'react'
import { Animated } from 'react-native'

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
      inputRange: [0, 0.25, 0.5, 0.75, 1],
      outputRange: [1, 1.05, 1.1, 1.05, 1],
    })

    return {
      transform: [
        {
          scale,
        },
      ],
    }
  }

  return (
    <Animated.View
      style={style ? [style, scaleAnimation()] : scaleAnimation()}
      onPress={onPress}
    >
      {children}
    </Animated.View>
  )
}
