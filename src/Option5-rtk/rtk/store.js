import { configureStore } from '@reduxjs/toolkit';
import personReducer from './reducer-and-actions';

const store = configureStore({
    reducer: {
        person: personReducer,
    },
});

export default store;