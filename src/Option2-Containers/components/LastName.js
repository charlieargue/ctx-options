import React from 'react';
import useFlash from "../../_shared/useFlash";


// ##################################################################################
// # "dumb" component ..... 
//    • 🔥 React.memo-ized!
//    • 🔥 DOES NOT CONSUME ctx
// ##################################################################################
const LastName = React.memo(({ lastName, setLastName }) => {

    return (
        <div style={{
            border: '1px solid red',
            borderRadius: '2px',
            marginTop: '6px',
            padding: '2px',
        }}>
            <div ref={useFlash()}>
                Last Name:
                <input
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)} />
                {Math.random()}
            </div>
        </div>
    )
})

LastName.whyDidYouRender = true
export default LastName
