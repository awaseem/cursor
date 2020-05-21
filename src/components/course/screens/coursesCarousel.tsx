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
import { HelperPillContainer } from '../../../containers/helperPillContainer'
import { useVibrations } from '../../../hooks/useVibrations'

const ANIMATION_DURATION = 300

const styles = StyleSheet.create({
  FlexContainer: {
    flex: 1,
  },
})

export interface CourseCarouselReduxProps {
  readonly loading: boolean
  readonly error: boolean
  readonly selectedCourse?: CourseListItem
  readonly selectedCourseItems: CourseItems
  readonly itemIndex: number
  readonly activeIndex: number
  readonly completed: boolean
}

export interface CourseCarouselDispatchProps {
  readonly setCompletedAndRefresh: (id: string) => void
  readonly setInProgressAndRefresh: (id: string, index: number) => void
  readonly setInProgress: (args: {
    readonly id: string
    readonly index: number
  }) => void
  readonly nextCourseItem: () => void
  readonly manuallySetCourseItem: (index: number) => void
}

export function CourseCarousel({
  loading,
  error,
  itemIndex,
  activeIndex,
  selectedCourseItems,
  selectedCourse,
  setCompletedAndRefresh,
  setInProgressAndRefresh,
  completed,
  manuallySetCourseItem,
  nextCourseItem,
}: CourseCarouselReduxProps & CourseCarouselDispatchProps): JSX.Element {
  const { colors } = useTheme()
  const navigation = useNavigation()
  const { correct } = useVibrations()
  const animatedTransitionAway = useRef(new Animated.Value(0)).current
  const animatedTransitionIn = useRef(new Animated.Value(0)).current
  const [visible, setVisible] = useState(true)

  function resetAnimationTimings(): void {
    setVisible(true)
    animatedTransitionAway.setValue(0)
    animatedTransitionIn.setValue(0)
  }

  function transitionIn(): void {
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

  function transitionAway(): void {
    // Only continue to the next course if the user is on the active course
    if (itemIndex !== activeIndex) {
      return
    }

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

  function transitionAwayAnimation(): Record<string, unknown> {
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

  function transitionInAnimation(): Record<string, unknown> {
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

  function handleStepperPress(index: number): void {
    manuallySetCourseItem(index)
  }

  function onComplete(): void {
    if (completed) {
      navigation.goBack()
      return
    }

    if (selectedCourse) {
      setCompletedAndRefresh(selectedCourse.id)
    }
    navigation.goBack()
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
      key={selectedCourseItems.length}
      emoji={'👍'}
      heading={'All Done!'}
      buttonProps={{
        finalColor: colors.primary.buttonSucessColor,
        text: 'Got it!',
        marker: '🍾',
        onHold: onComplete,
        vibrationMethod: correct,
      }}
    />,
  ]

  function onExit(): void {
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
            onHold: navigation.goBack,
            vibrationMethod: correct,
          }}
        />
      </Container>
    )
  }

  if (loading) {
    return <Loader />
  }

  return (
    <Container>
      <HelperPillContainer />
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
        {courses[itemIndex]}
      </Animated.View>
    </Container>
  )
}
