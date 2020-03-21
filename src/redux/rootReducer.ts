import { AsyncStorage } from 'react-native'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import { courseList, selectedCourse } from './courseSlices'
import { profile } from './profileSlice'
import { stats } from './statsSlices'

const ASYNC_STORAGE_KEY = 'root_storage'
const BLACKLIST = ['courses']

export const rootReducer = combineReducers({
  courses: combineReducers({
    courseList: courseList.reducer,
    selectedCourse: selectedCourse.reducer,
  }),
  profile: profile.reducer,
  stats: stats.reducer,
})

const persistedReducer = persistReducer(
  {
    key: ASYNC_STORAGE_KEY,
    storage: AsyncStorage,
    blacklist: BLACKLIST,
  },
  rootReducer,
)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistedStore = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>
