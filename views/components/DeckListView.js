import React from 'react'
import { connect } from 'react-redux'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { selectors as decksSelectors } from '../../decks'
import DeckListEntry  from './DeckListEntry'
import { COLOR_BACKGROUND } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND
  }
})

class DeckListView extends React.Component {

  static navigationOptions = {
    title: 'DECKS'
  }

  renderItem = ({ item }) => {
    return (
      <DeckListEntry deck={item} />
    )
  }

  render() {
    const { decks } = this.props
    return (
      <View style={styles.container}>
        {decks.length
          ? <FlatList
              data={decks}
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