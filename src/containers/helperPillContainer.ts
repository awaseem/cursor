import { connect } from 'react-redux'
import { AppState } from '../redux/rootReducer'
import {
  HelperPillReduxProps,
  HelperPill,
} from '../components/helper/helperPill'

function mapStateToProps(state: AppState): HelperPillReduxProps {
  return {
    heading: state.helperPill.heading,
    message: state.helperPill.message,
    animation: state.helperPill.animation,
  }
}

export const HelperPillContainer = connect(mapStateToProps)(HelperPill)
