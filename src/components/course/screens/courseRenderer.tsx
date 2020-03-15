import React from 'react'
import { View } from 'react-native'
import { CourseItem, CourseType } from '../../../redux/courseSlices'
import { CourseOutline, CourseOutlineProps } from './courseOutline'
import { AnswerButtonProps } from '../components/answerButton'
import {
  CodingChoiceQuestionProps,
  CodingChoiceQuestion,
} from './courseCodingChoiceQuestion'
import {
  CodingInputQuestion,
  CodingInputQuestionProps,
} from './courseCodingInputQuestion'

export interface CourseRendererProps {
  courseItem: CourseItem
  successHandler: () => void
}

export function CourseRenderer({
  courseItem,
  successHandler,
}: CourseRendererProps) {
  const { type, ...otherProps } = courseItem

  if (type === CourseType.outline) {
    return (
      <CourseOutline
        {...(otherProps as CourseOutlineProps)}
        onHold={successHandler}
      />
    )
  }

  if (type === CourseType.codingInputChoice) {
    return (
      <CodingInputQuestion
        {...(otherProps as CodingInputQuestionProps)}
        onSuccess={successHandler}
      />
    )
  }

  if (type === CourseType.choice) {
    const props = otherProps as CodingChoiceQuestionProps
    const answers: AnswerButtonProps[] = props.answers.map(answer => ({
      ...answer,
      onHold: answer.correct ? successHandler : undefined,
    }))
    return <CodingChoiceQuestion {...props} answers={answers} />
  }

  return <View />
}
