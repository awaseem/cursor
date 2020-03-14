import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { useTheme } from '../../../hooks/themeHooks'

export interface CourseInputProps {
  placeholder?: string
  onChange: (text: string) => void
}

export function CourseInput({ placeholder, onChange }: CourseInputProps) {
  const { font } = useTheme()
  return (
    <TextInput
      onChangeText={onChange}
      style={[styles.Input, font.codeMessage]}
      placeholder={placeholder ?? 'Enter your response here 💁‍♂️'}
    />
  )
}

const styles = StyleSheet.create({
  Input: {
    marginTop: 40,
    height: 40,
    borderColor: 'gray',
  },
})
