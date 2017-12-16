import React from 'react'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { Constants } from 'expo'
import configureStore from './app/configureStore'
import DeckListView from './views/components/DeckListView'

const RootStackNavigator = StackNavigator(
  {
    Home: {
      screen: DeckListView
    }
  },
  {
    navigationOptions: { headerStyle: { paddingTop: Constants.statusBarHeight } }
  }
)

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStackNavigator />
      </Provider>
    )
  }
}
