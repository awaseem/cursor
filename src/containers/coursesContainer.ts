import { connect } from 'react-redux'
import { AppState, AppDispatch } from '../redux/rootReducer'
import {
  CourseCarousel,
  CourseCarouselReduxProps,
  CourseCarouselDispatchProps,
} from '../components/course/screens/coursesCarousel'
import { bindActionCreators } from '@reduxjs/toolkit'
import {
  setCompletedItemAndRefresh,
  setInProgressItemAndRefresh,
} from '../redux/courseThunks'
import { stats } from '../redux/statsSlices'

function mapStateToProps(state: AppState): CourseCarouselReduxProps {
  return {
    selectedCourseItems: state.courses.selectedCourse.data.items,
    selectedCourse: state.courses.selectedCourse.data.course,
    activeIndex: state.courses.selectedCourse.data.itemIndex,
    completed: state.courses.selectedCourse.data.completed,
    loading: state.courses.selectedCourse.loading,
    error: state.courses.selectedCourse.error,
  }
}

function mapDispatchToProps(
  dispatch: AppDispatch,
): CourseCarouselDispatchProps {
  return bindActionCreators(
    {
      setInProgress: stats.actions.inProgressCourse,
      setCompletedAndRefresh: setCompletedItemAndRefresh,
      setInProgressAndRefresh: setInProgressItemAndRefresh,
    },
    dispatch,
  )
}

export const CourseContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseCarousel)
