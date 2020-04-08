import { connect } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { AppState, AppDispatch } from '../redux/rootReducer'
import {
  SettingsReduxProps,
  Settings,
  SettingsReduxDispatch,
} from '../components/settings/screens/settings'
import { setOutOfOrder } from '../redux/profileThunks'

function mapStateToProps(state: AppState): SettingsReduxProps {
  return {
    outOfOrder: state.profile.outOfOrder,
  }
}

function mapDispatchToProps(dispatch: AppDispatch): SettingsReduxDispatch {
  return bindActionCreators(
    {
      setOutOfOrder,
    },
    dispatch,
  )
}

export const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings)
