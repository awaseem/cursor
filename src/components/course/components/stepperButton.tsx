import React from 'react'
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  LayoutChangeEvent,
} from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

const styles = StyleSheet.create({
  Container: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 20,
  },
  ActiveIndicator: {
    position: 'absolute',
    width: 5,
    height: 5,
    right: 0,
    borderRadius: 5,
  },
})

export interface StepperButtonProps {
  readonly text: string
  readonly active?: boolean
  readonly onLayout?: (event: LayoutChangeEvent) => void
  readonly onPress?: () => void
}

export function StepperButton({
  text,
  active,
  onLayout,
  onPress,
}: StepperButtonProps): JSX.Element {
  const { colors, font } = useTheme()

  return (
    <TouchableOpacity
      onPress={onPress}
      onLayout={onLayout}
      style={styles.Container}
    >
      <Text style={font.titleHeading}>{text}</Text>
      {active && (
        <View
          style={[
            styles.ActiveIndicator,
            { backgroundColor: colors.primary.indicatorColor },
          ]}
        />
      )}
    </TouchableOpacity>
  )
}
