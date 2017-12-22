import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'
import { typography } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  score: {
    flex: 5,
    ...typography.display2
  },
  actions: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})

const SummaryCard = props => {
  const { score, onRestart, onBack } = props
  const message = `Your score is: ${score}`
  return (
    <View style={styles.container}>
      <Text style={styles.score}>{message}</Text>
      <View style={styles.actions}>
        <Button
          title="Restart Quiz"
          onPress={onRestart}
        />
        <Button
          title="Back to Deck"
          onPress={onBack}
        />
      </View>
    </View>
  )
}

export default SummaryCard