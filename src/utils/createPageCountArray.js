/* eslint-disable import/prefer-default-export */

'use es6';

export const createPageCountArray = pageCount => {
  return new Array(pageCount).fill().map((_, i) => 1 + i);
};
