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
import { courseList, selectedCourse, courseSectionList } from './courseSlices'
import { profile } from './profileSlice'
import { stats } from './statsSlices'
import { helperPill } from './helperPillSlice'
import { notifications } from './notificationSlice'

const ASYNC_STORAGE_KEY = 'root_storage'
const BLACKLIST = ['courses', 'helperPill', 'notifications']

export const rootReducer = combineReducers({
  courses: combineReducers({
    courseSectionList: courseSectionList.reducer,
    courseList: courseList.reducer,
    selectedCourse: selectedCourse.reducer,
  }),
  notifications: notifications.reducer,
  helperPill: helperPill.reducer,
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
    // Ignore these for serialize checks for redux persist to work properly
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistedStore = persistStore(store)

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof rootReducer>
