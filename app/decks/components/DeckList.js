import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableNativeFeedback
} from 'react-native'
import Deck from './Deck'
import DeckListEntry from './DeckListEntry';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: 'white'
  },
  deck: {
    paddingVertical: 20
  }
})

const ListEmptyComponent = <Text>Lets add a deck</Text>

class DeckList extends React.Component {

  renderItem = ({ item: deck }) => {
    const { onPressDeck } = this.props
    return (
      <DeckListEntry
        deck={deck}
        onPressDeck={onPressDeck}
        style={styles.deck}
      />
    )
  }

  keyExtractor = deck => deck.title

  render() {
    const { decks } = this.props
    return (
      <FlatList
        style={styles.container}
        data={decks}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        ListEmptyComponent={ListEmptyComponent}
        contentContainerStyle={styles.container}
      />
    )
  }
}

export default DeckList
