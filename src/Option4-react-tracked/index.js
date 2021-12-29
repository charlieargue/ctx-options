import React from 'react'
import NotConsumer from '../_shared/NotConsumer'
import FirstName from './components/FirstName'
import LastName from './components/LastName'
import Provider from './rt/provider'

// ##################################################################################
// # OPTION #4 - react-tracked
//   https://github.com/dai-shi/react-tracked
// ##################################################################################
const Option4ReactTracked = props => {
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

export default Option4ReactTracked
