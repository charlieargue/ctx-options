import React from 'react';
import { useDispatch } from 'react-redux';
import useFlash from "../../_shared/useFlash";
import { setLastName } from '../rtk/reducer-and-actions';

// ##################################################################################
// # example component USING RTK (redux toolkit)
// ##################################################################################
const LastName = ({ lastName }) => {

    // 🔥 CULPRIT 1? 🔥 const { lastName } = useSelector(state => state.person);
    // 🔥 CULPRIT 2? 🔥 const { lastName } = useLastName();
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