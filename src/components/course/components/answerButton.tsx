import React from 'react'
import { CourseButton } from './courseButton'
import { useTheme } from '../../../hooks/themeHooks'
import { useVibrations } from '../../../hooks/useVibrations'

export interface AnswerButtonProps {
  readonly content: string
  readonly correct: boolean
  readonly explanation?: string

  readonly onHold?: () => void
}

export function AnswerButton({
  content,
  correct,
  explanation,
  onHold,
}: AnswerButtonProps): JSX.Element {
  const { colors } = useTheme()
  const vibrations = useVibrations()

  const buttonColor = correct
    ? colors.primary.buttonSucessColor
    : colors.primary.buttonErrorColor
  const marker = correct ? '🙌' : '😞'

  const nonHold = (): void => undefined

  return (
    <CourseButton
      finalColor={buttonColor}
      text={content}
      additionalText={explanation}
      marker={marker}
      vibrationMethod={correct ? vibrations.correct : vibrations.incorrect}
      onHold={onHold ?? nonHold}
    />
  )
}
