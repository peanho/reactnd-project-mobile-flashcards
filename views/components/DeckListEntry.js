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
    textAlign: 'center',
  },
  cardSubtitle: {
    textAlign: 'center',
    fontSize: 18
  }
})

const DeckListEntry = props => {
  const { name, cardCount } = props
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{name}</Text>
        <Text style={styles.cardSubtitle}>{`${cardCount} cards`}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default DeckListEntry