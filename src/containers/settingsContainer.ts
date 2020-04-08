import { connect } from 'react-redux'
import { AppState } from '../redux/rootReducer'
import {
  SettingsReduxProps,
  Settings,
} from '../components/settings/screens/settings'

function mapStateToProps(state: AppState): SettingsReduxProps {
  return {
    outOfOrder: state.profile.outOfOrder,
  }
}

export const SettingsContainer = connect(mapStateToProps)(Settings)
