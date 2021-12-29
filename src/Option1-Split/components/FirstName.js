import React from 'react';
import useFlash from "../../_shared/useFlash";
import Context1 from '../ctx/context1';


// ##################################################################################
// # example component consuming ctx
// ##################################################################################
const FirstName = props => {

    const [state, dispatch] = React.useContext(Context1)
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

FirstName.whyDidYouRender = true
export default FirstName
