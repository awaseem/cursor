import { combineReducers } from '@reduxjs/toolkit'
import {
  courseList,
  CourseList,
  CourseItems,
  selectedCourse,
} from './courseSlices'

export interface RootState {
  courses: {
    courseList: CourseList
    selectedCourse: CourseItems
  }
}

export const rootReducer = combineReducers({
  courses: combineReducers({
    courseList: courseList.reducer,
    selectedCourse: selectedCourse.reducer,
  }),
})
