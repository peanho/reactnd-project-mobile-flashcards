import React from 'react'
import { connect } from 'react-redux'
import { 
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import { actions as cardActions } from '../../cards'
import { typography, colors } from '../../styles'
import { display2 } from '../../styles/typography';

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
      answer: '',
      submitting: false
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
    this.setState({
      question: '',
      answer: '',
      submitting: true
    })
    addCard(card).then(() => this.setState({
      submitting: false
    }))
    
  }

  render() {
    const { question, answer, submitting } = this.state
    const disabled = submitting || !question.length || !answer.length
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        {submitting && <Text>Submitting...</Text>}
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
          disabled={disabled}
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