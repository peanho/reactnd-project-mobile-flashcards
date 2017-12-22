import { createSelector } from 'reselect'

const getByTitle = state => state.decks.byTitle
const getAllTitles = state => state.decks.allTitles
const getTitleFilter = (_, title) => title

export const getAll = createSelector(
  [getAllTitles, getByTitle],
  (allTitles, byTitle) => allTitles.map(title => byTitle[title])
)

export const getOne = createSelector(
  [getByTitle, getTitleFilter],
  (byTitle, title) => byTitle[title]
)