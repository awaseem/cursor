import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GenericApiDataState } from './sharedTypes'
import { SubjectList, SubjectListItem } from '../data/api'

export const subjectList = createSlice({
  name: 'subjectList',
  initialState: {
    loading: true,
    data: [],
    error: false,
  } as GenericApiDataState<SubjectList>,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<boolean>) => {
      if (action.payload) {
        state.data = []
      }
      state.error = action.payload
    },
    setList: (state, action: PayloadAction<SubjectList>) => {
      state.data = action.payload
    },
  },
})

export const selectedSubject = createSlice({
  name: 'selectedSubject',
  initialState: {
    id: '',
    name: '',
    description: '',
    emoji: '',
    path: '',
    color: '',
  } as SubjectListItem,
  reducers: {
    setSelectedSubject: (state, action: PayloadAction<SubjectListItem>) => {
      state = action.payload
    },
  },
})
