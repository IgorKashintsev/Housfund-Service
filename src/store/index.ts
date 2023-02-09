import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { dropdownReducer } from './dropdown/slice';
import { modalReducer } from './modal/slice';
import { loadingReducer } from './loading/slice';
import { usersReducer } from './users/slice';

// export const composeEnhancers =
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  dropdown: dropdownReducer,
  loading: loadingReducer,
  users: usersReducer,
  modal: modalReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
// export const store = createStore(rootReducer, composeEnhancers());
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: [
  //       FLUSH,
  //       REHYDRATE,
  //       PAUSE,
  //       PERSIST,
  //       PURGE,
  //       REGISTER,
  //     ],
  //   },
  // }),
  devTools: process.env.NODE_ENV !== 'production',
});