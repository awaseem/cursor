import React, { useRef, useEffect } from 'react'
import { StyleSheet, View, Text, Animated } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { useTheme } from '../../hooks/themeHooks'

const SHOW_ANIMATION_DURATION = 250
const DISPLAY_ANIMATION = 3000

export interface HelperPillProps {
  heading: string
  message: string
  animation: boolean
}

export function HelperPill({
  heading,
  message,
  animation = false,
}: HelperPillProps) {
  const { top } = useSafeArea()
  const { font } = useTheme()

  const showAnimation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (animation) {
      startAndResetAnimation()
    }
  }, [animation])

  function startAndResetAnimation() {
    Animated.timing(showAnimation, {
      duration: SHOW_ANIMATION_DURATION,
      delay: SHOW_ANIMATION_DURATION * 2,
      toValue: 1,
    }).start(() => {
      Animated.timing(showAnimation, {
        duration: SHOW_ANIMATION_DURATION,
        delay: DISPLAY_ANIMATION,
        toValue: 0,
      }).start()
    })
  }

  function getShowAnimationStyles() {
    const opacity = showAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    })
    const translateY = showAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [-20, 0],
    })

    return {
      opacity,
      transform: [
        {
          translateY,
        },
      ],
    }
  }

  return (
    <Animated.View
      style={[
        styles.Container,
        { top, backgroundColor: '#623CEA' },
        getShowAnimationStyles(),
      ]}
    >
      <View style={styles.HeadingContainer}>
        <Text style={font.helperHeading}>{heading}</Text>
      </View>
      <Text style={font.helperDescription}>{message}</Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    width: 200,
    right: 10,
    zIndex: 10,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  HeadingContainer: {
    marginBottom: 10,
  },
})
