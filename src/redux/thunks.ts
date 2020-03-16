import { AppDispatch } from './rootReducer'
import { courseList, selectedCourse } from './courseSlices'
import { getCoursesForJavascript, getCourseByPath } from '../data/api'

export function getCourses() {
  return async (dispatch: AppDispatch) => {
    try {
      // TODO handle refresh case
      const javaScriptCourses = await getCoursesForJavascript()

      dispatch(courseList.actions.setList(javaScriptCourses))
    } catch (error) {
      // TODO handle errors
      console.log(error)
    }
  }
}

export function setSelectedCourse(path: string) {
  return async (dispatch: AppDispatch) => {
    try {
      // TODO handle refresh case
      const course = await getCourseByPath(path)

      dispatch(selectedCourse.actions.setList(course))
    } catch (error) {
      // TODO handle errors
      console.log(error)
    }
  }
}
