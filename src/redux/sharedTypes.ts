export interface GenericApiDataState<T> {
  readonly loading: boolean
  readonly data: T
  readonly error: boolean
}
