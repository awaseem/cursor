import { connect } from 'react-redux'
import { AppState } from '../redux/rootReducer'
import {
  CourseCarousel,
  CourseCarouselReduxProps,
} from '../components/course/screens/coursesCarousel'

function mapStateToProps(state: AppState): CourseCarouselReduxProps {
  return {
    selectedCourse: state.courses.selectedCourse.data,
    loading: state.courses.selectedCourse.loading,
    error: state.courses.selectedCourse.error,
  }
}

export const CourseContainer = connect(mapStateToProps)(CourseCarousel)
