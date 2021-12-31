import React from 'react';
import { useDispatch } from 'react-redux';
import useFlash from "../../_shared/useFlash";
import { setLastName } from '../rtk/reducer-and-actions';
import useLastName from '../rtk/useLastName';

// ##################################################################################
// # example component USING RTK (redux toolkit)
// ##################################################################################
const LastName = () => {

    // 🔥 CULPRIT? 🔥 const { lastName } = useSelector(state => state.person);
    const { lastName } = useLastName();
    const dispatch = useDispatch();

    return (
        <div ref={useFlash()}>
            Last Name:
            <input
                value={lastName}
                onChange={(event) => dispatch(setLastName(event.target.value))} />
            {/* {Math.random()} */}
        </div>
    )
}

LastName.whyDidYouRender = true;
export default LastName