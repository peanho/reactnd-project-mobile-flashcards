import React from 'react'
import { connect } from 'react-redux'
import { 
  View,
  Button,
  StyleSheet
} from 'react-native'
import Deck from '../../decks/components/Deck'
import { getOne } from '../../decks/selectors'
import { typography } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  actions: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  addCard: {
    padding: 2,
    minWidth: 8,
    backgroundColor: 'blue',
    ...typography.button
  }
})

class DeckView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.title
  })

  handleAddCard = () => {
    const { navigate } = this.props.navigation
    const { deck } = this.props
    navigate('NewQuestion', { title: deck.title })
  }

  handleStartQuiz = () => {
    const { navigate } = this.props.navigation
    const { deck } = this.props
    navigate('Quiz', { title: deck.title })
  }

  render() {
    const { deck } = this.props
    return (
      <View style={styles.container}>
        <Deck title={deck.title} cardCount={deck.questions.length} />
        <View style={styles.actions}>
          <Button
            title="Add Card"
            onPress={this.handleAddCard}
            style={styles.addCard}
          />
          <Button
            title="Start Quiz"
            color="black"
            onPress={this.handleStartQuiz}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { title } = ownProps.navigation.state.params
  return {
    deck: getOne(state, title)
  }
}

export default connect(mapStateToProps)(DeckView)