/* eslint-disable camelcase */

'use es6';

import React, { Component } from 'react';
import styled from 'styled-components';
import MovieRating from './MovieRating';
import DefaultLoader from './DefaultLoader';

const MoviePageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 40px;
  background: radial-gradient(
      circle at 20% 50%,
      rgba(19.61%, 7.84%, 7.84%, 0.98) 0%,
      rgba(27.45%, 13.73%, 13.73%, 0.88) 100%
    ),
    url(${props => props.backdropFullPath}) no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const MoviePageImage = styled.div`
  text-align: center;
`;

const MoviePageContent = styled.div`
  width: 40vw;
  max-width: 550px;
  @media (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

const MovieTitleWrapper = styled.span`
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const MovieTitle = styled.h1`
  margin: 0;
`;

const ReleaseDate = styled.span`
  margin: 0 10px;
`;

const MovieTagline = styled.span`
  display: block;
  margin-bottom: 10px;
`;

class MoviePage extends Component {
  componentDidMount() {
    const { movieId, getMovie } = this.props;
    getMovie(movieId);
  }

  render() {
    const { movie } = this.props;
    if (!movie.data) {
      return <DefaultLoader />;
    }
    const {
      title,
      overview,
      poster_path,
      vote_average,
      backdrop_path,
      release_date,
      tagline
    } = movie.data;
    const backdropFullPath = `https://image.tmdb.org/t/p/w1400_and_h450_face${backdrop_path}`;
    return (
      <MoviePageWrapper backdropFullPath={backdropFullPath}>
        <MoviePageImage>
          <img
            src={`http://image.tmdb.org/t/p/w342${poster_path}`}
            alt="movie"
          />
        </MoviePageImage>
        <MoviePageContent>
          <MovieTitleWrapper>
            <MovieTitle>{title}</MovieTitle>
            <ReleaseDate>{`(${release_date})`}</ReleaseDate>
          </MovieTitleWrapper>
          <MovieTagline>{tagline}</MovieTagline>
          <MovieRating vote_average={vote_average} />
          <p>{overview}</p>
        </MoviePageContent>
      </MoviePageWrapper>
    );
  }
}

export default MoviePage;
