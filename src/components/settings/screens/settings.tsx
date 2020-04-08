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
}

export interface SettingsReduxDispatch {
  setOutOfOrder: (value: boolean) => void
  setDisableCompletePopups: (value: boolean) => void
}

export function Settings({
  outOfOrder,
  setOutOfOrder,
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
          text={'Out of order?'}
          description={
            'Complete courses out of order. Warning this will reset in progress courses!'
          }
          enabled={outOfOrder}
          onValueChange={setOutOfOrder}
        />
        <Toggle
          text={'Disable pop ups?'}
          description={'Disable pop ups when courses are complete.'}
          enabled={disableCompletePopups}
          onValueChange={setDisableCompletePopups}
        />
      </Content>
    </Container>
  )
}
