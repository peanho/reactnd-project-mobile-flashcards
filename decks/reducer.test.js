import reducer from './reducer'
import * as actions from './actions'

it('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual(
    {
      byTitle: {},
      allTitles: []
    }
  )
})

it('should handle ADD', () => {
  expect(
    reducer({}, actions.add('Udacity'))
  ).toEqual(
    {
      byTitle: {
        'Udacity': {
          title: 'Udacity',
          questions: []
        }
      },
      allTitles: ['Udacity']
    }
  )
})