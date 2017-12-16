import { combineReducers } from 'redux'
import { ADD } from './actions'

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