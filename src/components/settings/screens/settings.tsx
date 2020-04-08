import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'

import { Container } from '../../common/container'
import { Header } from '../../course/components/header'
import { Content } from '../../common/content'
import { useTheme } from '../../../hooks/themeHooks'
import { CourseButton } from '../../course/components/courseButton'
import { Toggle } from '../components/toggle'
import { HairlineSeparator } from '../../common/hairlineSeparator'

export function Settings() {
  const { colors } = useTheme()
  const { bottom: paddingBottom } = useSafeArea()
  const navigation = useNavigation()

  function onExit() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header onPress={onExit} title={'Settings'} />
      <HairlineSeparator />
      <Content>
        <Toggle
          text={'Out of order?'}
          description={
            'Complete courses out of order. Warning this will reset in progress courses!'
          }
          enabled={true}
          onValueChange={() => undefined}
        />
      </Content>
      <View style={[styles.ButtonContainer, { paddingBottom }]}>
        <CourseButton
          text={'Hold to save'}
          marker={'💾'}
          finalColor={colors.primary.buttonSucessColor}
          onHold={() => undefined}
        />
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  ButtonContainer: {
    alignItems: 'center',
  },
})
