import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useTheme } from '../../hooks/themeHooks'
import {
  CourseButton,
  CourseButtonProps,
} from '../course/components/courseButton'
import { BASE_FONT_SIZE } from '../../styles/fonts'

const EMOJI_MULTIPLIER = 5
const ZERO_SPACING = 0

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  HeadingContainer: {
    marginBottom: 10,
  },
  TextContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  Description: {
    textAlign: 'center',
  },
  Emoji: {
    fontSize: BASE_FONT_SIZE * EMOJI_MULTIPLIER,
    marginBottom: 20,
  },
})

export interface InfoScreenWithButtonProps {
  readonly emoji: string
  readonly heading: string
  readonly description?: string
  readonly buttonProps?: CourseButtonProps
  readonly extraTopSpacing?: number
}

export function InfoScreenWithButton({
  emoji,
  heading,
  description,
  buttonProps,
  extraTopSpacing,
}: InfoScreenWithButtonProps): JSX.Element {
  const { font } = useTheme()

  return (
    <View
      style={[styles.Container, { marginTop: extraTopSpacing ?? ZERO_SPACING }]}
    >
      <View style={styles.TextContainer}>
        <Text style={styles.Emoji}>{emoji}</Text>
        <View style={styles.HeadingContainer}>
          <Text style={font.courseHeading}>{heading}</Text>
        </View>
        <Text style={[font.courseMessage, styles.Description]}>
          {description}
        </Text>
      </View>
      {buttonProps && <CourseButton {...buttonProps} />}
    </View>
  )
}
