import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NotificationsState {
  showEnjoyNotification: boolean
}

export const notifications = createSlice({
  name: 'notifications',
  initialState: {
    showEnjoyNotification: false,
  } as NotificationsState,
  reducers: {
    setShowEnjoyNotification: (state, action: PayloadAction<boolean>) => {
      state.showEnjoyNotification = action.payload
    },
  },
})
