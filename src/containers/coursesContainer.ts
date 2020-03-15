import { connect } from 'react-redux'
import { AppState } from '../redux/rootReducer'
import { CourseCarousel } from '../components/course/screens/coursesCarousel'

function mapStateToProps(state: AppState) {
  return {
    selectedCourse: state.courses.selectedCourse,
  }
}

function mapDispatchToProps() {
  return {}
}

export const CourseContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CourseCarousel)
