import { createMockStore, testCourses } from '../../../utils/testHelpers'
import { nextCourseItem } from '../../courseThunks'

describe('nextCourseItem ', () => {
  const mockStore = createMockStore()
  const mockCourse = testCourses[0]

  it('should set in progress item index when going to the next course item', () => {
    const store = mockStore({
      courses: {
        selectedCourse: {
          data: {
            itemIndex: 0,
            completed: false,
            course: mockCourse,
          },
        },
      },
    })

    const expectedActions = [
      { type: 'stats/inProgressCourse', payload: { id: '1', index: 1 } },
      { type: 'selectedCourse/setItemIndex', payload: 1 },
    ]

    store.dispatch(nextCourseItem())
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should never set in progress item index when completed', () => {
    const store = mockStore({
      courses: {
        selectedCourse: {
          data: {
            itemIndex: 0,
            completed: true,
            course: mockCourse,
          },
        },
      },
    })

    const expectedActions = [
      { type: 'selectedCourse/setItemIndex', payload: 1 },
    ]

    store.dispatch(nextCourseItem())
    expect(store.getActions()).toEqual(expectedActions)
  })
})
