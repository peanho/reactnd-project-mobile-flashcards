import React from 'react'
import {
  View,
  TouchableOpacity
} from 'react-native'
import Deck from './Deck'

class DeckListEntry extends React.Component {

  handlePressDeck = () => {
    const { title } = this.props.deck
    this.props.onPressDeck(title)
  }

  render() {
    const { deck, style = {} } = this.props
    return (
      <TouchableOpacity
        onPress={this.handlePressDeck}
        style={style}
      >
        <Deck
          title={deck.title}
          cardCount={deck.questions.length}
        />
      </TouchableOpacity>
    )
  }
}

export default DeckListEntry