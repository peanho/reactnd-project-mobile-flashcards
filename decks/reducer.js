import { combineReducers } from 'redux'
import { actions as cardActions } from '../cards'
import { CREATE_SUCCESS, LOAD_ALL_SUCCESS, LOAD_ALL_FAILURE } from './actions'

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
    case LOAD_ALL_SUCCESS:
      return action.decks
    case CREATE_SUCCESS:
      return {
        ...state,
        [action.title]: {
          title: action.title,
          questions: []
        }
      }
    case cardActions.CREATE_SUCCESS:
      return addCard(state, action)
    default:
      return state
  }
}

export const allDecks = (state = [], action) => {
  switch (action.type) {
    case LOAD_ALL_SUCCESS:
      return Object.keys(action.decks)
    case CREATE_SUCCESS:
      return [...state, action.title]
    default:
      return state
  }
}

export default combineReducers({
  byTitle: decksByTitle,
  allTitles: allDecks
})