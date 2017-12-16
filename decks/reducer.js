import { combineReducers } from 'redux'

export const decksById = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export const allDecks = (state = [], action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  byId: decksById,
  allIds: allDecks
})