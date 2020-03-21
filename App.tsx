import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { AppearanceProvider } from 'react-native-appearance'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { RootStackScreen } from './src/navigation/navigation'
import { store, persistedStore } from './src/redux/rootReducer'
import { Loader } from './src/components/loader'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader />} persistor={persistedStore}>
        <NavigationContainer>
          <SafeAreaProvider>
            <AppearanceProvider>
              <RootStackScreen />
            </AppearanceProvider>
          </SafeAreaProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}
