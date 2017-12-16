import React from 'react'
import { StackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import DeckView from '../components/DeckView'

const RootStackNavigator = StackNavigator({
  Main: {
    screen: MainTabNavigator
  },
  Detail: {
    screen: DeckView
  }
})

export default RootStackNavigator