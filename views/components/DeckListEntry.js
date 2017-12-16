import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    height: 120
  },
  cardTitle: {
    fontFamily: 'Roboto',
    fontSize: 24,
    textAlign: 'center',
  },
  cardSubtitle: {
    textAlign: 'center',
    fontSize: 18
  }
})

const DeckListEntry = props => {
  const { deck, onPress } = props
  const { id, questions } = deck
  const handlePress = id => () => onPress(id)
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress(id)}
    >
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{id}</Text>
        <Text style={styles.cardSubtitle}>{`${questions.length  } cards`}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DeckListEntry