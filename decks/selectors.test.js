import reducer from './reducer'
import * as actions from './actions'
import { getAll } from './selectors'
import { combineReducers } from 'redux';

describe('selector recomputes', () => {
  let state = undefined

  const rootReducer = combineReducers({
    decks: reducer
  })

  it('should return the correct final state', () => {
    state = rootReducer(undefined, {})
    expect(getAll(state)).toEqual([])
    expect(getAll(state)).toEqual([])
    expect(getAll.recomputations()).toBe(1)
    state = rootReducer(state, actions.add('Udacity'))
    expect(getAll(state)).toEqual(
      [
        {
          id: 'Udacity',
          questions: []
        }
      ]
    )
    expect(getAll.recomputations()).toBe(2)
  })
})