import React from 'react'
import { RTProvider } from './rt'

// ##################################################################################
// # PROVIDER (via react-tracked)
//   https://github.com/dai-shi/react-tracked
// ##################################################################################
const Provider = ({ children }) => {
    return (
        <RTProvider>
            {children}
        </RTProvider>
    )
}

export default Provider

// BEFORE: import { Context } from './context'
// BEFORE: const value = React.useReducer(reducer, initialState); // NOTE: value is [state, dispatch]
// BEFORE: <Context.Provider value={value}>
