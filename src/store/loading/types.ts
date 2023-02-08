import { ON_LOADING, ON_ERROR } from "./actions";

export type LoadingActions = Loading | Error;

export interface Loading {
  type: typeof ON_LOADING;
  loading: boolean;
};

export interface Error {
  type: typeof ON_ERROR;
  error: string;
};