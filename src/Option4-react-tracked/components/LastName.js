import React from 'react'
import { useTracked } from '../rt/rt'
import useFlash from "../../_shared/useFlash";


// ##################################################################################
// # example component using react-tracked
// ##################################################################################
const LastName = props => {

    const [state, dispatch] = useTracked()
    return (
        <div ref={useFlash()}>
            Last Name:
            <input
                value={state.lastName}
                onChange={(event) => dispatch({ type: 'setLastName', lastName: event.target.value })} />
            {/* {Math.random()} */}
        </div>
    )
}


export default LastName

// BEFORE: import { Context } from '../rt/context'
// BEFORE: const [state, dispatch] = React.useContext(Context)