import React from 'react'
import { reducer } from './reducer'
import { Context } from './context'

// ##################################################################################
// # PROVIDER
// ##################################################################################
const Provider = ({ children }) => {
    const initialState = {
        firstName: 'Bart',
        lastName: 'Simpson',
    }
    const value = React.useReducer(reducer, initialState); // NOTE: value is [state, dispatch]
    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

Provider.propTypes = {

}

export default Provider
