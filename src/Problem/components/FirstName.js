import React from 'react'
import { Context } from '../ctx/context'

// ##################################################################################
// # example component consuming ctx
// ##################################################################################
const FirstName = props => {


    const [state, dispatch] = React.useContext(Context)
    return (
        <div>
            First Name:
            <input
                value={state.firstName}
                onChange={(event) => dispatch({ type: 'setFirstName', firstName: event.target.value })} />
            {Math.random()}
        </div>
    )
}

FirstName.propTypes = {

}

export default FirstName
