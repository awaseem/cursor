import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CourseList, CourseItems, CourseItem } from '../data/api'

export interface GenericApiDataState<T> {
  loading: boolean
  data: T
  error: boolean
}

export const courseList = createSlice({
  name: 'courseList',
  initialState: {
    loading: true,
    data: [],
    error: false,
  } as GenericApiDataState<CourseList>,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload
    },
    setList: (state, action: PayloadAction<CourseList>) => {
      state.data = action.payload
    },
  },
})

export const selectedCourse = createSlice({
  name: 'selectedCourse',
  initialState: {
    loading: false,
    data: [],
    error: false,
  } as GenericApiDataState<CourseItems>,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload
    },
    setList: (state, action: PayloadAction<CourseItems>) => {
      state.data = action.payload
    },
  },
})
