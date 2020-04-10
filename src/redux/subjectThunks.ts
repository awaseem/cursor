import { AppDispatch } from './rootReducer'
import { subjectList } from './subjectsSlice'
import { getSubjects } from '../data/api'

export function getAllSubjects() {
  return async (dispatch: AppDispatch) => {
    const { setError, setLoading, setList } = subjectList.actions

    try {
      dispatch(setError(false))
      dispatch(setLoading(true))

      const subjects = await getSubjects()
      dispatch(setList(subjects))

      dispatch(setLoading(false))
    } catch (error) {
      dispatch(setError(true))
      console.log(error)
    }
  }
}
