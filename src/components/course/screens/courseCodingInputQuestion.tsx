import React, { useState, useEffect } from 'react'
import { Content } from '../../common/content'
import { CourseHeader } from '../components/courseHeader'
import { CourseMessage } from '../components/courseMessage'
import { StyleSheet, View } from 'react-native'
import { CodeMessage } from '../components/codeMessage'
import { CourseButton } from '../components/courseButton'
import { colors } from '../../../styles/color'
import { CourseInput } from '../components/courseInput'
import { useSafeAreaWithPadding } from '../../../hooks/useSafeArea'

const SUBMIT_BUTTON_TEXT = 'Submit'

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
})

export interface CodingInputQuestionProps {
  readonly title: string
  readonly content: string
  readonly code: string
  readonly expectedResponse: string
  readonly onSuccess: () => void

  readonly placeholder?: string
  readonly additionalText?: string
}

export function CodingInputQuestion({
  title,
  content,
  expectedResponse,
  code,
  onSuccess,

  placeholder,
  additionalText,
}: CodingInputQuestionProps): JSX.Element {
  const { bottom } = useSafeAreaWithPadding()
  const [text, setText] = useState('')
  const [finalColor, setFinalColor] = useState(colors.buttonErrorColor)
  const [marker, setMarker] = useState('🤔')
  const [reset, setReset] = useState(true)

  useEffect(() => {
    if (text.trim().toLowerCase() === expectedResponse.trim().toLowerCase()) {
      setFinalColor(colors.buttonSucessColor)
      setMarker('🤗')
      setReset(false)
    } else {
      setFinalColor(colors.buttonErrorColor)
      setMarker('🤔')
      setReset(true)
    }
  }, [text])

  function onCourseInputChange(courseInput: string): void {
    setText(courseInput)
  }

  function onHold(): void {
    if (text.trim().toLowerCase() === expectedResponse.trim().toLowerCase()) {
      onSuccess()
    }
  }

  return (
    <View style={[styles.Container, { paddingBottom: bottom }]}>
      <Content enableOffset>
        <CourseHeader title={title} />
        <CourseMessage message={content} />
        <CodeMessage message={code} />
        <CourseInput onChange={onCourseInputChange} placeholder={placeholder} />
      </Content>
      <CourseButton
        finalColor={finalColor}
        text={SUBMIT_BUTTON_TEXT}
        additionalText={additionalText}
        marker={marker}
        reset={reset}
        onHold={onHold}
      />
    </View>
  )
}
