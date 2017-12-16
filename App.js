import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './app/configureStore'
import { RootNavigator } from './views'

const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    )
  }
}
