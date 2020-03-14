import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CourseListItem {
  id: string
  name: string
  emoji: string
  path: string
}

export type CourseList = CourseListItem[]

export const courseList = createSlice({
  name: 'courseList',
  initialState: [] as CourseList,
  reducers: {
    setList: (state, action: PayloadAction<CourseList>) =>
      (state = action.payload),
  },
})

export enum CourseType {
  outline = 'outline',
  choice = 'choice',
  chodingChoice = 'codingChoice',
  codingInputChoice = 'codingInputChoice',
}

export interface CourseItemBody {
  [prop: string]: any
}

export interface CourseItem extends CourseItemBody {
  type: CourseType
}

export type CourseItems = CourseItem[]

export const selectedCourse = createSlice({
  name: 'selectedCourse',
  initialState: [] as CourseItems,
  reducers: {
    setSelectedCourse: (state, action: PayloadAction<CourseItems>) =>
      (state = action.payload),
  },
})
