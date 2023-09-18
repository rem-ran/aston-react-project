import { configureStore } from '@reduxjs/toolkit';

import user from './userSlicer';
import movies from './moviesSlicer';

const store = configureStore({
  reducer: { user, movies },
});

export default store;
