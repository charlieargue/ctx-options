import React from 'react'
import { Context } from '../ctx/context'

// ##################################################################################
// # example component consuming ctx
// ##################################################################################
const LastName = props => {

    const [state, dispatch] = React.useContext(Context)
    return (
        <div>
            Last Name:
            <input
                value={state.lastName}
                onChange={(event) => dispatch({ type: 'setLastName', lastName: event.target.value })} />
            {Math.random()}
        </div>
    )
}

LastName.propTypes = {

}

export default LastName
