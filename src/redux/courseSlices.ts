import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CourseList, CourseItems, CourseListItem } from '../data/api'
import { GenericApiDataState } from './sharedTypes'

export interface SelectedCourse {
  items: CourseItems
  course?: CourseListItem
  itemIndex: number
  completed: boolean
}

export enum SectionTitle {
  completed = 'Completed',
  incomplete = 'Incomplete',
  inProgress = 'In Progress',
}

export interface SectionCourseList {
  title: SectionTitle
  data: CourseList
}

export type Sections = SectionCourseList[]

export const courseSectionList = createSlice({
  name: 'courseSectionList',
  initialState: {
    loading: true,
    data: [],
    error: false,
  } as GenericApiDataState<Sections>,
  reducers: {
    setList: (state, action: PayloadAction<Sections>) => {
      state.data = action.payload
    },
  },
})

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
      if (action.payload) {
        state.data = []
      }
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
    data: {
      items: [],
      course: undefined,
      itemIndex: 0,
      completed: false,
    },
    error: false,
  } as GenericApiDataState<SelectedCourse>,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.error = action.payload
    },
    setItems: (state, action: PayloadAction<CourseItems>) => {
      state.data.items = action.payload
    },
    setCourse: (state, action: PayloadAction<CourseListItem>) => {
      state.data.course = action.payload
    },
    setItemIndex: (state, action: PayloadAction<number>) => {
      state.data.itemIndex = action.payload
    },
    setCompleted: (state, action: PayloadAction<boolean>) => {
      state.data.completed = action.payload
    },
  },
})
