import { createSlice } from '@reduxjs/toolkit';
import { ToysProps } from '../interfaces/interface';
import { storageService } from '../sevices/srorage.service';
import { utilService } from '../sevices/utils.service';

export const toySlice = createSlice({
    name: 'toysReducer',
    initialState: {
        toysList: storageService.loadFromStorage('toys') ? storageService.loadFromStorage('toys') : utilService.createToys(),
        toy: {}
    },
    reducers: {
        add: (state: any, action) => {
            state.toys = [...state.toys, action.payload];
        },
        showToy: (state: any, action) => {
            state.toy = { ...action.payload };
        },
        removeToy: (state: any, action): void => {
            state.toysList = [...state.toysList.filter((toy: ToysProps) => toy.id !== action.payload)]
        }

    }
}); //configure state with actions


export const { add, showToy, removeToy } = toySlice.actions; // exports actions for components
export const toysReducer = toySlice.reducer; // exports reducer for store configuration
