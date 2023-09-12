import { configureStore } from '@reduxjs/toolkit';

import user from './userSlicer';

const store = configureStore({
  reducer: { user },
});

export default store;
