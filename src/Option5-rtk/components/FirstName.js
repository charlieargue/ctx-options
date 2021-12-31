import React from 'react';
import { useDispatch } from 'react-redux';
import useFlash from "../../_shared/useFlash";
import { setFirstName } from '../rtk/reducer-and-actions';
import useFirstName from '../rtk/useFirstName';

// ##################################################################################
// # example component USING RTK (redux toolkit)
// ##################################################################################
const FirstName = () => {

    // 🔥 CULPRIT? 🔥 const { firstName } = useSelector(state => state.person);
    const { firstName } = useFirstName();
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

FirstName.whyDidYouRender = true;
export default FirstName