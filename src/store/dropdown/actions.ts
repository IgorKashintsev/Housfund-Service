import { AnchorEl, OpenDropdown } from "./types";

export const ON_ANCHOREL = 'DROPDOWN::ON_ANCHOREL';
export const ON_OPEN_DROPDOWN = 'DROPDOWN::ON_OPEN_DROPDOWN';

export const onAnchorEl = (anchorEl: null | HTMLElement): AnchorEl => ({
  type: ON_ANCHOREL,
  anchorEl,
});

export const onOpen = (openDropdown: boolean): OpenDropdown => ({
  type: ON_OPEN_DROPDOWN,
  openDropdown,
});