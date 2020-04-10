import React from 'react'
import { Animated, StyleSheet, Text } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'
import { useSafeAreaWithPadding } from '../../../hooks/useSafeArea'

export interface CourseHeaderProps {
  height: number
  opacity: Animated.AnimatedInterpolation
  title: string
  translateY: Animated.AnimatedInterpolation
}

export function CourseHeader({
  height,
  opacity,
  title,
  translateY,
}: CourseHeaderProps) {
  const { font, colors } = useTheme()
  const { top } = useSafeAreaWithPadding()

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
      <Text
        style={[
          font.languageHeading,
          { paddingHorizontal: 20, paddingBottom: 40 },
        ]}
      >
        {title}
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
    alignItems: 'flex-end',
  },
})
