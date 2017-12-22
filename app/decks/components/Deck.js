import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { typography } from '../../styles'

const styles = StyleSheet.create({
  title: {
    ...typography.display2,
    textAlign: 'center',
    marginBottom: 4
  },
  cardCount: {
    ...typography.headline,
    textAlign: 'center'
  }
})

const Deck = props => {
  const { title, cardCount, style = {} } = props
  return (
    <View style={style}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.cardCount}>{`${cardCount} cards`}</Text>
      {props.children}
    </View>
  )
}

export default Deck