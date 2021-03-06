import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import NotConsumer from '../_shared/NotConsumer';
import FirstName from './components/FirstName';
import LastName from './components/LastName';
import store from './rtk/store';

// ##################################################################################
// # RTK (REDUX toolkit) scenario illustrating PROBLEM (w/o rtk-query) 
// ##################################################################################
const Option5RTK = () => {

    return (
        <StoreProvider store={store}>
            <FirstName />
            <br />
            <LastName />
            <br />
            <NotConsumer />
        </StoreProvider>
    )
}

export default Option5RTK;
