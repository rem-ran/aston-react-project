import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../utils/MovieApi';

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
  return await movieApi
    .getAllMovies()
    .then((movies) => movies)
    .catch((error) => console.log(error));
});

export const fetchFilteredMovies = createAsyncThunk(
  'movie/fetchFilteredMovies',
  async (query) => {
    return await movieApi
      .getFilteredMovies(query)
      .then((filteredMovies) => filteredMovies)
      .catch((error) => console.log(error));
  }
);

const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movies: [],
    filteredMovies: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.docs = action.payload.docs;
    });
    builder.addCase(fetchFilteredMovies.fulfilled, (state, action) => {
      state.filteredMovies = action.payload.docs;
    });
  },
});

export default movieSlice.reducer;
