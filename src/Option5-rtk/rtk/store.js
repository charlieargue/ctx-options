import { configureStore } from '@reduxjs/toolkit';
import firstNameReducer from './reducer-and-actions-firstname';
import lastNameReducer from './reducer-and-actions-lastname';

// ##################################################################################
// # redux STORE
// ##################################################################################
const store = configureStore({
    reducer: {
        firstName: firstNameReducer,
        lastName: lastNameReducer,
    },
});

export default store;
