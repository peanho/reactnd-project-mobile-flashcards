import React from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { selectors as decksSelectors } from '../../decks'
import DeckListEntry  from './DeckListEntry'

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

class DeckListView extends React.Component {

  renderItem = ({ item }) => {
    return (
      <DeckListEntry deck={item} onPress={this.handlePress} />
    )
  }

  handlePress = id => {
    const { navigate } = this.props.navigation
    navigate('Detail', { name: id })
  }

  render() {
    const { decks } = this.props
    debugger
    return (
      <View style={styles.container}>
        {decks.length
          ? <FlatList
              data={decks}
              keyExtractor={item => item.id}
              renderItem={this.renderItem}
            />
          : <Text>Lets add a deck</Text>
        }
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    decks: decksSelectors.getAll(state)
  }
}

export default connect(mapStateToProps)(DeckListView)