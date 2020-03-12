import React from 'react'
import { CourseButtonProps, CourseButton } from './courseButton'
import { Content } from '../content'
import { CourseHeader } from './courseHeader'
import { CourseMessage } from './courseMessage'
import { colors } from '../../styles/color'

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
  return (
    <>
      <Content>
        <CourseHeader title={title} />
        <CourseMessage message={content} />
      </Content>
      <CourseButton
        finalColor={colors.buttonSucessColor}
        text={buttonTitle}
        marker={buttonMarker}
        onHold={() => undefined}
      />
    </>
  )
}
