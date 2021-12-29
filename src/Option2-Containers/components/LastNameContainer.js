import React from 'react';
import Context from '../ctx/context';
import LastName from './LastName';

// ##################################################################################
// # "SMART" CONTAINER/wrapper 
// ##################################################################################
const LastNameContainer = props => {

    const [state, dispatch] = React.useContext(Context)
    const setLastName = React.useCallback((l) => dispatch({ type: 'setLastName', lastName: l }), [dispatch])

    return (
        <div style={{
            border: '2px solid gray',
            borderRadius: '2px',
            padding: '5px',
        }}>

            <small>LastName Container ({Math.random()})</small>
            <LastName lastName={state.lastName} setLastName={setLastName} />

        </div>
    )
}

LastNameContainer.whyDidYouRender = true
export default LastNameContainer
