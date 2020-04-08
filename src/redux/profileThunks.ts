import { AppDispatch } from './rootReducer'
import { profile } from './profileSlice'
import { Alert } from 'react-native'
import { stats } from './statsSlices'
import { getCourses } from './courseThunks'

export function setFirstTimeProfile(name: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(profile.actions.setFirstTime(false))
    dispatch(profile.actions.setName(name))
  }
}

export function setOutOfOrder(value: boolean) {
  return async (dispatch: AppDispatch) => {
    const { setOutOfOrder } = profile.actions
    const { resetInProgress } = stats.actions

    const successHandler = () => {
      dispatch(setOutOfOrder(value))

      dispatch(resetInProgress())
      dispatch(getCourses())
    }

    Alert.alert(
      'Are you sure?',
      'This will erase all your in progress courses!',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Yes', onPress: successHandler },
      ],
      { cancelable: false },
    )
  }
}
