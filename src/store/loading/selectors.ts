import { StoreState } from "..";

export const selectLoading = (state: StoreState) => state.loading.loading;
export const selectError = (state: StoreState) => state.loading.error;