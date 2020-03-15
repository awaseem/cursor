import React from 'react'
import { Content } from '../../content'
import { CourseHeader } from '../components/courseHeader'
import { CourseMessage } from '../components/courseMessage'
import { StyleSheet, View } from 'react-native'
import { AnswerButtonProps, AnswerButton } from '../components/answerButton'

export interface CourseQuestionProps {
  title: string
  content: string
  answers: AnswerButtonProps[]
}

export function CourseQuestion({
  title,
  content,
  answers,
}: CourseQuestionProps) {
  const answerButtons = answers.map((answer, index) => (
    <View key={index} style={{ width: '95%', marginVertical: 20 }}>
      <AnswerButton {...answer} />
    </View>
  ))
  return (
    <Content>
      <CourseHeader title={title} />
      <CourseMessage message={content} />
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
