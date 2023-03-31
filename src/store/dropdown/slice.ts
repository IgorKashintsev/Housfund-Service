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
    onOpenDropdown: (state, action: PayloadAction<AnchorState>) => {
      state.anchorEl = action.payload.anchorEl as null;
      state.openDropdown = action.payload.openDropdown;
    },
  },
});

export const { onOpenDropdown } = dropdownSlice.actions;
export const dropdownReducer = dropdownSlice.reducer;