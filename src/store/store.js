import { configureStore } from '@reduxjs/toolkit';

import user from './userSlice';
import movies from './moviesSlice';
import history from './historySlice';

const store = configureStore({
  reducer: { user, movies, history },
});

export default store;
