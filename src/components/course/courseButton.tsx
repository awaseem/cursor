import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { iOSUIKit } from 'react-native-typography'

export interface CourseButtonProps {
  text: string
}

export function CourseButton({ text }: CourseButtonProps) {
  return (
    <View style={styles.Container}>
      <Text style={iOSUIKit.bodyEmphasizedWhiteObject}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1EA896',
    borderRadius: 25,
  },
})
