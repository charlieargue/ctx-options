import React from 'react'
import Provider1 from './ctx/provider1'
import Provider2 from './ctx/provider2'
import FirstName from './components/FirstName'
import LastName from './components/LastName'

// ##################################################################################
// # OPTION 1 - Splitting Context (two ways to split!)
// ##################################################################################
const Option1Split = props => {
    return (
        <Provider1>
            <Provider2>
                <FirstName />
                <br />
                <LastName />
            </Provider2>
        </Provider1>
    )
}

Option1Split.propTypes = {

}
Option1Split.whyDidYouRender = true
export default Option1Split
