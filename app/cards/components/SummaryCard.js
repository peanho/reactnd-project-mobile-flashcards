import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { Button } from 'react-native-elements'
import { typography, colors } from '../../styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 4
  },
  score: {
    ...typography.display2,
    textAlign: 'center'
  },
  actions: {
    flex: 1,
    justifyContent: 'space-around'
  }
})

const SummaryCard = props => {
  const { score, onRestart, onBack } = props
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.score}>Your score:</Text>
        <Text style={styles.score}>{score}</Text>
      </View>
      <View style={styles.actions}>
        <Button
          large
          raised
          title="Back to Deck"
          backgroundColor={colors.COLOR_PRIMARY}
          onPress={onBack}
        />
        <Button
          large
          raised
          title="Restart Quiz"
          backgroundColor={colors.BLACK}
          onPress={onRestart}
        />
      </View>
    </View>
  )
}

export default SummaryCard