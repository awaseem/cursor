import React from 'react'
import { CourseButton } from './courseButton'
import { Content } from '../../common/content'
import { CourseHeader } from './courseHeader'
import { CourseMessage } from './courseMessage'
import { useTheme } from '../../../hooks/themeHooks'

export interface CourseContentProps {
  title: string
  content: string
  buttonTitle: string
  buttonMarker: string
}

export function CourseContent({
  title,
  content,
  buttonTitle,
  buttonMarker,
}: CourseContentProps) {
  const { colors } = useTheme()
  return (
    <>
      <Content>
        <CourseHeader title={title} />
        <CourseMessage message={content} />
      </Content>
      <CourseButton
        finalColor={colors.primary.buttonSucessColor}
        text={buttonTitle}
        marker={buttonMarker}
        onHold={() => undefined}
      />
    </>
  )
}
