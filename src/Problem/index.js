import React from 'react'
import NotConsumer from '../_shared/NotConsumer'
import FirstName from './components/FirstName'
import LastName from './components/LastName'
import Provider from './ctx/provider'

// ##################################################################################
// # BARE BONES Context scenario illustrating PROBLEM
// ##################################################################################
const Problem = props => {
    return (
        <Provider>
            <FirstName />
            <br />
            <LastName />
            <br />
            <NotConsumer />
        </Provider>
    )
}

export default Problem
