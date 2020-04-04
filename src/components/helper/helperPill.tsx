import React, { useRef, useEffect } from 'react'
import { StyleSheet, View, Text, Animated } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { useTheme } from '../../hooks/themeHooks'

const SHOW_ANIMATION_DURATION = 250

export interface HelperPillReduxProps {
  heading: string
  message: string
  animation: boolean
}

export function HelperPill({
  heading,
  message,
  animation = false,
}: HelperPillReduxProps) {
  const { top } = useSafeArea()
  const { font } = useTheme()

  const showAnimation = useRef(new Animated.Value(0)).current

  useEffect(() => {
    if (animation) {
      startAnimation()
    } else {
      stopAnimation()
    }
  }, [animation])

  function startAnimation() {
    Animated.timing(showAnimation, {
      duration: SHOW_ANIMATION_DURATION,
      delay: SHOW_ANIMATION_DURATION,
      toValue: 1,
    }).start()
  }

  function stopAnimation() {
    Animated.timing(showAnimation, {
      duration: SHOW_ANIMATION_DURATION,
      toValue: 0,
    }).start()
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
    maxWidth: 250,
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
