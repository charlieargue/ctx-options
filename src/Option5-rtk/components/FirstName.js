import React from 'react';
import { useDispatch } from 'react-redux';
import useFlash from "../../_shared/useFlash";
import { setFirstName } from '../rtk/reducer-and-actions';

// ##################################################################################
// # example component USING RTK (redux toolkit)
// ##################################################################################
const FirstName = ({firstName}) => {

    // 🔥 CULPRIT 1? 🔥 const { firstName } = useSelector(state => state.person);
    // 🔥 CULPRIT 2? 🔥 const { firstName } = useFirstName();
    const dispatch = useDispatch();

    return (
        <div ref={useFlash()}>
            First Name:
            <input
                value={firstName}
                onChange={(event) => dispatch(setFirstName(event.target.value))} />
            {Math.random()}
        </div>
    )
}

FirstName.whyDidYouRender = true;
export default FirstName