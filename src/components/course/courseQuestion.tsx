import React from 'react'
import { CourseButton } from './courseButton'
import { Content } from '../content'
import { CourseHeader } from './courseHeader'
import { CourseMessage } from './courseMessage'
import { colors } from '../../styles/color'
import { StyleSheet, View } from 'react-native'

export interface CourseQuestionProps {
  title: string
  content: string
  buttonTitle: string
  buttonMarker: string
}

export function CourseQuestion({
  title,
  content,
  buttonTitle,
  buttonMarker,
}: CourseQuestionProps) {
  return (
    <>
      <Content>
        <CourseHeader title={title} />
        <CourseMessage message={content} />
        <View style={styles.ButtonContainer}>
          <CourseButton
            finalColor={colors.buttonSucessColor}
            text={buttonTitle}
            marker={buttonMarker}
            onHold={() => undefined}
          />
          <CourseButton
            finalColor={colors.buttonSucessColor}
            text={buttonTitle}
            marker={buttonMarker}
            onHold={() => undefined}
          />
          <CourseButton
            finalColor={colors.buttonSucessColor}
            text={buttonTitle}
            marker={buttonMarker}
            onHold={() => undefined}
          />
          <CourseButton
            finalColor={colors.buttonSucessColor}
            text={buttonTitle}
            marker={buttonMarker}
            onHold={() => undefined}
          />
        </View>
      </Content>
    </>
  )
}

const styles = StyleSheet.create({
  ButtonContainer: {
    flex: 1,
    marginVertical: 40,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
})
