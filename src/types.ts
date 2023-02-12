export interface AnchorState {
  anchorEl: null | HTMLElement;
  openDropdown: boolean;
};

export interface LoadingState {
  loading: boolean;
  error: string;
};

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: 
    {
      lat: string;
      lng: string;
    };
};

export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
};

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
};

export interface ListState {
  users: User[];
};

export interface Modal {
  userId?: number;
  openModalDel?: boolean;
  openModalChange?: boolean;
};

export type ColorButton = 
  "error" | 
  "success" | 
  "inherit" | 
  "primary" | 
  "secondary" | 
  "info" | 
  "warning" | 
  undefined;

export interface EditUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};