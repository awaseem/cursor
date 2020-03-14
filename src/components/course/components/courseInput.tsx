import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { codeMessage } from '../../../styles/fonts'

export interface CourseInputProps {
  placeholder?: string
  onChange: (text: string) => void
}

export function CourseInput({ placeholder, onChange }: CourseInputProps) {
  return (
    <TextInput
      onChangeText={onChange}
      style={[styles.Input, codeMessage]}
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
