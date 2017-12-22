export const LOAD_ALL_REQUEST = 'flashcards/decks/LOAD_ALL_REQUEST'
export const LOAD_ALL_SUCCESS = 'flashcards/decks/LOAD_ALL_SUCCESS'
export const LOAD_ALL_FAILURE = 'flashcards/decks/LOAD_ALL_FAILURE'

export const LOAD_REQUEST = 'flashcards/decks/LOAD_REQUEST'
export const LOAD_SUCCESS = 'flashcards/decks/LOAD_SUCCESS'
export const LOAD_FAILURE = 'flashcards/decks/LOAD_FAILURE'

export const CREATE_REQUEST = 'flashcards/decks/CREATE_REQUEST'
export const CREATE_SUCCESS = 'flashcards/decks/CREATE_SUCCESS'
export const CREATE_FAILURE = 'flashcards/decks/CREATE_FAILURE'

export const REMOVE_REQUEST = 'flashcards/decks/REMOVE_REQUEST'
export const REMOVE_SUCCESS = 'flashcards/decks/REMOVE_SUCCESS'
export const REMOVE_FAILURE = 'flashcards/decks/REMOVE_FAILURE'

export const loadAllRequest = () => ({
  type: LOAD_ALL_REQUEST
})

export const loadAllSuccess = decks => ({
  type: LOAD_ALL_SUCCESS,
  decks
})

export const loadAllFailure = error => ({
  type: LOAD_ALL_FAILURE,
  error
})

export const createRequest = title => ({
  type: CREATE_REQUEST,
  title
})

export const createSuccess = title => {
  return {
    type: CREATE_SUCCESS,
    title
  }
}

export const loadAll = () => (dispatch, getState, api) => {
  dispatch(loadAllRequest())
  return api.getDecks()
    .then(decks => {
      dispatch(loadAllSuccess(decks))
    })
}

export const create = title => (dispatch, getState, api) => {
  dispatch(createRequest(title))
  return api.saveDeckTitle(title)
    .then(() => dispatch(createSuccess(title)))
}