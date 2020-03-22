import React from 'react'
import { StyleSheet, View } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'
import { CourseButton } from '../components/courseButton'
import { EmptyScreen } from '../../common/emptyScreen'

export interface CourseCompleteProps {
  onComplete: () => void
}

export function CourseComplete({ onComplete }: CourseCompleteProps) {
  const { colors } = useTheme()

  return (
    <View style={styles.Container}>
      <EmptyScreen emoji={'👍'} description={'All Done!'} />
      <CourseButton
        finalColor={colors.primary.buttonSucessColor}
        text={'Got it!'}
        marker={'🍾'}
        onHold={onComplete}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
})
