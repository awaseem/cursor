import { connect } from 'react-redux'
import { AppDispatch } from '../redux/rootReducer'
import { bindActionCreators } from '@reduxjs/toolkit'
import {
  Welcome,
  WelcomeReduxDispatch,
} from '../components/welcome/screens/welcome'
import { setFirstTimeProfile } from '../redux/profileThunks'

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch: AppDispatch): WelcomeReduxDispatch {
  return bindActionCreators(
    {
      setFirstTimeProfile,
    },
    dispatch,
  )
}

export const WelcomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome)
