import { connect } from 'react-redux'
import {
  Home,
  HomeReduxProps,
  HomeReduxDispatch,
} from '../components/home/screens/home'
import { AppDispatch, AppState } from '../redux/rootReducer'
import { bindActionCreators } from '@reduxjs/toolkit'
import { getCourses, setSelectedCourse } from '../redux/thunks'

function mapStateToProps(state: AppState): HomeReduxProps {
  return {
    loading: state.courses.courseList.loading,
    error: state.courses.courseList.error,
    courseList: state.courses.courseList.data,
  }
}

function mapDispatchToProps(dispatch: AppDispatch): HomeReduxDispatch {
  return bindActionCreators(
    {
      getCourses,
      setSelectedCourse,
    },
    dispatch,
  )
}

export const HomeConatiner = connect(mapStateToProps, mapDispatchToProps)(Home)