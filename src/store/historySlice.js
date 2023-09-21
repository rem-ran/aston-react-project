import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import historyFbService from '../utils/HistoryFirebaseService';

export const addToHistory = createAsyncThunk(
  'history/addToHistory',
  async (query) => {
    try {
      await historyFbService.addToHistory(query);
    } catch (error) {
      console.log(error);
    }
  }
);

export const getSearchHistory = createAsyncThunk(
  'history/getSearchHistory',
  async () => {
    try {
      const history = await historyFbService.getSearchHistory();
      return history;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteFromHistory = createAsyncThunk(
  'history/deleteFromHistory',
  async (query) => {
    try {
      await historyFbService.deleteFromHistory(query);
      return query;
    } catch (error) {
      console.log(error);
    }
  }
);

const historySlice = createSlice({
  name: 'history',
  initialState: { history: [], status: null },
  reducers: {
    resetHistory: (state) => {
      state.history = [];
      state.status = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addToHistory.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(addToHistory.fulfilled, (state, action) => {
      state.status = 'resolved';
    });
    builder.addCase(getSearchHistory.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(getSearchHistory.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.history = action.payload;
    });
    builder.addCase(deleteFromHistory.pending, (state, action) => {
      state.status = 'loading';
    });
    builder.addCase(deleteFromHistory.fulfilled, (state, action) => {
      state.status = 'resolved';
      state.history = state.history.filter((item) => item !== action.payload);
    });
  },
});

export const { resetHistory } = historySlice.actions;

export default historySlice.reducer;
