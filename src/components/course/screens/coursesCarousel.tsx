import React, { useState, useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Container } from '../../common/container'
import { Header } from '../components/header'
import { Stepper } from '../components/stepper'
import { CourseRenderer } from './courseRenderer'
import { InfoScreenWithButton } from '../../common/infoScreenWithButton'
import { CourseItems, CourseListItem } from '../../../data/api'
import { Loader } from '../../common/loader'
import { useTheme } from '../../../hooks/themeHooks'

const ANIMATION_DURATION = 300

export interface CourseCarouselReduxProps {
  loading: boolean
  error: boolean
  selectedCourse?: CourseListItem
  selectedCourseItems: CourseItems
  activeIndex: number
  completed: boolean
}

export interface CourseCarouselDispatchProps {
  setCompletedAndRefresh: (id: string) => void
  setInProgressAndRefresh: (id: string, index: number) => void
  setInProgress: (args: { id: string; index: number }) => void
  nextCourseItem: () => void
  manuallySetCourseItem: (index: number) => void
}

export function CourseCarousel({
  loading,
  error,
  activeIndex,
  selectedCourseItems,
  selectedCourse,
  setCompletedAndRefresh,
  setInProgressAndRefresh,
  completed,
  manuallySetCourseItem,
  nextCourseItem,
}: CourseCarouselReduxProps & CourseCarouselDispatchProps) {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const animatedTransitionAway = useRef(new Animated.Value(0)).current
  const animatedTransitionIn = useRef(new Animated.Value(0)).current
  const [visible, setVisible] = useState(true)

  function resetAnimationTimings() {
    setVisible(true)
    animatedTransitionAway.setValue(0)
    animatedTransitionIn.setValue(0)
  }

  function transitionAway() {
    Animated.timing(animatedTransitionAway, {
      duration: ANIMATION_DURATION,
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      nextCourseItem()
      setVisible(false)
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

  function handleStepperPress(index: number) {
    manuallySetCourseItem(index)
  }

  function onComplete() {
    if (completed) {
      navigation.goBack()
      return
    }

    if (selectedCourse) {
      setCompletedAndRefresh(selectedCourse.id)
    }
    navigation.goBack()
  }

  function onExit() {
    if (completed) {
      navigation.goBack()
      return
    }

    if (activeIndex === courses.length - 1) {
      onComplete()
      return
    }

    if (selectedCourse) {
      setInProgressAndRefresh(selectedCourse.id, activeIndex)
    }
    navigation.goBack()
  }

  if (error) {
    return (
      <Container>
        <InfoScreenWithButton
          emoji={'😢'}
          heading={'Error'}
          description={'Failed to get selected course'}
          buttonProps={{
            finalColor: colors.primary.buttonSucessColor,
            text: 'Hold to dismiss',
            marker: '🙇‍♂️',
            onHold: () => navigation.goBack(),
          }}
        />
      </Container>
    )
  }

  if (loading) {
    return <Loader />
  }

  const courses = [
    ...selectedCourseItems.map((course, index) => (
      <CourseRenderer
        key={course.type + index}
        courseItem={course}
        successHandler={transitionAway}
      />
    )),
    <InfoScreenWithButton
      emoji={'👍'}
      heading={'All Done!'}
      buttonProps={{
        finalColor: colors.primary.buttonSucessColor,
        text: 'Got it!',
        marker: '🍾',
        onHold: onComplete,
      }}
    />,
  ]

  return (
    <Container>
      <Header onPress={onExit} title={selectedCourse?.name ?? ''} />
      <Stepper
        completed={completed}
        activeStep={activeIndex}
        steps={courses.length}
        onStepperPress={handleStepperPress}
      />
      <Animated.View
        style={[
          styles.FlexContainer,
          visible ? transitionAwayAnimation() : transitionInAnimation(),
        ]}
      >
        {courses[activeIndex]}
      </Animated.View>
    </Container>
  )
}

const styles = StyleSheet.create({
  FlexContainer: {
    flex: 1,
  },
})
