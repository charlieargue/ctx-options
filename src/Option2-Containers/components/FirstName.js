import React from 'react';
import useFlash from "../../_shared/useFlash";


// ##################################################################################
// # "dumb" component ..... 
//    • 🔥 React.memo-ized!
//    • 🔥 DOES NOT CONSUME ctx
// ##################################################################################
const FirstName = React.memo(({ firstName, setFirstName }) => {

    return (
        <div style={{
            border: '1px solid red',
            borderRadius: '2px',
            marginTop: '6px',
            padding: '2px',
        }}>
            <div ref={useFlash()}>
                First Name:
                <input
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)} />
                {Math.random()}
            </div>
        </div>
    )
})

FirstName.whyDidYouRender = true
export default FirstName
