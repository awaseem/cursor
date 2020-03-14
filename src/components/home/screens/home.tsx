import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Content } from '../../content'
import { Header } from '../components/header'
import { Container } from '../../container'
import { LanguageCard } from '../components/languageCard'
import { CourseRow } from '../components/courseRow'
import { Screens } from '../../../navigation/screens'
import { useTheme } from '../../../hooks/themeHooks'

export function Home() {
  const navigation = useNavigation()
  const { colors } = useTheme()

  return (
    <Container>
      <Header title={'Hi 👋'} subtitle={'Welcome back, Ali'} />
      <View style={styles.LanguagesContainer}>
        <ScrollView
          style={styles.LanguagesScrollContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <LanguageCard
            onPress={() => undefined}
            title={'JavaScript'}
            emoji={'🤓'}
            color={'#FED18C'}
          />
          <LanguageCard
            onPress={() => alert('Coming soon!')}
            title={'Hypertext Markup Language'}
            emoji={'🖼️'}
            color={'#FF715B'}
          />
          <LanguageCard
            onPress={() => alert('Coming soon!')}
            title={'Cascading Style Sheets'}
            emoji={'🎨'}
            color={'#414770'}
          />
        </ScrollView>
      </View>
      <Header title={'Courses'} />
      <View
        style={{
          borderBottomWidth: StyleSheet.hairlineWidth,
          marginTop: 20,
          marginHorizontal: -20,
          borderColor: colors.primary.separtorColor,
        }}
      />
      <Content>
        <CourseRow
          borderColor={'#FED18C'}
          onPress={() => navigation.navigate(Screens.Coures)}
          title={'Numbers'}
          emoji={'🔢'}
        />
        <CourseRow
          borderColor={'#FED18C'}
          onPress={() => undefined}
          title={'Numbers'}
          emoji={'🔢'}
        />
        <CourseRow
          borderColor={'#FED18C'}
          onPress={() => undefined}
          title={'Numbers'}
          emoji={'🔢'}
        />
        <CourseRow
          borderColor={'#FED18C'}
          onPress={() => undefined}
          title={'Numbers'}
          emoji={'🔢'}
        />
        <CourseRow
          borderColor={'#FED18C'}
          onPress={() => undefined}
          title={'Numbers'}
          emoji={'🔢'}
        />
        <CourseRow
          borderColor={'#FED18C'}
          onPress={() => undefined}
          title={'Numbers'}
          emoji={'🔢'}
        />
        <CourseRow
          borderColor={'#FED18C'}
          onPress={() => undefined}
          title={'Numbers'}
          emoji={'🔢'}
        />
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  LanguagesContainer: {
    marginTop: 40,
  },
  LanguagesScrollContainer: {
    marginHorizontal: -20,
  },
})
