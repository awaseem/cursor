import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Header } from './src/components/header'
import { Stepper } from './src/components/stepper'
import { Content } from './src/components/content'
import { CourseHeaderProps } from './src/components/course/courseHeader'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => undefined} title="Strings" />
      <Stepper activeStep={1} steps={10} />
      <Content>
        <CourseHeaderProps title={'What is a string?'} />
      </Content>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
})
