import { AppDispatch } from './rootReducer'
import { courseList, selectedCourse } from './courseSlices'
import { getCoursesForJavascript, getCourseByPath } from '../data/api'

export function getCourses() {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(courseList.actions.setError(false))
      dispatch(courseList.actions.setLoading(true))

      const javaScriptCourses = await getCoursesForJavascript()
      dispatch(courseList.actions.setList(javaScriptCourses))

      dispatch(courseList.actions.setLoading(false))
    } catch (error) {
      dispatch(courseList.actions.setError(true))
      console.log(error)
    }
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
