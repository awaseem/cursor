import React from 'react'
import { Content } from '../../common/content'
import { CourseHeader } from '../components/courseHeader'
import { CourseMessage } from '../components/courseMessage'
import { StyleSheet, View } from 'react-native'
import { AnswerButtonProps, AnswerButton } from '../components/answerButton'
import { CodeMessage } from '../components/codeMessage'

export interface CodingChoiceQuestionProps {
  title: string
  content: string
  code?: string
  answers: AnswerButtonProps[]
}

export function CodingChoiceQuestion({
  title,
  content,
  code,
  answers,
}: CodingChoiceQuestionProps) {
  const answerButtons = answers.map((answer, index) => (
    <View key={index} style={{ width: '90%', marginVertical: 20 }}>
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

const styles = StyleSheet.create({
  ButtonContainer: {
    flex: 1,
    marginVertical: 40,
    alignItems: 'center',
  },
})
