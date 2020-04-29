import { createMockStore, testCourses } from '../../../utils/testHelpers'
import { setCourseSections } from '../../courseThunks'

describe('setCourseSections ', () => {
  const mockStore = createMockStore()

  it('should only set incomplete courses as stats are empty', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: {},
        inProgressCourseIds: {},
      },
      profile: {
        outOfOrder: false,
      },
    })

    const expectedActions = [
      {
        type: 'courseSectionList/setList',
        payload: [{ title: 'Incomplete', data: [testCourses[0]] }],
      },
    ]

    store.dispatch(setCourseSections(testCourses))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should only set incomplete courses as stats are empty, out of order', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: {},
        inProgressCourseIds: {},
      },
      profile: {
        outOfOrder: true,
      },
    })

    const expectedActions = [
      {
        type: 'courseSectionList/setList',
        payload: [{ title: 'Incomplete', data: testCourses }],
      },
    ]

    store.dispatch(setCourseSections(testCourses))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should only set a single course incomplete as one is completed', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: { '1': true },
        inProgressCourseIds: {},
      },
      profile: {
        outOfOrder: false,
      },
    })

    const expectedActions = [
      {
        type: 'courseSectionList/setList',
        payload: [
          { title: 'Incomplete', data: [testCourses[1]] },
          { title: 'Completed', data: [testCourses[0]] },
        ],
      },
    ]

    store.dispatch(setCourseSections(testCourses))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should only all incomplete as one is completed, out of order', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: { '1': true },
        inProgressCourseIds: {},
      },
      profile: {
        outOfOrder: true,
      },
    })

    const [completedCourse, ...incompleteCourses] = testCourses

    const expectedActions = [
      {
        type: 'courseSectionList/setList',
        payload: [
          { title: 'Incomplete', data: incompleteCourses },
          { title: 'Completed', data: [completedCourse] },
        ],
      },
    ]

    store.dispatch(setCourseSections(testCourses))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should only set one in progress and one completed, no incomplete courses are one is in progress', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: { '1': true },
        inProgressCourseIds: { '2': 0 },
      },
      profile: {
        outOfOrder: false,
      },
    })

    const expectedActions = [
      {
        type: 'courseSectionList/setList',
        payload: [
          { title: 'In Progress', data: [testCourses[1]] },
          { title: 'Completed', data: [testCourses[0]] },
        ],
      },
    ]

    store.dispatch(setCourseSections(testCourses))
    expect(store.getActions()).toEqual(expectedActions)
  })

  it('should only set one in progress, one completed and the rest incomplete due to out of order', () => {
    const store = mockStore({
      stats: {
        completedCourseIds: { '1': true },
        inProgressCourseIds: { '2': 0 },
      },
      profile: {
        outOfOrder: true,
      },
    })

    const [
      completedCourse,
      inProgressCourse,
      ...incompleteCourses
    ] = testCourses

    const expectedActions = [
      {
        type: 'courseSectionList/setList',
        payload: [
          { title: 'In Progress', data: [inProgressCourse] },
          { title: 'Incomplete', data: incompleteCourses },
          { title: 'Completed', data: [completedCourse] },
        ],
      },
    ]

    store.dispatch(setCourseSections(testCourses))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
