import React from 'react'
import Context1 from '../ctx/context1'
import { useFlash } from "../../_shared/useFlash";


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

FirstName.propTypes = {

}

export default FirstName
