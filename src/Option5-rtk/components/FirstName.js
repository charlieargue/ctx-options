import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFlash from "../../_shared/useFlash";
import { setFirstName } from '../rtk/reducer-and-actions-firstname';

// ##################################################################################
// # example component USING RTK (redux toolkit)
// ##################################################################################
const FirstName = props => {

    const { firstName } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div ref={useFlash()}>
            First Name:
            <input
                value={firstName}
                onChange={(event) => dispatch(setFirstName(event.target.value))} />
            {/* {Math.random()} */}
        </div>
    )
}

export default FirstName
