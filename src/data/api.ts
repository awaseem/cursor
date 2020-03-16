const S3_PUBLIC_URL_JAVASCRIPT =
  'https://cursor-development-project.s3-us-west-2.amazonaws.com/data/subjects/javaScript'
const COURSE_LIST_FILE_NAME = 'courseList.json'

const GET_FETCH_OPTIONS: RequestInit = {
  method: 'GET',
  headers: {
    Accpet: 'application/json',
    'Content-Type': 'application/json',
  },
}

export interface CourseListItem {
  id: string
  name: string
  emoji: string
  path: string
}

export enum CourseType {
  outline = 'outline',
  choice = 'choice',
  codingInputChoice = 'codingInputChoice',
}

export type CourseList = CourseListItem[]

export interface CourseItemBody {
  [prop: string]: any
}

export interface CourseItem extends CourseItemBody {
  type: CourseType
}

export type CourseItems = CourseItem[]

export async function getCoursesForJavascript() {
  const response = await fetch(
    `${S3_PUBLIC_URL_JAVASCRIPT}/${COURSE_LIST_FILE_NAME}`,
    GET_FETCH_OPTIONS,
  )

  return response.json() as Promise<CourseList>
}

export async function getCourseByPath(path: string) {
  const response = await fetch(
    `${S3_PUBLIC_URL_JAVASCRIPT}${path}`,
    GET_FETCH_OPTIONS,
  )

  return response.json() as Promise<CourseItems>
}
