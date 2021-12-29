import React from 'react';
import Context from '../ctx/context';
import FirstName from './FirstName';

// ##################################################################################
// # "SMART" CONTAINER/wrapper 
// ##################################################################################
const FirstNameContainer = props => {

    const [state, dispatch] = React.useContext(Context)
    const setFirstName = React.useCallback((f) => dispatch({ type: 'setFirstName', firstName: f }), [dispatch])

    return (
        <div style={{
            border: '2px solid gray',
            borderRadius: '2px',
            padding: '5px',
        }}>

            <small>FirstName Container ({Math.random()})</small>
            <FirstName firstName={state.firstName} setFirstName={setFirstName} />

        </div>
    )
}

FirstNameContainer.whyDidYouRender = true
export default FirstNameContainer
