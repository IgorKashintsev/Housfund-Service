import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListState, User } from "../../types";

const initialState: ListState = {
  users: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    deleteUser: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    changeUser: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
  },
});

export const { addUsers, deleteUser, changeUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;