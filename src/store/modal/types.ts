import { ON_OPEN_MODALDEL, ON_OPEN_MODALCHANGE } from "./actions";

export type ModalActions = OpenModalDel | OpenModalChange;

export interface OpenModalDel {
  type: typeof ON_OPEN_MODALDEL;
  userId: number;
  openModalDel: boolean;
};

export interface OpenModalChange {
  type: typeof ON_OPEN_MODALCHANGE;
  userId: number;
  openModalChange: boolean;
};