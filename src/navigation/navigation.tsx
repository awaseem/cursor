import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Screens } from './screens'
import { HomeContainer } from '../containers/homeContainer'
import { CourseContainer } from '../containers/coursesContainer'
import { WelcomeContainer } from '../containers/welcomeContainer'
import { SettingsContainer } from '../containers/settingsContainer'

const RootStack = createStackNavigator()

export function RootStackScreen() {
  const screenOptions = { headerShown: false, gestureEnabled: false }
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name={Screens.Home}
        component={HomeContainer}
        options={screenOptions}
      />
      <RootStack.Screen
        name={Screens.Courses}
        component={CourseContainer}
        options={screenOptions}
      />
      <RootStack.Screen
        name={Screens.Welcome}
        component={WelcomeContainer}
        options={screenOptions}
      />
      <RootStack.Screen
        name={Screens.Settings}
        component={SettingsContainer}
        options={screenOptions}
      />
    </RootStack.Navigator>
  )
}
