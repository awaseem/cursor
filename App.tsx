import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Header } from './src/components/header'
import { Stepper } from './src/components/stepper'
import { CodingInputQuestion } from './src/components/course/screens/courseCodingInputQuestion'
import { Container } from './src/components/container'

export default function App() {
  return (
    <SafeAreaProvider>
      <Container>
        <Header onPress={() => undefined} title="Strings" />
        <Stepper activeStep={1} steps={10} />
        <CodingInputQuestion
          title={'What is a string?'}
          content={
            'Is a <length> or <percentage> representing the abscissa of the translating vector. A percentage value refers to the width of the reference box defined by the transform-box property.'
          }
          code={'console.log( BLANK )'}
          expectedResponse={'hello'}
          onSuccess={() => alert('correct')}
        />
      </Container>
    </SafeAreaProvider>
  )
}
