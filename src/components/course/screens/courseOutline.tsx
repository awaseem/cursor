import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Content } from '../../common/content'
import { CourseHeader } from '../components/courseHeader'
import { CourseMessage } from '../components/courseMessage'
import { CodeMessage } from '../components/codeMessage'
import { CourseButton } from '../components/courseButton'
import { colors } from '../../../styles/color'
import { useSafeAreaWithPadding } from '../../../hooks/useSafeArea'
import { useVibrations } from '../../../hooks/useVibrations'

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
  const { bottom } = useSafeAreaWithPadding()
  const { correct } = useVibrations()

  return (
    <View style={[styles.Container, { paddingBottom: bottom }]}>
      <Content>
        <CourseHeader title={title} />
        <CourseMessage message={content} />
        {code && <CodeMessage message={code} />}
      </Content>
      <CourseButton
        finalColor={colors.buttonSucessColor}
        text={buttonText}
        marker={marker}
        vibrationMethod={correct}
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
