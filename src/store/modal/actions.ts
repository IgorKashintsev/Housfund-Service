import { OpenModalDel, OpenModalChange } from "./types";

export const ON_OPEN_MODALDEL = 'MODAL::ON_OPEN_MODALDEL';
export const ON_OPEN_MODALCHANGE = 'MODAL::ON_OPEN_MODALCHANGE';

export const onOpenModalDel = (
    userId: number, 
    openModalDel: boolean
  ): OpenModalDel => (
  {
    type: ON_OPEN_MODALDEL,
    userId,
    openModalDel
  }
);

export const onOpenModalChange = (
    userId: number, 
    openModalChange: boolean
  ): OpenModalChange => (
  {
    type: ON_OPEN_MODALCHANGE,
    userId,
    openModalChange
  }
);