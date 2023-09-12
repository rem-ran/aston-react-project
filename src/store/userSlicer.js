import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    toggleIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { toggleIsLoggedIn } = userSlice.actions;

export default userSlice.reducer;
