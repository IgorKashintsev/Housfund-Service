import { ON_ANCHOREL, ON_OPEN_DROPDOWN } from "./actions";

export type DropdownActions = AnchorEl | OpenDropdown;

export interface AnchorEl {
  type: typeof ON_ANCHOREL;
  anchorEl: null | HTMLElement;
};

export interface OpenDropdown {
  type: typeof ON_OPEN_DROPDOWN;
  openDropdown: boolean;
};