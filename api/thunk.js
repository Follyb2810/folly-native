import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Create async thunk for user sign-up
export const signUpUser = createAsyncThunk('user/signUp', async (userData) => {
  const response = await yourApiCallForSignUp(userData);
  return response.data; // assuming your API returns data property
});

// Create async thunk for user sign-in
export const signInUser = createAsyncThunk('user/signIn', async (credentials) => {
  const response = await yourApiCallForSignIn(credentials);
  return response.data;
});

// Create a slice to manage user state
const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    isLoading: false,
    isError: false,
    errorMessage: '',
  },
  reducers: {},
  extraReducers: (builder) => {
    // Handle sign-up fulfilled
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = '';
    });

    // Handle sign-up rejected
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    });

    // Handle sign-in fulfilled
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
      state.isError = false;
      state.errorMessage = '';
    });

    // Handle sign-in rejected
    builder.addCase(signInUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    });
  },
});

export default userSlice.reducer;

// Action creators
export const { } = userSlice.actions;

// Selectors
export const selectUserData = (state) => state.user.data;
export const selectUserLoading = (state) => state.user.isLoading;
export const selectUserError = (state) => state.user.isError;
export const selectUserErrorMessage = (state) => state.user.errorMessage;
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser, signInUser, selectUserData, selectUserLoading, selectUserError, selectUserErrorMessage } from './yourUserSlice';

// ...

const dispatch = useDispatch();
const userData = useSelector(selectUserData);
const isLoading = useSelector(selectUserLoading);
const isError = useSelector(selectUserError);
const errorMessage = useSelector(selectUserErrorMessage);

const handleLogin = async () => {
  // Dispatch sign-up action
  dispatch(signUpUser(register));

  // Dispatch sign-in action if sign-up is successful
  if (!isError) {
    dispatch(signInUser({ email: register.email, password: register.password }));
  }
};

// ...
