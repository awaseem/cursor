import React from 'react'
import { colors } from '../styles/color'
import { CourseButton } from './course/courseButton'

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
  const buttonColor = correct
    ? colors.buttonSucessColor
    : colors.buttonErrorColor
  const marker = correct ? '🙌' : '😞'

  return (
    <CourseButton
      finalColor={buttonColor}
      text={content}
      additionalText={explanation}
      marker={marker}
      onHold={onHold ?? (() => undefined)}
    />
  )
}
