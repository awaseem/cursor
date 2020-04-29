import * as fetchMock from 'fetch-mock'
import { setSelectedCourse } from '../../courseThunks'
import {
  createMockStore,
  testCourses,
  testCourseItems,
} from '../../../utils/testHelpers'

describe('setSelectedCourse ', () => {
  const mockStore = createMockStore()
  const mockCourse = testCourses[0]

  afterEach(() => {
    fetchMock.restore()
  })

  it('should handle selected courses errors', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: {},
        inProgressCourseIds: {},
      },
      profile: {
        disableCompletePopup: false,
      },
    })

    fetchMock.getOnce(
      `https://teacher-dev.getcursor.app/data/v1${mockCourse.path}`,
      {
        status: 404,
      },
    )

    const expectedActions = [
      { type: 'selectedCourse/setError', payload: false },
      { type: 'selectedCourse/setLoading', payload: true },
      { type: 'selectedCourse/setError', payload: true },
    ]

    return store.dispatch(setSelectedCourse(mockCourse)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should get selected course and set the value as this course is not completed', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: {},
        inProgressCourseIds: {},
      },
      profile: {
        disableCompletePopup: false,
      },
    })

    fetchMock.getOnce(
      `https://teacher-dev.getcursor.app/data/v1${mockCourse.path}`,
      {
        body: testCourseItems,
      },
    )

    const expectedActions = [
      { type: 'selectedCourse/setError', payload: false },
      { type: 'selectedCourse/setLoading', payload: true },
      {
        type: 'selectedCourse/setItems',
        payload: testCourseItems,
      },
      { type: 'selectedCourse/setItemIndex', payload: 0 },
      {
        type: 'selectedCourse/setCourse',
        payload: {
          id: '1',
          name: 'testCourse',
          description: 'used for testing only!',
          emoji: '💩',
          path: '/some-path',
        },
      },
      { type: 'selectedCourse/setCompleted', payload: false },
      { type: 'selectedCourse/setLoading', payload: false },
    ]

    return store.dispatch(setSelectedCourse(mockCourse)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should get selected course, since course is in progress, active index is set', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: {},
        inProgressCourseIds: { [mockCourse.id]: 3 },
      },
      profile: {
        disableCompletePopup: true,
      },
    })

    fetchMock.getOnce(
      `https://teacher-dev.getcursor.app/data/v1${mockCourse.path}`,
      {
        body: testCourseItems,
      },
    )

    const expectedActions = [
      { type: 'selectedCourse/setError', payload: false },
      { type: 'selectedCourse/setLoading', payload: true },
      {
        type: 'selectedCourse/setItems',
        payload: testCourseItems,
      },
      { type: 'selectedCourse/setItemIndex', payload: 3 },
      {
        type: 'selectedCourse/setCourse',
        payload: {
          id: '1',
          name: 'testCourse',
          description: 'used for testing only!',
          emoji: '💩',
          path: '/some-path',
        },
      },
      { type: 'selectedCourse/setCompleted', payload: false },
      { type: 'selectedCourse/setLoading', payload: false },
    ]

    return store.dispatch(setSelectedCourse(mockCourse)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should get selected course, since course is completed pop is disabled', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: { [mockCourse.id]: true },
        inProgressCourseIds: {},
      },
      profile: {
        disableCompletePopup: true,
      },
    })

    fetchMock.getOnce(
      `https://teacher-dev.getcursor.app/data/v1${mockCourse.path}`,
      {
        body: testCourseItems,
      },
    )

    const expectedActions = [
      { type: 'selectedCourse/setError', payload: false },
      { type: 'selectedCourse/setLoading', payload: true },
      {
        type: 'selectedCourse/setItems',
        payload: testCourseItems,
      },
      { type: 'selectedCourse/setItemIndex', payload: 0 },
      {
        type: 'selectedCourse/setCourse',
        payload: {
          id: '1',
          name: 'testCourse',
          description: 'used for testing only!',
          emoji: '💩',
          path: '/some-path',
        },
      },
      { type: 'selectedCourse/setCompleted', payload: true },
      { type: 'selectedCourse/setLoading', payload: false },
    ]

    return store.dispatch(setSelectedCourse(mockCourse)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should get selected course, since course is completed pop is enabled', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: { [mockCourse.id]: true },
        inProgressCourseIds: {},
      },
      profile: {
        disableCompletePopup: false,
      },
    })

    fetchMock.getOnce(
      `https://teacher-dev.getcursor.app/data/v1${mockCourse.path}`,
      {
        body: testCourseItems,
      },
    )

    const expectedActions = [
      { type: 'selectedCourse/setError', payload: false },
      { type: 'selectedCourse/setLoading', payload: true },
      {
        type: 'selectedCourse/setItems',
        payload: testCourseItems,
      },
      { type: 'selectedCourse/setItemIndex', payload: 0 },
      {
        type: 'selectedCourse/setCourse',
        payload: {
          id: '1',
          name: 'testCourse',
          description: 'used for testing only!',
          emoji: '💩',
          path: '/some-path',
        },
      },
      { type: 'selectedCourse/setCompleted', payload: true },
      { type: 'helperPill/setHeading', payload: 'Congrats!' },
      {
        type: 'helperPill/setMessage',
        payload: 'Good job! You can now navigate to any page you want.',
      },
      { type: 'helperPill/setAnimation', payload: true },
      { type: 'selectedCourse/setLoading', payload: false },
    ]

    return store.dispatch(setSelectedCourse(mockCourse)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
