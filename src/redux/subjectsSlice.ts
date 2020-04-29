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
    setLoading: (
      state,
      action: PayloadAction<boolean>,
    ): GenericApiDataState<SubjectList> => {
      return {
        ...state,
        loading: action.payload,
      }
    },
    setError: (
      state,
      action: PayloadAction<boolean>,
    ): GenericApiDataState<SubjectList> => {
      return {
        ...state,
        data: action.payload ? [] : state.data,
        error: action.payload,
      }
    },
    setList: (
      state,
      action: PayloadAction<SubjectList>,
    ): GenericApiDataState<SubjectList> => {
      return {
        ...state,
        data: action.payload,
      }
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
    setSelectedSubject: (
      state,
      action: PayloadAction<SubjectListItem>,
    ): SubjectListItem => {
      return action.payload
    },
  },
})
