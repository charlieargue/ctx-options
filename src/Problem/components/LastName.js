import React from 'react';
import useFlash from "../../_shared/useFlash";
import { Context } from '../ctx/context';

// ##################################################################################
// # example component consuming ctx
// ##################################################################################
const LastName = props => {

    const [state, dispatch] = React.useContext(Context)
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
