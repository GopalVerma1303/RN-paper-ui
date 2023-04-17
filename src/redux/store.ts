import { configureStore } from '@reduxjs/toolkit';
import countReducer from './reducers/countReducer';

const rootReducer = {
    count: countReducer,
}

export const store = configureStore({
    reducer: rootReducer
})