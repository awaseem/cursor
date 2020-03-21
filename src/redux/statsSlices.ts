import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface StatsState {
  completedCourseIds: { [id: string]: boolean }
}

export const stats = createSlice({
  name: 'stats',
  initialState: {
    completedCourseIds: {},
  } as StatsState,
  reducers: {
    completedCourses: (state, action: PayloadAction<string>) => {
      state.completedCourseIds = {
        ...state.completedCourseIds,
        [action.payload]: true,
      }
    },
  },
})
