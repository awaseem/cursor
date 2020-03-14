import React from 'react'
import { View } from 'react-native'
import { Content } from '../../content'
import { Header } from '../components/header'
import { Container } from '../../container'
import { LanguageCard } from '../components/languageCard'

export function Home() {
  return (
    <Container>
      <Header title={'Hi 👋'} subtitle={'Welcome back, Ali'} />
      <LanguageCard
        title={'JavaScript'}
        emoji={'🤓'}
        color={'#F0DB4F'}
        acronym={'JS'}
      />
      <Content>
        <View />
      </Content>
    </Container>
  )
}
