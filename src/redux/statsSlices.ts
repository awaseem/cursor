import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface StatsState {
  completedCourseIds: { [id: string]: boolean }
  inProgressCourseIds: { [id: string]: number }
}

export const stats = createSlice({
  name: 'stats',
  initialState: {
    completedCourseIds: {},
    inProgressCourseIds: {},
  } as StatsState,
  reducers: {
    completedCourses: (state, action: PayloadAction<string>) => {
      state.completedCourseIds = {
        ...state.completedCourseIds,
        [action.payload]: true,
      }
    },
    inProgressCourse: (
      state,
      action: PayloadAction<{ id: string; index: number }>,
    ) => {
      state.inProgressCourseIds = {
        ...state.inProgressCourseIds,
        [action.payload.id]: action.payload.index,
      }
    },
    removeIdFromInProgressCourse: (state, action: PayloadAction<string>) => {
      const {
        [action.payload]: value,
        ...withOutIdCourses
      } = state.inProgressCourseIds
      state.inProgressCourseIds = withOutIdCourses
    },
  },
})
