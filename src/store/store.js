import { configureStore } from '@reduxjs/toolkit';

import userReducer from './userSlicer';

const store = configureStore({
  reducer: { userReducer },
});

export default store;
