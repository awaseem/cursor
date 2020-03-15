import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'
import { BASE_FONT_SIZE } from '../../../styles/fonts'
import { CourseButton } from '../components/courseButton'
import { useNavigation } from '@react-navigation/native'

export function CourseComplete() {
  const { font, colors } = useTheme()
  const navigation = useNavigation()

  return (
    <View style={styles.Container}>
      <View style={styles.TextContainer}>
        <Text style={styles.Emoji}>{'👍'}</Text>
        <Text style={font.courseHeading}>All Done!</Text>
      </View>
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
  TextContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  Emoji: {
    fontSize: BASE_FONT_SIZE * 5,
    marginBottom: 20,
  },
})
