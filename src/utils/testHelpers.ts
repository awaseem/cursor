import configureMockStore, { MockStoreCreator } from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from '@reduxjs/toolkit'

export type DispatchExts = ThunkDispatch<{}, void, AnyAction>

export const testSubjects = [
  {
    id: '1',
    name: 'testSubjects',
    description: 'used for testing only!',
    emoji: '💩',
    path: '/some-path',
    color: 'red',
  },
  {
    id: '2',
    name: 'testSubjects2',
    description: 'used for testing only 2!',
    emoji: '💩',
    path: '/some-path-2',
    color: 'pink',
  },
]

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

export const testCourseItems = [
  {
    type: 'outline',
    title: 'True or False!',
    content:
      "At this point, you have a pretty good understanding of Strings and Number in JavaScripts. Let's move on to something much easier to understand: Booleans!",
    buttonText: "Let's go",
    marker: '👍',
  },

  {
    type: 'outline',
    title: 'True or False!',
    content:
      'In JavaScript, Strings can be anything within a single or double quote. A Number can be any number you wish. Booleans, on the other hand, can only have two values symbolizing a truthful or false value.',
    buttonText: 'Hmm...',
    marker: '🤔',
  },

  {
    type: 'outline',
    title: 'Truthful',
    content: 'A truthful value in JavaScript is represented as the following:',
    code: 'true',
    buttonText: 'Okay',
    marker: '👌',
  },
]

export function createMockStore(): MockStoreCreator<any, any> {
  const middlewares = [thunk]
  return configureMockStore<{}, DispatchExts>(middlewares)
}
