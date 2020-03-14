import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { RootStackScreen } from './src/navigation/navigation'
import { store } from './src/redux/rootReducer'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <AppearanceProvider>
            <RootStackScreen />
          </AppearanceProvider>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  )
}
