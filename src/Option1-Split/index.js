import React from 'react'
import Provider1 from './ctx/provider1'
import Provider2 from './ctx/provider2'
import FirstName from './components/FirstName'
import LastName from './components/LastName'
import NotConsumer from '../_shared/NotConsumer'

// ##################################################################################
// # OPTION 1 - Splitting Context (two ways to split!)
//
// 🔥 NOTE: you can also split "horizontally", namely the STATE from the DISPATCH in SEPARATE CONTEXTS!...
//   - can help in circumstances where components that mutate
//   - are not the same components that read state 
// ##################################################################################
const Option1Split = props => {
    return (
        <Provider1>
            <Provider2>
                <FirstName />
                <br />
                <LastName />
                <br />
                <NotConsumer />
            </Provider2>
        </Provider1>
    )
}

Option1Split.propTypes = {

}
Option1Split.whyDidYouRender = true
export default Option1Split
