import { configureStore } from '@reduxjs/toolkit';
import { toysReducer } from './toysReducer';


export const store = configureStore({
    reducer: {
        toys: toysReducer
    }
}); // adding reducers to store
