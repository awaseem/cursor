import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

export interface CourseHeaderProps {
  readonly title: string
}

export function CourseHeader({ title }: CourseHeaderProps): JSX.Element {
  const { font } = useTheme()
  return (
    <View>
      <Text style={font.courseHeading}>{title}</Text>
    </View>
  )
}
