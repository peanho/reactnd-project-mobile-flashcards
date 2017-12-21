import React from 'react'
import { connect } from 'react-redux'
import { 
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  TextInput
} from 'react-native'
import { actions as cardActions } from '../../cards'
import { typography } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  question: {
    ...typography.body1,
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  },
  answer: {
    ...typography.body1,
    width: 200,
    height: 44,
    padding: 8,
    borderWidth: 1,
    borderColor: '#757575',
    margin: 50
  },
  btnSubmit: {
    ...typography.button,
    backgroundColor: 'red',
    width: 200,
    padding: 10,
    paddingLeft: 50,
    paddingRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5
  }
})


class NewQuestionView extends React.Component {

  static navigationOptions = {
    title: 'Add Card'
  }

  constructor(props) {
    super(props)

    this.state = {
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
    const { addCard } = this.props
    const card = this.state
    addCard(card)
    this.setState({
      question: '',
      answer: ''
    })
  }

  render() {

    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
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
        <Button 
          title="Submit"
          color="black"
          onPress={this.handleAdd}
        />
      </KeyboardAvoidingView>
    )
  }
}

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { title } = ownProps.navigation.state.params
  return {
    ...ownProps,
    addCard: (card) => dispatchProps.add(title, card)
  }
}

export default connect(null, cardActions, mergeProps)(NewQuestionView)