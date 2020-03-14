import React from 'react'
import { Content } from '../../content'
import { CourseHeader } from '../components/courseHeader'
import { CourseMessage } from '../components/courseMessage'
import { StyleSheet, View } from 'react-native'
import { AnswerButtonProps } from '../../answerButton'
import { CodeMessage } from '../components/codeMessage'
import { CourseButton } from '../components/courseButton'
import { colors } from '../../../styles/color'
import { useSafeArea } from 'react-native-safe-area-context'

export interface CodingInputQuestionProps {
  title: string
  content: string
  answers: AnswerButtonProps[]
}

export function CodingInputQuestion({
  title,
  content,
}: CodingInputQuestionProps) {
  const insets = useSafeArea()

  return (
    <View style={[styles.Container, { paddingBottom: insets.bottom }]}>
      <Content>
        <CourseHeader title={title} />
        <CourseMessage message={content} />
        <CodeMessage message={'console.log( BLANK )'} />
      </Content>
      <CourseButton
        finalColor={colors.buttonSucessColor}
        text={'Submit'}
        additionalText={'This is a test'}
        marker={'🤔'}
        onHold={() => undefined}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
})
