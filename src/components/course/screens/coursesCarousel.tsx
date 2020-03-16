import React, { useState, useRef, useEffect } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Container } from '../../container'
import { Header } from '../components/header'
import { Stepper } from '../components/stepper'
import { CourseRenderer } from './courseRenderer'
import { CourseComplete } from './courseComplete'
import { CourseItems } from '../../../data/api'

const ANIMATION_DURATION = 300

interface ReduxProps {
  selectedCourse: CourseItems
}

export function CourseCarousel({ selectedCourse }: ReduxProps) {
  const navigation = useNavigation()
  const animatedTransitionAway = useRef(new Animated.Value(0)).current
  const animatedTransitionIn = useRef(new Animated.Value(0)).current
  const [index, setIndex] = useState(0)
  const [visiable, setVisiable] = useState(true)
  const [courses, setCourses] = useState<CourseItems>([])

  function resetAnimationTimings() {
    setVisiable(true)
    animatedTransitionAway.setValue(0)
    animatedTransitionIn.setValue(0)
  }

  function transitionAway() {
    Animated.timing(animatedTransitionAway, {
      duration: ANIMATION_DURATION,
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      setIndex(index => index + 1)
      setVisiable(false)

      transitionIn()
    })
  }

  function transitionIn() {
    Animated.timing(animatedTransitionIn, {
      duration: ANIMATION_DURATION,
      toValue: 1,
      useNativeDriver: true,
    }).start(result => {
      if (result.finished) {
        resetAnimationTimings()
      }
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

  useEffect(() => {
    setCourses([
      ...selectedCourse.map((course, index) => (
        <CourseRenderer
          key={index}
          courseItem={course}
          successHandler={transitionAway}
        />
      )),
      <CourseComplete />,
    ])
  }, [selectedCourse])

  return (
    <Container>
      <Header onPress={() => navigation.goBack()} title="Strings" />
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
