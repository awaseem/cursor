import { AppDispatch, AppState } from './rootReducer'
import {
  courseList,
  selectedCourse,
  SectionCourseList,
  courseSectionList,
} from './courseSlices'
import {
  getCoursesForJavascript,
  getCourseByPath,
  CourseList,
} from '../data/api'

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

export function setCourseSections(courses: CourseList) {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
    const { completedCourseIds, inProgressCourseIds } = getState().stats

    const completedCourses: CourseList = courses.filter(
      course => completedCourseIds[course.id],
    )
    const inProgressCourses: CourseList = courses.filter(
      course => inProgressCourseIds[course.id],
    )
    const incompleteCourses: CourseList = courses.filter(
      course => !completedCourseIds[course.id],
    )

    const completedSection: SectionCourseList = {
      title: 'Completed',
      data: completedCourses,
    }
    const inProgressSection: SectionCourseList = {
      title: 'In Progress',
      data: inProgressCourses,
    }
    const incompleteSection: SectionCourseList = {
      title: 'Incomplete',
      data: incompleteCourses,
    }

    const nonEmptySections: SectionCourseList[] = [
      inProgressSection,
      incompleteSection,
      completedSection,
    ].filter(section => section.data.length > 0)

    dispatch(courseSectionList.actions.setList(nonEmptySections))
  }
}

export function setSelectedCourse(path: string) {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(selectedCourse.actions.setError(false))
      dispatch(selectedCourse.actions.setLoading(true))

      const course = await getCourseByPath(path)
      dispatch(selectedCourse.actions.setList(course))

      dispatch(selectedCourse.actions.setLoading(false))
    } catch (error) {
      dispatch(selectedCourse.actions.setError(true))
      console.log(error)
    }
  }
}

export function refreshSectionList() {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
    const { data: courseList } = getState().courses.courseList
    dispatch(setCourseSections(courseList))
  }
}
