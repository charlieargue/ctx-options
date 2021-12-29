import React from 'react';
import useFlash from "../../_shared/useFlash";
import Context2 from '../ctx/context2';

// ##################################################################################
// # example component consuming ctx
// ##################################################################################
const LastName = props => {

    const [state, dispatch] = React.useContext(Context2)
    return (
        <div ref={useFlash()}>
            Last Name:
            <input
                value={state.lastName}
                onChange={(event) => dispatch({ type: 'setLastName', lastName: event.target.value })} />
            {Math.random()}
        </div>
    )
}

LastName.whyDidYouRender = true
export default LastName
