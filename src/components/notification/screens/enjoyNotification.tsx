import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { requestReview } from 'expo-store-review'

import { Container } from '../../common/container'
import { Header } from '../../course/components/header'
import { Content } from '../../common/content'
import { Toggle } from '../../settings/components/toggle'
import { InfoScreenWithButton } from '../../common/infoScreenWithButton'
import { View, StyleSheet } from 'react-native'
import { CourseButton } from '../../course/components/courseButton'
import { useTheme } from '../../../hooks/themeHooks'
import { useSafeAreaWithPadding } from '../../../hooks/useSafeArea'
import { useVibrations } from '../../../hooks/useVibrations'

const styles = StyleSheet.create({
  ButtonContainer: {
    alignItems: 'center',
  },
})

export interface EnjoyNotificationReduxProps {
  readonly notifications: boolean
}

export interface EnjoyNotificationReduxDispatch {
  readonly toggleNotifications: (value: boolean) => void
}

export function EnjoyNotification({
  notifications,
  toggleNotifications,
}: EnjoyNotificationReduxProps & EnjoyNotificationReduxDispatch): JSX.Element {
  const navigation = useNavigation()
  const { correct } = useVibrations()
  const { bottom } = useSafeAreaWithPadding()
  const { colors } = useTheme()

  function onExit(): void {
    navigation.goBack()
  }

  function onHold(): void {
    requestReview()
    navigation.goBack()
  }

  return (
    <Container>
      <Header onPress={onExit} />
      <Content>
        <InfoScreenWithButton
          emoji={'🎉'}
          heading={'Having fun?'}
          description={'Maybe give a rating and setup weekly notifications'}
        />
        <Toggle
          text={'Notifications'}
          description={'Setup weekly notifications for practice.'}
          enabled={notifications}
          onValueChange={toggleNotifications}
        />
      </Content>
      <View style={[{ paddingBottom: bottom }, styles.ButtonContainer]}>
        <CourseButton
          text={'Hold to rate'}
          marker={'🤩'}
          finalColor={colors.primary.buttonSucessColor}
          vibrationMethod={correct}
          onHold={onHold}
        />
      </View>
    </Container>
  )
}
