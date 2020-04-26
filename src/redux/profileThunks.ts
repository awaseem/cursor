import { Alert, Linking } from 'react-native'
import { Notifications } from 'expo'
import Constants from 'expo-constants'
import { askAsync, PermissionStatus, NOTIFICATIONS } from 'expo-permissions'
import { startOfWeek, setHours, addDays } from 'date-fns'
import { AppDispatch, AppState } from './rootReducer'
import { profile } from './profileSlice'
import { stats } from './statsSlices'
import { getCourses } from './courseThunks'

const NOTIFICATION_TITLE = 'Practice makes perfect'
const NOTIFICATION_BODY =
  'Come back and practice courses so you can perfect the art of code!'

export function setFirstTimeProfile(name: string) {
  return (dispatch: AppDispatch): void => {
    dispatch(profile.actions.setFirstTime(false))
    dispatch(profile.actions.setName(name))
  }
}

export function toggleOutOfOrder(value: boolean) {
  return (dispatch: AppDispatch, getState: () => AppState): void => {
    const {
      subjects: { selectedSubject },
    } = getState()
    const { setOutOfOrder } = profile.actions
    const { resetInProgress } = stats.actions

    function successHandler(): void {
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
  return async (dispatch: AppDispatch): Promise<void> => {
    const { setNotificationId, removeNotificationId } = profile.actions

    if (!value) {
      Notifications.cancelAllScheduledNotificationsAsync()
      dispatch(removeNotificationId())
      return
    }

    const result = await askAsync(NOTIFICATIONS)

    function goToSettings(): void {
      Linking.openURL('app-settings:')
    }

    if (Constants.isDevice && result.status === PermissionStatus.GRANTED) {
      const recentMonday = startOfWeek(new Date(), { weekStartsOn: 1 })
      const nextMonday = addDays(recentMonday, 7)
      const nextMondayAtNoon = setHours(nextMonday, 12)

      const notificationId = await Notifications.scheduleLocalNotificationAsync(
        {
          title: NOTIFICATION_TITLE,
          body: NOTIFICATION_BODY,
        },
        {
          time: nextMondayAtNoon,
          repeat: 'week',
        },
      )
      dispatch(setNotificationId(notificationId))
    } else if (Constants.isDevice) {
      Alert.alert(
        'Error',
        `It seems you've turned off notifications for this app, you can enable them within the settings`,
        [
          {
            text: 'Go to settings',
            onPress: goToSettings,
          },
        ],
        { cancelable: true },
      )
    }
  }
}
