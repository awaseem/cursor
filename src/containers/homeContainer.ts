import { connect } from 'react-redux'
import {
  Home,
  HomeReduxProps,
  HomeReduxDispatch,
} from '../components/home/screens/home'
import { AppDispatch, AppState } from '../redux/rootReducer'
import { bindActionCreators } from '@reduxjs/toolkit'
import { getCourses, setSelectedCourse } from '../redux/courseThunks'

function mapStateToProps(state: AppState): HomeReduxProps {
  return {
    loading: state.courses.courseList.loading,
    error: state.courses.courseList.error,
    courseSections: state.courses.courseList.data,
    firstTime: state.profile.firstTime,
    name: state.profile.name,
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

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
