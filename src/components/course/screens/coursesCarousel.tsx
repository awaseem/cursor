import React, { useState, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { CourseOutline } from './courseOutline'
import { Container } from '../../container'
import { Header } from '../../header'
import { Stepper } from '../../stepper'

const ANIMATION_DURATION = 300

export function CourseCarousel() {
  const courses = [
    <CourseOutline
      key={'test1'}
      title={'What is a string?'}
      content={
        'Is a <length> or <percentage> representing the abscissa of the translating vector. A percentage value refers to the width of the reference box defined by the transform-box property.'
      }
      code={`console.log( BLANK )

      const i = 0;`}
      buttonText={'Next'}
      marker={'🤓'}
      onHold={transitionAway}
    />,
    <CourseOutline
      key={'test2'}
      title={'What is a number?'}
      content={
        'Is a <length> or <percentage> representing the abscissa of the translating vector. A percentage value refers to the width of the reference box defined by the transform-box property.'
      }
      code={`const i = 0`}
      buttonText={'Next'}
      marker={'🤓'}
      onHold={transitionAway}
    />,
  ]

  const animatedTransitionAway = useRef(new Animated.Value(0)).current
  const animatedTransitionIn = useRef(new Animated.Value(0)).current
  const [index, setIndex] = useState(0)
  const [visiable, setVisiable] = useState(true)

  function transitionAway() {
    Animated.timing(animatedTransitionAway, {
      duration: ANIMATION_DURATION,
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      setIndex(index + 1)
      setVisiable(false)
      Animated.timing(animatedTransitionIn, {
        duration: ANIMATION_DURATION,
        toValue: 1,
        useNativeDriver: true,
      }).start()
    })
  }

  function transitionAwayAnimation() {
    const opacity = animatedTransitionAway.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
    })
    const translateX = animatedTransitionAway.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -10],
    })

    return {
      opacity,
      transform: [
        {
          translateX,
        },
      ],
    }
  }

  function transitionInAnimation() {
    const opacity = animatedTransitionIn.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    })
    const translateX = animatedTransitionIn.interpolate({
      inputRange: [0, 1],
      outputRange: [10, 0],
    })

    return {
      opacity,
      transform: [
        {
          translateX,
        },
      ],
    }
  }

  return (
    <Container>
      <Header onPress={() => undefined} title="Strings" />
      <Stepper activeStep={index} steps={courses.length} />
      <Animated.View
        style={[
          styles.FlexContainer,
          visiable ? transitionAwayAnimation() : transitionInAnimation(),
        ]}
      >
        {courses[index]}
      </Animated.View>
    </Container>
  )
}

const styles = StyleSheet.create({
  FlexContainer: {
    flex: 1,
  },
})
