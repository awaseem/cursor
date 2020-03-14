import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../components/home/screens/home'
import { CourseCarousel } from '../components/course/screens/coursesCarousel'
import { Screens } from './screens'

const RootStack = createStackNavigator()

export function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name={Screens.Home}
        component={Home}
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
