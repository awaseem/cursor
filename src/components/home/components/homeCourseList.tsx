import React from 'react'
import { SectionList, RefreshControl, Text, StyleSheet } from 'react-native'
import { CourseRow } from './courseRow'
import { Screens } from '../../../navigation/screens'
import { Sections } from '../../../redux/courseSlices'
import { useTheme } from '../../../hooks/themeHooks'
import { useNavigation } from '@react-navigation/native'
import { CourseListItem } from '../../../data/api'

export interface HomeCourseListProps {
  courseSections: Sections
  loading: boolean
  getCourses: () => void
  setSelectedCourse: (course: CourseListItem) => void
}

export function HomeCourseList({
  courseSections,
  loading,
  getCourses,
  setSelectedCourse,
}: HomeCourseListProps) {
  const navigation = useNavigation()
  const { font, colors } = useTheme()

  function getBorderColor(title: string): string {
    // TODO make into enums
    if (title === 'In Progress') {
      return colors.primary.buttonSucessColor
    }
    if (title === 'Incomplete') {
      return colors.primary.buttonErrorColor
    }
    return '#FED18C'
  }

  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      sections={courseSections}
      stickySectionHeadersEnabled={false}
      keyExtractor={item => item.id}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getCourses} />
      }
      contentContainerStyle={styles.ContentContainer}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={[font.subtitleHeading, { marginBottom: 30 }]}>
          {title}
        </Text>
      )}
      renderItem={({ item, section: { title } }) => (
        <CourseRow
          borderColor={getBorderColor(title)}
          onPress={() => {
            setSelectedCourse(item)
            navigation.navigate(Screens.Courses)
          }}
          title={item.name}
          description={item.description}
          emoji={item.emoji}
        />
      )}
    />
  )
}

const styles = StyleSheet.create({
  ContentContainer: { paddingTop: 40, paddingBottom: 40 },
})
