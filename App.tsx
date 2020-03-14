import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import { RootStackScreen } from './src/navigation/navigation'

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppearanceProvider>
          <RootStackScreen />
        </AppearanceProvider>
      </SafeAreaProvider>
    </NavigationContainer>
  )
}
