import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'
import { BASE_FONT_SIZE } from '../../../styles/fonts'
import { CourseButton } from '../components/courseButton'
import { useNavigation } from '@react-navigation/native'
import { EmptyScreen } from '../../common/emptyScreen'

export function CourseComplete() {
  const { font, colors } = useTheme()
  const navigation = useNavigation()

  return (
    <View style={styles.Container}>
      <EmptyScreen emoji={'👍'} description={'All Done!'} />
      <CourseButton
        finalColor={colors.primary.buttonSucessColor}
        text={'Got it!'}
        marker={'🍾'}
        onHold={() => navigation.goBack()}
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
