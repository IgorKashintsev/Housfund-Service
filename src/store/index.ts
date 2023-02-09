import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { dropdownReducer } from './dropdown/slice';
import { modalReducer } from './modal/slice';
import { loadingReducer } from './loading/slice';
import { usersReducer } from './users/slice';

const rootReducer = combineReducers({
  dropdown: dropdownReducer,
  loading: loadingReducer,
  users: usersReducer,
  modal: modalReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'production',
});