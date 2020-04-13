import { useSelector } from 'react-redux'
import * as Haptics from 'expo-haptics'
import { AppState } from '../redux/rootReducer'

export interface VibrationMethods {
  correct: () => void
  incorrect: () => void
}

export function useVibrations(): VibrationMethods {
  const vibrationsDisabled = useSelector(
    (state: AppState) => state.profile.disableVibrations,
  )

  if (vibrationsDisabled) {
    return {
      correct: () => undefined,
      incorrect: () => undefined,
    }
  }

  return {
    correct: () => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium),
    incorrect: Haptics.notificationAsync,
  }
}
