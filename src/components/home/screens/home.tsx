import React, { useEffect } from 'react'
import { View, ScrollView, StyleSheet, RefreshControl } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Header } from '../components/header'
import { Container } from '../../common/container'
import { LanguageCard } from '../components/languageCard'
import { CourseRow } from '../components/courseRow'
import { Screens } from '../../../navigation/screens'
import { useTheme } from '../../../hooks/themeHooks'
import { FlatList } from 'react-native-gesture-handler'
import { CourseList } from '../../../data/api'
import { Loader } from '../../common/loader'

export interface HomeReduxProps {
  loading: boolean
  error: boolean
  courseList: CourseList
  firstTime: boolean
  name: string
}

export interface HomeReduxDispatch {
  getCourses: () => void
  setSelectedCourse: (path: string) => void
}

export function Home({
  loading,
  courseList,
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
            title={'Hypertext Markup Language'}
            emoji={'🖼️'}
            color={'#FF715B'}
          />
          <LanguageCard
            onPress={() => alert('Coming soon!')}
            title={'Cascading Style Sheets'}
            emoji={'🎨'}
            color={'#414770'}
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
      {loading && courseList.length === 0 ? (
        <Loader />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={loading} onRefresh={getCourses} />
          }
          data={courseList}
          contentContainerStyle={{ paddingTop: 40, paddingBottom: 40 }}
          renderItem={({ item }) => (
            <CourseRow
              borderColor={'#FED18C'}
              onPress={() => {
                setSelectedCourse(item.path)
                navigation.navigate(Screens.Courses)
              }}
              title={item.name}
              emoji={item.emoji}
            />
          )}
        />
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
