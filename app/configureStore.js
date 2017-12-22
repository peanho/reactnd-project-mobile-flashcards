import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
import * as api from './api'

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
/* 
const preloadedState = {
  decks: {
    byTitle: {
      'Udacity': {
        title: 'Udacity',
        questions: [
          {
            question: 'What is React?',
            answer: 'React is a library for managing user interfaces.'
          },
          {
            question: 'What is a closure?',
            answer: 'A closure is a function combined with its declaring context.'
          }
        ]
      },
      'JavaScript': {
        title: 'JavaScript',
        questions: [
          {
            question: 'What is a closure?',
            answer: 'The combination of a function and the lexical environment whithin which that function was declared'
          }
        ]
      }
    },
    allTitles: ['Udacity', 'JavaScript']
  }
}
 */
const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware.withExtraArgument(api))
)

export default configureStore