import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

const styles = StyleSheet.create({
  Input: {
    marginTop: 40,
    height: 40,
    borderColor: 'gray',
  },
})

export interface CourseInputProps {
  readonly placeholder?: string
  readonly onChange: (text: string) => void
}

export function CourseInput({
  placeholder,
  onChange,
}: CourseInputProps): JSX.Element {
  const { font } = useTheme()
  return (
    <TextInput
      keyboardType={'ascii-capable'}
      onChangeText={onChange}
      style={[styles.Input, font.codeMessage]}
      placeholder={placeholder ?? 'Enter your response here'}
    />
  )
}
