import React from 'react'
import { Content } from '../../common/content'
import { CourseHeader } from '../components/courseHeader'
import { CourseMessage } from '../components/courseMessage'
import { StyleSheet, View } from 'react-native'
import { CodeMessage } from '../components/codeMessage'
import { CourseButton } from '../components/courseButton'
import { useSafeArea } from 'react-native-safe-area-context'
import { colors } from '../../../styles/color'

export interface CourseOutlineProps {
  title: string
  content: string
  marker: string
  buttonText: string
  code?: string

  onHold: () => void
}

export function CourseOutline({
  title,
  content,
  marker,
  buttonText,
  code,
  onHold,
}: CourseOutlineProps) {
  const insets = useSafeArea()

  return (
    <View style={[styles.Container, { paddingBottom: insets.bottom }]}>
      <Content>
        <CourseHeader title={title} />
        <CourseMessage message={content} />
        {code && <CodeMessage message={code} />}
      </Content>
      <CourseButton
        finalColor={colors.buttonSucessColor}
        text={buttonText}
        marker={marker}
        onHold={onHold}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
})
