import React, { useRef, useEffect } from 'react'
import {
  RefreshControl,
  Text,
  StyleSheet,
  Animated,
  SectionListRenderItemInfo,
  SectionList,
} from 'react-native'
import { CourseRow } from './courseRow'
import { Screens } from '../../../navigation/screens'
import { Sections, SectionTitle } from '../../../redux/courseSlices'
import { useTheme } from '../../../hooks/themeHooks'
import { useNavigation } from '@react-navigation/native'
import { CourseListItem } from '../../../data/api'

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

export interface HomeCourseListProps {
  readonly courseSections: Sections
  readonly loading: boolean
  readonly scrollToTop: boolean
  readonly maxHeight: number
  readonly scrollAnimationValue: Animated.Value
  readonly getCourses: () => void
  readonly setSelectedCourse: (course: CourseListItem) => void
  readonly subjectColor: string
}

export function HomeCourseList({
  scrollAnimationValue,
  maxHeight,
  courseSections,
  loading,
  scrollToTop,
  getCourses,
  setSelectedCourse,
  subjectColor,
}: HomeCourseListProps): JSX.Element {
  const navigation = useNavigation()
  const { font, colors } = useTheme()

  const sectionListRef = useRef<SectionList<number> | null>(null)

  useEffect(() => {
    if (scrollToTop) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore: not sure what the right type of this is
      sectionListRef.current?.getNode().scrollToLocation({
        itemIndex: 0,
        sectionIndex: 0,
        viewOffset: maxHeight + 40,
      })
    }
  }, [scrollToTop])

  function getBorderColor(title: string): string {
    if (title === SectionTitle.inProgress) {
      return subjectColor
    }
    if (title === SectionTitle.incomplete) {
      return colors.primary.buttonErrorColor
    }
    return colors.primary.buttonSucessColor
  }

  function keyExtractor(item: CourseListItem): string {
    return item.id
  }

  function renderSectionHeader({
    section: { title },
  }: SectionListRenderItemInfo<CourseListItem>): JSX.Element {
    return (
      <Text style={[font.subtitleHeading, styles.SubtitleHeading]}>
        {title}
      </Text>
    )
  }

  function onPress(item: CourseListItem) {
    return (): void => {
      setSelectedCourse(item)
      navigation.navigate(Screens.Courses)
    }
  }

  function renderItem({
    item,
    section: { title },
  }: SectionListRenderItemInfo<CourseListItem>): JSX.Element {
    return (
      <CourseRow
        borderColor={getBorderColor(title)}
        onPress={onPress(item)}
        title={item.name}
        description={item.description}
        emoji={item.emoji}
      />
    )
  }

  return (
    <Animated.SectionList
      ref={sectionListRef}
      style={styles.SectionListIndex}
      showsVerticalScrollIndicator={false}
      sections={courseSections}
      stickySectionHeadersEnabled={false}
      keyExtractor={keyExtractor}
      refreshControl={
        <RefreshControl refreshing={loading} onRefresh={getCourses} />
      }
      contentContainerStyle={styles.ContentContainer}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
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
