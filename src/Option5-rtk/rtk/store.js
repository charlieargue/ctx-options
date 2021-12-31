import { configureStore } from '@reduxjs/toolkit';
import personReducer from './reducer-and-actions';

const store = configureStore({
    reducer: {
        person: personReducer,
        // OR SHOULD IT RATHER BE: personName: personNameReducer, 
    },
});

export default store;
