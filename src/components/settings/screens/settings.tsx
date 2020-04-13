import React from 'react'
import { useNavigation } from '@react-navigation/native'

import { Container } from '../../common/container'
import { Header } from '../../course/components/header'
import { Content } from '../../common/content'
import { Toggle } from '../components/toggle'
import { HairlineSeparator } from '../../common/hairlineSeparator'

export interface SettingsReduxProps {
  outOfOrder: boolean
  disableCompletePopups: boolean
  notifications: boolean
  disableVibrations: boolean
}

export interface SettingsReduxDispatch {
  toggleOutOfOrder: (value: boolean) => void
  toggleNotifications: (value: boolean) => void
  setDisableCompletePopups: (value: boolean) => void
  setDisableVibrations: (value: boolean) => void
}

export function Settings({
  outOfOrder,
  toggleOutOfOrder,
  notifications,
  disableVibrations,
  setDisableVibrations,
  toggleNotifications,
  disableCompletePopups,
  setDisableCompletePopups,
}: SettingsReduxProps & SettingsReduxDispatch) {
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
          text={'Out of order'}
          description={
            'Complete courses out of order. Warning this will reset in progress courses!'
          }
          enabled={outOfOrder}
          onValueChange={toggleOutOfOrder}
        />
        <Toggle
          text={'Disable pop ups'}
          description={'Disable pop ups when courses are complete.'}
          enabled={disableCompletePopups}
          onValueChange={setDisableCompletePopups}
        />
        <Toggle
          text={'Notifications'}
          description={'Setup weekly notifications for practice.'}
          enabled={notifications}
          onValueChange={toggleNotifications}
        />
        <Toggle
          text={'Disable Vibrations'}
          description={'Disable vibrations when you hold a course button.'}
          enabled={disableVibrations}
          onValueChange={setDisableVibrations}
        />
      </Content>
    </Container>
  )
}
