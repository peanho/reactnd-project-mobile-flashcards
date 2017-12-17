import { combineReducers } from 'redux'
import { ADD } from './actions'
import cardsReducer, { actions as cardActions } from '../cards'

export const decksById = (state = {}, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        [action.id]: {
          id: action.id,
          questions: []
        }
      }
    case cardActions.ADD:
      return {
        ...state,
        [action.deckId]: {
          id: action.deckId,
          questions: cardsReducer(state[action.deckId].questions, action)
        }
      }
    default:
      return state
  }
}

export const allDecks = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.id]
    default:
      return state
  }
}

export default combineReducers({
  byId: decksById,
  allIds: allDecks
})