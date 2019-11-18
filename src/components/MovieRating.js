/* eslint-disable camelcase */

'use es6';

import React from 'react';
import { CircleProgress } from 'react-gradient-progress';

const MovieRating = ({ vote_average }) => {
  const ratingPercentage = vote_average * 10;
  return (
    <CircleProgress percentage={ratingPercentage} width={70} fontSize="14" />
  );
};

export default MovieRating;
