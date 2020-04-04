import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HelperPillReduxProps } from '../components/helper/helperPill'

export type HelperPillState = HelperPillReduxProps

export const helperPill = createSlice({
  name: 'helperPill',
  initialState: {
    heading: '',
    message: '',
    animation: false,
  } as HelperPillState,
  reducers: {
    setHeading: (state, action: PayloadAction<string>) => {
      state.heading = action.payload
    },
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload
    },
    setAnimation: (state, action: PayloadAction<boolean>) => {
      state.animation = action.payload
    },
  },
})
