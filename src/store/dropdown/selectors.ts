import { StoreState } from "..";

export const selectAnchorEl = (state: StoreState) => state.dropdown.anchorEl;
export const selectOpenDropdown = (state: StoreState) => state.dropdown.openDropdown;