import { AppDispatch } from './rootReducer'
import { subjectList } from './subjectsSlice'
import { getSubjects } from '../data/api'

export function getAllSubjects() {
  return async (dispatch: AppDispatch) => {
    const { setError, setLoading, setList } = subjectList.actions

    dispatch(setError(false))
    dispatch(setLoading(true))

    try {
      const subjects = await getSubjects()
      dispatch(setList(subjects))
    } catch (error) {
      dispatch(setError(true))
      console.log(error)
    } finally {
      dispatch(setLoading(false))
    }
  }
}
