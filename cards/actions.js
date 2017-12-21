export const ADD = 'flashcards/cards/ADD'

export const add = (title, card) => ({
  type: ADD,
  title,
  card
})