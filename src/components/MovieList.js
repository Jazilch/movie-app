/* eslint-disable camelcase */

'use es6';

import React, { Component } from 'react';
import styled from 'styled-components/macro';
import MovieItem from './MovieItem';
import DefaultLoader from './DefaultLoader';
import MovieListToolbar from './MovieListToolbar';
import SearchEmptyState from './SearchEmptyState';
import { AllLinks } from '../Constants';

const MovieListGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 767px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

class MovieList extends Component {
  componentDidMount() {
    const { getMovies } = this.props;
    getMovies();
  }

  showMoviePage = id => () => {
    const { history } = this.props;
    history.push(`/movies/${id}`);
  };

  filterBySearch = movies => {
    const { searchTerm } = this.props;
    return movies.title
      .toLowerCase()
      .includes(searchTerm.toString().toLowerCase());
  };

  filterByGenre = movies => {
    const { filterTerm } = this.props;
    if (AllLinks.includes(filterTerm)) {
      return true;
    }
    return movies.genres.includes(filterTerm);
  };

  getFilteredMedia = movies => {
    return movies.filter(this.filterBySearch).filter(this.filterByGenre);
  };

  render() {
    const { movies } = this.props;
    if (!movies.data) return <DefaultLoader />;
    const filteredMovies = this.getFilteredMedia(movies.data);
    return (
      <>
        <MovieListToolbar />
        {!filteredMovies.length && <SearchEmptyState />}
        <MovieListGrid>
          {filteredMovies.map(
            ({ id, title, overview, poster_path, genres }) => {
              return (
                <MovieItem
                  key={id}
                  id={id}
                  title={title}
                  overview={overview}
                  poster_path={poster_path}
                  genres={genres}
                  showMoviePage={this.showMoviePage}
                />
              );
            }
          )}
        </MovieListGrid>
      </>
    );
  }
}

export default MovieList;
