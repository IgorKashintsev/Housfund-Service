import { User } from "../../types";
import { AddUsers, DeleteUser, ChangeUser } from "./types";

export const ADD_USERS = 'USERS::ADD_USERS';
export const DELETE_USER = 'USERS::DELETE_USER';
export const CHANGE_USER = 'USERS::CHANGE_USER';

export const addUsers = (users: User[]): AddUsers => ({
  type: ADD_USERS,
  users,
});

export const deleteUser = (users: User[]): DeleteUser => ({
  type: DELETE_USER,
  users,
});

export const changeUser = (users: User[]): ChangeUser => ({
  type: CHANGE_USER,
  users,
});