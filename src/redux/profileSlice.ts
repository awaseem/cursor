import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProfileState {
  name: string
  lastLoggedIn: string
  firstTime: boolean
  outOfOrder: boolean
  disableCompletePopup: boolean
  notificationId?: string | number
}

export const profile = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    firstTime: true,
    outOfOrder: false,
    disableCompletePopup: false,
    notificationId: undefined,
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
    setNotificationId: (state, action: PayloadAction<string | number>) => {
      state.notificationId = action.payload
    },
    removeNotificationId: state => {
      state.notificationId = undefined
    },
  },
})
