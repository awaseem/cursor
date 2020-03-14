import { AppDispatch } from './rootReducer'
import { courseList, selectedCourse } from './courseSlices'

export function getCourses() {
  return async (dispatch: AppDispatch) => {
    const javaScriptCourses = await import(
      '../data/subjects/javaScript/courseList.json'
    )
    dispatch(courseList.actions.setList(javaScriptCourses.default))
  }
}

export function setSelectedCourse(path: string) {
  return async (dispatch: AppDispatch) => {
    // TODO this is a hack until we setup a simple rest api
    const course = await (path === '/courses/numbers.json'
      ? import('../data/subjects/javaScript/courses/numbers.json')
      : import('../data/subjects/javaScript/courses/strings.json'))
    // @ts-ignore
    dispatch(selectedCourse.actions.setSelectedCourse(course.default))
  }
}
