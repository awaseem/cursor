import React from 'react'
import { Content } from '../../common/content'
import { CourseHeader } from '../components/courseHeader'
import { CourseMessage } from '../components/courseMessage'
import { StyleSheet, View } from 'react-native'
import { AnswerButtonProps, AnswerButton } from '../components/answerButton'
import { CodeMessage } from '../components/codeMessage'

const styles = StyleSheet.create({
  ButtonContainer: {
    flex: 1,
    marginVertical: 40,
    alignItems: 'center',
  },
  AnswerButtonContainer: { width: '90%', marginVertical: 20 },
})

export interface CodingChoiceQuestionProps {
  readonly title: string
  readonly content: string
  readonly code?: string
  readonly answers: readonly AnswerButtonProps[]
}

export function CodingChoiceQuestion({
  title,
  content,
  code,
  answers,
}: CodingChoiceQuestionProps): JSX.Element {
  const answerButtons = answers.map((answer, index) => (
    <View key={index} style={styles.AnswerButtonContainer}>
      <AnswerButton {...answer} />
    </View>
  ))

  return (
    <Content>
      <CourseHeader title={title} />
      <CourseMessage message={content} />
      {code && <CodeMessage message={code} />}
      <View style={styles.ButtonContainer}>{answerButtons}</View>
    </Content>
  )
}
