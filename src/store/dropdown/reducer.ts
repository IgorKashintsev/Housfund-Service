import { Reducer } from "redux";
import { AnchorState } from "../../types";
import { ON_ANCHOREL, ON_OPEN_DROPDOWN } from "./actions";
import { DropdownActions } from "./types";

const initialState: AnchorState = {
  anchorEl: null,
  openDropdown: false,
};

export const dropdownReducer: Reducer<AnchorState, DropdownActions> = (
  state = initialState, 
  action
) => {
  switch(action.type) {
    case ON_ANCHOREL: {
      return {
        ...state,
        anchorEl: action.anchorEl,
      }
    }
    case ON_OPEN_DROPDOWN: {
      return {
        ...state,
        openDropdown: action.openDropdown,
      }
    }
    default:
      return state;
  }
};