import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProfileState {
  name: string
  lastLoggedIn: string
}

export const profile = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    lastLoggedIn: '',
  } as ProfileState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setLastLoggedIn: (state, action: PayloadAction<string>) => {
      state.lastLoggedIn = action.payload
    },
  },
})
