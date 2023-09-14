import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    toggleIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    setUser: (state, action) => {
      state.user = {
        email: action.payload.email,
        uid: action.payload.uid,
      };
    },
    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const { toggleIsLoggedIn, setUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
