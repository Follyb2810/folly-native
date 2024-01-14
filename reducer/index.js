import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice =createSlice({
    name:'counter',
    initialState:{counter:0},
    reducers:{
        increment(state,action){
            state.counter ++
        },
        decrement(state,action){
            state.counter --
        },
        Add10(state,action){
            state.counter  += action.payload
        },
    }

})

export const actionsCounter = counterSlice.actions