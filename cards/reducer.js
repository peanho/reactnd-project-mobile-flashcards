import { ADD } from './actions'

const cards = (state = [], action) => {
  switch(action.type) {
    case ADD:
      return [...state, action.card]
    default:
      return state
  }
}

export default cards