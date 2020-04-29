import configureMockStore, { MockStoreCreator } from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'

export type DispatchExts = ThunkDispatch<{}, void, AnyAction>

export const testCourses = [
  {
    id: '1',
    name: 'testCourse',
    description: 'used for testing only!',
    emoji: '💩',
    path: '/some-path',
  },
  {
    id: '2',
    name: 'testCourse2',
    description: 'used for testing only 2!',
    emoji: '💩',
    path: '/some-path-2',
  },
  {
    id: '3',
    name: 'testCourse3',
    description: 'used for testing only 3!',
    emoji: '💩',
    path: '/some-path-3',
  },
  {
    id: '4',
    name: 'testCourse4',
    description: 'used for testing only! 4',
    emoji: '💩',
    path: '/some-path-4',
  },
]

export function createMockStore(): MockStoreCreator<any, any> {
  const middlewares = [thunk]
  return configureMockStore<{}, DispatchExts>(middlewares)
}
