import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingState } from "../../types";

const initialState: LoadingState = {
  loading: false,
  error: '',
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    onLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    onError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
});

export const { onLoading, onError } = loadingSlice.actions;
export const loadingReducer = loadingSlice.reducer;