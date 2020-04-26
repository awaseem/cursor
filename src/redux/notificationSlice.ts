import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NotificationsState {
  readonly showEnjoyNotification: boolean
}

export const notifications = createSlice({
  name: 'notifications',
  initialState: {
    showEnjoyNotification: false,
  } as NotificationsState,
  reducers: {
    setShowEnjoyNotification: (
      state,
      action: PayloadAction<boolean>,
    ): NotificationsState => {
      state.showEnjoyNotification = action.payload
      return {
        ...state,
        showEnjoyNotification: action.payload,
      }
    },
  },
})
