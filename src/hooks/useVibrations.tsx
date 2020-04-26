import { useSelector } from 'react-redux'
import * as Haptics from 'expo-haptics'
import { AppState } from '../redux/rootReducer'

export interface VibrationMethods {
  readonly correct: () => void
  readonly incorrect: () => void
}

export function useVibrations(): VibrationMethods {
  const vibrationsDisabled = useSelector(
    (state: AppState) => state.profile.disableVibrations,
  )

  if (vibrationsDisabled) {
    return {
      correct: (): void => undefined,
      incorrect: (): void => undefined,
    }
  }

  return {
    correct: (): Promise<void> =>
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
    incorrect: Haptics.notificationAsync,
  }
}
