import React from 'react'
import useFlash from "./useFlash";

const NotConsumer = props => {
    return (
        <div
            style={{
                border: '2px solid blue',
                borderRadius: '3px',
                marginTop: '8px',
                padding: '4px',
            }}>
            <div ref={useFlash()}>
                I Do NOT consume any contexts!
                <br />
                {Math.random()}
            </div>
        </div>
    )
}

export default NotConsumer
