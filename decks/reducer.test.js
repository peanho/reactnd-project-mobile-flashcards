import reducer from './reducer'
import * as actions from './actions'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      byId: {},
      allIds: []
    }
  )
})

it('should handle ADD', () => {
  expect(
    reducer({}, actions.add('Udacity'))
  ).toEqual(
    {
      byId: {
        'Udacity': {
          id: 'Udacity',
          questions: []
        }
      },
      allIds: ['Udacity']
    }
  )
})