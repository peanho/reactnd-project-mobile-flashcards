import React from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { selectors as decksSelectors } from '../../decks'
import DeckList from '../../decks/components/DeckList'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class DeckListView extends React.Component {

  handlePress = title => {
    const { navigate } = this.props.navigation
    navigate('Deck', { title })
  }

  render() {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        <DeckList
          decks={decks}
          onPressDeck={this.handlePress}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  const decks = decksSelectors.getAll(state)
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckListView)