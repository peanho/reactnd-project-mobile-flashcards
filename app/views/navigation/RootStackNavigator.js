import React from 'react'
import { StackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import DeckView from '../components/DeckView'
import NewQuestionView from '../components/NewQuestionView'
import QuizView from '../components/QuizView'
import { COLOR_PRIMARY } from '../../styles/colors'

const RootStackNavigator = StackNavigator({
  Main: {
    screen: MainTabNavigator
  },
  Deck: {
    screen: DeckView
  },
  NewQuestion: {
    screen: NewQuestionView
  },
  Quiz: {
    screen: QuizView
  }
}, {
    navigationOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: COLOR_PRIMARY
      }
    }
})

export default RootStackNavigator