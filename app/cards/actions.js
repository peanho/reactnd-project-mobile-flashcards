export const CREATE_REQUEST = 'flashcards/cards/CREATE_REQUEST'
export const CREATE_SUCCESS = 'flashcards/cards/CREATE_SUCCESS'
export const CREATE_FAILURE = 'flashcards/cards/CREATE_FAILURE'

export const createRequest = (title, card) => ({
  type: CREATE_REQUEST,
  title,
  card
})

export const createSuccess = (title, card) => ({
  type: CREATE_SUCCESS,
  title,
  card
})

export const create = (title, card) => (dispatch, getState, api) => {
  dispatch(createRequest(title, card))
  return api.addCardToDeck(title, card)
    .then(() => dispatch(createSuccess(title, card)))
}