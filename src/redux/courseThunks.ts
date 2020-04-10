import { AppDispatch, AppState } from './rootReducer'
import {
  courseList,
  selectedCourse,
  SectionCourseList,
  courseSectionList,
  SectionTitle,
} from './courseSlices'
import {
  getCoursesForJavascript,
  getCourseByPath,
  CourseList,
  CourseListItem,
} from '../data/api'
import { stats } from './statsSlices'
import { showAndResetHelperPill } from './helperPillThunks'
import { notifications } from './notificationSlice'

export function getCourses() {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(courseList.actions.setError(false))
      dispatch(courseList.actions.setLoading(true))

      const javaScriptCourses = await getCoursesForJavascript()
      dispatch(courseList.actions.setList(javaScriptCourses))
      dispatch(setCourseSections(javaScriptCourses))

      dispatch(courseList.actions.setLoading(false))
    } catch (error) {
      dispatch(courseList.actions.setError(true))
      console.log(error)
    }
  }
}

export function setSelectedCourse(course: CourseListItem) {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
    try {
      const {
        stats: { inProgressCourseIds, completedCourseIds },
        profile: { disableCompletePopup },
      } = getState()

      dispatch(selectedCourse.actions.setError(false))
      dispatch(selectedCourse.actions.setLoading(true))

      const courseItems = await getCourseByPath(course.path)
      const activeIndex = inProgressCourseIds[course.id] ?? 0

      dispatch(selectedCourse.actions.setItems(courseItems))
      dispatch(selectedCourse.actions.setItemIndex(activeIndex))
      dispatch(selectedCourse.actions.setCourse(course))

      const courseCompleted = completedCourseIds[course.id]
      if (courseCompleted) {
        dispatch(selectedCourse.actions.setCompleted(true))

        if (!disableCompletePopup) {
          dispatch(
            showAndResetHelperPill(
              'Congrats!',
              'Good job! You can now navigate to any page you want.',
            ),
          )
        }
      } else {
        dispatch(selectedCourse.actions.setCompleted(false))
      }

      dispatch(selectedCourse.actions.setLoading(false))
    } catch (error) {
      dispatch(selectedCourse.actions.setError(true))
      console.log(error)
    }
  }
}

export function setCourseSections(courses: CourseList) {
  return (dispatch: AppDispatch, getState: () => AppState) => {
    const { completedCourseIds, inProgressCourseIds } = getState().stats

    const completedCourses: CourseList = courses.filter(
      course => completedCourseIds[course.id],
    )
    const inProgressCourses: CourseList = courses.filter(
      course => inProgressCourseIds[course.id] !== undefined,
    )
    const incompleteCourses: CourseList = courses
      .filter(course => !completedCourseIds[course.id])
      .filter(course => inProgressCourseIds[course.id] === undefined)

    const {
      profile: { outOfOrder },
    } = getState()
    const completedSection: SectionCourseList = {
      title: SectionTitle.completed,
      data: completedCourses,
    }
    const inProgressSection: SectionCourseList = {
      title: SectionTitle.inProgress,
      data: getInProgressCourses(inProgressCourses, outOfOrder),
    }
    const incompleteSection: SectionCourseList = {
      title: SectionTitle.incomplete,
      data: getIncompleteCourses(
        incompleteCourses,
        inProgressCourses,
        outOfOrder,
      ),
    }

    const nonEmptySections: SectionCourseList[] = [
      inProgressSection,
      incompleteSection,
      completedSection,
    ].filter(section => section.data.length > 0)

    dispatch(courseSectionList.actions.setList(nonEmptySections))
  }
}

export function nextCourseItem() {
  return (dispatch: AppDispatch, getState: () => AppState) => {
    const {
      itemIndex,
      completed,
      course,
    } = getState().courses.selectedCourse.data

    const newIndex = itemIndex + 1
    if (!completed) {
      dispatch(
        stats.actions.inProgressCourse({
          id: course?.id ?? '',
          index: newIndex,
        }),
      )
    }
    dispatch(selectedCourse.actions.setItemIndex(newIndex))
  }
}

export function refreshSectionList() {
  return (dispatch: AppDispatch, getState: () => AppState) => {
    const { data: courseList } = getState().courses.courseList
    dispatch(setCourseSections(courseList))
  }
}

export function setInProgressItemAndRefresh(id: string, index: number) {
  return (dispatch: AppDispatch) => {
    dispatch(stats.actions.inProgressCourse({ id, index }))
    dispatch(refreshSectionList())
  }
}

export function setCompletedItemAndRefresh(id: string) {
  return (dispatch: AppDispatch, getState: () => AppState) => {
    const { removeIdFromInProgressCourse, completedCourses } = stats.actions
    dispatch(removeIdFromInProgressCourse(id))
    dispatch(completedCourses(id))
    dispatch(refreshSectionList())

    // show enjoy notification only if the user has finished two courses
    const {
      stats: { completedCourseIds },
    } = getState()
    const { setShowEnjoyNotification } = notifications.actions
    if (Object.keys(completedCourseIds).length === 2) {
      dispatch(setShowEnjoyNotification(true))
    }
  }
}

function getInProgressCourses(
  inProgressCourses: CourseList,
  outOfOrder: boolean,
): CourseList {
  if (outOfOrder) {
    return inProgressCourses
  }

  const [firstCourse] = inProgressCourses
  if (firstCourse) {
    return [firstCourse]
  }

  return []
}

function getIncompleteCourses(
  incompleteCourses: CourseList,
  inProgressCourses: CourseList,
  outOfOrder: boolean,
): CourseList {
  if (outOfOrder) {
    return incompleteCourses
  }

  if (inProgressCourses.length > 0) {
    return []
  }

  const [firstCourse] = incompleteCourses
  if (firstCourse) {
    return [firstCourse]
  }

  return []
}
