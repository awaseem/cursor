import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { CourseCarousel } from './src/components/course/screens/coursesCarousel'

export default function App() {
  return (
    <SafeAreaProvider>
      <CourseCarousel />
    </SafeAreaProvider>
  )
}
