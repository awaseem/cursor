import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Home } from './src/components/home/screens/home'

export default function App() {
  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  )
}
