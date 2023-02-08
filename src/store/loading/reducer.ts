import { Reducer } from "redux";
import { LoadingState } from "../../types";
import { ON_LOADING, ON_ERROR } from "./actions";
import { LoadingActions } from "./types";

const initialState: LoadingState = {
  loading: false,
  error: '',
};

export const loadingReducer: Reducer<LoadingState, LoadingActions> = (
  state = initialState, 
  action
) => {
  switch(action.type) {
    case ON_LOADING: {
      return {
        ...state,
        loading: action.loading,
      }
    }
    case ON_ERROR: {
      return {
        ...state,
        error: action.error,
      }
    }
    default:
      return state;
  }
};