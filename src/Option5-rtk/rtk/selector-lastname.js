import { createSelector } from 'reselect'

// ##################################################################################
// # RESELECTOR
// ##################################################################################
export const selectLastName = createSelector(
  (state) => state.person,
  (person) => person.lastName
);
export default selectLastName;