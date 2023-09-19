import { configureStore } from '@reduxjs/toolkit';

import user from './userSlice';
import movies from './moviesSlice';

const store = configureStore({
  reducer: { user, movies },
});

export default store;
