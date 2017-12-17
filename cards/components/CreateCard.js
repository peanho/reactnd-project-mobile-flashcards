import React from 'react'
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet
} from 'react-native'
import { typography } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  question: {
    ...typography.body1,
    width: 400,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  },
  answer: {
    ...typography.body1,
    width: 400,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  }
})

class CreateCard extends React.Component {

  constructor(props) {
    super(props)
    this.setState = {
      question: '',
      answer: ''
    }
  }

  handleChangeQuestion = question => {
    this.setState({
      question
    })
  }

  handleChangeAnswer = answer => {
    this.setState({
      answer
    })
  }

  handleAdd = () => {
    const { onAdd } = this.props
    onAdd(this.state)
  }

  render() {

    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <TextInput
          style={styles.question}
          value={this.state.question}
          onChangeText={this.handleChangeQuestion}
        />
        <TextInput
          style={styles.answer}
          value={this.state.answer}
          onChangeText={this.handleChangeAnswer}
        />
      </KeyboardAvoidingView>
    )
  }
}