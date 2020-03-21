import { AppDispatch, AppState } from './rootReducer'
import { courseList, selectedCourse, SectionCourseList } from './courseSlices'
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
      dispatch(setCompletedCourses(javaScriptCourses))

      dispatch(courseList.actions.setLoading(false))
    } catch (error) {
      dispatch(courseList.actions.setError(true))
      console.log(error)
    }
  }
}

export function setCompletedCourses(courses: CourseList) {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
    const completedCoursesIds = getState().stats.completedCourseIds

    const completedCourses: CourseList = courses.filter(
      course => completedCoursesIds[course.id],
    )
    const incompleteCourses: CourseList = courses.filter(
      course => !completedCoursesIds[course.id],
    )

    const completedSection: SectionCourseList = {
      title: 'Completed',
      data: completedCourses,
    }
    const incompleteSection: SectionCourseList = {
      title: 'Incomplete',
      data: incompleteCourses,
    }

    dispatch(courseList.actions.setList([incompleteSection, completedSection]))
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
