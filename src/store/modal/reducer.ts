import { Reducer } from "redux";
import { Modal } from "../../types";
import { ON_OPEN_MODALDEL, ON_OPEN_MODALCHANGE } from "./actions";
import { ModalActions } from "./types";

const initialState: Modal = {
  userId: 0,
  openModalDel: false,
  openModalChange: false,
};

export const modalReducer: Reducer<Modal, ModalActions> = (
  state = initialState, 
  action
) => {
  switch(action.type) {
    case ON_OPEN_MODALDEL: {
      return {
        ...state,
        userId: action.userId,
        openModalDel: action.openModalDel,
      }
    }
    case ON_OPEN_MODALCHANGE: {
      return {
        ...state,
        userId: action.userId,
        openModalChange: action.openModalChange,
      }
    }
    default:
      return state;
  }
};