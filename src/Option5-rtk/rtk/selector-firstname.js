import { createSelector } from 'reselect'

// ##################################################################################
// # RESELECTOR
// ##################################################################################
export const selectFirstName = createSelector(
  (state) => state.person,
  (person) => person.firstName
);