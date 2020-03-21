import React, { useRef, useEffect, useState } from 'react'
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

export interface WelcomeScreenProps {
  onSuccess: (name: string) => void
}

export function WelcomeScreen({ onSuccess }: WelcomeScreenProps) {
  const insets = useSafeArea()
  const { font, colors } = useTheme()
  const animatedEmoji = useRef(new Animated.Value(0)).current
  const animatedWelcomeText = useRef(new Animated.Value(0)).current

  const [name, setName] = useState('')
  const [buttonColor, setButtonColor] = useState(
    colors.primary.buttonErrorColor,
  )
  const [marker, setMarker] = useState('👎')
  const [reset, setReset] = useState(true)
  const [additionalText, setAdditionalText] = useState<string | undefined>(
    'Please enter your first name',
  )

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

  function getAnimatedOpacityStyles() {
    const opacity = animatedWelcomeText.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    })

    return {
      opacity,
    }
  }

  useEffect(() => {
    if (name) {
      setButtonColor(colors.primary.buttonSucessColor)
      setMarker('👍')
      setReset(false)
      setAdditionalText(undefined)
    }
  }, [name])

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
          style={[styles.titleContainer, getAnimatedOpacityStyles()]}
        >
          <CourseHeader title={'Welcome'} />
        </Animated.View>
        <Animated.View
          style={[styles.titleContainer, getAnimatedOpacityStyles()]}
        >
          <Text style={[font.courseMessage, { textAlign: 'center' }]}>
            {
              'Thanks for downloading! I hope you enjoy the experience and learning something new. If you like the app feel free to give it a rating on the App Store.'
            }
          </Text>
        </Animated.View>
        <Animated.View
          style={[styles.nameContainer, getAnimatedOpacityStyles()]}
        >
          <CourseInput
            placeholder={'Enter you first name'}
            onChange={text => setName(text)}
          />
        </Animated.View>
      </Content>
      <Animated.View
        style={[
          styles.buttonContainer,
          { paddingBottom: insets.bottom },
          getAnimatedOpacityStyles(),
        ]}
      >
        <CourseButton
          text={'Hold to continue'}
          marker={marker}
          reset={reset}
          additionalText={additionalText}
          finalColor={buttonColor}
          onHold={() => {
            if (name) {
              onSuccess(name)
            }
          }}
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
