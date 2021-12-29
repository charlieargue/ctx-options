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
            <ul>
                <li>simple bare bones CTX example here (based on the RT article plz)</li>
                <li>but with <strong>useFlasher</strong></li>
            </ul>
            <FirstName />
            <LastName />
        </Provider>
    )
}

Problem.propTypes = {

}

export default Problem
