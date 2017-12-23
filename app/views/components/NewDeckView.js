import React from 'react'
import { connect } from 'react-redux'
import {
  View,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { actions as decksActions } from '../../decks'
import { typography, colors } from '../../styles'
import { NavigationActions } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    alignItems: 'flex-start',
    margin: 8
  },
  btn: {
    alignSelf: 'flex-end',
    backgroundColor: colors.COLOR_PRIMARY
  }
})

class NewDeckView extends React.Component {

  state = {
    title: ''
  }

  handleText = title => {
    this.setState({
      title
    })
  }

  handleCreate = () => {
    const { add, navigation } = this.props
    const { title } = this.state
    this.setState({ title: '' })
    add(title).then(action => {
      const { title } = action
      const navigateToDeck = NavigationActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({
            routeName: 'Main',
            action: NavigationActions.navigate({ routeName: 'DeckListView' })
          }),
          NavigationActions.navigate({ routeName: 'Deck', params: { title } })
        ]
      })
      navigation.dispatch(navigateToDeck)
    })
  }

  render() {
    const disabled = !this.state.title.length
    const buttonStyles = [styles.btn]
    const textStyles = [styles.btnText]
    if (disabled) {
      buttonStyles.push(styles.btnDisabled)
      textStyles.push(styles.btnTextDisabled)
    }
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={styles.form}>
          <FormLabel>Name</FormLabel>
          <FormInput
            value={this.state.value}
            onChangeText={this.handleText}
          />
        </View>
          <Button
            raised
            title="ADD DECK"
            buttonStyle={styles.btn}
            onPress={this.handleCreate}
          />
      </KeyboardAvoidingView>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: title => dispatch(decksActions.create(title))
  }
}

export default connect(null, mapDispatchToProps)(NewDeckView)