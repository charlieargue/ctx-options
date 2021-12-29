import React from 'react'
import Provider from './ctx/provider'
import FirstNameContainer from './components/FirstNameContainer'
import LastNameContainer from './components/LastNameContainer'
import NotConsumer from '../_shared/NotConsumer'

// ##################################################################################
// # BARE BONES Context scenario illustrating PROBLEM
// ##################################################################################
const Problem = props => {
    return (
        <Provider>
            <FirstNameContainer />
            <br />
            <LastNameContainer />
            <br />
            <NotConsumer />
        </Provider>
    )
}


Problem.whyDidYouRender = true
export default Problem
