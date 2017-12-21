import { createStore } from "redux"
import rootReducer from './reducer'

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

const configureStore = () => createStore(
  rootReducer,
  preloadedState
)

export default configureStore