import React, { useEffect } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header } from '../components/header'
import { Container } from '../../container'
import { LanguageCard } from '../components/languageCard'
import { CourseRow } from '../components/courseRow'
import { Screens } from '../../../navigation/screens'
import { useTheme } from '../../../hooks/themeHooks'
import { CourseList } from '../../../redux/courseSlices'
import { FlatList } from 'react-native-gesture-handler'

export interface ReduxProps {
  courseList: CourseList
  getCourses: () => void
  setSelectedCourse: (path: string) => void
}

export function Home({
  courseList,
  getCourses,
  setSelectedCourse,
}: ReduxProps) {
  const navigation = useNavigation()
  const { colors } = useTheme()

  useEffect(() => {
    getCourses()
  }, [])

  return (
    <Container>
      <Header title={'Hi 👋'} subtitle={'Welcome back, Ali'} />
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
      <FlatList
        data={courseList}
        contentContainerStyle={{ paddingTop: 40, paddingBottom: 40 }}
        renderItem={({ item }) => (
          <CourseRow
            borderColor={'#FED18C'}
            onPress={() => {
              setSelectedCourse(item.path)
              navigation.navigate(Screens.Coures)
            }}
            title={item.name}
            emoji={item.emoji}
          />
        )}
      />
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
