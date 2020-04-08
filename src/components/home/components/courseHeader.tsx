import React from 'react'
import { Animated, StyleSheet, Text } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { useTheme } from '../../../hooks/themeHooks'

export interface CourseHeaderProps {
  height: number
  opacity: Animated.AnimatedInterpolation
  title: string
  translateY: Animated.AnimatedInterpolation
  emoji: string
}

export function CourseHeader({
  height,
  opacity,
  title,
  translateY,
  emoji,
}: CourseHeaderProps) {
  const { font, colors } = useTheme()
  const { top } = useSafeArea()

  return (
    <Animated.View
      style={[
        styles.HeaderContainer,
        {
          top,
          height,
          backgroundColor: colors.background,
          borderColor: colors.primary.separtorColor,
          opacity,
          transform: [
            {
              translateY,
            },
          ],
        },
      ]}
    >
      <Text style={[font.languageHeading, { paddingHorizontal: 20 }]}>
        {title}
      </Text>
      <Text style={[font.languageHeading, { paddingHorizontal: 20 }]}>
        {emoji}
      </Text>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  HeaderContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
