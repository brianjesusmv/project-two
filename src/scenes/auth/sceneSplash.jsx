import React, { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { Image, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import TouchableWrapper from '../../components/global/layout/TouchableWrapper'
import DefaultPage from '../../components/DefaultPage'
const brianjesusokLogo = require('../../assets/logo.png');

const SceneSplash = ({ navigation }) => {
  useFocusEffect(
    useCallback(() => {
      const delayedNavigation = setTimeout(() => {
        navigation.navigate('Login')
      }, 3000)
      return () => clearTimeout(delayedNavigation)
    }, [])
  )
  return (
    <TouchableWrapper handlePress={() => navigation.navigate('Login')}>
      <DefaultPage>
        <Image
          style={{ width: 150, height: 150 }}
          source={brianjesusokLogo}
        />
        <View>
          <Text style={{ fontSize: 20 }}>
            Moonlight Games
          </Text>
        </View>
      </DefaultPage>
    </TouchableWrapper>
  )
}

SceneSplash.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default SceneSplash