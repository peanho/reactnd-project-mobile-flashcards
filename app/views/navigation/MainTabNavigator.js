import React from 'react'
import { TabNavigator } from 'react-navigation'
import NewDeckView from '../components/NewDeckView'
import DeckListView from '../components/DeckListView'

const MainTabNavigator = TabNavigator({
  DeckListView: {
    screen: DeckListView,
    navigationOptions: {
      tabBarLabel: 'Decks'
    }
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: {
      tabBarLabel: 'Add Deck'
    }
  }
})

export default MainTabNavigator