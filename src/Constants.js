'use es6';

export const AsyncDataStateKeys = {
  DATA: 'data',
  ERROR: 'error',
  LOADING: 'loading'
};

export const AsyncDataDefaultState = {
  [AsyncDataStateKeys.DATA]: null,
  [AsyncDataStateKeys.ERROR]: false,
  [AsyncDataStateKeys.LOADING]: false
};
