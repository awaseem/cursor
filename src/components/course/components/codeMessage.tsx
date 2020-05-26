import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CodeView } from '../../common/codeView'
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore

export interface CodeMessageProps {
  readonly message: string
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 30,
  },
})

export function CodeMessage({ message }: CodeMessageProps): JSX.Element {
  return (
    <View style={styles.Container}>
      <CodeView message={message} language="javascript" />
    </View>
  )
}
