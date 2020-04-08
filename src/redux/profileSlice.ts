import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProfileState {
  name: string
  lastLoggedIn: string
  firstTime: boolean
  outOfOrder: boolean
  disableCompletePopup: boolean
}

export const profile = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    firstTime: true,
    outOfOrder: false,
    disableCompletePopup: false,
  } as ProfileState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setFirstTime: (state, action: PayloadAction<boolean>) => {
      state.firstTime = action.payload
    },
    setOutOfOrder: (state, action: PayloadAction<boolean>) => {
      state.outOfOrder = action.payload
    },
    setDisableCompletePopup: (state, action: PayloadAction<boolean>) => {
      state.disableCompletePopup = action.payload
    },
  },
})
