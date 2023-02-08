import { Reducer } from "redux";
import { ListState } from "../../types";
import { ADD_USERS, DELETE_USER, CHANGE_USER } from "./actions";
import { UsersActions } from "./types";

const initialState: ListState = {
  users: []
};

export const usersReducer: Reducer<ListState, UsersActions> = (
  state = initialState, 
  action
) => {
  switch(action.type) {
    case ADD_USERS: {
      return {
        ...state,
        users: action.users,
      }
    }
    case DELETE_USER: {
      return {
        ...state,
        users: action.users,
      }
    }
    case CHANGE_USER: {
      return {
        ...state,
        users: action.users,
      }
    }
    default:
      return state;
  }
};