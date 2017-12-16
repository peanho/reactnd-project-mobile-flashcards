import React from 'react'
import { connect } from 'react-redux'
import { 
  View,
  Button
} from 'react-native'

class DeckView extends React.Component {
  static navigationOptions = ({ navigation }) => {
    title: navigation.state.params.name
  }

  render() {
    const { deck } = this.props
    return (
      <View>
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
    )
  }
}

export default DeckView