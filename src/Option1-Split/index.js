import React from 'react'
import Provider from './ctx/provider'
import FirstName from './components/FirstName'
import LastName from './components/LastName'

// ##################################################################################
// # OPTION 1 - Splitting Context (two ways to split!)
// ##################################################################################
const Option1Split = props => {
    return (
        <Provider>
            <FirstName />
            <br />
            <LastName />
        </Provider>
    )
}

Option1Split.propTypes = {

}

export default Option1Split
