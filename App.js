import React from 'react'
import { Provider } from 'react-redux'
import { AppLoading } from 'expo'
import { View, StyleSheet } from 'react-native'
import configureStore from './app/configureStore'
import { RootNavigator } from './app/views'
import { actions as decksActions} from './app/decks'
import { setLocalNotification } from './app/notifications'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

const store = configureStore()

export default class App extends React.Component {

  state = {
    isReady: false
  }
  
  componentDidMount() {
    setLocalNotification()
  }

  loadStore = () => store.dispatch(decksActions.loadAll())

  handleLoadingComplete = () => {
    this.setState({
      isReady: true
    })
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this.loadStore}
          onFinish={this.handleLoadingComplete}
          onError={console.warn}
        />
      )
    }
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootNavigator />
        </View>
      </Provider>
    )
  }
}
