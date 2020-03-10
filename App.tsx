import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Header } from './src/components/header'
import { Stepper } from './src/components/stepper'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => undefined} title="Strings" />
      <Stepper activeStep={1} steps={10} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
})
