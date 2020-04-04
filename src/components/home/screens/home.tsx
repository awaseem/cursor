import React, { useEffect } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header } from '../components/header'
import { Container } from '../../common/container'
import { LanguageCard } from '../components/languageCard'
import { Screens } from '../../../navigation/screens'
import { useTheme } from '../../../hooks/themeHooks'
import { Loader } from '../../common/loader'
import { Sections } from '../../../redux/courseSlices'
import { CourseListItem } from '../../../data/api'
import { HomeCourseList } from '../components/homeCourseList'
import { InfoScreenWithButton } from '../../common/infoScreenWithButton'
import { HelperPill } from '../../helper/helperPill'

export interface HomeReduxProps {
  loading: boolean
  error: boolean
  courseSections: Sections
  firstTime: boolean
  name: string
}

export interface HomeReduxDispatch {
  getCourses: () => void
  setSelectedCourse: (course: CourseListItem) => void
}

export function Home({
  loading,
  error,
  courseSections,
  getCourses,
  setSelectedCourse,
  firstTime,
  name,
}: HomeReduxProps & HomeReduxDispatch) {
  const navigation = useNavigation()
  const { colors } = useTheme()

  useEffect(() => {
    getCourses()
  }, [])

  function renderHomeCourses() {
    if (error) {
      return (
        <InfoScreenWithButton
          emoji={'😢'}
          heading={'Error'}
          description={'Failed to fetch courses from server.'}
          buttonProps={{
            text: 'Hold to refresh',
            marker: '🔄',
            finalColor: colors.primary.buttonSucessColor,
            onHold: getCourses,
          }}
        />
      )
    }

    if (loading && courseSections.length === 0) {
      return <Loader />
    }

    return (
      <HomeCourseList
        getCourses={getCourses}
        setSelectedCourse={setSelectedCourse}
        courseSections={courseSections}
        loading={loading}
      />
    )
  }

  if (firstTime) {
    navigation.navigate(Screens.Welcome)
    return <Container />
  }

  return (
    <Container>
      <Header title={'Hi 👋'} subtitle={`Welcome back, ${name}`} />
      <View style={styles.LanguagesContainer}>
        <ScrollView
          style={styles.LanguagesScrollContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <LanguageCard
            selected={true}
            onPress={() => undefined}
            title={'JavaScript'}
            emoji={'🤓'}
            color={'#FED18C'}
          />
          <LanguageCard
            selected={false}
            onPress={() => alert('Coming soon!')}
            title={'Python'}
            emoji={'🐍'}
            color={'#4B8BBE'}
          />
        </ScrollView>
      </View>
      <Header title={'Courses'} />
      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 20,
          marginHorizontal: -20,
          borderColor: colors.primary.separtorColor,
        }}
      />
      {renderHomeCourses()}
    </Container>
  )
}

const styles = StyleSheet.create({
  LanguagesContainer: {
    marginTop: 40,
  },
  LanguagesScrollContainer: {
    marginHorizontal: -20,
  },
})
