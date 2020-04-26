import { AppDispatch } from './rootReducer'
import { subjectList, selectedSubject } from './subjectsSlice'
import { getSubjects } from '../data/api'

export function getAllSubjects() {
  return async (dispatch: AppDispatch): Promise<void> => {
    const { setError, setLoading, setList } = subjectList.actions
    const { setSelectedSubject } = selectedSubject.actions

    dispatch(setError(false))
    dispatch(setLoading(true))

    try {
      const subjects = await getSubjects()
      dispatch(setList(subjects))

      dispatch(setSelectedSubject(subjects[0]))
    } catch (error) {
      dispatch(setError(true))
      console.log(error)
    } finally {
      dispatch(setLoading(false))
    }
  }
}
