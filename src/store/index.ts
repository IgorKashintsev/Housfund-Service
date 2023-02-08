import { createStore, compose, combineReducers } from 'redux';
import { dropdownReducer } from './dropdown/reducer';
import { modalReducer } from './modal/reducer';
import { loadingReducer } from './loading/reducer';
import { usersReducer } from './users/reducer';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  dropdown: dropdownReducer,
  loading: loadingReducer,
  users: usersReducer,
  modal: modalReducer,
});

export type StoreState = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, composeEnhancers());