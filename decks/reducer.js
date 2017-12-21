import { combineReducers } from 'redux'
import { ADD } from './actions'
import { actions as cardActions } from '../cards'

const addCard = (state, action) => {
  const { title, card } = action
  const deck = state[title]
  return {
    ...state,
    [title]: {
      ...deck,
      questions: deck.questions.concat(action.card)
    }
  }
}

export const decksByTitle = (state = {}, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    case cardActions.ADD:
      return addCard(state, action)
    default:
      return state
  }
}

export const allDecks = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.title]
    default:
      return state
  }
}

export default combineReducers({
  byTitle: decksByTitle,
  allTitles: allDecks
})