import { StoreState } from "..";

export const selectOpenModalDel = (state: StoreState) => state.modal.openModalDel;
export const selectUserId = (state: StoreState) => state.modal.userId;
export const selectOpenModalChange = (state: StoreState) => state.modal.openModalChange;