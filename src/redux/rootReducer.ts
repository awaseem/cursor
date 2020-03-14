import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  courseList,
  CourseList,
  CourseItems,
  selectedCourse,
} from './courseSlices'

export const rootReducer = combineReducers({
  courses: combineReducers({
    courseList: courseList.reducer,
    selectedCourse: selectedCourse.reducer,
  }),
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>
