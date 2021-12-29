import React from 'react'
import { reducer1 } from './reducer1'
import { reducer2 } from './reducer2'
import Context1 from './context1'
import Context2 from './context2'

// ##################################################################################
// # PROVIDER
// ##################################################################################
const Provider = ({ children }) => {
    const initialState1 = {
        firstName: 'Charles',
    }
    const initialState2 = {
        lastName: 'Darwin',
    }
    const value1 = React.useReducer(reducer1, initialState1); // NOTE: value is [state, dispatch]
    const value2 = React.useReducer(reducer2, initialState2); // NOTE: value is [state, dispatch]
    return (
        <Context1.Provider value={value1}>
            <Context2.Provider value={value2}>
                {children}
            </Context2.Provider>
        </Context1.Provider>
    )
}

Provider.propTypes = {

}

export default Provider
