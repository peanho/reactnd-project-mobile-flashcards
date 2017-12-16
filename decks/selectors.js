import { createSelector } from 'reselect'

const getById = state => state.decks.byId
const getAllIds = state => state.decks.allIds

export const getAll = createSelector(
  [getAllIds, getById],
  (allIds, byId) => allIds.map(id => allIds[id])
)