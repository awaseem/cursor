import React, { useEffect, useRef, useState } from 'react'
import { View, ScrollView, StyleSheet, Animated } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header } from '../components/header'
import { Container } from '../../common/container'
import { LanguageCard } from '../components/languageCard'
import { Screens } from '../../../navigation/screens'
import { useTheme } from '../../../hooks/themeHooks'
import { Loader } from '../../common/loader'
import { Sections } from '../../../redux/courseSlices'
import { CourseListItem, SubjectList, SubjectListItem } from '../../../data/api'
import { HomeCourseList } from '../components/homeCourseList'
import { InfoScreenWithButton } from '../../common/infoScreenWithButton'
import { CourseHeader } from '../components/courseHeader'
import { useSafeAreaWithPadding } from '../../../hooks/useSafeArea'

const HEADER_MAX_HEIGHT = 300
const HEADER_MIN_HEIGHT = 100
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT - 40

const styles = StyleSheet.create({
  HeadingContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
  },
  LanguagesContainer: {
    marginTop: 40,
  },
  LanguagesScrollContainer: {
    marginHorizontal: -20,
  },
})

export interface HomeReduxProps {
  readonly firstTime: boolean
  readonly showEnjoyNotification: boolean
  readonly name: string
  readonly courses: {
    readonly loading: boolean
    readonly error: boolean
    readonly courseSections: Sections
  }
  readonly subjects: {
    readonly loading: boolean
    readonly error: boolean
    readonly subjects: SubjectList
  }
  readonly selectedSubject: SubjectListItem
}

export interface HomeReduxDispatch {
  readonly getAllSubjects: () => void
  readonly getCourses: (path: string) => void
  readonly setSelectedCourse: (course: CourseListItem) => void
  readonly setShowEnjoyNotification: (value: boolean) => void
  readonly setSelectedSubject: (item: SubjectListItem) => void
}

export function Home({
  courses,
  subjects,
  getCourses,
  getAllSubjects,
  setSelectedCourse,
  selectedSubject,
  showEnjoyNotification,
  setSelectedSubject,
  setShowEnjoyNotification,
  firstTime,
  name,
}: HomeReduxProps & HomeReduxDispatch): JSX.Element {
  const navigation = useNavigation()
  const { colors } = useTheme()
  const { top } = useSafeAreaWithPadding()

  const scrollYAnimated = useRef(new Animated.Value(-HEADER_MAX_HEIGHT)).current

  const [scrollHomeListToTop, setScrollHomeListToTop] = useState(false)

  const newScrollYAnimated = Animated.add(scrollYAnimated, HEADER_MAX_HEIGHT)

  const headingTranslate = newScrollYAnimated.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [0, -HEADER_SCROLL_DISTANCE],
    extrapolate: 'clamp',
  })

  const headingOpacity = newScrollYAnimated.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [1, 1, 0],
    extrapolate: 'clamp',
  })

  const titleOpacity = newScrollYAnimated.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp',
  })

  const titleTranslate = newScrollYAnimated.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
    outputRange: [-20, -20, 0],
    extrapolate: 'clamp',
  })

  useEffect(() => {
    getAllSubjects()
  }, [])

  useEffect(() => {
    const { path } = selectedSubject
    if (path) {
      setScrollHomeListToTop(true)
      setTimeout(() => {
        getCourses(path)
        setScrollHomeListToTop(false)
      }, 100)
    }
  }, [selectedSubject])

  useEffect(() => {
    if (showEnjoyNotification) {
      setTimeout(() => {
        navigation.navigate(Screens.Enjoy)
        setShowEnjoyNotification(false)
      }, 1000)
    }
  }, [showEnjoyNotification])

  function renderHomeCourses(): JSX.Element {
    if (courses.error) {
      return (
        <InfoScreenWithButton
          extraTopSpacing={HEADER_MAX_HEIGHT}
          emoji={'😢'}
          heading={'Error'}
          description={'Failed to fetch courses from server.'}
          buttonProps={{
            text: 'Hold to refresh',
            marker: '🔄',
            finalColor: colors.primary.buttonSucessColor,
            onHold: () => getCourses(selectedSubject.path),
          }}
        />
      )
    }

    if (courses.loading && courses.courseSections.length === 0) {
      return <Loader disableBackground extraTopSpacing={HEADER_MAX_HEIGHT} />
    }

    if (!courses.loading && courses.courseSections.length === 0) {
      return (
        <InfoScreenWithButton
          extraTopSpacing={HEADER_MAX_HEIGHT}
          emoji={'⏲️'}
          heading={'Coming soon...'}
          description={'Working hard to make the best content possible'}
        />
      )
    }

    return (
      <HomeCourseList
        scrollToTop={scrollHomeListToTop}
        subjectColor={selectedSubject.color}
        maxHeight={HEADER_MAX_HEIGHT}
        scrollAnimationValue={scrollYAnimated}
        getCourses={() => getCourses(selectedSubject.path)}
        setSelectedCourse={setSelectedCourse}
        courseSections={courses.courseSections}
        loading={courses.loading}
      />
    )
  }

  if (firstTime) {
    navigation.navigate(Screens.Welcome)
    return <Container />
  }

  if (subjects.loading) {
    return <Loader />
  }

  if (subjects.error) {
    return (
      <Container>
        <InfoScreenWithButton
          emoji={'😢'}
          heading={'Error'}
          description={'Failed to fetch subjects from server.'}
          buttonProps={{
            text: 'Hold to refresh',
            marker: '🔄',
            finalColor: colors.primary.buttonSucessColor,
            onHold: getAllSubjects,
          }}
        />
      </Container>
    )
  }

  return (
    <Container>
      <CourseHeader
        height={140}
        opacity={titleOpacity}
        translateY={titleTranslate}
        title={selectedSubject.name}
        description={selectedSubject.description}
      />
      <Animated.View
        style={[
          styles.HeadingContainer,
          {
            top,
            height: HEADER_MAX_HEIGHT,
            opacity: headingOpacity,
            transform: [{ translateY: headingTranslate }],
          },
        ]}
      >
        <Header
          title={'Hi 👋'}
          subtitle={`Welcome back, ${name}`}
          icon={{
            emoji: 'Settings',
            onPress: () => navigation.navigate(Screens.Settings),
          }}
        />
        <View style={styles.LanguagesContainer}>
          <ScrollView
            style={styles.LanguagesScrollContainer}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
          >
            {subjects.subjects.map(subject => (
              <LanguageCard
                key={subject.id}
                selected={subject.id === selectedSubject.id}
                onPress={() => setSelectedSubject(subject)}
                title={subject.name}
                description={subject.description}
                emoji={subject.emoji}
                color={subject.color}
              />
            ))}
          </ScrollView>
        </View>
      </Animated.View>
      {renderHomeCourses()}
    </Container>
  )
}
