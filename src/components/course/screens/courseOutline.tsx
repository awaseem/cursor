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

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
})

export interface CourseOutlineProps {
  readonly title: string
  readonly content: string
  readonly marker: string
  readonly buttonText: string
  readonly code?: string

  readonly onHold: () => void
}

export function CourseOutline({
  title,
  content,
  marker,
  buttonText,
  code,
  onHold,
}: CourseOutlineProps): JSX.Element {
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
        finalColor={colors.buttonSuccessColor}
        text={buttonText}
        marker={marker}
        vibrationMethod={correct}
        onHold={onHold}
      />
    </View>
  )
}
