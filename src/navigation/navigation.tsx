import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { CourseCarousel } from '../components/course/screens/coursesCarousel'
import { Screens } from './screens'
import { HomeConatiner } from '../containers/homeContainer'

const RootStack = createStackNavigator()

export function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name={Screens.Home}
        component={HomeConatiner}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name={Screens.Coures}
        component={CourseCarousel}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  )
}
