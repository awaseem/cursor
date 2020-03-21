import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProfileState {
  name: string
  lastLoggedIn: string
  firstTime: boolean
}

export const profile = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    lastLoggedIn: '',
    firstTime: true,
  } as ProfileState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setLastLoggedIn: (state, action: PayloadAction<string>) => {
      state.lastLoggedIn = action.payload
    },
    setFirstTime: (state, action: PayloadAction<boolean>) => {
      state.firstTime = action.payload
    },
  },
})
