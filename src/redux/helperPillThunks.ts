import { AppDispatch } from './rootReducer'
import { helperPill } from './helperPillSlice'

const HIDE_TIMEOUT_ANIMATION = 3000

export function showAndResetHelperPill(
  heading: string,
  message: string,
  duration: number = HIDE_TIMEOUT_ANIMATION,
) {
  return (dispatch: AppDispatch) => {
    dispatch(helperPill.actions.setHeading(heading))
    dispatch(helperPill.actions.setMessage(message))

    dispatch(helperPill.actions.setAnimation(true))
    setTimeout(() => {
      dispatch(helperPill.actions.setAnimation(false))
    }, duration)
  }
}
