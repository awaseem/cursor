import React from 'react'
import { Content } from '../../content'
import { CourseHeader } from '../components/courseHeader'
import { CourseMessage } from '../components/courseMessage'
import { StyleSheet, View } from 'react-native'
import { AnswerButtonProps, AnswerButton } from '../../answerButton'
import { CodeMessage } from '../components/codeMessage'

export interface CodingInputQuestionProps {
  title: string
  content: string
  answers: AnswerButtonProps[]
}

export function CodingInputQuestion({
  title,
  content,
  answers,
}: CodingInputQuestionProps) {
  const answerButtons = answers.map((answer, index) => (
    <View key={index} style={{ marginVertical: 20 }}>
      <AnswerButton {...answer} />
    </View>
  ))
  return (
    <Content>
      <CourseHeader title={title} />
      <CourseMessage message={content} />
      <CodeMessage message={'console.log( BLANK )'} />
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
