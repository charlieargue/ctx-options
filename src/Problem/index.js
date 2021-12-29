import React from 'react'
import Provider from './ctx/provider'
import FirstName from './components/FirstName'
import LastName from './components/LastName'

// ##################################################################################
// # BARE BONES Context scenario illustrating PROBLEM
// ##################################################################################
const Problem = props => {
    return (
        <Provider>
            <FirstName />
            <br />
            <LastName />
        </Provider>
    )
}

Problem.propTypes = {

}

export default Problem
