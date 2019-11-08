'use es6';

import React from 'react';

const MovieItem = ({ title, overview }) => {
  return (
    <div className="movie-item">
      <h1>{title}</h1>
      <p>{overview}</p>
    </div>
  );
};

export default MovieItem;
