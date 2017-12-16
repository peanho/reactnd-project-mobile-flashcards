import React from 'react'
import { connect } from 'react-redux'
import { actions as decksActions } from '../../decks'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    backgroundColor: 'red',
    width: 200,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  },
  btnText: {
    color: 'white'
  },
  input: {
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  }
})

class NewDeckView extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  handleText = name => {
    this.setState({
      name
    })
  }

  handleCreate = () => {
    const { add, navigation } = this.props
    add(this.state.name)
    navigation.navigate('Detail', { name: this.state.name })
  }

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>Deck Name</Text>
        <TextInput
          style={styles.input}
          value={this.state.name}
          onChangeText={this.handleText}
        />
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
          onPress={this.handleCreate}
        >
          <View style={styles.btn}>
            <Text style={styles.btnText}>ADD DECK</Text>
          </View>
        </TouchableNativeFeedback> 
      </KeyboardAvoidingView>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: name => dispatch(decksActions.add(name))
  }
}

export default connect(null, mapDispatchToProps)(NewDeckView)