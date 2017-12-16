import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { typography } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    ...typography.display2,
    textAlign: 'center'
  },
  subheader: {
    ...typography.subheading,
    textAlign: 'center'
  }
})

const Deck = props => {
  const { name, questionsCount, style } = props
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{name}</Text>
      <Text style={styles.subheader}>{`${questionsCount} cards`}</Text>
      {props.children}
    </View>
  )
}

export default Deck