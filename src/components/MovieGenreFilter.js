'use es6';

import React from 'react';

const MovieGenreFilter = () => {
  return (
    <form method="post">
      <select name="Movie Genre Filter">
        <option value="horror">Horror</option>
        <option value="comedy">Comedy</option>
        <option value="action">Action</option>
        <option value="thriller">Thriller</option>
      </select>
    </form>
  );
};

export default MovieGenreFilter;
