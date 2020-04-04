import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { useTheme } from '../../hooks/themeHooks'

export function HelperPill() {
  const { top } = useSafeArea()
  const { font } = useTheme()

  return (
    <View style={[styles.Container, { top, backgroundColor: '#623CEA' }]}>
      <View style={styles.HeadingContainer}>
        <Text style={font.helperHeading}>💁‍♂️ hello world</Text>
      </View>
      <Text style={font.helperDescription}>hello world</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    right: 10,
    zIndex: 10,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  HeadingContainer: {
    marginBottom: 10,
  },
})
