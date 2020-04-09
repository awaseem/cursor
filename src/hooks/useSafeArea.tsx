import { useSafeArea, EdgeInsets } from 'react-native-safe-area-context'

export function useSafeAreaWithPadding(): EdgeInsets {
  const insets = useSafeArea()
  return {
    ...insets,
    bottom: insets.bottom + 20,
  }
}
