import React from 'react'
import { connect } from 'react-redux'
import { 
  View,
  StyleSheet
} from 'react-native'
import { selectors as decksSelectors } from '../../decks'
import Card from '../../cards/components/Card'
import SummaryCard from '../../cards/components/SummaryCard'
import { clearLocalNotification, setLocalNotification } from '../../notifications'

const initialState = {
  currentCardIndex: 0,
  score: 0,
  complete: false
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class QuizView extends React.Component {

  static navigationOptions = {
    title: 'Quiz'
  }

  constructor(props) {
    super(props)

    this.state = initialState
  }

  handleMarkCorrect = () => {
    this.setState((prevState, props) => {
      const nexCardIndex = prevState.currentCardIndex + 1
      const complete = nexCardIndex === props.deck.questions.length
      if (complete) {
        this.handleNotification()
      }
      return {
        score: prevState.score + 1,
        currentCardIndex: nexCardIndex,
        complete
      }
    })
  }

  handleMarkIncorrect = () => {
    this.setState((prevState, props) => {
      const nexCardIndex = prevState.currentCardIndex + 1
      const complete = nexCardIndex === props.deck.questions.length
      if (complete) {
        this.handleNotification()
      }
      return {
        currentCardIndex: nexCardIndex,
        complete
      }
    })
  }

  handleNotification = () => {
    clearLocalNotification()
      .then(setLocalNotification)
  }

  handleBackToDeck = () => {
    const { deck, navigation } = this.props
    const { title } = deck
    navigation.navigate('Detail', { title })
  }

  handleRestart = () => {
    this.setState(initialState)
  }

  render() {
    const { deck } = this.props
    const { title, questions } = deck
    const { currentCardIndex, score, complete } = this.state
    return (
      <View style={styles.container}>
        {complete
          ? <SummaryCard 
              score={score}
              onRestart={this.handleRestart}
              onBack={this.handleBackToDeck}
            />
          : <Card
              card={questions[currentCardIndex]}
              progressHeader={`${currentCardIndex} / ${questions.length}`}
              onMarkCorrect={this.handleMarkCorrect}
              onMarkIncorrect={this.handleMarkIncorrect}
            />
        }
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { title } = ownProps.navigation.state.params
  const deck = decksSelectors.getOne(state, title)
  return {
    deck
  }
}

export default connect(mapStateToProps)(QuizView)