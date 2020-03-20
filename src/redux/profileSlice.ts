import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProfileState {
  name: string
  emoji: string
  lastLoggedIn: string
}

export const profile = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    emoji: '',
    lastLoggedIn: '',
  } as ProfileState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setEmoji: (state, action: PayloadAction<string>) => {
      state.emoji = action.payload
    },
    setLastLoggedIn: (state, action: PayloadAction<string>) => {
      state.lastLoggedIn = action.payload
    },
  },
})
