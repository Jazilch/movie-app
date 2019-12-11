'use es6';

export const AllLinks = ['All', 'all'];

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

export const pageSize = 9;
