import * as fetchMock from 'fetch-mock'
import { getCourses } from '../../courseThunks'
import { createMockStore, testCourses } from '../../../utils/testHelpers'

const path = '/javascript'

describe('getCourses ', () => {
  const mockStore = createMockStore()

  afterEach(() => {
    fetchMock.restore()
  })

  it('should get in order courses for path with no completed or in progress courses', () => {
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

  it('should get out of order courses for path with no completed or in progress courses', () => {
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

  it('should fail to get course due to request error', () => {
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
      status: 404,
    })

    const expectedActions = [
      { type: 'courseList/setError', payload: false },
      { type: 'courseList/setLoading', payload: true },
      { type: 'courseList/setError', payload: true },
      { type: 'courseList/setLoading', payload: false },
    ]

    return store.dispatch(getCourses(path)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
