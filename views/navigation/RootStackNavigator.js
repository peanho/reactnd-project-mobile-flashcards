import React from 'react'
import { StackNavigator } from 'react-navigation'

import MainTabNavigator from './MainTabNavigator'
import DeckView from '../components/DeckView'
import NewQuestionView from '../components/NewQuestionView'
import QuizView from '../components/QuizView'

const RootStackNavigator = StackNavigator({
  Main: {
    screen: MainTabNavigator
  },
  Detail: {
    screen: DeckView
  },
  NewQuestion: {
    screen: NewQuestionView
  },
  Quiz: {
    screen: QuizView
  }
})

export default RootStackNavigator