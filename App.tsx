import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Header } from './src/components/header'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => undefined} title="Strings" />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
})
