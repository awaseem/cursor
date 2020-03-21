import React, { useState, useEffect } from 'react'
import { Content } from '../../common/content'
import { CourseHeader } from '../components/courseHeader'
import { CourseMessage } from '../components/courseMessage'
import { StyleSheet, View } from 'react-native'
import { CodeMessage } from '../components/codeMessage'
import { CourseButton } from '../components/courseButton'
import { colors } from '../../../styles/color'
import { useSafeArea } from 'react-native-safe-area-context'
import { CourseInput } from '../components/courseInput'

const SUBMIT_BUTTON_TEXT = 'Submit'

export interface CodingInputQuestionProps {
  title: string
  content: string
  code: string
  expectedResponse: string
  onSuccess: () => void

  placeholder?: string
  additionalText?: string
}

export function CodingInputQuestion({
  title,
  content,
  expectedResponse,
  code,
  onSuccess,

  placeholder,
  additionalText,
}: CodingInputQuestionProps) {
  const insets = useSafeArea()
  const [text, setText] = useState('')
  const [finalColor, setFinalColor] = useState(colors.buttonErrorColor)
  const [marker, setMarker] = useState('🤔')
  const [reset, setReset] = useState(true)

  useEffect(() => {
    if (text.trim().toLowerCase() === expectedResponse.trim().toLowerCase()) {
      setFinalColor(colors.buttonSucessColor)
      setMarker('🤗')
      setReset(false)
    }
  }, [text])

  return (
    <View style={[styles.Container, { paddingBottom: insets.bottom }]}>
      <Content>
        <CourseHeader title={title} />
        <CourseMessage message={content} />
        <CodeMessage message={code} />
        <CourseInput
          onChange={text => setText(text)}
          placeholder={placeholder}
        />
      </Content>
      <CourseButton
        finalColor={finalColor}
        text={SUBMIT_BUTTON_TEXT}
        additionalText={additionalText}
        marker={marker}
        reset={reset}
        onHold={() => {
          if (
            text.trim().toLowerCase() === expectedResponse.trim().toLowerCase()
          ) {
            onSuccess()
          }
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
})
