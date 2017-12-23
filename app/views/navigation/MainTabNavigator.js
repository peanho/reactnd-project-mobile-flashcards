import React from 'react'
import { TabNavigator } from 'react-navigation'
import NewDeckView from '../components/NewDeckView'
import DeckListView from '../components/DeckListView'
import { typography, colors } from '../../styles'

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
}, {
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      height: 56,
      backgroundColor: colors.COLOR_PRIMARY,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    },
    labelStyle: {
      ...typography.body1,
      color: colors.WHITE
    },
    indicatorStyle: {
      backgroundColor: colors.COLOR_SECONDARY_LIGHT
    }
  }
})

export default MainTabNavigator