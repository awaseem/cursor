import { isProd } from '../utils/env'

const PUBLIC_URL = isProd()
  ? 'https://teacher.getcursor.app/data/v1'
  : 'https://teacher-dev.getcursor.app/data/v1'
const PUBLIC_URL_SUBJECT_LIST = `${PUBLIC_URL}/subjects/subjectList.json`

const GET_FETCH_OPTIONS: RequestInit = {
  method: 'GET',
  headers: {
    Accpet: 'application/json',
    'Cache-Control': 'no-cache',
    'Content-Type': 'application/json',
  },
}

export interface CourseListItem {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly emoji: string
  readonly path: string
}

export interface SubjectListItem extends CourseListItem {
  readonly color: string
}

export enum CourseType {
  outline = 'outline',
  choice = 'choice',
  codingInputChoice = 'codingInputChoice',
}

export type SubjectList = readonly SubjectListItem[]

export type CourseList = readonly CourseListItem[]

export interface CourseItemBody {
  readonly [prop: string]: any
}

export interface CourseItem extends CourseItemBody {
  readonly type: CourseType
}

export type CourseItems = readonly CourseItem[]

export async function getSubjects(): Promise<SubjectList> {
  const response = await fetch(PUBLIC_URL_SUBJECT_LIST, GET_FETCH_OPTIONS)

  return response.json() as Promise<SubjectList>
}

export async function getCoursesByPath(path: string): Promise<CourseList> {
  const response = await fetch(`${PUBLIC_URL}${path}`, GET_FETCH_OPTIONS)

  return response.json() as Promise<CourseList>
}

export async function getCourseByPath(path: string): Promise<CourseItems> {
  const response = await fetch(`${PUBLIC_URL}${path}`, GET_FETCH_OPTIONS)

  return response.json() as Promise<CourseItems>
}
