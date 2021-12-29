import React from 'react'
import Context1 from './context1'
import { reducer1 } from './reducer1'

// ##################################################################################
// # PROVIDER #1
// ##################################################################################
const Provider1 = ({ children }) => {
    const initialState1 = {
        firstName: 'Charles',
    }
    const value1 = React.useReducer(reducer1, initialState1); // NOTE: value is [state, dispatch]
    return (
        <Context1.Provider value={value1}>
            {children}
        </Context1.Provider>
    )
}
Provider1.whyDidYouRender = true
export default Provider1
