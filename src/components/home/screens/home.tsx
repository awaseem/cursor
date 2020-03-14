import React from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { Content } from '../../content'
import { Header } from '../components/header'
import { Container } from '../../container'
import { LanguageCard } from '../components/languageCard'
import { CourseRow } from '../components/courseRow'

export function Home() {
  return (
    <Container>
      <Header title={'Hi 👋'} subtitle={'Welcome back, Ali'} />
      <View style={styles.LanguagesContainer}>
        <ScrollView
          style={styles.LanguagesScrollContainer}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
          <LanguageCard title={'JavaScript'} emoji={'🤓'} color={'#FED18C'} />
          <LanguageCard
            title={'Hypertext Markup Language'}
            emoji={'🖼️'}
            color={'#FF715B'}
          />
          <LanguageCard
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
        }}
      />
      <Content>
        <CourseRow title={'Numbers'} emoji={'🔢'} />
        <CourseRow title={'Numbers'} emoji={'🔢'} />
        <CourseRow title={'Numbers'} emoji={'🔢'} />
        <CourseRow title={'Numbers'} emoji={'🔢'} />
        <CourseRow title={'Numbers'} emoji={'🔢'} />
        <CourseRow title={'Numbers'} emoji={'🔢'} />
        <CourseRow title={'Numbers'} emoji={'🔢'} />
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
