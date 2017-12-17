export const ADD = 'flashcards/cards/ADD'

export const add = (deckId, card) => ({
  type: ADD,
  deckId,
  card
})