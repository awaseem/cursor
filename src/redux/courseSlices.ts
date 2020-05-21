import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CourseList, CourseItems, CourseListItem } from '../data/api'
import { GenericApiDataState } from './sharedTypes'

export interface SelectedCourse {
  readonly items: CourseItems
  readonly course?: CourseListItem
  readonly itemIndex: number
  readonly activeIndex: number
  readonly completed: boolean
}

export enum SectionTitle {
  completed = 'Completed',
  incomplete = 'Incomplete',
  inProgress = 'In Progress',
}

export interface SectionCourseList {
  readonly title: SectionTitle
  readonly data: CourseList
}

export type Sections = readonly SectionCourseList[]

export const courseSectionList = createSlice({
  name: 'courseSectionList',
  initialState: {
    loading: true,
    data: [],
    error: false,
  } as GenericApiDataState<Sections>,
  reducers: {
    setList: (
      state,
      action: PayloadAction<Sections>,
    ): GenericApiDataState<Sections> => {
      return {
        ...state,
        data: action.payload,
      }
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
    setLoading: (
      state,
      action: PayloadAction<boolean>,
    ): GenericApiDataState<CourseList> => {
      return {
        ...state,
        loading: action.payload,
      }
    },
    setError: (
      state,
      action: PayloadAction<boolean>,
    ): GenericApiDataState<CourseList> => {
      return {
        ...state,
        data: action.payload ? [] : state.data,
        error: action.payload,
      }
    },
    setList: (
      state,
      action: PayloadAction<CourseList>,
    ): GenericApiDataState<CourseList> => {
      return {
        ...state,
        data: action.payload,
      }
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
      activeIndex: 0,
      completed: false,
    },
    error: false,
  } as GenericApiDataState<SelectedCourse>,
  reducers: {
    setLoading: (
      state,
      action: PayloadAction<boolean>,
    ): GenericApiDataState<SelectedCourse> => {
      return {
        ...state,
        loading: action.payload,
      }
    },
    setError: (
      state,
      action: PayloadAction<boolean>,
    ): GenericApiDataState<SelectedCourse> => {
      return {
        ...state,
        error: action.payload,
      }
    },
    setItems: (
      state,
      action: PayloadAction<CourseItems>,
    ): GenericApiDataState<SelectedCourse> => {
      return {
        ...state,
        data: {
          ...state.data,
          items: action.payload,
        },
      }
    },
    setCourse: (
      state,
      action: PayloadAction<CourseListItem>,
    ): GenericApiDataState<SelectedCourse> => {
      return {
        ...state,
        data: {
          ...state.data,
          course: action.payload,
        },
      }
    },
    setItemIndex: (
      state,
      action: PayloadAction<number>,
    ): GenericApiDataState<SelectedCourse> => {
      return {
        ...state,
        data: {
          ...state.data,
          itemIndex: action.payload,
        },
      }
    },
    setActiveIndex: (
      state,
      action: PayloadAction<number>,
    ): GenericApiDataState<SelectedCourse> => {
      return {
        ...state,
        data: {
          ...state.data,
          activeIndex: action.payload,
        },
      }
    },
    setCompleted: (
      state,
      action: PayloadAction<boolean>,
    ): GenericApiDataState<SelectedCourse> => {
      return {
        ...state,
        data: {
          ...state.data,
          completed: action.payload,
        },
      }
    },
  },
})
