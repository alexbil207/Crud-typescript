import { createSlice } from '@reduxjs/toolkit';
import { storageService } from '../sevices/srorage.service';

export const toySlice = createSlice({
    name: 'toysReducer',
    initialState: {
        toysList: storageService.loadFromStorage('toys') ? storageService.loadFromStorage('toys') : [],
        toy: {}
    },
    reducers: {
        add: (state: any, action) => {
            state.toys = [...state.toys, action.payload]; //gets payload and update the reference to new array
        },

    }
}); //configure state with actions


export const { add } = toySlice.actions; // exports actions for components
export const toysReducer = toySlice.reducer; // exports reducer for store configuration
