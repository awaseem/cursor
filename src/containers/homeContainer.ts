import { connect } from 'react-redux'
import { Home } from '../components/home/screens/home'
import { AppDispatch } from '../redux/rootReducer'
import { bindActionCreators } from '@reduxjs/toolkit'
import { getCourses } from '../redux/thunks'

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return bindActionCreators(
    {
      getCourses,
    },
    dispatch,
  )
}

export const HomeConatiner = connect(mapStateToProps, mapDispatchToProps)(Home)
