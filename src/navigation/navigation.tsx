import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Home } from '../components/home/screens/home'
import { CourseCarousel } from '../components/course/screens/coursesCarousel'

const RootStack = createStackNavigator()

export function RootStackScreen() {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <RootStack.Screen
        name="Course"
        component={CourseCarousel}
        options={{ headerShown: false }}
      />
    </RootStack.Navigator>
  )
}
