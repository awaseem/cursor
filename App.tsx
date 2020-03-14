import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackScreen } from './src/navigation/navigation'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootStackScreen />
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
