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
    onOpenModalDel: (state, action: PayloadAction<Modal>) => {
      state.userId = action.payload.userId;
      state.openModalDel = action.payload.openModalDel;
    },
    onOpenModalChange: (state, action: PayloadAction<Modal>) => {
      state.userId = action.payload.userId;
      state.openModalChange = action.payload.openModalChange;
    },
  },
});

export const { onOpenModalDel, onOpenModalChange } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;