import { connect } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { AppState, AppDispatch } from '../redux/rootReducer'
import {
  SettingsReduxProps,
  Settings,
  SettingsReduxDispatch,
} from '../components/settings/screens/settings'
import { setOutOfOrder } from '../redux/profileThunks'
import { profile } from '../redux/profileSlice'

function mapStateToProps(state: AppState): SettingsReduxProps {
  return {
    outOfOrder: state.profile.outOfOrder,
    disableCompletePopups: state.profile.disableCompletePopup,
  }
}

function mapDispatchToProps(dispatch: AppDispatch): SettingsReduxDispatch {
  return bindActionCreators(
    {
      setOutOfOrder,
      setDisableCompletePopups: profile.actions.setDisableCompletePopup,
    },
    dispatch,
  )
}

export const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings)
