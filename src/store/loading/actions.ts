import { Loading, Error } from "./types";

export const ON_LOADING = 'LOADING::ON_LOADING';
export const ON_ERROR = 'LOADING::ON_ERROR';

export const onLoading = (loading: boolean): Loading => ({
  type: ON_LOADING,
  loading,
});

export const onError = (error: string): Error => ({
  type: ON_ERROR,
  error,
});