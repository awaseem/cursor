import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface StatsState {
  readonly completedCourseIds: { readonly [id: string]: boolean }
  readonly inProgressCourseIds: { readonly [id: string]: number }
}

export const stats = createSlice({
  name: 'stats',
  initialState: {
    completedCourseIds: {},
    inProgressCourseIds: {},
  } as StatsState,
  reducers: {
    completedCourses: (state, action: PayloadAction<string>): StatsState => {
      return {
        ...state,
        completedCourseIds: {
          ...state.completedCourseIds,
          [action.payload]: true,
        },
      }
    },
    inProgressCourse: (
      state,
      action: PayloadAction<{ readonly id: string; readonly index: number }>,
    ): StatsState => {
      return {
        ...state,
        inProgressCourseIds: {
          ...state.inProgressCourseIds,
          [action.payload.id]: action.payload.index,
        },
      }
    },
    removeIdFromInProgressCourse: (
      state,
      action: PayloadAction<string>,
    ): StatsState => {
      const {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        [action.payload]: value,
        ...withOutIdCourses
      } = state.inProgressCourseIds
      return {
        ...state,
        inProgressCourseIds: withOutIdCourses,
      }
    },
    resetInProgress: (state): StatsState => {
      return {
        ...state,
        inProgressCourseIds: {},
      }
    },
  },
})
