import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnchorState } from "../../types";

const initialState: AnchorState = {
  anchorEl: null,
  openDropdown: false,
};

const dropdownSlice = createSlice({
  name: 'dropdown',
  initialState,
  reducers: {
    onAnchorEl: (state, action: PayloadAction<any>) => {
      state.anchorEl = action.payload
    },
    onOpen: (state, action: PayloadAction<boolean>) => {
      state.openDropdown = action.payload
    },
  },
});

export const { onAnchorEl, onOpen } = dropdownSlice.actions;
export const dropdownReducer = dropdownSlice.reducer;