import React from 'react'
import {
  RefreshControl,
  Text,
  StyleSheet,
  Animated,
  SectionListRenderItemInfo,
} from 'react-native'
import { CourseRow } from './courseRow'
import { Screens } from '../../../navigation/screens'
import { Sections } from '../../../redux/courseSlices'
import { useTheme } from '../../../hooks/themeHooks'
import { useNavigation } from '@react-navigation/native'
import { CourseListItem } from '../../../data/api'

export interface HomeCourseListProps {
  courseSections: Sections
  loading: boolean
  maxHeight: number
  scrollAnimationValue: Animated.Value
  getCourses: () => void
  setSelectedCourse: (course: CourseListItem) => void
}

export function HomeCourseList({
  scrollAnimationValue,
  maxHeight,
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
      return '#FED18C'
    }
    if (title === 'Incomplete') {
      return colors.primary.buttonErrorColor
    }
    return colors.primary.buttonSucessColor
  }

  return (
    <Animated.SectionList
      style={{ zIndex: -1000 }}
      showsVerticalScrollIndicator={false}
      sections={courseSections}
      stickySectionHeadersEnabled={false}
      keyExtractor={(item: CourseListItem) => item.id}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getCourses} />
      }
      contentContainerStyle={styles.ContentContainer}
      renderSectionHeader={({
        section: { title },
      }: SectionListRenderItemInfo<CourseListItem>) => (
        <Text style={[font.subtitleHeading, { marginBottom: 30 }]}>
          {title}
        </Text>
      )}
      renderItem={({
        item,
        section: { title },
      }: SectionListRenderItemInfo<CourseListItem>) => (
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
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollAnimationValue } } }],
        { useNativeDriver: true },
      )}
      contentInset={{
        top: maxHeight,
      }}
      contentOffset={{
        y: -maxHeight,
      }}
    />
  )
}

const styles = StyleSheet.create({
  ContentContainer: {
    paddingTop: 40,
    paddingBottom: 40,
  },
})
