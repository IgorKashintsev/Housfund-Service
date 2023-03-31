import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EditUser, ListState, User } from "../../types";

const initialState: ListState = {
  users: []
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    editUser: (state, action: PayloadAction<EditUser>) => {
      state.users.find(item => item.id === action.payload.id)!
        .name = action.payload.name;
      state.users.find(item => item.id === action.payload.id)!
        .username = action.payload.username;
      state.users.find(item => item.id === action.payload.id)!
        .email = action.payload.email;
      state.users.find(item => item.id === action.payload.id)!
        .phone = action.payload.phone;
      state.users.find(item => item.id === action.payload.id)!
        .website = action.payload.website;
    },
    deleteUser: (state, action: PayloadAction<number>) => {
      state.users.splice(action.payload, 1);
    },
  },
  
});

export const { addUsers, editUser, deleteUser } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;