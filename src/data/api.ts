const S3_PUBLIC_URL_SUBJECT =
  'https://cursor-development-project.s3-us-west-2.amazonaws.com'
const S3_PUBLIC_URL_SUBJECT_LIST =
  'https://cursor-development-project.s3-us-west-2.amazonaws.com/subjects/subjectList.json'

const GET_FETCH_OPTIONS: RequestInit = {
  method: 'GET',
  headers: {
    Accpet: 'application/json',
    'Cache-Control': 'no-cache', // TODO add conditional only for dev
    'Content-Type': 'application/json',
  },
}

export interface CourseListItem {
  id: string
  name: string
  description: string
  emoji: string
  path: string
}

export interface SubjectListItem extends CourseListItem {
  color: string
}

export enum CourseType {
  outline = 'outline',
  choice = 'choice',
  codingInputChoice = 'codingInputChoice',
}

export type SubjectList = SubjectListItem[]

export type CourseList = CourseListItem[]

export interface CourseItemBody {
  [prop: string]: any
}

export interface CourseItem extends CourseItemBody {
  type: CourseType
}

export type CourseItems = CourseItem[]

export async function getSubjects() {
  const response = await fetch(S3_PUBLIC_URL_SUBJECT_LIST, GET_FETCH_OPTIONS)

  return response.json() as Promise<SubjectList>
}

export async function getCoursesByPath(path: string) {
  const response = await fetch(
    `${S3_PUBLIC_URL_SUBJECT}${path}`,
    GET_FETCH_OPTIONS,
  )

  return response.json() as Promise<CourseList>
}

export async function getCourseByPath(path: string) {
  console.log(`${S3_PUBLIC_URL_SUBJECT}${path}`)
  const response = await fetch(
    `${S3_PUBLIC_URL_SUBJECT}${path}`,
    GET_FETCH_OPTIONS,
  )

  return response.json() as Promise<CourseItems>
}
