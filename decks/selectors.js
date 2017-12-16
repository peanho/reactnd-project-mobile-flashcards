import { createSelector } from 'reselect'

const getById = state => state.decks.byId
const getAllIds = state => state.decks.allIds
const getId = (_, name) => name

export const getAll = createSelector(
  [getAllIds, getById],
  (allIds, byId) => allIds.map(id => byId[id])
)

export const getOne = createSelector(
  [getById, getId],
  (byId, id) => byId[id]
)