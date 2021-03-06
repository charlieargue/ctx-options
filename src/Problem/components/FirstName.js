import React from 'react'
import { Context } from '../ctx/context'
import useFlash from "../../_shared/useFlash";

// ##################################################################################
// # example component consuming ctx
// ##################################################################################
const FirstName = props => {

    const [state, dispatch] = React.useContext(Context)
    return (
        <div ref={useFlash()}>
            First Name:
            <input
                value={state.firstName}
                onChange={(event) => dispatch({ type: 'setFirstName', firstName: event.target.value })} />
            {/* {Math.random()} */}
        </div>
    )
}

export default FirstName
