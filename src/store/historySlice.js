import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: [],
  reducers: {
    addToHistory: (state, action) => {
      const queryToAdd = action.payload;
      if (!state.includes(queryToAdd)) {
        state.push(queryToAdd);
      }
    },
  },
});

export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;
