import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useFlash from "../../_shared/useFlash";
import { setLastName } from '../rtk/reducer-and-actions';
import selectLastName from '../rtk/selector-lastname';

// ##################################################################################
// # example component USING RTK (redux toolkit)
// ##################################################################################
const LastName = () => {

    const lastName = useSelector(selectLastName)
    const dispatch = useDispatch();

    return (
        <div ref={useFlash()}>
            Last Name:
            <input
                value={lastName}
                onChange={(event) => dispatch(setLastName(event.target.value))} />
            {Math.random()}
        </div>
    )
}

LastName.whyDidYouRender = true;
export default LastName