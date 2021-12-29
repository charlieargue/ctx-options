import React from 'react'
import Context2 from './context2'
import { reducer2 } from './reducer2'

// ##################################################################################
// # PROVIDER #2
// ##################################################################################
const Provider2 = ({ children }) => {
    const initialState2 = {
        lastName: 'Darwin',
    }
    const value2 = React.useReducer(reducer2, initialState2); // NOTE: value is [state, dispatch]
    return (
        <Context2.Provider value={value2}>
            {children}
        </Context2.Provider>
    )
}
Provider2.whyDidYouRender = true
export default Provider2
