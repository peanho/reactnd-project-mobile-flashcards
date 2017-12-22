import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'
import { typography } from '../../styles'

const styles = StyleSheet.create({
  question: {
    ...typography.display1,
    marginBottom: 4
  },
  answer: {
    ...typography.headline,
    marginBottom: 8
  }
})

class Question extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }

  render() {
    const { question, answer, style = {} } = this.props
    const isVisible = this.state.show
    return (
      <View style={style}>
        <Text style={styles.question}>{question}</Text>
        {isVisible
          ? <Text style={styles.answer}>{answer}</Text>
          : <Button
              title="Show answer"
              onPress={this.toggleShow}
            />
        }
      </View>
    )
  }
}

export default Question