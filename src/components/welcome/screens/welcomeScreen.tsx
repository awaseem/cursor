import React, { useRef, useEffect } from 'react'
import { StyleSheet, Text, Animated } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'
import { Container } from '../../container'
import { WelcomeEmoji } from '../components/welcomeEmoji'
import { CourseHeader } from '../../course/components/courseHeader'
import { useTheme } from '../../../hooks/themeHooks'
import { Content } from '../../content'
import { CourseInput } from '../../course/components/courseInput'
import { CourseButton } from '../../course/components/courseButton'

const ANIMATION_DURATION = 800

export function WelcomeScreen() {
  const insets = useSafeArea()
  const { font, colors } = useTheme()
  const animatedEmoji = useRef(new Animated.Value(0)).current
  const animatedWelcomeText = useRef(new Animated.Value(0)).current

  function getAnimatedEmojiStyles() {
    const opacity = animatedEmoji.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [0, 1, 1],
    })

    const rotate = animatedEmoji.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: ['0deg', '45deg', '0deg'],
    })

    return {
      opacity,
      transform: [
        {
          rotate,
        },
      ],
    }
  }

  function getAnimatedWelcomeStyles() {
    const opacity = animatedWelcomeText.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    })

    return {
      opacity,
    }
  }

  useEffect(() => {
    Animated.timing(animatedEmoji, {
      toValue: 1,
      duration: ANIMATION_DURATION / 2,
    }).start()

    Animated.timing(animatedWelcomeText, {
      delay: ANIMATION_DURATION,
      toValue: 1,
      duration: ANIMATION_DURATION,
    }).start()
  }, [])

  return (
    <Container>
      <Content>
        <Animated.View
          style={[styles.emojiContainer, getAnimatedEmojiStyles()]}
        >
          <WelcomeEmoji />
        </Animated.View>
        <Animated.View
          style={[styles.titleContainer, getAnimatedWelcomeStyles()]}
        >
          <CourseHeader title={'Welcome'} />
        </Animated.View>
        <Animated.View
          style={[styles.titleContainer, getAnimatedWelcomeStyles()]}
        >
          <Text style={[font.courseMessage, { textAlign: 'center' }]}>
            {
              'Thanks for downloading! I hope you enjoy the experience and learning something new.'
            }
          </Text>
        </Animated.View>
        <Animated.View style={styles.nameContainer}>
          <CourseInput
            placeholder={'Enter you first name'}
            onChange={text => undefined}
          />
        </Animated.View>
      </Content>
      <Animated.View
        style={[styles.buttonContainer, { paddingBottom: insets.bottom }]}
      >
        <CourseButton
          text={'Hold to continue'}
          marker={'👍'}
          finalColor={colors.primary.buttonSucessColor}
          onHold={() => undefined}
        />
      </Animated.View>
    </Container>
  )
}

const styles = StyleSheet.create({
  emojiContainer: {
    marginTop: 120,
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  nameContainer: {
    paddingHorizontal: 40,
  },
  buttonContainer: {
    alignItems: 'center',
  },
})
