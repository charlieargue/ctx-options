import React from 'react';
import { reducer } from './reducer'

const initialState = {
    firstName: 'Howard',
    lastName: 'Zinn',
}

// ##################################################################################
// # CUSTOM RT CONSUMER HOOK
// ##################################################################################

// NOTE: useValue returns [state, dispatch]
const useValue = () => React.useReducer(reducer, initialState);
export default useValue;

// --------------------------------------------------------------------------------------------
// NOTE: can be useState or useReducer, "... any hook that returns a tuple [state, dispatch]"
// --------------------------------------------------------------------------------------------
// const initialState = {
//           firstName: 'Harry',
//           lastName: 'Potter',
//       }
// export const useValue = () => useState(initialState);