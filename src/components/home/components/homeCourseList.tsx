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
import { Sections, SectionTitle } from '../../../redux/courseSlices'
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
  subjectColor: string
}

export function HomeCourseList({
  scrollAnimationValue,
  maxHeight,
  courseSections,
  loading,
  getCourses,
  setSelectedCourse,
  subjectColor,
}: HomeCourseListProps) {
  const navigation = useNavigation()
  const { font, colors } = useTheme()

  function getBorderColor(title: string): string {
    if (title === SectionTitle.inProgress) {
      return subjectColor
    }
    if (title === SectionTitle.incomplete) {
      return colors.primary.buttonErrorColor
    }
    return colors.primary.buttonSucessColor
  }

  return (
    <Animated.SectionList
      style={styles.SectionListIndex}
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
        <Text style={[font.subtitleHeading, styles.SubtitleHeading]}>
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
  SectionListIndex: {
    zIndex: -1000,
  },
  SubtitleHeading: {
    marginBottom: 30,
  },
  ContentContainer: {
    paddingTop: 40,
    paddingBottom: 40,
  },
})
