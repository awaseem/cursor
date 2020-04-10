import { connect } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { AppState, AppDispatch } from '../redux/rootReducer'
import { toggleNotifications } from '../redux/profileThunks'
import {
  EnjoyNotification,
  EnjoyNotificationReduxProps,
  EnjoyNotificationReduxDispatch,
} from '../components/notification/screens/enjoyNotification'

function mapStateToProps(state: AppState): EnjoyNotificationReduxProps {
  return {
    notifications: Boolean(state.profile.notificationId),
  }
}

function mapDispatchToProps(
  dispatch: AppDispatch,
): EnjoyNotificationReduxDispatch {
  return bindActionCreators(
    {
      toggleNotifications,
    },
    dispatch,
  )
}

export const EnjoyNotificationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EnjoyNotification)
