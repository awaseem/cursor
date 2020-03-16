import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CourseList, CourseItems } from '../data/api'

export const courseList = createSlice({
  name: 'courseList',
  initialState: [] as CourseList,
  reducers: {
    setList: (state, action: PayloadAction<CourseList>) =>
      (state = action.payload),
  },
})

export const selectedCourse = createSlice({
  name: 'selectedCourse',
  initialState: [] as CourseItems,
  reducers: {
    setSelectedCourse: (state, action: PayloadAction<CourseItems>) =>
      (state = action.payload),
  },
})
