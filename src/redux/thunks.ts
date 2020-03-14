import { AppState, AppDispatch } from './rootReducer'
import { courseList } from './courseSlices'

export function getCourses() {
  return async (dispatch: AppDispatch) => {
    const javaScriptCourses = await import(
      '../data/subjects/javaScript/courseList.json'
    )
    dispatch(courseList.actions.setList(javaScriptCourses))
  }
}
