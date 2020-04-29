import * as fetchMock from 'fetch-mock'
import { createMockStore, testSubjects } from '../../../utils/testHelpers'
import { getAllSubjects } from '../../subjectThunks'

describe('getAllSubjects ', () => {
  const mockStore = createMockStore()

  afterEach(() => {
    fetchMock.restore()
  })

  it('should get in order courses for path with no completed or in progress courses', () => {
    const store = mockStore()

    fetchMock.getOnce(
      'https://teacher-dev.getcursor.app/data/v1/subjects/subjectList.json',
      {
        body: testSubjects,
      },
    )

    const expectedActions = [
      { type: 'subjectList/setError', payload: false },
      { type: 'subjectList/setLoading', payload: true },
      { type: 'subjectList/setList', payload: testSubjects },
      {
        type: 'selectedSubject/setSelectedSubject',
        payload: {
          id: '1',
          name: 'testSubjects',
          description: 'used for testing only!',
          emoji: '💩',
          path: '/some-path',
          color: 'red',
        },
      },
      { type: 'subjectList/setLoading', payload: false },
    ]

    return store.dispatch(getAllSubjects()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should fail to get subjects and error', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: {},
        inProgressCourseIds: {},
      },
      profile: {
        outOfOrder: false,
      },
    })

    fetchMock.getOnce(
      'https://teacher-dev.getcursor.app/data/v1/subjects/subjectList.json',
      {
        status: 404,
      },
    )

    const expectedActions = [
      { type: 'subjectList/setError', payload: false },
      { type: 'subjectList/setLoading', payload: true },
      { type: 'subjectList/setError', payload: true },
      { type: 'subjectList/setLoading', payload: false },
    ]

    return store.dispatch(getAllSubjects()).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
