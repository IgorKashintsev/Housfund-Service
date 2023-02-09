import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Modal } from "../../types";

const initialState: Modal = {
  userId: 0,
  openModalDel: false,
  openModalChange: false,
};

const modalSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    onUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload
    },
    onOpenModalDel: (state, action: PayloadAction<boolean>) => {
      state.openModalDel = action.payload
    },
    onOpenModalChange: (state, action: PayloadAction<boolean>) => {
      state.openModalChange = action.payload
    },
  },
});

export const { onUserId, onOpenModalDel, onOpenModalChange } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;