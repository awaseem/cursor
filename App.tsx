import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import { Header } from './src/components/header'
import { Stepper } from './src/components/stepper'
import { CourseQuestion } from './src/components/course/courseQuestion'
import { CourseContent } from './src/components/course/courseContent'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => undefined} title="Strings" />
      <Stepper activeStep={1} steps={10} />
      <CourseContent
        title={'What is a string?'}
        content={
          'Is a <length> or <percentage> representing the abscissa of the translating vector. A percentage value refers to the width of the reference box defined by the transform-box property.'
        }
        buttonTitle={'Next'}
        buttonMarker={'🙌'}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
})
