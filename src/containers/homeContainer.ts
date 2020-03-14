import { connect } from 'react-redux'
import { Home } from '../components/home/screens/home'
import { AppDispatch, AppState } from '../redux/rootReducer'
import { bindActionCreators } from '@reduxjs/toolkit'
import { getCourses, setSelectedCourse } from '../redux/thunks'

function mapStateToProps(state: AppState) {
  return {
    courseList: state.courses.courseList,
  }
}

function mapDispatchToProps(dispatch: AppDispatch) {
  return bindActionCreators(
    {
      getCourses,
      setSelectedCourse,
    },
    dispatch,
  )
}

export const HomeConatiner = connect(mapStateToProps, mapDispatchToProps)(Home)
