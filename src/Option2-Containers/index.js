import React from 'react'
import Provider from './ctx/provider'
import FirstName from './components/FirstName'
import LastName from './components/LastName'
import NotConsumer from '../_shared/NotConsumer'

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

Problem.propTypes = {

}

export default Problem
