import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements'
import { typography, colors } from '../../styles'
import Question from './Question'


const styles = StyleSheet.create({
  container: {
    flex: 1
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    margin: 4
  },
  btn: {
    minWidth: 100
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
          <Button
            raised
            large
            title="Correct" 
            onPress={onMarkCorrect}
            backgroundColor={colors.GREEN_900}
            buttonStyle={styles.btn}
          />
          <Button
            raised
            large
            title="Incorrect"
            onPress={onMarkIncorrect}
            backgroundColor={colors.RED_500}
            buttonStyle={styles.btn}
          />
        </View>
      </View>
    )
  }
}

export default Card