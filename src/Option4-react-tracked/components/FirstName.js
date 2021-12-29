import React from 'react'
import { useTracked } from '../rt/rt'
import useFlash from "../../_shared/useFlash";


// ##################################################################################
// # example component using react-tracked
// ##################################################################################
const FirstName = props => {

    const [state, dispatch] = useTracked()
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

// BEFORE: import { Context } from '../rt/context'
// BEFORE: const [state, dispatch] = React.useContext(Context)