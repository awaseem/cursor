import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Screens } from './screens'
import { HomeContainer } from '../containers/homeContainer'
import { CourseContainer } from '../containers/coursesContainer'

const RootStack = createStackNavigator()

export function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name={Screens.Home}
        component={HomeContainer}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={Screens.Courses}
        component={CourseContainer}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  )
}
