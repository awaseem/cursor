import React from 'react'
import { CourseButton } from './courseButton'
import { useTheme } from '../../../hooks/themeHooks'
import { useVibrations } from '../../../hooks/useVibrations'

export interface AnswerButtonProps {
  content: string
  correct: boolean
  explanation?: string

  onHold?: () => void
}

export function AnswerButton({
  content,
  correct,
  explanation,
  onHold,
}: AnswerButtonProps) {
  const { colors } = useTheme()
  const vibrations = useVibrations()

  const buttonColor = correct
    ? colors.primary.buttonSucessColor
    : colors.primary.buttonErrorColor
  const marker = correct ? '🙌' : '😞'

  return (
    <CourseButton
      finalColor={buttonColor}
      text={content}
      additionalText={explanation}
      marker={marker}
      vibrationMethod={correct ? vibrations.correct : vibrations.incorrect}
      onHold={onHold ?? (() => undefined)}
    />
  )
}
