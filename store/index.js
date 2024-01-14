import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { counterSlice } from "../reducer";
import { abinoSlice } from '../api/abinoSlice';


const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    counter: counterSlice.reducer,
    [abinoSlice.reducerPath]: abinoSlice.reducer,
    // Add other slices or reducers here
  });
  
  // Use getDefaultMiddleware to include the default middleware from Redux Toolkit
  const middleware =  (getDefaultMiddleware) =>getDefaultMiddleware().concat(abinoSlice.middleware)

  export const store = configureStore({
    reducer: rootReducer,
    middleware: middleware,
  });