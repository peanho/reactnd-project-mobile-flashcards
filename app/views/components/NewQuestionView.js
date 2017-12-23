import React from 'react'
import { connect } from 'react-redux'
import { 
  View,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { actions as cardActions } from '../../cards'
import { typography, colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8
  },
  card: {
    margin: 8
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
        <View style={styles.card}>
          <FormLabel>Question</FormLabel>
          <FormInput
            value={this.state.question}
            onChangeText={this.handleChangeQuestion}
          />
          <FormLabel>Answer</FormLabel>
          <FormInput
            value={this.state.answer}
            onChangeText={this.handleChangeAnswer}
          />
        </View>
        <Button
          large
          raised
          title="Submit"
          backgroundColor={colors.COLOR_SECONDARY}
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
    addCard: (card) => dispatchProps.create(title, card)
  }
}

export default connect(null, cardActions, mergeProps)(NewQuestionView)