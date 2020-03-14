import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Header } from './src/components/header'
import { Stepper } from './src/components/stepper'
import { CodingQuestion } from './src/components/course/screens/courseCodingChoiceQuestion'
import { Container } from './src/components/container'

export default function App() {
  return (
    <SafeAreaProvider>
      <Container>
        <Header onPress={() => undefined} title="Strings" />
        <Stepper activeStep={1} steps={10} />
        <CodingQuestion
          title={'What is a string?'}
          content={
            'Is a <length> or <percentage> representing the abscissa of the translating vector. A percentage value refers to the width of the reference box defined by the transform-box property.'
          }
          answers={[
            {
              content: 'This is a test',
              correct: true,
              explanation:
                'Is a <length> or <percentage> representing the abscissa of the translating vector.',
              onHold: () => undefined,
            },
            {
              content: 'This is a test',
              correct: false,
              explanation:
                'Is a <length> or <percentage> representing the abscissa of the translating vector.',
              onHold: () => undefined,
            },
            {
              content: 'This is a test',
              correct: false,
              explanation:
                'Is a <length> or <percentage> representing the abscissa of the translating vector.',
              onHold: () => undefined,
            },
            {
              content: 'This is a test',
              correct: false,
              explanation:
                'Is a <length> or <percentage> representing the abscissa of the translating vector.',
              onHold: () => undefined,
            },
          ]}
        />
      </Container>
    </SafeAreaProvider>
  )
}
