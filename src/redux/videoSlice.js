import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
  loading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: 'video',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSucces: (state, action) => {
      state.loading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.error = true;
    },
    logout: (state) => {
     state.currentUser= null;
     state.loading= false;
     state.error= false;
    },
  },
});

export const {loginStart ,loginSucces ,loginFailure ,logout} = videoSlice.actions;

export default videoSlice.reducer;