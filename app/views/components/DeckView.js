import React from 'react'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { 
  View,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native'
import { Button } from 'react-native-elements'
import Deck from '../../decks/components/Deck'
import { getOne } from '../../decks/selectors'
import { typography, colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  deck: {
    flex: 2,
    justifyContent: 'center'
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  addCard: {
    backgroundColor: colors.COLOR_SECONDARY,
  },
  startQuiz: {
    backgroundColor: colors.COLOR_PRIMARY
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
        <Deck 
          title={deck.title} 
          cardCount={deck.questions.length}
          style={styles.deck}
        />
        <View style={styles.actions}>
          <Button
            large
            raised
            title="Start Quiz"
            backgroundColor={colors.COLOR_SECONDARY}
            onPress={this.handleStartQuiz}
          />
          <Button
            large
            raised
            title="Add Card"
            onPress={this.handleAddCard}
            backgroundColor={colors.BLACK}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { title } = ownProps.navigation.state.params
  const deck = getOne(state, title)
  return {
    deck
  }
}

export default connect(mapStateToProps)(DeckView)