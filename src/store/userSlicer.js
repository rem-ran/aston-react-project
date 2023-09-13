import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    toggleIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    saveUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { toggleIsLoggedIn, saveUser } = userSlice.actions;

export default userSlice.reducer;
