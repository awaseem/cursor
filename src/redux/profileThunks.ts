import { AppDispatch } from './rootReducer'
import { profile } from './profileSlice'
import getUnixTime from 'date-fns/getUnixTime'

export function setFirstTimeProfile(name: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(profile.actions.setFirstTime(false))
    dispatch(profile.actions.setName(name))

    const unixTime = getUnixTime(new Date()).toString()
    dispatch(profile.actions.setLastLoggedIn(unixTime))
  }
}
