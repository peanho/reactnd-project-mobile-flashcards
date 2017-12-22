import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'
import { typography } from '../../styles'
import Question from './Question'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: 'white'
  },
  progressHeader: {
    textAlign: 'left',
    marginLeft: 4,
    ...typography.body2
  },
  content: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  btnCorrect: {
    backgroundColor: 'green',
    width: 100
  },
  btnIncorrect: {
    backgroundColor: 'red',
    width: 100
  }
})

class Card extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { card, progressHeader, onMarkCorrect, onMarkIncorrect } = this.props
    const { question, answer } = card
    return (
      <View style={styles.container}>
        <Text style={styles.progressHeader}>{progressHeader}</Text>
        <Question question={question} answer={answer} style={styles.content} />
        <View style={styles.actions}>
          <Button title="Correct" onPress={onMarkCorrect} color="green" style={styles.btnCorrect} />
          <Button title="Incorrect" onPress={onMarkIncorrect} color="red" style={styles.btnIncorrect} />
        </View>
      </View>
    )
  }
}

export default Card