import configureMockStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import * as fetchMock from 'fetch-mock'
import { AnyAction } from '@reduxjs/toolkit'
import { getCourses } from '../../courseThunks'

type DispatchExts = ThunkDispatch<{}, void, AnyAction>

const middlewares = [thunk]
const mockStore = configureMockStore<{}, DispatchExts>(middlewares)

const path = '/javascript'
const testCourses = [
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
    description: 'used for testing only!',
    emoji: '💩',
    path: '/some-path-2',
  },
]

describe('getCourses ', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('get in order courses for path with no completed or in progress courses', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: {},
        inProgressCourseIds: {},
      },
      profile: {
        outOfOrder: false,
      },
    })

    fetchMock.getOnce(`https://teacher-dev.getcursor.app/data/v1${path}`, {
      body: testCourses,
    })

    const expectedActions = [
      { type: 'courseList/setError', payload: false },
      { type: 'courseList/setLoading', payload: true },
      { type: 'courseList/setList', payload: testCourses },
      {
        type: 'courseSectionList/setList',
        payload: [{ title: 'Incomplete', data: [testCourses[0]] }],
      },
      { type: 'courseList/setLoading', payload: false },
    ]

    return store.dispatch(getCourses(path)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('get out of order courses for path with no completed or in progress courses', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: {},
        inProgressCourseIds: {},
      },
      profile: {
        outOfOrder: true,
      },
    })

    fetchMock.getOnce(`https://teacher-dev.getcursor.app/data/v1${path}`, {
      body: testCourses,
    })

    const expectedActions = [
      { type: 'courseList/setError', payload: false },
      { type: 'courseList/setLoading', payload: true },
      { type: 'courseList/setList', payload: testCourses },
      {
        type: 'courseSectionList/setList',
        payload: [{ title: 'Incomplete', data: testCourses }],
      },
      { type: 'courseList/setLoading', payload: false },
    ]

    return store.dispatch(getCourses(path)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('get out of order courses for path with no completed or in progress courses', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: {},
        inProgressCourseIds: {},
      },
      profile: {
        outOfOrder: true,
      },
    })

    fetchMock.getOnce(`https://teacher-dev.getcursor.app/data/v1${path}`, {
      body: testCourses,
    })

    const expectedActions = [
      { type: 'courseList/setError', payload: false },
      { type: 'courseList/setLoading', payload: true },
      { type: 'courseList/setList', payload: testCourses },
      {
        type: 'courseSectionList/setList',
        payload: [{ title: 'Incomplete', data: testCourses }],
      },
      { type: 'courseList/setLoading', payload: false },
    ]

    return store.dispatch(getCourses(path)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
