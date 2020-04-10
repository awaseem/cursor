import React, { useEffect, useRef } from 'react'
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
import { HairlineSeparator } from '../../common/hairlineSeparator'
import { useSafeAreaWithPadding } from '../../../hooks/useSafeArea'

const HEADER_MAX_HEIGHT = 400
const HEADER_MIN_HEIGHT = 100
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT - 40

export interface HomeReduxProps {
  firstTime: boolean
  showEnjoyNotification: boolean
  name: string
  courses: {
    loading: boolean
    error: boolean
    courseSections: Sections
  }
  subjects: {
    loading: boolean
    error: boolean
    subjects: SubjectList
  }
  selectedSubject: SubjectListItem
}

export interface HomeReduxDispatch {
  getAllSubjects: () => void
  getCourses: (path: string) => void
  setSelectedCourse: (course: CourseListItem) => void
  setShowEnjoyNotification: (value: boolean) => void
  setSelectedSubject: (item: SubjectListItem) => void
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
}: HomeReduxProps & HomeReduxDispatch) {
  const navigation = useNavigation()
  const { colors } = useTheme()
  const { top } = useSafeAreaWithPadding()

  const scrollYAnimated = useRef(new Animated.Value(-HEADER_MAX_HEIGHT)).current

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
      getCourses(path)
    }
  }, [selectedSubject])

  useEffect(() => {
    if (showEnjoyNotification) {
      setTimeout(() => {
        navigation.navigate(Screens.Enjoy)
        setShowEnjoyNotification(false)
      }, 1500)
    }
  }, [showEnjoyNotification])

  function renderHomeCourses() {
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

    return (
      <HomeCourseList
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
        title={'JavaScript'}
      />
      <Animated.View
        style={[
          styles.HeadingContainer,
          {
            top,
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
        <Header title={'Courses'} />
        <HairlineSeparator extraSpacing />
      </Animated.View>
      {renderHomeCourses()}
    </Container>
  )
}

const styles = StyleSheet.create({
  HeadingContainer: {
    position: 'absolute',
    left: 20,
    right: 20,
    height: 300,
  },
  LanguagesContainer: {
    marginTop: 40,
  },
  LanguagesScrollContainer: {
    marginHorizontal: -20,
  },
})
