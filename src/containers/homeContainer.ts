import { connect } from 'react-redux'
import {
  Home,
  HomeReduxProps,
  HomeReduxDispatch,
} from '../components/home/screens/home'
import { AppDispatch, AppState } from '../redux/rootReducer'
import { bindActionCreators } from '@reduxjs/toolkit'
import { getCourses, setSelectedCourse } from '../redux/courseThunks'
import { notifications } from '../redux/notificationSlice'
import { getAllSubjects } from '../redux/subjectThunks'

function mapStateToProps(state: AppState): HomeReduxProps {
  return {
    courses: {
      loading: state.courses.courseList.loading,
      error: state.courses.courseList.error,
      courseSections: state.courses.courseSectionList.data,
    },
    subjects: {
      loading: state.subjects.subjectList.loading,
      error: state.subjects.subjectList.error,
      subjects: state.subjects.subjectList.data,
    },
    selectedSubject: state.subjects.selectedSubject,
    firstTime: state.profile.firstTime,
    name: state.profile.name,
    showEnjoyNotification: state.notifications.showEnjoyNotification,
  }
}

function mapDispatchToProps(dispatch: AppDispatch): HomeReduxDispatch {
  return bindActionCreators(
    {
      getCourses,
      setSelectedCourse,
      getAllSubjects,
      setShowEnjoyNotification: notifications.actions.setShowEnjoyNotification,
    },
    dispatch,
  )
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
