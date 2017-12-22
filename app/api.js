import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'flashcards'

export const getDecks = () => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(res => {
      const decks = res && JSON.parse(res)
      return decks
    })
}

export const getDeck = id => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(res => {
      const data = JSON.parse(res)
      return data[id]
    })
}

export const saveDeckTitle = title => {
  const type = AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
  return Promise.resolve()
}

export const addCardToDeck = (title, card) => {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(res => {
      const data = JSON.parse(res)
      const deck = data[title]
      const store = {
        ...data,
        [title]: {
          title,
          questions: deck.questions.concat(card)
        }
      }
      AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(store))
    })
}