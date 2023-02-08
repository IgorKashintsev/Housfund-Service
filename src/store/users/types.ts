import { ADD_USERS, DELETE_USER, CHANGE_USER } from "./actions";
import { User } from "../../types";

export type UsersActions = AddUsers | DeleteUser | ChangeUser;

export interface AddUsers {
  type: typeof ADD_USERS;
  users: User[];
};

export interface DeleteUser {
  type: typeof DELETE_USER;
  users: User[];
};

export interface ChangeUser {
  type: typeof CHANGE_USER;
  users: User[];
};