import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../utils/MovieApi';

// Create an async thunk for fetching movies
export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
  return await movieApi
    .getAllMovies()
    .then((movies) => movies)
    .catch((error) => console.log(error));
});

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.docs = action.payload.docs;
    });
  },
});

export default movieSlice.reducer;
