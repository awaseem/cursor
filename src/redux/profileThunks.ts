import { Alert } from 'react-native'
import { Notifications } from 'expo'
import Constants from 'expo-constants'
import { askAsync, PermissionStatus, NOTIFICATIONS } from 'expo-permissions'
import { AppDispatch, AppState } from './rootReducer'
import { profile } from './profileSlice'
import { stats } from './statsSlices'
import { getCourses } from './courseThunks'

const NOTIFICATION_TWO_MINUTES = 120000
const NOTIFICATION_TITLE = 'Practice makes perfect'
const NOTIFICATION_BODY =
  'Come back and practice courses so you can perfect the art of code!'

export function setFirstTimeProfile(name: string) {
  return async (dispatch: AppDispatch) => {
    dispatch(profile.actions.setFirstTime(false))
    dispatch(profile.actions.setName(name))
  }
}

export function toggleOutOfOrder(value: boolean) {
  return async (dispatch: AppDispatch, getState: () => AppState) => {
    const {
      subjects: { selectedSubject },
    } = getState()
    const { setOutOfOrder } = profile.actions
    const { resetInProgress } = stats.actions

    const successHandler = () => {
      dispatch(setOutOfOrder(value))

      dispatch(resetInProgress())
      dispatch(getCourses(selectedSubject.path))
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

export function toggleNotifications(value: boolean) {
  return async (dispatch: AppDispatch) => {
    const { setNotificationId, removeNotificationId } = profile.actions

    if (!value) {
      Notifications.cancelAllScheduledNotificationsAsync()
      dispatch(removeNotificationId())
      return
    }

    const result = await askAsync(NOTIFICATIONS)

    if (Constants.isDevice && result.status === PermissionStatus.GRANTED) {
      const notificationId = await Notifications.scheduleLocalNotificationAsync(
        {
          title: NOTIFICATION_TITLE,
          body: NOTIFICATION_BODY,
        },
        {
          time: new Date().getTime() + NOTIFICATION_TWO_MINUTES,
          repeat: 'week',
        },
      )
      dispatch(setNotificationId(notificationId))
    }
  }
}
