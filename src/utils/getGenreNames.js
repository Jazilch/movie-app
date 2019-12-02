/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */

'use es6';

import { genres } from '../data/genres';

export const getGenreNames = genre_ids => {
  return genre_ids.map(gid => genres.find(({ id }) => id === gid).name);
};
