import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ProfileState {
  readonly name: string
  readonly lastLoggedIn: string
  readonly firstTime: boolean
  readonly outOfOrder: boolean
  readonly disableCompletePopup: boolean
  readonly disableVibrations: boolean
  readonly notificationId?: string | number
}

export const profile = createSlice({
  name: 'profile',
  initialState: {
    name: '',
    firstTime: true,
    outOfOrder: false,
    disableCompletePopup: false,
    disableVibrations: false,
    notificationId: undefined,
  } as ProfileState,
  reducers: {
    setName: (state, action: PayloadAction<string>): ProfileState => {
      return {
        ...state,
        name: action.payload,
      }
    },
    setFirstTime: (state, action: PayloadAction<boolean>): ProfileState => {
      return {
        ...state,
        firstTime: action.payload,
      }
    },
    setOutOfOrder: (state, action: PayloadAction<boolean>): ProfileState => {
      return {
        ...state,
        outOfOrder: action.payload,
      }
    },
    setDisableCompletePopup: (
      state,
      action: PayloadAction<boolean>,
    ): ProfileState => {
      return {
        ...state,
        disableCompletePopup: action.payload,
      }
    },
    setDisableVibrations: (
      state,
      action: PayloadAction<boolean>,
    ): ProfileState => {
      return {
        ...state,
        disableVibrations: action.payload,
      }
    },
    setNotificationId: (
      state,
      action: PayloadAction<string | number>,
    ): ProfileState => {
      return {
        ...state,
        notificationId: action.payload,
      }
    },
    removeNotificationId: (state): ProfileState => {
      return {
        ...state,
        notificationId: undefined,
      }
    },
  },
})
