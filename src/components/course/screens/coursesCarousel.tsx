import React, { useState, useRef, useEffect } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { CourseOutline, CourseOutlineProps } from './courseOutline'
import { Container } from '../../container'
import { Header } from '../components/header'
import { Stepper } from '../components/stepper'
import {
  CourseItems,
  CourseItem,
  CourseType,
} from '../../../redux/courseSlices'
import { CourseQuestion, CourseQuestionProps } from './courseSimpleQuestion'
import { AnswerButtonProps } from '../components/answerButton'
import {
  CodingChoiceQuestion,
  CodingChoiceQuestionProps,
} from './courseCodingChoiceQuestion'
import {
  CodingInputQuestion,
  CodingInputQuestionProps,
} from './courseCodingInputQuestion'

const ANIMATION_DURATION = 300

interface ReduxProps {
  selectedCourse: CourseItems
}

// TODO refactor this component to be cleaner
function courseItemToComponent(successHandler: () => void) {
  return (courseItem: CourseItem) => {
    const { type, ...otherProps } = courseItem
    switch (type) {
      case CourseType.outline:
        return (
          <CourseOutline
            {...(otherProps as CourseOutlineProps)}
            onHold={successHandler}
          />
        )
      case CourseType.choice: {
        const props = otherProps as CourseQuestionProps
        const answers: AnswerButtonProps[] = props.answers.map(answer => ({
          ...answer,
          onHold: answer.correct ? successHandler : undefined,
        }))
        return <CourseQuestion {...props} answers={answers} />
      }
      case CourseType.chodingChoice: {
        const props = otherProps as CodingChoiceQuestionProps
        const answers: AnswerButtonProps[] = props.answers.map(answer => ({
          ...answer,
          onHold: answer.correct ? successHandler : undefined,
        }))
        return <CodingChoiceQuestion {...props} answers={answers} />
      }
      case CourseType.codingInputChoice: {
        return (
          <CodingInputQuestion
            {...(otherProps as CodingInputQuestionProps)}
            onSuccess={successHandler}
          />
        )
      }
    }
  }
}

export function CourseCarousel({ selectedCourse }: ReduxProps) {
  const navigation = useNavigation()
  const animatedTransitionAway = useRef(new Animated.Value(0)).current
  const animatedTransitionIn = useRef(new Animated.Value(0)).current
  const [index, setIndex] = useState(0)
  const [visiable, setVisiable] = useState(true)
  const [courses, setCourses] = useState<CourseItems>([])

  useEffect(() => {
    setCourses(selectedCourse.map(courseItemToComponent(transitionAway)))
  }, [selectedCourse])

  function transitionAway() {
    Animated.timing(animatedTransitionAway, {
      duration: ANIMATION_DURATION,
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      setIndex(index => index + 1)
      setVisiable(false)
      Animated.timing(animatedTransitionIn, {
        duration: ANIMATION_DURATION,
        toValue: 1,
        useNativeDriver: true,
      }).start(result => {
        if (result.finished) {
          setVisiable(true)
          animatedTransitionAway.setValue(0)
          animatedTransitionIn.setValue(0)
        }
      })
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

  console.log(index)

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
