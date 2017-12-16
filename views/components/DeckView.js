import React from 'react'
import { connect } from 'react-redux'
import { 
  View,
  Button,
  StyleSheet
} from 'react-native'
import Deck from '../../decks/components/Deck'
import { getOne } from '../../decks/selectors'

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
  }
})

class DeckView extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.name
  })

  render() {
    const { deck } = this.props
    return (
      <View style={styles.container}>
        <Deck name={deck.id} questionsCount={deck.questions.length} />
        <View style={styles.actions}>
          <Button
            title="Add Card"
            color="blue"
            onPress={() => 'Nothing'}
          />
          <Button
            title="Start Quiz"
            color="black"
            onPress={() => 'Nothing'}
          />
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { name } = ownProps.navigation.state.params
  return {
    deck: getOne(state, name)
  }
}

export default connect(mapStateToProps)(DeckView)