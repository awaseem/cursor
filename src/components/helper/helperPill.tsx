import React, { useRef, useEffect } from 'react'
import { StyleSheet, View, Text, Animated } from 'react-native'
import { useTheme } from '../../hooks/themeHooks'
import { useSafeAreaWithPadding } from '../../hooks/useSafeArea'

const SHOW_ANIMATION_DURATION = 250

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

export interface HelperPillReduxProps {
  readonly heading: string
  readonly message: string
  readonly animation: boolean
}

export function HelperPill({
  heading,
  message,
  animation = false,
}: HelperPillReduxProps): JSX.Element {
  const { top } = useSafeAreaWithPadding()
  const { font, colors } = useTheme()

  const showAnimation = useRef(new Animated.Value(0)).current

  function startAnimation(): void {
    Animated.timing(showAnimation, {
      duration: SHOW_ANIMATION_DURATION,
      delay: SHOW_ANIMATION_DURATION,
      toValue: 1,
      useNativeDriver: true,
    }).start()
  }

  function stopAnimation(): void {
    Animated.timing(showAnimation, {
      duration: SHOW_ANIMATION_DURATION,
      toValue: 0,
      useNativeDriver: true,
    }).start()
  }

  useEffect(() => {
    if (animation) {
      startAnimation()
    } else {
      stopAnimation()
    }
  }, [animation])

  function getShowAnimationStyles(): Record<string, unknown> {
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
        { top, backgroundColor: colors.primary.backgroundPillColor },
        getShowAnimationStyles(),
      ]}
      pointerEvents={'none'}
    >
      <View style={styles.HeadingContainer}>
        <Text style={font.helperHeading}>{heading}</Text>
      </View>
      <Text style={font.helperDescription}>{message}</Text>
    </Animated.View>
  )
}
