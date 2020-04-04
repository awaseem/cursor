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
  courseSections,
  getCourses,
  firstTime,
  name,
}: HomeReduxProps & HomeReduxDispatch) {
  const navigation = useNavigation()
  const { colors } = useTheme()

  useEffect(() => {
    getCourses()
  }, [])

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
            onPress={() => undefined}
            title={'JavaScript'}
            emoji={'🤓'}
            color={'#FED18C'}
          />
          <LanguageCard
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
      {loading && courseSections.length === 0 ? (
        <Loader />
      ) : (
        <HomeCourseList courseSections={courseSections} loading={loading} />
      )}
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
