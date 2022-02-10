import { createSlice } from '@reduxjs/toolkit';


export const formSlice = createSlice({
    name: 'formReducer',
    initialState: {
        formElements: [],
    },
    reducers: {
        add: (state, action) => {
            //state.formElements = [...state.formElements, action.payload]; //gets payload and update the reference to new array
        },
        undo: (state) => {
            state.formElements.pop();
            state.formElements = [...state.formElements]; //gets payload and update the reference to new array
        }
    }
}); //configure state with actions


export const { add, undo } = formSlice.actions; // exports actions for components
export const formReducer = formSlice.reducer; // exports reducer for store configuration